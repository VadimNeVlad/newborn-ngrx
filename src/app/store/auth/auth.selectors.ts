import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const authFeatureSelector = createFeatureSelector<AuthState>('auth');

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.isAuth
);

export const isSubmitingSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.isLoading
);

export const currentUserEmailSelector = createSelector(
  authFeatureSelector,
  (state: AuthState) => state.currentUserEmail
);
