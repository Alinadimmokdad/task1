import PropTypes from "prop-types";

export default function Text({ text, highlightWord }) {
  return (
    <div>
      <p>{getHighlightedText(text, highlightWord)}</p>
    </div>
  );
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  highlightWord: PropTypes.string.isRequired,
};

const getHighlightedText = (text, highlightWord) => {
  if (!highlightWord.trim()) return text;

  const words = text.split(" ");

  return words.map((word, index) => {
    if (word.toLowerCase().startsWith(highlightWord.toLowerCase())) {
      const highlightLength = highlightWord.length;

      return (
        <span key={index}>
          <span style={{ backgroundColor: "yellow" }}>
            {word.slice(0, highlightLength)}
          </span>
          {word.slice(highlightLength)}{" "}
        </span>
      );
    }

    return word + " ";
  });
};
