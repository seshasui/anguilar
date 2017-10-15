import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LogService } from './services/log/log.service';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private logService: LogService, private injector: Injector) { }
    handleError(error) {
        const location = this.injector.get(LocationStrategy);
        const message = error.message ? error.message : error.toString();
        console.log(error);
        const url = location instanceof PathLocationStrategy ? location.path() : '';
        StackTrace.fromError(error).then(stackframes => {
            const stackString = stackframes
              .splice(0, 20)
              .map(function(sf) {
                return sf.toString();
              }).join('\n');
          // log on the server
          this.logService.recordError({ message, url, stack: stackString });
          });
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    }
}
