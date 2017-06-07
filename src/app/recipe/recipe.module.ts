import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HomeComponent } from '../home/home.component';
import { WeeklyMenuComponent } from '../weekly-menu/weekly-menu.component';
import { RecipeComponent } from './recipe.component';
import { RecipeImagePipe } from '../pipes/recipe-image.pipe';
import { RecipeService } from '../services/recipe.service';

@NgModule({
  imports: [
    CommonModule, HttpModule
  ],
  declarations: [HomeComponent, WeeklyMenuComponent, RecipeComponent, RecipeImagePipe],
  exports: [HomeComponent, WeeklyMenuComponent, RecipeComponent],
  providers: [RecipeService]
})
export class RecipeModule { }
