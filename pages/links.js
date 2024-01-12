import React from "react";
import Footer from "../components/_App/Footer";
import Head from "../components/_App/Head";
import Navbar from "../components/_App/Navbar";
import TopHeader from "../components/_App/TopHeader";
import { getAllServices, getLocals, getAllLinks } from "../utils/Queries";

const Meta = {
  title: "Escort and Adult site Links | Late Night Babes Sydney",
  description:
    "Our page of escort and adult related sitelinks - LNB Sydney Escorts",
  page: "/links",
};

const Links = (props) => {

const siteLinks = props.links;

var i = 0


  return (
    <React.Fragment>
      <Head Meta={Meta} />
      <div className="content">
        <TopHeader />
        <Navbar />

        <div className="title-section ptb-100 bg-black text-center">
          <h1>
            <span className="fun">Adult Links</span>Links
          </h1>
          <div className="shape16">
            <img src="/images/shape/shape16.png" alt="image" />
          </div>
        </div>
        <div className="faq-area ptb-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="faq-item links">
                { siteLinks ? siteLinks.map((link) => (
                  <div dangerouslySetInnerHTML={{ __html:  link.link}} key={i} />
                   
            ), (i++)) : ''}
                </div>
              </div>

            </div>
          </div>
        </div>

        <Footer {...props} />
      </div>
    </React.Fragment>
  );
};

export async function getServerSideProps(ctx) {
  const services = await getAllServices();
  const locs = await getLocals();
  const links = await getAllLinks();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }

  return {
    props: { 
        services,
        locs,
        links
    }, 
  }
}

// Ettiquette.getServerSideProps = async (ctx) => {

//   const services = await getAllServices();
//   const locs = await getLocals();

//     return {services: services, locs:locs };
//   };

export default Links;
