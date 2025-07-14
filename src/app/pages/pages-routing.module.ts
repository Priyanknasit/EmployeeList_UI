import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TitleListComponent } from './title-list/title-list.component';

const routes: Routes = [ {
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'employee-list',
      component: EmployeeListComponent,
    },
    {
      path: 'title-lists',
      component: TitleListComponent,
    },
    {
      path: '',
      redirectTo: 'employee-list',
      pathMatch: 'full',
    }
  ],
} ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PagesRoutingModule {
}
