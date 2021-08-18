import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOverviews from './overview.reducer';

export const overviewsFeatureSelector =
  createFeatureSelector<fromOverviews.OverviewState>('overview');

export const getOverviewSelector = createSelector(
  overviewsFeatureSelector,
  (state) => state.overview
);

export const isLoadingOverviewSelector = createSelector(
  overviewsFeatureSelector,
  (state) => state.loading
);
