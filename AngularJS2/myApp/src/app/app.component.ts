import { Component, OnInit } from '@angular/core';
import {HttpClient} from   '@angular/common/http' ;



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
  data : Object;
  
 

  constructor( public http: HttpClient) // http  ijection
  {
    this.getData();
    this.theDoctors=[];
    this.doctors=[];
  
   

  }

  url = "https://jsonplaceholder.typicode.com/users";
  title = 'List of our doctors';
  
  
    
     
  public getData() :void{
    

    this.http.get(this.url).subscribe((data)=>{
    this.data= data;
     console.log(data);
      for ( let doctor of data)
      {
        let d= new Doctor(doctor.email);
        console.log(d);

      } 
      
     
    });
  }
}
   
   
      
  
  

