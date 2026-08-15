import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardEntry } from './scoreboard-entry';

describe('ScoreboardEntry', () => {
  let component: ScoreboardEntry;
  let fixture: ComponentFixture<ScoreboardEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreboardEntry],
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreboardEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
