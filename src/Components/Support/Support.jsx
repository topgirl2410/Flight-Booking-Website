import { useEffect } from 'react'

// Import images
import viajes from '../../assets/img/world.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Support = () => {
    // UseEffect to set animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <div className="support container section">
            <div className="sectionContainer">

                <div className="tittlesDiv">
                    <small>travel support</small>
                    <h2>Plan your travel with confidence</h2>
                    <p>Find help with booking and travel plans, see what to expect along the jorney!</p>
                </div>

                <div className="infoDiv grid">

                    <div className="textDiv grid">

                        <div data-aos='fade-down' data-aos-duration='2500' className="singleInfo">
                            <span className="number">01</span>
                            <h4>Travel requeriment for Dubai</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the jorney to your destinations!
                            </p>
                        </div>

                        <div data-aos='fade-down' data-aos-duration='3500' className="singleInfo">
                            <span className="number colorOne">02</span>
                            <h4>Chauffeur services at your arrival</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the jorney to your destinations!
                            </p>
                        </div>

                        <div data-aos='fade-down' data-aos-duration='4500' className="singleInfo">
                            <span className="number colorTwo">03</span>
                            <h4>Multi-risk travel insurance</h4>
                            <p>
                                Find help with booking and travel plans, see what to expect along the jorney to your destinations!
                            </p>
                        </div>

                    </div>

                    <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
                        <img src={viajes} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Support