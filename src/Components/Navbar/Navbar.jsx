import { useState } from 'react'
// Imported Icons =======================================================>

import { SiConsul } from 'react-icons/si'
import { BsFillPhoneVibrateFill } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'

// Imported Images

import logo from '../../assets/img/logo.png'

const Navbar = () => {
    // Let us remove the NavBar in the small width screens ============================>
    const [active, setActive] = useState('navBarMenu');
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }

    const removeNavBar = () => {
        setActive('navBarMenu')
    }

    // Let us add a background color to the second NavBar ==============================>
    const [noBg, addBg] = useState('navBarTwo');
    const addBgColor = () => {
        if (window.scrollY >= 10) {
            addBg('navBarTwo navbar_With_Bg')
        } else {
            addBg('navBarTwo')
        }
    }

    window.addEventListener('scroll', addBgColor)



    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className='icon' />
                </div>
                <div className="flex iconNav">
                    <li className="flex"><BsFillPhoneVibrateFill className='icon' />  Support</li>
                    <li className="flex"><AiOutlineGlobal className='icon' />Languajes</li>
                </div>
                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>


            <div className={noBg}>

                <div className="logoDiv">
                    <img src={logo} className='Logo' />
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">Home</li>
                        <li onClick={removeNavBar} className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">Offers</li>
                        <li onClick={removeNavBar} className="listItem">Seats</li>
                        <li onClick={removeNavBar} className="listItem">Destinations</li>
                    </ul>

                    <button onClick={removeNavBar} className='btn flex btnOne'>
                        Contact
                    </button>
                </div>

                <button className='btn flex btnTwo'>
                    Contact
                </button>
                <div onClick={showNavBar} className="toggleIcon">
                    <CgMenuGridO className='icon' />
                </div>
            </div>
        </div >
    )
}

export default Navbar