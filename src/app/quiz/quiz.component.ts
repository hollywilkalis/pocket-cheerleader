import { Component, OnInit } from '@angular/core';
import { Quiz } from './quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions = [
      {name:'I do not keep a regular sleep schedule.', value:'1', checked:false, suggestion: "Going to sleep and getting up around the same time every day will help set your body's internal clock, leading to a better sleep."},
      {name:'I often keep the light on.', value:'2', checked:false, suggestion: "STOP KEEPING THE LIGHT ON"},
      {name:'I ingest a lot of sugar and refined carbohydrates.', value:'3', checked:false, suggestion: "TOP EATING SO MUCH SUGAR/REFINED CARBS"},
      {name:'I live a rather sedentary lifestyle, void of regular exercise regardless of how minimal.', value:'3', checked:false, suggestion: "Some physical activity in the day to get the blood pumping will help you wind down later."},
      {name:'I do not venture to The Outside (hsssss)', value:'3', checked:false, suggestion: "GO OUTSIDE FOR ONCE IN YOUR LIFE"},
      {name:'The sun is hideous - I avoid its glare during the daylight hours.', value:'3', checked:false, suggestion: "GET SOME SUNGLASSES BOZO"},
      {name:'My workspace is not well-lit.', value:'3', checked:false, suggestion: "Not only will maintaining a well-lit workspace help keep your body alert, you can actually see what color clothes everyone is wearing, if any."},
      {name:'I commonly ingest caffeinated goods within 6 hours of bedtime.', value:'3', checked:false, suggestion: "Caffeine takes roughly 6 hours to flush through the system entirely, so it might be nice to regulate intake to earlier in the day."},
      {name:'I often take naps exceeding 30 minutes past the late afternoon.', value:'3', checked:false, suggestion: "While naps are nice, your body may be more suited to take them earlier in the day."},
      {name:'I often partake in alcoholic libations to the point of inebriation.', value:'3', checked:false, suggestion: "S'WRONG WITCHU?"},
      {name:'I am exposed to a backlit screen within a couple hours of sleeptime.', value:'3', checked:false, suggestion: "STOP THAT"}
    ]

    // get selectedOptions() { // right now: ['1','3']
    //   return this.question
    //             .filter(opt => opt.checked)
    //             .map(opt => opt.value)
    // }
  constructor() { }

  ngOnInit() {
  }


}
