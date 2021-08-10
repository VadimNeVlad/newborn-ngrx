import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { modalClose } from 'src/app/store/modal/modal.actions';
import { modalOpenTypeSelector } from 'src/app/store/modal/modal.selectors';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() modalType = '';
  @Input() title = '';
  @Input() text = '';

  modalStatus$ = new Observable<string>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.modalStatus$ = this.store.pipe(select(modalOpenTypeSelector));
  }

  onClose(): void {
    this.store.dispatch(modalClose());
  }
}
