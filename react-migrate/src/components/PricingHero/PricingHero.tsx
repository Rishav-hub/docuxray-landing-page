import styles from './PricingHero.module.css';

const companies = [
  {
    name: 'Firstsource',
    logo: 'https://www.firstsource.com/themes/custom/first_source/images/Firstsource-logo.svg',
  },
  {
    name: 'Morae',
    logo: 'https://moraegpro.wpenginepowered.com/wp-content/uploads/2022/11/logo-morae.svg',
  },
  {
    name: 'SKS Business Services',
    logo: 'https://www.sksbusinessservices.com/wp-content/uploads/2021/04/cropped-SKSBS-1.png',
  },
  {
    name: 'Bhalaria',
    logo: 'https://bhalaria.in/cdn/shop/files/LogoImage_132683164841010010_100x@2x.jpg?v=1693983552',
  },
  {
    name: "McDonald's",
    logo: 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg',
  },
  {
    name: 'Freshbus',
    logo: 'https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2024/07/Fresh.png',
  },
];

function PricingHero() {
  return (
    <section className={styles.pricingHero}>
      <div className={styles.container}>
        <div className={styles.pricingHeroContent}>
          <h2 className={styles.pricingHeroTitle}>Pricing</h2>
          <p className={styles.pricingHeroSubtitle}>
            From startups to Fortune 500s, companies of all stages trust DocuXray everytime with their document ingestion.
          </p>
        </div>
        <div className={styles.pricingLogoGrid}>
          {companies.map((company, index) => (
            <div key={`logo-${index}`} className={styles.pricingLogoItem}>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className={styles.pricingCompanyLogo}
              />
            </div>
          ))}
          {/* Duplicate for seamless scrolling */}
          {companies.map((company, index) => (
            <div key={`logo-duplicate-${index}`} className={styles.pricingLogoItem}>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className={styles.pricingCompanyLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingHero;

