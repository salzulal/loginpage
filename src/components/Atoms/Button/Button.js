import React from "react";
import "./styles.scss";

export default function Button(props) {
  const { children, color } = props;
  return (
    <>
      <button className={`btn btn-${color}`}>{children}</button>
    </>
  );
}
