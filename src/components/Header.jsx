import React from 'react'
import "../css/HeaderCss.css"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div id="header-container">
            <header id="header">
                <div className="headerLogo">
                    <div className="headerLogoCar">
                        <img src="../src/assets/Vector.png" alt="" />
                    </div>
                    <div className="headerLogoText">
                        Car Rental
                    </div>

                </div>

                <div className="headerMenu">
                    <Link className="headerMenuText" to="/" >Home</Link>
                    <Link className="headerMenuText" to="/vehicles" >Vehicles</Link>
                    <Link className="headerMenuText" to="/details" >Details</Link>
                    <Link className="headerMenuText" to="/aboutus" >About Us</Link>
                    <Link className="headerMenuText" to="/contactus" >Contact Us</Link>
                    {/* <a className="headerMenuText" href="/">Home</a>
                    <a className="headerMenuText" href="vehicles.jsx">Vehicles</a>
                    <a className="headerMenuText" href="details.html">Details</a>
                    <a className="headerMenuText" href="aboutUs.html">About Us</a>
                    <a className="headerMenuText" href="contactUs.html">Contact Us</a> */}
                </div>

                <div className="headerIconText">
                    <div className="headerIconTextIcon">
                        <img src="../src/assets/phone.png" alt="" />
                    </div>
                    <div className="headerIconTextText">
                        <div className="headerIconTextText1">Need Help?</div>
                        <div className="headerIconTextText2">+996 247-1680</div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
