import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { map, switchMap } from 'rxjs/operators';
import { OrderListBuilderService } from 'src/app/shared/services/order-list-builder.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { modalClose } from '../modal/modal.actions';
import { addOrder, addOrderSuccess } from './order.actions';

@Injectable()
export class OrderEffects {
  addOrder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addOrder),
      switchMap(({ order }) => {
        return this.orderService.addOrder(order).pipe(
          map((order) => {
            this.toastr.success('Заказ успешно добавлен');
            this.store.dispatch(modalClose());
            this.router.navigateByUrl('order');
            this.orderBuilderService.clearItems();

            return addOrderSuccess({ order });
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private toastr: ToastrService,
    private router: Router,
    private store: Store,
    private orderBuilderService: OrderListBuilderService
  ) {}
}
