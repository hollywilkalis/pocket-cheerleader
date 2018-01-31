// import { Pipe, PipeTransform } from '@angular/core';
// import { Sleep } from './sleep.model';
//
// @Pipe({
//   name: 'sleepTimePipe',
//   pure: false
// })
// export class SleepTimePipePipe implements PipeTransform {
//
//   transform(input: Sleep[]) {
//     for (var i = 0; i < input.length; i++){
//       if (input[i].checked === false){
//         console.log("blammo" + input[i]);
//         return input;
//       } else if (input[i].checked === true){
//         console.log("blammoTRUE" + input[i]);
//         return input;
//       } return input;
//     }
//   }
//
// }

    // <div class="box one" *ngFor="let hour of hours | sleepTimePipe"><input *ngIf="hour.checked === false" type="checkbox" (click)="toggleChecked(hour, true)" class="chkbx" id="{{month}}-{{day}}-{{hour}}" value="{{month}}-{{day}}-{{hour}}" (click)="sleepStart($event.target.id)"><label for="{{month}}-{{day}}-{{hour}}"></label></div>
