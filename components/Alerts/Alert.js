import React from "react";

export default function Alert({ text = "", type = "" }) {
  return (
    <div className={`alert-panel text-cap ${type}${text ? " active" : ""}`}>
      {text}
    </div>
  );
}
