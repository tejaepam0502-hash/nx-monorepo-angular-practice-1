import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auth, User } from '@nx-monorepo-test/shared-services';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
    <h1>NxWelcome to Shell!</h1>
    <p>Hi NxWelcome {{userData?.name}}</p>
    <p>{{userData?.age}} years old</p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome  implements OnInit {
  
  authService = inject(Auth);
  userService = inject(User);
  isUserAuthenticated: boolean = false;
  userData: any;

  ngOnInit(): void {
    this.isUserAuthenticated = this.authService.isAuthenticated();
    console.log("======================", this.isUserAuthenticated);
    if(this.isUserAuthenticated) {
      console.log('User is authenticated');
      this.getUsers();
    }
  }

  getUsers() {
    console.log('Fetching users...');
    try{
      this.userData = this.userService.getUser(1);
    } catch(error) {
      console.error(error);
    }
  }
}
