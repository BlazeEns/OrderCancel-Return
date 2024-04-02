import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../icons/logo2 1.png';
import '../pages/home.css';
import burgermenu from '../icons/burger.svg';



function Header() {

    const [sidetoggle, setSidetoggle] = useState(false)

    const togglesidebar = () => {
        alert("togle is working")
        setSidetoggle(!sidetoggle)
    }

    return (
        <div>

            <div className='p-2 d-flex justify-content-between border-bottom border-2 Header' style={{ background: "#f6f6f7" }}>

                <Link to={"/"}>
                    <img src={logo} className='image' />
                </Link>

                <div className='d-flex justify-content-around align-items-center'>

                    <button className='btn btn-primary ' id='plan-btn'>
                        <Link to={'/Plan'} className='text-light text-decoration-none'>change plan</Link>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Header;