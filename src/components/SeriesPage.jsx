import { getSeriesById, getLevels } from '../content/bookRegistry';

export default function SeriesPage({ seriesId, onNav }) {
  const series = getSeriesById(seriesId);
  const levels = getLevels(seriesId);

  if (!series) return null;

  return (
    <div>
      <div className="home-title">
        <h1>{series.titleAr}</h1>
        <span className="ar">{series.title}</span>
        <p>{series.description}</p>
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

      <div style={{ textAlign: 'center' }}>
        <span className="back-home" onClick={() => onNav({ screen: 'library' })}>← Back to library</span>
      </div>
    </div>
  );
}