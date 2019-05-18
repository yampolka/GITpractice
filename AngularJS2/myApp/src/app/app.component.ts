import { Component, OnInit } from '@angular/core';
import {HttpClient} from   '@angular/common/http' ;
import {DocComponent} from "./docComponent/doc.component";


import {Doctor} from './doctor.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  doctors : Array<Doctor>;
  d : Doctor;
  data : Object;
  showDoctor: boolean = false;
  currentDoctor: Doctor;
  
 

  constructor( public http: HttpClient) // http  ijection
  {
    this.getData();
    this.doctors= [];
  }

  url = "https://jsonplaceholder.typicode.com/users";
  title = 'List of our doctors';
  
  showDocInfo(docInfo: Doctor){
    this.showDoctor = true;
    this.currentDoctor = docInfo;
  }
    
     
  public getData() :void{
    

    this.http.get(this.url).subscribe((data)=>{
      console.log(data);
      for (let i=0;i<data.length;i++)
      {
        let d = new Doctor(data[i]);
        this.doctors.push(d);
      }
      
     
    });
  }
}
   
   
      
  
  

