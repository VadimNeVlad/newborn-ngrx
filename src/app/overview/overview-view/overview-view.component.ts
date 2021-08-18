import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

import { Overview } from 'src/app/shared/models/overview';

@Component({
  selector: 'app-overview-view',
  templateUrl: './overview-view.component.html',
  styleUrls: ['./overview-view.component.scss'],
})
export class OverviewViewComponent implements OnInit {
  @Input() overview!: Overview;

  constructor() {}

  ngOnInit(): void {}
}
