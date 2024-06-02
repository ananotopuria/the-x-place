import logo from "../assets/thexplace-logo.png";
import React, { useState } from "react";
import Modal from "./Modal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="wrapper">
        <div className="navigation hidden">
          <a href="#" className="navigation__logo">
            <img className="header__logo" src={logo} alt="thexplace logo" />
          </a>
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  About
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  For Talent
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  For Hiring
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  For Partners
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Blog
                </a>
              </li>
              <div className="navigation__btns">
                <li className="navigation__item">
                  <a
                    href="#"
                    className="navigation__link-btn1"
                    onClick={openModal}
                  >
                    Sign in
                  </a>
                  <Modal isOpen={isModalOpen} onClose={closeModal} />
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link-btn2 green-btn">
                    Join
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
        <header className="header">
          <a href="#">
            <img className="header__logo" src={logo} alt="thexplace logo" />
          </a>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <div className="menu__btn hidden">
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    Menu <ion-icon name="chevron-down-outline"></ion-icon>
                  </a>
                </li>
              </div>
              <div className="header__menu">
                <li className="header__nav-item">
                  <a href="#" className="header__nav-link">
                    About
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#" className="header__nav-link">
                    For Talent
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#" className="header__nav-link">
                    For Hiring
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#" className="header__nav-link">
                    For Partners
                  </a>
                </li>
                <li className="header__nav-item">
                  <a href="#" className="header__nav-link">
                    Blog
                  </a>
                </li>
              </div>
              <div className="header__btns">
                <li className="header__nav-item">
                  <a
                    href="#"
                    className="header__nav-link sign-in"
                    onClick={openModal}
                  >
                    Sign in
                  </a>
                  <Modal isOpen={isModalOpen} onClose={closeModal} />
                </li>
                <li className="header__nav-item">
                  <a href="#" className="join green-btn">
                    Join
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </header>
        <div className="point"></div>
      </div>
    </>
  );
}

export default Header;
