import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { DeckReviewStateService } from '../services/deck-review-state.service';
import { HiraganaInputComponent } from 'app/shared/hiragana-input/hiragana-input.component';

@Component({
  selector: 'app-deck-review',
  standalone: true,
  imports: [HiraganaInputComponent],
  templateUrl: './deck-review.component.html',
  styleUrl: './deck-review.component.scss',
  providers: [DeckReviewStateService]
})
export class DeckReviewComponent {

  private readonly router = inject(Router);
  readonly state = inject(DeckReviewStateService);

  constructor() {
    const id = this.router.getCurrentNavigation()?.extras?.state?.['id'];
    // check si question dans local storage
    if(id) {
      this.state.getReview(id);
    }
    else {
      this.router.navigate(['kanji']);
    }
  }

}
