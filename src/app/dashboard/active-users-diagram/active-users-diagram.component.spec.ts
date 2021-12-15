import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUsersDiagramComponent } from './active-users-diagram.component';

describe('ActiveUsersDiagramComponent', () => {
  let component: ActiveUsersDiagramComponent;
  let fixture: ComponentFixture<ActiveUsersDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveUsersDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveUsersDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
