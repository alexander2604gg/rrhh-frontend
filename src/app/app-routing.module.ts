import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLoginComponent } from './view-login/view-login.component';
import { authGuard } from './auth.guard';
import { ViewEmployeeListComponent } from './view-employee-list/view-employee-list.component';
import { ViewEmployeeUpdateComponent } from './view-employee-update/view-employee-update.component';
import { ViewEmployeeRegisterComponent } from './view-employee-register/view-employee-register.component';

const routes: Routes = [
  { path: 'login', component: ViewLoginComponent },
  {path: 'employeeList' , component: ViewEmployeeListComponent , canActivate : [authGuard]},
  {path: 'employee/:id' ,component: ViewEmployeeUpdateComponent , canActivate : [authGuard]},
  {path: 'nuevoEmpleado' , component: ViewEmployeeRegisterComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
