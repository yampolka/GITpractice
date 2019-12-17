import {Injectable} from "@angular/core";
import{Observable, Subject} from "rxjs";
import{Document,DocumentDetail,Question,Option,User ,
    QuestionType,QuestionRadiolist,
    QuestionText} from '../Structure/Structure';
@Injectable()
export class FakeService
{
    user = {
        idUser: 1            
    }
  
    UserSubject = new Subject<any>();
    DocumentDetailSubject= new Subject<any>();
    ddIndex =0;

    getUser():Observable<any>
    {
        return this.UserSubject.asObservable();
    }
    getUserInfo()
    {
        this.UserSubject.next(this.user);
    }

    documentDetails :DocumentDetail[]=
[
        {
            documentID:1,
            nodeID:1,
            seq :1,
            idTree :1,
            //question:this.rquestion
           question: { 
                id:1,
                description:'Age?',
                type: QuestionType.radiolist,
                optionSelected:1,
                options: [
                    {
                        id:11,
                        answer:'n/a'
                        
                    },
                    {
                        id:22,
                        answer:'100'
                        
                    }
                ]
            }
            
            
        }
    ];




}