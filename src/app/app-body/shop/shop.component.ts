import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  currentPage = 2;
  numOfPages = 10;
  pages: Array<number> = [];
  items = []

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // let page = activatedRoute.snapshot.params.page;
    // this.currentPage = page ? page as unknown as number: 1;
    // console.log(this.currentPage);

    let firstTime = true;
    activatedRoute.params.subscribe(params => {
      let page = params.page;
      this.currentPage = page ? page as unknown as number : 1;
      if(!firstTime)
        this.ngOnInit();
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


}
