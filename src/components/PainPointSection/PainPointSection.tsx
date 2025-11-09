import { useModal } from '@/contexts/ModalContext';
import styles from './PainPointSection.module.css';

function PainPointSection() {
  const { openModal } = useModal();

  return (
    <section id="use-cases" className={styles.useCases}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>There's the Old Way... And Then There's DocuXray</h2>
        
        <div className={styles.painNarrative}>
          <div className={styles.comparisonSection}>
            <div className={styles.oldWay}>
              <div className={`${styles.wayBadge} ${styles.oldBadge}`}>The Old Way</div>
              <h4>Manual document processing is eating your team's time and patience.</h4>
              <p style={{ marginBottom: '1.5rem', color: '#6B7280', lineHeight: 1.7 }}>
                You're stuck with outdated OCR tools that miss fields, choke on new templates, and need constant babysitting. Every hour spent fixing data is an hour lost to more strategic work.
              </p>
              <h5 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1F2937', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                With the old way, you get:
              </h5>
              <ul className={styles.wayList}>
                <li>
                  <span className={styles.iconNegative}>❌</span>
                  <span>Sorting through endless receipts, invoices, and statements manually</span>
                </li>
                <li>
                  <span className={styles.iconNegative}>❌</span>
                  <span>Hours lost fixing OCR errors and misreads</span>
                </li>
                <li>
                  <span className={styles.iconNegative}>❌</span>
                  <span>No consistency across different vendors and formats</span>
                </li>
                <li>
                  <span className={styles.iconNegative}>❌</span>
                  <span>Tedious double-checking of extracted data line by line</span>
                </li>
                <li>
                  <span className={styles.iconNegative}>❌</span>
                  <span>Unscalable processes that break when volume spikes</span>
                </li>
              </ul>
            </div>

            <div className={styles.arrowDivider}>
              <span className={styles.arrowIcon}>→</span>
            </div>

            <div className={styles.newWay}>
              <div className={`${styles.wayBadge} ${styles.newBadge}`}>The DocuXray Way</div>
              <h4>DocuXray replaces tedious OCR and manual entry with intelligent, automated precision.</h4>
              <p style={{ marginBottom: '1.5rem', color: '#6B7280', lineHeight: 1.7 }}>
                Built for accounting workflows, it reads, verifies, and delivers clean data from any document no templates, no setup, no surprises.
              </p>
              <h5 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1F2937', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                With the DocuXray way, you get:
              </h5>
              <ul className={styles.wayList}>
                <li>
                  <span className={styles.iconPositive}>✓</span>
                  <span>Seamless extraction from PDFs, scans, images, handwritten, and multilingual inputs</span>
                </li>
                <li>
                  <span className={styles.iconPositive}>✓</span>
                  <span>Eliminate manual checks with intelligent data validation</span>
                </li>
                <li>
                  <span className={styles.iconPositive}>✓</span>
                  <span>AI that adapts to document variation instantly</span>
                </li>
                <li>
                  <span className={styles.iconPositive}>✓</span>
                  <span>Drag, drop, and extract no template training or format tweaking needed</span>
                </li>
                <li>
                  <span className={styles.iconPositive}>✓</span>
                  <span>Your team spends time reviewing insights, not correcting data</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.comparisonCta}>
            <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => openModal('demo')}>
              Start with 100 pages free
            </button>
            <p className={styles.ctaSubtext}>
              20,000+ Documents Processed Daily • 99%+ Accuracy • No credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PainPointSection;

