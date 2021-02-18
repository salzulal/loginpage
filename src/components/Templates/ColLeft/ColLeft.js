import React from "react";
import "./styles.scss";
import play from "./../../../img/Icon Play.png";

export default function Colleft() {
  return (
    <>
      <div className="row" id="rowcontainer-left">
        <div className="row" id="iconplay">
          <img src={play} alt="" />
        </div>
        <div className="row" id="text">
          <div>
            <span>
              Computer Based Test
              <br />
              PT Sentra Vidya Utama
            </span>
            <p>
              Sebuah media uji kemampuan Anda dengan teknologi yang tepat namun
              nyaman digunakan dan memiliki hasil akurat yang dapat dilihat
              langsung setelah selesai
            </p>
          </div>
        </div>

        <div
          className="row d-flex justify-content-between mt-auto"
          id="copyright"
        >
          <span>Copyright © 2021 by SEVIMA</span>
          <span>Versi 1.0.0</span>
        </div>
      </div>
    </>
  );
}
