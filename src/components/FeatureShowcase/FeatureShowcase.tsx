import { useModal } from '@/contexts/ModalContext';
import styles from './FeatureShowcase.module.css';

function FeatureShowcase() {
  const { openModal } = useModal();

  return (
    <section className={styles.featureShowcase}>
      <div className={styles.container}>
        {/* Feature Block 1 - Visual Left, Content Right */}
        <div className={`${styles.featureBlock} ${styles.featureBlock1}`}>
          <div className={styles.featureVisual}>
            <div className={styles.featureVisualContainer}>
              <span className={styles.featurePlaceholderText}>Clueso</span>
            </div>
          </div>
          <div className={styles.featureContent}>
            <h2 className={styles.featureHeading}>Smarter AI That Checks Its Own Work</h2>
            <p className={styles.featureDescription}>
              DocuXray doesn't just extract data — it double-checks every field before sending it to you. If it catches something that looks wrong or incomplete, it automatically corrects it. That means fewer errors, less time reviewing, and more confidence in your data.
            </p>
            <button className={`${styles.btn} ${styles.btnPrimary} ${styles.featureCta}`} onClick={() => openModal('demo')}>
              START WITH 100 FREE PAGES
            </button>
          </div>
        </div>

        {/* Feature Block 2 - Content Left, Visual Right */}
        <div className={`${styles.featureBlock} ${styles.featureBlock2}`}>
          <div className={styles.featureContent}>
            <h2 className={styles.featureHeading}>Document AI That Just Works — No Templates, No Guesswork, No Stress</h2>
            <p className={styles.featureDescription}>
              DocuXray adapts to your documents, not the other way around. Whether you're dealing with messy vendor invoices or handwritten receipts, you get consistent, reliable outputs that your systems — and your team — can trust.
            </p>
            <button className={`${styles.btn} ${styles.btnPrimary} ${styles.featureCta}`} onClick={() => openModal('demo')}>
              START WITH 100 FREE PAGES
            </button>
          </div>
          <div className={styles.featureVisual}>
            <div className={styles.featureVisualContainer}>
              <span className={styles.featurePlaceholderText}>Clueso</span>
            </div>
          </div>
        </div>

        {/* Feature Block 3 - Visual Left, Content Right */}
        <div className={`${styles.featureBlock} ${styles.featureBlock3}`}>
          <div className={styles.featureVisual}>
            <div className={styles.featureVisualContainer}>
              <span className={styles.featurePlaceholderText}>Clueso</span>
            </div>
          </div>
          <div className={styles.featureContent}>
            <h2 className={styles.featureHeading}>Unlock Speed, Accuracy, and Scale with Document AI Built for Accounting Teams</h2>
            <p className={styles.featureDescription}>
              Whether you're dealing with 50 or 50,000 docs a week, the system scales effortlessly.
            </p>
            <button className={`${styles.btn} ${styles.btnPrimary} ${styles.featureCta}`} onClick={() => openModal('demo')}>
              START WITH 100 FREE PAGES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureShowcase;

