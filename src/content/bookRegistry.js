import shirinMeta from './books/shirin-baghdad/meta';
import { ALL_Q as shirinQuestions } from './books/shirin-baghdad/questions';
import { VOCAB as shirinVocab, VOCAB_FLAT as shirinVocabFlat } from './books/shirin-baghdad/vocab';

import iRead1Meta from './books/i-read-series/book-1/meta';
import { ALL_Q as iRead1Questions } from './books/i-read-series/book-1/questions';
import { VOCAB as iRead1Vocab, VOCAB_FLAT as iRead1VocabFlat } from './books/i-read-series/book-1/vocab';

import shirinSeriesMeta from './series/shirin-baghdad/seriesMeta';
import iReadSeriesMeta from './series/i-read-series/seriesMeta';

export const BOOKS = [
  {
    ...shirinMeta,
    questions: shirinQuestions,
    vocab: shirinVocab,
    vocabFlat: shirinVocabFlat,
  },
  {
    ...iRead1Meta,
    questions: iRead1Questions,
    vocab: iRead1Vocab,
    vocabFlat: iRead1VocabFlat,
  },
];

const SERIES_META = [shirinSeriesMeta, iReadSeriesMeta];

export function getBook(id) {
  return BOOKS.find((b) => b.id === id);
}

export function getSeries() {
  return SERIES_META.map((meta) => ({
    ...meta,
    books: BOOKS.filter((b) => b.seriesId === meta.seriesId),
  }));
}

export function getSeriesById(seriesId) {
  return getSeries().find((s) => s.seriesId === seriesId);
}

export function getLevels(seriesId) {
  const scoped = seriesId ? BOOKS.filter((b) => b.seriesId === seriesId) : BOOKS;
  const levels = [...new Set(scoped.map((b) => b.level))].sort((a, b) => a - b);
  return levels.map((level) => ({
    level,
    books: scoped.filter((b) => b.level === level),
  }));
}