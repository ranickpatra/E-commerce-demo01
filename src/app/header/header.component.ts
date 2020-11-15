import { Component, OnInit, ViewChild } from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('root') root;

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

  ngAfterViewInit() {
    M.Sidenav.init(this.root.nativeElement.querySelectorAll('.sidenav')); // sidebar nav
    M.Tooltip.init(this.root.nativeElement.querySelectorAll('.tooltipped'));  // tooltip
  }

}
