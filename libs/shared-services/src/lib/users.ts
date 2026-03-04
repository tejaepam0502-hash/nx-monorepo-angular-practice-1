import { Injectable } from '@angular/core';
import { users } from './common.data';

@Injectable({
  providedIn: 'root',
})
export class User {

  getUser(id: number) {
    const user = users.find(user => user.id === id);
    if(!user) {
      throw new Error('User not found');
    } else {
      return user;
    }
  }
}
  