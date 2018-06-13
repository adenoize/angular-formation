import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from './recipe.model';
import {isNullOrUndefined} from 'util';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipePipe implements PipeTransform {

  transform(recipes: Recipe[], args?: any): Recipe[] {
if (recipes) {

    return recipes.sort((a, b) => isNullOrUndefined(a.name) ? -1 : a.name.localeCompare(b.name));
}
return null;
  }

}
