import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Overview } from '../shared/models/overview';
import { getOverview } from '../store/overview/overview.actions';
import {
  getOverviewSelector,
  isLoadingOverviewSelector,
} from '../store/overview/overview.selectors';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  overview$ = new Observable<Overview | null>();
  isLoading$ = new Observable<boolean>();

  yesterdayDate = '';
  noteStatus = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.overview$ = this.store.pipe(select(getOverviewSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingOverviewSelector));
    this.yesterdayDate = moment().add(-1, 'd').format('DD.MM.YYYY');

    this.getOverview();
  }

  getOverview(): void {
    this.store.dispatch(getOverview());
  }
}
