import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [UserService]
})

export class WelcomeComponent implements OnInit {
  users: FirebaseListObservable<any[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log(this.users);
  }

}
