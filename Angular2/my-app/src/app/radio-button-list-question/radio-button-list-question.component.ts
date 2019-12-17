import { Component, OnInit, Input } from '@angular/core';
import { QuestionRadiolist } from '../Structure/Structure';

@Component({
  selector: 'app-radio-button-list-question',
  templateUrl: './radio-button-list-question.component.html',
  styleUrls: ['./radio-button-list-question.component.css']
})
export class RadioButtonListQuestionComponent implements OnInit {
@Input() question:QuestionRadiolist;
  constructor() { }

  ngOnInit() {
  }
//
}
