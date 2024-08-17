import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ReviewResponse, UserCourseResponse } from 'app/core/models/kanji.models';
import { getKanjiCourses, getReviewByDeckId } from 'mock-api/kanji/kanji';

@Injectable({
  providedIn: 'root'
})
export class KanjiHttpService {

  constructor() { }

  getKanjiCourses(): Observable<UserCourseResponse> {
    return of(getKanjiCourses);
  }

  getReview(id: string): Observable<ReviewResponse> {
    return of(getReviewByDeckId);
  }
}
