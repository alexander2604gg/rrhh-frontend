import { EmployeeUpdate } from './models/employee-update.model';
import { EmployeeRegister } from './models/employee-register.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private API_URL_EMPLOYEE = 'http://localhost:8080/api/v1/employees';


  constructor(private http : HttpClient) { }

  getEmployeesPaginated (page: number , size: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL_EMPLOYEE}/paginated?page=${page}&size=${size}`)
  }

  getFullInfoEmployee (employeeId : number) {
    return this.http.get<any>(`${this.API_URL_EMPLOYEE}/${employeeId}`)
  }

  registerEmployee(employeeRegister: EmployeeRegister): Observable<any> {
    return this.http.post<any>(`${this.API_URL_EMPLOYEE}`, employeeRegister);
  }

  updateEmployee (employeeId : number , employeeUpdate :EmployeeUpdate) {
    return this.http.patch<any>(`${this.API_URL_EMPLOYEE}/${employeeId}` , employeeUpdate);
  }


}
