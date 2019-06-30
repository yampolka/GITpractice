import { Component, OnInit } from '@angular/core';
import {Services} from "../services";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chat app';
  private messages = [];
  private myMessage = "";

  constructor(private socketService: Services){

  }

  sendMessage(){
    this.socketService.sendMessage(this.myMessage);
    this.myMessage = "";
  }

  ngOnInit(){
    let self = this;
    this.socketService.getMessages().subscribe(function (data) {
      self.messages.push(data);
    })
  }

}
