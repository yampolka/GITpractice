import { Component, OnInit, Input } from '@angular/core';
import { QuestionRadiolist } from './Structure/Structure';
import {VYTestService} from './Services/VYTestService';

@Component({
   selector: 'users-svc'
  ,
 templateUrl: 'usersfortesting.component.html'
 //,
//   styleUrls: ['./radio-button-list-question.component.css']
})
export class UsersForTestingComponent implements OnInit {
  TestUsers :object[]= [{}];

  constructor(private vyService: VYTestService)
  { 
    vyService.getHttpUsers( ).subscribe(
      (data:object[])=>
    {
     if (data.length)
        { 
        console.log(data.length);
        for (let i=0;i<data.length;i++)
        {
          let d = data[i];
          
          this.TestUsers.push(d);
         
          
          
                }
      }
       
      });
   
    
      console.log(this.TestUsers);

  }
 
  ngOnInit() {
  }
//
}
