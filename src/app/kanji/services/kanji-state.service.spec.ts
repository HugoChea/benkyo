import { TestBed } from '@angular/core/testing';

import { KanjiStateService } from './kanji-state.service';

describe('KanjiStateService', () => {
  let service: KanjiStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanjiStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
