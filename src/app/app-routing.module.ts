import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoginComponent } from './view-login/view-login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { authGuard } from './auth.guard';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewEmployeeListComponent } from './view-employee-list/view-employee-list.component';

const routes: Routes = [
  { path: 'login', component: ViewLoginComponent },
  {path: 'sidebar' , component: SidebarComponent , canActivate: [authGuard]},
  {path: 'employeeList' , component: ViewEmployeeListComponent},
  {path: 'employee/:id' ,component: EmployeeUpdateComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
