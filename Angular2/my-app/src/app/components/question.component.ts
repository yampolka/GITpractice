import {Component, Input} from "@angular/core";
import {Question} from "../Interfaces/Question";


@Component({
    selector: 'question-component',
    templateUrl: './Question.component.html',
    styleUrls: ['./Question.component.css']
})


export class QuestionComponent {

    @Input('QuestionData') QuestionData: Question;

}