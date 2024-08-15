
export interface Deck {
  id: string,
  name: string,
  description: string,
  cards: Card[]
}

export interface Card {
  id: string,
  sujet: string,
  level: number,
  description: CardDescription[],
  questions: CardQuestion[]
}

export interface CardDescription {
  name: string,
  description: string
}

export interface CardQuestion {
  name: string,
  answer: string
}

export interface Review {
  id: string,
  userId: string,
  card: Card,
  level: number, // 1,2,3,4,5
  lastReviewDate: string,
  failCount: number,
  reviewCount: number,
  status: string, // LOCKED, TO_LEARN
  nextReviewDate: string,
}


export interface ReviewResponse {
  reviews: Review[]
}

export interface UserCourseResponse {
  courses: UserCourse[]
}

export interface UserCourse {
  id: string,
  name: string,
  type: string,
  userLevel: number // ?
  dailyProgress: 0,
  dailyGoal: 15,
}