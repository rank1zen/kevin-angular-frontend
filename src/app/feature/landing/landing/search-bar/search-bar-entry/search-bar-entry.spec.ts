import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarEntry } from './search-bar-entry';

describe('SearchBarEntry', () => {
  let component: SearchBarEntry;
  let fixture: ComponentFixture<SearchBarEntry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarEntry],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBarEntry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
