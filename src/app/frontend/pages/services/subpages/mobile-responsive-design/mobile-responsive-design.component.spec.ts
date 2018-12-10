import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileResponsiveDesignComponent } from './mobile-responsive-design.component';

describe('MobileResponsiveDesignComponent', () => {
  let component: MobileResponsiveDesignComponent;
  let fixture: ComponentFixture<MobileResponsiveDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileResponsiveDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileResponsiveDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
