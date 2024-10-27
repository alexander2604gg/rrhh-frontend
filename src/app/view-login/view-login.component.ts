import { Component } from '@angular/core';

@Component({
  selector: 'app-view-login',
  templateUrl: './view-login.component.html',
  styleUrls: ['./view-login.component.css']
})
export class ViewLoginComponent {

  state: boolean | undefined;

  handleLoginResult (isAuthenticate : boolean){
    this.state = isAuthenticate;
  }

}
