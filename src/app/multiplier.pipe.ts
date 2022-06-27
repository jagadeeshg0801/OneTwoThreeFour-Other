import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'multiplier',
})
export class MultiplierPipe implements PipeTransform {
  transform(value: number, mul: any) {
    return `${mul} x ${value}  =` + parseFloat(mul) * value;
  }
}
