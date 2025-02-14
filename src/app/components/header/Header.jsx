"use client"
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import "./header.css";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="headContainer">
        <div className="logo">
          <Link href={"/"}><img src="/GPS.png" alt="Company logo" /></Link>
        </div>
        <TiThMenu className="menuIcon" onClick={toggleMenu} />
        <nav className={menuOpen ? "navMenu navOpen" : "navMenu"}>
          <ul>
            <li><a href="/">Ana Səhifə</a></li>
            <li><a href="/pages/about">Haqqımızda</a></li>
            <li><a href="/pages/products">Məhsullar</a></li>
            <li><a href="/pages/contact">Əlaqə</a></li>
          </ul>
          <div className="navIcons">
            <Link href={"/pages/wishlist"}><FaHeart className="faHeart" /></Link>
            <Link href={"/pages/addtocard"}><FaBasketShopping className="faBasket" /></Link>
            <div className="loginRegister">
              <span>Giriş et</span>
              <IoIosLogIn />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
