import { Component, OnInit } from '@angular/core';
import { QuizComponent } from '../quiz/quiz.component';
import { Question } from '../quiz/quiz.model';

@Component({
  selector: 'question-answer-tile',
  templateUrl: './quiz-answer.component.html',
  styleUrls: ['./quiz-answer.component.scss']
})
export class QuizAnswerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
