import React from "react";
import "./Header.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="headerWrapper">
          <div className="headerTextBox">
            <h1 className="headerTitle f-1">
              خدمات <span>پزشکی</span> شما با ما
            </h1>
            <h1 className="headerTitle">
              به ما <span>اعتماد</span> کنید!
            </h1>
            <div className="headerDetails">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </div>

            <div className="headerBtnBox">
              <Button className="headerGetTimeBtn" variant="primary">
                <Link to="/get-appointment" className="link">
                  وقت بگیرید
                </Link>
              </Button>

              <Button className="headerLearnMoreBtn" variant="dark">
                <Link to="/about-us" className="link">
                  بیشتر بدانید
                </Link>
              </Button>
            </div>
            
          </div>
        </div>
      </header>
    </>
  );
}
