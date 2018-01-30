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
    console.log(mood, moodNotes);
  }

}
