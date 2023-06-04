import React from "react";
import "./Services.css";
import { FaUserMd } from "react-icons/fa";
import { MdOutlineWatchLater, MdLocalHospital } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="servicesContainer">
      <div className="servicesWrapper row">
        <div className="serviceBox col-lg-3 col-11 col-mg-6">
          <div className="serviceBoxInfo">
            <FaUserMd className="serviceBoxIcon" />
            <span className="serviceCategory">سرویس 24 ساعته</span>
          </div>
          <h4 className="serviceBoxTitle">ویزیت آنلاین</h4>
          <p className="serviceBoxDetails">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
          <button className="serviceBoxBtn">
            <Link className="link" to="/get-appointment">
              وقت بگیرید
            </Link>
          </button>
        </div>

        <div className="serviceBox col-lg-3 col-11 col-mg-6">
          <div className="serviceBoxInfo">
            <MdOutlineWatchLater className="serviceBoxIcon" />
            <span className="serviceCategory">جدول زمانی</span>
          </div>
          <h4 className="serviceBoxTitle">ساعات کاری</h4>
          <div className="serviceBoxTimeTable">
            <div className="timeTableBox">
              <span className="day">شنبه - چهارشنبه</span>
              <span className="hour">8:00 - 17:00</span>
            </div>
            <div className="timeTableBox">
              <span className="day">پنجشنبه </span>
              <span className="hour">9:00 - 17:00</span>
            </div>
            <div className="timeTableBox">
              <span className="day">جمعه</span>
              <span className="hour">10:00 - 17:00</span>
            </div>
          </div>
        </div>

        <div className="serviceBox col-lg-3 col-11 col-mg-6">
          <div className="serviceBoxInfo">
            <MdLocalHospital className="serviceBoxIcon" />
            <span className="serviceCategory">موارد اورژانسی</span>
          </div>
          <h4 className="serviceBoxTitle">123-456-789</h4>
          <p className="serviceBoxDetails">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </div>
    </div>
  );
}
