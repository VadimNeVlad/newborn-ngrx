import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPosition from './position.reducer';

export const positionFeatureSelector =
  createFeatureSelector<fromPosition.PositionState>('position');

export const positionsSelector = createSelector(
  positionFeatureSelector,
  fromPosition.selectAll
);

export const isLoadingSelector = createSelector(
  positionFeatureSelector,
  (state) => state.loading
);

export const isPendingSelector = createSelector(
  positionFeatureSelector,
  (state) => state.pending
);
