import styles from './BlogHero.module.css';

function BlogHero() {
  return (
    <section className={styles.blogHero}>
      <div className={styles.container}>
        <div className={styles.blogHeroContent}>
          <h1 className={styles.blogHeroTitle}>Blog</h1>
          <p className={styles.blogHeroSubtitle}>Latest updates from the team</p>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;

