import { Injectable } from '@angular/core';

@Injectable()
export class AnalyticsService {
    private user: any;
    constructor() { }

    public visit = (pageName) => {
        console.log(pageName + 'visited');
    }

    public leave = (pageName) => {
        console.log(pageName + 'left');
    }

}
