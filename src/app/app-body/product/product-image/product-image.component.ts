import { Component, OnInit, ViewChildren } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @ViewChildren('slider') sliders;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void  {

    // M.Slider.init(elems, options);
    M.Slider
  }

}
