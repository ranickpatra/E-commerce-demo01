import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVariant1Component } from './product-variant1.component';

describe('ProductVariant1Component', () => {
  let component: ProductVariant1Component;
  let fixture: ComponentFixture<ProductVariant1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVariant1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVariant1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
