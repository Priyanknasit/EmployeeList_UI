import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  @Input() employee: any; // passed from dialog context

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: NbDialogRef<AddEmployeeComponent>,
    private employeeService: EmployeeService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(200)]],
      ssn: ['', [Validators.required, Validators.maxLength(15)]],
      dob: ['', Validators.required],
      address: ['', Validators.maxLength(400)],
      city: ['', Validators.maxLength(200)],
      state: ['', Validators.maxLength(200)],
      zip: ['', Validators.maxLength(10)],
      phone: ['', Validators.maxLength(20)],
      joinDate: ['', Validators.required],
      exitDate: [''],
      title: ['', Validators.required],
      salary: ['', [Validators.required, Validators.min(0)]],
    });

    if (this.employee) {
      const patchedEmployee = {
        ...this.employee,
        dob: this.convertStringToDate(this.employee.dob),
        joinDate: this.convertStringToDate(this.employee.joinDate),
        exitDate: this.employee.exitDate ? this.convertStringToDate(this.employee.exitDate) : null,
      };

      this.form.patchValue(patchedEmployee);
    }
  }

  private convertStringToDate(str: string): Date | null {
    if (!str) return null;
    const [day, month, year] = str.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  addEmployee(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const dto = this.form.value;

    const employeePayload = {
      name: dto.name,
      ssn: dto.ssn,
      dob: dto.dob,
      address: dto.address?.trim() || null,
      city: dto.city?.trim() || null,
      state: dto.state?.trim() || null,
      zip: dto.zip?.trim() || null,
      phone: dto.phone?.trim() || null,
      joinDate: dto.joinDate,
      exitDate: dto.exitDate || null,
      title: dto.title,
      salary: dto.salary,
    };

    this.employeeService.addEmployee(employeePayload).subscribe({
      next: () => {
        this.toastrService.success('Employee added successfully', 'Success');
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error('Failed to add employee', err);
        this.toastrService.danger('Failed to add employee', 'Error');
      },
    });
  }

  dismiss(): void {
    this.dialogRef.close(false);
  }
}
