import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {TableSortService} from '../../services/table-sort.service';

@Component({
  selector: '[sortable-column]',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss']
})
export class SortableComponent implements OnInit, OnDestroy {
  @Input('sortable-column') columnName: string;
  @Input('sort-direction') sortDirection = '';

  private columnSortedSubscription: Subscription;

  @HostListener('click') sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortService.columnSorted({sortColumn: this.columnName, sortDirection: this.sortDirection});
  }

  constructor(private sortService: TableSortService) {
  }

  ngOnInit() {
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
      if (this.columnName !== event.sortColumn) {
        this.sortDirection = '';
      }
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }
}
