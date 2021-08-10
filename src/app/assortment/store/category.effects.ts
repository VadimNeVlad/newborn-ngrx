import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/shared/services/categories.service';
import {
  getCategories,
  getCategoriesFailure,
  getCategoriesSuccess,
  getCategory,
  getCategoryFailure,
  getCategorySuccess,
} from './category.actions';

@Injectable()
export class AssortmentEffects {
  getCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCategories),
      switchMap(() => {
        return this.categoriesService.getCategories().pipe(
          map((categories) => {
            return getCategoriesSuccess({ categories });
          }),
          catchError((err: HttpErrorResponse) => {
            this.toastr.error(err.error.message);
            return of(getCategoriesFailure());
          })
        );
      })
    );
  });

  getCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCategory),
      switchMap(({ slug }) => {
        return this.categoriesService.getCategory(slug).pipe(
          map((category) => {
            return getCategorySuccess({ category });
          }),
          catchError((err: HttpErrorResponse) => {
            this.toastr.error(err.error.message);
            return of(getCategoryFailure());
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
    private toastr: ToastrService
  ) {}
}
