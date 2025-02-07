import { Component , EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() text : string  = '';
  @Output() buttonClick = new EventEmitter <void> ();

  handleClick () {
    this.buttonClick.emit();
  }

}
