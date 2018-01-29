import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.scss']
})
export class MoodComponent implements OnInit {
  boxes = [];

  constructor() { }

  ngOnInit() {
    for(let i = 0; i < 403; i++){
      this.boxes.push(i);
    }
  }

}
