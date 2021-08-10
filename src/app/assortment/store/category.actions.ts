import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/shared/models/category';

export enum ActionTypes {
  GET_CATEGORIES = '[Category] Get Categories',
  GET_CATEGORIES_SUCCESS = '[Category] Get Categories Success',
  GET_CATEGORIES_FAILURE = '[Category] Get Categories Failure',

  GET_CATEGORY = '[Category] Get Category',
  GET_CATEGORY_SUCCESS = '[Category] Get Category Success',
  GET_CATEGORY_FAILURE = '[Category] Get Category Failure',
}

export const getCategories = createAction(ActionTypes.GET_CATEGORIES);

export const getCategoriesSuccess = createAction(
  ActionTypes.GET_CATEGORIES_SUCCESS,
  props<{ categories: Category[] }>()
);

export const getCategoriesFailure = createAction(
  ActionTypes.GET_CATEGORIES_FAILURE
);

export const getCategory = createAction(
  ActionTypes.GET_CATEGORY,
  props<{ slug: string }>()
);

export const getCategorySuccess = createAction(
  ActionTypes.GET_CATEGORY_SUCCESS,
  props<{ category: Category }>()
);

export const getCategoryFailure = createAction(
  ActionTypes.GET_CATEGORY_FAILURE
);
