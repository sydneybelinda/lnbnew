import React from 'react';

const PageBanner = ({pageTitle, shortDesc, price, location}) => {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h1><span className="loc">{location ? `${location.toLowerCase()} escort` : ''}</span>{pageTitle}  </h1>
                    <div className="e-price"><span className="shortdesc">{shortDesc ? shortDesc : ''}</span> <span className="dash">-</span> ${price}</div>
                </div>
            </div>

            {/* <div className="shape2"><img src="/images/shape/shape2.png" alt="image" /></div>
            <div className="shape3"><img src="/images/shape/shape3.png" alt="image" /></div>
            <div className="shape5"><img src="/images/shape/shape5.png" alt="image" /></div>
            <div className="shape6"><img src="/images/shape/shape6.png" alt="image" /></div>
            <div className="shape7"><img src="/images/shape/shape7.png" alt="image" /></div>
            <div className="shape8"><img src="/images/shape/shape8.png" alt="image" /></div>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div> */}
        </div>
    );
}

export default PageBanner;