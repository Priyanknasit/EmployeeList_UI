import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-checkbox-cell',
  templateUrl: './checkbox-cell.component.html',
  styleUrls: ['./checkbox-cell.component.scss'],
})
export class CheckboxCellComponent implements OnInit {
  @Input() rowData: any;
  @Input() isChecked = false;
  @Output() checkedChange = new EventEmitter<{ row: any; checked: boolean }>();

  ngOnInit(): void {
    // Defensive check if needed
    if (typeof this.isChecked !== 'boolean') {
      this.isChecked = false;
    }
  }

  onCheckboxChange(checked: boolean): void {
    if (this.rowData) {
      this.checkedChange.emit({ row: this.rowData, checked });
    }
  }
}
