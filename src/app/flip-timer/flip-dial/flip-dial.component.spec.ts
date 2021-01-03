import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipDialComponent } from './flip-dial.component';

describe('FlipDialComponent', () => {
  let component: FlipDialComponent;
  let fixture: ComponentFixture<FlipDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipDialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
