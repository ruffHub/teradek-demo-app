import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersModule} from './users/users.module';
import {HomePageModule} from './home-page/home-page.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageModule
  ],
  exports: [
    UsersModule,
    HomePageModule
  ]
})
export class FeaturesModule {
}
