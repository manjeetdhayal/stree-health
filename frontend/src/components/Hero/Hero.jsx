import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div>
      <div className="menu">
        <div className="container flex">
          {/* Mobile Button */}
          <div className="mobile-btn">
            <ion-icon name="grid"></ion-icon>
          </div>
          <div className="logo">
            <img
              src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/logo.png"
              alt=""
            />
          </div>

          <ul className="nav">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#why-us">About us</a></li>
            <li className="nav-item"><a href="#explore">Blogs</a></li>
            <li className="nav-item"><a href="#discount">Contact us</a></li>
          </ul>

          <a href="#" className="btn">Register</a>
        </div>
      </div>



      <header className="header">
        <div className="container flex">
          <div className="text">
            <h1 className="mb flex">
              Health of&nbsp;<br />
              <span>Women</span>
            </h1>

            <p className="hero-section-text mb m-auto w-[80%]">
              Women's health is important to everyone. A woman's health issues and conditions are unique, ranging from menopause and pregnancy to gynecological conditions like fibroids and endometriosis. Only women suffer from these health issues. There are other conditions that affect men as well, although they have a great deal more impact on women.
            </p>

            <a href="#" className="btn mt ml-[9%]">Get Started Now</a>
          </div>

          <div className="visual">
            <img
              src="3d-char.png"
              alt=""
              width={700}
            />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Hero