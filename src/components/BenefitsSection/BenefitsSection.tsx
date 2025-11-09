import { useModal } from '@/contexts/ModalContext';
import styles from './BenefitsSection.module.css';

function BenefitsSection() {
  const { openModal } = useModal();

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <h2 className={styles.benefitsHeading}>How it works?</h2>

        <div className={styles.benefitsGrid}>
          {/* Card 1 */}
          <div className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Step 1: Create Your Free Account</h3>
            <p className={styles.cardDescription}>
              Sign up in seconds with Google, Microsoft, or email. No credit card required.
            </p>
            <div className={styles.cardIcon}>
              <lord-icon
                src="https://cdn.lordicon.com/kdduutaw.json"
                trigger="loop"
                delay="1600"
                colors="primary:#121331,secondary:#047857"
                style={{ width: '160px', height: '160px' }}
              ></lord-icon>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Step 2: Upload Your First Documents</h3>
            <p className={styles.cardDescription}>
              Start processing right away with 100 free pages every month — no templates, no training needed.
            </p>
            <div className={styles.cardIcon}>
              <lord-icon
                src="https://cdn.lordicon.com/hmpomorl.json"
                trigger="loop"
                delay="1800"
                colors="primary:#121331,secondary:#047857"
                style={{ width: '160px', height: '160px' }}
              ></lord-icon>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.benefitCard}>
            <h3 className={styles.cardTitle}>Step 3: Scale As You Grow</h3>
            <p className={styles.cardDescription}>
              Upgrade when you're ready. Flexible plans that fit your document volume and team size.
            </p>
            <div className={styles.cardIcon}>
              <lord-icon
                src="https://cdn.lordicon.com/lbcxnxti.json"
                trigger="loop"
                delay="2200"
                colors="primary:#121331,secondary:#047857"
                style={{ width: '160px', height: '160px' }}
              ></lord-icon>
            </div>
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => openModal('demo')}>
            Start with 100 pages free
          </button>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;

