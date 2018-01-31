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
    // for(let i = 0; i < 372; i++){
    //   this.days.push(i);
    // }
  }

  moodColor(currentMood){
    if (currentDay.mood === "happy"){
      return "happy-color";
      //yellow
    } else if (mood === "energetic"){
      return "energetic-color";
      //green
    } else if (mood === "content"){
      return "content-color";
      //pink
    } else if (mood === "stressed"){
      return "stressed-color";
      //orange
    } else if (mood === "depressed"){
      return "depressed-color";
      //blue
    } else if (mood === "tired"){
      return "tired-color";
      //purple
    } else if (mood === "angry"){
      return "angry-color";
      //red
    }
  }
}
// expos
