import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMoodComponent } from './edit-mood.component';

describe('EditMoodComponent', () => {
  let component: EditMoodComponent;
  let fixture: ComponentFixture<EditMoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
