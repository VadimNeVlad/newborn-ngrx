import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Filter } from '../shared/models/filter';
import { Order } from '../shared/models/order';
import { OrderService } from '../shared/services/order.service';
import {
  clearOrders,
  getOrders,
  loadMoreOrders,
  searchOrders,
} from '../store/order/order.actions';
import {
  isLastOrdersSelector,
  isLoadingOrderSelector,
  isPendingOrderSelector,
  ordersSelector,
} from '../store/order/order.selectors';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit, OnDestroy {
  orders$ = new Observable<Order[]>();
  isLoading$ = new Observable<boolean>();
  isLastOrder$ = new Observable<boolean>();
  isPending$ = new Observable<boolean>();

  filter: Filter = {};
  filterVisible = false;

  constructor(private store: Store, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders$ = this.store.pipe(select(ordersSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingOrderSelector));
    this.isLastOrder$ = this.store.pipe(select(isLastOrdersSelector));
    this.isPending$ = this.store.pipe(select(isPendingOrderSelector));

    this.getOrders();
  }

  ngOnDestroy(): void {
    this.store.dispatch(clearOrders());
  }

  loadMore(): void {
    this.orderService.offset += this.orderService.step;
    this.getLoadMoreOrders();
  }

  queryParamsValues() {
    const params = Object.assign({}, this.filter, {
      offset: this.orderService.offset,
      limit: this.orderService.limit,
    });

    return params;
  }

  getOrders(): void {
    const params = this.queryParamsValues();
    this.store.dispatch(getOrders({ params }));
  }

  getLoadMoreOrders(): void {
    const params = this.queryParamsValues();
    this.store.dispatch(loadMoreOrders({ params }));
  }

  searchOrders(): void {
    const params = this.queryParamsValues();

    this.store.dispatch(searchOrders({ params }));
  }

  applyFilter(filter: Filter): void {
    this.orderService.offset = 0;
    this.filter = filter;

    this.searchOrders();
  }
}
