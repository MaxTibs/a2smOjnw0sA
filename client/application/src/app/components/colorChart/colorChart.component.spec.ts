import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChart } from './colorChart.component';

describe('MyHeaderComponent', () => {
  let component: ColorChart;
  let fixture: ComponentFixture<ColorChart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorChart ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
