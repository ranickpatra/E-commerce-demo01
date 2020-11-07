import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild('root') root;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    var instance = M.Tabs.init(this.root.nativeElement.querySelectorAll('.tabs'));

  }

}
