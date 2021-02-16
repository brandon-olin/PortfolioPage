import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import FadeInSection from '../component/FadeInSection';
import headshot from '../images/headshot.png';
import Typed from 'react-typed';

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
                    <div id="hero-buttons">
                        <a href="https://standardresume.co/r/_60ykSHwQVH_SwAZ0PTbo" id="resume-button">
                            <button className="hero-button">RESUME</button>
                        </a>
                        <a href="mailto:dev@brandonolin.com" id="resume-button">
                            <button className="hero-button">CONTACT ME</button>
                        </a>
                    </div>
                </div>
                <img src={headshot} id="avatar-image" />
            </div>
            <div className="arrow bounce">
                <FontAwesomeIcon className="fa fa-arrow-down fa-2x" icon={faArrowDown} />
            </div>
        </div>
    )
}

export default HeroSection;