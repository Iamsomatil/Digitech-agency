import { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { initAnalytics, trackPageView } from './utils/analytics';
import LoadingSpinner from './components/common/LoadingSpinner';
import HomeSections from './components/HomeSections';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  const location = useLocation();

  // Initialize analytics on component mount
  useEffect(() => {
    initAnalytics();
  }, []);

  // Track page view on route change
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  // Scroll to hash section when present (works for /#services etc.)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Delay to ensure route content is rendered
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);

  // If no hash, scroll to top on route change so content is visible
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomeSections />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;