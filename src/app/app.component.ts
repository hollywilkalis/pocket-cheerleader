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

}
