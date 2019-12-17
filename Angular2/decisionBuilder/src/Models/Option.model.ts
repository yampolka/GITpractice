export class Option {
    id: number;
    answer: string;
    selected: boolean



    constuctor (id : number, answer : string , selected  : boolean)
    {
        this.id= id;
        this.answer = answer;
        this.selected = selected;

    }
}