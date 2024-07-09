import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import {  FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-[#495057]" style={{maxWidth:"100vw"}}>
            <footer style={{maxWidth:"100vw"}} className="footer bg-[#495057]">
                <div className="container bg-[#495057]">
                    <div className="row bg-[#495057] justify-content-center">
                        <div className="col-md-12 bg-[#495057] text-center">
                            <h2 className="footer-heading bg-[#495057] text-3xl font-extrabold"><a href="/home" className="bg-[#495057]  ">TradeWise</a></h2>
                            <p className="menu  bg-[#495057]">
                                <a href="/home" className="bg-[#495057] ">Home</a>
                             
                                <a href="/sell" className="bg-[#495057]">Sell</a>
                                <a href="/buy" className="bg-[#495057]">Buy</a>
                                <a href="/contactUs" className="bg-[#495057]">Contact Us</a>
                            </p>
                            <ul className="display flex items-center justify-center gap-4 bg-[#495057] p-0">
                                <li className=" bg-[#495057]"><a href="https://github.com/Pranjalidhale0711" ><FaGithub   style={{background:"#495057"}} /></a></li>
                                <li className=" bg-[#495057]"><a href="https://www.linkedin.com/in/pranjali123/"  ><FaLinkedin  style={{background:"#495057"}} /></a></li>
                                <li className=" bg-[#495057]"><a href="https://www.instagram.com/"  ><FaInstagram  style={{background:"#495057"}} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-3 bg-[#495057]">
                        <div className="col-md-12 text-center bg-[#495057]">
                            <p className="bg-[#495057] copyright">
                                Copyright © All rights reserved <i className=" bg-[#495057]" aria-hidden="true" /> <a href="#" target="_blank" className="bg-[#495057]">TradeWise</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;