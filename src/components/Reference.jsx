export default function Reference({ book, from, onNav }) {
  function goBack() {
    if (from === 'quiz') onNav({ screen: 'quiz', keepState: true });
    else if (from === 'vocab') onNav({ screen: 'vocab', keepState: true });
    else if (from === 'score') onNav({ screen: 'quiz', keepState: true });
    else if (from === 'vscore') onNav({ screen: 'vocab', keepState: true });
    else if (from === 'sections') onNav({ screen: 'sections', keepState: true });
    else onNav({ screen: 'book' });
  }

  return (
    <div className="card">
      <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.4rem' }}>Vocabulary Glossary</h2>
      <div className="ref-section">
        <h3>All words from {book.title}</h3>
        <div className="legend">
          <div className="legend-item"><span className="tag tag-v">verb</span></div>
          <div className="legend-item"><span className="tag tag-n">noun</span></div>
          <div className="legend-item"><span className="tag tag-adj">adjective</span></div>
        </div>
        <div>
          {book.vocab.map((v, i) => {
            if (v.g) return <div className="group-label" key={i}>{v.g}</div>;
            const tc = v.t === 'v' ? 'tag-v' : v.t === 'n' ? 'tag-n' : 'tag-adj';
            const tl = v.t === 'v' ? 'verb' : v.t === 'n' ? 'noun' : 'adjective';
            return (
              <div className="vrow" key={i}>
                <span className="var">{v.ar}</span>
                <span className="ven">{v.en}</span>
                <span className={'tag ' + tc}>{tl}</span>
              </div>
            );
          })}
        </div>
      </div>
      <span className="back-home" onClick={goBack} style={{ display: 'inline-block', marginTop: '.5rem' }}>← Back</span>
    </div>
  );
}
