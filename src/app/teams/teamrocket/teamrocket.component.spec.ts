import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamrocketComponent } from './teamrocket.component';

describe('TeamrocketComponent', () => {
  let component: TeamrocketComponent;
  let fixture: ComponentFixture<TeamrocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamrocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamrocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
