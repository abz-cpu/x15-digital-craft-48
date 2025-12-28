import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy | L&D Digital"
        description="Read L&D Digital's privacy policy. Learn how we collect, use, and protect your personal data in compliance with UK GDPR regulations."
        keywords="privacy policy, data protection, GDPR, cookies policy"
      />
      <ScrollProgressBar />
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 md:pt-44 md:pb-24">
        <BreadcrumbNav />
        <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-8 mt-4">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Introduction</h2>
            <p>
              L&D Digital ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out contact forms</li>
              <li>Request a quote or consultation</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email or WhatsApp</li>
            </ul>
            <p className="mt-4">This information may include: name, email address, phone number, company name, and any information you provide in messages.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you quotes, proposals, and project updates</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website. You can control cookie preferences through our cookie consent banner or your browser settings.
            </p>
            <p className="mt-4"><strong>Essential Cookies:</strong> Necessary for the website to function properly.</p>
            <p><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics).</p>
            <p><strong>Marketing Cookies:</strong> Used to deliver personalized advertisements (if applicable).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Data Sharing and Disclosure</h2>
            <p>We do not sell your personal data. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party services that help us operate our website (e.g., hosting, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Your Rights (UK GDPR)</h2>
            <p>Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at: <a href="mailto:luminusanddeliver@gmail.com" className="text-primary hover:underline">luminusanddeliver@gmail.com</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">8. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">9. Third-Party Services</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.</p>
            <p className="mt-4">Third-party services we use:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics (analytics)</li>
              <li>Tally Forms (form submissions)</li>
              <li>WhatsApp (customer communication)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">10. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18. We do not knowingly collect personal data from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last updated" date at the top of this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">12. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> <a href="mailto:luminusanddeliver@gmail.com" className="text-primary hover:underline">luminusanddeliver@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+447356260648" className="text-primary hover:underline">+44 7356 260648</a></li>
              <li><strong>Address:</strong> London, UK</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;