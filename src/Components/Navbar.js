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
                    <Link className='navbar__link' to='/whoami'>
                      Skills
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='navbar__link' to='/opensource'>
                      OpenSource
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='navbar__link' to='/projects'>
                      Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='navbar__link' to='/contact'>
                      Contact Me
                    </Link>
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
              <OpenSource />
              <Projects />
              <Contact />
          </Route>
        </Switch>

        </>
    )
}

export default Navbar;
