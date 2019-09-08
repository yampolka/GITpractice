import {Component} from '@angular/core';
import {Question} from "./Interfaces/Question";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {

    QuestionArray: Array<Question> = [{
        id: 1,
        description: "what is your age range?",
        type: 'select',
        options: [
            {
                id: 11,
                answer: '10-20',
                selected: false
            },
            {
                id: 12,
                answer: '20-30',
                selected: false
            }
        ]
    },
        {
            id: 2,
            description: "Do you have a children?",
            type: 'radio',
            options: [
                {
                    id: 21,
                    answer: 'yes',
                    selected: false
                },
                {
                    id: 22,
                    answer: 'no',
                    selected: false
                }
            ]
        }];

    constructor() {
    }

}
