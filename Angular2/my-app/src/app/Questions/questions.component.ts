import {Component} from '@angular/core';
import{Document,DocumentDetail,Question,Option,User ,
    QuestionType,QuestionRadiolist,
    QuestionText} from '../Structure/Structure';
import {VYTestService} from '../Services/VYTestService';


   



@Component({
    selector: 'quest',
    templateUrl: './questions.component.html',
    styleUrls: [],
    providers: [VYTestService]
})


export class QuestionsComponent {
// Fields
  
    ngOnInit(){

        
       
            }



questionType =QuestionType;    
user: User;
document: Document;
options: Array<Option>;
documentDetails :DocumentDetail[];


onOptionSelected(node:number , optionSelected :number )
{
   
    console.log(this.documentDetails[node].nodeID);

}
 //constructor(private vyService: VYTestService){
    constructor(){
      //mantra2  new observable ? Subscription connection
      //
     // let u1= vyService.getUsers().subscribe(user0=>{console.log(user0) ;});

       
        this.documentDetails =[
            {
                documentID:1,
                nodeID:1,
                seq :1,
                idTree :1,
                //question:this.rquestion
               question: { 
                    id:1,
                    description:'Gender?',
                    type: QuestionType.radiolist,
                    optionSelected:1,
                    options: [
                        {
                            id:1,
                            answer:'n/a'
                            
                        },
                        {
                            id:2,
                            answer:'Yes'
                            
                        },
                        {
                            id:3,
                            answer:'No'
                            
                        }
                         
                    ]
                }
                
               


                
            }
        ];
        this.document={
            idDocument:1,
            user:this.user,
            coment:'first',
            documentDate: '09/09/2019',
            documentDetails: this.documentDetails
        }
     }

}
