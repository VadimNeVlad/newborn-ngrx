import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOrder from './order.reducer';

export const orderFeatureSelector =
  createFeatureSelector<fromOrder.OrderState>('order');

export const ordersSelector = createSelector(
  orderFeatureSelector,
  fromOrder.selectAll
);

export const isPendingOrderSelector = createSelector(
  orderFeatureSelector,
  (state) => state.pending
);

export const isLoadingOrderSelector = createSelector(
  orderFeatureSelector,
  (state) => state.loading
);

export const isLastOrdersSelector = createSelector(
  orderFeatureSelector,
  (state) => state.isLastOrders
);
