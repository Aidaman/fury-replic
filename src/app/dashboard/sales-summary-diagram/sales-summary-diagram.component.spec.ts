import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSummaryDiagramComponent } from './sales-summary-diagram.component';

describe('SalesSummaryDiagramComponent', () => {
  let component: SalesSummaryDiagramComponent;
  let fixture: ComponentFixture<SalesSummaryDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesSummaryDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSummaryDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
