import { useState } from 'react';
import BlogHero from '@/components/BlogHero/BlogHero';
import BlogCard from '@/components/BlogCard/BlogCard';
import BlogFilters from '@/components/BlogFilters/BlogFilters';
import { blogPosts, getFeaturedPosts, getPostsByCategory, FilterType } from '@/data/blogs';
import styles from './BlogPage.module.css';

function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const featuredPosts = getFeaturedPosts();
  const filteredPosts = getPostsByCategory(activeFilter);

  return (
    <>
      <BlogHero />
      <section className={styles.blogFeatured}>
        <div className={styles.container}>
          <h2 className={styles.sectionLabel}>Featured</h2>
          <div className={styles.blogGrid}>
            {featuredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} isFeatured={true} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.blogRecent}>
        <div className={styles.container}>
          <div className={styles.blogRecentHeader}>
            <h2 className={styles.sectionHeading}>Recent posts</h2>
            <BlogFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          </div>
          <div className={`${styles.blogGrid} ${styles.blogGridText}`}>
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} isFeatured={false} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
