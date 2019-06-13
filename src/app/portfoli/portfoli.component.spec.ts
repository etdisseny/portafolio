import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliComponent } from './portfoli.component';

describe('PortfoliComponent', () => {
  let component: PortfoliComponent;
  let fixture: ComponentFixture<PortfoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
