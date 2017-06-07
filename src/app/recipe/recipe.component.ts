import { Component, OnInit } from '@angular/core';
import { IRecipe, RecipeService } from '../services/recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: IRecipe;

  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    let id = this.activeRoute.snapshot.params.id;
    this.recipeService.getRecipe(id).subscribe(r => this.recipe = r);
  }

}
