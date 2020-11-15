import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeattureGroupComponent } from './featture-group.component';

describe('FeattureGroupComponent', () => {
  let component: FeattureGroupComponent;
  let fixture: ComponentFixture<FeattureGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeattureGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeattureGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
