import { Component } from '@angular/core';
 import { EventEmitter
 }
  from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@Output()
   onProductSelected: EventEmitter<any>;
  i :number =0;

constructor() {
  this.onProductSelected = new EventEmitter();
  this.onProductSelected.subscribe(
     (value: any) => {
     console.log('i changed to:', value);
     });
  
}

calc(): number
{
  this.i=this.i+1;
  return this.i;
}

calc2(): number
{
  this.i=this.i*10;
  return this.i;
}
liked(): void {
  
  
  this.onProductSelected.emit(this.calc());
  this.onProductSelected.emit(this.calc2());
  
  

}


notliked() :void
{
  this.onProductSelected.emit(this.calc2());

}

}
