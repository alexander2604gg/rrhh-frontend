import { EmployeeService } from './../employee.service';
import { catchError, tap , of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { EmployeeRegister } from '../models/employee-register.model';


@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent {

  employee: EmployeeRegister  = {
    firstName: '',
    middleName: '',
    firstSurname: '',
    secondSurname: '',
    dateOfBirth: new Date(),
    numPhone: '',
    email: '',
    address: '',
    document: {
      documentTypeId: 0,
      documentNumber: ''
    },
    roleId: 0
  };

  textButton: string = "Registrar empleado";

  constructor ( private employeeService : EmployeeService) {}

  registerEmployee() {
    this.employeeService.registerEmployee(this.employee).pipe(
      tap((response) => {
        console.log(response);
      }),
      catchError((error) => {
        console.error(error);
        return of(null);
      })
    ).subscribe();
  }


}
