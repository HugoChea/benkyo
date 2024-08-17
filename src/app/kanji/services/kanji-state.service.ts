import { computed, inject, Injectable, signal } from '@angular/core';
import { KanjiHttpService } from './kanji-http.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserCourse } from 'app/core/models/kanji.models';

@Injectable()
export class KanjiStateService {

  kanjiHttp = inject(KanjiHttpService);

  courses = signal<UserCourse[]>([]);
  regularCourses = computed(() => this.courses().filter(course => course.type === "REGULAR"));
  customCourses = computed(() => this.courses().filter(course => course.type === "CUSTOM"));

  constructor() {
    this.kanjiHttp.getKanjiCourses()
    .pipe(takeUntilDestroyed())
    .subscribe((response) => this.courses.set(response.courses));
  }
}
