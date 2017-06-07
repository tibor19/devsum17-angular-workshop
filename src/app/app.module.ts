import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router'; 

import { ProductsService } from './products.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { RecipeComponent } from './recipe/recipe.component';
import { WeeklyMenuComponent } from './weekly-menu/weekly-menu.component';
import { RecepiesComponent } from './recepies/recepies.component';

const appRoutes = [
  { path: '', component: ContentComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: 'weekly-menu', component: WeeklyMenuComponent },
  { path: 'recepies', component: RecepiesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    RecipeComponent,
    WeeklyMenuComponent,
    RecepiesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
