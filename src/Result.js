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
import { DATA } from "./DATA.js";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const Result = () => {
  const products = JSON.parse(atob(useQuery().get("products")));
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
            <div className="result__product">
              <h3>{d.category}</h3>
              <h4>
                {products[`p${i + 1}`] === 0
                  ? "선택안함"
                  : DATA[i].products[products[`p${i + 1}`] - 1].product}
              </h4>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};
