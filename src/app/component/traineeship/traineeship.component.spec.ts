import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeshipComponent } from './traineeship.component';

describe('TraineeshipComponent', () => {
  let component: TraineeshipComponent;
  let fixture: ComponentFixture<TraineeshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
