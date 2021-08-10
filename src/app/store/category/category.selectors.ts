import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategory from './category.reducer';

export const categoryFeatureSelector =
  createFeatureSelector<fromCategory.CategoryState>('category');

export const categorySelector = createSelector(
  categoryFeatureSelector,
  fromCategory.selectAll
);

export const selectCategoryEntities = createSelector(
  categoryFeatureSelector,
  fromCategory.selectEntities
);

export const selectCurrentCategoryId = createSelector(
  categoryFeatureSelector,
  fromCategory.getCurrentCategoryId
);

export const currentCategorySelector = createSelector(
  selectCategoryEntities,
  selectCurrentCategoryId,
  (categoriesEntities, categoryId) => categoriesEntities[categoryId]
);

export const isLoadingSelector = createSelector(
  categoryFeatureSelector,
  (state) => state.loading
);

export const isPendingSelector = createSelector(
  categoryFeatureSelector,
  (state) => state.pending
);
