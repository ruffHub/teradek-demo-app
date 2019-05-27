import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ITableSchema} from '../../interfaces/table.interface';
import {ColumnSortedEvent} from '../../interfaces/column-sorted-event';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() cssClasses?: string | string[];
  @Input() tableData: object[];
  @Input() tableSchema: ITableSchema[];
  @Input() searchAttr?: string = undefined;
  @Input() searchTerm?: string = undefined;

  @Output() rowClickedEvent = new EventEmitter<object>();

  constructor() {
  }

  ngOnInit() {
  }

  getTableData() {
    return this.tableData;
  }

  getTableSchema() {
    return this.tableSchema;
  }

  onRowClicked(item) {
    this.rowClickedEvent.emit(item);
  }

  onGridSortChanged($event: ColumnSortedEvent) {
    const {sortColumn, sortDirection} = $event;

    if (sortDirection === 'desc') {
      this.getTableData().sort((a, b) => {
        if (a[sortColumn] > b[sortColumn]) {
          return 1;
        }

        if (a[sortColumn] < b[sortColumn]) {
          return -1;
        }

        return 0;
      });
    } else {
      this.getTableData().sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) {
          return 1;
        }

        if (a[sortColumn] > b[sortColumn]) {
          return -1;
        }

        return 0;
      });
    }
  }
}
