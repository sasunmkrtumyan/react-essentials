import { useState, useEffect } from "react";

// cleanup function
// second argument

const useWindowWidth = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return size;
};

export default useWindowWidth;
