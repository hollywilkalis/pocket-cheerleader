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


  submitMood(month, day, mood, moodNotes){
    
    // let moodDay = [];
    // event.preventDefault();
    // moodDay.push(month, day, mood, moodNotes);
    //
    // console.log(moodDay);
  }



}
