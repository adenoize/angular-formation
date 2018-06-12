import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomMaterialModule} from '../custom-material/custom-material.module';

import {StrToArrayPipe} from './str-to-array.pipe';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeComponent} from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    RecipeComponent,
    StrToArrayPipe,
    RecipesComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ]
})
export class RecipeModule {


}
