import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent,WelcomeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'class-app';

  @Output() MessageFromParent : string = "CORE COMPONENT"
  @Output() MessageLFromParent : string = "Pls enter correct email"
  @Output() MessagePFromParent : string = "Pls enter correct Password"
}
