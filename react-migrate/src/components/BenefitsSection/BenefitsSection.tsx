import styles from './BenefitsSection.module.css';

function BenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        <div className={styles.benefitsHeader}>
          <h2 className={styles.benefitsHeading}>How it works?</h2>
        </div>

        <div className={styles.benefitsList}>
          {/* Benefit Item 01 */}
          <div className={styles.benefitItem}>
            <div className={styles.benefitLeft}>
              <div className={styles.benefitNumber}>Step 1:</div>
              <h3 className={styles.benefitTitle}>Create Your Free Account</h3>
            </div>
            <div className={styles.benefitMiddle}>
              <p className={styles.benefitDescription}>
                Sign up in seconds with Google, Microsoft, or email. No credit card required.
              </p>
            </div>
            <div className={styles.benefitRight}>
              <div className={styles.benefitPlaceholder}>
                <span className={styles.placeholderIcon}>🎨</span>
                <span className={styles.placeholderLabel}>Illustration Placeholder</span>
              </div>
            </div>
          </div>

          <div className={styles.benefitDivider}></div>

          {/* Benefit Item 02 */}
          <div className={styles.benefitItem}>
            <div className={styles.benefitLeft}>
              <div className={styles.benefitNumber}>Step 2:</div>
              <h3 className={styles.benefitTitle}>Upload Your First Documents</h3>
            </div>
            <div className={styles.benefitMiddle}>
              <p className={styles.benefitDescription}>
                Start processing right away with 100 free pages every month — no templates, no training needed.
              </p>
            </div>
            <div className={styles.benefitRight}>
              <div className={styles.benefitPlaceholder}>
                <span className={styles.placeholderIcon}>🎨</span>
                <span className={styles.placeholderLabel}>Illustration Placeholder</span>
              </div>
            </div>
          </div>

          <div className={styles.benefitDivider}></div>

          {/* Benefit Item 03 */}
          <div className={styles.benefitItem}>
            <div className={styles.benefitLeft}>
              <div className={styles.benefitNumber}>Step 3:</div>
              <h3 className={styles.benefitTitle}>Scale As You Grow</h3>
            </div>
            <div className={styles.benefitMiddle}>
              <p className={styles.benefitDescription}>
                Upgrade when you're ready. Flexible plans that fit your document volume and team size.
              </p>
            </div>
            <div className={styles.benefitRight}>
              <div className={styles.benefitPlaceholder}>
                <span className={styles.placeholderIcon}>🎨</span>
                <span className={styles.placeholderLabel}>Illustration Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;

