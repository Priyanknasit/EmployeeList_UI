import { NgModule } from '@angular/core';
import { NbCardModule, NbContextMenuModule, NbMenuModule } from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { TitleListModule } from './title-list/title-list.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbContextMenuModule,
    EmployeeListModule,
    TitleListModule
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
