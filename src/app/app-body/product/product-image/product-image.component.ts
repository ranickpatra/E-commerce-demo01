import { Component, OnInit, ViewChildren } from '@angular/core';
import  M from "materialize-css";

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
    // M.Slider.init(this.sliders);
    let sliders = []
    this.sliders.forEach(slider => {
      sliders.push(slider.nativeElement);
    })
    // console.log(sliders);
    // M.slider.init(sliders);
    console.log(M)
  }

}
