export default function BookHome({ book, onNav }) {
  return (
    <div>
      <div className="home-title">
        <h1>{book.titleAr}</h1>
        <span className="ar">{book.title}</span>
        <p>{book.description}</p>
      </div>

      {book.videoUrl && (
        <div className="card" style={{ padding: '1.2rem' }}>
          <p
            style={{
              fontSize: '.8rem',
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              color: 'var(--muted)',
              marginBottom: '.8rem',
            }}
          >
            🎬 Watch the episode
          </p>
          <div className="video-wrap">
            <iframe src={book.videoUrl} allowFullScreen title={book.title} />
          </div>
        </div>
      )}

      <div className="card">
        <p
          style={{
            fontSize: '.8rem',
            textTransform: 'uppercase',
            letterSpacing: '.05em',
            color: 'var(--muted)',
            marginBottom: '1rem',
          }}
        >
          📝 Sentence Builder
        </p>
        <div className="mode-cards">
          <div className="mode-card" onClick={() => onNav({ screen: 'sections', mode: 'quiz' })}>
            <div className="icon">📖</div>
            <h2>In Order</h2>
            <p>Choose a section to practise — 8 questions per section.</p>
          </div>
          <div className="mode-card" onClick={() => onNav({ screen: 'quiz', quizMode: 'random', sectionIdx: -1 })}>
            <div className="icon">🔀</div>
            <h2>Randomised</h2>
            <p>All {book.questions.length} questions mixed up — full practice test.</p>
          </div>
        </div>
        <hr className="divider" />
        <p
          style={{
            fontSize: '.8rem',
            textTransform: 'uppercase',
            letterSpacing: '.05em',
            color: 'var(--muted)',
            marginBottom: '1rem',
          }}
        >
          🧠 Vocabulary Tester
        </p>
        <div className="mode-cards">
          <div className="mode-card" onClick={() => onNav({ screen: 'sections', mode: 'vocab' })}>
            <div className="icon">📚</div>
            <h2>In Order</h2>
            <p>Choose a vocab section — 8 words per section, mix of buttons and typing.</p>
          </div>
          <div className="mode-card" onClick={() => onNav({ screen: 'vocab', vocabMode: 'random', sectionIdx: -1 })}>
            <div className="icon">🔀</div>
            <h2>Randomised</h2>
            <p>All vocab words in random order.</p>
          </div>
        </div>
        <hr className="divider" />
        <div style={{ textAlign: 'center', paddingTop: '.2rem' }}>
          <span className="ref-link" onClick={() => onNav({ screen: 'ref', from: 'book' })}>
            📚 View full vocabulary glossary
          </span>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <span className="back-home" onClick={() => onNav({ screen: 'library' })}>← Back to library</span>
      </div>
    </div>
  );
}
