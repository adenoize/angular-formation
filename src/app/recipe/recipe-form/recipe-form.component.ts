import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recipe = new Recipe();
  recipeForm: FormGroup;

  constructor(private recipeService: RecipeService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  onSubmit() {
    this.recipe.name = this.recipeForm.get('name').value
    this.recipe.picture = this.recipeForm.get('picture').value
    this.recipe.description = this.recipeForm.get('description').value

    this.recipeService.createRecipe(this.recipe);
  }
  createForm() {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      picture: '',
      description: ''
      });
}
}
