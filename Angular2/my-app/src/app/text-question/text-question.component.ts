import { Component, OnInit, Input } from '@angular/core';
import { QuestionText } from '../Structure/Structure';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.css']
})
export class TextQuestionComponent implements OnInit {
@Input()question : QuestionText;
  constructor() { }

  ngOnInit() {
  }

}
