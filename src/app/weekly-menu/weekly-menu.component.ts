import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-weekly-menu',
  templateUrl: './weekly-menu.component.html',
  styleUrls: ['./weekly-menu.component.css'],
  providers: [ProductsService]
})
export class WeeklyMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
