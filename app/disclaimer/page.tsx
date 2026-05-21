import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Disclaimer - PythonLearn",
  description: "Disclaimer for PythonLearn - Educational content disclaimer and limitations.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            <span className="text-primary">Disclaimer</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="rounded-xl bg-card p-8 shadow-sm border border-border">
          <div className="prose prose-lg max-w-none space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">General Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on PythonLearn is for general educational and informational purposes only. 
                All content on this website is provided in good faith, and we make every effort to ensure the 
                information is accurate and up-to-date. However, we make no representation or warranty of any kind, 
                express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or 
                completeness of any information on the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Educational Purpose Only</h2>
              <p className="text-muted-foreground leading-relaxed">
                The tutorials, code examples, and educational materials provided on PythonLearn are intended 
                solely for educational purposes. This content is designed to help beginners learn Python 
                programming concepts and is not intended to serve as:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Professional programming advice or consultation</li>
                <li>Production-ready code for commercial applications</li>
                <li>A substitute for formal education or professional training</li>
                <li>A guarantee of employment or career advancement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">No Guarantee of Results</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide high-quality educational content, we cannot guarantee that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>You will achieve any specific learning outcomes or skill levels</li>
                <li>The content will meet your specific learning needs or objectives</li>
                <li>You will pass any examinations or certifications based on our content</li>
                <li>You will secure employment or advance your career by using our materials</li>
                <li>Our methods are the only or best way to learn Python programming</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Learning outcomes depend on many factors including your effort, prior knowledge, learning style, 
                and the time you dedicate to practice. Results vary from person to person.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Code Examples Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The code examples provided on this website are simplified for educational purposes. When using 
                these code examples, please note:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Code examples may not follow all production best practices</li>
                <li>Error handling may be simplified or omitted for clarity</li>
                <li>Security considerations may not be fully addressed</li>
                <li>Performance optimizations may not be implemented</li>
                <li>Code may need modification for use in real-world applications</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Always review, test, and adapt code examples before using them in your projects. We are not 
                responsible for any issues, damages, or losses resulting from the use of code examples from 
                this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Online Code Editor Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our online code editor is provided as a learning tool with the following limitations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>The editor simulates Python code execution and may not reflect actual Python behavior in all cases</li>
                <li>Some Python features or libraries may not be available</li>
                <li>Code execution results are for educational demonstration only</li>
                <li>We do not store or save your code (it may be lost when you leave the page)</li>
                <li>The editor is not suitable for development of production applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">External Links Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to external websites or resources. These links are provided for 
                convenience and informational purposes only. We do not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Endorse the content, products, or services of linked websites</li>
                <li>Guarantee the accuracy of information on linked websites</li>
                <li>Take responsibility for the privacy practices of linked websites</li>
                <li>Control the availability or content of linked resources</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Technology Changes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Python and programming technologies are constantly evolving. While we strive to keep our 
                content current:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Some information may become outdated as Python releases new versions</li>
                <li>Best practices and recommended approaches may change over time</li>
                <li>Library APIs and functions may be deprecated or modified</li>
                <li>New features may not be immediately covered in our lessons</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We recommend checking official Python documentation for the most up-to-date information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under no circumstances shall PythonLearn, its owners, employees, or contributors be liable 
                for any direct, indirect, incidental, consequential, special, or exemplary damages arising 
                from your use of this website or reliance on any information provided herein. This includes, 
                but is not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Loss of data or programs</li>
                <li>Loss of revenue or profits</li>
                <li>Failure to achieve desired learning outcomes</li>
                <li>Errors or bugs in code examples</li>
                <li>Service interruptions or website unavailability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed">
                By using this website, you acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>You use this website and its content at your own risk</li>
                <li>You are responsible for verifying information before acting on it</li>
                <li>You should test all code thoroughly before using it in any project</li>
                <li>You should seek professional advice for important programming decisions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Disclaimer, please contact us at:
              </p>
              <div className="mt-4 rounded-lg bg-secondary/50 p-4">
                <p className="text-foreground font-semibold">PythonLearn</p>
                <p className="text-muted-foreground">Email: support@pythonlearn.com</p>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
