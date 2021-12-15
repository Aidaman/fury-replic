import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCategoriesDiagramComponent } from './top-categories-diagram.component';

describe('TopCategoriesDiagramComponent', () => {
  let component: TopCategoriesDiagramComponent;
  let fixture: ComponentFixture<TopCategoriesDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCategoriesDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCategoriesDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
