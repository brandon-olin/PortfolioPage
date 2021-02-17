import React from 'react';
import { Slide } from 'react-slideshow-image';
import FadeInSection from '../component/FadeInSection';
import landingpage from '../images/ScrapIt/landingpage.jpg';
import rewards from '../images/ScrapIt/rewards.jpg';
import success from '../images/ScrapIt/success.png';
import qrcode from '../images/ScrapIt/qrcode.jpg';

const ProjectsSection = () => {
    const properties = {
        duration: 5000,
        autoplay: true,
        transitionDuration: 500,
        arrows: false,
        easing: "ease",
        indicators: true  
    }

    return (
        <div className="projects-container" id="projects">
            <h1 id="projects-title">Projects</h1>
            <div className="project-container">
                <FadeInSection delay={500}>
                    <div className="project-text-container">
                        <FadeInSection delay={500}>
                            <h2 className="project-title">ScrapIt</h2>
                        </FadeInSection>
                        <FadeInSection delay={1000}>
                            <p className="project-text">Lead creation of a client facing application written in React Native with the Expo framework, Redux, and Google Firebase/Cloud Firestore.</p>
                        </FadeInSection>
                        <FadeInSection delay={1500}>
                            <p className="project-text">Designed the data structure, implemented QR code creation and scanning functionality, as well as hot reloading with asynchronous data reading and writing.</p>
                        </FadeInSection>
                        <FadeInSection delay={2000}>
                            <p className="project-text">Collaborated with UX designer to plan out the structure of the app, optimizing for ease of use,then implemented the design with a combination of CSS and a UI components library.</p>
                        </FadeInSection>
                    </div>
                </FadeInSection>
                <div className="slide-container">
                    <FadeInSection delay={3000}>
                        <Slide {...properties}>
                            <div className="each-slide">
                                <img src={landingpage} alt="landingpage" className="scrapit-slide" />
                            </div>
                            <div className="each-slide">
                                <img src={success} alt="success" className="scrapit-slide" />
                            </div>
                            <div className="each-slide">
                                <img src={qrcode} alt="qrcode" className="scrapit-slide" />
                            </div>
                            <div className="each-slide">
                                <img src={rewards} alt="rewards" className="scrapit-slide" />
                            </div>
                        </Slide>
                    </FadeInSection>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;