import React from 'react'
import "../css/Details.css"
import Cars from "../../cars.json"
import Header from '../components/Header'
import Footer from '../components/Footer'

function Details() {
    return (
        <div>
            <Header/>
            <div className="frame">
                <div className="frameTI">
                    <div className="frameTITI">
                        <div className="frameTITIText">
                            <div className="frameTITITextOne">BMW</div>
                            <div className="frameTITITextTwo">
                                <div className="frameTITITextTwoOne">$25</div>
                                <div className="frameTITITextTwoTwo">/ day</div>
                            </div>
                        </div>
                        <div className="frameTITIImage">
                            <img src="../src/assets/detail-car-1.png" alt="car" />
                        </div>
                    </div>
                    <div className="frameTII">
                        <img src="../src/assets/details-car-2.png" alt="car" />
                        <img src="../src/assets/details-car-3.png" alt="car" />
                        <img src="../src/assets/details-car-4.png" alt="car" />
                    </div>
                </div>
                <div className="frameTCB">
                    <div className="frameTCBTextCard">
                        <div className="frameTCBTCText frameTitle">Technical Specification</div>
                        <div className="frameTCBTCCard">
                            <div className="frameCard">
                                <div className="frameCardIcon">
                                    <img src="../src/assets/frame-gear.png" alt="gear" />
                                </div>
                                <div className="frameCardText">
                                    <div className="frameCardTextOne">Gear Box</div>
                                    <div className="frameCardTextTwo">Automat</div>
                                </div>
                            </div>

                            <div className="frameCard">
                                <div className="frameCardIcon">
                                    <img src="../src/assets/frame-fuel.png" alt="fuel" />
                                </div>
                                <div className="frameCardText">
                                    <div className="frameCardTextOne">Fuel</div>
                                    <div className="frameCardTextTwo">Petrol</div>
                                </div>
                            </div>

                            <div className="frameCard">
                                <div className="frameCardIcon">
                                    <img src="../src/assets/frame-door.png" alt="door" />
                                </div>
                                <div className="frameCardText">
                                    <div className="frameCardTextOne">Doors</div>
                                    <div className="frameCardTextTwo">2</div>
                                </div>
                            </div>

                            <div className="frameCard">
                                <div className="frameCardIcon">
                                    <img src="../src/assets/air_condition.png" alt="air" />
                                </div>
                                <div className="frameCardText">
                                    <div className="frameCardTextOne">Air Conditioner</div>
                                    <div className="frameCardTextTwo">Yes</div>
                                </div>
                            </div>

                            <div className="frameCard">
                                <div className="frameCardIcon">
                                    <img src="../src/assets/frame-seat.png" alt="" />
                                </div>
                                <div className="frameCardText">
                                    <div className="frameCardTextOne">seats</div>
                                    <div className="frameCardTextTwo">5</div>
                                </div>
                            </div>

                            <div className="frameCard">
                                <div className="frameCardIcon">
                                    <img src="../src/assets/frame-distance.png" alt="distance" />
                                </div>
                                <div className="frameCardText">
                                    <div className="frameCardTextOne">distance</div>
                                    <div className="frameCardTextTwo">500</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="frameTCBButton">Rent a car</div>
                    <div className="frameTCBTextIcons">
                        <div className="frameTCBTIText frameTitle">Car Equipment</div>
                        <div className="frameTCBTIIconText">
                            <div className="frameTCBcolumn">
                                <div className="frameTCBcolumnItem">
                                    <div className="frameTCBcolumnItem1">
                                        <img src="../src/assets/tick.png" alt="" />
                                    </div>
                                    <div className="frameTCBcolumnItem2">
                                        ABS
                                    </div>
                                </div>
                                <div className="frameTCBcolumnItem">
                                    <div className="frameTCBcolumnItem1">
                                        <img src="../src/assets/tick.png" alt="" />
                                    </div>
                                    <div className="frameTCBcolumnItem2">
                                        Air Bags
                                    </div>
                                </div>
                                <div className="frameTCBcolumnItem">
                                    <div className="frameTCBcolumnItem1">
                                        <img src="../src/assets/tick.png" alt="" />
                                    </div>
                                    <div className="frameTCBcolumnItem2">
                                        Cruise Control
                                    </div>
                                </div>
                            </div>
                            <div className="frameTCBcolumn">
                                <div className="frameTCBcolumnItem">
                                    <div className="frameTCBcolumnItem1">
                                        <img src="../src/assets/tick.png" alt="" />
                                    </div>
                                    <div className="frameTCBcolumnItem2">
                                        ABS
                                    </div>
                                </div>
                                <div className="frameTCBcolumnItem">
                                    <div className="frameTCBcolumnItem1">
                                        <img src="../src/assets/tick.png" alt="" />
                                    </div>
                                    <div className="frameTCBcolumnItem2">
                                        Air Bags
                                    </div>
                                </div>
                                <div className="frameTCBcolumnItem">
                                    <div className="frameTCBcolumnItem1">
                                        <img src="../src/assets/tick.png" alt="" />
                                    </div>
                                    <div className="frameTCBcolumnItem2">
                                        Air Conditioner
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="chooseTheCar">
                <div className="CTCTextIcon">
                    <div className="CTCTIText">
                        Other cars
                    </div>
                    <div className="CTCTITextIcon">
                        <div className="CTCTITextIconText">View All</div>
                        <div className="CTCTITextIconIcon"><img src="../src/assets/arrow_forward_40dp_000_FILL0_wght600_GRAD0_opsz40.png"
                            alt="arrow-right" /></div>
                    </div>
                </div>
                <div className="CTCCards" id="CTCcars">
                    {Cars.slice(0, 6).map((car, index) => (
                        <div className="CTCCardsCard" key={index}>
                            <div className="CTCImageTextIcon">
                                <div className="CTCITIImage">
                                    <img src={car.image} alt="" />
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
                                                <img src="../src/assets/auto_transmission.png" alt="gear" />
                                            </div>
                                            <div className="CTCITITITextIconOneTwo">{car.transmission}</div>
                                        </div>
                                        <div className="CTCITITITextIconOne">
                                            <div className="CTCITITITextIconOneOne">
                                                <img src="../src/assets/fuel_station.png" alt="gear" />
                                            </div>
                                            <div className="CTCITITITextIconOneTwo">{car.fuel}</div>
                                        </div>
                                        <div className="CTCITITITextIconOne">
                                            <div className="CTCITITITextIconOneOne">
                                                <img src="../src/assets/air_condition.png" alt="gear" />
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
                                        <img src="./assets/mercedes_sedan.png" alt="">
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
                                                    <img src="./assets/auto_transmission.png" alt="gear">
                                                </div>
                                                <div className="CTCITITITextIconOneTwo">Automat</div>
                                            </div>
                                            <div className="CTCITITITextIconOne">
                                                <div className="CTCITITITextIconOneOne">
                                                    <img src="./assets/fuel_station.png" alt="gear">
                                                </div>
                                                <div className="CTCITITITextIconOneTwo">PB 95</div>
                                            </div>
                                            <div className="CTCITITITextIconOne">
                                                <div className="CTCITITITextIconOneOne">
                                                    <img src="./assets/air_condition.png" alt="gear">
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
            <Footer/>
        </div>
    )
}

export default Details
