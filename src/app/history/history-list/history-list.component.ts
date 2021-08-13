import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from 'src/app/shared/models/order';
import { modalClose, modalOpen } from 'src/app/store/modal/modal.actions';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent implements OnInit {
  @Input() orders: Order[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {}

  calculatePrice(order: Order): number {
    return order.list.reduce((acc, cur) => (acc += cur.cost * cur.quantity), 0);
  }

  openModal(modalType: string): void {
    this.store.dispatch(modalOpen({ modalOpen: modalType }));
  }

  closeModal(): void {
    this.store.dispatch(modalClose());
  }
}
