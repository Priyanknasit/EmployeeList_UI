import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TitleService } from '../../services/title.service';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.scss'],
})
export class TitleListComponent implements OnInit {
  source: LocalDataSource = new LocalDataSource();
  rawData: any[] = [];
  searchQuery = '';
  exportMenu = [{ title: 'Excel' }];

  settings = {
    hideSubHeader: true,
    pager: {
      display: true,
      perPage: 10,
    },
    actions: false,
    columns: {
      id: { title: 'ID', type: 'number', width: '60px', filter: false },
      title: { title: 'Title', type: 'string' },
      minSalary: {
        title: 'Min Salary',
        type: 'number',
        valuePrepareFunction: (salary: number) => `₹${salary}`,
      },
      maxSalary: {
        title: 'Max Salary',
        type: 'number',
        valuePrepareFunction: (salary: number) => `₹${salary}`,
      },
    },
  };

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.loadTitles();
  }

  loadTitles(): void {
    this.titleService.getTitles().subscribe({
      next: (data: any[]) => {
        const dataWithIds = data.map((item, index) => ({
          id: index + 1,
          ...item,
        }));
        this.rawData = dataWithIds;
        this.source.load(dataWithIds);
      },
      error: (err) => console.error('Error loading titles', err),
    });
  }

  onSearch(): void {
    const query = this.searchQuery.trim().toLowerCase();
    if (!query) {
      this.source.load(this.rawData);
      return;
    }

    const filtered = this.rawData.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(query)
      )
    );
    this.source.load(filtered);
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.source.load(this.rawData);
  }

  exportToExcel(): void {
    this.source.getAll().then((data) => {
      const exportData = data.map(({ actions, ...rest }) => rest);
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Titles');
      const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

      const blob = new Blob([wbout], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      saveAs(blob, 'titles.xlsx');
    });
  }
}
