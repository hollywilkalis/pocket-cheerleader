import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sleep } from './sleep.model';
import { SleepService } from './sleep.service';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-sleep',
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.scss'],
  providers: [SleepService, UserService]
})
export class SleepComponent implements OnInit {
  users;
  usersOBJ;
  January = 0;
  February = 0;
  March = 6.3;
  April = 8;
  May = 5;
  June = 6;
  July = 6.6;
  August = 3.6;
  September = 8;
  October = 5.7;
  November = 8.3;
  December = 10;

  doughnutChartLabels:string[] = ['Awake', 'Asleep'];
  doughnutChartType:string = 'doughnut';
  doughnutChartData:number[] = [0, 0];
  barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  JanuaryBarChartLabels:string[] = [];
  JanuaryBarChartType:string = 'bar';
  JanuaryBarChartLegend:boolean = true;
  JanuaryBarChartData:any[] = [
    {data: [], label: 'Hours Slept'}
  ];
  FebruaryBarChartLabels:string[] = [];
  FebruaryBarChartType:string = 'bar';
  FebruaryBarChartLegend:boolean = true;
  FebruaryBarChartData:any[] = [
    {data: [], label: 'Hours Slept'}
  ];
  lineChartData:Array<any> = [[0, this.January, this.February, this.March, this.April, this.May, this.June, this.July, this.August, this.September, this.October, this.November, this.December]];
  lineChartLabels:Array<any> = ['Monthy Avg','January', 'February','March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  lineChartType:string = 'line';

  constructor(private router: Router, private sleepService: SleepService) { }

  ngOnInit() {
    this.users = this.sleepService.getUsers();
    this.users.subscribe(dataLastEmittedFromObserver => {
      this.usersOBJ = dataLastEmittedFromObserver;
      console.log(this.usersOBJ);
      this.inputFormData();
    });
  }

  submitForm(month: any, day: any, startTime: any, wakeTime: any, quality: any) {
    var newSleepToAdd: Sleep = new Sleep(parseInt(month), parseInt(day), parseInt(startTime), parseInt(wakeTime), parseInt(quality));
    this.sleepService.addSleep(newSleepToAdd);
    this.dayViewDayChart(wakeTime);
  }

  inputFormData() {
    // Start January
    let JanuaryDays = [];
    let JanuarywakeTime = [];
    let January = false;
    this.usersOBJ.forEach(function(userData){
      if (userData.month === 1){
        JanuaryDays.push(userData.day);
        JanuarywakeTime.push(userData.wakeTime);
        January = true;
      }
    });
    this.JanuaryBarChartLabels = JanuaryDays;
    this.JanuaryBarChartData[0].data = JanuarywakeTime;
    if(January){
      let element = document.getElementById('barJanuary');
      element.style.display = 'block';
      this.getAverage(JanuarywakeTime, 'January');
    }
    // End Of January
    // Start January
    let FebruaryDays = [];
    let FebruarywakeTime = [];
    let February = false;
    this.usersOBJ.forEach(function(userData){
      if (userData.month === 2){
        FebruaryDays.push(userData.day);
        FebruarywakeTime.push(userData.wakeTime);
        February = true;
      }
    });
    this.FebruaryBarChartLabels = FebruaryDays;
    this.FebruaryBarChartData[0].data = FebruarywakeTime;
    if(February){
      let element = document.getElementById('barFebruary');
      element.style.display = 'block';
      this.getAverage(JanuarywakeTime, 'February');
    }
    // End Of January
  }

  dayViewDayChart(wakeTimeInput) {
    let element = document.getElementById('doughnut');
    element.style.display = 'block';
    this.doughnutChartData = [(24 - wakeTimeInput), wakeTimeInput];
  }

  getAverage(AwakeTime, month){
    var total = 0;
    for(var i = 0; i < AwakeTime.length; i++) {
        total += AwakeTime[i];
    }
    var avg = total / AwakeTime.length;
    if(month === 'January'){this.January = avg}
    if(month === 'February'){this.February = avg}
    this.lineChartData = [0, this.January, this.February, this.March, this.April, this.May, this.June, this.July, this.August, this.September, this.October, this.November, this.December];
  }
  chartClicked(event){
    console.log(event);
  }


}




  // submitForm(month: number, day: number, startTime: number, wakeTime: number, quality: number) {
  //   var newSleepToAdd: Sleep = new Sleep(month, day, startTime, wakeTime, quality);
  //   const doughnutChartLabels:string[] = ['Asleep', 'Awake'];
  //   const doughnutChartType:string = 'doughnut';
  //   let doughnutChartData:number[] = [];
  //   console.log(newSleepToAdd);
    // this.sleepService.addSleep(newSleepToAdd);
    // console.log(this.barChartData[0].data[30]);
    // this.barChartData[0].data.splice(30, 1, wakeTime);
    // console.log(this.barChartData[0].data[30]);
    // let xIndex = parseInt(wakeTime);
    // let yIndex = 24 - xIndex;
    // console.log(xIndex);
    // console.log(yIndex);
    // doughnutChartData.push(xIndex, yIndex);
    // console.log(doughnutChartData);
  // };
  // Doughnut

// events
// public chartClicked(e:any):void {
//   console.log(e);
// }
//
// public chartHovered(e:any):void {
//   console.log(e);
// }
//end doughnut, start bar
// public barChartOptions:any = {
//   scaleShowVerticalLines: false,
//   responsive: true
// };
// public barChartLabels:string[] = ['1', '2', '3', '4', '5', '6', '7', '8','9','10','11', '12', '13', '14', '15', '16', '17', '18','19','20','21', '22', '23', '24', '25', '26', '27', '28','29','30','31'];

// public barChartType:string = 'bar';
// public barChartLegend:boolean = true;

// public barChartData:any[] = [
  // {data: [8, 10, 6, 5, 8, 12, 4.5, 8, 8, 10, 9, 8.5, 5, 8, 12, 5.5, 6, 8, 8, 9, 8.5, 10, 4, 8, 12, 10, 8, 8, 6, 7, 0, 0, 23], label: 'Hours Slept'}
// ];

// events
// public chartClicked(e:any):void {
//   console.log(e);
// }
//
// public chartHovered(e:any):void {
//   console.log(e);
// }

// public randomize():void {
//   // Only Change 3 values
//   let data = [
//     Math.round(Math.random() * 100),
//     59,
//     80,
//     (Math.random() * 100),
//     56,
//     (Math.random() * 100),
//     40];
//   let clone = JSON.parse(JSON.stringify(this.barChartData));
//   clone[0].data = data;
//   this.barChartData = clone;
// }
// lineChart
// public lineChartData:Array<any> = [
//   [8.1, 7.2, 6.5, 6.7, 7.9, 7.2, 8.1, 7.8, 7.7, 7.8, 7.1, 7.4, 7.6]
// ];
// public lineChartLabels:Array<any> = ['Hours Slept', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January'];
// public lineChartType:string = 'line';

  //
  // sleeps: Sleep[];
  // selectedSleep = null;
  //
  //

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
