import { React, useState } from 'react'
import "./GetAppointment.css"
import { GoSignIn } from "react-icons/go"
import { BsPersonAdd } from "react-icons/bs"
import { Modal } from "react-bootstrap"
import { Button , Form } from "react-bootstrap"

export default function GetAppointment() {

  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const closeRegisterModal = () => setShowRegisterModal(false)
  const openRegisterModal = () => setShowRegisterModal(true)
  const openLoginModal = () => setShowLoginModal(true)
  const closeLoginModal = () => setShowLoginModal(false)

  return (
    <>
      <div className="getAppointment">

        <div className="getAppointmentWrapper">

          <h3 className="getAppointmentTitle">
            نوبت دهی اینترنتی بیمارستان
          </h3>

          <p className="appointmentRulesTitle">مراجعین محترم قبل از دریافت نوبت به موارد زیر توجه کنند:</p>

          <ul className="appointmentRules">
            <li>
              بیمار محترم ,در صورتیکه در تاریخ درخواستی نوبت دیگری در درمانگاه بیمارستان رزرو کرده باشید بیمارستان از پذیرش شما معذور می باشد
            </li>
            <li>
              ممکن است در زمان مراجعه شما ،پزشک انتخابی شما حضور نداشته باشد و پزشک جدید جایگزین، شما را معاینه نماید
            </li>
            <li>نوبت دهی اینترنتی دندانپزشکی صرفاً جهت بیماران بالای 12سال می باشد,جهت اطفال زیر 12 سال از روش نوبت دهی تلفنی 84090 اقدام نمائید
            </li>
            <li>
              هر فرد در هر ماه فقط یکبار می تواند از طریق این سامانه نوبت دریافت کند
            </li>
          </ul>

          <div className="appointmentBtnBox">

            <button
              className="logInBtn"
              onClick={openLoginModal}
            >
              <GoSignIn className="btnIcon" />
              ورود به سایت
            </button>

            <button
              className="registerBtn"
              onClick={openRegisterModal}
            >
              <BsPersonAdd className="btnIcon" />
              ثبت نام در سایت
            </button>

          </div>
        </div>
      </div>

      <Modal className="registerModal" dir="rtl" show={showRegisterModal} onHide={closeRegisterModal}>

        <Modal.Header>
          <Modal.Title className="ms-auto">ثبت نام در سایت</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="نام" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="نام خانوادگی" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="آدرس ایمیل" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary" onClick={closeRegisterModal}>ثبت نام</Button>
          <Button variant="secondary" onClick={closeRegisterModal}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal className="loginModal" dir="rtl" show={showLoginModal} onHide={closeLoginModal}>

        <Modal.Header>
          <Modal.Title className="ms-auto">ورود به سایت</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="آدرس ایمیل" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="password" placeholder="رمز عبور" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary" onClick={closeLoginModal}>ورود</Button>
          <Button variant="secondary" onClick={closeLoginModal}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
