import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonListQuestionComponent } from './radio-button-list-question.component';

describe('RadioButtonListQuestionComponent', () => {
  let component: RadioButtonListQuestionComponent;
  let fixture: ComponentFixture<RadioButtonListQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonListQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonListQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
