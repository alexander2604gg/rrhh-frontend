import { EmployeeUpdate } from './../models/employee-update.model';
import { catchError, tap } from 'rxjs';
import { EmployeeService } from './../employee.service';
import { Component, OnInit , Input , SimpleChanges , OnChanges } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit, OnChanges {

  textButton: string = 'Enviar';
  @Input() employeeId: string | null = '';
  @Input() isDisabled: boolean = true;
  fullName: string = '';
  numPhone: string = '';
  dateOfBirth: string = '';
  address: string = '';
  documentType: string = '';
  documentNumber: string = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['employeeId'] && this.employeeId) {
      this.getDataofEmployee(parseInt(this.employeeId));
    }
  }

  getDataofEmployee(employeeId: number): void {
    this.employeeService.getFullInfoEmployee(employeeId).pipe(
      tap((response) => {
        this.fullName = response.fullName;
        this.numPhone = response.numPhone;
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

  updateEmployee () : void {

    const employeeUpdate : EmployeeUpdate = {
      numPhone : this.numPhone,
      address : this.address
    };

    if (this.employeeId) {
      this.employeeService.updateEmployee(parseInt(this.employeeId) , employeeUpdate).pipe(
        tap((response) => {
          console.log(response)
        }),
        catchError((error) => {
          return of(error)
        })
      ).subscribe();
    }


  }

}
