import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Array5Component } from './array5.component';

describe('Array5Component', () => {
  let component: Array5Component;
  let fixture: ComponentFixture<Array5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Array5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Array5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
