import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from '../websocket/websocket.service';
import { AuthService } from '../auth/auth.service';

export interface Message {
    clientTimeStamp: Date;
    user: string;
    page?: string;
    url: string;
    message: string;
    browser: string;
}



@Injectable()
export class LogService {
    private user: any;
    private CHAT_URL = 'ws://54.172.205.78:8080/api/log';
    public messages: Subject<any>;

    constructor(webSocketService: WebsocketService, private authService: AuthService) {
        this.messages = <Subject<Message>>webSocketService
            .connect(this.CHAT_URL)
            .map((response: MessageEvent): Message => {
                let data = JSON.parse(response.data);
                console.log(response.data);
                return ;
            });
    }

    public recordError = (error) => {
        let objToSend: Message = {
            clientTimeStamp: new Date(),
            user: this.authService.getUser().name,
            url: error.url,
            message: error.message,
            browser: navigator.userAgent
        };
        this.messages.next(objToSend);
    }



    public logData = (message) => {
        let objToSend: Message = {
            clientTimeStamp: new Date(),
            user: this.authService.getUser().name,
            url: message.url,
            message: message.message,
            browser: navigator.userAgent
        };
        this.messages.next(objToSend);
    }
}
