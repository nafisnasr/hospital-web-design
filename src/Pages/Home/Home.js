import React from 'react'
import Header from '../../components/Header/Header'
import Services from "../../components/Services/Services"
import AboutHospital from '../../components/AboutHospital/AboutHospital'
import NumbersBox from "../../components/NumbersBox/NumbersBox"
export default function Home() {

  return (
    <div className='home'>
      <Header />
      <Services />
      <AboutHospital/>
      <NumbersBox/>
    </div>
  )

}
