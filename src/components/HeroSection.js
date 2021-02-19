import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import headshot from '../images/headshot.png';
import Typed from 'react-typed';
import FadeInSection from '../component/FadeInSection';

const HeroSection = () => {
  return (
    <div id="hero-container">
      <div className="container" id="hero-content-container">
        <div>
          <h1 id="hero-title">
            <Typed
              strings={["Hello there!^500 I'm Brandon Olin.^500 <br>Full-stack developer based in Denver."]}
              typeSpeed={40}
            />
          </h1>
          <FadeInSection delay={5500}>
            <div id="hero-buttons">
              <a href="https://standardresume.co/r/_60ykSHwQVH_SwAZ0PTbo" id="resume-button">
                <button className="hero-button">RESUME</button>
              </a>
              <a href="#contact" id="resume-button">
                <button className="hero-button">CONTACT ME</button>
              </a>
            </div>
          </FadeInSection>
        </div>
        <FadeInSection delay={1400}>
          <img src={headshot} alt="headshot" id="avatar-image" />
        </FadeInSection>
      </div>
      <a className="arrow bounce" href="#about">
        <FontAwesomeIcon className="fa fa-arrow-down fa-3x" icon={faArrowDown} />
      </a>
    </div>
  )
}

export default HeroSection;