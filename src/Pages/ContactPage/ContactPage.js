import React from 'react';
import { MdEmail } from "react-icons/md";
import { SiInstagram, SiTelegram } from "react-icons/si";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contactPage">
      <div className="contactPageWrapper row">

        <div className="leftContactBox  col-lg-5 col-md-4 col-11 contactImgBox">
          <img src="/images/footer-header.jpg" alt="Central Hospital" />
        </div>

        <div className="rightContactBox col-lg-7 col-md-4  col-11 contactTextBox">

          <h3 className="textBoxTitle">راه های ارتباط با ما:</h3>
          <p className="phoneNumber">شماره تلفن 1 : 123-456-789</p>
          <p className="phoneNumber">شماره تلفن 2 : 123-456-789</p>
          <p className="address">آدرس : تهران - میدان دوم صادقیه - بلوارآیت الله کاشانی</p>
          <p className="gmailAddress">آدرس ایمیل: centralHospital@gmail.com</p>

          <div className="social-media-box">
            <a href="https://accounts.google.com/"><MdEmail className="email socialMediaIcon" /></a>

            <a href="https://telegram.org/"><SiTelegram className="telegram socialMediaIcon" /></a>

            <a href="https://www.instagram.com/"><SiInstagram className="instagram socialMediaIcon" /></a>

          </div>
        </div>


      </div>
    </div>
  )
}
