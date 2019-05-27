import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {LinkComponent} from './link';
import {TableModule} from './table/table.module';

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
