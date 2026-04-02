import React from 'react'
import "../css/Home.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cars from "../../cars.json"


function Home() {
  return (
    <div>
      <Header />
      <div className="hero">
        <div className="heroContent">
          <div className="heroImage">
            <img src="../src/assets/Imgs.png" alt="" />
          </div>
          <div className="heroImageGroup">
            <img src="../src/assets/homeGroupImage1.png" alt="" />
          </div>
          <div className="TextButtonForm">
            <div className="textButtonContent">
              <div className="textButtonContentText">
                <div className="textButtonContentTextOne">
                  Experience the road like never before
                </div>
                <div className="textButtonContentTextTwo">
                  Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.
                  Quis nunc interdum gravida ullamcorper
                </div>
              </div>
              <div className="textButtonContentButton">
                <button>View all cars</button>
              </div>
            </div>
            <div className="FIformA">
              <div className="FIformHeadingA">Book your car</div>
              <div className="FIformInputA">
                <div className="FIfield1A">
                  <div className="FIfield1textA">Car type</div>
                  <div className="FIfield1iconA">
                    <img src="../src/assets/formArrowB.png" alt="arrow" />
                  </div>
                </div>
                <div className="FIfield1A">
                  <div className="FIfield1textA">Place of rental</div>
                  <div className="FIfield1iconA">
                    <img src="../src/assets/formArrowB.png" alt="arrow" />
                  </div>
                </div>
                <div className="FIfield1A">
                  <div className="FIfield1textA">Place of return</div>
                  <div className="FIfield1iconA">
                    <img src="../src/assets/formArrowB.png" alt="arrow" />
                  </div>
                </div>
                <div className="FIfield1A">
                  <div className="FIfield1textA">Rental date</div>
                  <div className="FIfield1iconA">
                    <img src="../src/assets/formCalendarB.png" alt="cal" />
                  </div>
                </div>
                <div className="FIfield1A">
                  <div className="FIfield1textA">Return date</div>
                  <div className="FIfield1iconA">
                    <img src="../src/assets/formCalendarB.png" alt="cal" />
                  </div>
                </div>
              </div>
              <div className="FIformButtonA">Book now</div>
            </div>
          </div>
        </div>
      </div>

      <div className="infoBlock">
        <div className="IBIconText">
          <div className="IBIconTextIconText">
            <div className="IBITITIcon">
              <img src="../src/assets/gps.png" alt="" />
            </div>
            <div className="IBITITText">
              Availability
            </div>
          </div>
          <div className="IBIconTextText">
            Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
          </div>
        </div>
        <div className="IBIconText">
          <div className="IBIconTextIconText">
            <div className="IBITITIcon">
              <img src="../src/assets/car2logo.png" alt="" />
            </div>
            <div className="IBITITText">
              Comfort
            </div>
          </div>
          <div className="IBIconTextText">
            Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis
          </div>
        </div>
        <div className="IBIconText">
          <div className="IBIconTextIconText">
            <div className="IBITITIcon">
              <img src="../src/assets/wallet.png" alt="" />
            </div>
            <div className="IBITITText">
              Savings
            </div>
          </div>
          <div className="IBIconTextText">
            Pretium convallis id diam sed commodo vestibulum lobortis volutpat
          </div>
        </div>
      </div>

      <div className="infoBlock2">
        <div className="IB2image">
          <img src="../src/assets/InfoBlock2.png" alt="" />
        </div>
        <div className="IB2text">
          <div className="IB2textText ">
            <div className="IB2TTtextBg">
              <div className="IB2TTtextBgBg">1</div>
              <div className="IB2TTtextBgText">Erat at semper </div>
            </div>
            Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem
            fermentum
          </div>
          <div className="IB2textText">
            <div className="IB2TTtextBg">
              <div className="IB2TTtextBgBg">2</div>
              <div className="IB2TTtextBgText">Urna nec vivamus risus duis arcu </div>
            </div>
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc
            interdum gravida ullamcorper
          </div>
          <div className="IB2textText">
            <div className="IB2TTtextBg">
              <div className="IB2TTtextBgBg">3</div>
              <div className="IB2TTtextBgText">Lobortis euismod imperdiet tempus </div>
            </div>
            Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus
            viverra nisi
          </div>
          <div className="IB2textText">
            <div className="IB2TTtextBg">
              <div className="IB2TTtextBgBg">4</div>
              <div className="IB2TTtextBgText">Cras nulla aliquet nam eleifend amet et </div>
            </div>
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc
            interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero
          </div>
        </div>
      </div>

      <div className="chooseTheCar">
        <div className="CTCTextIcon">
          <div className="CTCTIText">
            Choose the car that <br /> suits you
          </div>
          <div className="CTCTITextIcon">
            <div className="CTCTITextIconText">View All</div>
            <div className="CTCTITextIconIcon"><img src="../src/assets/arrow_forward_40dp_000_FILL0_wght600_GRAD0_opsz40.png"
              alt="arrow-right" /></div>
          </div>
        </div>
        <div className="CTCCards" id="CTCcars" data-limit="6">

          {Cars.slice(0, 6).map((car, index) => (
            <div className="CTCCardsCard" key={index}>
              <div className="CTCImageTextIcon">
                <div className="CTCITIImage">
                  <img src={car.image} alt=""/>
                </div>
                <div className="CTCITITextIcons">
                  <div className="CTCITITIText">
                    <div className="CTCITITITextOne">
                      <div className="CTCITITITextOneOne">{car.name}</div>
                      <div className="CTCITITITextOneTwo">{car.type}</div>
                    </div>
                    <div className="CTCITITITextTwo">
                      <div className="CTCITITITextTwoOne">${car.rent}</div>
                      <div className="CTCITITITextTwoTwo">per day</div>
                    </div>
                  </div>
                  <div className="CTCITITITextIcon">
                    <div className="CTCITITITextIconOne">
                      <div className="CTCITITITextIconOneOne">
                        <img src="../src/assets/auto_transmission.png" alt="gear"/>
                      </div>
                      <div className="CTCITITITextIconOneTwo">{car.transmission}</div>
                    </div>
                    <div className="CTCITITITextIconOne">
                      <div className="CTCITITITextIconOneOne">
                        <img src="../src/assets/fuel_station.png" alt="gear"/>
                      </div>
                      <div className="CTCITITITextIconOneTwo">{car.fuel}</div>
                    </div>
                    <div className="CTCITITITextIconOne">
                      <div className="CTCITITITextIconOneOne">
                        <img src="../src/assets/air_condition.png" alt="gear"/>
                      </div>
                      <div className="CTCITITITextIconOneTwo">{car.air}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="CTCCardButton">View Details</div>
            </div>
          ))}
          {/* <div className="CTCCardsCard">
            <div className="CTCImageTextIcon">
              <div className="CTCITIImage">
                <img src="./assets/mercedes_sedan.png" alt=""/>
              </div>
              <div className="CTCITITextIcons">
                <div className="CTCITITIText">
                  <div className="CTCITITITextOne">
                    <div className="CTCITITITextOneOne">Mercedes</div>
                    <div className="CTCITITITextOneTwo">Sedan</div>
                  </div>
                  <div className="CTCITITITextTwo">
                    <div className="CTCITITITextTwoOne">$25</div>
                    <div className="CTCITITITextTwoTwo">per day</div>
                  </div>
                </div>
                <div className="CTCITITITextIcon">
                  <div className="CTCITITITextIconOne">
                    <div className="CTCITITITextIconOneOne">
                      <img src="./assets/auto_transmission.png" alt="gear"/>
                    </div>
                    <div className="CTCITITITextIconOneTwo">Automat</div>
                  </div>
                  <div className="CTCITITITextIconOne">
                    <div className="CTCITITITextIconOneOne">
                      <img src="./assets/fuel_station.png" alt="gear"/>
                    </div>
                    <div className="CTCITITITextIconOneTwo">PB 95</div>
                  </div>
                  <div className="CTCITITITextIconOne">
                    <div className="CTCITITITextIconOneOne">
                      <img src="./assets/air_condition.png" alt="gear"/>
                    </div>
                    <div className="CTCITITITextIconOneTwo">Air Conditioner</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="CTCCardButton">View Details</div>
          </div> */}
        </div>
      </div>

      <div className="banner">
        <div className="subBanner">
          <div className="bannerImage">
            <img src="../src/assets/homebannercar.png" alt="" />
          </div>
          <div className="bannerGroupimage">
            <img src="../src/assets/homeGroupImage2.png" alt="" />
          </div>
          <div className="bannerText">
            <div className="bannerTextOne">Facts in numbers</div>
            <div className="bannerTextTwo">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum
              ullamcorper <br /> in. Diam tincidunt tincidunt erat at semper fermentum</div>
          </div>
          <div className="bannerCounter">
            <div className="bannerCounterCard">
              <div className="bannerCounterCardIcon">
                <img src="../src/assets/bannerCardCar.png" alt="banner_png" />
              </div>
              <div className="bannerCounterCardText">
                <div className="bannerCounterCardTextOne">540+</div>
                <div className="bannerCounterCardTextTwo">Cars</div>
              </div>
            </div>

            <div className="bannerCounterCard">
              <div className="bannerCounterCardIcon">
                <img src="../src/assets/bannerCardCustomer.png" alt="banner_png" />
              </div>
              <div className="bannerCounterCardText">
                <div className="bannerCounterCardTextOne">20k+</div>
                <div className="bannerCounterCardTextTwo">customers</div>
              </div>
            </div>

            <div className="bannerCounterCard">
              <div className="bannerCounterCardIcon">
                <img src="../src/assets/bannerCardYears.png" alt="banner_png" />
              </div>
              <div className="bannerCounterCardText">
                <div className="bannerCounterCardTextOne">25+</div>
                <div className="bannerCounterCardTextTwo">years</div>
              </div>
            </div>

            <div className="bannerCounterCard">
              <div className="bannerCounterCardIcon">
                <img src="../src/assets/bannerCardMiles.png" alt="banner_png" />
              </div>
              <div className="bannerCounterCardText">
                <div className="bannerCounterCardTextOne">20m+</div>
                <div className="bannerCounterCardTextTwo">mile</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="download">
        <div className="downloadApp">
          <div className="downloadAppText">
            <div className="downloadAppTextBold">Download <br /> mobile app</div>
            <div className="downloadAppTextNormal">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa.
              Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum
              risus bibendum urna
            </div>
          </div>
          <div className="downloadAppButton">
            <img src="../src/assets/App-Store.png" alt="appstore" />
            <img src="../src/assets/Google play.png" alt="googlestore" />
          </div>
        </div>
        <div className="downloadIcon">
          <img src="../src/assets/Download_phone.png" alt="" />
        </div>
      </div>

      <div className="banner2">
        <div className="subBanner2">
          <div className="banner2GroupImage">
            <img src="../src/assets/AU banner 2 group.png" alt="" />
          </div>
          <div className="banner2Text">
            <div className="banner2TextBold">
              Enjoy every mile with adorable companionship.
            </div>
            <div className="banner2TextButton">
              <div className="B2TBText">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum
                ullamcorper in. Diam tincidunt tincidunt erat</div>
              <div className="B2TBButton">
                <div className="B2TBButtonText">City</div>
                <div className="B2TBButtonButton">Search</div>
              </div>
            </div>
          </div>
          <div className="banner2Image">
            <img src="../src/assets/bannerCar.png" alt="" />
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Home
