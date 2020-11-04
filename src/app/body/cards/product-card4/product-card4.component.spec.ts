import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard4Component } from './product-card4.component';

describe('ProductCard4Component', () => {
  let component: ProductCard4Component;
  let fixture: ComponentFixture<ProductCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCard4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
