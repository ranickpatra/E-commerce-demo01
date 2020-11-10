import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceComponent3Component } from './price-component3.component';

describe('PriceComponent3Component', () => {
  let component: PriceComponent3Component;
  let fixture: ComponentFixture<PriceComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceComponent3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
