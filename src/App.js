import './App.css';
import React from 'react'
import routes from './routes';
import TopBar from './components/TopBar/TopBar';
import {useRoutes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Footer from './components/Footer/Footer';

export default function App() {
  let router=useRoutes(routes)
  return (
    <>
      <TopBar />
      {router}
      <Footer/>
    </>
  )
}
