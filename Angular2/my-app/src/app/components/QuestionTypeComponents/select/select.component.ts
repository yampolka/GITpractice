import {Component, Input} from "@angular/core";
import {Question} from "../../../Interfaces/Question";

@Component({
    selector: 'select-component',
    templateUrl: './select.component.html',
    styleUrls: []
})


export class SelectComponent {

    @Input('question') question: Question;

}