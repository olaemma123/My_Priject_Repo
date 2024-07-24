import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() label : string = 'Welcome to login Page'
  @Input() email : string = 'Email address'
  @Input() Passwd : string = 'Password'
@Input() Loginmessage : string = ''
@Input() LoginPmessage : string = ''

}
