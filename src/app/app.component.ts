import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navLeft: false;
  pauseAnimation(buttonClick) {
    document.getElementById("pause").removeAttribute("id");
    buttonClick.setAttribute("id", "pause");
  }

  toggleLeftNav(){
    if(this.navLeft) {
        return "0px";
      } else {
        return "-200px";
      }
    }
  }

  // masterMoodsList: Day[] = [
  //   new Day(1, 2, "depressed", "I spilled milk."),
  //   new Day(1, 2, "happy", "I passed my code review."),
  //   new Day(1, 2, "stressed", "Turns out I didn't pass my code review.")
  // ];
}
