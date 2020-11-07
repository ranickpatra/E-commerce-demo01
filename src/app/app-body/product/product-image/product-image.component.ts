import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
// import  M from "materialize-css";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @ViewChild('root') root;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void  {

    // M.Slider.init(elems, options);
    let slider = M.Slider.init(this.root.nativeElement.querySelectorAll('.slider'));
  }

}
