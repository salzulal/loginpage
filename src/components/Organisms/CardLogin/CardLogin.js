import React from "react";
import "./styles.scss";
import FormContent from "./../../Molecules/FormContent/FormContent";
import Title from "./../../Atoms/Title/Title";
import Card from "./../../Atoms/Card/Card";

import logo from "./../../../img/Vector.png";

export default function CardLogin(props) {
  const { children, className } = props;
  return (
    <>
      <Card className="cardlogin">
        <Title img={logo}>Masuk CBT</Title>
        <FormContent></FormContent>
        <hr />
        <div className="row nopadding" id="footer">
          <span>
            Belum punya akun? <a href="">Daftar di sini.</a>
          </span>
        </div>{" "}
      </Card>
    </>
  );
}
