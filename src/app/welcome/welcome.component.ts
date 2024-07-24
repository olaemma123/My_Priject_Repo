import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  HelloMessage : string =  "Welcome to my App Practice"

  @Input() someMessage : string = ''

}
