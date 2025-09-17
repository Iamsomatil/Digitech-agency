import { Suspense, lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { initAnalytics, trackPageView } from './utils/analytics';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load components
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));

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
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;