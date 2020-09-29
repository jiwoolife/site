import React, { useRef, useCallback, useState, useEffect } from "react";
import "./styles/App.scss";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  useHistory,
  NavLink,
} from "react-router-dom";
import { DATA } from "./DATA.js";

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState({
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
    p7: 0,
    p8: 0,
    p9: 0,
    p10: 0,
    p11: 0,
    p12: 0,
    p13: 0,
    p14: 0,
  });
  const handleChange = ({ target: { value, id } }) => {
    setSelectedProducts((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <>
      <header>
        <img
          className="logo"
          src={require("./assets/logo_black.png")}
          alt="none"
        ></img>
        <h1>장례 규모에 맞춘 자유선택형 상조</h1>
        <h5>
          본 서비스는 장례준비가 되지 않은 상황에서도 장례식 및 상조비용을
          사전에 산출하여 규모에 맞는 용품과 서비스를 합리적으로 사용하실 수
          있도록 개발되었습니다.
        </h5>
      </header>
      <main>
        {DATA.map((d) => (
          <Product
            no={d.no}
            category={d.category}
            products={d.products}
            explain={d.explain}
            selectedProducts={selectedProducts}
            handleChange={handleChange}
          />
        ))}
        <Link
          className="btn__100"
          to={{
            pathname: "/result",
            search: `?products=${btoa(JSON.stringify(selectedProducts))}`,
          }}
        >
          <h2>최종 금액 확인하기</h2>
        </Link>
      </main>
    </>
  );
};

const Product = ({
  no,
  category,
  products,
  explain,
  selectedProducts,
  handleChange,
}) => {
  return (
    <>
      <section className="product">
        <div className="subtitle">
          <div className="number">{no}</div>
          <h2>{category}</h2>
        </div>
        <div className="content">
          <img
            className="picture"
            src={require("./assets/picture_1.jpg")}
            alt="none"
          ></img>
          <div className="explain">
            <div className="explain__top">
              <h4 className="bold">제공내역</h4>
              <h3>{products[0].product}</h3>
            </div>
            <div className="explain__bottom">
              <h4>{explain}</h4>
              <select
                name={`p${no}`}
                id={`p${no}`}
                onChange={handleChange}
                value={selectedProducts[`p${no}`]}
              >
                {/* <option value={0}>선택하세요*필수</option> */}
                {products.map((p, i) => (
                  <>
                    <option value={i}>{p.product}</option>
                  </>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
