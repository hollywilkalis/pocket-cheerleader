import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoodComponent } from './add-mood.component';

describe('AddMoodComponent', () => {
  let component: AddMoodComponent;
  let fixture: ComponentFixture<AddMoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
