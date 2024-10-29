import { catchError, tap } from 'rxjs';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employeeId: string | null = null;
  fullName: string = '';
  phoneNumber: string = '';
  dateOfBirth: string = '';
  address: string = '';
  documentType: string = '';
  documentNumber: string = '';

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.employeeId = this.route.snapshot.paramMap.get('id');
    if (this.employeeId) {
      this.getDataofEmployee(parseInt(this.employeeId));
    }
  }

  getDataofEmployee(employeeId: number): void {
    this.employeeService.getFullInfoEmployee(employeeId).pipe(
      tap((response) => {
        console.log(response  )
        this.fullName = response.fullName;
        this.phoneNumber = response.numPhone;
        this.dateOfBirth = response.dateOfBirth;
        this.address = response.address;
        this.documentType = response.documentType;
        this.documentNumber = response.documentNumber;
      }),
      catchError((error) => {
        console.error('Error al obtener datos del empleado:', error);
        return of(error);
      })
    ).subscribe();
  }
}
