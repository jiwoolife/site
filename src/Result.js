import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import "./styles/Result.scss";
import { DATA, PREORDER } from "./DATA.js";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const Result = () => {
  const products = JSON.parse(atob(useQuery().get("products")));
  const totalPrice = Object.keys(products).reduce((acc, curr, i) => {
    return acc + DATA[i].products[products[curr]].price;
  }, 0);
  const shareKakao = () => {
    console.log(window.location.href);
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "도움장례",
        description: "#장례 #도움장례",
        imageUrl:
          "https://github.com/devgony/cherish/blob/master/src/assets/picture_1.jpg?raw=true",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
          androidExecParams: window.location.href,
          iosExecParams: window.location.href,
        },
      },
    });
  };
  return (
    <>
      <header>
        <img
          className="logo"
          src={require("./assets/logo_black.png")}
          alt="none"
        ></img>
        <h1>자유 선택형 상조 견적 확인</h1>
        <h5>직접 선택한 상조 상품의 금액을 확인 해보세요.</h5>
      </header>
      <main>
        <section className="result">
          <h2>상조 서비스</h2>
          {DATA.map((d, i) => (
            <div className="result__detail">
              <h3>{d.category}</h3>
              <h4>
                {/* {products[`p${i + 1}`] === 0
                  ? "선택안함"
                  : DATA[i].products[products[`p${i + 1}`] - 1].product} */}
                {DATA[i].products[products[`p${i + 1}`]].product}
              </h4>
            </div>
          ))}
        </section>
        <section className="result">
          <h2>사전 상담 혜택</h2>
          {PREORDER.map((p) => (
            <div className="result__detail">
              <h3>{p.title}</h3>
              <h4>{p.content}</h4>
            </div>
          ))}
        </section>
        <section className="price">
          <h4>총 합</h4>
          <h2>₩{totalPrice}0000</h2>
        </section>
        <section>
          <ul>
            <ol>
              빈소, 음식, 안치실, 입관실 등 [병원], [장례식장] 시설 사용료는
              포함되어 있지 않습니다.
            </ol>
            <ol>
              장의차량, 리무진 운행시 도로 통행료는 고객 부담입니다.(초과거리
              10km 당 20,000원)
            </ol>
            <ol>
              장례복지사(도우미) 1인 1일 8시간 기준이며, 연장시 1시간당 1만원이
              추가됩니다.
            </ol>
            <ol>지역 및 상품 구성에 따라 혜택이 상이할 수 있습니다.</ol>
          </ul>
        </section>
        <section className="btn__section">
          <div className="btn__wrapper">
            <Link to="/" className="btn__50">
              <h2>다시 선택하기</h2>
            </Link>
            <a className="btn__50" onClick={shareKakao}>
              <h2>카카오톡 공유하기</h2>
            </a>
          </div>
          <a className="btn__100" href="tel:01096549799">
            <h2>도움장례 접수/문의</h2>
          </a>
        </section>
      </main>
    </>
  );
};
