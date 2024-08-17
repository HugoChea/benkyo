import { Component, inject } from '@angular/core';
import { KanjiStateService } from './services/kanji-state.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-kanji',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kanji.component.html',
  styleUrl: './kanji.component.scss',
  providers: [KanjiStateService]
})
export class KanjiComponent {

  readonly state = inject(KanjiStateService);
  private readonly router = inject(Router);

  goReview(id: string): void {
    this.router.navigate(['kanji/review'], { state: { id } });
  }

}
