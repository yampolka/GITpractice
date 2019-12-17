import {Component} from '@angular/core';
import{Document,DocumentDetail,Question,Option,User ,
    QuestionType,QuestionRadiolist,
    QuestionText} from './Structure/Structure';
import {VYTestService} from './Services/VYTestService';
import { UserService } from './Services/UserService';
import { RouterModule, Routes } from '@angular/router';
//import {GetSomeUser} from  './Services/VYTestService'
   



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [VYTestService]
})


export class AppComponent {
// Fields
    
      
    ngOnInit(){

        
       
            }





}
