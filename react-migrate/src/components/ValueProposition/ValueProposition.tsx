import { useModal } from '@/contexts/ModalContext';
import styles from './ValueProposition.module.css';

function ValueProposition() {
  const { openModal } = useModal();

  return (
    <section className={styles.valueProposition}>
      <div className={styles.container}>
        <h2 className={styles.valuePropHeader}>Why Teams Choose DocuXray Over Other Document AI Tools</h2>
        
        <div className={styles.valueCardsGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueCardContent}>
              <h3 className={styles.valueCardTitle}>Catches Mistakes Before They Cost You Time</h3>
              <p className={styles.valueCardDescription}>
                Unlike typical OCR tools that stop at the first draft, DocuXray double-checks its own work automatically. If something looks off, it corrects it — so your team spends less time reviewing, and more time doing.
              </p>
            </div>
            <div className={styles.valueCardImagePlaceholder}>
              <span className={styles.placeholderText}>Image Coming Soon</span>
            </div>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueCardContent}>
              <h3 className={styles.valueCardTitle}>No Templates. No Setup. No Hassle.</h3>
              <p className={styles.valueCardDescription}>
                DocuXray doesn't rely on rigid templates. Whether you're working with multiple vendors, inconsistent formats, or custom layouts, the system adapts — no rule-building or manual mapping required.
              </p>
            </div>
            <div className={styles.valueCardImagePlaceholder}>
              <span className={styles.placeholderText}>Image Coming Soon</span>
            </div>
          </div>

          <div className={styles.valueCard}>
            <div className={styles.valueCardContent}>
              <h3 className={styles.valueCardTitle}>Handwritten, Scanned, Multilingual — No Problem</h3>
              <p className={styles.valueCardDescription}>
                From scanned receipts to handwritten notes to multilingual invoices, DocuXray handles it all in one workflow. Upload and extract clean data from any document, in any format, with zero delays.
              </p>
            </div>
            <div className={styles.valueCardImagePlaceholder}>
              <span className={styles.placeholderText}>Image Coming Soon</span>
            </div>
          </div>
        </div>

        <div className={styles.valuePropCta}>
          <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => openModal('demo')}>
            START WITH 100 FREE PAGES
          </button>
        </div>
      </div>
    </section>
  );
}

export default ValueProposition;

