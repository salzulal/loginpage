// import "./App.scss";

import ColLeft from "./components/Templates/ColLeft/ColLeft";
import ColRight from "./components/Templates//ColRight/ColRight";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col nopadding">
          <ColLeft />
        </div>
        <div className="col  nopadding">
          <ColRight />
        </div>
      </div>
    </div>
  );
}

export default App;
