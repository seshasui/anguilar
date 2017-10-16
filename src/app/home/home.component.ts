import { Component, OnInit } from '@angular/core';
import { PageTrack } from '../decorators/analytics/analytics.decorator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@PageTrack('home')
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //throw new Error('Home Failed');
  }

}
