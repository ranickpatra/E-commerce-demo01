import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-component1',
  templateUrl: './price-component1.component.html',
  styleUrls: ['./price-component1.component.css']
})
export class PriceComponent1Component implements OnInit {

  @Input() realPrice: number;
  @Input() salePrice: number;
  saleRate: number;

  constructor() { }

  ngOnInit(): void {
    if (this.salePrice )
      this.saleRate = this.salePrice / this.realPrice;
  }

}
