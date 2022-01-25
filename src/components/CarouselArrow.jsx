import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        lineHeight:"2",
        backgroundColor: "rgb(142 142 142)",
        borderRadius: "100%",
      }}
      onClick={props.onClick}
    />
  );
};

export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgb(142 142 142)",
        borderRadius: "50%",
      }}
      onClick={props.onClick}
    />
  );
};
