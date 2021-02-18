import React from 'react';
import FadeInSection from '../component/FadeInSection';

const AboutSection = () => {  
  return (
    <div className="about-container" id="about">
      <h1 id="about-title">About Me</h1>
      <div className="about-fade-in">
        <FadeInSection delay={250}>
          <div>
            <p className="about-text">Born in the frigid tundra of Buffalo, NY, the long winters indoors left plenty of time for fiddling with technology. I showed a knack for computers and spent much of my early years building gaming rigs and learning their ins and outs.</p>
            <p className="about-text">I ended up pursuing a business degree and working various jobs in the field, eventually going down the path of entrepreneurship and location independence. This culminated in 3 years spent living and working remotely in South America, Europe, and Asia.</p>
          </div>
        </FadeInSection>
        <FadeInSection delay={750}>
          <div>
            <p className="about-text">Now that I’ve finished the Le Wagon coding bootcamp and Zero-to-Mastery JavaScript course, I’m transitioning to programming as my full-time profession. I’m looking for positions anywhere in the U.S where I can make that happen!</p>
            <p className="about-text">Now that I’ve finished the Le Wagon coding bootcamp and Zero-to-Mastery JavaScript course, I’m transitioning to programming as my full-time profession. I’m looking for positions anywhere in the U.S where I can make that happen!</p>
          </div>
        </FadeInSection>
        <FadeInSection delay={1250}>
          <div>
            <p className="about-text">Now that I’ve finished the Le Wagon coding bootcamp and Zero-to-Mastery JavaScript course, I’m transitioning to programming as my full-time profession. I’m looking for positions anywhere in the U.S where I can make that happen!</p>
            <p className="about-text">Now that I’ve finished the Le Wagon coding bootcamp and Zero-to-Mastery JavaScript course, I’m transitioning to programming as my full-time profession. I’m looking for positions anywhere in the U.S where I can make that happen!</p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

export default AboutSection;