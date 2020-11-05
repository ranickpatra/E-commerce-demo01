import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceComponent2Component } from './price-component2.component';

describe('PriceComponent2Component', () => {
  let component: PriceComponent2Component;
  let fixture: ComponentFixture<PriceComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceComponent2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
