import { Component, OnInit } from '@angular/core';
import { MoodComponent } from '../mood/mood.component';
import { MoodListComponent } from '../mood-list/mood-list.component';

@Component({
  selector: 'app-edit-mood',
  templateUrl: './edit-mood.component.html',
  styleUrls: ['./edit-mood.component.scss']
})
export class EditMoodComponent implements OnInit {
  selectedMood = null;

  editMood(clickedMood){
    this.selectedMood = clickedMood;
    console.log(clickedMood);
  }

  finishedEditing(){
    this.selectedMood = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
