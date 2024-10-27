import { AuthService } from './../auth.service';
import { Component ,Output ,EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    username: string = '';
    password: string = '';

    @Output() loginSuccess = new EventEmitter<boolean>();

    constructor(private authService: AuthService){}

    authenticate() {

      const credentials = {
        userName : this.username,
        password : this.password
      };

      this.authService.login(credentials).pipe(
        tap((response) => {
          this.authService.setToke(response.jwt)
          this.loginSuccess.emit(true);
        }),
        catchError((error) => {
          this.loginSuccess.emit(false);
          return of(error);
        })
      ).subscribe();

    }

}
