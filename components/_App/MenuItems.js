
import React, { useState } from "react";
// import Link from '../../utils/ActiveLink';
import Link from 'next/link';



const MenuItems = (props) => {

    const toggleNavbar = props.t


return (

    <ul className="navbar-nav">

    <li className="nav-item">
            <Link href="/"  onClick={toggleNavbar} className="nav-link">HOME
            </Link>
        </li>
        <li className="nav-item" style={{top: "-4px"}}>
            <Link href="/#" onClick={e => e.preventDefault()} className="nav-link">
                    MORE <i className='bx bx-chevron-down'></i>

            </Link>

            <ul className="dropdown-menu">
                <li className="nav-item">
                    <Link href="/about-us"  onClick={toggleNavbar} className="nav-link">About
                    </Link>
                </li> 
                <li className="nav-item">
                    <Link href="/ettiquette" onClick={toggleNavbar} className="nav-link">Ettiquette
                    </Link>
                </li> 
                <li className="nav-item">
                    <Link href="/abbreviations" onClick={toggleNavbar} className="nav-link">Abbreviations
                    </Link>
                </li> 


            </ul>
        </li>

        <li className="nav-item">
            <Link href="/availability" onClick={toggleNavbar} className="nav-link">AVAILABILITY
            </Link>
        </li>
        
        <li className="nav-item">
            <Link href="/escorts"  onClick={toggleNavbar} className="nav-link">ESCORTS
            </Link>
        </li>
        
        <li className="nav-item">
            <Link href="/faq"  onClick={toggleNavbar} className="nav-link">FAQ
            </Link>
        </li>
        
        <li className="nav-item">
            <Link href="/escort-jobs"  onClick={toggleNavbar} className="nav-link">EMPLOYMENT
            </Link>
        </li>

        
        <li className="nav-item">
            <Link href="/contact-us"  onClick={toggleNavbar} className="nav-link">CONTACT
            </Link>
        </li>


    </ul>
)

}

export default MenuItems;