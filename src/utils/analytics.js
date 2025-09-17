// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual Measurement ID

// Initialize Google Analytics
export const initAnalytics = () => {
  // Add the Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize the data layer
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    'transport_url': 'https://pixelforge.africa',
    'first_party_collection': true
  });

  console.log('Google Analytics initialized');
};

// Track page views
export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// Track events
export const trackEvent = ({ action, category, label, value }) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent({
    action: 'form_submit',
    category: 'Engagement',
    label: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  trackEvent({
    action: 'button_click',
    category: 'Engagement',
    label: buttonName,
  });
};
