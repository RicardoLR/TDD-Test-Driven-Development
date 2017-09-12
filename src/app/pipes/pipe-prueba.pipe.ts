import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrueba'
})
export class PipePruebaPipe implements PipeTransform {

  transform(items: any, termino: any): any {

    if(termino === undefined) return items;

    return items.filter( (item)=>{
      return item.toLowerCase().includes( termino.toLowerCase() );
    });
  }


}


