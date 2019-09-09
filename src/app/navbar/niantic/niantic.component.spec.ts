import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NianticComponent } from './niantic.component';

describe('NianticComponent', () => {
  let component: NianticComponent;
  let fixture: ComponentFixture<NianticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NianticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NianticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
