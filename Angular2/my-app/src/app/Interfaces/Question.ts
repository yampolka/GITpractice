import {Option} from "./Option";

export interface Question {
    id: number,
    description: string,
    type: string,
    options?: Array<Option> //?
}
