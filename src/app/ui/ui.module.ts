import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LinkComponent} from './link';
import {TableModule} from './table/table.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TableModule,
  ],
  exports: [
    LinkComponent,
    TableModule,
  ]
})

export class UiModule {
}
