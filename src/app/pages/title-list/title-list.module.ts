import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule, NbInputModule, NbOptionModule, NbSelectModule, NbTabsetModule } from '@nebular/theme';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleListComponent } from './title-list.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbIconModule,
    NbInputModule,
    FormsModule,
    NbContextMenuModule,
    NbTabsetModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbSelectModule,   
    NbOptionModule,     
  ],
  declarations: [
    TitleListComponent
  ],
})
export class TitleListModule {
}
