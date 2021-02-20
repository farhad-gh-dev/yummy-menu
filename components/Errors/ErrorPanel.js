import React from "react";

export default function ErrorPanel({ text = "", type = "" }) {
  return (
    <div className={`error-panel text-cap ${type}${text ? " active" : ""}`}>
      {text}
    </div>
  );
}
