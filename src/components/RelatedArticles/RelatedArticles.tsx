import { useNavigate } from 'react-router-dom';
import { getRelatedPosts, generateGradient } from '@/data/blogs';
import styles from './RelatedArticles.module.css';

interface RelatedArticlesProps {
  currentPostId: string;
}

function RelatedArticles({ currentPostId }: RelatedArticlesProps) {
  const navigate = useNavigate();
  const relatedPosts = getRelatedPosts(currentPostId, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className={styles.relatedArticles}>
      <div className={styles.container}>
        <div className={styles.relatedHeader}>
          <p className={styles.relatedLabel}>WHY DocuXray?</p>
          <h2 className={styles.relatedHeading}>See Other Articles</h2>
        </div>
        <div className={styles.relatedGrid}>
          {relatedPosts.map((post, index) => (
            <div
              key={post.id}
              className={styles.relatedCard}
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div
                className={styles.relatedCardImage}
                style={{ background: generateGradient(index) }}
              ></div>
              <div className={styles.relatedCardContent}>
                <div className={styles.relatedCardCategory}>
                  {post.category.toUpperCase()}
                </div>
                <h3 className={styles.relatedCardTitle}>{post.title}</h3>
                <p className={styles.relatedCardDescription}>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedArticles;

