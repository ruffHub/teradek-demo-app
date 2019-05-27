import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './components/header';
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
