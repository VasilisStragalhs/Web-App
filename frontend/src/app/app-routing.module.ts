import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { UserDetailComponent } from './user-detail/user-detail.component'; // Import UserDetailComponent

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'users', component: DisplayUsersComponent },
  { path: 'users/:id', component: UserDetailComponent } // Add this route for user details
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
