function SplitText({ text, className = "", delay = 0, reverseAlternate = false }) {
  const words = text.split(" ");
  let charIndex = 0;
  const charTotal = text.replaceAll(" ", "").length;

  return (
    <span className={`split-text ${className}`}>
      {words.map((word, wordIndex) => (
        <span className="split-word" key={`${word}-${wordIndex}`}>
          {word.split("").map((char) => {
            const index = charIndex;
            charIndex += 1;
            const finalIndex =
              reverseAlternate && wordIndex % 2 === 1 ? charTotal - index : index;

            return (
              <span
                aria-hidden="true"
                className="split-char"
                key={`${char}-${index}`}
                style={{
                  "--char-index": finalIndex,
                  "--delay": `${delay}ms`,
                }}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && <span className="split-space"> </span>}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </span>
  );
}

export default SplitText;
