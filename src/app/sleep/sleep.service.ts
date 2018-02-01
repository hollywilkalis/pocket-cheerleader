import { Injectable } from '@angular/core';
import { Sleep } from './sleep.model';
import { SLEEPS } from './hardcoded';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SleepService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('sleeps');
  }
  getUsers() {
    return this.users;
  }

  addSleep(newSleep: Sleep) {
    this.users.push(newSleep);
  }
}
