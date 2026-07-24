import { useEffect, useState } from 'react';
import Library from './components/Library';
import BookHome from './components/BookHome';
import SectionMenu from './components/SectionMenu';
import SentenceBuilder from './components/SentenceBuilder';
import VocabTester from './components/VocabTester';
import Reference from './components/Reference';
import { getBook } from './content/bookRegistry';
import { loadProgress, saveProgress } from './data/progressStore';

export default function App() {
  const [screen, setScreen] = useState('library');
  const [bookId, setBookId] = useState(null);
  const [sectionMenuMode, setSectionMenuMode] = useState('quiz');
  const [quizMode, setQuizMode] = useState('ordered');
  const [vocabMode, setVocabMode] = useState('ordered');
  const [sectionIdx, setSectionIdx] = useState(-1);
  const [refFrom, setRefFrom] = useState('book');
  const [fontSize, setFontSize] = useState(1.1);
  const [progress, setProgress] = useState({});
  const [quizVisited, setQuizVisited] = useState(false);
  const [vocabVisited, setVocabVisited] = useState(false);

  const book = bookId ? getBook(bookId) : null;

  useEffect(() => {
    document.documentElement.style.setProperty('--chip-size', fontSize + 'rem');
  }, [fontSize]);

  useEffect(() => {
    if (screen === 'quiz') setQuizVisited(true);
    if (screen === 'vocab') setVocabVisited(true);
  }, [screen]);

  useEffect(() => {
    if (bookId) setProgress(loadProgress(bookId));
  }, [bookId]);

  function handleNav(target) {
    if (target.keepState) {
      setScreen(target.screen);
      return;
    }
    if (target.screen === 'library') {
      setBookId(null);
      setQuizVisited(false);
      setVocabVisited(false);
      setScreen('library');
    } else if (target.screen === 'book') {
      if (target.bookId) {
        setBookId(target.bookId);
        setQuizVisited(false);
        setVocabVisited(false);
      }
      setScreen('book');
    } else if (target.screen === 'sections') {
      setSectionMenuMode(target.mode);
      setScreen('sections');
    } else if (target.screen === 'quiz') {
      if (target.quizMode) setQuizMode(target.quizMode);
      if (target.sectionIdx !== undefined) setSectionIdx(target.sectionIdx);
      setScreen('quiz');
    } else if (target.screen === 'vocab') {
      if (target.vocabMode) setVocabMode(target.vocabMode);
      if (target.sectionIdx !== undefined) setSectionIdx(target.sectionIdx);
      setScreen('vocab');
    } else if (target.screen === 'ref') {
      setRefFrom(target.from);
      setScreen('ref');
    } else {
      setScreen(target.screen);
    }
  }

  function handleQuizFinish(score, total) {
    if (sectionIdx >= 0 && bookId) {
      const updated = saveProgress(bookId, 'quiz-' + sectionIdx, score, total);
      setProgress(updated);
    }
  }

  function handleVocabFinish(score, total) {
    if (sectionIdx >= 0 && bookId) {
      const updated = saveProgress(bookId, 'vocab-' + sectionIdx, score, total);
      setProgress(updated);
    }
  }

  return (
    <div className="container">
      {screen === 'library' && <Library fontSize={fontSize} onFontSize={setFontSize} onNav={handleNav} />}
      {screen === 'book' && book && <BookHome book={book} onNav={handleNav} />}
      {screen === 'sections' && book && (
        <SectionMenu book={book} mode={sectionMenuMode} progress={progress} onNav={handleNav} />
      )}
      {quizVisited && book && (
        <div style={{ display: screen === 'quiz' ? 'block' : 'none' }}>
          <SentenceBuilder
            key={bookId + '-' + quizMode + '-' + sectionIdx}
            book={book}
            quizMode={quizMode}
            sectionIdx={sectionIdx}
            onFinish={handleQuizFinish}
            onNav={handleNav}
          />
        </div>
      )}
      {vocabVisited && book && (
        <div style={{ display: screen === 'vocab' ? 'block' : 'none' }}>
          <VocabTester
            key={bookId + '-' + vocabMode + '-' + sectionIdx}
            book={book}
            vocabMode={vocabMode}
            sectionIdx={sectionIdx}
            onFinish={handleVocabFinish}
            onNav={handleNav}
          />
        </div>
      )}
      {screen === 'ref' && book && <Reference book={book} from={refFrom} onNav={handleNav} />}
    </div>
  );
}
