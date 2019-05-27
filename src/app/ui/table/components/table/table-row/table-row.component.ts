import {Component, Input, OnInit} from '@angular/core';
import {ITableSchema} from '../../../interfaces/table.interface';
import {IUser} from '../../../../../features/users/interfaces/user';

@Component({
  selector: '[table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() row: IUser;
  @Input() tableSchema: ITableSchema[] = [];

  ngOnInit(): void {
  }
}
