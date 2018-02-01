
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
