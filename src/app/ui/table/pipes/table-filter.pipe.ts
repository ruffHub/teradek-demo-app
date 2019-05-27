import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tableFilterPipe',
  pure: false
})
export class TableFilterPipe implements PipeTransform {

  transform(value: any[], searchText: string, prop?: any): any {
    if (!value) {
      return [];
    }
    if (!searchText || !prop) {
      return value;
    }

    searchText = searchText.toLowerCase();
    const isArr = Array.isArray(value);
    const flag = isArr && typeof value[0] === 'object' ? true : isArr && typeof value[0] !== 'object' ? false : true;

    return value.filter(ele => {
      const val = flag ? ele[prop] : ele;
      return val.toString().toLowerCase().includes(searchText);
    });

  }
}
