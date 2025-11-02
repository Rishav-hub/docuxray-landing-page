import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import HomePage from '@/pages/HomePage/HomePage';
import PricingPage from '@/pages/PricingPage/PricingPage';
import BlogPage from '@/pages/BlogPage/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage/BlogPostPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;

