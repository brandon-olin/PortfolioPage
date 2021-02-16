import React, { useState, useRef, useEffect } from 'react';

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            setTimeout(() => {
                entries.forEach(entry => setVisible(entry.isIntersecting));
            }, props.delay)
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, [props.delay]);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
  
export default FadeInSection;