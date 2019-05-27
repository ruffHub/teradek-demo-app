import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomePageComponent} from './index';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent,
  ],
})
export class HomePageModule {
}
