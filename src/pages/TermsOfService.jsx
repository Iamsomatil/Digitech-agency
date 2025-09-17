import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-display font-bold mb-6 text-gray-900">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-gray max-w-none">
          <p>
            These Terms govern your use of our website and services. By accessing or using our site, you agree to be bound by these Terms.
          </p>

          <h2>Use of the Site</h2>
          <ul>
            <li>You must use the site only for lawful purposes and in accordance with these Terms.</li>
            <li>You agree not to attempt to gain unauthorized access to the site or its related systems.</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All content, features, and functionality are owned by us or our licensors and are protected by intellectual property laws.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The site is provided on an "as is" and "as available" basis without warranties of any kind, express or implied.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we will not be liable for any indirect, incidental, special, consequential, or punitive damages.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Changes are effective when posted on this page.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these Terms, please contact us at <a href="mailto:Samsonoakinsanya@gmail.com">Samsonoakinsanya@gmail.com</a>.
          </p>

          <p>
            See our <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/cookie-policy">Cookie Policy</Link> for more information.
          </p>
        </div>
      </div>
    </main>
  );
}

export default TermsOfService;
