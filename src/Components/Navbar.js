import React from 'react'
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../App.css'
//Components 
import Info from './Info'
import WhoAmI from './WhoAmI'
import Services from './Services'
import OpenSource from './OpenSource'
import Projects from './Projects'
import Contact from './Contact'


const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar_style  navbar-light bg-lignt" >
            
              <Link className='navbar-brand navbar__brand' to ='/'><span>&lt;</span> Haris Aqeel <span>/&gt;</span></Link>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{outline: 'none'}}/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav navbar__ul">
                <li className="nav-item">
                    <a href='#skills' className='navbar__link'>Skills</a>   
                </li>
                <li className="nav-item">
                    <a href='#service' className='navbar__link'>Services</a>   
                </li>
                <li className="nav-item">
                  <a href='#opensource' className='navbar__link'>OpenSource</a>
                </li>
                <li className="nav-item">
                  <a href='#projects' className='navbar__link'>Projects</a>
                </li>
                <li className="nav-item">
                  <a href='#contact' className='navbar__link'>Contact Me</a>
                </li>
                </ul>
            </div>
        </nav>

        <Switch>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/whoami">
            <WhoAmI />
          </Route>
          <Route path="/opensource">
            <OpenSource />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
              <Info />
              <WhoAmI />
              <Services />
              <OpenSource />
              <Projects />
              <Contact />
          </Route>
        </Switch>

        </>
    )
}

export default Navbar;
