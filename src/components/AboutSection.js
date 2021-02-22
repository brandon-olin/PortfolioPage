import React from 'react';
import FadeInSection from './FadeInSection';

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
            <p className="about-text">My travels ended in early 2020 with a 9 week full-stack coding bootcamp at Le Wagon in Bali where I learned Ruby on Rails, HTML, CSS, And JavaSCript. This was followed by a mad dash back to the U.S. in early April in response to the covid pandemic.</p>
            <p className="about-text">From there I shifted my focus to React and JavaScript as my languages of choice, completing a number of Udemy courses around React and Node.js, building a number of smaller projects in those languages along the way.</p>
          </div>
        </FadeInSection>
        <FadeInSection delay={1250}>
          <div>
            <p className="about-text">In August of 2020 I took on the role of tech lead for ScrapIt, a compost pickup and rewards app that's been approved as part of the MIT Sandbox Innovation Fund, and will be piloting at two of their graduate dorms in the spring 2021 semester.</p>
            <p className="about-text">From here I'm continuing to build out features and functionality for ScrapIt, while I look for a full-time programming position. I'm open to both remote opportunities, and ones based in the greater Denver area!</p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

export default AboutSection;