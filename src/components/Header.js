import React, { useState, useEffect } from 'react';

const Header = () => {
    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
      if (window.scrollY <= 70) {
        return setHeader("header")
      } else if (window.scrollY > 70) {
        return setHeader("header-visible")
      } 
    }
    
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    
    return (
        <header id={header === 'header' ? 'header-container' : 'header-container-visible'}>
            <div className={header === 'header' ? 'container header' : 'container header-visible'}>
                <a id="header-title" href="#hero-container">Brandon Olin</a>
                <nav id="nav-links">
                    <a className="nav-link" href="#about">About</a>
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href="#testimonials">Testimonials</a>
                    <a className="nav-link" href="#contact">Contact</a>
                </nav>
            </div>
        </header>        
    )
}

export default Header