import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-component3',
  templateUrl: './price-component3.component.html',
  styleUrls: ['./price-component3.component.css']
})
export class PriceComponent3Component implements OnInit {

  @Input() realPrice: number;
  @Input() salePrice: number;
  saleRate: number;

  constructor() { }

  ngOnInit(): void {
    if (this.salePrice )
      this.saleRate = (this.realPrice - this.salePrice) / this.realPrice;
  }

}
