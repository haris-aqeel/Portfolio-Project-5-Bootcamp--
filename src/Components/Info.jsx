import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// //import Undraw from 'react-undraw';
// import { ReactComponent as Ill1 } from '../images/illustration__1.svg'


// Helping Components
import SocialIcons from '../HelpfulComponents/SocialIcons'
import Button from '../HelpfulComponents/Button'
const Info = () => {
  return (
    <div className="container info" data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top"
    >

      <div className="row" > 
        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 ">
          <div>
            <h1 className="waving__Hand">  
              Hi! I am Haris
              <span class="wave" role="img">👋</span>
            </h1>
            <p className="greeting-text">
              Jr. Software developer
              <img
                alt="👾"
                draggable="false"
                src="https://twemoji.maxcdn.com/2/72x72/1f47e.png"
                style={{
                  height: "1em",
                  width: "1em",
                  margin: "0px 0.05em 0px 0.1em",
                  verticalAlign: "-0.1em",
                }}
              />
              | Open Source Contributor
              <img
                alt="🔥"
                draggable="false"
                src="https://twemoji.maxcdn.com/2/72x72/1f525.png"
                style={{
                  height: "1em",
                  width: "1em",
                  margin: "0px 0.05em 0px 0.1em",
                  verticalAlign: "-0.1em",
                }}
              />
              | Speaker
              <img
                alt="🎙"
                draggable="false"
                src="https://twemoji.maxcdn.com/2/72x72/1f399.png"
                style={{
                    height: "1em",
                    width: "1em",
                    margin: "0px 0.05em 0px 0.1em",
                    verticalAlign: "-0.1em",
                  }}
              />
              | Tech Writer
              <img
                alt="✍️"
                draggable="false"
                src="https://twemoji.maxcdn.com/2/72x72/270d.png"
                style={{
                    height: "1em",
                    width: "1em",
                    margin: "0px 0.05em 0px 0.1em",
                    verticalAlign: "-0.1em",
                  }}
              />
              | Maybe A Future MERN stack Developer Or Intern
            </p>
            <SocialIcons/>
            <div className='button__row'>
              <Button text='Contact Me' link='#contact'/>
              <Button text='See My Resume' link='#contact'/>
            </div>
            
          </div>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-6 text-center">
          <div>
            <img
              src="https://saadpasta.github.io/static/media/manOnTable.52be3144.svg"
              alt="Illustration"
              width="100%"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};
AOS.init();
export default Info;
