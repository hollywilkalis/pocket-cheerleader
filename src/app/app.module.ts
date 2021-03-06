import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { SleepComponent } from './sleep/sleep.component';
import { MoodComponent } from './mood/mood.component';
import { AddMoodComponent } from './add-mood/add-mood.component';
import { ViewMoodComponent } from './view-mood/view-mood.component';
import { AboutComponent } from './about/about.component';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SleepDetailComponent } from './sleep/sleep-detail/sleep-detail.component';

import { EditMoodComponent } from './edit-mood/edit-mood.component';
import { MoodListComponent } from './mood-list/mood-list.component';
import { QuizComponent } from './quiz/quiz.component';

import { UserDetailComponent } from './user-detail/user-detail.component';

import { QuizAnswerComponent } from './quiz-answer/quiz-answer.component';

import { ChartsModule } from 'ng2-charts';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SleepComponent,
    MoodComponent,
    AboutComponent,
    ViewMoodComponent,
    AddMoodComponent,
    SleepDetailComponent,

    EditMoodComponent,
    MoodListComponent,
    QuizComponent,

    UserDetailComponent,

    QuizAnswerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
