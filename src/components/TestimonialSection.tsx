import React, { useState, useEffect } from 'react';
import testimonialData from '../data/testimonialData';

function TestimonialSection() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prevIndex) =>
        prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section" id="testimonial">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial-slider">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${index === highlightedIndex ? 'highlighted' : ''}`}
              onClick={() => setHighlightedIndex(index)}
            >
              <div className="testimonial-image-container">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
              </div>
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-comment">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
