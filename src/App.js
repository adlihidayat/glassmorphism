import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header";
import CopyButton from "./components/copyButton";

const App = () => {
  const [rgba, setRgba] = useState("rgba( 0, 0, 0, 0.8)");
  const [blurVal, setBlurVal] = useState("blur(2px)");
  const [opacity, setOpacity] = useState("0.8");
  const [color, setColor] = useState("0, 0, 0");
  // console.log(blurVal);
  let copyText = `background: ${rgba}; 
  backdropFilter: ${blurVal};`;

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result && {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
  }

  useEffect(() => {
    setRgba(`rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`)
  }, [opacity, color])


  return (
    <div className="App">
      <Header />
      <div
        className="result"
        style={{ background: rgba, backdropFilter: blurVal }}
      >
        <h1>Glassmorphizm</h1>
        <CopyButton val={copyText} />
      </div>
      <div className="container">
        <form>
          <label>Opacity</label>
          <input
            type={"range"}
            min={0}
            max={100}
            onChange={(newState) => {
              setOpacity((newState.target.value / 100).toString());
            }}
          ></input>
        </form>
        <form>
          <label>Blur</label>
          <input
            type={"range"}
            min={0}
            max={20}
            onChange={(newState) => {
              setBlurVal("blur(" + newState.target.value.toString() + "px)");
            }}
          ></input>
        </form>
        <form className="color">
          <label>Color</label>
          <input
            type={"color"}
            min={0}
            max={20}
            onChange={(e) => {
              setColor(hexToRgb(e.target.value));
            }}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default App;
