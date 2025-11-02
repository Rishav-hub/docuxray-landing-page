import { useNavigate } from 'react-router-dom';
import { BlogPostMetadata, generateGradient } from '@/data/blogs';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  post: BlogPostMetadata;
  index: number;
  isFeatured?: boolean;
}

function BlogCard({ post, index, isFeatured = false }: BlogCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <div className={styles.blogCard} onClick={handleClick}>
      {isFeatured && post.featuredImage && (
        <div
          className={styles.blogCardImage}
          style={{ background: generateGradient(index) }}
        >
          {post.category === 'Case Study' && (
            <div className={styles.blogCardBadge}>FEATURED</div>
          )}
        </div>
      )}
      <div className={styles.blogCardContent}>
        <div className={styles.blogCardCategory}>{post.category.toUpperCase()}</div>
        <h3 className={styles.blogCardTitle}>{post.title}</h3>
        <p className={styles.blogCardDescription}>{post.excerpt}</p>
        <div className={styles.blogCardMeta}>
          <span className={styles.blogCardAuthor}>By {post.author}</span>
          <span className={styles.blogCardReadTime}>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

