import { useEffect } from 'react'

// Import Images Target
import london from '../../assets/img/londres-guia.jpg'
import newyork from '../../assets/img/newyork.jpg'
import dubai from '../../assets/img/dubai.png'
import paris from '../../assets/img/paris.jpg'

import traveler1 from '../../assets/user1.png'
import traveler2 from '../../assets/user2.png'
import traveler3 from '../../assets/user3.png'
import traveler4 from '../../assets/user4.png'

// Import AOS ===============================================================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const travelers = [
    {
        id: 1,
        destinationImage: london,
        travelerImage: traveler1,
        travelerName: 'MariaPinto',
        socialLink: '@fullstack82'
    },
    {
        id: 2,
        destinationImage: newyork,
        travelerImage: traveler2,
        travelerName: 'SofiPinto',
        socialLink: '@sofipinto'
    },
    {
        id: 3,
        destinationImage: dubai,
        travelerImage: traveler3,
        travelerName: 'MarcoSanchez',
        socialLink: '@m.sanchez'
    },
    {
        id: 4,
        destinationImage: paris,
        travelerImage: traveler4,
        travelerName: 'GuppiAzul',
        socialLink: '@guppiazul'
    }

]

const Travelers = () => {

    // UseEffect to set animation duration
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2500'>
                    Top travelers of this month!
                </h2>

                <div className="travelersContainer grid">

                    {
                        travelers.map(({ id, destinationImage, travelerImage, travelerName, socialLink }) => {
                            return (
                                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                                    <img src={destinationImage} className='destinationImage' />

                                    <div className="travelersDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} className='travelerImage' />
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Travelers