import { Component , Input , OnInit , OnChanges} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnChanges {

  @Input() isAuthenticated : boolean | undefined;
  message : string = "";
  alertClass : string = ""

  ngOnInit() {

  }

  ngOnChanges() {
    this.updateMessage();
  }

  private updateMessage() {
    console.log(this.isAuthenticated);
    if (this.isAuthenticated === undefined) {
      this.message = ""; // No muestra nada si es undefined
      this.alertClass = ""; // Limpia la clase de alerta
    } else if (this.isAuthenticated) {
      this.message = "Credenciales correctas";
      this.alertClass = "alert-success";
    } else {
      this.message = "Credenciales incorrectas";
      this.alertClass = "alert-danger";
    }
}

}
