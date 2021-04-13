import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyEventEntryComponent } from './weekly-event-entry.component';

describe('WeeklyEventEntryComponent', () => {
  let component: WeeklyEventEntryComponent;
  let fixture: ComponentFixture<WeeklyEventEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyEventEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyEventEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
