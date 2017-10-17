import {Component, OnInit} from '@angular/core';
import {PageTrack} from '../decorators/analytics/analytics.decorator';
import {Widget} from '../models/widget';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@PageTrack('home')
export class HomeComponent implements OnInit {

  widgets: Array<Widget> = [{
    'title': 'Financial Times',
    description: 'Fiancial Times Application',
    url: 'https://www.ft.com/?mhq5j=e5'
  },
    {
      'title': 'Financial Times',
      description: 'Fiancial Times Application',
      url: 'http://localhost:4202'
    },
    {
      'title': 'Financial Times',
      description: 'Fiancial Times Application',
      url: 'http://localhost:4201'
    },
    {
      'title': 'Financial Times',
      description: 'Fiancial Times Application',
      url: 'https://www.ft.com/?mhq5j=e5'
    }];

  selectedWidget: Widget;


  constructor(public sanitizer: DomSanitizer){}

  openApp(widget: Widget) {
    this.selectedWidget = widget;
  }

  ngOnInit() {
    //throw new Error('Home Failed');
  }

}
