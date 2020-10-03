import React from "react";
import Portfolio from "../images/portfolio_website.svg";
import Static from "../images/static_website.svg";
import Dynamic from "../images/dynamic_website.svg";

const Services = () => {
  return (
    
    <div className="container services" id='service'>
      <h1 >My Services</h1>
      <div className="row"
       data-aos="fade-down"
       data-aos-offset="200"
       data-aos-delay="20"
       data-aos-duration="1000"
       data-aos-easing="ease-in"
       data-aos-mirror="true"
       data-aos-once="true"
       data-aos-anchor-placement="top">
        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="services_card">
            <div className="card__pic">
              <img src={Portfolio} alt="React Logo" width="140px" />
            </div>
            <div className="card__body">
                <h2>Portfolio Websites</h2>
            </div>
          </div>
        </div>
        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="services_card">
            <div className="card__pic">
              <img src={Static} alt="React Logo" width="140px"/>
            </div>
            <div className="card__body pt-3">
                <h2>Personal Static Websites</h2>
            </div>
          </div>
        </div>
        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="services_card">
            <div className="card__pic">
              <img src={Dynamic} alt="React Logo" width="140px" />
            </div>
            <div className="card__body">
                <h2>Buisness Dynamic Websites</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
