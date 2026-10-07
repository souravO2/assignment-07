"use client";

import { useEffect, useRef } from "react";

const DateDisplay = () => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    ref.current!.textContent = new Date().toLocaleDateString("bn-BD", {
      dateStyle: "full",
    });
  }, []);

  return <span ref={ref} />;
};

export default DateDisplay;
