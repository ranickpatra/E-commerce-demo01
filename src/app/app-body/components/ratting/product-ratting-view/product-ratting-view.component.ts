import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-ratting-view',
  templateUrl: './product-ratting-view.component.html',
  styleUrls: ['./product-ratting-view.component.css']
})
export class ProductRattingViewComponent implements OnInit {

  @Input() ratting: number;
  @Input() numberOfRatting: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
