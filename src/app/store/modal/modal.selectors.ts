import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ModalState } from './modal.reducer';

export const modalFeatureSelector = createFeatureSelector<ModalState>('modal');

export const modalOpenTypeSelector = createSelector(
  modalFeatureSelector,
  (state) => state.modalOpen
);
