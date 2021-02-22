import React, { useState } from 'react';
import alex from '../images/alex.jfif';
import elad from '../images/elad.jfif';
import FadeInSection from './FadeInSection';

const TestimonialsSection = () => {
  return (
    <div className="testimonials-container" id="testimonials">
      <h1 id="testimonials-title">Testimonials</h1>
      <FadeInSection delay={500}>
        <div className="testimonial-card">
          <div className="testimonial-left-container">
            <p className="testimonial-content">"I'd strongly recommend Brandon as a high-quality developer and teammate. Brandon has been working with Scrapit, the MIT-based startup I co-founded, as the Lead Developer and he consistently impresses with his ability to build rapidly with an eye for detail, all while maintaining a lens on the big picture of what the product has to deliver.</p>
            <p className="testimonial-content">Brandon is an extremely quick learner and has a passion for high-quality work that shines through. I think that his ability to learn while building is one of the most important qualities to look for in a strong developer, and he absolutely nails it. He is also a great, collaborative teammate with a strong sense of ownership over his work–anyone ought to be thrilled to have him join their team!"</p>
            <h5 className="testimonial-left-subtext">-Alexandra Prather, Co-Founder at ScrapIt</h5>
          </div>
          <div className="testimonial-right-container">
            <img src={alex} alt="alex" className="testimonial-picture"/>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection delay={1000}>
        <div className="testimonial-card">
          <div className="testimonial-left-container">
            <p className="testimonial-content">"Brandon was amazing! Smart, hard working, and went the extra 10 miles to makes sure everything was done correctly. He didn't just write functional code and called it a day. He made sure it met my high standards and did a fantastic job!"</p>
            <h5 className="testimonial-left-subtext">-Elad Karni, Founder & CEO at EK Solutions</h5>
          </div>
          <div className="testimonial-right-container">
            <img src={elad} alt="elad" className="testimonial-picture"/>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default TestimonialsSection;