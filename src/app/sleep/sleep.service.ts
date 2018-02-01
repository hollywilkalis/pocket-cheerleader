import { Injectable } from '@angular/core';
import { Sleep } from './sleep.model';
import { SLEEPS } from './hardcoded';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SleepService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('sleeps');
    // this.moods = database.list('moods');
  }
  getSleeps() {
    return this.users;
  }

  getUserById(userId: string) {
    return this.database.object('users/' + userId);
  }
//   updateSleep(localUpdatedSleep){
//
// }

  addSleep(newSleep: Sleep) {
    // var userEntryInFireBase = this.getUserById(newSleep.$key);
    this.users.push(newSleep);

  }

}
