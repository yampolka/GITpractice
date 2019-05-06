import { Component, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',

})
export class SimpleHttpComponent implements OnInit {
loading : boolean= false;
data : Object;
url : string='https://jsonplaceholder.typicode.com/posts/1'; 

  subscribeFunction (data: Object ): void
  {
    this.loading = true;
    this.data=data;
    this.loading =false;

  }
  constructor( public http :HttpClient ) 
  {

   }

   makeRequest()
   {
    this.http.get(this.url).subscribe ( data =>this.subscribeFunction(data));
 

   
   }
   
  ngOnInit() {
  }

}
