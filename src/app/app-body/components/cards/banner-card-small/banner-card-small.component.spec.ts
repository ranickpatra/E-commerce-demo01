import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardSmallComponent } from './banner-card-small.component';

describe('BannerCardSmallComponent', () => {
  let component: BannerCardSmallComponent;
  let fixture: ComponentFixture<BannerCardSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCardSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
