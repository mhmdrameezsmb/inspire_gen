"use client";
// InspirationGenerator.tsx
import React, { useState } from "react";
import FancyText from "./FancyText";
import quotes from "./quotes";
import "./InspirationGenerator.css"; // Import your CSS file for styling

interface InspirationGeneratorProps {
  children: React.ReactNode;
}

const InspirationGenerator: React.FC<InspirationGeneratorProps> = ({ children }) => {
  const [index, setIndex] = useState<number>(0);
  const quote: string = quotes[index];
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % quotes.length);

  return (
    <div className="inspiration-generator">
      <h2 className="header">Daily Inspiration</h2>
      <div className="quote-container">
        <FancyText title text={quote} />
      </div>
      <button className="inspire-button" onClick={next}>
        Inspire me again
      </button>
      {children}
    </div>
  );
};

export default InspirationGenerator;
