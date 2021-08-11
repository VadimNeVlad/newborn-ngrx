import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './order.reducer';

export const orderFeatureSelector = createFeatureSelector<OrderState>('order');

export const isPendingOrderSelector = createSelector(
  orderFeatureSelector,
  (state) => state.pending
);
