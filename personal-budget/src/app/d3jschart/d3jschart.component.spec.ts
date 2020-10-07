import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3jschartComponent } from './d3jschart.component';

describe('D3jschartComponent', () => {
  let component: D3jschartComponent;
  let fixture: ComponentFixture<D3jschartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3jschartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3jschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
