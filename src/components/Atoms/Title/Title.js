import React from "react";
import "./styles.scss";

export default function Title(props) {
  const { children, img } = props;

  return (
    <>
      <div className="row title">
        <div className="col-auto col-img">
          <img src={img} className="title-img"></img>
        </div>
        <div className="col-vr">
          <div className="col-auto vr"></div>
        </div>
        <div className="col col-txt">
          <h1 className="title-txt">{children}</h1>
        </div>
      </div>
    </>
  );
}
