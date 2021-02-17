import React from "react";
import "./styles.scss";

export default function Input(props) {
  const { children, label, type } = props;

  return (
    <>
      <input
        type={type}
        className="form-control"
        placeholder={children}
      ></input>
    </>
  );
}
