import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initcap'
})
export class InitcapPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return;
    }
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
  }

}
