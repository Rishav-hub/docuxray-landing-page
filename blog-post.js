// Blog posts metadata (same as in blog.js)
const blogPosts = [
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
        featured: true
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
        featured: true
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
        featured: true
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
        featured: false
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
        featured: false
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
        featured: false
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
        featured: false
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
        featured: false
    }
];

// Get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Get author initials
function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase();
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Generate gradient
function generateGradient(index) {
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    ];
    return gradients[index % gradients.length];
}

// Load markdown content
async function loadMarkdownContent(postId) {
    try {
        // Try different path variations for better deployment compatibility
        const pathVariations = [
            `./blogs/${postId}.md`,
            `blogs/${postId}.md`,
            `/blogs/${postId}.md`,
            `${window.location.origin}/blogs/${postId}.md`
        ];
        
        let markdown = null;
        let lastError = null;
        
        for (const path of pathVariations) {
            try {
                console.log(`Attempting to fetch from: ${path}`);
                const response = await fetch(path);
                if (response.ok) {
                    markdown = await response.text();
                    console.log(`Successfully loaded from: ${path}`);
                    break;
                }
            } catch (error) {
                lastError = error;
                console.warn(`Failed to load from ${path}:`, error);
            }
        }
        
        if (!markdown) {
            throw new Error(`Blog post not found. Last error: ${lastError?.message}`);
        }
        
        return markdown;
    } catch (error) {
        console.error('Error loading blog post:', error);
        console.error('Post ID:', postId);
        console.error('Current URL:', window.location.href);
        console.error('Origin:', window.location.origin);
        return null;
    }
}

// Parse markdown and extract front matter
function parseMarkdown(markdown) {
    // Remove front matter (everything between --- markers at the start)
    const frontMatterRegex = /^---\r?\n[\s\S]*?\r?\n---\r?\n/;
    const contentWithoutFrontMatter = markdown.replace(frontMatterRegex, '');
    
    return {
        content: contentWithoutFrontMatter.trim()
    };
}

// Generate table of contents
function generateTOC(content) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    const headings = tempDiv.querySelectorAll('h2');
    const tocNav = document.getElementById('toc-nav');
    
    if (headings.length === 0) {
        tocNav.innerHTML = '<p style="color: #888; font-size: 0.9rem;">No sections available</p>';
        return;
    }
    
    headings.forEach((heading, index) => {
        const id = `section-${index}`;
        heading.id = id;
        
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.className = 'toc-link';
        link.textContent = heading.textContent;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        });
        
        tocNav.appendChild(link);
    });
    
    // Return the modified content
    return tempDiv.innerHTML;
}

// Render related articles
function renderRelatedArticles(currentPostId) {
    const relatedGrid = document.getElementById('related-articles-grid');
    const otherPosts = blogPosts.filter(post => post.id !== currentPostId).slice(0, 3);
    
    relatedGrid.innerHTML = otherPosts.map((post, index) => `
        <div class="related-card" onclick="window.location.href='blog-post.html?id=${post.id}'">
            <div class="related-card-image" style="background: ${generateGradient(index)};"></div>
            <div class="related-card-content">
                <div class="related-card-category">${post.category.toUpperCase()}</div>
                <h3 class="related-card-title">${post.title}</h3>
                <p class="related-card-description">${post.excerpt}</p>
            </div>
        </div>
    `).join('');
}

// Load and render blog post
async function loadBlogPost() {
    const postId = getUrlParameter('id');
    
    if (!postId) {
        window.location.href = 'blog.html';
        return;
    }
    
    // Find post metadata
    const post = blogPosts.find(p => p.id === postId);
    
    if (!post) {
        window.location.href = 'blog.html';
        return;
    }
    
    // Update page metadata
    document.getElementById('page-title').textContent = `${post.title} - DocuXray`;
    document.getElementById('page-description').setAttribute('content', post.excerpt);
    
    // Update article header
    document.getElementById('article-title').textContent = post.title;
    document.getElementById('author-initials').textContent = getInitials(post.author);
    document.getElementById('author-name').textContent = post.author;
    document.getElementById('author-role').textContent = post.authorRole;
    document.getElementById('article-date').textContent = formatDate(post.date);
    
    // Load and render markdown content
    const markdown = await loadMarkdownContent(postId);
    
    if (markdown) {
        const { content } = parseMarkdown(markdown);
        const htmlContent = marked.parse(content);
        
        // Generate TOC and update content with IDs
        const contentWithIds = generateTOC(htmlContent);
        document.getElementById('article-body').innerHTML = contentWithIds;
    } else {
        document.getElementById('article-body').innerHTML = `
            <div style="padding: 2rem; text-align: center; background: #fff3cd; border: 1px solid #ffc107; border-radius: 8px; margin: 2rem 0;">
                <h3 style="color: #856404; margin-bottom: 1rem;">⚠️ Error Loading Blog Post</h3>
                <p style="color: #856404; margin-bottom: 1rem;">We couldn't load the blog post content. This might be due to:</p>
                <ul style="color: #856404; text-align: left; max-width: 500px; margin: 0 auto 1rem;">
                    <li>The markdown file is not deployed to the server</li>
                    <li>Server configuration preventing .md file access</li>
                    <li>Path resolution issues in your deployment</li>
                </ul>
                <p style="color: #856404; margin-bottom: 1rem;">
                    <strong>For developers:</strong> Check the browser console for detailed error messages.
                </p>
                <button onclick="window.location.href='blog.html'" style="padding: 0.75rem 1.5rem; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">
                    ← Back to Blog List
                </button>
            </div>
        `;
    }
    
    // Render related articles
    renderRelatedArticles(postId);
    
    // Setup active TOC link on scroll
    setupTOCScrollSpy();
}

// Setup TOC scroll spy
function setupTOCScrollSpy() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = document.querySelectorAll('.article-body h2');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPost();
});

