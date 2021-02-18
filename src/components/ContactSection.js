import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faGithubSquare, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
// import FadeInSection from '../component/FadeInSection';

const ContactSection = () => {  
  return (
    <>
      <div className="contact-container" id="contact">
        <h1 id="contact-title">Interested in working with me?</h1>
        <div className="contact-wrapper">
          <div className="social">
            <h3 className="contact-section-header">Contact me here</h3>
            <nav id="social-links">
              <a className="social-icon-link" href="https://twitter.com/BrandonOlin"><FontAwesomeIcon className="social-icon" icon={faTwitterSquare} /></a>
              <a className="social-icon-link" href="mailto:dev@brandonolin.com"><FontAwesomeIcon className="social-icon" icon={faEnvelopeSquare} /></a>
            </nav>
          </div>
          <div className="social">
            <h3 className="contact-section-header">Connect with me on social!</h3>
            <nav id="social-links">
              <a className="social-icon-link" href="https://twitter.com/BrandonOlin"><FontAwesomeIcon className="social-icon" icon={faTwitterSquare} /></a>
              <a className="social-icon-link" href="https://github.com/brandon-olin"><FontAwesomeIcon className="social-icon" icon={faGithubSquare} /></a>
              <a className="social-icon-link" href="https://medium.com/@brandonolin"><FontAwesomeIcon className="social-icon" icon={faMedium} /></a>
            </nav>
          </div>
        </div>
      </div>
      <footer id="footer"></footer>
    </>
  );
}

export default ContactSection;