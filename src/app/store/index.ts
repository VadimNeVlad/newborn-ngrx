import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authReducer, AuthState } from './auth/auth.reducer';

import { categoryReducer, CategoryState } from './category/category.reducer';
import { modalReducer, ModalState } from './modal/modal.reducer';
import { orderReducer, OrderState } from './order/order.reducer';
import { positionReducer, PositionState } from './position/position.reducer';

export interface State {
  auth: AuthState;
  category: CategoryState;
  position: PositionState;
  modal: ModalState;
  order: OrderState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  category: categoryReducer,
  position: positionReducer,
  modal: modalReducer,
  order: orderReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
