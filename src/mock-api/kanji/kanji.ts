import { UserCourseResponse } from "app/core/models/kanji.models";

export const getKanjiCourses: UserCourseResponse = {
  courses: [
    {
      id: '1',
      name: 'Regular Course',
      type: 'REGULAR',
      userLevel: 0,
      dailyProgress: 0,
      dailyGoal: 15,
    },
    {
      id: '2',
      name: 'Custom Course',
      type: 'CUSTOM',
      userLevel: 0,
      dailyProgress: 0,
      dailyGoal: 15,
    },
  ],
};

export const getReviewByDeckId = {
  reviews: [
    {
      id: '1',
      userId: '1',
      card: {
        id: '1',
        sujet: '仕',
        level: 1,
        description: [
          {
            name: 'meaning',
            description: 'Faire',
          },
          {
            name: 'onyomi',
            description: 'し',
          },
          {
            name: 'kunyomi',
            description: 'つか',
          },
        ],
        questions: [
          {
            name: 'Quel est le sens de ce kanji : 仕 ?',
            answer: 'faire',
          },
          {
            name: 'Quel est le reading de ce kanji : 仕 ?',
            answer: 'し',
          },
        ],
      },
      level: 1, // 1,2,3,4,5
      lastReviewDate: "date",
      failCount: 0,
      reviewCount: 0,
      status: "TO_LEARN", // LOCKED, TO_LEARN
      nextReviewDate: "demain",
    },
  ],
};

export const getDeck = {
  id: 2,
  name: 'Custom Course',
  description: 'Kanjis pour le niveau JLPT N5',
  created_at: '2024-08-15',
  updated_at: '2024-08-15',
};

export interface Card {
  id: '1';
  sujet: '仕';
  level: 1;
  description: [
    {
      name: 'meaning';
      description: 'Faire';
    },
    {
      name: 'onyomi';
      description: 'し';
    },
    {
      name: 'kunyomi';
      description: 'つか';
    }
  ];
  questions: [
    {
      name: 'Quel est le sens de ce kanji : 仕 ?';
      answer: 'faire';
    },
    {
      name: 'Quel est le reading de ce kanji : 仕 ?';
      answer: 'し';
    }
  ];
}
