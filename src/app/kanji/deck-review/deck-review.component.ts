import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as wanakana from 'wanakana';

@Component({
  selector: 'app-deck-review',
  standalone: true,
  imports: [],
  templateUrl: './deck-review.component.html',
  styleUrl: './deck-review.component.scss'
})
export class DeckReviewComponent implements OnInit {

  ngOnInit(): void {
    const test = document.getElementById('wanakana-input') as HTMLInputElement;
    wanakana.bind(test);
  }

}
