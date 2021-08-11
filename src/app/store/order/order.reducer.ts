import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as OrderActions from './order.actions';
import { Order } from 'src/app/shared/models/order';

export interface OrderState extends EntityState<Order> {
  pending: boolean;
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>({
  selectId: (state) => state._id || '',
});

export const initialState: OrderState = adapter.getInitialState({
  pending: false,
});

export const orderReducer = createReducer(
  initialState,
  on(OrderActions.addOrder, (state, action) => ({
    ...state,
    pending: true,
  })),
  on(OrderActions.addOrderSuccess, (state, { order }) =>
    adapter.addOne(order, {
      ...state,
      pending: false,
    })
  )
  // on(OrderActions.addOrder, (state, action) =>
  //   adapter.addOne(action.order, state)
  // ),
  // on(OrderActions.upsertOrder, (state, action) =>
  //   adapter.upsertOne(action.order, state)
  // ),
  // on(OrderActions.addOrders, (state, action) =>
  //   adapter.addMany(action.orders, state)
  // ),
  // on(OrderActions.upsertOrders, (state, action) =>
  //   adapter.upsertMany(action.orders, state)
  // ),
  // on(OrderActions.updateOrder, (state, action) =>
  //   adapter.updateOne(action.order, state)
  // ),
  // on(OrderActions.updateOrders, (state, action) =>
  //   adapter.updateMany(action.orders, state)
  // ),
  // on(OrderActions.deleteOrder, (state, action) =>
  //   adapter.removeOne(action.id, state)
  // ),
  // on(OrderActions.deleteOrders, (state, action) =>
  //   adapter.removeMany(action.ids, state)
  // ),
  // on(OrderActions.loadOrders, (state, action) =>
  //   adapter.setAll(action.orders, state)
  // ),
  // on(OrderActions.clearOrders, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const isPending = (state: OrderState) => state.pending;
