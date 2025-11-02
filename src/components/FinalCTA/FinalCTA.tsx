import { useModal } from '@/contexts/ModalContext';
import styles from './FinalCTA.module.css';

function FinalCTA() {
  const { openModal } = useModal();

  return (
    <section className={styles.finalCta}>
      <div className={styles.container}>
        <div className={styles.finalCtaGrid}>
          {/* Left Column - Content */}
          <div className={styles.finalCtaLeft}>
            <h2 className={styles.finalCtaHeading}>The Sooner You Try It, the Sooner You Eliminate Manual Work</h2>
            <p className={styles.finalCtaDescription}>
              DocuXray delivers measurable results from day one — faster turnarounds, cleaner data, and more time for real accounting work.
            </p>
            
            <ul className={styles.finalCtaFeatures}>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Built for accountants, not engineers</strong> — intuitive interface that just works.</span>
              </li>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Turn hours into minutes</strong> with instant, template-free processing.</span>
              </li>
              <li>
                <span className={styles.checkIcon}>✓</span>
                <span><strong>Handle any format automatically</strong> — invoices, receipts, statements.</span>
              </li>
            </ul>
            
            <button className={`${styles.btn} ${styles.finalCtaButton}`} onClick={() => openModal('demo')}>
              START WITH 100 FREE PAGES
            </button>
            
            <div className={styles.finalCtaStats}>
              <div className={styles.finalCtaStatItem}>
                <div className={styles.finalCtaStatNumber}>20,000+</div>
                <div className={styles.finalCtaStatLabel}>Documents Processed Daily</div>
              </div>
              <div className={styles.finalCtaStatItem}>
                <div className={styles.finalCtaStatNumber}>99%+</div>
                <div className={styles.finalCtaStatLabel}>Accuracy</div>
              </div>
              <div className={styles.finalCtaStatItem}>
                <div className={styles.finalCtaStatNumber}>No</div>
                <div className={styles.finalCtaStatLabel}>Credit Card Needed</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className={styles.finalCtaRight}>
            <div className={styles.finalCtaVisualContainer}>
              <p className={styles.finalCtaVisualText}>
                Image or video that helps reinforce core value proposition and articulate what it is you do
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;

