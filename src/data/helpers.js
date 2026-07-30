export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Groups items into sections based on their `topic` field.
// Items sharing the same topic (in the order they first appear) form one
// section — however many there are. No fixed section size.
export function getSections(items) {
  const map = new Map();
  items.forEach((item) => {
    const key = item.topic || 'Other';
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  });
  return [...map.values()];
}

// Display name for a section — taken straight from its first item's topic.
export function getSectionName(section, index) {
  return (section[0] && section[0].topic) || 'Section ' + (index + 1);
}

// Converts a VOCAB array (which uses {g:'Group title'} marker objects to
// separate groups) into a flat array where every word carries a `topic`
// field equal to its group's title — so vocab sections can be derived
// the same way as quiz sections, straight from vocab.js.
export function flattenVocabWithTopics(vocab) {
  let currentTopic = 'Vocabulary';
  const flat = [];
  vocab.forEach((entry) => {
    if (entry.g) {
      currentTopic = entry.g;
    } else {
      flat.push({ ...entry, topic: currentTopic });
    }
  });
  return flat;
}

export function stripHarakat(str) {
  return str.replace(/[\u0610-\u061A\u064B-\u065F]/g, '').trim();
}