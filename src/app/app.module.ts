import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ViewLoginComponent } from './view-login/view-login.component';
import { MessageComponent } from './message/message.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TablePaginatedComponent } from './table-paginated/table-paginated.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { ViewEmployeeListComponent } from './view-employee-list/view-employee-list.component';
import { ViewEmployeeUpdateComponent } from './view-employee-update/view-employee-update.component';
import { ButtonComponent } from './button/button.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { ViewEmployeeRegisterComponent } from './view-employee-register/view-employee-register.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewLoginComponent,
    MessageComponent,
    CompanyLoginComponent,
    SidebarComponent,
    TablePaginatedComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    ViewEmployeeListComponent,
    ViewEmployeeUpdateComponent,
    ButtonComponent,
    EmployeeRegisterComponent,
    ViewEmployeeRegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
