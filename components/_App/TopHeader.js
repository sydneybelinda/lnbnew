import React from 'react';
import Link from 'next/link';
import Config from "../../config"

const TopHeader = () => {

   
    const  phoneUrl= `+61${Config.phone.replace(/\s/g,"").substring(1)}`;


    return (
        <header className="top-header-area" style={{fontSize: 12}}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                    <div className="call-us">
                        CALL US TO BOOK AN ESCORT
                    </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <ul className="top-header-contact-info">
                            <li><i className='bx bx-phone-call'></i> <Link href={`tel:${phoneUrl}`}>{Config.phone}</Link></li>
                            <li className="top-email"><i className='bx bx-envelope'></i> <Link href={`mailto:${Config.email}`}>{Config.email}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopHeader;