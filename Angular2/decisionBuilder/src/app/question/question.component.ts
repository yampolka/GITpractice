import { Component, OnInit,Input } from '@angular/core';
import { Question } from 'src/Models/Question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
 
@Component({
    selector: 'question-component',
    templateUrl: './Question.component.html',
    styleUrls: ['./Question.component.css']
})


export class QuestionComponent {

    @Input('QuestionData') QuestionData: Question;

}