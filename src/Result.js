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
  console.log(products);
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
          src={require("./assets/logo.png")}
          alt="none"
        ></img>
        <h1>자유 선택형 상조 견적 확인</h1>
        <h5>직접 선택한 상조 상품의 금액을 확인 해보세요.</h5>
      </header>
      <main>
        <section className="result">
          <h2>상조 서비스</h2>
          {Object.keys(products).map((p, i) => (
            <div className="result__detail">
              <h3>{DATA[i].category}</h3>
              <h4>
                {/* {products[`p${i + 1}`] === 0
                  ? "선택안함"
                  : DATA[i].products[products[`p${i + 1}`] - 1].product} */}
                {DATA[i].products[products[p]].product}
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
          <h2>총 합</h2>
          {totalPrice < 100 ? (
            <h2>₩{totalPrice}0,000</h2>
          ) : (
            <h2>
              ₩{Math.floor(totalPrice / 100)},{totalPrice % 100}0,000
            </h2>
          )}
        </section>
        <section className="reference">
          <h6>- 빈소, 음식, 안치실, 입관실 등 <mark className="mark__red"> [병원], [장례식장] 시설 사용료는 포함되어 있지 않습니다.</mark></h6>
          <h6>
            - 장의차량, 리무진 운행시 도로 통행료는 고객 부담입니다.(초과거리
            10km 당 20,000원)
          </h6>
          <h6>
            - 장례복지사(도우미) 1인 1일 8시간 기준이며, 연장시 1시간당 1만원이
            추가됩니다.
          </h6>
          <h6>- 지역 및 상품 구성에 따라 혜택이 상이할 수 있습니다.</h6>
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
          <a className="btn__100" href="tel:16669058">
            <h2>도움장례 접수/문의</h2>
          </a>
        </section>
      </main>
      <footer>
        <section className="CS">
          <div className="left__wrapper">
            <h4 className="bold">24시 고객센터</h4>
            <h1>1666</h1>
            <h1>-9058</h1>
          </div>
          <div className="right__wrapper">
            <h2>장례접수+맞춤 컨설팅 동시 진행</h2>
            <h4>장례발생 전 사전상담을 하시면 진행이 더 원만하며</h4>
            <h4><mark className="yellow">장례식장, 병원과 겹치는 중복지출을 방지</mark>할 수 있습니다.</h4>
          </div>
        </section>
      </footer>
    </>
  );
};
