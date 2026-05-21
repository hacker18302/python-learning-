import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Privacy Policy - PythonLearn",
  description: "Privacy Policy for PythonLearn - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="rounded-xl bg-card p-8 shadow-sm border border-border">
          <div className="prose prose-lg max-w-none space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to PythonLearn. We respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website and use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please read this Privacy Policy carefully. By accessing or using our website, you agree to the 
                collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Contact us through our contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Create an account (if applicable)</li>
                <li>Participate in quizzes or interactive features</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This information may include your name, email address, and any other information you choose to provide.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device and 
                usage patterns, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>IP address and browser type</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device identifiers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain 
                information. Cookies are small data files that are placed on your device. We use both session cookies 
                (which expire when you close your browser) and persistent cookies (which remain on your device until 
                deleted).
              </p>
              
              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Types of Cookies We Use</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong className="text-foreground">Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
                <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling certain cookies may limit 
                your ability to use some features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Advertising</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use third-party advertising services, including Google AdSense, to display advertisements on our 
                website. These services may use cookies and similar technologies to collect information about your 
                visits to this and other websites to provide relevant advertisements.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. 
                You can opt out of personalized advertising by visiting{" "}
                <a href="https://www.google.com/settings/ads" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google Ads Settings
                </a>.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For more information about how Google uses data, please visit{" "}
                <a href="https://policies.google.com/technologies/partner-sites" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Google&apos;s Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Provide, maintain, and improve our website and services</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Send you technical notices and support messages</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and abuse</li>
                <li>Personalize and improve your experience</li>
                <li>Display relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li><strong className="text-foreground">Service Providers:</strong> With third-party vendors who perform services on our behalf</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong className="text-foreground">With Your Consent:</strong> When you have given us permission to share your information</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to data portability</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website is intended for general audiences and is not directed at children under 13 years of age. 
                We do not knowingly collect personal information from children under 13. If you are a parent or 
                guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review 
                this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 rounded-lg bg-secondary/50 p-4">
                <p className="text-foreground font-semibold">PythonLearn</p>
                <p className="text-muted-foreground">Email: privacy@pythonlearn.com</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
