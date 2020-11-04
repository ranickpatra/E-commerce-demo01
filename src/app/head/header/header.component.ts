import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categoryItems: any = [
    {
      name: "Electronics",
      items: []
    }, {
      name: "TVs & Appliances",
      items: []
    }, {
      name: "Men",
      items: []
    }, {
      name: "Women",
      items: []
    }, {
      name: "Baby & kids",
      items: []
    }, {
      name: "Home & Furniture",
      items: []
    }, {
      name: "Sports, Books & More",
      items: []
    }, {
      name: "Flight",
      items: []
    }, {
      name: "Offer Zone"
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
