import React from "react";
import "./styles.scss";

export default function Card(props) {
  const { children, className } = props;
  return <div className={`card ${className}`}>{children}</div>;
}
