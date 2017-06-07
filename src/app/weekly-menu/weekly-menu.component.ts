import { Component, OnInit } from '@angular/core';
import { IRecipe, RecipeService } from '../services/recipe.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.css', '../box.css']
})
export class WeeklyMenuComponent implements OnInit {

  recipes: IRecipe[] = [];
  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(data => {this.recipes = data;});
  }

}
