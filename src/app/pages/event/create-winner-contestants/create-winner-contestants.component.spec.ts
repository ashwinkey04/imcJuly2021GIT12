import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWinnerContestantsComponent } from './create-winner-contestants.component';

describe('CreateWinnerContestantsComponent', () => {
  let component: CreateWinnerContestantsComponent;
  let fixture: ComponentFixture<CreateWinnerContestantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWinnerContestantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWinnerContestantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
