import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-ratting-view-full',
  templateUrl: './product-ratting-view-full.component.html',
  styleUrls: ['./product-ratting-view-full.component.css']
})
export class ProductRattingViewFullComponent implements OnInit {

  @Input() ratting: number;
  @Input() numberOfRatting: number;

  constructor() { }

  ngOnInit(): void {
  }

}
