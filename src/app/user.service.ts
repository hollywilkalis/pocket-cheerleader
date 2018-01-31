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

  getUsers() {
    console.log(this.users);
    return this.users;

  }
}
