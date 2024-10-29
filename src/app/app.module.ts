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
    ViewEmployeeListComponent
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
