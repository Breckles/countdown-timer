import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipTimerComponent } from './flip-timer.component';

describe('FlipTimerComponent', () => {
  let component: FlipTimerComponent;
  let fixture: ComponentFixture<FlipTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
