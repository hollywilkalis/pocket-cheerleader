import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent implements OnInit {
  boxes = [];

  editMood(){
    console.log("edit!");
  }

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 372; i++){
      this.boxes.push(i);
    }
  }

}
