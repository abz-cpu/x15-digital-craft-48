import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Terms of Service | L&D Digital"
        description="Read L&D Digital's terms of service. Understand the terms and conditions for using our web development and AI automation services."
        keywords="terms of service, terms and conditions, website terms, service agreement"
      />
      <ScrollProgressBar />
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-16 md:pt-44 md:pb-24">
        <BreadcrumbNav />
        <h1 className="text-3xl md:text-5xl font-bold text-secondary mb-8 mt-4">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-foreground">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-GB')}</p>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using L&D Digital's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Services</h2>
            <p>L&D Digital provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Web development services</li>
              <li>AI automation solutions</li>
              <li>Website maintenance and support</li>
              <li>Consulting and technical advisory services</li>
            </ul>
            <p className="mt-4">
              Services are provided as described in individual project proposals, quotes, and agreements. We reserve the right to modify or discontinue services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Project Proposals and Quotes</h2>
            <p>
              All project proposals and quotes are valid for 30 days from the date of issue unless otherwise stated. Prices are subject to change based on project scope modifications.
            </p>
            <p className="mt-4">
              A project begins once you accept our proposal and make the initial payment as outlined in the agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Payment Terms</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Web Development Projects</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>50% deposit required before work begins</li>
              <li>50% due upon project completion and before final delivery</li>
              <li>Payment methods: Bank transfer, card payment, or as agreed</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">AI Automation Services</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Setup fees due before implementation begins</li>
              <li>Monthly fees billed in advance</li>
              <li>Cancellation requires 30 days notice</li>
            </ul>

            <p className="mt-4">
              Late payments may incur a fee of 5% per month. We reserve the right to suspend services for non-payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Intellectual Property</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Code & Technical Assets</h3>
            <p>
              L&D Digital retains ownership of all source code, frameworks, templates, and technical implementations created for your project. This ensures ongoing quality, security, and maintainability of your website.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Client Ownership</h3>
            <p>Upon full payment, you own:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Your domain name (registered in your name)</li>
              <li>All written content (copy, blog posts, descriptions)</li>
              <li>Images and media you provide</li>
              <li>Any custom graphics created specifically for your project</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Hosting Services</h3>
            <p>
              We provide and manage hosting services for your website. Your site remains accessible as long as your hosting agreement is active. You may request a copy of your content (text, images) at any time.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Pre-existing Materials</h3>
            <p>
              We retain ownership of pre-existing materials, frameworks, templates, and tools used in development.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Third-party Components</h3>
            <p>
              Projects may include third-party libraries and components subject to their own licenses (open-source or commercial).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Client Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide timely feedback and approvals</li>
              <li>Supply necessary content, images, and materials</li>
              <li>Respond to our requests within 7 days</li>
              <li>Ensure you have rights to all materials you provide</li>
              <li>Make timely payments as agreed</li>
            </ul>
            <p className="mt-4">
              Delays caused by lack of client input may result in project timeline extensions and additional fees.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Project Timeline</h2>
            <p>
              We provide estimated timelines for each project. Actual completion times may vary based on project complexity, client feedback speed, and scope changes.
            </p>
            <p className="mt-4">
              We are not liable for delays caused by third-party services, hosting providers, or circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">8. Revisions and Changes</h2>
            <p>
              Each project includes a specified number of revision rounds as outlined in the proposal. Additional revisions or scope changes may incur extra fees.
            </p>
            <p className="mt-4">
              Major scope changes require a new proposal and agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">9. Warranties and Disclaimers</h2>
            <p>
              We warrant that our work will be of professional quality and substantially conform to the agreed specifications.
            </p>
            <p className="mt-4">
              However, we do not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Specific business results or revenue</li>
              <li>Search engine rankings</li>
              <li>Compatibility with all future browser/device updates</li>
              <li>Uninterrupted or error-free operation</li>
            </ul>
            <p className="mt-4 font-semibold">
              SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">10. Limitation of Liability</h2>
            <p>
              Our total liability for any claims arising from our services is limited to the amount you paid us for the specific project or service.
            </p>
            <p className="mt-4">
              We are not liable for indirect, incidental, special, or consequential damages including loss of profits, data, or business opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">11. Support and Maintenance</h2>
            <p>
              Post-launch support terms vary by project. Basic support is typically included for 30 days after project delivery.
            </p>
            <p className="mt-4">
              Ongoing maintenance, updates, and support require a separate maintenance agreement or hourly billing arrangement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">12. Termination</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">By Client</h3>
            <p>
              You may terminate a project with written notice. You will be billed for work completed up to the termination date.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">By L&D Digital</h3>
            <p>
              We may terminate services if you breach these terms, fail to make payments, or if continuing the project is not feasible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">13. Confidentiality</h2>
            <p>
              We will keep your confidential information private and use it only for providing services to you. This obligation continues after project completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">14. Portfolio and Marketing</h2>
            <p>
              Unless you request otherwise, we may display your project in our portfolio and use it for marketing purposes. We will not disclose confidential business information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">15. Dispute Resolution</h2>
            <p>
              Any disputes will be governed by the laws of England and Wales. We encourage resolving disputes through good-faith negotiations before pursuing legal action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">16. Changes to Terms</h2>
            <p>
              We may update these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mt-8 mb-4">17. Contact Information</h2>
            <p>For questions about these Terms of Service, contact us:</p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> <a href="mailto:contact@luminousanddeliver.co.uk" className="text-primary hover:underline">contact@luminousanddeliver.co.uk</a></li>
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

export default Terms;