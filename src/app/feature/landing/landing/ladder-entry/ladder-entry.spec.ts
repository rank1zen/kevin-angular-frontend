import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadderEntry } from './ladder-entry';

describe('LadderEntry', () => {
  let component: LadderEntry;
  let fixture: ComponentFixture<LadderEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadderEntry],
    }).compileComponents();

    fixture = TestBed.createComponent(LadderEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
