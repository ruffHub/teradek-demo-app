import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {RestDataProviderService} from '../../../../core/services/rest-data-provider.service';
import {ITableSchema} from '../../../../ui/table/interfaces/table.interface';
import {IUser} from '../../interfaces/user';
import {UsersUrlProviderService} from '../../services/users-url-provider.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  tableSchema: ITableSchema[];
  searchTerm: string;
  searchAttr: string;

  constructor(private router: Router,
              private urlProvider: UsersUrlProviderService,
              public dataService: RestDataProviderService) {
  }

  ngOnInit() {
    this.loadData();

    this.tableSchema = [
      {
        attr: 'firstName',
        head: 'First Name',
        sortable: true,
      },
      {
        attr: 'lastName',
        head: 'Last Name',
        sortable: true,
      },
      {
        attr: 'phone',
        head: 'Phone',
        sortable: true,
      },
      {
        attr: 'address',
        head: 'Address',
        sortable: true,
      },
    ];

    this.searchAttr = this.getTableSchema()[0].attr;
  }

  loadData() {
    this.dataService.getData(this.urlProvider.getUrlFor('users'))
      .subscribe(data => this.users = data);
  }


  getTableData() {
    return this.users;
  }

  getTableSchema() {
    return this.tableSchema;
  }

  onRowClicked(user: IUser) {
    const {id} = user;

    this.navigateToDetails(id);
  }

  navigateToDetails(id: number) {
    this.router.navigate(['/users/user/id', {id}]);
  }

}
