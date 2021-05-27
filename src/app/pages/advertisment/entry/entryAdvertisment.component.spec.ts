import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAdvertismentComponent } from './entryAdvertisment.component';

describe('EntryAdvertismentComponent', () => {
  let component: EntryAdvertismentComponent;
  let fixture: ComponentFixture<EntryAdvertismentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryAdvertismentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAdvertismentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
