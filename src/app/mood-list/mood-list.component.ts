import { Component, OnInit } from '@angular/core';
import { Mood } from '../mood/mood.model';

@Component({
  selector: 'app-mood-list',
  templateUrl: './mood-list.component.html',
  styleUrls: ['./mood-list.component.scss']
})
export class MoodListComponent implements OnInit {
  // test: string = "Mood Testing";
  // moods: Mood[] = [
  //   new Mood(1, 1, "tired", "didn't get a lot of sleep because of medication"),
  //   new Mood(1, 2, "tired", "didn't get a lot of sleep today either"),
  //   new Mood(1, 3, "happy", "changed medication and got some rest"),
  //   new Mood(1, 4, "angry", "got unexpected visitors")
  // ];

  constructor() { }

  ngOnInit() {
  }

  // moodColor(currentMood){
  //   if (currentMood.mood === "happy"){
  //     return "happy-color";
  //   } else if (currentMood.mood === "energetic"){
  //     return "energetic-color";
  //   } else if (currentMood.mood === "content"){
  //     return "content-color";
  //   } else if (currentMood.mood === "stressed"){
  //     return "stressed-color";
  //   } else if (currentMood.mood === "depressed"){
  //     return "depressed-color";
  //   } else if (currentMood.mood === "tired"){
  //     return "tired-color";
  //   } else if (currentMood.mood === "angry"){
  //     return "angry-color";
  //   }
  // }

}
