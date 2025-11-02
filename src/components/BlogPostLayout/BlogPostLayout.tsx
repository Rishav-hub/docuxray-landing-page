import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MarkdownRenderer from '@/components/MarkdownRenderer/MarkdownRenderer';
import styles from './BlogPostLayout.module.css';

interface Heading {
  id: string;
  text: string;
}

interface BlogPostLayoutProps {
  markdownContent: string;
}

function BlogPostLayout({ markdownContent }: BlogPostLayoutProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');

  const handleHeadingsChange = (newHeadings: Heading[]) => {
    setHeadings(newHeadings);
  };

  useEffect(() => {
    // Scroll spy for TOC
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = document.getElementById(headings[i].id);
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveHeadingId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={styles.blogPostContainer}>
      <div className={styles.containerWide}>
        <div className={styles.blogPostLayout}>
          {/* Left Sidebar */}
          <aside className={styles.blogSidebarLeft}>
            <Link to="/blog" className={styles.backLink}>
              <span className={styles.backArrow}>←</span>
              <span className={styles.backText}>BACK TO THE MAIN BLOG</span>
            </Link>
            <div className={styles.tableOfContents}>
              <h3 className={styles.tocHeading}>IN THIS ARTICLE</h3>
              <nav className={styles.tocNav}>
                {headings.length === 0 ? (
                  <p className={styles.tocEmpty}>No sections available</p>
                ) : (
                  headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`${styles.tocLink} ${
                        activeHeadingId === heading.id ? styles.active : ''
                      }`}
                      onClick={(e) => handleTocClick(e, heading.id)}
                    >
                      {heading.text}
                    </a>
                  ))
                )}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className={styles.blogPostMain}>
            <article className={styles.blogArticle}>
              <div className={styles.articleBody}>
                <MarkdownRenderer
                  content={markdownContent}
                  onHeadingsChange={handleHeadingsChange}
                />
              </div>
            </article>
          </main>

          {/* Right Sidebar */}
          <aside className={styles.blogSidebarRight}>
            {/* Reserved for social share, metadata, etc. */}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BlogPostLayout;

