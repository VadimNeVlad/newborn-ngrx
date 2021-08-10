import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/models/category';
import { getCategories } from 'src/app/store/category/category.actions';
import {
  categorySelector,
  isLoadingSelector,
} from 'src/app/store/category/category.selectors';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories$ = new Observable<Category[]>();
  loading$ = new Observable<boolean>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categories$ = this.store.pipe(select(categorySelector));
    this.loading$ = this.store.pipe(select(isLoadingSelector));

    this.getCategories();
  }

  getCategories(): void {
    this.store.dispatch(getCategories());
  }
}
