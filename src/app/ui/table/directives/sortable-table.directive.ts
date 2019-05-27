import {Directive, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';

import {TableSortService} from '../services/table-sort.service';

@Directive({
  selector: '[app-sortable-table]'
})
export class SortableTableDirective implements OnInit, OnDestroy {
  @Output() gridSortChangedEvent = new EventEmitter();

  private columnSortedSubscription: Subscription;

  constructor(private sortService: TableSortService) {
  }

  ngOnInit() {
    this.columnSortedSubscription = this.sortService.columnSorted$
      .subscribe(event => this.gridSortChangedEvent.emit(event));
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }
}
