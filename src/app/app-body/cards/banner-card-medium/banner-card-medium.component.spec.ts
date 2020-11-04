import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardMediumComponent } from './banner-card-medium.component';

describe('BannerCardMediumComponent', () => {
  let component: BannerCardMediumComponent;
  let fixture: ComponentFixture<BannerCardMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCardMediumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCardMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
