import { useState } from 'react';
import { useModal } from '@/contexts/ModalContext';
import styles from './PricingPlans.module.css';

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  yearlyTotal: number;
  yearlySavings: number;
  features: Array<{ text: string; enabled: boolean }>;
  idealFor: string;
  isFeatured?: boolean;
  isFree?: boolean;
  ctaText: string;
}

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Plan',
    tagline: 'Try Document AI for Free',
    priceMonthly: 0,
    priceYearly: 0,
    yearlyTotal: 0,
    yearlySavings: 0,
    features: [
      { text: 'Process up to 20 documents/day', enabled: true },
      { text: 'Extract data from invoices, receipts & contracts', enabled: true },
      { text: 'Simple dashboard & analytics', enabled: true },
      { text: '99% OCR accuracy', enabled: true },
      { text: 'No email support', enabled: false },
      { text: 'No Excel / PDF export', enabled: false },
    ],
    idealFor: 'Individuals exploring document automation capabilities',
    isFree: true,
    ctaText: 'Start Free',
  },
  {
    id: 'basic',
    name: 'Basic Plan',
    tagline: 'Get Started with Document AI',
    priceMonthly: 999,
    priceYearly: 849,
    yearlyTotal: 10188,
    yearlySavings: 1788,
    features: [
      { text: 'Process up to 1,000 documents/month', enabled: true },
      { text: 'Export to Excel / PDF', enabled: true },
      { text: 'Email support', enabled: true },
      { text: 'API access', enabled: true },
      { text: 'Advanced analytics', enabled: true },
      { text: 'Priority processing', enabled: true },
    ],
    idealFor: 'Small businesses just beginning their automation journey',
    isFeatured: true,
    ctaText: 'Start Free Trial',
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    tagline: 'Scale Your Document Automation',
    priceMonthly: 2499,
    priceYearly: 2124,
    yearlyTotal: 25488,
    yearlySavings: 4500,
    features: [
      { text: 'Process up to 10,000 documents/month', enabled: true },
      { text: 'Advanced analytics dashboard', enabled: true },
      { text: 'API access & integrations (Tally, QuickBooks, etc.)', enabled: true },
      { text: 'AI accuracy tuning (train on your document formats)', enabled: true },
      { text: 'Multi-user access', enabled: true },
      { text: 'Priority support & onboarding assistance', enabled: true },
    ],
    idealFor: 'Businesses scaling fast or handling diverse document types',
    ctaText: 'Upgrade to Pro',
  },
];

function PricingPlans() {
  const [isYearly, setIsYearly] = useState(true);
  const { openModal } = useModal();

  const getDisplayPrice = (plan: PricingPlan) => {
    return isYearly ? plan.priceYearly : plan.priceMonthly;
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-IN');
  };

  return (
    <section className={styles.pricingPlans}>
      <div className={styles.container}>
        <div className={styles.pricingPlansHeader}>
          <h2 className={styles.pricingPlansTitle}>Choose the plan that fits your business</h2>
          <p className={styles.pricingPlansSubtitle}>
            Start automating your documents today — scale as you grow.
          </p>
          <p className={styles.pricingPlansSavings}>(Save 15% with yearly billing)</p>
        </div>

        {/* Billing Toggle */}
        <div className={styles.billingToggleContainer}>
          <span className={`${styles.toggleLabel} ${!isYearly ? styles.active : ''}`}>
            Monthly
          </span>
          <div className={styles.billingToggle}>
            <input
              type="checkbox"
              id="billing-toggle"
              className={styles.billingToggleInput}
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
            />
            <label htmlFor="billing-toggle" className={styles.billingToggleLabel}>
              <span className={styles.billingToggleSlider}></span>
            </label>
          </div>
          <span className={`${styles.toggleLabel} ${isYearly ? styles.active : ''}`}>
            Yearly{' '}
            <span className={styles.savingsBadge}>Save 15%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className={styles.pricingCardsGrid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.pricingCard} ${plan.isFeatured ? styles.pricingCardFeatured : ''}`}
            >
              {plan.isFeatured && (
                <div className={styles.featuredBadge}>Most Popular</div>
              )}
              <div className={styles.pricingCardHeader}>
                <h3 className={styles.pricingCardName}>{plan.name}</h3>
                <p className={styles.pricingCardTagline}>{plan.tagline}</p>
              </div>
              <div className={styles.pricingCardPrice}>
                <div className={styles.priceWrapper}>
                  <span className={styles.currency}>₹</span>
                  <span className={styles.amount} key={isYearly ? 'yearly' : 'monthly'}>
                    {formatPrice(getDisplayPrice(plan))}
                  </span>
                  <span className={styles.period}>/ month</span>
                </div>
                {!plan.isFree && isYearly && (
                  <p className={styles.yearlyTotal}>
                    Billed yearly at ₹{formatPrice(plan.yearlyTotal)} (Save ₹{formatPrice(plan.yearlySavings)})
                  </p>
                )}
                {plan.isFree && (
                  <p className={styles.yearlyTotal}>Always free, no credit card required</p>
                )}
              </div>
              <div className={styles.pricingCardDivider}></div>
              <div className={styles.pricingCardFeatures}>
                <p className={styles.featuresTitle}>
                  {plan.isFree ? 'Key Features Include:' : plan.id === 'basic' ? 'Everything in Free, plus:' : 'Everything in Basic, plus:'}
                </p>
                <ul className={styles.featuresList}>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      {feature.enabled ? (
                        <>
                          <span className={styles.featureIcon}>✓</span>
                          <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                        </>
                      ) : (
                        <>
                          <span className={styles.featureIconDisabled}>✗</span>
                          <span className={styles.featureDisabled}>{feature.text}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.pricingCardIdeal}>
                <p className={styles.idealTitle}>Ideal For:</p>
                <p className={styles.idealDescription}>{plan.idealFor}</p>
              </div>
              <button
                className={`${styles.pricingCta} ${styles.btn} ${styles.btnPrimary}`}
                onClick={() => openModal('demo')}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPlans;

