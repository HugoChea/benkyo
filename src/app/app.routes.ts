import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { HomeComponent } from './home/home.component';
import { KanjiComponent } from './kanji/kanji.component';
import { DeckReviewComponent } from './kanji/deck-review/deck-review.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'kanji',
        component: KanjiComponent
      },
      {
        path: 'kanji/review',
        component: DeckReviewComponent
      }
    ]
  }
];
