import React from "react";
export function AppsCard({ title, desc }) {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minWidth: 400,
        maxWidth: 400,
        borderRadius: 15,
        margin: 10,
        padding: 15,
      }}
    >
      <div
        style={{
          fontSize: 22,
          fontWeight: "bold",
          paddingBottom: 5,
        }}
      >
        {title}
      </div>
      <div
        style={{
          width: "60px",
          backgroundColor: "#000000",
          height: 2,
        }}
      ></div>
      <div
        style={{
          paddingTop: 5,
        }}
      >
        {desc}
      </div>
    </div>
  );
}
