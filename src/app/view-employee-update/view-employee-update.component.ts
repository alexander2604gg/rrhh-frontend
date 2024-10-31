import { ActivatedRoute } from '@angular/router';
import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employee-update',
  templateUrl: './view-employee-update.component.html',
  styleUrls: ['./view-employee-update.component.css']
})
export class ViewEmployeeUpdateComponent implements OnChanges , OnInit{

  isDisabled : boolean = true;
  textButton : string = 'Actualizar empleado';
  employeeId : string | null  = '';

  constructor(private route : ActivatedRoute ){}

  ngOnInit(){
    this.employeeId = this.route.snapshot.paramMap.get('id');
  }

  ngOnChanges(){
    this.employeeId = this.route.snapshot.paramMap.get('id');
  }

  enableFields (){
    this.isDisabled = false;
  }


}
