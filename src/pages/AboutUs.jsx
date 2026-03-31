import React from 'react'
import "../css/AboutUs.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

function AboutUs() {
    return (
        <div>
            <Header/>
            <div id='body'>
                <div className="hero2">
                    <div className="titleText">About Us</div>
                    <div className="heroText">Home / <span>About Us</span></div>
                </div>

                <div className="secondsection">
                    <div className="secondClass">
                        <div className="SCOne titleText">Where every drive feels extraordinary</div>
                        <div className="SCTwo">
                            <div className="SCcolumn">
                                <div className="SCCard">
                                    <div className="SCTitle">Variety Brands</div>
                                    <div className="SCText">Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam
                                        natoque ornare cursus viverra odio</div>
                                </div>
                                <div className="SCCard">
                                    <div className="SCTitle">Awesome Suport</div>
                                    <div className="SCText">Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam
                                        quam
                                        gravida ultricies velit</div>
                                </div>
                            </div>
                            <div className="SCcolumn">
                                <div className="SCCard">
                                    <div className="SCTitle">Maximum Freedom</div>
                                    <div className="SCText">Diam quam gravida ultricies velit duis consequat integer. Est aliquam
                                        posuere vel rhoncus massa volutpat in</div>
                                </div>
                                <div className="SCCard">
                                    <div className="SCTitle">flexibility on the go</div>
                                    <div className="SCText">Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas
                                        dis.faucibus rhoncus. Iaculis dignissim aenean pellentesque nisl</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="video">
                <iframe width="1296px" height="660px" src="https://www.youtube.com/embed/B3H-liXMoIU?si=ktkmhCTHG8sNVFxg"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div> */}
                <div className="video">
                    <iframe width="1296px" height="660px" src="https://www.youtube.com/embed/B3H-liXMoIU?si=ktkmhCTHG8sNVFxg" ></iframe>
                </div>


                <div className="counter">
                    <div className="counterBox">
                        <div className="counterTitle">20k+</div>
                        <div className="counterText">Happy customers</div>
                    </div>
                    <div className="counterBox">
                        <div className="counterTitle">540+</div>
                        <div className="counterText">Count of cars</div>
                    </div>
                    <div className="counterBox">
                        <div className="counterTitle">25+</div>
                        <div className="counterText">Years of experience</div>
                    </div>
                </div>

                <div className="infoBlock">
                    <div className="IBText">
                        <div className="titleText">Unlock unforgettable memories on the road</div>
                        <div className="IBText2">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et
                            gravida. Quis nunc interdum gravida ullamcorper</div>
                        <div className="IBText3">
                            <div className="IBText31">
                                <div className="IBText311">
                                    <img src="../src/assets/check.png" alt="check" />
                                </div>
                                <div className="IBText312">Velit semper morbi. Purus non eu cursus porttitor tristique et gravida..
                                </div>
                            </div>
                            <div className="IBText31">
                                <div className="IBText311">
                                    <img src="../src/assets/check.png" alt="check" />
                                </div>
                                <div className="IBText312">Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum
                                </div>
                            </div>
                        </div>
                        <div className="IBText3">
                            <div className="IBText31">
                                <div className="IBText311">
                                    <img src="../src/assets/check.png" alt="check" />
                                </div>
                                <div className="IBText312">Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
                                </div>
                            </div>
                            <div className="IBText31">
                                <div className="IBText311">
                                    <img src="../src/assets/check.png" alt="check" />
                                </div>
                                <div className="IBText312">Quis nunc interdum gravida ullamcorper Purus non eu cursus porttitor
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="IBimg">
                        <img src="../src/assets/aboutUs-1.png" alt="img" />
                    </div>
                </div>

                <div className="AUbanner">
                    <div className="AUbannerBox">
                        <div className="AUbannerTB">
                            <div className="AUbannertext AUbannerTB">
                                <div className="AUbannertextTitle">
                                    <div className="AUbannertextTitle1">Download our app</div>
                                    <div className="AUbannertextTitle2">Download our app</div>
                                </div>
                                <div className="AUbannertextText">Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
                                    semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla nam eget urna
                                    fusce vulputate at risus</div>
                                <div className="AUbannerImageGroup">
                                    <img src="../src/assets/AU banner group.png" alt="" />
                                </div>
                            </div>
                            <div className="AUbannerButton">
                                <img src="../src/assets/AU App Store.png" alt="app" />
                                <img src="../src/assets/AU Google Play.png" alt="google" />
                            </div>
                        </div>
                        <div className="AUbannerImage">
                            <img src="../src/assets/bannerAboutus.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="testimonials">
                    <div className="Ttext titleText">Reviews from our customers</div>
                    <div className="Tcards">
                        <div className="Tcardscard">
                            <div className="TCupper">
                                <div className="TCupperText"> Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas.
                                    Amet erat volutpat quisque odio purus feugiat. In gravida neque </div>
                            </div>
                            <div className="TClower">
                                <div className="TClowertext1">Kuphal LLC</div>
                                <div className="TClowertext2">Emanuel Boyle</div>
                            </div>
                            <div className="Tcardscardimg1">
                                <img src="../src/assets/AU semi columns.png" alt="" />
                            </div>
                            <div className="Tcardscardimg2">
                                <img src="../src/assets/AU card img2.png" alt="" />
                            </div>
                        </div>
                        <div className="Tcardscard">
                            <div className="TCupper">
                                <div className="TCupperText"> Purus consectetur varius quis urna phasellus enim mattis. Sem
                                    tincidunt tortor nunc egestas amet adipiscing ligula </div>
                            </div>
                            <div className="TClower">
                                <div className="TClowertext1">Glover - Orn</div>
                                <div className="TClowertext2">River Graves</div>
                            </div>
                            <div className="Tcardscardimg1">
                                <img src="../src/assets/AU semi columns.png" alt="" />
                            </div>
                            <div className="Tcardscardimg2">
                                <img src="../src/assets/AU card img3.png" alt="" />
                            </div>
                        </div>
                        <div className="Tcardscard">
                            <div className="TCupper">
                                <div className="TCupperText"> Quam neque odio urna euismod felis. Sit egestas magna in quisque
                                    famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et </div>
                            </div>
                            <div className="TClower">
                                <div className="TClowertext1">Haag LLC</div>
                                <div className="TClowertext2">Ryder Malone</div>
                            </div>
                            <div className="Tcardscardimg1">
                                <img src="../src/assets/AU semi columns.png" alt="" />
                            </div>
                            <div className="Tcardscardimg2">
                                <img src="../src/assets/AU card img3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="FAQ">
                    <div className="FAQtext titleText">Top Car Rental Questions</div>
                    <div className="FAQAC">
                        <div className="accordion FAQAC1" id="accordionExample">
                            <div className="accordion-item FAQAC2">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button ACheading" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        How does it works?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body ACtext">
                                        Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh
                                        placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim
                                        condimentum. Condimentum interdum risus bibendum urna. Augue aliquet varius faucibus ut
                                        integer tristique ut. Pellentesque id nibh sed nulla non nulla
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item FAQAC2">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed ACheading" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Can I rent a car without a credit card?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body ACtext">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                        until
                                        the collapse plugin adds the appropriate classes that we use to style each element.
                                        These
                                        classes control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default
                                        variables.
                                        It's also worth noting that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item FAQAC2">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed ACheading" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        What are the requirements for renting a car?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body ACtext">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                        the
                                        collapse plugin adds the appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default
                                        variables.
                                        It's also worth noting that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item FAQAC2">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed ACheading" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body ACtext">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                        the
                                        collapse plugin adds the appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default
                                        variables.
                                        It's also worth noting that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item FAQAC2">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed ACheading" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        Does Car Rental offer coverage products for purchase with my rental?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body ACtext">
                                        This is the third item's accordion body. It is hidden by default, until
                                        the
                                        collapse plugin adds the appropriate classes that we use to style each element. These
                                        classes control the overall appearance, as well as the showing and hiding via CSS
                                        transitions. You can modify any of this with custom CSS or overriding our default
                                        variables.
                                        It's also worth noting that just about any HTML can go within the
                                        <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lowerBanner">
                    <div className="LB2">
                        <div className="LB2TB">
                            <div className="LB2TBtext">
                                <div className="LB2TBtext1 bannertextTitle2">Looking for a car?</div>
                                <div className="LB2TBtext2">+537 547-6401</div>
                                <div className="LB2TBtext3">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum
                                    ullamcorper in..</div>
                            </div>
                            <div>
                                <button className="LB2TBbutton">Book now</button>
                            </div>
                        </div>
                        <div className="lowerBannercar">
                            <img src="../src/assets/AU banner car.png" alt="car" />
                        </div>
                        <div className="lowerBannergroup">
                            <img src="../src/assets/AU banner 2 group.png" alt="group" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutUs
