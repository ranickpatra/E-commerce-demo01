import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardSmallFullWidthComponent } from './banner-card-small-full-width.component';

describe('BannerCardSmallFullWidthComponent', () => {
  let component: BannerCardSmallFullWidthComponent;
  let fixture: ComponentFixture<BannerCardSmallFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCardSmallFullWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCardSmallFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
