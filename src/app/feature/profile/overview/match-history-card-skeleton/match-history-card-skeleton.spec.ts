import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchHistoryCardSkeleton } from './match-history-card-skeleton';

describe('MatchHistoryCardSkeleton', () => {
  let component: MatchHistoryCardSkeleton;
  let fixture: ComponentFixture<MatchHistoryCardSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchHistoryCardSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchHistoryCardSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
