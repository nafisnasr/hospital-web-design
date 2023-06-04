import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { HiLocationMarker } from "react-icons/hi"
import { MdOutlineKeyboardArrowLeft, MdEmail } from "react-icons/md"
import { SiTelegram, SiInstagram } from "react-icons/si"


export default function Footer() {
    return (
        <>
            <footer>
                <div className="footerWrapper row">

                    <div className="footerLinks col-lg-4">
                        <h4 className="footerLinksTitle">لینک های مفید</h4>
                        <Link className='link' to="/doctors"><span>پزشکان</span></Link>
                        <Link className='link' to="/get-appointment"><span>نوبت دهی</span></Link>
                        <Link className='link' to="/service"><span>خدمات</span></Link>
                        <Link className='link' to="/about-us"><span>درباره ی ما</span></Link>
                    </div>

                    <div className="footerAbout col-lg-4">
                        <h4 className='footerAboutTitle'>ساعات کاری</h4>
                        <div className="footerTimeTableBox">
                            <div className="timeTableItem">
                                <span>شنبه تا چهارشنبه</span>
                                <span>7 تا 24</span>
                            </div>
                            <div className="timeTableItem">
                                <span>پنجشنبه و جمعه</span>
                                <span>9 تا 22</span>
                            </div>
                        </div>
                        <div className="footerAddress">
                            <HiLocationMarker className="addressIcon" />
                            <span className='address'>آدرس : تهران - میدان دوم صادقیه - بلوارآیت الله کاشانی</span>
                        </div>
                    </div>

                    <div className="footerContactUs col-lg-4">

                        <h4 className='footerContactTitle'>شبکه های اجتماعی</h4>
                        <p className='footerContactDetail'>از آخرین اخبار مطلع شوید!</p>

                        <div className="footerInputBox">
                            <input type="text" placeholder='آدرس ایمیل' />
                            <MdOutlineKeyboardArrowLeft className='inputIcon' />
                        </div>

                        <div className="footerSocialMedia">
                            <a href="https://accounts.google.com/"><MdEmail className="email socialMediaIcon" /></a>

                            <a href="https://telegram.org/"><SiTelegram className="telegram socialMediaIcon" /></a>

                            <a href="https://www.instagram.com/"><SiInstagram className="instagram socialMediaIcon" /></a>
                        </div>
                    </div>

                </div>
            </footer>
            <div className="copyrightBox">
                <span className='copyrightText'> ©   تمام حقوق مادی و معنوی این وبسایت متعلق به مجموعه بیمارستان های سنترال است.
                </span>
                <span>طراحی شده توسط <a href="https://github.com/nafisnasr">@nafisnasr</a></span>
            </div>
        </>
    )
}
