import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSalesTableComponent } from './recent-sales-table.component';

describe('RecentSalesTableComponent', () => {
  let component: RecentSalesTableComponent;
  let fixture: ComponentFixture<RecentSalesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentSalesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSalesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
