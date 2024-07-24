import { Component } from '@angular/core';
import { User, Address } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  user: User = {
    name: '',
    surname: '',
    gender: '',
    birthdate: new Date(),
    workAddress: { address: '' },
    homeAddress: { address: '' }
  };

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      data => {
        console.log('User created:', data);
        this.router.navigate(['/users']);
      },
      error => console.log(error)
    );
  }
}

