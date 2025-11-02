import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogPostLayout from '@/components/BlogPostLayout/BlogPostLayout';
import RelatedArticles from '@/components/RelatedArticles/RelatedArticles';
import { getBlogPostById, getInitials, formatDate } from '@/data/blogs';
import matter from 'gray-matter';
import styles from './BlogPostPage.module.css';

function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const post = slug ? getBlogPostById(slug) : null;

  useEffect(() => {
    if (!slug) {
      navigate('/blog');
      return;
    }

    if (!post) {
      navigate('/blog');
      return;
    }

    // Load markdown content
    const loadMarkdown = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try different path variations for better deployment compatibility
        const pathVariations = [
          `/blogs/${slug}.md`,
          `./blogs/${slug}.md`,
          `blogs/${slug}.md`,
        ];

        let markdown: string | null = null;
        let lastError: Error | null = null;

        for (const path of pathVariations) {
          try {
            const response = await fetch(path);
            if (response.ok) {
              markdown = await response.text();
              break;
            }
          } catch (error) {
            lastError = error as Error;
          }
        }

        if (!markdown) {
          throw new Error(
            `Blog post not found. ${lastError ? lastError.message : ''}`
          );
        }

        // Parse front matter and remove it from content
        const { content } = matter(markdown);
        setMarkdownContent(content.trim());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
        console.error('Error loading blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [slug, post, navigate]);

  // Update page title and meta
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - DocuXray`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      }
    }
  }, [post]);

  if (!post) {
    return null;
  }

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingMessage}>Loading blog post...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorMessage}>
          <h3>Error Loading Blog Post</h3>
          <p>{error}</p>
          <button onClick={() => navigate('/blog')} className={styles.backButton}>
            ← Back to Blog List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogPostPage}>
      <div className={styles.blogPostWrapper}>
        {/* Article Header */}
        <div className={styles.containerWide}>
          <header className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>{post.title}</h1>
            <div className={styles.articleMeta}>
              <div className={styles.authorInfo}>
                <div className={styles.authorAvatar}>
                  <span>{getInitials(post.author)}</span>
                </div>
                <div className={styles.authorDetails}>
                  <div className={styles.authorName}>{post.author}</div>
                  <div className={styles.authorRole}>{post.authorRole}</div>
                </div>
              </div>
              <div className={styles.articleDate}>{formatDate(post.date)}</div>
            </div>
          </header>
        </div>

        {/* Article Content */}
        <BlogPostLayout markdownContent={markdownContent} />

        {/* Related Articles */}
        <RelatedArticles currentPostId={post.id} />
      </div>
    </div>
  );
}

export default BlogPostPage;
