import React from 'react'
import "../css/ContactUs.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

function ContactUs() {
    return (
        <div>
            <Header />
            <div className="hero3">
                <div className="titleText">Contact Us</div>
                <div className="heroText">Home / <span>Contact Us</span></div>
            </div>

            <div className="formImage">
                <div className="FIform">
                    <div className="FIformHeading">Book your car</div>
                    <div className="FIformInput">
                        <div className="FIfield1">
                            <div className="FIfield1text">Car type</div>
                            <div className="FIfield1icon">
                                <img src="../src/assets/formArrow.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="FIfield1">
                            <div className="FIfield1text">Place of rental</div>
                            <div className="FIfield1icon">
                                <img src="../src/assets/formArrow.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="FIfield1">
                            <div className="FIfield1text">Place of return</div>
                            <div className="FIfield1icon">
                                <img src="../src/assets/formArrow.png" alt="arrow" />
                            </div>
                        </div>
                        <div className="FIfield1">
                            <div className="FIfield1text">Rental date</div>
                            <div className="FIfield1icon">
                                <img src="../src/assets/formCalendar.png" alt="cal" />
                            </div>
                        </div>
                        <div className="FIfield1">
                            <div className="FIfield1text">Return date</div>
                            <div className="FIfield1icon">
                                <img src="../src/assets/formCalendar.png" alt="cal" />
                            </div>
                        </div>
                    </div>
                    <div className="FIformButton">Book now</div>
                </div>
                <div className="FIimage">
                    <img src="../src/assets/CU formImg.png" alt="" />
                </div>
            </div>

            <div className="contactUs">
                <div className="CUIT">
                    <div className="CUITiconBg">
                        <img src="../src/assets/footer_location.png" alt="" />
                    </div>
                    <div className="CUITtext">
                        <div className="CUITtextItem">Address</div>
                        <div className="CUITtextValue">Oxford Ave. Cary, NC 27511</div>
                    </div>
                </div>
                <div className="CUIT">
                    <div className="CUITiconBg">
                        <img src="../src/assets/footer_mail.png" alt="" />
                    </div>
                    <div className="CUITtext">
                        <div className="CUITtextItem">Email</div>
                        <div className="CUITtextValue">nwiger@yahoo.com</div>
                    </div>
                </div>
                <div className="CUIT">
                    <div className="CUITiconBg">
                        <img src="../src/assets/footer_call.png" alt="" />
                    </div>
                    <div className="CUITtext">
                        <div className="CUITtextItem">Phone</div>
                        <div className="CUITtextValue">+537 547-6401</div>
                    </div>
                </div>
                <div className="CUIT">
                    <div className="CUITiconBg">
                        <img src="../src/assets/footer_clock.png" alt="" />
                    </div>
                    <div className="CUITtext">
                        <div className="CUITtextItem">Opening hours</div>
                        <div className="CUITtextValue">Sun-Mon: 10am - 10pm</div>
                    </div>
                </div>
            </div>

            <div className="blog">
                <div className="blogTitle titleText">Latest blog posts & news</div>
                <div className="blogCards">
                    <div className="BGcard">
                        <div className="BGCimage">
                            <img src="../src/assets/CU blog1.png" alt="blog" />
                        </div>
                        <div className="BGCtext">
                            <div className="BGCtext1">How to choose the right car</div>
                            <div className="BGCtext2">News / 12April 2024</div>
                        </div>
                    </div>
                    <div className="BGcard">
                        <div className="BGCimage">
                            <img src="../src/assets/CU blog2.png" alt="blog" />
                        </div>
                        <div className="BGCtext">
                            <div className="BGCtext1">Which plan is right for me?</div>
                            <div className="BGCtext2">News / 12April 2024</div>
                        </div>
                    </div>
                    <div className="BGcard">
                        <div className="BGCimage">
                            <img src="../src/assets/CU blog3.png" alt="blog" />
                        </div>
                        <div className="BGCtext">
                            <div className="BGCtext1">Enjoy Speed, Choice & Total Control</div>
                            <div className="BGCtext2">News / 12April 2024</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="logos">
                <div className="innerLogos">
                    <img src="../src/assets/brands_toyota.png" alt="" />
                    <img src="../src/assets/brands_ford.png" alt="" />
                    <img src="../src/assets/brands_mercedes.png" alt="" />
                    <img src="../src/assets/brands_jeep.png" alt="" />
                    <img src="../src/assets/brands_bmw.png" alt="" />
                    <img src="../src/assets/brands_audi.png" alt="" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs
