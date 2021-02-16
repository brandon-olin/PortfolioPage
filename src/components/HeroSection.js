import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import headshot from '../images/headshot.png';
import Typed from 'react-typed';

const HeroSection = () => {
    // const options = {
    //     strings: ["Hello there! I'm Brandon Olin", "Full-stack developer based in Denver, CO."],
    // }

    // const typed = new Typed('h1', )
    return (
        <div id="hero-container">
            <div className="container" id="hero-content-container">
                <div>
                    <h1 id="hero-title">
                        <Typed
                            strings={["Hello there! I'm Brandon Olin.<br>^1000Full-stack developer based in Denver."]}
                            typeSpeed={40}
                        />
                    </h1>
                    <div id="hero-buttons">
                        <a href="https://standardresume.co/r/_60ykSHwQVH_SwAZ0PTbo" id="resume-button">
                            <button class="hero-button">RESUME</button>
                        </a>
                        <a href="mailto:dev@brandonolin.com" id="resume-button">
                            <button class="hero-button">CONTACT ME</button>
                        </a>
                    </div>
                </div>
                <img src={headshot} alt="" id="avatar-image" />
            </div>
            <div className="arrow bounce">
                <FontAwesomeIcon className="fa fa-arrow-down fa-2x" icon={faArrowDown} />
            </div>
        </div>
    )
}

export default HeroSection;