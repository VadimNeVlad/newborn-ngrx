import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderListItem } from 'src/app/shared/models/order-list-item';

import { OrderListBuilderService } from 'src/app/shared/services/order-list-builder.service';
import { modalClose, modalOpen } from 'src/app/store/modal/modal.actions';
import { fetchPositions } from 'src/app/store/position/position.actions';
import {
  isLoadingSelector,
  isPendingSelector,
  positionsSelector,
} from 'src/app/store/position/position.selectors';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
})
export class AddOrderComponent implements OnInit {
  positions$ = new Observable<OrderListItem[]>();
  isLoading$ = new Observable<boolean>();
  isPending$ = new Observable<boolean>();
  categoryId = '';

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    public orderBuilder: OrderListBuilderService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isPending$ = this.store.pipe(select(isPendingSelector));
    this.categoryId = this.route.snapshot.paramMap.get('id') || '';

    this.getPositions();
    this.createNewPositionObj();
  }

  getPositions(): void {
    this.store.dispatch(fetchPositions({ categoryId: this.categoryId }));
  }

  createNewPositionObj() {
    this.positions$ = this.store.pipe(
      select(positionsSelector),
      map((positions) => {
        return positions.map((position) => {
          return {
            name: position.name,
            category: position.category,
            cost: position.cost,
            _id: position._id,
            quantity: 1,
          };
        });
      })
    );
  }

  openModal(modalType: string): void {
    this.store.dispatch(modalOpen({ modalOpen: modalType }));
  }

  addItem(item: OrderListItem) {
    const newOrderList: OrderListItem = {
      ...item,
    };

    this.orderBuilder.addItem(newOrderList);
    this.toastr.success(`Товар ${item.name} добавлен в корзину`);
  }
}
