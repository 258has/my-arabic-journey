import { useEffect, useMemo, useState } from 'react';
import { shuffle, getSections } from '../data/helpers';

export default function SentenceBuilder({ book, quizMode, sectionIdx, onFinish, onNav }) {
  const questions = useMemo(() => {
    if (quizMode === 'random') return shuffle([...book.questions]);
    const secs = getSections(book.questions);
    return [...secs[sectionIdx]];
  }, [book, quizMode, sectionIdx]);

  const [states, setStates] = useState(() =>
    questions.map((q) => ({
      bankTokens: shuffle([...q.answer, ...q.extra]),
      answerTokens: [],
      checked: false,
      correct: null,
    }))
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

  function addToAnswer(i) {
    if (s.checked || s.answerTokens.includes(i)) return;
    updateState({ answerTokens: [...s.answerTokens, i] });
  }
  function removeFromAnswer(pos) {
    if (s.checked) return;
    const next = [...s.answerTokens];
    next.splice(pos, 1);
    updateState({ answerTokens: next });
  }
  function clearAnswer() {
    if (s.checked) return;
    updateState({ answerTokens: [] });
  }
  function checkAnswer() {
    if (s.checked || s.answerTokens.length === 0) return;
    const user = s.answerTokens.map((i) => s.bankTokens[i]);
    const correct = user.length === q.answer.length && user.every((w, i) => w === q.answer[i]);
    updateState({ checked: true, correct });
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
    setStates(
      questions.map((qq) => ({
        bankTokens: shuffle([...qq.answer, ...qq.extra]),
        answerTokens: [],
        checked: false,
        correct: null,
      }))
    );
    setCurrent(0);
    setShowScore(false);
  }

  function backTarget() {
    return quizMode === 'random' ? { screen: 'book' } : { screen: 'sections', mode: 'quiz' };
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current, showScore]);

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
            <button className="btn" onClick={() => onNav(backTarget())}>
              {quizMode === 'random' ? '← Menu' : '← Sections'}
            </button>
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
        <span className="mode-tag">{quizMode === 'random' ? '🔀 Randomised' : '📖 Section ' + (sectionIdx + 1)}</span>
        <span className="score-badge">Score: {score}</span>
      </div>
      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: (current / questions.length) * 100 + '%' }} />
      </div>
      <div className="sentence">{q.en}</div>
      <div>{q.ctx ? <span className="context-tag">{q.ctx}</span> : null}</div>
      <p className="instructions">Tap words to build the Arabic sentence. Tap a placed word to remove it.</p>

      <div className={areaClass}>
        {s.answerTokens.length === 0 ? (
          <span className="answer-placeholder">Tap words below to build your answer</span>
        ) : (
          s.answerTokens.map((bi, pos) => (
            <span
              key={pos}
              className="chip in-answer"
              style={s.checked ? { pointerEvents: 'none' } : undefined}
              onClick={() => removeFromAnswer(pos)}
            >
              {s.bankTokens[bi]}
            </span>
          ))
        )}
      </div>

      <p className="word-bank-label">Word bank</p>
      <div className="word-bank">
        {s.bankTokens.map((tok, i) => {
          const used = s.answerTokens.includes(i);
          return (
            <span
              key={i}
              className={'chip' + (used ? ' used' : '')}
              style={s.checked ? { pointerEvents: 'none' } : undefined}
              onClick={() => addToAnswer(i)}
            >
              {tok}
            </span>
          );
        })}
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
        <button className="btn btn-muted" onClick={clearAnswer}>Clear</button>
        <button className="btn btn-primary" disabled={s.answerTokens.length === 0 || s.checked} onClick={checkAnswer}>
          Check
        </button>
        <div className="spacer" />
        <button className="btn" onClick={nextQ}>{current === questions.length - 1 ? 'Finish ✓' : 'Next →'}</button>
      </div>

      <div className="quiz-footer">
        <span className="back-home" onClick={() => onNav(backTarget())}>
          {quizMode === 'random' ? '← Menu' : '← Sections'}
        </span>
        <span className="ref-link" style={{ fontSize: '.82rem' }} onClick={() => onNav({ screen: 'ref', from: 'quiz' })}>
          📚 Glossary
        </span>
      </div>
    </div>
  );
}
