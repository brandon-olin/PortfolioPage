import React, { useState, useRef, useEffect } from 'react';

const FadeInSection = ({ delay, children, threshold = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  const observer = new IntersectionObserver(([entry]) => {
    setTimeout(() => setVisible(entry.isIntersecting), delay)
  }, { threshold });

  useEffect(() => {
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