import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Input = ({ text, setHighlightWord, setWordCount }) => {
  const [inpValue, setInpValue] = useState("");

  const handleSearch = () => {
    const word = inpValue.toLowerCase();
    const textLower = text.toLowerCase();

    if (textLower.includes(word) && !!inpValue) {
      const count = (
        textLower.split(" ").filter((word) => word.startsWith(inpValue)) || []
      ).length;
      setHighlightWord(inpValue);
      setWordCount(count);
    } else {
      setWordCount(0);
      setHighlightWord("");
    }
  };

  useEffect(() => {
    handleSearch();
  }, [inpValue]);

  return (
    <>
      <input
        placeholder="enter word"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />
    </>
  );
};

export default Input;

Input.propTypes = {
  text: PropTypes.string.isRequired, // `text` should be a required string
  setHighlightWord: PropTypes.func.isRequired, // `setHighlightWord` should be a required function
  setWordCount: PropTypes.func.isRequired, // `setWordCount` should be a required function
};
