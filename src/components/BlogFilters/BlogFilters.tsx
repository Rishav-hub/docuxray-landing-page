import styles from './BlogFilters.module.css';
import { FilterType } from '@/data/blogs';

export interface BlogFiltersProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

function BlogFilters({ activeFilter, onFilterChange }: BlogFiltersProps) {
  const filters: Array<{ label: string; value: FilterType }> = [
    { label: 'All', value: 'all' },
    { label: 'Case Studies', value: 'case-study' },
    { label: 'Blog Posts', value: 'blog-post' },
    { label: 'Product', value: 'product' },
  ];

  return (
    <div className={styles.blogFilters}>
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`${styles.filterPill} ${activeFilter === filter.value ? styles.active : ''}`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default BlogFilters;

