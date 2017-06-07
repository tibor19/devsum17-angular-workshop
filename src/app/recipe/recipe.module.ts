import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { WeeklyMenuComponent } from '../weekly-menu/weekly-menu.component';
import { RecipeComponent } from './recipe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, WeeklyMenuComponent, RecipeComponent],
  exports: [HomeComponent, WeeklyMenuComponent, RecipeComponent]
})
export class RecipeModule { }
