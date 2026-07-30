import { getSeries } from '../content/bookRegistry';

export default function Library({ onNav }) {
  const series = getSeries();

  function handleSeriesClick(s) {
    if (s.books.length === 1) {
      onNav({ screen: 'book', bookId: s.books[0].id });
    } else {
      onNav({ screen: 'series', seriesId: s.seriesId });
    }
  }

  return (
    <div>
      <div className="home-title">
        <h1>مَكْتَبَة العَرَبِيَّة</h1>
        <span className="ar">Arabic Learning Hub</span>
        <p>Read, build sentences, test vocab — level by level</p>
      </div>

      <div className="card">
        <div className="section-grid">
          {series.map((s) => (
            <div
              key={s.seriesId}
              className="section-btn"
              onClick={() => handleSeriesClick(s)}
            >
              <div className="sec-num">{s.titleAr}</div>
              <div className="sec-name">{s.title}</div>
              <div className="sec-meta">{s.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}