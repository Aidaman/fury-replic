/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SwitchingLineChardDiagramComponent } from './switching-line-chard-diagram.component';

describe('SwitchingLineChardDiagramComponent', () => {
  let component: SwitchingLineChardDiagramComponent;
  let fixture: ComponentFixture<SwitchingLineChardDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchingLineChardDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchingLineChardDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
