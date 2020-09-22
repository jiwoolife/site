import React, { useRef, useCallback, useState, useEffect } from "react";
import "./App.css";
import * as html2canvas from "html2canvas";
import { useCapture } from "react-capture";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";

const FOODS = [
  { name: "공기밥: 1000원", price: 1000 },
  { name: "육개장: 5000원", price: 5000 },
  { name: "편육: 10000원", price: 10000 },
];
const FLOWERS = [
  { name: "장미: 3000원", price: 3000 },
  { name: "해바라기: 6000원", price: 6000 },
  { name: "튤립: 9000원", price: 9000 },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  // let query = useQuery();
  // let pathname = useLocation().pathname;
  // let history = useHistory();
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
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://developers.kakao.com/sdk/js/kakao.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   window.Kakao.init("a9ef4d3325bd1131b399777e2bbbc266");
  //   console.log(window.Kakao.isInitialized());
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <Router>
        <div ref={element}>
          <div id="capture" style={{ padding: "10px", background: "#f5da55" }}>
            {/* <img src="https://source.unsplash.com/random/300x300"></img> */}
            <img
              src={require("./test.jpeg")}
              style={{ width: "300px", height: "300px" }}
              alt="none"
            ></img>
            <h4 style={{ color: "#000" }}>Capture Test</h4>
          </div>
          <QueryParamsDemo
            // query={query}
            // pathname={pathname}
            // history={history}
            handleDownload={handleDownload}
          />
        </div>
      </Router>
    </>
  );
}

function QueryParamsDemo({ handleDownload }) {
  // { query, pathname, history }
  let query = useQuery();
  let pathname = useLocation().pathname;
  let history = useHistory();

  const [checkedFood, setCheckedFood] = useState(`food_${query.get("food")}`);
  const [checkedFlower, setCheckedFlower] = useState(
    `flower_${query.get("flower")}`
  );

  const onCheck = (name, value) => {
    query.set(name, value);
    history.push({
      pathname: pathname,
      search: query.toString(),
    });
  };
  const shareKakao = () => {
    console.log(window.location.href);
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "추모센터",
        description: "#추모 #센터 #장례",
        imageUrl:
          "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
    });
  };
  return (
    <div>
      {FOODS.map((food, i) => (
        <>
          <input
            type="radio"
            id={`food_${i}`}
            name="food"
            checked={`food_${query.get("food")}` === `food_${i}`}
            onChange={({ target: { id } }) => {
              // setCheckedFood(id);
              onCheck("food", i);
            }}
          />
          <label htmlFor={`food_${i}`}>{food.name}</label>
        </>
      ))}
      <br />
      {FLOWERS.map((flower, i) => (
        <>
          <input
            type="radio"
            id={`flower_${i}`}
            name="flower"
            checked={`flower_${query.get("flower")}` === `flower_${i}`}
            onChange={({ target: { id } }) => {
              // setCheckedFlower(id);
              onCheck("flower", i);
            }}
          />
          <label htmlFor={`flower_${i}`}>{flower.name}</label>
        </>
      ))}
      <Total foodIdx={query.get("food")} flowerIdx={query.get("flower")} />
      <div className="button__wrapper">
        <a href="tel:01096549799">전화연결</a>
        <button onClick={handleDownload}>
          저장하기(safari or chrome만 가능)
        </button>
        <button disabled>문자로공유</button>
        <button onClick={shareKakao}>카톡으로공유</button>
      </div>
    </div>
  );
}

function Total({ foodIdx, flowerIdx }) {
  return (
    <div>
      {foodIdx && flowerIdx ? (
        <h3>최종금액: {FOODS[foodIdx].price + FLOWERS[flowerIdx].price}</h3>
      ) : (
        <h3>모두 선택해주세요</h3>
      )}
    </div>
  );
}
export default App;
