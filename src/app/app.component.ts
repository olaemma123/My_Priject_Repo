import { Component, Input,EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthenticationModule } from '../authentication/authentication.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    LoginComponent, 
    RegisterComponent,
    WelcomeComponent,
    AuthenticationModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'class-app';

  @Output() MessageFromParent : string = "CORE COMPONENT"
  @Output() MessageLFromParent : string = "Pls enter correct email"
  @Output() MessagePFromParent : string = "Pls enter correct Password"

  recievingMessage : string = "";

  onMessageRecieve(message:string){
    this.recievingMessage=message 

  }

  onClientRecieveMessage : string = "";

  onMessageReceieced(message:string){
    this.onClientRecieveMessage=message
  }

  
}
