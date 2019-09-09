import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstinctComponent } from './instinct.component';

describe('InstinctComponent', () => {
  let component: InstinctComponent;
  let fixture: ComponentFixture<InstinctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstinctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstinctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
