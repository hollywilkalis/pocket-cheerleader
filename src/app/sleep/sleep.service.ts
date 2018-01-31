import { Injectable } from '@angular/core';
import { Sleep } from './sleep.model';
import { SLEEPS } from './hardcoded';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SleepService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
    // this.users.forEach(element => {
    //         console.log(element[0]);
    //     });
  }
  getSleeps() {
    return this.users;
  }

  addSleep(newSleep: Sleep) {
    console.log(this.users);

    this.users.push(newSleep);

}

  getSleepById(sleepId: number){
    // for (var i = 0; i <= SLEEPS.length - 1; i++) {
    //   if (SLEEPS[i].quality === sleepId) {
    //     return SLEEPS[i];
    //   }
    // }
  }

}
