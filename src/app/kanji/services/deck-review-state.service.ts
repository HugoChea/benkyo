import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { KanjiHttpService } from './kanji-http.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Review } from 'app/core/models/kanji.models';

@Injectable()
export class DeckReviewStateService {
  private readonly kanjiHttp = inject(KanjiHttpService);

  isLoading = signal(false);
  isWrongAnswer = signal(false);
  isCorrectAnswer = signal(false);

  reviews = signal<Review[]>([]);
  questions = computed(() => this.reviews().flatMap(review => 
    review.card.questions.map(question => ({
      cardId: review.card.id,
      subject: review.card.subject,
      name: question.name,
      answer: question.answer
    }))
  ).sort(() => Math.random() - 0.5));

  currentQuestion = signal(0);

  constructor() {
    effect(() => {
      // save into local storage
      console.log(this.questions());
    })
  }

  getReview(id: string): void {
    this.kanjiHttp.getReview(id)
      .pipe(takeUntilDestroyed())
      .subscribe(response => {
        this.reviews.set(response.reviews)
      });
  }

  checkAnswer(answer: string): void {
    if (answer === this.questions()[this.currentQuestion()].answer){
      this.correctAnswer();
    }
    else {
      this.wrongAnswer();
    }
  }

  correctAnswer(): void {
    this.isCorrectAnswer.set(true);
  }

  wrongAnswer(): void {
    this.isWrongAnswer.set(true);
  }

  nextQuestion(): void {
    this.isCorrectAnswer.set(false);
    this.isWrongAnswer.set(false);
    this.currentQuestion.set(this.currentQuestion() + 1);
  }
}
