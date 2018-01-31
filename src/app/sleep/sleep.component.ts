import { Component, OnInit } from '@angular/core';
import { Sleep } from './sleep.model';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.scss']
})
export class SleepComponent implements OnInit {
  masterSleepList: Sleep[] = [
    new Sleep(2, 1, "22", "8", 1),
    new Sleep(2, 2, "23", "7", 3)
  ];
  selectedSleep = null;

  submitForm(month: number, day: number, startTime: string, wakeTime: string, quality: number){
    var newSleepToAdd: Sleep = new Sleep(month, day, startTime, wakeTime, quality);
    console.log(newSleepToAdd);
  };

  constructor() { }

  ngOnInit() {


  }
}








//old version
// export class SleepComponent implements OnInit {
//
//   number = 0;
//   months = [];
//   days = [];
//   hours = [];
//   selectMessage = "Select the time you went to sleep";
//   numberForHours = [];
//   selectedSleepStart = null;
//   selectedDayOne = null;
//   selectedDayTwo = null;
//   hoursSlept = null;
//   quality = null;
//
//
//   constructor() { }
//
//   ngOnInit() {
//     for (let i = 0; i < 1; i++) {
//       this.months.push(i + 1);
//     }
//     for (let i = 0; i < 2; i++) {
//       this.days.push(i + 1);
//     }
//     for (let i = 0; i < 743; i++) {
//       this.numberForHours.push(i);
//     }
//     for (let i = 0; i < 24; i++) {
//       this.hours.push(i);
//     }
//
//   }
//
//   sleepStart(clickedTime) {
//     if (!this.selectedDayOne) {
//       this.selectedDayOne = clickedTime;
//       this.selectMessage = "Select the time you woke up";
//     } else {
//       this.selectMessage = "Select the time you went to sleep";
//       this.selectedDayTwo = clickedTime;
//
//       this.selectedDayOne = this.selectedDayOne.replace(/-/g , " ");
//       this.selectedDayTwo = this.selectedDayTwo.replace(/-/g , " ");
//       let monthOne = this.selectedDayOne.split(' ')[0];
//       let dayOne = this.selectedDayOne.split(' ')[1];
//       let dayOneHours = this.selectedDayOne.split(' ')[2];
//       let monthTwo = this.selectedDayTwo.split(' ')[0];
//       let dayTwo = this.selectedDayTwo.split(' ')[1];
//       let dayTwoHours = this.selectedDayTwo.split(' ')[2];
//       let start = this.selectedDayOne.split(" ");
//       let end = this.selectedDayTwo.split(" ");
//       console.log(start, end);
//       //this if statement finds the total hours slept
//       if (start[1] == end[1]){
//         console.log(end[2] - start[2]);
//         let hoursSlept = end[2] - end[1];
//         console.log(`you slept ${hoursSlept} hours`);
//       } else if (start[1] < end[1]){
//         console.log(parseInt(end[2]) + 24 - parseInt(start[2]));
//         let hoursSlept = parseInt(end[2]) + 24 - parseInt(start[2]);
//         console.log(`you slept ${hoursSlept} hours`);
//       }
//       // this.selectedDayTwo.slice(Math.min(start, end), Math.max(start,end)+ 1).checked === true;
//
//
//       let newSleep: Sleep = new Sleep(this.selectedDayOne, this.selectedDayTwo, this.hoursSlept, this.quality);
//       console.log(newSleep);
//
//
//       // console.log(this.selectedDayOne);
//       // console.log(this.selectedDayTwo);
//       this.selectedDayOne = null;
//       this.selectedDayTwo = null;
//       dayOne = null;
//       dayTwo = null;
//       dayOneHours = null;
//       dayTwoHours = null;
//
//       }
//     }
//   }
