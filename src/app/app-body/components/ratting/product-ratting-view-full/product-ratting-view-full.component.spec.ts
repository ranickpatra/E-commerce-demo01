import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRattingViewFullComponent } from './product-ratting-view-full.component';

describe('ProductRattingViewFullComponent', () => {
  let component: ProductRattingViewFullComponent;
  let fixture: ComponentFixture<ProductRattingViewFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRattingViewFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRattingViewFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
