import { Component, NgZone } from '@angular/core';
import { PageTrack } from './decorators/analytics/analytics.decorator';
import { LogService } from './services/log/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@PageTrack('app')
export class AppComponent {
  constructor(protected zone: NgZone, private logService: LogService) {
    this.zone.onError.subscribe((e) => {
      this.logService.recordError(e);
    });
  }
  title = 'app';
}
