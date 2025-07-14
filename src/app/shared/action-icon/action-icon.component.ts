import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

export interface ActionIconConfig {
  showView?: boolean;
  showEdit?: boolean;
  showDelete?: boolean;
  onView?: (rowData: any) => void;
  onEdit?: (rowData: any) => void;
  onDelete?: (rowData: any) => void;
  showDownload?: boolean;
  onDownload?: (rowData: any) => void; 
}

@Component({
  selector: 'ngx-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss'],
})
export class ActionIconComponent implements ViewCell, OnInit {
  @Input() value: any;
  @Input() rowData: any;

  config: ActionIconConfig = {
    showView: true,
    showEdit: true,
    showDelete: true,
  };

  ngOnInit() {
    if (this.value?.config) {
      this.config = { ...this.config, ...this.value.config };
    }
    if (this.value?.rowData) {
      this.rowData = this.value.rowData;
    }
  }

  onClick(type: 'view' | 'edit' | 'delete', event: MouseEvent): void {
    event.stopPropagation();
    const callbackMap = {
      view: this.config.onView,
      edit: this.config.onEdit,
      delete: this.config.onDelete,
    };
    callbackMap[type]?.(this.rowData);
  }
}
