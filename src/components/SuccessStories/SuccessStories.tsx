import { useRef, useState } from 'react';
import styles from './SuccessStories.module.css';
import { testimonials } from '@/data/testimonials';

function SuccessStories() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section id="success" className={styles.successStories}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>Trusted by Growing Accounting Firms Across Industries</h2>
        <p className={styles.sectionSubtext}>
          See how forward-thinking businesses are using our Document AI to save time, reduce errors, and scale smarter.
        </p>
        <div
          className={styles.testimonialCarouselContainer}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div
            ref={trackRef}
            className={styles.testimonialCarouselTrack}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ userSelect: isDragging ? 'none' : 'auto' }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.testimonialQuote}>
                  <span className={styles.quoteMark}>"</span>
                  <p>{testimonial.quote}</p>
                  <span className={styles.quoteMarkEnd}>"</span>
                </div>
                <div className={styles.testimonialFooter}>
                  <div className={styles.personInfo}>
                    <div className={styles.personAvatar}>
                      <span>{testimonial.personInitials}</span>
                    </div>
                    <div className={styles.personDetails}>
                      <div className={styles.personName}>{testimonial.personName}</div>
                      <div className={styles.personPosition}>{testimonial.personPosition}</div>
                    </div>
                  </div>
                  <div className={styles.companyLogoContainer}>
                    <img
                      src={testimonial.companyLogo}
                      alt={testimonial.companyName}
                      className={styles.companyLogoTestimonial}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;

