import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MoodComponent } from './mood/mood.component';
import { SleepComponent } from './sleep/sleep.component';
import { SleepDetailComponent }   from './sleep/sleep-detail/sleep-detail.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
},
{
  path: 'mood',
  component: MoodComponent
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
  path: 'about',
  component: AboutComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
