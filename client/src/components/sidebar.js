import React from 'react'
import setting from '../icons/settings.svg'
import doucment from '../icons/document.svg';
import support from '../icons/support.svg';
import review from '../icons/review.svg'
import { Link } from 'react-router-dom';
import './component.css';
import burgermenu from '../icons/burger.svg';
import { useState } from 'react';
import "../pages/home.css";


function Sidebar() {

    const [sidetoggle, setSidetoggle] = useState(false)

    const togglesidebar = () => {
        setSidetoggle(!sidetoggle)
    }

    return (
        <>
            <div>
                <img src={burgermenu} className='burger_menu'
                    onClick={() => { togglesidebar() }}

                />

            </div>
            <ul style={{ listStyle: "none", width: "25%", background: "#f6f6f7" }} className={`${!sidetoggle ? `border border-2 ms-0 border-top-0 p-2 sidebar_toggle` : `border border-2 ms-0 border-top-0 p-2 sidebar_toggle collpase manage_sidebar`}`}>
                <li className='mt-1 fw-semibold sidebar_padding'>
                    <Link to={"/settings"} style={{ textDecoration: "none", color: "#3a3c3d" }}>
                        <img src={setting} className='icon_width' />
                        <span className='ms-1'>
                            Settings
                        </span>
                    </Link>
                </li>
                <hr />
                <li className='fw-semibold sidebar_padding'>
                    <Link to={"/Plan"} style={{ textDecoration: "none", color: "#3a3c3d" }}>
                        <img src={setting} className='icon_width' />
                        <span className='ms-1'>
                            Plan
                        </span>
                    </Link>
                </li>
                <hr />
                <li className=' fw-semibold sidebar_padding'>
                    <Link to={"/Appereance"} style={{ textDecoration: "none", color: "#3a3c3d" }}>
                        <img src={setting} className='icon_width' />
                        <span className='ms-1'>

                            Appereance
                        </span>
                    </Link>
                </li>
                <hr />
                <li className=' fw-semibold  sidebar_padding'>
                    <Link to={"/Reviews"} style={{ textDecoration: "none", color: "#3a3c3d" }}>
                        <img src={review} className='icon_width' />
                        <span className='ms-1'>
                            Reviews
                        </span>
                    </Link>
                </li>
                <hr />
                <li className='fw-semibold sidebar_padding'>
                    <Link to={"/CustomCss"} style={{ textDecoration: "none", color: "#3a3c3d" }}>
                        <img src={setting} className='icon_width' />
                        <span className='ms-1'>
                            Custom Css
                        </span>
                    </Link>
                </li>
                <hr />
                <li className=' fw-semibold sidebar_padding'>
                    <Link to={"/Documents"} style={{ textDecoration: "none", color: "#3a3c3d" }}>
                        <img src={doucment} className='icon_width' />
                        <span className='ms-1'>
                            Document
                        </span>
                    </Link>
                </li>
                <hr />
                <li className='  fw-semibold  sidebar_padding'>
                    <Link to={"/Support"} style={{ textDecoration: "none", color: "#3a3c3d" }}>
                        <img src={support} className='icon_width' />
                        <span className='ms-1'>
                            Support
                        </span>
                    </Link>
                </li>
                <hr />

                <li className='  fw-semibold  sidebar_padding'>
                    <Link to={"/Analytics"} style={{ textDecoration: "none", color: "#3a3c3d" }}>
                        <img src={support} className='icon_width' />
                        <span className='ms-1'>
                            Analytics
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Sidebar;