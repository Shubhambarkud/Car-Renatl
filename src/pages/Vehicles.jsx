import React from 'react'
import "../css/Vehicles.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cars from "../../cars.json"

function Vehicles() {
  return (
    <div>
      <Header />
      <div className="textTabCards">
        <div className="text">Select a vehicle group</div>
        <div className="tab">
          <div className="tabBox active" data-type="All">All vehicles</div>
          <div className="tabBox" data-type="Sedan">
            <img src="../src/assets/veh-sedan.png" alt="Sedan" />
            Sedan
          </div>
          <div className="tabBox" data-type="Cabriolet">
            <img src="../src/assets/veh-cabriolet.png" alt="Cabriolet" />
            Cabriolet
          </div>
          <div className="tabBox" data-type="Pick up">
            <img src="../src/assets/veh-pickup.png" alt="Pick up" />
            Pick up
          </div>
          <div className="tabBox" data-type="Suv">
            <img src="../src/assets/veh-suv.png" alt="Suv" />
            Suv
          </div>
          <div className="tabBox" data-type="Minivan">
            <img src="../src/assets/veh-minivan.png" alt="Minivan" />
            Minivan
          </div>
        </div>
        <div className="cards" id="CTCcars" data-limit="9">
          {Cars.slice(0, 9).map((car, index) => (
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

export default Vehicles
