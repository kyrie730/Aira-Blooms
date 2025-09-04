"use client";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
}

export default function TypewriterText({ text }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev: string) => prev + text[currentIndex]);
        setCurrentIndex((prev: number) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
}
