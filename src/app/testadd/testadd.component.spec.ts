import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestaddComponent } from './testadd.component';

describe('TestaddComponent', () => {
  let component: TestaddComponent;
  let fixture: ComponentFixture<TestaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
