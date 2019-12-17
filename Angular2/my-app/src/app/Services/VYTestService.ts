
import {HttpClient} from '@angular/common/http';

import {Injectable} from "@angular/core";
import{Observable, Subject, Subscription} from "rxjs";


import{Document,DocumentDetail,Question,Option,User ,
    QuestionType,QuestionRadiolist,
    QuestionText} from '../Structure/Structure';

import { map } from 'rxjs/operators';
import { UserService } from './UserService';
   
@Injectable()
export class VYTestService
{
 
//field  example 
    
    usert = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }

      // bellow we created our own observable configuration
      // we  would like to say
      //1. UserObserrvable - is functionality
      //2. everyone who wouldsubscribe for the functionality (subscriber)
      //would recieve   by default  subsription which have 
      // mentioned after the word next

    userObservable = new Observable(subscriber => {
        setTimeout(() => {
            subscriber.next(this.usert);
        }, 1000);
 });
  

 constructor ( private http : HttpClient)
 {
     
   // DI httpClient is injected 
 }

 

 public getHttpUsers( )  :  Observable<any>
 {
   let url ="https://jsonplaceholder.typicode.com/users/"  ;  
   let UserRequest = this.http.get(url);  
   // we do not want now to subscribe here for observable.
   //let other components to subscribe. observable automatically will notify
   // subsribers( ). All subscribers. Every subscibers will be able to do anything 
   // in their own callback. 
   // so here  we comment outsubsription
//    UserRequest.subscribe (data => {
//        console.log(data);
//        //this.user=data[0]
//     }  ) ;

   return UserRequest;
 }

 // this for field : observable 
 // we created observable manualy
    public getUser(): any {
        return this.userObservable;
    }  
        //https://medium.com/fuzzycloud/angular-and-observable-4bf890b2a282
//Observable Function 



 
    



  }
    
       
    
