import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo:any[], texto:string): any[] {
    
  if(texto === ''){
    return arreglo
  }

  return arreglo.filter(item =>{
    return item.address.city.toLowerCase().includes(texto.toLowerCase())
  })
  
  }
}
