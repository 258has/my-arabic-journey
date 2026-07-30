import { useEffect, useMemo, useState } from 'react';
import { shuffle, stripHarakat } from '../data/helpers';

function normalize(str) {
  return stripHarakat(str).replace(/\s+/g, ' ').trim();
}

export default function TypingPractice({ book, onFinish, onNav }) {
  const questions = useMemo(
    () => shuffle(book.questions.filter((q) => !q.skipTypingPractice)),
    [book]
  );

  const [states, setStates] = useState(() =>
    questions.map(() => ({ input: '', checked: false, correct: null }))
  );
  const [current, setCurrent] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const q = questions[current];
  const s = states[current];
  const score = states.filter((x) => x.correct === true).length;

  function updateState(patch) {
    setStates((prev) => {
      const copy = [...prev];
      copy[current] = { ...copy[current], ...patch };
      return copy;
    });
  }

  function setInput(val) {
    if (s.checked) return;
    updateState({ input: val });
  }

  function checkAnswer() {
    if (s.checked || s.input.trim().length === 0) return;
    const userNorm = normalize(s.input);
    const correctNorm = normalize(q.answer.join(' '));
    updateState({ checked: true, correct: userNorm === correctNorm });
  }

  function nextQ() {
    if (current < questions.length - 1) setCurrent(current + 1);
    else finish();
  }
  function prevQ() {
    if (current > 0) setCurrent(current - 1);
  }
  function finish() {
    setShowScore(true);
    onFinish(score, questions.length);
  }
  function restartSame() {
    setStates(questions.map(() => ({ input: '', checked: false, correct: null })));
    setCurrent(0);
    setShowScore(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current, showScore]);

  if (questions.length === 0) {
    return (
      <div className="card">
        <p className="instructions">No typing practice questions available for this book yet.</p>
        <div style={{ textAlign: 'center' }}>
          <span className="back-home" onClick={() => onNav({ screen: 'book' })}>← Menu</span>
        </div>
      </div>
    );
  }

  if (showScore) {
    const pct = Math.round((score / questions.length) * 100);
    const msg =
      pct === 100
        ? 'Perfect — every sentence exactly right!'
        : pct >= 80
        ? 'Excellent — strong command.'
        : pct >= 60
        ? 'Good effort — one more round!'
        : 'Keep going — repetition is the key.';
    return (
      <div className="card">
        <div className="score-screen">
          <div className="score-big">{score}</div>
          <div className="score-sub">out of {questions.length}</div>
          <div className="score-msg">{msg}</div>
          <div className="score-btns">
            <button className="btn btn-primary" onClick={restartSame}>Try again</button>
            <button className="btn" onClick={() => onNav({ screen: 'book' })}>← Menu</button>
            <button className="btn" style={{ color: 'var(--accent)' }} onClick={() => onNav({ screen: 'ref', from: 'score' })}>
              📚 Glossary
            </button>
          </div>
        </div>
      </div>
    );
  }

  const areaClass = 'answer-area' + (s.checked ? (s.correct ? ' correct-state' : ' wrong-state') : '');

  return (
    <div className="card">
      <div className="meta">
        <span className="q-counter">Q {current + 1} of {questions.length}</span>
        <span className="mode-tag">⌨️ Typing Practice</span>
        <span className="score-badge">Score: {score}</span>
      </div>
      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: (current / questions.length) * 100 + '%' }} />
      </div>
      <div className="sentence">{q.en}</div>
      <div>{q.ctx ? <span className="context-tag">{q.ctx}</span> : null}</div>
      <p className="instructions">Type the Arabic sentence yourself — no need to include harakat (diacritics).</p>

      <div className={areaClass}>
        <input
          type="text"
          dir="rtl"
          className="ar"
          style={{
            width: '100%',
            fontSize: 'var(--chip-size, 1.1rem)',
            border: 'none',
            outline: 'none',
            background: 'transparent',
          }}
          placeholder="اكتب الجملة هنا"
          value={s.input}
          disabled={s.checked}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') checkAnswer();
          }}
        />
      </div>

      <div className={'feedback' + (s.checked ? ' show ' + (s.correct ? 'correct' : 'wrong') : '')}>
        {s.checked ? (
          s.correct ? (
            '✓ Correct!'
          ) : (
            <>
              ✗ Not quite. Correct answer:
              <span className="ar">{q.answer.join(' ')}</span>
            </>
          )
        ) : null}
      </div>

      <div className="btn-row">
        <button className="btn" disabled={current === 0} onClick={prevQ}>← Prev</button>
        <button className="btn btn-primary" disabled={s.input.trim().length === 0 || s.checked} onClick={checkAnswer}>
          Check
        </button>
        <div className="spacer" />
        <button className="btn" onClick={nextQ}>{current === questions.length - 1 ? 'Finish ✓' : 'Next →'}</button>
      </div>

      <div className="quiz-footer">
        <span className="back-home" onClick={() => onNav({ screen: 'book' })}>← Menu</span>
        <span className="ref-link" style={{ fontSize: '.82rem' }} onClick={() => onNav({ screen: 'ref', from: 'quiz' })}>
          📚 Glossary
        </span>
      </div>
    </div>
  );
}