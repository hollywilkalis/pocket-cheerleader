import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions = [
      {name:'I do not keep a regular sleep schedule.', value:'1', checked:false, suggestion: "stop that"},
      {name:'I often keep the light on.', value:'2', checked:false, suggestion: "stop that"},
      {name:'I ingest a lot of sugar and refined carbohydrates.', value:'3', checked:false, suggestion: "stop that"},
      {name:'I live a rather sedentary lifestyle, void of regular exercise regardless of how minimal.', value:'3', checked:false, suggestion: "stop that"},
      {name:'I do not venture to The Outside (hsssss)', value:'3', checked:false, suggestion: "stop that"},
      {name:'The sun is hideous - I avoid its glare during the daylight hours.', value:'3', checked:false, suggestion: "stop that"},
      {name:'My workspace is not well-lit.', value:'3', checked:false, suggestion: "stop that"},
      {name:'I commonly ingest caffeinated goods within 6 hours of bedtime.', value:'3', checked:false, suggestion: "stop that"},
      {name:'I often take naps exceeding 30 minutes past the late afternoon.', value:'3', checked:false, suggestion: "stop that"},
      {name:'I often partake in alcoholic libations to the point of inebriation.', value:'3', checked:false, suggestion: "stop that"},
      {name:'I am exposed to a backlit screen within a couple hours of sleeptime.', value:'3', checked:false, suggestion: "stop that"}
    ]

    get selectedOptions() { // right now: ['1','3']
      return this.options
                .filter(opt => opt.checked)
                .map(opt => opt.value)
    }
  constructor() { }

  ngOnInit() {
  }

// submitQuiz(){
//   this.quiz.schedule = form.controls["schedule"].value;
//
//   const schedule = document.getElementById("schedule")
//   const lightOn = document.getElementById("lightOn")
//   const sugars = document.getElementById("sugars")
//   const sedentary = document.getElementById("sedentary")
//   const outside = document.getElementById("outside")
//   const sun = document.getElementById("sun")
//   const workspace = document.getElementById("workspace")
//   const caffeine = document.getElementById("caffeine")
//   const naptime = document.getElementById("naptime")
//   const alcohol = document.getElementById("alcohol")
//   const bluelight = document.getElementById("bluelight")
//
//     if (schedule.checked){
//       alert("Schedule!");
//     } else {
//       alert("meh");
//     }
//   }

}
