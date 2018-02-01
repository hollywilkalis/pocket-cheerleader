import { Injectable } from '@angular/core';
import { Sleep } from './sleep.model';
import { SLEEPS } from './hardcoded';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class SleepService {
  users: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('sleeps');
<<<<<<< HEAD
    // this.moods = database.list('moods');
=======
>>>>>>> a4ae88cce4716cea1736f28c2012b9907c1dc401
  }
  getUsers() {
    return this.users;
  }

  addSleep(newSleep: Sleep) {
<<<<<<< HEAD
    // var userEntryInFireBase = this.getUserById(newSleep.$key);
=======
>>>>>>> a4ae88cce4716cea1736f28c2012b9907c1dc401
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
