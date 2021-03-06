import { ViewChild, Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
// import { Question } from './quiz.model';
// import { QuizAnswerComponent } from '../quiz-answer/quiz-answer.component';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent implements OnInit {

  selectedQuestion = null;
  answerYes = false;

  questions = [
      {name:'I do not keep a regular sleep schedule.', checked:false, suggestion: "Going to sleep and getting up around the same time every day will help set your body's internal clock, leading to a better sleep."},
      {name:'I often keep the light on.', checked:false, suggestion: "Oh I'm sorry I didn't know we were millionaires who can afford to keep electricity running nonstop--SHUT IT DOWN"},
      {name:'I ingest a lot of sugar and refined carbohydrates.', checked:false, suggestion: "STOP EATING SO MUCH OF THAT STUFF"},
      {name:'I live a rather sedentary lifestyle, void of regular exercise regardless of how minimal.', checked:false, suggestion: "Some physical activity in the day to get the blood pumping will help you wind down later."},
      {name:'I dare not venture to The Outside realm (hsssss)', checked:false, suggestion: "GO OUTSIDE FOR ONCE IN YOUR LIFE"},
      {name:'The sun is hideous - I avoid its glare during the daylight hours.', checked:false, suggestion: "GET SOME SUNGLASSES BOZO"},
      {name:'My workspace is not well-lit.', checked:false, suggestion: "Not only will maintaining a well-lit workspace help keep your body alert, you can actually see what color clothes everyone is wearing, if any."},
      {name:'I commonly ingest caffeinated goods within 6 hours of bedtime.', checked:false, suggestion: "Caffeine takes roughly 6 hours to flush through the system entirely, so it might be nice to regulate intake to earlier in the day."},
      {name:'I often take naps exceeding 30 minutes past the late afternoon.', checked:false, suggestion: "While naps are nice, your body may be more suited to take them earlier in the day."},
      {name:'I often partake in alcoholic libations to the point of inebriation.', checked:false, suggestion: "S'WRONG WITCHU?"},
      {name:'I am exposed to a backlit screen within a couple hours of sleeptime.', checked:false, suggestion: "STOP THAT"}
    ]

  constructor() {}

  checkedYes(question){
    alert(question.suggestion);
  }

  // checkedYes(clickedQuestion){
  //   this.selectedQuestion = clickedQuestion;
  //   console.log(this.questions);
  // }

  ngOnInit() {
    // if checked or checked===true, show question.suggestion
  }


}
