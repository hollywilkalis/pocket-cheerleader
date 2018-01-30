import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.scss']
})
export class SleepComponent implements OnInit {

  number = 0;
  months = [];
  days = [];
  hours = [];
  numberForHours = [];
  selectedSleepStart = null;
  selectedDayOne = null;
  selectedDayTwo = null;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 12; i++) {
      this.months.push(i + 1);
    }
    for (let i = 0; i < 31; i++) {
      this.days.push(i + 1);
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

      this.selectedDayOne = this.selectedDayOne.replace(/-/g , " ");
      this.selectedDayTwo = this.selectedDayTwo.replace(/-/g , " ");
      let monthOne = this.selectedDayOne.split(' ')[0];
      let dayOne = this.selectedDayOne.split(' ')[1];
      let dayOneHours = this.selectedDayOne.split(' ')[2];
      let monthTwo = this.selectedDayTwo.split(' ')[0];
      let dayTwo = this.selectedDayTwo.split(' ')[1];
      let dayTwoHours = this.selectedDayTwo.split(' ')[2];

      console.log(dayOne, dayOneHours);
      console.log(this.selectedDayOne);
      console.log(dayTwo, dayTwoHours);
      console.log(this.selectedDayTwo);
      this.selectedDayOne = null;
      this.selectedDayTwo = null;
      dayOne = null;
      dayTwo = null;
      dayOneHours = null;
      dayTwoHours = null;
    }
  }
}
