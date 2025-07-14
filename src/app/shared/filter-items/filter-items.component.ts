import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-filter-items',
  templateUrl: './filter-items.component.html',
  styleUrls: ['./filter-items.component.scss']
})
export class FilterItemsComponent {
  filterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    protected dialogRef: NbDialogRef<FilterItemsComponent>
  ) {
    this.filterForm = this.fb.group({
      itemCode: [''],
      hsn: [''],
      category: [''],
      salesPriceMin: [''],
      salesPriceMax: [''],
    });
  }

  applyFilters(): void {
    this.dialogRef.close(this.filterForm.value);
  }

  cancel(): void {
    this.dialogRef.close(null);
  }
}
