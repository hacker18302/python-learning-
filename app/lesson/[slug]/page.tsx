import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CodeBlock } from "@/components/code-block";
import { lessons, getLessonBySlug, getQuizByLessonId } from "@/data/lessons";

interface LessonPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) return { title: "Lesson Not Found" };
  
  return {
    title: `${lesson.title} - PythonLearn`,
    description: lesson.description,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  
  if (!lesson) {
    notFound();
  }

  const quiz = getQuizByLessonId(lesson.id);
  const currentIndex = lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const levelColors = {
    beginner: "bg-primary text-primary-foreground",
    intermediate: "bg-accent text-accent-foreground",
    advanced: "bg-chart-3 text-foreground",
  };

  // Parse markdown-like content to HTML
  const parseContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let inList = false;
    let listItems: string[] = [];

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">
            {listItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line, index) => {
      // Headers
      if (line.startsWith("# ")) {
        flushList();
        elements.push(
          <h1 key={index} className="mt-8 text-3xl font-bold text-foreground first:mt-0">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        flushList();
        elements.push(
          <h2 key={index} className="mt-8 text-2xl font-bold text-foreground">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        flushList();
        elements.push(
          <h3 key={index} className="mt-6 text-xl font-semibold text-foreground">
            {line.slice(4)}
          </h3>
        );
      }
      // List items
      else if (line.startsWith("- ") || line.startsWith("* ")) {
        inList = true;
        listItems.push(line.slice(2));
      }
      // Numbered list
      else if (/^\d+\.\s/.test(line)) {
        inList = true;
        listItems.push(line.replace(/^\d+\.\s/, ""));
      }
      // Tables (skip for now, render as text)
      else if (line.startsWith("|")) {
        // Skip table formatting
      }
      // Bold text handling in regular paragraphs
      else if (line.trim() !== "") {
        flushList();
        // Process bold text
        const processedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        elements.push(
          <p
            key={index}
            className="mt-4 leading-relaxed text-muted-foreground first:mt-0"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Lesson Header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/courses" className="hover:text-primary">
              Courses
            </Link>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="capitalize">{lesson.level}</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground">{lesson.title}</span>
          </nav>

          {/* Title */}
          <div className="flex flex-wrap items-start gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className={levelColors[lesson.level]}>
                  {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
                </Badge>
                <Badge variant="outline">{lesson.category}</Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {lesson.duration}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                {lesson.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {lesson.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="prose prose-invert max-w-none">
            {parseContent(lesson.content)}
          </div>

          {/* Code Examples */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              Code Examples
            </h2>
            <p className="mt-2 text-muted-foreground">
              Practice with these examples to understand the concepts better.
            </p>

            <div className="mt-8 space-y-8">
              {lesson.examples.map((example, index) => (
                <Card key={index} className="border-border bg-card overflow-hidden">
                  <CardHeader className="bg-secondary/30">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-xs font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      {example.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CodeBlock
                      code={example.code}
                      output={example.output}
                      title="python"
                    />
                    <div className="border-t border-border bg-secondary/20 p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-sm text-muted-foreground">{example.explanation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Practice Questions */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              Practice Questions
            </h2>
            <p className="mt-2 text-muted-foreground">
              Try these exercises to test your understanding. Use the code editor to write and run your solutions.
            </p>

            <div className="mt-8 space-y-4">
              {lesson.practiceQuestions.map((question, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-accent font-bold text-sm shrink-0">
                        Q{index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-foreground font-medium">{question.question}</p>
                        <div className="mt-3 flex items-start gap-2 rounded-lg bg-secondary/50 p-3">
                          <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Hint:</span> {question.hint}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button asChild>
                <Link href="/editor">
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Open Code Editor
                </Link>
              </Button>
            </div>
          </div>

          {/* Quiz CTA */}
          {quiz && (
            <Card className="mt-16 border-primary/30 bg-primary/5">
              <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Ready to Test Your Knowledge?</h3>
                    <p className="text-sm text-muted-foreground">
                      Take the quiz for this lesson ({quiz.questions.length} questions)
                    </p>
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/quiz/${lesson.id}`}>
                    Take Quiz
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
            {prevLesson ? (
              <Link
                href={`/lesson/${prevLesson.slug}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/50 w-full sm:w-auto"
              >
                <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <div className="text-xs text-muted-foreground">Previous</div>
                  <div className="font-medium text-foreground">{prevLesson.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextLesson ? (
              <Link
                href={`/lesson/${nextLesson.slug}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/50 w-full sm:w-auto sm:text-right"
              >
                <div>
                  <div className="text-xs text-muted-foreground">Next</div>
                  <div className="font-medium text-foreground">{nextLesson.title}</div>
                </div>
                <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <Link
                href="/courses"
                className="flex items-center gap-3 rounded-lg border border-primary bg-primary px-4 py-3 text-primary-foreground transition-colors hover:bg-primary/90 w-full sm:w-auto justify-center"
              >
                View All Courses
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
