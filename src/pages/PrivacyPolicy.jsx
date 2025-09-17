import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-display font-bold mb-6 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-gray max-w-none">
          <p>
            Your privacy is important to us. This policy explains what information we collect, how we use it, and your rights.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>Contact details you provide (e.g., name, email, phone) via forms or newsletter signup.</li>
            <li>Usage data such as pages visited and interactions, collected via analytics.</li>
            <li>Technical data including IP address, browser type, and device information.</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide, maintain, and improve our services and website experience.</li>
            <li>To communicate with you, including responding to inquiries and sending updates.</li>
            <li>To analyze site performance and improve content relevance.</li>
          </ul>

          <h2>Cookies and Tracking</h2>
          <p>
            We use cookies and similar technologies to track activity and store certain information. See our <Link to="/cookie-policy">Cookie Policy</Link> for details.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with trusted service providers who help us operate our website and services, subject to confidentiality obligations.
          </p>

          <h2>Your Rights</h2>
          <ul>
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of marketing communications at any time.</li>
            <li>Disable non-essential cookies via your browser settings.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this policy or your data, contact us at <a href="mailto:Samsonoakinsanya@gmail.com">Samsonoakinsanya@gmail.com</a>.
          </p>

          <p>
            For terms governing your use of our site, please see our <Link to="/terms-of-service">Terms of Service</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
