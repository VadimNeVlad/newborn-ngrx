import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Position } from 'src/app/shared/models/position';
import { modalClose, modalOpen } from 'src/app/store/modal/modal.actions';
import {
  deletePosition,
  fetchPositions,
  loadPositions,
} from 'src/app/store/position/position.actions';
import {
  isLoadingSelector,
  positionsSelector,
} from 'src/app/store/position/position.selectors';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss'],
})
export class PositionListComponent implements OnInit {
  @Input() categoryId = '';

  positions$ = new Observable<Position[]>();
  isLoading$ = new Observable<boolean>();

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.positions$ = this.store.pipe(select(positionsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));

    this.getPositions();
  }

  getPositions(): void {
    this.store.dispatch(fetchPositions({ categoryId: this.categoryId }));
  }

  deletePosition(id: string): void {
    this.store.dispatch(deletePosition({ id }));
  }

  openModal(modalType: string): void {
    this.store.dispatch(modalOpen({ modalOpen: modalType }));
  }

  closeModal(): void {
    this.store.dispatch(modalClose());
  }
}
