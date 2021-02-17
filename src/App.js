// import "./App.scss";
import Button from "./components/Atoms/Button/Button.js";
import Title from "./components/Atoms/Title/Title.js";
import Input from "./components/Atoms/Input/Input.js";
import Card from "./components/Atoms/Card/Card.js";
import ColLeft from "./components/Templates/ColLeft/ColLeft.js";
import ColRight from "./components/Templates//ColRight/ColRight.js";
import logo from "./img/Vector.png";
import Play from "./img/Icon Play.png";
import BgOverlay from "./img/Overlay.png";
import Bg from "./img/Background.png";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <ColLeft></ColLeft>
        </div>
        <div className="col">
          <ColRight>
            <Title img={logo}>Masuk CBT</Title>
            <Input type="email">Email Anda</Input>
            <Input type="password">Password</Input>
            <Button color="primary">tes button</Button>
          </ColRight>
        </div>
      </div>
    </div>
  );
}

export default App;
