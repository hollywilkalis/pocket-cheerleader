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

// import { SleepTimePipePipe } from './sleep/sleep-time-pipe.pipe';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    // SleepTimePipePipe,
    ViewMoodComponent,
    AddMoodComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
