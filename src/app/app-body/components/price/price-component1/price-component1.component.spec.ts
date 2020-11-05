import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceComponent1Component } from './price-component1.component';

describe('PriceComponent1Component', () => {
  let component: PriceComponent1Component;
  let fixture: ComponentFixture<PriceComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceComponent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
