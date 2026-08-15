import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { summonerResolver } from './summoner-resolver';

describe('summonerResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => summonerResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
