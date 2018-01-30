import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.scss']
})
export class SleepComponent implements OnInit {

  number = 0;
  days = [];
  hours = [];
  numberForHours = [];
  selectedSleepStart = null;
  selectedDayOne = null;
  selectedDayTwo = null;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 31; i++) {
      this.days.push(`day${i + 1}`);
    }
    for (let i = 0; i < 743; i++) {
      this.numberForHours.push(i);
    }
    for (let i = 0; i < 24; i++) {
      this.hours.push(i);
    }
    console.log(this.numberForHours);
  }

  sleepStart(clickedTime) {
    if (!this.selectedDayOne) {
      this.selectedDayOne = clickedTime;
    } else {
      this.selectedDayTwo = clickedTime;

      console.log(this.selectedDayOne, this.selectedDayTwo);
      this.selectedDayOne = null;
      this.selectedDayTwo = null;
    }
    // this.x.push(clickedTime);
    // if (this.x.length === 2){
    //   console.log(this.x);
    //   for (let i = 0; i < )
    // }
  }

}
