import { Action, createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/shared/models/category';
import {
  getCategories,
  getCategoriesFailure,
  getCategoriesSuccess,
  getCategory,
  getCategoryFailure,
  getCategorySuccess,
} from './category.actions';

export interface AssortmentState {
  categories: Category[];
  category: null | Category;
  categoryLoading: boolean;
}

export const initialState: AssortmentState = {
  categories: [],
  category: null,
  categoryLoading: true,
};

export const assortmentReducer = createReducer(
  initialState,
  on(
    getCategories,
    (state): AssortmentState => ({
      ...state,
      categoryLoading: true,
      category: null,
    })
  ),
  on(
    getCategoriesSuccess,
    (state, action): AssortmentState => ({
      ...state,
      categories: action.categories,
      categoryLoading: false,
    })
  ),
  on(
    getCategoriesFailure,
    (state): AssortmentState => ({
      ...state,
      categoryLoading: false,
    })
  ),
  on(
    getCategory,
    (state): AssortmentState => ({
      ...state,
      categoryLoading: true,
    })
  ),
  on(
    getCategorySuccess,
    (state, action): AssortmentState => ({
      ...state,
      category: action.category,
      categoryLoading: false,
    })
  ),
  on(
    getCategoryFailure,
    (state): AssortmentState => ({
      ...state,
      categoryLoading: false,
    })
  )
);
