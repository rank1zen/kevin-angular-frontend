import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMatchList } from './profile-match-list';

describe('ProfileMatchList', () => {
  let component: ProfileMatchList;
  let fixture: ComponentFixture<ProfileMatchList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileMatchList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileMatchList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
