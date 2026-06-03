// - Show current window width
// - Update width when screen resizes

// **Hint**

// - Use `window.addEventListener`
// - Remove listener in cleanup


import { useState, useEffect } from "react";

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h2>Current Window Width: {width}px</h2>
    </>
  );
}

export default WindowWidth;
