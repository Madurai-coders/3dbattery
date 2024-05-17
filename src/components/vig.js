import React from 'react';
import "../assets/css/vig.css";
import Logo from "../assets/images/logo.svg";
import Vig1 from "../assets/images/vig-detail.svg";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';

import B1 from '../components/b1';
function Vig() {
  return (
    <>
      <div className="home-page">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand text-center" href="/">
              <img src={Logo} alt="" className=" logo pt-2" />
            </a>

            <ul className="list-item pt-1">
              <li className="nav-item">
                <a href="#">PRODUCTS</a>
              </li>
              <li className="nav-item">
                <a href="#">MARKETS</a>
              </li>
              <li className="nav-item">
                <a href="/cap">CAPABILITIES</a>
              </li>
              <li className="nav-item">
                <a href="/about">ABOUT US</a>
              </li>
              <li className="nav-item">
                <a href="/about">CONTACT US</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="vigor-sec">
          <div className="row">
            <div className="col-4">
              <h1 className="emp">EMPOWERING YOUR ENERGY FUTURE</h1>
              <h3 className="nex pt-2">Nexigo Battery Solutions</h3>
              <div className='row mt-4'>
                <div className='col-2'>
                <Button variant="outlined"  className='btn-arrow'><KeyboardBackspaceIcon/></Button>

                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                <Button variant="outlined"  className='btn-arrow'><EastIcon/></Button>

                </div>
              </div>
            </div>
            <div className="col-4">
              {/* <B1/> */}
            </div>
            <div className="col-4">
              <h1 className="vig">VIGOR</h1>
              <img src={Vig1} alt="detail" className="vig-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vig;
