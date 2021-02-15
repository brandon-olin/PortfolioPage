import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';

const HeroSection = () => {
    return (
        <div id="hero-container">
            <div className="container" id="hero-text-container">
                <h1 id="hero-title">Hello, I'm Brandon Olin. A full-stack developer based in Denver, CO.</h1>
                <div id="hero-buttons">
                    <a href="https://standardresume.co/r/_60ykSHwQVH_SwAZ0PTbo" id="resume-button">
                        <Button variant="contained" color="primary" size="large">Resume</Button>
                    </a>
                    <a href="mailto:dev@brandonolin.com">
                        <Button variant="contained" color="primary" size="large">Contact Me</Button>
                    </a>
                </div>
            </div>
            <div className="arrow bounce">
                <FontAwesomeIcon className="fa fa-arrow-down fa-2x" icon={faArrowDown} />
            </div>
        </div>
    )
}

export default HeroSection;