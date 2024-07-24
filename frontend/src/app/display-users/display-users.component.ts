import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})

export class DisplayUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  viewUser(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(['/users', id]);
    }
  }
  
  deleteUser(id: number | undefined) {
    if (id !== undefined) {
      this.userService.deleteUser(id).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      }, error => console.log(error));
    }
  }
}


