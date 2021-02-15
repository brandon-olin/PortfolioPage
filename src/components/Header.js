import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faGithubSquare, faMedium } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="container header">
            <a id="header-title" href="/">Brandon Olin</a>
            <nav id="nav-links">
                <a className="nav-link" href="">About</a>
                <a className="nav-link" href="">Projects</a>
                <a className="nav-link" href="">Contact</a>
            </nav>
            <nav id="social-links">
                <a className="social-icon-link" href="https://twitter.com/BrandonOlin"><FontAwesomeIcon className="social-icon" icon={faTwitterSquare} /></a>
                <a className="social-icon-link" href="https://github.com/brandon-olin"><FontAwesomeIcon className="social-icon" icon={faGithubSquare} /></a>
                <a className="social-icon-link" href="https://medium.com/@brandonolin"><FontAwesomeIcon className="social-icon" icon={faMedium} /></a>
                <a className="social-icon-link" href="mailto:dev@brandonolin.com"><FontAwesomeIcon className="social-icon" icon={faEnvelopeSquare} /></a>
            </nav>
        </header>        
    )
}

export default Header