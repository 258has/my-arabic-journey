export const SECTION_SIZE = 8;

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getSections(items) {
  const secs = [];
  for (let i = 0; i < items.length; i += SECTION_SIZE) {
    secs.push(items.slice(i, i + SECTION_SIZE));
  }
  return secs;
}

export function stripHarakat(str) {
  return str.replace(/[\u0610-\u061A\u064B-\u065F]/g, '').trim();
}
