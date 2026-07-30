import { getSections, getSectionName, flattenVocabWithTopics } from '../data/helpers';

export default function SectionMenu({ book, mode, progress, onNav }) {
  const items = mode === 'quiz' ? book.questions : flattenVocabWithTopics(book.vocab);
  const secs = getSections(items);
  const title = mode === 'quiz' ? '📖 Sentence Builder — Choose a Section' : '🧠 Vocabulary — Choose a Section';

  return (
    <div className="card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
        <span className="back-home" onClick={() => onNav({ screen: 'book' })}>← {book.title}</span>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{title}</h2>
      </div>
      <div className="section-grid">
        {secs.map((sec, i) => {
          const key = mode + '-' + i;
          const prog = progress[key];
          const name = getSectionName(sec, i);
          const done = prog ? `✓ ${prog.score}/${prog.total}` : '';
          const doneClass = prog && prog.score === prog.total ? ' done' : '';
          return (
            <div
              key={i}
              className={'section-btn' + doneClass}
              onClick={() =>
                mode === 'quiz'
                  ? onNav({ screen: 'quiz', quizMode: 'ordered', sectionIdx: i })
                  : onNav({ screen: 'vocab', vocabMode: 'ordered', sectionIdx: i })
              }
            >
              <div className="sec-num">Section {i + 1}</div>
              <div className="sec-name">{name}</div>
              <div className="sec-meta">
                {sec.length} questions{done ? ' — ' + done : ''}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}