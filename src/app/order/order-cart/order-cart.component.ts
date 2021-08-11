import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { OrderListBuilderService } from 'src/app/shared/services/order-list-builder.service';
import { modalClose } from 'src/app/store/modal/modal.actions';
import { addOrder } from 'src/app/store/order/order.actions';
import { isPendingOrderSelector } from 'src/app/store/order/order.selectors';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.scss'],
})
export class OrderCartComponent implements OnInit {
  isPending$ = new Observable<boolean>();

  constructor(
    public orderBuilder: OrderListBuilderService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.isPending$ = this.store.pipe(select(isPendingOrderSelector));
  }

  closeModal(): void {
    this.store.dispatch(modalClose());
  }

  deleteItem(id: string): void {
    this.orderBuilder.removeItem(id);
  }

  onSubmit(): void {
    const newOrder = this.orderBuilder.orderList.map((item) => {
      return item;
    });

    this.store.dispatch(addOrder({ order: { list: newOrder } }));
  }
}
