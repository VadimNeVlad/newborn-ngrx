import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/shared/models/filter';

@Component({
  selector: 'app-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss'],
})
export class HistoryFilterComponent implements OnInit {
  @Output() onFilter = new EventEmitter<Filter>();

  orderNumber!: number;
  startDate!: Date;
  endDate!: Date;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const opts: Filter = {};

    if (this.orderNumber) {
      opts.order = this.orderNumber;
    }

    if (this.startDate) {
      opts.start = this.startDate;
    }

    if (this.endDate) {
      opts.end = this.endDate;
    }

    this.onFilter.emit(opts);
  }
}
