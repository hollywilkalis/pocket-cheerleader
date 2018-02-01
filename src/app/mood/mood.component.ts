import { Component, OnInit } from '@angular/core';
import { AddMoodComponent } from '../add-mood/add-mood.component';
import { EditMoodComponent } from '../edit-mood/edit-mood.component';
import { MoodListComponent } from '../mood-list/mood-list.component';
import { Mood } from './mood.model';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent implements OnInit {
  test: string = "Mood Testing";
  moods: Mood[] = [
    new Mood(1, 1, "tired", "didn't get a lot of sleep because of medication"),
    new Mood(1, 2, "tired", "didn't get a lot of sleep today either"),
    new Mood(1, 3, "happy", "changed medication and got some rest"),
    new Mood(1, 4, "angry", "got unexpected visitors")
  ];

  // selectedMood = null;
  //
  //   editMood(clickedMood){
  //     this.selectedMood = clickedMood;
  //     console.log(clickedMood);
  //   }
  //
  //   finishedEditing(){
  //     this.selectedMood = null;
  //   }

  constructor() { }

  ngOnInit() {
    // for(let i = 0; i < 372; i++){
    //   this.days.push(i);
    // }
  }
  moodColor(currentMood){
    if (currentMood.mood === "happy"){
      return "happy-color";
    } else if (currentMood.mood === "energetic"){
      return "energetic-color";
    } else if (currentMood.mood === "content"){
      return "content-color";
    } else if (currentMood.mood === "stressed"){
      return "stressed-color";
    } else if (currentMood.mood === "depressed"){
      return "depressed-color";
    } else if (currentMood.mood === "tired"){
      return "tired-color";
    } else if (currentMood.mood === "angry"){
      return "angry-color";
    }
  }
}
