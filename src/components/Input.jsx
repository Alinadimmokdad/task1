import React, { useState } from "react";

const Input = ({ text, setHighlightWord, setWordCount }) => {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    const word = value.toLowerCase();
    const textLower = text.toLowerCase();

    if (textLower.includes(word)) {
      const count = (textLower.match(new RegExp(word, "g")) || []).length;
      setHighlightWord(value);
      setWordCount(count);
    } else {
      setWordCount(0);
    }
  };

  return (
    <>
      <input
        placeholder="enter word"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default Input;
