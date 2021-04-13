import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlayersUpdateComponent } from "./players-update.component";

describe("PlayersUpdateComponent", () => {
  let component: PlayersUpdateComponent;
  let fixture: ComponentFixture<PlayersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersUpdateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
