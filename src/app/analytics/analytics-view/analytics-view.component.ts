import { Component, Input, OnInit } from '@angular/core';
import { Analytics } from 'src/app/shared/models/analytics';

@Component({
  selector: 'app-analytics-view',
  templateUrl: './analytics-view.component.html',
  styleUrls: ['./analytics-view.component.scss'],
})
export class AnalyticsViewComponent implements OnInit {
  @Input() analytics!: Analytics;

  constructor() {}

  ngOnInit(): void {}
}
