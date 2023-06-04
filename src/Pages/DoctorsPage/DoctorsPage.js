import React, { useState } from 'react'
import "./DoctorsPage.css"
import DoctorsInfoItem from '../../components/DoctorsInfoItem/DoctorsInfoItem';
import doctorsData from '../../Data';

export default function DoctorsPage() {
  const [doctorsInfo, setDoctorsInfo] = useState(doctorsData)

  return (
    <div className="doctorsPage">
      <div className="doctorsPageWrapper row">
        <div className="doctorsCategory">
          <h4 className="doctorsCategoryTitle">اعمال فیلتر</h4>
          <div className="categoryItem">
            <label htmlFor="doctors">پزشک متخصص</label>
            <input type="checkbox" name="doctors" />
          </div>
          <div className="categoryItem">
            <label htmlFor="surgeon">پزشک جراح</label>
            <input type="checkbox" name="surgeon" />
          </div>
          <div className="categoryItem">
            <label htmlFor="kidsDoctors">پزشک اطفال</label>
            <input type="checkbox" name="kidsDoctors" />
          </div>
          <div className="categoryItem">
            <label htmlFor="nurses">پرستاران</label>
            <input type="checkbox" name="nurses" />
          </div>
          <button className='saveChangeBtn'>ذخیره تغییرات</button>
        </div>

        <div className="doctorsInfoList">

          <h3 className="doctorsInfoListTitle">لیست پزشکان</h3>
          <div className="doctorsSearchBox">
            <input type="text" className='searchInput' placeholder="جستجوی نام پزشک..." />
            <button className="searchBtn">جستجو</button>
          </div>
          <div className="doctorsList">
            {doctorsInfo.map(doctor => (
              <DoctorsInfoItem key={doctor.id} {...doctor} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
