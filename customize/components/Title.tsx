import React from "react";

export const Title: React.FC<any> = ({ title, color = "#dcddde" }) => {
  return (
    <span
      style={{
        position: "fixed",
        top: "-14px",
        left: "10px",
        fontSize: "10px",
        fontWeight: "bold",
        color: color,
      }}
    >
      {title}
    </span>
  );
};
