import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomMaterialModule} from '../custom-material/custom-material.module';

import {StrToArrayPipe} from './str-to-array.pipe';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeComponent} from './recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {RouterModule} from '@angular/router';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrderByPipePipe } from './order-by-pipe.pipe';


@NgModule({
  declarations: [
    RecipeComponent,
    StrToArrayPipe,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeFormComponent,
    OrderByPipePipe
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RecipeModule {


}
