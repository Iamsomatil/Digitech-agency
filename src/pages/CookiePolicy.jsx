import { Link } from 'react-router-dom';

function CookiePolicy() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-display font-bold mb-6 text-gray-900">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-gray max-w-none">
          <p>
            This Cookie Policy explains what cookies are, how we use them, and the choices you have regarding cookies on this site.
          </p>

          <h2>What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help the site remember your actions and preferences.
          </p>

          <h2>How We Use Cookies</h2>
          <ul>
            <li>Essential cookies to enable core site functionality and security.</li>
            <li>Analytics cookies to understand how visitors interact with our site and improve the experience.</li>
            <li>Preference cookies to remember your choices (like language or theme).</li>
          </ul>

          <h2>Your Choices</h2>
          <ul>
            <li>You can set your browser to block or alert you about cookies. Some parts of the site may not work without essential cookies.</li>
            <li>You can opt out of analytics cookies via your browser or ad settings. See your browser’s help pages for instructions.</li>
          </ul>

          <h2>More Information</h2>
          <p>
            For details on how we handle your personal data, see our <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms-of-service">Terms of Service</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}

export default CookiePolicy;
