import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
import {animate, query, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})

export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() deleteRecipeEvent = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  deleteCocktail() {
    this.recipeService.deleteRecipe(this.recipe.id).subscribe();
    this.deleteRecipeEvent.emit(this.recipe);
  }
}
