import { getLevels } from '../content/bookRegistry';

export default function Library({ fontSize, onFontSize, onNav }) {
  const levels = getLevels();

  return (
    <div>
      <div className="home-title">
        <h1>مَكْتَبَة العَرَبِيَّة</h1>
        <span className="ar">Arabic Learning Hub</span>
        <p>Read, build sentences, test vocab — level by level</p>
      </div>

      <div className="card" style={{ padding: '1.2rem' }}>
        <div className="slider-row">
          <label>🔤 Arabic text size</label>
          <input
            type="range"
            min="0.8"
            max="1.8"
            step="0.05"
            value={fontSize}
            onChange={(e) => onFontSize(parseFloat(e.target.value))}
          />
          <span className="ar-preview">مَرْحَبًا</span>
        </div>
      </div>

      {levels.map(({ level, books }) => (
        <div className="card" key={level}>
          <p
            style={{
              fontSize: '.8rem',
              textTransform: 'uppercase',
              letterSpacing: '.05em',
              color: 'var(--muted)',
              marginBottom: '1rem',
            }}
          >
            Level {level}
          </p>
          <div className="section-grid">
            {books.map((book) => (
              <div
                key={book.id}
                className="section-btn"
                onClick={() => onNav({ screen: 'book', bookId: book.id })}
              >
                <div className="sec-num">{book.titleAr}</div>
                <div className="sec-name">{book.title}</div>
                <div className="sec-meta">{book.description}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
