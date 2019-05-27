import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UiModule} from '../../ui/ui.module';
import {UsersUrlProviderService} from './services/users-url-provider.service';
import {UsersRoutingModule} from './routing/users-routing.module';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersComponent} from './components/user-list/users.component';

@NgModule({
  providers: [
    UsersUrlProviderService
  ],
  declarations: [
    UsersComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UiModule
  ]
})
export class UsersModule {
}
