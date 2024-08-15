import { TestBed } from '@angular/core/testing';

import { KanjiHttpService } from './kanji-http.service';

describe('KanjiHttpService', () => {
  let service: KanjiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KanjiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
