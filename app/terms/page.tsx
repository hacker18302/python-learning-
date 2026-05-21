import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Terms & Conditions - PythonLearn",
  description: "Terms and Conditions for using PythonLearn - Read our rules and guidelines for using our Python learning platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="rounded-xl bg-card p-8 shadow-sm border border-border">
          <div className="prose prose-lg max-w-none space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to PythonLearn. These Terms and Conditions govern your use of our website and services. 
                By accessing or using our website, you agree to be bound by these Terms. If you disagree with 
                any part of these Terms, you may not access the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                PythonLearn provides free online educational content for learning Python programming. Our services include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Written tutorials and lessons on Python programming</li>
                <li>Interactive code examples and explanations</li>
                <li>An online code editor for practicing Python</li>
                <li>Quizzes to test your understanding</li>
                <li>Practice questions and exercises</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All educational content is provided free of charge for personal, non-commercial use.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using our website, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to disrupt or interfere with the website&apos;s operation</li>
                <li>Not use automated systems to access the website without permission</li>
                <li>Not copy, reproduce, or distribute our content without permission</li>
                <li>Not use the website to harm others or engage in illegal activities</li>
                <li>Provide accurate information when using contact forms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The content on PythonLearn, including but not limited to text, graphics, logos, images, code examples, 
                and software, is the property of PythonLearn or its content suppliers and is protected by copyright 
                and other intellectual property laws.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You may view, download, and print pages from the website for your personal, non-commercial use, 
                subject to the following restrictions:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>You must not republish material from this website without attribution</li>
                <li>You must not sell, rent, or sub-license material from the website</li>
                <li>You must not reproduce, duplicate, or copy material for commercial purposes</li>
                <li>Code examples may be used in your own projects with proper understanding</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Educational Content Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The educational content provided on PythonLearn is for informational and learning purposes only. 
                While we strive to provide accurate and up-to-date information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>We do not guarantee that the content is error-free or complete</li>
                <li>Programming languages and best practices evolve over time</li>
                <li>Code examples are simplified for educational purposes</li>
                <li>You should verify information and test code before using it in production</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Code Editor Usage</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our online code editor is provided as a learning tool. When using the code editor:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Do not execute malicious or harmful code</li>
                <li>Do not attempt to access unauthorized resources</li>
                <li>Do not use it for any illegal purposes</li>
                <li>Code execution is simulated and may not reflect actual Python behavior</li>
                <li>We are not responsible for any issues arising from code you execute</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Links and Advertisements</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites and display advertisements from third-party 
                advertising networks. We are not responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>The content, accuracy, or opinions expressed on third-party websites</li>
                <li>The privacy practices of third-party websites</li>
                <li>Products or services advertised by third parties</li>
                <li>Any transactions you conduct with third parties</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We encourage you to read the terms and privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by applicable law, PythonLearn and its affiliates, officers, 
                employees, agents, partners, and licensors shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including without limitation:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                <li>Errors, mistakes, or inaccuracies in content</li>
                <li>Personal injury or property damage resulting from your use of the service</li>
                <li>Unauthorized access to or use of our servers</li>
                <li>Interruption or cessation of transmission to or from the service</li>
                <li>Bugs, viruses, or other harmful components transmitted through the service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold harmless PythonLearn and its affiliates, licensors, 
                and service providers from and against any claims, liabilities, damages, judgments, awards, 
                losses, costs, expenses, or fees arising out of or relating to your violation of these Terms 
                or your use of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or replace these Terms at any time at our sole discretion. 
                We will provide notice of any material changes by updating the &quot;Last updated&quot; date at the 
                top of these Terms. Your continued use of the website after any such changes constitutes 
                your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to the website immediately, without prior notice 
                or liability, for any reason whatsoever, including without limitation if you breach these Terms. 
                All provisions of these Terms which by their nature should survive termination shall survive 
                termination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed and construed in accordance with applicable laws, without regard 
                to its conflict of law provisions. Our failure to enforce any right or provision of these 
                Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 rounded-lg bg-secondary/50 p-4">
                <p className="text-foreground font-semibold">PythonLearn</p>
                <p className="text-muted-foreground">Email: legal@pythonlearn.com</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
