export default function FontSizeControl({ fontSize, onFontSize }) {
  return (
    <div className="font-size-control">
      <label>🔤</label>
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
  );
}