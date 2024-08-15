import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserCourseResponse } from 'app/core/models/kanji.models';
import { getKanjiCourses } from 'mock-api/kanji/kanji';

@Injectable({
  providedIn: 'root'
})
export class KanjiHttpService {

  constructor() { }

  getKanjiCourses(): Observable<UserCourseResponse> {
    return of(getKanjiCourses);
  }
}
