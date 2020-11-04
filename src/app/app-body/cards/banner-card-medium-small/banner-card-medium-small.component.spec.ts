import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardMediumSmallComponent } from './banner-card-medium-small.component';

describe('BannerCardMediumSmallComponent', () => {
  let component: BannerCardMediumSmallComponent;
  let fixture: ComponentFixture<BannerCardMediumSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCardMediumSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCardMediumSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
