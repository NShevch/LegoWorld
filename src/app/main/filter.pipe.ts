import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    const valueFiltered = value.filter((item: any) => {
      return new RegExp(filterString, "i").test(item[propName]);
    });
    return valueFiltered;
  }

}
