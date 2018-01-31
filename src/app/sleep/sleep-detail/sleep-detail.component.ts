import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Sleep } from '../sleep.model';
import { SleepService } from '../sleep.service';

@Component({
  selector: 'app-sleep-detail',
  templateUrl: './sleep-detail.component.html',
  styleUrls: ['./sleep-detail.component.scss'],
  providers: [SleepService]
})
export class SleepDetailComponent implements OnInit {

  sleepId: number = null;
  sleepToDisplay: Sleep;
  constructor(private route: ActivatedRoute, private location: Location, private sleepService: SleepService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
    this.sleepId = parseInt(urlParameters['id']);
  });
  //  this.sleepToDisplay = this.sleepService.getSleepById(this.sleepId);
  }

}
