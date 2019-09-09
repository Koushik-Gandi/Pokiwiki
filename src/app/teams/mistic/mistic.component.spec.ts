import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisticComponent } from './mistic.component';

describe('MisticComponent', () => {
  let component: MisticComponent;
  let fixture: ComponentFixture<MisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
