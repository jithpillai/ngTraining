import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpLoadComponent } from './http-load.component';

describe('HttpLoadComponent', () => {
  let component: HttpLoadComponent;
  let fixture: ComponentFixture<HttpLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
