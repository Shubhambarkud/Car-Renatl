import React from 'react'
import "../css/Home.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cars from "../../cars.json"


function Home() {
  return (
    <div>
      <Header />
      <div class="hero">
        <div class="heroContent">
          <div class="heroImage">
            <img src="../src/assets/Imgs.png" alt="" />
          </div>
          <div class="heroImageGroup">
            <img src="../src/assets/homeGroupImage1.png" alt="" />
          </div>
          <div class="TextButtonForm">
            <div class="textButtonContent">
              <div class="textButtonContentText">
                <div class="textButtonContentTextOne">
                  Experience the road like never before
                </div>
                <div class="textButtonContentTextTwo">
                  Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida.
                  Quis nunc interdum gravida ullamcorper
                </div>
              </div>
              <div class="textButtonContentButton">
                <button>View all cars</button>
              </div>
            </div>
            <div class="FIformA">
              <div class="FIformHeadingA">Book your car</div>
              <div class="FIformInputA">
                <div class="FIfield1A">
                  <div class="FIfield1textA">Car type</div>
                  <div class="FIfield1iconA">
                    <img src="../src/assets/formArrowB.png" alt="arrow" />
                  </div>
                </div>
                <div class="FIfield1A">
                  <div class="FIfield1textA">Place of rental</div>
                  <div class="FIfield1iconA">
                    <img src="../src/assets/formArrowB.png" alt="arrow" />
                  </div>
                </div>
                <div class="FIfield1A">
                  <div class="FIfield1textA">Place of return</div>
                  <div class="FIfield1iconA">
                    <img src="../src/assets/formArrowB.png" alt="arrow" />
                  </div>
                </div>
                <div class="FIfield1A">
                  <div class="FIfield1textA">Rental date</div>
                  <div class="FIfield1iconA">
                    <img src="../src/assets/formCalendarB.png" alt="cal" />
                  </div>
                </div>
                <div class="FIfield1A">
                  <div class="FIfield1textA">Return date</div>
                  <div class="FIfield1iconA">
                    <img src="../src/assets/formCalendarB.png" alt="cal" />
                  </div>
                </div>
              </div>
              <div class="FIformButtonA">Book now</div>
            </div>
          </div>
        </div>
      </div>

      <div class="infoBlock">
        <div class="IBIconText">
          <div class="IBIconTextIconText">
            <div class="IBITITIcon">
              <img src="../src/assets/gps.png" alt="" />
            </div>
            <div class="IBITITText">
              Availability
            </div>
          </div>
          <div class="IBIconTextText">
            Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis
          </div>
        </div>
        <div class="IBIconText">
          <div class="IBIconTextIconText">
            <div class="IBITITIcon">
              <img src="../src/assets/car2logo.png" alt="" />
            </div>
            <div class="IBITITText">
              Comfort
            </div>
          </div>
          <div class="IBIconTextText">
            Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis
          </div>
        </div>
        <div class="IBIconText">
          <div class="IBIconTextIconText">
            <div class="IBITITIcon">
              <img src="../src/assets/wallet.png" alt="" />
            </div>
            <div class="IBITITText">
              Savings
            </div>
          </div>
          <div class="IBIconTextText">
            Pretium convallis id diam sed commodo vestibulum lobortis volutpat
          </div>
        </div>
      </div>

      <div class="infoBlock2">
        <div class="IB2image">
          <img src="../src/assets/InfoBlock2.png" alt="" />
        </div>
        <div class="IB2text">
          <div class="IB2textText ">
            <div class="IB2TTtextBg">
              <div class="IB2TTtextBgBg">1</div>
              <div class="IB2TTtextBgText">Erat at semper </div>
            </div>
            Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem
            fermentum
          </div>
          <div class="IB2textText">
            <div class="IB2TTtextBg">
              <div class="IB2TTtextBgBg">2</div>
              <div class="IB2TTtextBgText">Urna nec vivamus risus duis arcu </div>
            </div>
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc
            interdum gravida ullamcorper
          </div>
          <div class="IB2textText">
            <div class="IB2TTtextBg">
              <div class="IB2TTtextBgBg">3</div>
              <div class="IB2TTtextBgText">Lobortis euismod imperdiet tempus </div>
            </div>
            Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus
            viverra nisi
          </div>
          <div class="IB2textText">
            <div class="IB2TTtextBg">
              <div class="IB2TTtextBgBg">4</div>
              <div class="IB2TTtextBgText">Cras nulla aliquet nam eleifend amet et </div>
            </div>
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc
            interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero
          </div>
        </div>
      </div>

      <div class="chooseTheCar">
        <div class="CTCTextIcon">
          <div class="CTCTIText">
            Choose the car that <br /> suits you
          </div>
          <div class="CTCTITextIcon">
            <div class="CTCTITextIconText">View All</div>
            <div class="CTCTITextIconIcon"><img src="../src/assets/arrow_forward_40dp_000_FILL0_wght600_GRAD0_opsz40.png"
              alt="arrow-right" /></div>
          </div>
        </div>
        <div class="CTCCards" id="CTCcars" data-limit="6">

          {Cars.slice(0, 6).map((car, index) => (
            <div class="CTCCardsCard" key={index}>
              <div class="CTCImageTextIcon">
                <div class="CTCITIImage">
                  <img src={car.image} alt=""/>
                </div>
                <div class="CTCITITextIcons">
                  <div class="CTCITITIText">
                    <div class="CTCITITITextOne">
                      <div class="CTCITITITextOneOne">{car.name}</div>
                      <div class="CTCITITITextOneTwo">{car.type}</div>
                    </div>
                    <div class="CTCITITITextTwo">
                      <div class="CTCITITITextTwoOne">${car.rent}</div>
                      <div class="CTCITITITextTwoTwo">per day</div>
                    </div>
                  </div>
                  <div class="CTCITITITextIcon">
                    <div class="CTCITITITextIconOne">
                      <div class="CTCITITITextIconOneOne">
                        <img src="../src/assets/auto_transmission.png" alt="gear"/>
                      </div>
                      <div class="CTCITITITextIconOneTwo">{car.transmission}</div>
                    </div>
                    <div class="CTCITITITextIconOne">
                      <div class="CTCITITITextIconOneOne">
                        <img src="../src/assets/fuel_station.png" alt="gear"/>
                      </div>
                      <div class="CTCITITITextIconOneTwo">{car.fuel}</div>
                    </div>
                    <div class="CTCITITITextIconOne">
                      <div class="CTCITITITextIconOneOne">
                        <img src="../src/assets/air_condition.png" alt="gear"/>
                      </div>
                      <div class="CTCITITITextIconOneTwo">{car.air}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="CTCCardButton">View Details</div>
            </div>
          ))}
          {/* <div class="CTCCardsCard">
            <div class="CTCImageTextIcon">
              <div class="CTCITIImage">
                <img src="./assets/mercedes_sedan.png" alt=""/>
              </div>
              <div class="CTCITITextIcons">
                <div class="CTCITITIText">
                  <div class="CTCITITITextOne">
                    <div class="CTCITITITextOneOne">Mercedes</div>
                    <div class="CTCITITITextOneTwo">Sedan</div>
                  </div>
                  <div class="CTCITITITextTwo">
                    <div class="CTCITITITextTwoOne">$25</div>
                    <div class="CTCITITITextTwoTwo">per day</div>
                  </div>
                </div>
                <div class="CTCITITITextIcon">
                  <div class="CTCITITITextIconOne">
                    <div class="CTCITITITextIconOneOne">
                      <img src="./assets/auto_transmission.png" alt="gear"/>
                    </div>
                    <div class="CTCITITITextIconOneTwo">Automat</div>
                  </div>
                  <div class="CTCITITITextIconOne">
                    <div class="CTCITITITextIconOneOne">
                      <img src="./assets/fuel_station.png" alt="gear"/>
                    </div>
                    <div class="CTCITITITextIconOneTwo">PB 95</div>
                  </div>
                  <div class="CTCITITITextIconOne">
                    <div class="CTCITITITextIconOneOne">
                      <img src="./assets/air_condition.png" alt="gear"/>
                    </div>
                    <div class="CTCITITITextIconOneTwo">Air Conditioner</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="CTCCardButton">View Details</div>
          </div> */}
        </div>
      </div>

      <div class="banner">
        <div class="subBanner">
          <div class="bannerImage">
            <img src="../src/assets/homebannercar.png" alt="" />
          </div>
          <div class="bannerGroupimage">
            <img src="../src/assets/homeGroupImage2.png" alt="" />
          </div>
          <div class="bannerText">
            <div class="bannerTextOne">Facts in numbers</div>
            <div class="bannerTextTwo">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum
              ullamcorper <br /> in. Diam tincidunt tincidunt erat at semper fermentum</div>
          </div>
          <div class="bannerCounter">
            <div class="bannerCounterCard">
              <div class="bannerCounterCardIcon">
                <img src="../src/assets/bannerCardCar.png" alt="banner_png" />
              </div>
              <div class="bannerCounterCardText">
                <div class="bannerCounterCardTextOne">540+</div>
                <div class="bannerCounterCardTextTwo">Cars</div>
              </div>
            </div>

            <div class="bannerCounterCard">
              <div class="bannerCounterCardIcon">
                <img src="../src/assets/bannerCardCustomer.png" alt="banner_png" />
              </div>
              <div class="bannerCounterCardText">
                <div class="bannerCounterCardTextOne">20k+</div>
                <div class="bannerCounterCardTextTwo">customers</div>
              </div>
            </div>

            <div class="bannerCounterCard">
              <div class="bannerCounterCardIcon">
                <img src="../src/assets/bannerCardYears.png" alt="banner_png" />
              </div>
              <div class="bannerCounterCardText">
                <div class="bannerCounterCardTextOne">25+</div>
                <div class="bannerCounterCardTextTwo">years</div>
              </div>
            </div>

            <div class="bannerCounterCard">
              <div class="bannerCounterCardIcon">
                <img src="../src/assets/bannerCardMiles.png" alt="banner_png" />
              </div>
              <div class="bannerCounterCardText">
                <div class="bannerCounterCardTextOne">20m+</div>
                <div class="bannerCounterCardTextTwo">mile</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="download">
        <div class="downloadApp">
          <div class="downloadAppText">
            <div class="downloadAppTextBold">Download <br /> mobile app</div>
            <div class="downloadAppTextNormal">
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa.
              Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum
              risus bibendum urna
            </div>
          </div>
          <div class="downloadAppButton">
            <img src="../src/assets/App-Store.png" alt="appstore" />
            <img src="../src/assets/Google play.png" alt="googlestore" />
          </div>
        </div>
        <div class="downloadIcon">
          <img src="../src/assets/Download_phone.png" alt="" />
        </div>
      </div>

      <div class="banner2">
        <div class="subBanner2">
          <div class="banner2GroupImage">
            <img src="../src/assets/AU banner 2 group.png" alt="" />
          </div>
          <div class="banner2Text">
            <div class="banner2TextBold">
              Enjoy every mile with adorable companionship.
            </div>
            <div class="banner2TextButton">
              <div class="B2TBText">Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum
                ullamcorper in. Diam tincidunt tincidunt erat</div>
              <div class="B2TBButton">
                <div class="B2TBButtonText">City</div>
                <div class="B2TBButtonButton">Search</div>
              </div>
            </div>
          </div>
          <div class="banner2Image">
            <img src="../src/assets/bannerCar.png" alt="" />
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Home
