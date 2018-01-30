import { Component, OnInit, Input } from '@angular/core';


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
    event.preventDefault();
    console.log(mood, moodNotes);
  }

  // if (this.mood === "happy"){
  //   let color = yellow
  // }
  // if (this.mood === "energetic"){
  //   let color = green
  // }
  // if (this.mood === "content"){
  //   let color = pink
  // }
  // if (this.mood === "stressed"){
  //   let color = orange
  // }
  // if (this.mood === "depressed"){
  //   let color = blue
  // }
  // if (this.mood === "tired"){
  //   let color = purple
  // }
  // if (this.mood === "angry"){
  //   let color = red
  // }

}
