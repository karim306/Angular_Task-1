import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  registerUser() {
    if (this.username.trim() === '' || this.password.trim() === '') {
      this.errorMessage = 'Username and password cannot be empty.';
      return;
    }

    // const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    // if (!passwordRegex.test(this.password)) {
    //   this.errorMessage =
    //     'Password must be at least 6 characters long and include an uppercase letter and a number.';
    //   return;
    

    try {
      this.userService.registerUser(this.username, this.password);
      this.errorMessage = ''; // Clear the error on success
    } catch (error: any) {
      this.errorMessage = error.message; // Handle error from the service
    }
  }
}
