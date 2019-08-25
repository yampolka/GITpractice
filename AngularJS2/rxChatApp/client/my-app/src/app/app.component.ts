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
  private Likes=0;

  constructor(private socketService: Services){

  }

  sendMessage(){
    this.socketService.sendMessage(this.myMessage);
    this.myMessage = "";
  }
  sendLike(){
    this.socketService.sendLike();

   
  }
  ngOnInit(){
    let self = this;
    this.socketService.getLikes().subscribe(function (data) {
    self.Likes=data;
    console.log(data);
    })
    this.socketService.getMessages().subscribe(function (data) {
      self.messages.push(data);
    })
  }

}
