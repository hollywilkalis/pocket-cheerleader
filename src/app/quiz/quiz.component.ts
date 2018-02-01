import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

submitQuiz(){
  let schedule = <HTMLInputElement> document.getElementById("schedule")
  const lightOn = document.getElementById("lightOn")
  const sugars = document.getElementById("sugars")
  const sedentary = document.getElementById("sedentary")
  const outside = document.getElementById("outside")
  const sun = document.getElementById("sun")
  const workspace = document.getElementById("workspace")
  const caffeine = document.getElementById("caffeine")
  const naptime = document.getElementById("naptime")
  const alcohol = document.getElementById("alcohol")
  const bluelight = document.getElementById("bluelight")

  var isChecked = schedule.checked;

    if (schedule.checked){
      alert("Schedule!");
    } else {
      alert("meh");
    }
  }

}
