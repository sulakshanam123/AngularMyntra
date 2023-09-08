import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finalPrice'
})
export class FinalPricePipe implements PipeTransform {

  transform(value: number, discount: any, shippingCharge: any): unknown {
    console.log(value, discount, shippingCharge);
    const finalVal = value - discount - shippingCharge;
    return finalVal;
  }

}
