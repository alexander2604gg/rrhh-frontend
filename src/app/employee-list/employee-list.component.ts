import { catchError, tap } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Component , OnInit  } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  pageSize: number = 10;
  users: any [] = [];

  columns = [
    {field: 'fullName' , header: 'Nombre Completo'},
    {field: 'documentNumber' , header: 'Dni'},
  ];

  constructor(private employeeService : EmployeeService ){}

  ngOnInit() : void {
    this.loadEmployees(0)
  }

  loadEmployees (page : number ): void{
    console.log(page)
    this.employeeService.getEmployeesPaginated(page , this.pageSize).pipe(
      tap(
        (response) =>{
          console.log(response)
          this.users = response.content
        }
      ),
      catchError(
        (error) => {
          console.log("jiji")
          return of(error);
        }
      )
    ).subscribe();
  }


}
