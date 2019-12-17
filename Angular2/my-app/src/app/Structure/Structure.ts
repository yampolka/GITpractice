export interface Document {
    idDocument: number,
    documentDate: string,
    coment: string,
    user: User,
    documentDetails: DocumentDetail[]
}
export interface User {
    idUser: number,
    Name?: string,
    email?: string,
    cell?: string

}

export interface Geo {
    lat: number,
    lng:number
  }

export interface Option {
    id: number,
    answer: string
  

}

export enum QuestionType {
    radiolist="radiolist",
    text= "text"
}
export interface Question{
    id : number,
    type : QuestionType,
    description : string
}

export interface QuestionRadiolist extends  Question 
{
    options: Array<Option>,
    optionSelected  : number
    
}
export interface QuestionText extends  Question 
{
    
    Answer  : Text
    
}

export interface DocumentDetail {
    documentID: number,
    nodeID: number,
    question:  Question | QuestionRadiolist | QuestionText, 
    seq: number,
    idTree: number
}  