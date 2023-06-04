import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsTelephoneFill,
  BsInstagram,
  BsTwitter,
  BsTelegram,
} from "react-icons/bs";
import { GiMedicines } from "react-icons/gi";
import "./TopBar.css";

export default function TopBar() {
  return (
    <>
      <div className="topBarBox">
        <div className="topBarWrapper">
          <div className="addressBox">
            <div className="phoneBox">
              <span className="phone">123-456-789</span>
              <span className="logo">
                <BsTelephoneFill />
              </span>
            </div>
            <div className="emailBox">
              <span className="email">medicine@info.gmail.com</span>
              <span className="logo">
                <HiOutlineMail />
              </span>
            </div>
          </div>
          <div className="topBarSocialMedia">
            <span className="logo">
              <BsInstagram />
            </span>
            <span className="logo">
              <BsTwitter />
            </span>
            <span className="logo">
              <BsTelegram />
            </span>
          </div>
        </div>
      </div>
      <Navbar sticky="top" bg="light" expand="lg" dir="rtl">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0 p-3"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link className="navItem">
                <Link to="/" className="link">
                  خانه
                </Link>
              </Nav.Link>
              <Nav.Link className="navItem">
                <Link to="/ُservices" className="link">
                  خدمات
                </Link>
              </Nav.Link>
              <Nav.Link className="navItem">
                <Link to="/get-appointment" className="link">
                  نوبت دهی
                </Link>
              </Nav.Link>
              <Nav.Link className="navItem">
                <Link to="/doctors" className="link">
                  پزشکان
                </Link>
              </Nav.Link>
              <Nav.Link className="navItem">
                <Link to="/contact-us" className="link">
                  راه های ارتباط
                </Link>
              </Nav.Link>
              <Nav.Link className="navItem">
                <Link to="/about-us" className="link">
                  درباره ی ما
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand dir="ltr" className="navbarBrand" href="#">
            <GiMedicines className="top-bar-icon" />
            medicine
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
