import { TestBed } from '@angular/core/testing';

import { DeckReviewStateService } from './deck-review-state.service';

describe('DeckReviewStateService', () => {
  let service: DeckReviewStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckReviewStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
