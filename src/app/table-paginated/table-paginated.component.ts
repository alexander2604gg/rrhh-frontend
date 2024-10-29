import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-paginated',
  templateUrl: './table-paginated.component.html',
  styleUrls: ['./table-paginated.component.css']
})
export class TablePaginatedComponent {

  @Input() columns : {field: string , header: string} [] = [];
  @Input() data : any[] = [];

}
