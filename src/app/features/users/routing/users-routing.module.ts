import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from '../components/user-list/users.component';
import {UserDetailsComponent} from '../components/user-details/user-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'list'},
  {path: 'list', component: UsersComponent},
  {path: 'user/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
