import { useState } from 'react';
import styles from './FAQSection.module.css';
import { faqItems } from '@/data/faq';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(index);
    }
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
        
        <div className={styles.faqList}>
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <div
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={0}
                role="button"
                aria-expanded={activeIndex === index}
              >
                <h3 className={styles.faqQuestionText}>{item.question}</h3>
                <span className={styles.faqChevron}>▼</span>
              </div>
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

