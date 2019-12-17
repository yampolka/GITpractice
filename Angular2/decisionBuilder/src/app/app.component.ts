import { Component } from '@angular/core';
import {HttpClient} from   '@angular/common/http' ;
import {Option} from '../Models/Option.model'
import {Question} from '../Models/Question.model'
import {QuestionDDL} from '../Models/QuestionDDL.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Questions:  Array<Question>;
  user :CanvasUserInterface; 
  


  
  
  
  constructor(  ) 
  {
     
    Document {
        
        idDocument:  1,
        documentDate: '09/09/2019' 
        coment: '1 row',
        user: {}
        documentDetails :DocumentDetail[]
    }
  

}
