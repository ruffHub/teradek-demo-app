import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestDataProviderService} from '../../../../core/services/rest-data-provider.service';
import {UsersUrlProviderService} from '../../services/users-url-provider.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: null;

  constructor(private route: ActivatedRoute,
              public dataService: RestDataProviderService,
              private urlProvider: UsersUrlProviderService) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.loadUser(id);
  }

  loadUser(id: number) {
    this.dataService.getData(this.urlProvider.getUrlFor('users'))
      .subscribe(data => {
        this.user = data.filter(user => user.id === id)[0];
        console.log(this.user);
      });
  }

  getUser() {
    return this.user;
  }

}
