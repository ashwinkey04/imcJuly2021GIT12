import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdvertismentComponent } from './listAdvertisment.component';

describe('ListAdvertismentComponent', () => {
  let component: ListAdvertismentComponent;
  let fixture: ComponentFixture<ListAdvertismentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdvertismentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
