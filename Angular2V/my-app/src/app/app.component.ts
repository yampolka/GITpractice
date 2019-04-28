import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  constructor(private http: HttpClient)
  {
    this.getData();
  }

  url = "https://jsonplaceholder.typicode.com/users";
  title = 'List of our doctors';
  doctors : any;
  public getData(){
    this.http.get(this.url).subscribe((data)=>{
      console.log(data);
      this.doctors = data;
    })
  }
}
