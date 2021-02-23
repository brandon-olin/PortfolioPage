import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faGithubSquare, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import FadeInSection from './FadeInSection';

const ContactSection = () => {  
  return (
    <div className="contact-container" id="contact">
      <FadeInSection delay={500}>
        <div className="contact-card">
          <h1 id="contact-title">Interested in working with me?</h1>
          <div className="contact-wrapper">
            <div className="professional">
              <FadeInSection delay={1250}>
                <div>
                  <h3 className="contact-section-header">Send me an email</h3>
                  <nav id="">
                    <a className="social-icon-link" href="mailto:dev@brandonolin.com"><FontAwesomeIcon className="social-icon" icon={faEnvelopeSquare} /></a>
                  </nav>
                </div>
              </FadeInSection>
              <FadeInSection delay={2000}>
                <div>
                  <h3 className="contact-section-header">View my resume</h3>
                  <nav id="">
                    <a className="social-icon-link" href="https://standardresume.co/r/_60ykSHwQVH_SwAZ0PTbo"><FontAwesomeIcon className="social-icon" icon={faFileAlt} /></a>
                  </nav>
                </div>
              </FadeInSection>
            </div>
            <FadeInSection delay={2750}>
              <div className="social">
                <h3 className="contact-section-header">...or connect with me below!</h3>
                <nav id="social-links">
                  <a className="social-icon-link" href="https://www.linkedin.com/in/brandon-olin/"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
                  <a className="social-icon-link" href="https://twitter.com/BrandonOlin"><FontAwesomeIcon className="social-icon" icon={faTwitterSquare} /></a>
                  <a className="social-icon-link" href="https://github.com/brandon-olin"><FontAwesomeIcon className="social-icon" icon={faGithubSquare} /></a>
                  {/* <a className="social-icon-link" href="https://medium.com/@brandonolin"><FontAwesomeIcon className="social-icon" icon={faMedium} /></a> */}
                </nav>
              </div>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default ContactSection;