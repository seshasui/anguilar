import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogService } from '../log/log.service';

@Injectable()
export class AnalyticsService {
    private user: any;
    constructor(private logService?: LogService, private route?: ActivatedRoute) { }

    public visit = (pageName) => {
        /* let message = {
            message: pageName + ' visited',
            url: this.route.url
        }; */
        //this.logService.logData(message);
        console.log(pageName + ' visited');
    }

    public leave = (pageName) => {
       /*  let message = {
            message: pageName + ' left',
            url: this.route.url
        }; */
        //this.logService.logData(message);
        console.log(pageName + ' left');
    }

}
