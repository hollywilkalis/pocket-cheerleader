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











// this.users.forEach(element => {
//         console.log(element[0]);
//     });
//   updateSleep(localUpdatedSleep){
//
// }
// var userEntryInFireBase = this.getUserById(newSleep.$key);
// getUserById(userId: string) {
//   return this.database.object('users/' + userId);
// }
