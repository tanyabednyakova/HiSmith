/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestNewsComponent } from './testNews.component';

describe('TestNewsComponent', () => {
  let component: TestNewsComponent;
  let fixture: ComponentFixture<TestNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
