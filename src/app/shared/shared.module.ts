import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './index';
import {UiModule} from '../ui/ui.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    UiModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class SharedModule {
}
