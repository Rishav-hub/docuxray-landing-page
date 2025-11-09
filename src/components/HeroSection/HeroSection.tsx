import { useModal } from '@/contexts/ModalContext';
import styles from './HeroSection.module.css';

function HeroSection() {
  const { openModal } = useModal();

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <h2 className={styles.heroHeading}>
              Stop Wasting Time on OCR That Doesn't Work Try Document AI{' '}
              <span className={styles.highlight}>
                'Built for Accounting Teams with 99%+ Accuracy'
              </span>
            </h2>
            <p className={styles.heroSubheading}>
              Join teams replacing outdated OCR with AI that just works — 
              <strong> no setup, no templates, no guesswork</strong> Upload your first documents and watch the magic happen..
            </p>
            <div className={styles.heroActions}>
              <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => openModal('demo')}>
                Start with 100 pages free
              </button>
            </div>
            <div className={styles.statisticsSection}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>20,000+</div>
                <div className={styles.statLabel}>Documents Processed Daily</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>99%+</div>
                <div className={styles.statLabel}>Accuracy</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>No</div>
                <div className={styles.statLabel}>Credit Card Needed</div>
              </div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.mediaContainer}>
              <img src={`${import.meta.env.BASE_URL}dashboard-preview.png`} alt="Document Processing Dashboard" className={styles.dashboardImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

