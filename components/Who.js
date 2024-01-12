import React from 'react';
import Config from "../config";
import Link from 'next/link';

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

const Who = () => {


    const  phoneUrl= `+61${Config.phone.replace(/\s/g,"").substring(1)}`;

    return (
        <div className="feedback-area ptb-100">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-md-12">
                        <div className="feedback-content who">
                           
                            <h1>Late Night Babes Sydney{" "} 
                            <span className="sub-title"> High Class Sydney Escorts</span>
                            </h1>



                                <div className="single-feedback-item">
                                    <p>Fun and friendly high class Sydney escorts<br/>
                            <span className="from">From $450 per hour all inclusive</span></p>
                        

           
                                </div>

                                <div className="btn-box">
                                    <div className="align-items-center">
                                        <Link href={`tel:${phoneUrl}`} className="default-btn">Call Now
                                        </Link>
                                        

                                    </div>
                                </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src="/images/shape/shape16.png" alt="image" />
            </div>
        </div>
    )
}

export default Who;