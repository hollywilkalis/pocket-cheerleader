import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizComponent } from './quiz/quiz.component';
import { SleepComponent } from './sleep/sleep.component';
import { SleepDetailComponent }   from './sleep/sleep-detail/sleep-detail.component';
import { AboutComponent } from './about/about.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
},
{
  path: 'quiz',
  component: QuizComponent
},
{
  path: 'sleep',
  component: SleepComponent
},
{
  path: 'sleep/:id',
  component: SleepDetailComponent
},
{
  path: 'user/:id',
  component: UserDetailComponent
},
{
  path: 'about',
  component: AboutComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
