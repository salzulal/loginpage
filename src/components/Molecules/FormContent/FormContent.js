import React from "react";
import "./styles.scss";
import Button from "./../../Atoms/Button/Button";
import Input from "./../../Atoms/Input/Input";
import google from "./../../../img/Icon Google.png";
import facebook from "./../../../img/Icon Facebook.png";

export default function FormContent(props) {
  const { children, className } = props;
  return (
    <>
      <div className="row nopadding">
        <Input type="email">Email Anda</Input>
      </div>
      <div className="row nopadding">
        <Input type="password">Password</Input>
      </div>
      <div
        className="row d-flex justify-content-between nopadding"
        id="loginhelp"
      >
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="rememberMe" />
          <label className="form-check-label" for="rememberMe">
            Ingat Saya
          </label>
        </div>
        <a href="">Lupa Password?</a>
      </div>
      <div className="row button-row">
        <Button myclass="loginbutton" disable>
          Masuk Sekarang
        </Button>
      </div>
      <div className="row nopadding" id="sub">
        <span>atau melalui</span>
      </div>
      <div className="row button-row" id="buttonleft">
        <div class="col nopadding">
          <Button myclass="alternatelogin">
            <img src={google} id="logo-login" />
            by Google
          </Button>
        </div>
        <div class="col nopadding" id="buttonright">
          <Button myclass="alternatelogin">
            <img src={facebook} id="logo-login" />
            by Facebook
          </Button>
        </div>
      </div>
    </>
  );
}
