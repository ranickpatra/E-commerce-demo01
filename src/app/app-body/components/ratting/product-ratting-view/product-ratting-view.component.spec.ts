import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRattingViewComponent } from './product-ratting-view.component';

describe('ProductRattingViewComponent', () => {
  let component: ProductRattingViewComponent;
  let fixture: ComponentFixture<ProductRattingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRattingViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRattingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
