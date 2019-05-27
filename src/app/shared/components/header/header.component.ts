import {Component, OnInit} from '@angular/core';
import {ILink} from '../../../ui/link/link.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navBarLinks: ILink[];

  constructor() {
    this.navBarLinks = [
      {
        url: '/home',
        linkText: 'Home'
      },
      {
        url: '/users',
        linkText: 'Users'
      }
    ];
  }

  ngOnInit() {
  }

  getNavBarLinks(): ILink[] {
    return this.navBarLinks;
  }

}
