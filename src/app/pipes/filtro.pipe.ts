import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[],texto: string,columna:string): any {
    // return null;
    
    if (texto==='') {
      return arreglo;
    }

    texto.toLowerCase();

    return arreglo.filter(item=>{
      return item[columna].toLowerCase().includes(texto);
    });

    // console.log(arreglo);
    // return arreglo;
  }

}
