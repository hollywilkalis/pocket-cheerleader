import { Component, OnInit, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-mood',
  templateUrl: './add-mood.component.html',
  styleUrls: ['./add-mood.component.scss']
})
export class AddMoodComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  submitMood(mood, moodNotes){
    let day = [];
    event.preventDefault();
    console.log(mood, moodNotes);
    day.push(mood);
    if (mood === "happy"){
      // let color = yellow
    } if (mood === "energetic"){
      // let color = green
    } if (mood === "content"){
      // let color = pink
    } if (mood === "stressed"){
      // let color = orange
    } if (mood === "depressed"){
      // let color = blue
    } if (mood === "tired"){
      // let color = purple
    } if (mood === "angry"){
      // let color = red
    }
    console.log(day);
  }


}
