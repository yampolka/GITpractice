import { Injectable, Inject } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { Component } from '@angular/core';
import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import {Doctor} from './doctor.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  doctors : any[];
  theDoctors : Doctor[];
  d : Doctor;
  constructor(private http: HttpClient)
  {
    this.getData();
    this.theDoctors=[];
    this.doctors=[];
  }

  url = "https://jsonplaceholder.typicode.com/users";
  title = 'List of our doctors';
  
  
    
     
  public getData(){
    this.http.get(this.url).subscribe((data)=>{
      /* console.log(data);
      this.doctors =data; // /???
      console.log(this.doctors);
  
      for (let i = 0, len = this.doctors.length; i < len; i++) {
       
        this.d = new Doctor(this.doctors[i].email);
        this.theDoctors.push(this.d ) ;
        console.log(this.theDoctors[i]);
      } */
       let a ="jjjjj";
      for ( let doctor of data)
      {
        let d= new Doctor(doctor.email);
        console.log(d);

      }
      console.log(a);
      });
   

  
  }
}
