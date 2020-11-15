import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  currentPage: number = 2;
  numOfPages = 8;
  pages: Array<number> = [];
  items = [];

  filterState: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    let firstTime: boolean = true;
    activatedRoute.params.subscribe(params => {
      let page: number = parseInt(params.page);
      this.currentPage = page ? page : 1;
      if(!firstTime) {
        // this.ngOnInit();
        window.location.reload();
      }
      firstTime = false;
    });

  }

  ngOnInit(): void {
    console.log("init called");
    this.initilizePages();
    
    for (let i = 0; i < this.numOfPages; i++) {
      this.pages.push(i + 1);
    }
  }

  // setup pages
  initilizePages() {
    console.log("init page called")
    this.pages = [];
    this.items = new Array(Math.floor(Math.random() * 8) + 10);
  }


  // chnage filter state
  showFilter(status) {
    this.filterState = status;
  }


}
