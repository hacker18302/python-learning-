import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export const metadata = {
  title: "About Us - PythonLearn",
  description: "Learn about PythonLearn - our mission to make Python programming accessible to everyone through interactive lessons and real examples.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About <span className="text-primary">PythonLearn</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Making Python programming accessible to everyone
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* What We Do */}
          <section className="mb-12 rounded-xl bg-card p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">What is PythonLearn?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              PythonLearn is a free online platform designed to help beginners learn Python programming 
              from scratch. We believe that everyone should have access to quality programming education, 
              regardless of their background or experience level.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our platform offers comprehensive lessons that cover everything from the very basics of 
              Python to advanced topics like Object-Oriented Programming, File Handling, and API 
              development. Each lesson is written in simple, easy-to-understand English with plenty 
              of real-world examples.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you want to start a career in software development, automate your daily tasks, 
              analyze data, or simply learn a new skill, PythonLearn is here to guide you on your journey.
            </p>
          </section>

          {/* Mission */}
          <section className="mb-12 rounded-xl bg-card p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our mission is to make programming education accessible, engaging, and effective for 
              learners worldwide. We want to break down the barriers that prevent people from learning 
              to code and empower them with the skills they need to succeed in the digital age.
            </p>
            <div className="grid gap-4 md:grid-cols-3 mt-6">
              <div className="rounded-lg bg-secondary/50 p-4 text-center">
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Lessons</div>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4 text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Code Examples</div>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4 text-center">
                <div className="text-3xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">Forever</div>
              </div>
            </div>
          </section>

          {/* What We Teach */}
          <section className="mb-12 rounded-xl bg-card p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">What We Teach</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-2">Beginner Level</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Introduction to Python</li>
                  <li>Variables and Data Types</li>
                  <li>Input and Output</li>
                  <li>Operators</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-2">Intermediate Level</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Loops and Control Flow</li>
                  <li>Functions</li>
                  <li>Lists and Tuples</li>
                  <li>Dictionaries</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-2">Advanced Level</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Object-Oriented Programming</li>
                  <li>File Handling</li>
                  <li>Error Handling</li>
                  <li>Working with APIs</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border p-4">
                <h3 className="font-semibold text-foreground mb-2">Practice</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Interactive Code Editor</li>
                  <li>Quizzes for Each Lesson</li>
                  <li>Practice Questions</li>
                  <li>Real Projects</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-12 rounded-xl bg-card p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose PythonLearn?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Simple Language</h3>
                  <p className="text-sm text-muted-foreground">All lessons are written in plain, simple English that anyone can understand.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Real Code Examples</h3>
                  <p className="text-sm text-muted-foreground">Every concept is explained with practical code examples you can run.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Interactive Learning</h3>
                  <p className="text-sm text-muted-foreground">Practice what you learn with our built-in code editor and quizzes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Completely Free</h3>
                  <p className="text-sm text-muted-foreground">All our content is free. No hidden costs or premium subscriptions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="rounded-xl bg-primary/5 p-8 text-center border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              We would love to hear from you. Feel free to reach out with any questions, 
              suggestions, or feedback.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
