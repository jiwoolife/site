import React, { useRef, useCallback } from "react";
import "./App.css";
import * as html2canvas from "html2canvas";
import { useCapture } from "react-capture";

function App() {
  const handleCapture = () => {
    html2canvas(document.querySelector(":root")).then((canvas) => {
      document.body.appendChild(canvas);
    });
  };
  const { snap } = useCapture();
  const element = useRef(null);

  const handleDownload = useCallback(() => {
    snap(element, { file: "download.png" });
  }, [snap, element]);
  return (
    <>
      <div>
        <div
          ref={element}
          id="capture"
          style={{ padding: "10px", background: "#f5da55" }}
        >
          {/* <img src="https://source.unsplash.com/random/300x300"></img> */}
          <img
            src={require("./test.jpeg")}
            style={{ width: "300px", height: "300px" }}
            alt="none"
          ></img>
          <h4 style={{ color: "#000" }}>Hello world!</h4>
        </div>
        <div className="button__wrapper">
          <a href="tel:01096549799">전화연결</a>
          <button onClick={handleDownload}>저장하기</button>
          <button disabled>문자로공유</button>
          <button disabled>카톡으로공유</button>
        </div>
      </div>
    </>
  );
}

export default App;
