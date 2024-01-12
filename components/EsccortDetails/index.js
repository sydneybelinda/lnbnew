import React from "react";
import nl2br from "react-nl2br";
import PageBanner from "../../components/Common/PageBanner";
import Img from "../Img";
import Gallery from "./Galery";
import PortfolioSidebar from "./PortfolioSidebar";

const EscortDetails = (props) => {
  const e = props.escort.escort;

  const f = props.escort.files;

  const services = props.services;

  var uServices = [];
  services.map((s) => {
    if (e[s.serviceid] == "Yes") {
      uServices.push(s);
    }
  });

  var name = e.firstName;
  e.lastname ? (name += e.lastname) : "";
  const desc = (e.description.replace(/\r/g,"<br/>"))


  return (
    <React.Fragment>
       <PageBanner
        pageTitle={name}
        shortDesc={e.shortDesc}
        price={e.advertisedPrice}
        location={e.location}
      /> 

      <div className="portfolio-details-area ">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Gallery f={f} profpic={e.profpic} user={e.username} />

            <div className="container">
              <div className="portfolio-details-desc">
              <div dangerouslySetInnerHTML={{ __html:  desc}} />
                {/* <p>{nl2br(e.description)}</p> */}

                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="image">
                      <Img username={e.username} file={e.profpic} />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="content">
                      <h3>Services</h3>
                      <ul>
                        {uServices.map((s) => (
                          <li key={s.id}>{s.servicename}</li>
                        ))}
                      </ul>
                      {e.notes ? <p className="pt-30">{nl2br(e.notes)}</p> : ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <PortfolioSidebar e={e} />
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default EscortDetails;
