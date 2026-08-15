import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionWidget } from './champion-widget';

describe('ChampionWidget', () => {
  let component: ChampionWidget;
  let fixture: ComponentFixture<ChampionWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(ChampionWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
