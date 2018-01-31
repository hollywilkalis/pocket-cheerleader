import { Component, OnInit } from '@angular/core';
import { AddMoodComponent } from '../add-mood/add-mood.component';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent implements OnInit {
  days = [];

  editMood(day){
    console.log("EDIT");
  }

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 372; i++){
      this.days.push(i);
    }
  }

}
// expos
