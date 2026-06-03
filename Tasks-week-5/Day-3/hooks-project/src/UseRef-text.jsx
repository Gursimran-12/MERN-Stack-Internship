import { useRef, useState, useEffect } from "react";

function Text() {
  const inputRef = useRef();
  const [showText, setShowText] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setShowText(inputRef.current.value);
      setClicked(false);
    }
  }, [clicked]);

  return (
    <div>
      <input type="text" ref={inputRef} />

      <button onClick={() => setClicked(true)}>
        Show
      </button>

      <h3>{showText}</h3>
    </div>
  );
}

export default Text;
