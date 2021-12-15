import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeRandomUnclearDiagramComponent } from './some-random-unclear-diagram.component';

describe('SomeRandomUnclearDiagramComponent', () => {
  let component: SomeRandomUnclearDiagramComponent;
  let fixture: ComponentFixture<SomeRandomUnclearDiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeRandomUnclearDiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeRandomUnclearDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
