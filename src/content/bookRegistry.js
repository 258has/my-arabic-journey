import shirinMeta from './books/shirin-baghdad/meta';
import { ALL_Q as shirinQuestions } from './books/shirin-baghdad/questions';
import { VOCAB as shirinVocab, VOCAB_FLAT as shirinVocabFlat } from './books/shirin-baghdad/vocab';
import { quizSectionNames as shirinQuizSections, vocabSectionNames as shirinVocabSections } from './books/shirin-baghdad/sections';

// Each entry here is one self-contained "book" / unit.
// To add a new book: create src/content/books/<id>/ with meta.js, questions.js,
// vocab.js, sections.js (same shape as shirin-baghdad), then register it below.
export const BOOKS = [
  {
    ...shirinMeta,
    questions: shirinQuestions,
    vocab: shirinVocab,
    vocabFlat: shirinVocabFlat,
    quizSectionNames: shirinQuizSections,
    vocabSectionNames: shirinVocabSections,
  },
];

export function getBook(id) {
  return BOOKS.find((b) => b.id === id);
}

export function getLevels() {
  const levels = [...new Set(BOOKS.map((b) => b.level))].sort((a, b) => a - b);
  return levels.map((level) => ({
    level,
    books: BOOKS.filter((b) => b.level === level),
  }));
}
