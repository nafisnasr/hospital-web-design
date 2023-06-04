import React from "react";
import "./NumbersBox.css";

export default function NumbersBox() {
  return (
    <div className="numbersBox">
      <div className="numbersBoxWrapper row">
        <div className="numbersBoxItem col-lg-3 col-md-6 col-12">
          <h2 className="title">+200</h2>
          <p className="detail">پزشک ماهر</p>
        </div>
        <div className="numbersBoxItem col-lg-3 col-md-6 col-12">
          <h2 className="title">+300</h2>
          <p className="detail">کادر درمانی</p>
        </div>
        <div className="numbersBoxItem col-lg-3 col-md-6 col-12">
          <h2 className="title">+20</h2>
          <p className="detail">شعبه فعال</p>
        </div>
        <div className="numbersBoxItem col-lg-3 col-md-6 col-12">
          <h2 className="title">+2000</h2>
          <p className="detail">عمل موفق</p>
        </div>
      </div>
    </div>
  );
}
