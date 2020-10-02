import React from "react";
import Portfolio from "../images/portfolio_website";
import Static from "../images/static_website";
import Dynamic from "../images/dynamic_website";

const Services = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card__pic">
              <img src={Portfolio} alt="React Logo" width="100%" />
            </div>
            <div className="card__body">
                <h2>Portfolio Websites</h2>
            </div>
          </div>
        </div>
        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card__pic">
              <img src={Static} alt="React Logo" />
            </div>
            <div className="card__body">
                <h2>Personal Static Websites</h2>
            </div>
          </div>
        </div>
        <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="card">
            <div className="card__pic">
              <img src={Dynamic} alt="React Logo" />
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
