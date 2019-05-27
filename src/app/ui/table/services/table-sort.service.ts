import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {ColumnSortedEvent} from '../interfaces/column-sorted-event';


@Injectable()
export class TableSortService {
  constructor() {
  }

  private columnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: ColumnSortedEvent) {
    this.columnSortedSource.next(event);
  }

}


