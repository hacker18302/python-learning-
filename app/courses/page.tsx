import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { lessons, getLessonsByLevel } from "@/data/lessons";

const levelConfig = {
  beginner: {
    label: "Beginner",
    color: "bg-primary text-primary-foreground",
    description: "Start your Python journey with the fundamentals",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  intermediate: {
    label: "Intermediate",
    color: "bg-accent text-accent-foreground",
    description: "Build on your foundation with more complex concepts",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  advanced: {
    label: "Advanced",
    color: "bg-chart-3 text-foreground",
    description: "Master advanced topics and build real applications",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
};

export default function CoursesPage() {
  const beginnerLessons = getLessonsByLevel("beginner");
  const intermediateLessons = getLessonsByLevel("intermediate");
  const advancedLessons = getLessonsByLevel("advanced");

  const levelSections = [
    { level: "beginner" as const, lessons: beginnerLessons },
    { level: "intermediate" as const, lessons: intermediateLessons },
    { level: "advanced" as const, lessons: advancedLessons },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
              Python Courses
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Complete Python programming curriculum from basics to advanced topics.
              Each lesson includes detailed explanations, code examples, and practice questions.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {lessons.length} Lessons
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                50+ Code Examples
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Quizzes Included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {levelSections.map(({ level, lessons: levelLessons }, sectionIndex) => {
            const config = levelConfig[level];
            return (
              <div key={level} className={sectionIndex > 0 ? "mt-16" : ""}>
                {/* Level Header */}
                <div className="mb-8 flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${config.color}`}>
                    {config.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {config.label} Level
                    </h2>
                    <p className="text-muted-foreground">{config.description}</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    {levelLessons.length} Lessons
                  </Badge>
                </div>

                {/* Lessons Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {levelLessons.map((lesson, index) => (
                    <Link key={lesson.id} href={`/lesson/${lesson.slug}`}>
                      <Card className="group h-full border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                              {sectionIndex * 10 + index + 1}
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {lesson.duration}
                            </Badge>
                          </div>
                          <CardTitle className="mt-4 text-foreground group-hover:text-primary transition-colors">
                            {lesson.title}
                          </CardTitle>
                          <CardDescription>
                            {lesson.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {lesson.examples.length} Examples
                            </span>
                            <span className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                              Start Lesson
                              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Progress Banner */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-foreground">
            Ready to Test Your Knowledge?
          </h3>
          <p className="mt-4 text-muted-foreground">
            After completing lessons, take quizzes to reinforce your learning and track your progress.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Take a Quiz
              <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/editor"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Practice in Editor
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
