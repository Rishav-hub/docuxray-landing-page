import styles from './LogoShowcase.module.css';

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
  // {
  //   name: "McDonald's",
  //   logo: 'https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg',
  // },
  // {
  //   name: 'Freshbus',
  //   logo: 'https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/entrackr/media/post_attachments/wp-content/uploads/2024/07/Fresh.png',
  // },
];

function LogoShowcase() {
  const shouldAnimate = companies.length > 4;

  return (
    <section className={styles.logoShowcase}>
      <div className={styles.container}>
        <div className={styles.logoShowcaseHeader}>
          <h2 className={styles.logoShowcaseTitle}>
            Trusted By Forward-Thinking Accounting Teams Worldwide.
          </h2>
        </div>
        <div className={`${styles.logoMarqueeContainer} ${!shouldAnimate ? styles.staticContainer : ''}`}>
          <div className={`${styles.logoMarqueeTrack} ${shouldAnimate ? styles.animated : styles.static}`}>
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div key={`logo-1-${index}`} className={styles.logoItem}>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={styles.companyLogo}
                />
              </div>
            ))}
            {/* Duplicate set for seamless scroll - only if more than 4 logos */}
            {shouldAnimate && companies.map((company, index) => (
              <div key={`logo-2-${index}`} className={styles.logoItem}>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={styles.companyLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoShowcase;

