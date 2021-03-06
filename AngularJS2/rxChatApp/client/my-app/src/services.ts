import * as io from 'socket.io-client';

import {Observable} from "rxjs";

export class Services{
    private socket;

    constructor(){
        this.socket = io("http://localhost:3000");
    }

    public sendMessage(text){
        this.socket.emit('new-message', text);
    }

    public sendLike(){
        this.socket.emit('set-like', {});
    }
    public getLikes(){
        let self = this;
        return Observable.create(function (observer) {
            self.socket.on('recalc-like', function (like) {
                
                observer.next(like);
            })
        })
    }
    public getMessages(){
        let self = this;
        return Observable.create(function (observer) {
            self.socket.on('new-message', function (text) {
                observer.next(text);
            })
        })
    }
}