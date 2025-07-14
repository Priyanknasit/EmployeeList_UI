import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbContextMenuModule, NbIconModule, NbInputModule, NbOptionModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';
import { ConfirmationPopUpComponent } from './confirmation-pop-up/confirmation-pop-up.component';
import { CheckboxCellComponent } from './checkbox-cell/checkbox-cell.component';
import { ActionIconComponent } from './action-icon/action-icon.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FilterItemsComponent } from './filter-items/filter-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { ToastrComponent } from './toastr/toastr.component';

@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbCheckboxModule,
    NbIconModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ThemeModule,
    NbInputModule,
    FormsModule,
    NbContextMenuModule,
    NbTabsetModule,
    NbSelectModule,   
    NbOptionModule,  
  ],
  declarations: [
    ConfirmationPopUpComponent,
    CheckboxCellComponent,
    ActionIconComponent,
    FilterItemsComponent,
    ToastrComponent
  ]
})
export class SharedModule { }
