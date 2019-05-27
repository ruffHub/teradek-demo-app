import {Component, Input} from '@angular/core';
import {ILink} from './link.interface';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  @Input() link: ILink;
  @Input() cssClasses?: string | string[];
}
