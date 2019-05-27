import {Injectable} from '@angular/core';

@Injectable(
  // {
  // providedIn: 'root'
// }
)
export class UsersUrlProviderService {
  private endpoints = {
    users: 'assets/users.json',
  };

  constructor() {
  }

  getUrlFor(entity: string): string {
    if (!this.endpoints.hasOwnProperty(entity)) {
      throw Error('requested url is not exist');
    }

    return this.endpoints[entity];
  }

}
