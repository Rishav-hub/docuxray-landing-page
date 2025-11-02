import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './MarkdownRenderer.module.css';

interface MarkdownRendererProps {
  content: string;
  onHeadingsChange?: (headings: Array<{ id: string; text: string }>) => void;
}

function MarkdownRenderer({ content, onHeadingsChange }: MarkdownRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && onHeadingsChange) {
      const headings = contentRef.current.querySelectorAll('h2');
      const headingData = Array.from(headings).map((heading, index) => {
        const id = `section-${index}`;
        if (!heading.id) {
          heading.id = id;
        }
        return {
          id,
          text: heading.textContent || '',
        };
      });
      onHeadingsChange(headingData);
    }
  }, [content, onHeadingsChange]);

  return (
    <div ref={contentRef} className={styles.markdownRenderer}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;

