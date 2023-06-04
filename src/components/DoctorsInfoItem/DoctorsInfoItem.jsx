import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { RiArrowDropLeftLine } from "react-icons/ri";
import "./DoctorInfoItem.css"

export default function DoctorsInfoItem(props) {
  return (
    <div className="DoctorsInfoItem">
      <img src={props.img} alt={props.title} />
      <div className="doctosTextBox">
        <h5 className="doctorName">{props.name}</h5>
        <p className="doctorJob">{props.job}</p>
      </div>

      <div className="doctorInfoBtnBox">
        <AiOutlineLike className="likeIcon" />
        <Link to="/get-appointment">
          <button className="getAppointmentBtn">
            وقت بگیرید
            <RiArrowDropLeftLine/>
          </button>
        </Link>
      </div>

    </div>
  );
}
