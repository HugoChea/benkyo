import { Component, inject } from '@angular/core';
import { KanjiStateService } from './services/kanji-state.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kanji',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './kanji.component.html',
  styleUrl: './kanji.component.scss'
})
export class KanjiComponent {

  state = inject(KanjiStateService);

}
