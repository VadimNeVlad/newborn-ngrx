import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAnalytic from './analytic.reducer';

export const analyticsFeatureSelector =
  createFeatureSelector<fromAnalytic.AnalitycsState>('analytics');

export const getAnalyticSelector = createSelector(
  analyticsFeatureSelector,
  (state) => state.analytic
);

export const isLoadingAnalyticSelector = createSelector(
  analyticsFeatureSelector,
  (state) => state.loading
);
