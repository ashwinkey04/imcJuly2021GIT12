import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFavContestantsComponent } from './create-fav-contestants.component';

describe('CreateFavContestantsComponent', () => {
  let component: CreateFavContestantsComponent;
  let fixture: ComponentFixture<CreateFavContestantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFavContestantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFavContestantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
