"use client"
import React, { useState } from "react";
import "./footer.css";
import { LiaTripadvisor } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <footer>
            <div className="containerFooter">
                <div className="upFooter">
                    <div className="about">
                        <h2 className="topicName">Şirkət haqqında</h2>
                        <p className="footerAbout">
                            GPS+ şirkəti, müasir və etibarlı GPS avadanlıqlarının satışını, quraşdırılmasını və proqramlaşdırılmasını təklif edən bir şirkətdir.
                            {isExpanded && (
                                <span>
                                    Şirkətimiz, müştərilərinə yüksək keyfiyyətli GPS cihazları təqdim etməklə yanaşı, onların düzgün quraşdırılması və istifadəyə verilməsi üçün peşəkar xidmətlər təmin edir. Biz, fərdi və korporativ müştərilərimizin ehtiyaclarına uyğun olaraq, dəqiq və effektiv GPS həlləri təqdim etməyə sadiqik.
                                </span>
                            )}
                        </p>
                        <button className="read" onClick={handleReadMore}>
                            {isExpanded ? "Read Less" : "Read More"}
                        </button>
                    </div>
                    <div className="servive">
                        <div className="lunch">
                            <h2 className="topicName">iş saatları</h2>
                            <p className="footerAbout">Həftə içi 5 gün saat 09:00-dan 18:00-dək </p>
                        </div>
                        <div className="dinner">
                            <h2 className="topicName">Nahar Fasiləsi</h2>
                            <p className="footerAbout">Hər gün: </p>
                            <p className="footerAbout">saat 13:00-dan 14:00-dək </p>
                        </div>
                    </div>
                    <div className="follow">
                        <h2 className="topicName">Bizi İzləyin</h2>
                        <div className="iconSocial">
                            <ul className="nameTopic">
                                <li className="tripad">
                                    <LiaTripadvisor />
                                </li>
                                <li>
                                    <FaTwitter />
                                </li>
                                <li>
                                    <FaFacebook />
                                </li>
                                <li>
                                    <BsInstagram />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className="end">
                Copyright © 2025 All rights reserved | This template is made with{" "}
                <FaHeart className="heart" /> bye{" "}
                <a className="colorib" href="">
                    Ziya Valiyev
                </a>
            </p>
        </footer>
    );
};

export default Footer;
