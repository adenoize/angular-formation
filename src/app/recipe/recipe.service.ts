import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Recipe} from './recipe.model';
import {RECIPES} from './recipes.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipeUrl = 'http://10.0.1.55:8080/api/v1/recipes';

  constructor(private httpClient: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.recipeUrl);
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${ this.recipeUrl }/${ id }`);
  }
}
