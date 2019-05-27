import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableComponent} from './components/table/table.component';
import {TableFilterPipe} from './pipes/table-filter.pipe';
import {FormsModule} from '@angular/forms';
import {TableSortService} from './services/table-sort.service';
import {SortableComponent} from './components/sortable/sortable.component';
import {SortableTableDirective} from './directives/sortable-table.directive';
import { TableRowComponent } from './components/table/table-row/table-row.component';

@NgModule({
  declarations: [
    TableComponent,
    TableFilterPipe,
    SortableComponent,
    SortableTableDirective,
    TableRowComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TableComponent,
    SortableComponent,
    TableRowComponent,
    TableFilterPipe,
    FormsModule,
  ],
  providers: [TableSortService],
})
export class TableModule {
}
