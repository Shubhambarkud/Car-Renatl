import React from 'react'
import "../css/FooterCss.css"

function Footer() {
  return (
    <div>
      <footer id="footer">
        <div className="footer">
          <div className="footerITB">
            <div className="footerITBIconText">
              <div className="footerCardOne">
                <div className="footerCardOneIcon">
                  {/* <img src="./assets/Vector.png" alt=""> */}
                  <img src="../src/assets/Vector.png" alt="" />
                </div>
                <div className="footerCardOneText">Car Rental</div>
              </div>
              <div className="footerCardOne">
                <div className="footerCardOneIcon1">
                  {/* <img src="./assets/footer_location.png" alt=""> */}
                  <img src="../src/assets/footer_location.png" alt="" />
                </div>
                <div className="footerCardOneText1">
                  <div className="footerCardOneText11">Address</div>
                  <div className="footerCardOneText12">Oxford Ave, NC</div>
                </div>
              </div>
              <div className="footerCardOne">
                <div className="footerCardOneIcon1">
                  {/* <img src="./assets/footer_mail.png" alt=""> */}
                  <img src="../src/assets/footer_mail.png" alt="" />
                </div>
                <div className="footerCardOneText1">
                  <div className="footerCardOneText11">Email</div>
                  <div className="footerCardOneText12">nw@yahoo.com</div>
                </div>
              </div>
              <div className="footerCardOne">
                <div className="footerCardOneIcon1">
                  {/* <img src="./assets/footer_call.png" alt=""> */}
                  <img src="../src/assets/footer_call.png" alt="" />
                </div>
                <div className="footerCardOneText1">
                  <div className="footerCardOneText11">Phone</div>
                  <div className="footerCardOneText12">+537 547-6401</div>
                </div>
              </div>
            </div>
            <div className="footerITBTextIcon">
              <div className="footerCardTwo">
                <div className="footerCardTwoText">
                  Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis
                  vulputate.
                </div>
                <div className="footerCardTwoIcon">
                  <img src="../src/assets/facebook.png" alt=""/>
                    <img src="../src/assets/instagram.png" alt=""/>
                      <img src="../src/assets/twitter.png" alt=""/>
                        <img src="../src/assets/youtube.png" alt=""/>
                        </div>
                      </div>
                      <div className="footerCardTwo1">
                        <div className="footerCardTwo1Text1">Useful links</div>
                        <div className="footerCardTwo1Text2">
                          <div className="footerCardTwo1Text21">About us</div>
                          <div className="footerCardTwo1Text21">Contact us</div>
                          <div className="footerCardTwo1Text21">Gallery</div>
                          <div className="footerCardTwo1Text21">Blog</div>
                          <div className="footerCardTwo1Text21">F.A.Q</div>
                        </div>
                      </div>
                      <div className="footerCardTwo1">
                        <div className="footerCardTwo1Text1">Vehicles</div>
                        <div className="footerCardTwo1Text2">
                          <div className="footerCardTwo1Text21">Sedan</div>
                          <div className="footerCardTwo1Text21">Cabriolet</div>
                          <div className="footerCardTwo1Text21">Pickup</div>
                          <div className="footerCardTwo1Text21">Minivan</div>
                          <div className="footerCardTwo1Text21">SUV</div>
                        </div>
                      </div>
                      <div className="footerCardTwo1">
                        <div className="footerCardTwo1Text1">Download App</div>
                        <div className="footerCardTwo1TextIcon">
                          <img src="../src/assets/App-Store.png" alt=""/>
                            <img src="../src/assets/Google play.png" alt=""/>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="footerCopyright">
                      © Copyright Car Rental 2024. Design by Figma. guru
                    </div>
                </div>
              </footer>
            </div>
            )
}

            export default Footer
