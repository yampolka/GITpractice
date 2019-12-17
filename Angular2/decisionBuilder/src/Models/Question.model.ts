import {Option} from "./Option.model"
import { defaultCipherList } from 'constants';
export class Question {
    id: number;
    description: string;    
    answer ?: any;
    type : string ;
     

}



//defaultCipherLi
// details   [ question [options] selcted ]    optionselected text