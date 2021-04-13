import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventImageUpdateComponent } from './event-image-update.component';

describe('EventImageUpdateComponent', () => {
  let component: EventImageUpdateComponent;
  let fixture: ComponentFixture<EventImageUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventImageUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventImageUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
