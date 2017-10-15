import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    private user: any;
    constructor() { }

    public recordError = (error) => {
        console.log(error + 'error');
    }
}
