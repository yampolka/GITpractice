import {Option} from "./Option.model"
import { Question } from './Question.model';
export class QuestionDDL extends Question {
    id: number;
    description: string;    
    answer :  Array<Option>
    type : string ;
     

}
