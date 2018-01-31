import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pauseAnimation(buttonClick) {
    document.getElementById("pause").removeAttribute("id");
    buttonClick.setAttribute("id", "pause");
  }

  navBartoggler(){
    let toggle = document.getElementById("nav-sky");
    if (toggle.value === 1) {
      alert("cool");
    }
  }

  // masterMoodsList: Day[] = [
  //   new Day(1, 2, "depressed", "I spilled milk."),
  //   new Day(1, 2, "happy", "I passed my code review."),
  //   new Day(1, 2, "stressed", "Turns out I didn't pass my code review.")
  // ];
}
