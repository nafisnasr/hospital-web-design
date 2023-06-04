import React from "react";
import "./AboutHospital.css";
import { Link } from "react-router-dom";
import { TbCalendarTime } from "react-icons/tb";
import { MdKeyboardArrowRight, MdOutlineContactSupport } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

export default function AboutHospital() {
  return (
    <>
      <div className="AboutHospital">
        <div className="AboutHospitalWrapper row">
          <div className="AboutHospitalImgBox col-lg-5 col-12">
            <img
              src="/images/AboutHospital.jpg"
              alt="AboutHospital"
              className="container-fluid"
            />
          </div>

          <div className="AboutHospitalCenterBox col-lg-4  col-12">
            <h3 className="title">خدمات درمانی مراکز ما</h3>
            <p className="details">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <p className="details">
            . در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </div>

          <div className="AboutHospitalRightBox col-lg-3 col-12">
            <Link to="/get-appointment" className="link">
              <div className="AboutHospitalItems">
                <TbCalendarTime className="AboutHospitalIcon" />
                <span>درخواست نوبت</span>
                <MdKeyboardArrowRight className="AboutHospitalIcon" />
              </div>
            </Link>

            <Link to="/doctors" className="link">
              <div className="AboutHospitalItems">
                <FaUserMd className="AboutHospitalIcon" />
                <span>پزشکان ما</span>
                <MdKeyboardArrowRight className="AboutHospitalIcon" />
              </div>
            </Link>
            <Link to="/address" className="link">
              <div className="AboutHospitalItems">
                <HiLocationMarker className="AboutHospitalIcon" />
                <span>آدرس مراکز</span>
                <MdKeyboardArrowRight className="AboutHospitalIcon" />
              </div>
            </Link>
            <Link to="/contact-us" className="link">
              <div className="AboutHospitalItems">
                <MdOutlineContactSupport className="AboutHospitalIcon" />
                <span>ارتباط با کارشناسان ما</span>
                <MdKeyboardArrowRight className="AboutHospitalIcon" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
