import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestElmComponent } from './test-elm.component';

describe('TestElmComponent', () => {
  let component: TestElmComponent;
  let fixture: ComponentFixture<TestElmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestElmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestElmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
