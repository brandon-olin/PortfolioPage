import React, { useState, useRef, useEffect } from 'react';

const FadeInSection = ({ delay, children, threshold = 0 }) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            setTimeout(() => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
            }, delay)
        }, { threshold });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {children}
      </div>
    );
  }
  
export default FadeInSection;