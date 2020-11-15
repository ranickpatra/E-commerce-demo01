import { Component, OnInit, ViewChild } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-shop-side-bar',
  templateUrl: './shop-side-bar.component.html',
  styleUrls: ['./shop-side-bar.component.css']
})
export class ShopSideBarComponent implements OnInit {

  @ViewChild('priceSlider') priceSlider;

  constructor() { }

  ngOnInit(): void {
  }



}
