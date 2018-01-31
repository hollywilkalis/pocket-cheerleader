import { Injectable } from '@angular/core';
import { SleepService } from './sleep/sleep.service';
import { User } from './user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }
  getUserById(userId: string) {
    return this.database.object('users/' + userId);
  }
    getUsers() {
      console.log("hello" + this.users);
      return this.users;
    }
}
