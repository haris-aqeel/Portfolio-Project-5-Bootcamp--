import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhoAmI = () => {
  return (
    <div className="container whoami " id='skills'>
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 ">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          >
            <img
              src="https://saadpasta.github.io/static/media/developerActivity.59389695.svg"
              alt="Illustration"
              width="100%"
            />
          </div>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 ">
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="70"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
          > <div>
              <h1 className='whoami_header'>What I do ? </h1>
              <p className='whoami_text'>CRAZY FRONT-END WEB DEVELOPER WHO WANT TO EXPLORE EVERY TECH STACK</p>
            </div>
            <div>
                <ul className='whoami_ul'>
                    <li><i class="fab fa-html5"></i>
                    <p>html-5</p>
                    </li>
                    <li><i class="fab fa-css3-alt"></i>
                    <p>css3</p>
                    </li>
                    <li><i class="fab fa-sass"></i>
                    <p>sass</p> 
                    </li>
                    <li><i class="fab fa-js-square"></i>
                    <p>JavaScript</p>
                    </li>
                    <li><i class="fab fa-bootstrap"></i>
                    <p>Bootstrap</p>
                    </li>
                    <li><i class="fab fa-react"></i>
                    <p>reactjs</p>
                    </li>
                    <li><i class="fab fa-npm"></i>
                    <p>npm</p>
                    </li>
                    <li><i class="fas fa-fire"></i>
                    <p>firebase</p>
                    </li>
                    <li><i class="fab fa-python"></i>
                    <p>python</p>
                    </li>
                    <li><i class="fab fa-docker"></i>
                    <p>Docker</p>
                    </li>
                </ul>
            </div>         
          </div>
        </div>
      </div>
    </div>
  );
};

AOS.init();
export default WhoAmI;
