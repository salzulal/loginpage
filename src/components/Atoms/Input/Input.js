import React from "react";

import "./styles.scss";

export default function Input(props) {
  const { children, type } = props;

  return (
    <>
      <input
        type={type}
        className="form-control login-input"
        placeholder={children}
      ></input>
    </>
  );
}
