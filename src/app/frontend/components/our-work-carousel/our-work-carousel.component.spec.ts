import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkCarouselComponent } from './our-work-carousel.component';

describe('OurWorkCarouselComponent', () => {
  let component: OurWorkCarouselComponent;
  let fixture: ComponentFixture<OurWorkCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWorkCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
