import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-component2',
  templateUrl: './price-component2.component.html',
  styleUrls: ['./price-component2.component.css']
})
export class PriceComponent2Component implements OnInit {

  @Input() realPrice: number;
  @Input() salePrice: number;
  saleRate: number;

  constructor() { }

  ngOnInit(): void {
    if (this.salePrice )
      this.saleRate = (this.realPrice - this.salePrice) / this.realPrice;
  }

}
