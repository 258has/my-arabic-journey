import { useEffect, useMemo, useState } from 'react';
import { shuffle, getSections, stripHarakat } from '../data/helpers';

function getDistractors(vocabFlat, word, count) {
  const pool = vocabFlat.filter((v) => v.ar !== word.ar);
  return shuffle(pool).slice(0, count);
}

export default function VocabTester({ book, vocabMode, sectionIdx, onFinish, onNav }) {
  const questions = useMemo(() => {
    if (vocabMode === 'random') return shuffle([...book.vocabFlat]);
    const secs = getSections(book.vocabFlat);
    return [...secs[sectionIdx]];
  }, [book, vocabMode, sectionIdx]);

  const [states, setStates] = useState(() =>
    questions.map((q, i) => ({ checked: false, correct: null, isType: i % 3 === 2, chosen: null, userInput: '' }))
  );
  const [current, setCurrent] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [inputValue, setInputValue] = useState('');
  // stable distractor sets per question index
  const optionSets = useMemo(
    () => questions.map((q) => shuffle([q, ...getDistractors(book.vocabFlat, q, 3)])),
    [questions, book]
  );

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

  function chooseVocab(chosen, correct) {
    if (s.checked) return;
    updateState({ checked: true, chosen, correct: chosen === correct });
  }

  function checkVocab() {
    if (s.checked) return;
    const userVal = inputValue.trim();
    const correct = stripHarakat(userVal) === stripHarakat(q.ar);
    updateState({ checked: true, userInput: userVal, correct });
  }

  function nextVQ() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setInputValue('');
    } else finish();
  }
  function prevVQ() {
    if (current > 0) {
      setCurrent(current - 1);
      setInputValue(states[current - 1].userInput || '');
    }
  }
  function finish() {
    setShowScore(true);
    onFinish(score, questions.length);
  }
  function restartVocab() {
    setStates(questions.map((qq, i) => ({ checked: false, correct: null, isType: i % 3 === 2, chosen: null, userInput: '' })));
    setCurrent(0);
    setInputValue('');
    setShowScore(false);
  }

  function backTarget() {
    return vocabMode === 'random' ? { screen: 'book' } : { screen: 'sections', mode: 'vocab' };
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [current, showScore]);

  if (showScore) {
    const pct = Math.round((score / questions.length) * 100);
    const msg =
      pct === 100
        ? 'Perfect — all words correct!'
        : pct >= 80
        ? 'Excellent vocabulary recall.'
        : pct >= 60
        ? 'Good — a few more rounds will cement these.'
        : 'Keep practising — these words are worth knowing.';
    return (
      <div className="card">
        <div className="score-screen">
          <div className="score-big">{score}</div>
          <div className="score-sub">out of {questions.length}</div>
          <div className="score-msg">{msg}</div>
          <div className="score-btns">
            <button className="btn btn-primary" onClick={restartVocab}>Try again</button>
            <button className="btn" onClick={() => onNav(backTarget())}>
              {vocabMode === 'random' ? '← Menu' : '← Sections'}
            </button>
            <button className="btn" style={{ color: 'var(--accent)' }} onClick={() => onNav({ screen: 'ref', from: 'vscore' })}>
              📚 Glossary
            </button>
          </div>
        </div>
      </div>
    );
  }

  const tc = q.t === 'v' ? 'tag-v' : q.t === 'n' ? 'tag-n' : 'tag-adj';
  const tl = q.t === 'v' ? 'verb' : q.t === 'n' ? 'noun' : 'adjective';
  const options = optionSets[current];

  return (
    <div className="card">
      <div className="meta">
        <span className="q-counter">Q {current + 1} of {questions.length}</span>
        <span className="mode-tag">{vocabMode === 'random' ? '🔀 Randomised' : '📖 Section ' + (sectionIdx + 1)}</span>
        <span className="score-badge">Score: {score}</span>
      </div>
      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: (current / questions.length) * 100 + '%' }} />
      </div>
      <div className="vt-question">Translate: "{q.en}"</div>
      <div>
        <span className="vt-tag"><span className={'tag ' + tc}>{tl}</span></span>
      </div>

      <div>
        {s.isType ? (
          <div className="vt-type-wrap">
            <input
              className={'vt-input' + (s.checked ? ' ' + (s.correct ? 'correct' : 'wrong') : '')}
              placeholder="Type the Arabic..."
              dir="rtl"
              disabled={s.checked}
              value={s.checked ? s.userInput || '' : inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && checkVocab()}
            />
          </div>
        ) : (
          <div className="vt-options">
            {options.map((opt, i) => {
              let cls = 'vt-opt';
              if (s.checked) {
                if (opt.ar === q.ar) cls += ' ' + (s.correct ? 'correct' : 'reveal');
                else if (s.chosen === opt.ar) cls += ' wrong';
              }
              return (
                <button
                  key={i}
                  className={cls}
                  disabled={s.checked}
                  onClick={() => chooseVocab(opt.ar, q.ar)}
                >
                  {opt.ar}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className={'feedback' + (s.checked ? ' show ' + (s.correct ? 'correct' : 'wrong') : '')}>
        {s.checked ? (
          <>
            {s.correct ? '✓ Correct! ' : '✗ The answer is: '}
            <span style={{ fontFamily: "'Noto Naskh Arabic',serif", fontSize: 'var(--chip-size)' }}>{q.ar}</span> = {q.en}
          </>
        ) : null}
      </div>

      <div className="btn-row">
        <button className="btn" disabled={current === 0} onClick={prevVQ}>← Prev</button>
        <button className="btn btn-primary" disabled={!s.isType || s.checked} onClick={checkVocab}>
          Check
        </button>
        <div className="spacer" />
        <button className="btn" onClick={nextVQ}>{current === questions.length - 1 ? 'Finish ✓' : 'Next →'}</button>
      </div>

      <div className="quiz-footer">
        <span className="back-home" onClick={() => onNav(backTarget())}>
          {vocabMode === 'random' ? '← Menu' : '← Sections'}
        </span>
        <span className="ref-link" style={{ fontSize: '.82rem' }} onClick={() => onNav({ screen: 'ref', from: 'vocab' })}>
          📚 Glossary
        </span>
      </div>
    </div>
  );
}
