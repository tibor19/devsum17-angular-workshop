import { Component, OnInit } from '@angular/core';
import { ProductsService } from "app/products.service";

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  productsService:ProductsService;

  constructor(private ps:ProductsService) {
      this.productsService = ps;
   }

  ngOnInit() {
  }

}
