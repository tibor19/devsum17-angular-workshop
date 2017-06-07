import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  
})
export class RecipeComponent implements OnInit {

  private productsService:ProductsService;

  private id:number;
  recipe:Observable<any>;

  constructor(private route: ActivatedRoute, private ps:ProductsService)  {
    this.productsService = ps;
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
        this.id = params['id'];
    });
    this.recipe = this.id ? this.productsService.getRecipe(this.id) : this.productsService.getRandomRecipe();
    console.log(this.recipe);
  }

}
