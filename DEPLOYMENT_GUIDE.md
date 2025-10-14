# Deployment Guide for DocuXray Landing Page

## Blog Post Loading Fix

This guide helps you resolve the "Error loading blog post content" issue when deploying your site.

## Problem

The blog posts are stored as markdown files in the `blogs/` directory. When deployed, these files need to be:
1. **Included in the deployment** (not ignored)
2. **Served with correct content type** (text/markdown)
3. **Accessible via HTTP requests** (not blocked by CORS)

## Solution

### For All Platforms

**Ensure the `blogs/` folder is deployed:**
- Check that your deployment platform includes the `blogs/` directory
- Verify that `.md` files are not being filtered out by `.gitignore` or deployment settings

### Platform-Specific Instructions

#### Netlify

1. **Use the provided `netlify.toml` configuration file** (already included)
2. Deploy your site normally
3. The configuration ensures:
   - Markdown files are served with correct content type
   - CORS headers allow fetching from same origin
   - Clean URLs work properly

#### Vercel

1. **Use the provided `vercel.json` configuration file** (already included)
2. Deploy via:
   ```bash
   vercel --prod
   ```
3. The configuration handles markdown file serving

#### GitHub Pages

1. **Add a `.nojekyll` file** to the root:
   ```bash
   touch .nojekyll
   ```
2. **Configure GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Select the branch to deploy from
   - Ensure the `blogs/` directory is not ignored

3. **Deploy the site**

#### Other Static Hosts (Apache, Nginx, etc.)

**Apache (.htaccess):**
```apache
# Serve markdown files with correct content type
AddType text/markdown .md

# Enable CORS for markdown files
<FilesMatch "\.(md)$">
    Header set Access-Control-Allow-Origin "*"
</FilesMatch>
```

**Nginx:**
```nginx
location ~* \.md$ {
    add_header Content-Type "text/markdown; charset=UTF-8";
    add_header Access-Control-Allow-Origin "*";
}
```

## Testing the Fix

1. **Open your deployed site**
2. **Navigate to the blog page** (blog.html)
3. **Click on any blog post**
4. **Open browser console (F12)**
5. **Check for error messages:**
   - You should see logs like: `Attempting to fetch from: ./blogs/...`
   - Success message: `Successfully loaded from: ./blogs/...`

## Troubleshooting

### Still Getting Errors?

**Check browser console:**
```
F12 → Console tab
```
Look for detailed error messages that show:
- Which paths were tried
- What failed and why
- Current URL and origin

**Common Issues:**

1. **404 Not Found:**
   - The `blogs/` folder was not deployed
   - Check your deployment logs
   - Verify files exist in the deployed version

2. **CORS Error:**
   - Server is blocking cross-origin requests
   - Add appropriate headers (see platform configs above)

3. **Wrong Content-Type:**
   - Server is serving .md files as plain text or octet-stream
   - Configure server to use `text/markdown` (see platform configs)

4. **Path Issues:**
   - Your site is deployed to a subdirectory (e.g., `username.github.io/project`)
   - Update `blog-post.js` to include the base path:
   ```javascript
   const basePath = '/your-project-name';
   const pathVariations = [
       `${basePath}/blogs/${postId}.md`,
       // ... other variations
   ];
   ```

### Manual Verification

**Check if blogs are accessible:**
1. Open: `https://your-site.com/blogs/msme-automate-document-processing.md`
2. You should see the markdown content
3. If you get 404, the files weren't deployed

## Files Modified

- `blog-post.js`: Enhanced path resolution with multiple fallback attempts
- `netlify.toml`: Netlify configuration for markdown file serving
- `vercel.json`: Vercel configuration for markdown file serving
- `DEPLOYMENT_GUIDE.md`: This guide

## Quick Checklist

- [ ] `blogs/` folder exists in deployment
- [ ] `.md` files are not in `.gitignore`
- [ ] Platform configuration file is included (`netlify.toml` or `vercel.json`)
- [ ] Markdown files are served with correct content type
- [ ] CORS headers allow same-origin requests
- [ ] Browser console shows successful fetch logs

## Need Help?

If you're still experiencing issues:
1. Share the browser console logs
2. Share the deployment platform you're using
3. Share the deployed URL
4. Check if you can access: `https://your-url.com/blogs/msme-automate-document-processing.md`

