import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { SleepComponent } from './sleep/sleep.component';
import { MoodComponent } from './mood/mood.component';
import { AboutComponent } from './about/about.component';
import { ViewMoodComponent } from './view-mood/view-mood.component';
import { AddMoodComponent } from './add-mood/add-mood.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SleepComponent,
    MoodComponent,
    AboutComponent,
    ViewMoodComponent,
    AddMoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
