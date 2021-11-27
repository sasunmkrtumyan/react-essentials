import React, { useState, useEffect } from "react";
import useWindowWidth from "../../hooks/useWindowWidth";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const width = useWindowWidth();

  return <h2>{width}</h2>;
};

export default UseEffectCleanup;
