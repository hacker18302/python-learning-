import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Interactive Coding",
    description: "Write and run Python code directly in your browser with our built-in code editor. No installation needed.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Real Examples",
    description: "Every lesson includes multiple code examples with detailed explanations and expected outputs.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Beginner Friendly",
    description: "Clear explanations in simple English. Each concept is explained step by step with examples.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Practice Questions",
    description: "Test your knowledge with practice questions and quizzes at the end of each lesson.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Progress Tracking",
    description: "Track your learning progress as you complete lessons and quizzes throughout the course.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Project Based",
    description: "Build real projects as you learn. Apply your knowledge to create actual Python programs.",
  },
];

const levels = [
  {
    level: "Beginner",
    color: "bg-primary",
    topics: ["What is Python", "Variables", "Data Types", "Input/Output", "Operators"],
    description: "Start your Python journey from the very basics.",
  },
  {
    level: "Intermediate",
    color: "bg-accent",
    topics: ["Loops", "Functions", "Lists & Tuples", "Dictionaries"],
    description: "Build on your foundation with more complex concepts.",
  },
  {
    level: "Advanced",
    color: "bg-chart-3",
    topics: ["OOP", "File Handling", "APIs", "Projects"],
    description: "Master advanced topics and build real applications.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(74,222,128,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.1),transparent_50%)]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Free Python Course
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Learn Python from{" "}
              <span className="text-primary">Zero</span> to{" "}
              <span className="text-accent">Pro</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Master Python programming with our comprehensive course. Interactive lessons, 
              real code examples, and hands-on practice. Perfect for complete beginners.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-base px-8">
                <Link href="/courses">
                  Start Learning
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link href="/editor">
                  Try Code Editor
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div>
                <div className="text-3xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">Lessons</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Examples</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Quizzes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Free</div>
              </div>
            </div>
          </div>

          {/* Code Preview */}
          <div className="mt-20">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
              {/* Editor Header */}
              <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-accent/60" />
                  <div className="h-3 w-3 rounded-full bg-primary/60" />
                </div>
                <span className="ml-2 text-sm text-muted-foreground">hello.py</span>
              </div>
              {/* Code Content */}
              <div className="p-6">
                <pre className="font-mono text-sm">
                  <code>
                    <span className="text-muted-foreground"># Your first Python program</span>
                    {"\n"}
                    <span className="text-[oklch(0.7_0.15_320)]">print</span>
                    <span className="text-foreground">(</span>
                    <span className="text-primary">{'"Hello, World!"'}</span>
                    <span className="text-foreground">)</span>
                    {"\n\n"}
                    <span className="text-muted-foreground"># Variables are easy</span>
                    {"\n"}
                    <span className="text-foreground">name = </span>
                    <span className="text-primary">{'"Python Learner"'}</span>
                    {"\n"}
                    <span className="text-foreground">age = </span>
                    <span className="text-accent">25</span>
                    {"\n\n"}
                    <span className="text-[oklch(0.7_0.15_320)]">print</span>
                    <span className="text-foreground">(</span>
                    <span className="text-primary">f{'"Welcome, {name}!"'}</span>
                    <span className="text-foreground">)</span>
                  </code>
                </pre>
              </div>
              {/* Output */}
              <div className="border-t border-border bg-secondary/30 px-6 py-4">
                <div className="text-xs text-muted-foreground mb-2">Output:</div>
                <pre className="font-mono text-sm text-primary">
                  Hello, World!{"\n"}Welcome, Python Learner!
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Learn Python With Us?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to become a Python programmer
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-border bg-background transition-all hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Levels Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Structured Learning Path
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Progress from beginner to advanced at your own pace
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {levels.map((level, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                {/* Level Badge */}
                <div className={`inline-flex items-center rounded-full ${level.color} px-3 py-1 text-sm font-medium text-primary-foreground`}>
                  {level.level}
                </div>

                <p className="mt-4 text-muted-foreground">{level.description}</p>

                {/* Topics */}
                <ul className="mt-6 space-y-3">
                  {level.topics.map((topic, i) => (
                    <li key={i} className="flex items-center text-sm text-foreground">
                      <svg
                        className="mr-2 h-5 w-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>

                {/* Arrow decoration */}
                {index < levels.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-muted-foreground md:block">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/courses">
                View All Courses
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ready to Start Your Python Journey?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of learners who have mastered Python programming with our course.
            Start learning today - it is completely free!
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/courses">
                Start Learning Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <Link href="/editor">
                Try Code Editor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
