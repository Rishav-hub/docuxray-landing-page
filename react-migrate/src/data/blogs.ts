export interface BlogPostMetadata {
  id: string;
  title: string;
  excerpt: string;
  category: 'Blog Post' | 'Case Study' | 'Product';
  categorySlug: 'blog-post' | 'case-study' | 'product';
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  featured: boolean;
  featuredImage?: boolean;
}

export const blogPosts: BlogPostMetadata[] = [
  {
    id: 'msme-automate-document-processing',
    title: 'How MSMEs Can Automate Document Processing Without Huge Tech Investments',
    excerpt: 'Discover how small and medium businesses can implement affordable document automation solutions that save time and reduce costs without breaking the bank.',
    category: 'Blog Post',
    categorySlug: 'blog-post',
    author: 'Parit Kansal',
    authorRole: 'Content Strategist',
    date: '2025-01-15',
    readTime: '7 MIN READ',
    featured: true,
    featuredImage: true,
  },
  {
    id: 'top-10-ai-tools-msme-2025',
    title: 'Top 10 AI Tools Every MSME Should Use in 2025',
    excerpt: 'A comprehensive guide to the best AI-powered tools that can transform your small business operations and drive growth in 2025.',
    category: 'Product',
    categorySlug: 'product',
    author: 'Sandeep Dey',
    authorRole: 'Product Manager',
    date: '2025-01-10',
    readTime: '8 MIN READ',
    featured: true,
    featuredImage: true,
  },
  {
    id: 'go-paperless-guide-small-business',
    title: 'How to Go Paperless: A Step-by-Step Guide for Small Businesses',
    excerpt: 'A practical roadmap for transitioning your business from paper-based to digital document management with minimal disruption.',
    category: 'Blog Post',
    categorySlug: 'blog-post',
    author: 'Kankana',
    authorRole: 'Operations Lead',
    date: '2025-01-05',
    readTime: '6 MIN READ',
    featured: true,
    featuredImage: true,
  },
  {
    id: 'document-management-challenges-ai-solutions',
    title: 'Common Document Management Challenges MSMEs Face (and How AI Solves Them)',
    excerpt: 'Explore the typical document processing pain points faced by small businesses and how artificial intelligence provides practical solutions.',
    category: 'Blog Post',
    categorySlug: 'blog-post',
    author: 'Rahim Khan',
    authorRole: 'Business Analyst',
    date: '2024-12-28',
    readTime: '7 MIN READ',
    featured: false,
    featuredImage: false,
  },
  {
    id: 'roi-document-automation-msme',
    title: 'Save Time and Money: The ROI of Document Automation for MSMEs',
    excerpt: 'Learn how to calculate and maximize the return on investment when implementing document automation in your small business.',
    category: 'Case Study',
    categorySlug: 'case-study',
    author: 'Rishav Dash',
    authorRole: 'Finance Director',
    date: '2024-12-20',
    readTime: '5 MIN READ',
    featured: false,
    featuredImage: false,
  },
  {
    id: 'ai-tax-invoice-compliance-msme',
    title: 'How AI Helps MSMEs Stay Compliant with Tax and Invoice Regulations',
    excerpt: 'Understand how AI-powered solutions can automate tax compliance and invoice management to keep your business audit-ready.',
    category: 'Blog Post',
    categorySlug: 'blog-post',
    author: 'Parit Kansal',
    authorRole: 'Compliance Expert',
    date: '2024-12-15',
    readTime: '6 MIN READ',
    featured: false,
    featuredImage: false,
  },
  {
    id: 'document-ai-unstructured-data-technical',
    title: 'Under the Hood: How Document AI Understands Unstructured Business Data',
    excerpt: 'A technical deep-dive into the AI technologies that enable machines to read, understand, and extract information from complex documents.',
    category: 'Case Study',
    categorySlug: 'case-study',
    author: 'Dr. Naveen Kumar Laskari and Sandeep Dey',
    authorRole: 'Chief AI Scientists',
    date: '2024-12-10',
    readTime: '10 MIN READ',
    featured: false,
    featuredImage: false,
  },
  {
    id: 'ai-accuracy-document-reading-science',
    title: 'The Science of Accuracy: How AI Models Learn to Read Documents Like Humans',
    excerpt: 'Explore the scientific principles behind AI document processing and how machine learning models achieve human-level reading accuracy.',
    category: 'Case Study',
    categorySlug: 'case-study',
    author: 'Sambit Mukherjee',
    authorRole: 'Machine Learning Lead',
    date: '2024-12-05',
    readTime: '9 MIN READ',
    featured: false,
    featuredImage: false,
  },
];

// Generate gradient background for cards
export function generateGradient(index: number): string {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  ];
  return gradients[index % gradients.length];
}

// Get author initials
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

// Format date
export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

// Get blog post by ID
export function getBlogPostById(id: string): BlogPostMetadata | undefined {
  return blogPosts.find((post) => post.id === id);
}

// Get featured posts
export function getFeaturedPosts(): BlogPostMetadata[] {
  return blogPosts.filter((post) => post.featured);
}

// Filter type
export type FilterType = 'all' | 'blog-post' | 'case-study' | 'product';

// Get posts by category
export function getPostsByCategory(categorySlug: FilterType): BlogPostMetadata[] {
  if (categorySlug === 'all') {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.categorySlug === categorySlug);
}

// Get related posts (exclude current post)
export function getRelatedPosts(
  currentPostId: string,
  limit: number = 3
): BlogPostMetadata[] {
  return blogPosts.filter((post) => post.id !== currentPostId).slice(0, limit);
}

