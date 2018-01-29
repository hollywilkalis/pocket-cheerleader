import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.scss']
})
export class SleepComponent implements OnInit {

  days = [];
  hours = [];
  selectedSleepStart = null;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 31; i++) {
      this.days.push(`day${i + 1}`)
    }
    for (let i = 0; i < 24; i++) {
      this.hours.push(i)
    }
  }

  sleepStart(clickedTime) {
    this.selectedSleepStart = clickedTime;
    console.log(this.selectedSleepStart);
  }

}
