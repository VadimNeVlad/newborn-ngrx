import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { OrderListBuilderService } from 'src/app/shared/services/order-list-builder.service';
import { getCategories } from 'src/app/store/category/category.actions';
import {
  categorySelector,
  isLoadingSelector,
} from 'src/app/store/category/category.selectors';
import { modalOpen } from 'src/app/store/modal/modal.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-order-categories',
  templateUrl: './order-categories.component.html',
  styleUrls: ['./order-categories.component.scss'],
})
export class OrderCategoriesComponent implements OnInit {
  baseUrl = environment.apiUrl + '/';
  categories$ = new Observable<Category[]>();
  isLoading$ = new Observable<boolean>();

  constructor(
    private store: Store,
    public orderBuilder: OrderListBuilderService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.store.pipe(select(categorySelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));

    this.getCategories();
  }

  getCategories(): void {
    this.store.dispatch(getCategories());
  }

  openModal(modalType: string): void {
    this.store.dispatch(modalOpen({ modalOpen: modalType }));
  }
}
