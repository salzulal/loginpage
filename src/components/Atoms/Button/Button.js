import React from "react";
import "./styles.scss";

export default function Button(props) {
  const { children, myclass } = props;

  return (
    <>
      <button className={`btn  ${myclass}`}>{children}</button>
    </>
  );
}
