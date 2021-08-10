import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { authReducer, AuthState } from '../auth/store/auth.reducer';
import { categoryReducer, CategoryState } from './category/category.reducer';
import { modalReducer, ModalState } from './modal/modal.reducer';
import { positionReducer, PositionState } from './position/position.reducer';

export interface State {
  auth: AuthState;
  category: CategoryState;
  position: PositionState;
  modal: ModalState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  category: categoryReducer,
  position: positionReducer,
  modal: modalReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
