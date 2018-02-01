
export class Sleep {
  constructor ( public month: number,
                public day: number,
                public startTime: number,
                public wakeTime: number,
                // public totalHours: number,
                public quality: number,
              ) { }


}

// if(!this.lastChecked) {
//   this.lastChecked = this;
//   return;
// }
// if(clickedTime.shiftKey){
//   let start = this.selectedDayOne.index(this);
//   let end = this.selectedDayOne.index(this.lastChecked);
//   this.selectedDayOne.slice(Math.min(start, end), Math.max(start,end)+ 1).prop('checked', this.lastChecked.checked);
// }
// let myChart = document.getElementById('myChart').getContext('2d');
//
// let sleepChart = new Chart(myChart, {
//   type:'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
//   data:{
//     labels:['1','2','3','4','5'],
//     datasets:[{
//       label:'Hours',
//       data:[ 8, 4, 6, 8, 9]
//       ]
//     }]
//   },
//   options:{}
// });
