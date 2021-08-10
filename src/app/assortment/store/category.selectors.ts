import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AssortmentState } from './category.reducer';

export const assortmentFeatureSelector =
  createFeatureSelector<AssortmentState>('assortment');

export const categoriesSelector = createSelector(
  assortmentFeatureSelector,
  (state: AssortmentState) => state.categories
);

export const categorySelector = createSelector(
  assortmentFeatureSelector,
  (state: AssortmentState) => state.category
);

export const categoryLoadingSelector = createSelector(
  assortmentFeatureSelector,
  (state: AssortmentState) => state.categoryLoading
);
