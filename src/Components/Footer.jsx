import React from "react";
import './Footer.css'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";




function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="social-media">
                <h2>Follow Us</h2>
                <a href=""><FaFacebookF  className="Facebook"/></a>
                <a href=""><FaInstagram className="Instagram"/></a>
                <a href=""><FaXTwitter className="Twitter"/></a>
                <a href=""><FaYoutube className="YouTube"/></a>
            </div>

            <div className="copyright-section">
                <h3>FilmIndustry.com</h3>
                <p>© 2025 FilmIndustry.com. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}

export default Footer;