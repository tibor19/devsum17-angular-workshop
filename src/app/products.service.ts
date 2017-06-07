import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ProductsService {

  recepies:Observable<Array<any>>;

  recipe:Observable<any>;

  loaded:boolean;
  httpService:Http;

  

  constructor(private http:Http) {
      this.loaded = false;
      this.httpService = http;
      this.recipe = Observable.of({});
  }

  loadData() {
    this.recepies = this.httpService
      .get('../assets/data/recepiesdata.json')
      .map(response => response.json());
    this.recepies.subscribe(response => this.loaded = true);
    
  }

  getRecipe(id):Observable<any> {

    if (!this.loaded){
      this.loadData();
    } 

    this.recepies.subscribe(response => {
      this.recipe = response.find(r => r.recipeId == id);
    });

    return this.recipe;
  }

  getRandomRecipe():Observable<any> {
    // if (!this.loaded){
    //   this.loadData();
    // } 

    // this.recepies.subscribe(rs => {
    //     var rnd = Math.floor(Math.random() * rs.length);
    //     this.recipe = rs.find(r => r.recipeId == rnd);
    // });

    return this.recipe;
  }

}
