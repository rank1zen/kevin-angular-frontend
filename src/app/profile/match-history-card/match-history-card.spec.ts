import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryCard } from './match-history-card';

describe('MatchHistoryCard', () => {
  let component: MatchHistoryCard;
  let fixture: ComponentFixture<MatchHistoryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchHistoryCard],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchHistoryCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
