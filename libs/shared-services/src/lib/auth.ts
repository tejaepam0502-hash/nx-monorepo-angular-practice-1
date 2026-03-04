import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  isAuthenticated() {
    const isAuthenticated = Math.random();
    return isAuthenticated > 0.5;
  }
}
