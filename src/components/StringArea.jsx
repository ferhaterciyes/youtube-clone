import { useState } from "react";

const StringArea = ({ text, max }) => {
  const [expend, setExpend] = useState(false);

  let shortText = text;

  if (text.length > max && !expend) {
    shortText = text.slice(0, max) + "...daha fazla";
  }

  return (
    <p onClick={() => setExpend(!expend)}>
      {shortText.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </p>
  );
};

export default StringArea;
