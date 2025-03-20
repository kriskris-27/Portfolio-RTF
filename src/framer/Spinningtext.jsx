// SpinningText.jsx
import React from "react";
import "../index.css";

const SpinningText = ({
  children = "",
  duration = 10, // Increased duration for slower spin
  reverse = false,
  radius = 8,
  className = "",
  style = {},
}) => {
  const letters = Array.isArray(children) ? children.join("") : children;
  const letterArray = [...letters.split(""), " "];

  return (
    <div
      className={`spinning-text relative ${reverse ? "reverse" : ""} ${className}`}
      style={{
        animationDuration: `${duration}s`,
        ...style,
      }}
    >
      {letterArray.map((letter, index) => (
        <span
          key={index}
          className="letter absolute left-1/2 top-1/2"
          style={{
            transformOrigin: "center",
            transform: `
              translate(-50%, -50%)
              rotate(${(360 / letterArray.length) * index}deg)
              translateY(calc(-1ch * ${radius}))
            `,
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default SpinningText;
