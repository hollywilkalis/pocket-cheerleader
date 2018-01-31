import { Injectable } from '@angular/core';
import { Sleep } from './sleep.model';
import { SLEEPS } from './hardcoded';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SleepService {
  users: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }
  getSleeps() {
    return this.users;
  }

  getSleepById(sleepId: number){
    for (var i = 0; i <= SLEEPS.length - 1; i++) {
      if (SLEEPS[i].quality === sleepId) {
        return SLEEPS[i];
      }
    }
  }

}
