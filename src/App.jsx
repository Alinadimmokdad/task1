import { useState } from "react";
import Input from "./components/Input";
import Text from "./components/Text";

function App() {
  const [text, setText] = useState(
    "Understanding the difference between grid-template and grid-auto\nOct 09, 2018\nWith all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically, the difference between grid-template-rows/columns and grid-auto-rows/columns. Although I knew they were to...Recreating the GitHub Contribution Graph with CSS Grid Layout"
  );
  const [wordCount, setWordCount] = useState(0);
  const [highlightWord, setHighlightWord] = useState("");
  console.log(highlightWord);

  return (
    <>
      <Input
        text={text}
        setHighlightWord={setHighlightWord}
        setWordCount={setWordCount}
      />
      <br />
      {`${wordCount} posts were found.`}
      <Text
        textValue={text}
        highlightWord={highlightWord}
        wordCount={wordCount}
      />
    </>
  );
}

export default App;
