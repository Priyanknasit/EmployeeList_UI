import {
  Component,
  OnInit,
  Inject,
  OnDestroy,
} from '@angular/core';
import { NbDialogService, NbMenuService, NB_WINDOW } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { filter, map } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

import { EmployeeService } from '../../services/employee.service';
import { ConfirmationPopUpComponent } from '../../shared/confirmation-pop-up/confirmation-pop-up.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

interface Employee {
  employeeId: number;
  name: string;
  ssn: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  joinDate: string;
  exitDate: string | null;
  title: string;
  salary: number;
}

interface ColumnConfig {
  key: string;
  title: string;
  visible: boolean;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  source: LocalDataSource = new LocalDataSource();
  rawData: any[] = [];
  selectedRows = new Set<any>();
  searchQuery = '';
  exportMenu = [{ title: 'Excel' }];

  columnConfig: ColumnConfig[] = [
    { key: 'id', title: 'ID', visible: true },
    { key: 'name', title: 'Name', visible: true },
    { key: 'title', title: 'Title', visible: true },
    { key: 'salary', title: 'Salary', visible: true },
    { key: 'phone', title: 'Phone', visible: true },
    { key: 'ssn', title: 'SSN', visible: false },
    { key: 'dob', title: 'Date of Birth', visible: false },
    { key: 'address', title: 'Address', visible: false },
    { key: 'city', title: 'City', visible: false },
    { key: 'state', title: 'State', visible: false },
    { key: 'zip', title: 'Zip', visible: false },
    { key: 'joinDate', title: 'Join Date', visible: false },
    { key: 'exitDate', title: 'Exit Date', visible: false },
  ];

  disabledColumns: string[] = [];
  selectedColumns: string[] = this.columnConfig.filter(c => c.visible).map(c => c.key);

  get toggleableColumns(): ColumnConfig[] {
    return this.columnConfig;
  }

  settings = {
    hideSubHeader: true,
    pager: {
      display: true,
      perPage: 10,
    },
    actions: false,
    columns: {},
  };

  constructor(
    private employeeService: EmployeeService,
    private dialogService: NbDialogService,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window: Window
  ) {}

  ngOnInit(): void {
    this.applyColumnVisibility();
    this.loadEmployees();

    this.nbMenuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'export-menu'),
        map(({ item }) => item.title)
      )
      .subscribe((title: string) => {
        if (title === 'Excel') this.exportToExcel();
      });
  }

  ngOnDestroy(): void {}

  onColumnSelectionChange(selected: string[]): void {
    this.selectedColumns = selected;
    this.applyColumnVisibility();
  }

  applyColumnVisibility(): void {
    const newColumns: { [key: string]: any } = {};
    this.columnConfig.forEach(column => {
      if (this.selectedColumns.includes(column.key)) {
        newColumns[column.key] = this.settings.columns[column.key] ?? this.getColumnDefinition(column.key);
      }
    });
    this.settings.columns = newColumns;
    this.settings = { ...this.settings };
  }

  getColumnDefinition(key: string): any {
    const common = { type: 'string', filter: true, sort: true };
    if (key === 'id') return { title: 'ID', type: 'number', width: '60px', filter: false };
    if (key === 'salary') return {
      title: 'Salary',
      type: 'number',
      filter: false,
      sort: true,
      valuePrepareFunction: (salary: number) => `₹${salary}`,
    };
    return {
      title: this.columnConfig.find(c => c.key === key)?.title ?? key,
      ...common,
    };
  }

  loadEmployees(): void {
    this.employeeService.getEmployees('', '').subscribe({
      next: (data: Employee[]) => {
        const dataWithIds = data.map((item, index) => ({
          id: index + 1,
          ...item,
          dob: item.dob ? this.formatDate(item.dob) : '',
          joinDate: item.joinDate ? this.formatDate(item.joinDate) : '',
          exitDate: item.exitDate ? this.formatDate(item.exitDate) : '',
        }));

        this.rawData = dataWithIds;
        this.source.load(dataWithIds);
      },
      error: (err) => console.error('Error loading employees', err),
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  onSearch(): void {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      this.source.load(this.rawData);
      return;
    }

    const filtered = this.rawData
      .filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(query)
        )
      )
      .map((item, index) => ({
        id: index + 1,
        ...item,
      }));

    this.source.load(filtered);
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.source.load(this.rawData);
  }

  onAddEmployee(): void {
    this.dialogService
      .open(AddEmployeeComponent, {
        context: {},
        closeOnBackdropClick: false,
        hasScroll: true,
      })
      .onClose.subscribe((shouldRefresh: boolean) => {
        if (shouldRefresh) {
          this.loadEmployees();
        }
      });
  }

  exportToExcel(): void {
    this.source.getAll().then((data) => {
      const exportData = data.map(({ actions, ...rest }) => rest);
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
      const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

      const blob = new Blob([wbout], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      saveAs(blob, 'employees.xlsx');
    });
  }

  deleteSelected(): void {
    this.dialogService.open(ConfirmationPopUpComponent, {});
  }
}
