const STORAGE_KEY = 'arabic-hub-progress';

function loadAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAll(all) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    // ignore write failures (e.g. private browsing)
  }
}

// progress shape: { [bookId]: { 'quiz-0': {score,total}, 'vocab-2': {score,total} } }
export function loadProgress(bookId) {
  const all = loadAll();
  return all[bookId] || {};
}

export function saveProgress(bookId, key, score, total) {
  const all = loadAll();
  all[bookId] = { ...(all[bookId] || {}), [key]: { score, total } };
  saveAll(all);
  return all[bookId];
}
