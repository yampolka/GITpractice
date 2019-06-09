import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor( private http: HttpClient){}

  uploadFile(event){
    const file = event.target.files[0]; //receive file from input
    const form = new FormData();  //create empty 'data' form
    form.append('name', "Alex"); //create field name inside data
    form.append('file', file); //create field file inside data
    this.http.post('https://someurl.com', form).subscribe(response =>{
      console.log(response);
    }, error => {}) //make request to some server
  }

  // response => { console.log(response) }

  // function(response) { console.log(response)}

}
