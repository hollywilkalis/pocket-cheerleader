import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoodComponent } from './view-mood.component';

describe('ViewMoodComponent', () => {
  let component: ViewMoodComponent;
  let fixture: ComponentFixture<ViewMoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
