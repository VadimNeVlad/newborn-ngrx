import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Analytics } from '../shared/models/analytics';
import { getAnalytics } from '../store/analytic/analytic.actions';
import {
  getAnalyticSelector,
  isLoadingAnalyticSelector,
} from '../store/analytic/analytic.selectors';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
})
export class AnalyticsComponent implements OnInit {
  analytics$ = new Observable<Analytics | null>();
  isLoading$ = new Observable<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.analytics$ = this.store.pipe(select(getAnalyticSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingAnalyticSelector));

    this.getAnalytics();
  }

  getAnalytics(): void {
    this.store.dispatch(getAnalytics());
  }
}
