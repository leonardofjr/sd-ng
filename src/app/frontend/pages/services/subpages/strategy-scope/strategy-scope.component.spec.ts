import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyScopeComponent } from './strategy-scope.component';

describe('StrategyScopeComponent', () => {
  let component: StrategyScopeComponent;
  let fixture: ComponentFixture<StrategyScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
