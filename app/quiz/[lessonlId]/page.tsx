"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { quizzes, lessons, getQuizByLessonId } from "@/data/lessons";
import { cn } from "@/lib/utils";

interface QuizPageProps {
  params: Promise<{ lessonId: string }>;
}

export default function QuizPage({ params }: QuizPageProps) {
  const { lessonId } = use(params);
  const quiz = getQuizByLessonId(lessonId);
  const lesson = lessons.find((l) => l.id === lessonId);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  if (!quiz || !lesson) {
    notFound();
  }

  const question = quiz.questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined && selectedAnswers[currentQuestion] !== null;
  const isCorrect = selectedAnswers[currentQuestion] === question.correctAnswer;

  const handleSelectAnswer = (answerIndex: number) => {
    if (isAnswered) return;

    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setShowExplanation(false);
  };

  const correctCount = selectedAnswers.filter(
    (answer, index) => answer === quiz.questions[index].correctAnswer
  ).length;

  const scorePercentage = Math.round((correctCount / quiz.questions.length) * 100);

  const levelColors = {
    beginner: "bg-primary text-primary-foreground",
    intermediate: "bg-accent text-accent-foreground",
    advanced: "bg-chart-3 text-foreground",
  };

  // Results Screen
  if (showResult) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />

        <section className="py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <Card className="border-border bg-card text-center overflow-hidden">
              {/* Result Header */}
              <div className={cn(
                "py-8",
                scorePercentage >= 80 ? "bg-primary/10" : scorePercentage >= 50 ? "bg-accent/10" : "bg-destructive/10"
              )}>
                <div className={cn(
                  "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full",
                  scorePercentage >= 80 ? "bg-primary text-primary-foreground" : scorePercentage >= 50 ? "bg-accent text-accent-foreground" : "bg-destructive text-destructive-foreground"
                )}>
                  {scorePercentage >= 80 ? (
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : scorePercentage >= 50 ? (
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <h1 className="text-3xl font-bold text-foreground">
                  {scorePercentage >= 80 ? "Excellent!" : scorePercentage >= 50 ? "Good Job!" : "Keep Practicing!"}
                </h1>
                <p className="mt-2 text-muted-foreground">
                  {scorePercentage >= 80
                    ? "You have a great understanding of this topic!"
                    : scorePercentage >= 50
                    ? "You are on the right track. Review the lesson to improve."
                    : "Review the lesson and try again. You can do it!"}
                </p>
              </div>

              <CardContent className="py-8">
                {/* Score */}
                <div className="mb-8">
                  <div className="text-5xl font-bold text-foreground">{scorePercentage}%</div>
                  <p className="mt-2 text-muted-foreground">
                    {correctCount} out of {quiz.questions.length} correct
                  </p>
                </div>

                {/* Score Bar */}
                <div className="mb-8">
                  <div className="h-4 w-full rounded-full bg-secondary">
                    <div
                      className={cn(
                        "h-4 rounded-full transition-all",
                        scorePercentage >= 80 ? "bg-primary" : scorePercentage >= 50 ? "bg-accent" : "bg-destructive"
                      )}
                      style={{ width: `${scorePercentage}%` }}
                    />
                  </div>
                </div>

                {/* Question Review */}
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                  {quiz.questions.map((q, index) => {
                    const isCorrectAnswer = selectedAnswers[index] === q.correctAnswer;
                    return (
                      <div
                        key={q.id}
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium",
                          isCorrectAnswer
                            ? "bg-primary text-primary-foreground"
                            : "bg-destructive/20 text-destructive"
                        )}
                      >
                        {index + 1}
                      </div>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleRestartQuiz} variant="outline">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Retake Quiz
                  </Button>
                  <Button asChild>
                    <Link href={`/lesson/${lesson.slug}`}>
                      <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Review Lesson
                    </Link>
                  </Button>
                </div>

                <div className="mt-6">
                  <Link href="/quiz" className="text-sm text-primary hover:underline">
                    View All Quizzes
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/quiz" className="hover:text-primary">
              Quizzes
            </Link>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-foreground">{quiz.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-4">
            <div>
              <Badge className={levelColors[lesson.level]}>
                {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
              </Badge>
            </div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              {quiz.title}
            </h1>
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {quiz.questions.length}</span>
              <span>{Math.round(((currentQuestion + (isAnswered ? 1 : 0)) / quiz.questions.length) * 100)}% Complete</span>
            </div>
            <div className="h-2 w-full rounded-full bg-secondary">
              <div
                className="h-2 rounded-full bg-primary transition-all"
                style={{ width: `${((currentQuestion + (isAnswered ? 1 : 0)) / quiz.questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Question */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Card className="border-border bg-card">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                  Q{currentQuestion + 1}
                </span>
                <CardTitle className="text-xl text-foreground">{question.question}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {/* Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  const isCorrectOption = index === question.correctAnswer;
                  const showCorrectness = isAnswered;

                  return (
                    <button
                      key={index}
                      onClick={() => handleSelectAnswer(index)}
                      disabled={isAnswered}
                      className={cn(
                        "w-full rounded-lg border p-4 text-left transition-all",
                        !showCorrectness && "border-border bg-background hover:border-primary/50 hover:bg-primary/5",
                        showCorrectness && isCorrectOption && "border-primary bg-primary/10",
                        showCorrectness && isSelected && !isCorrectOption && "border-destructive bg-destructive/10",
                        showCorrectness && !isSelected && !isCorrectOption && "border-border bg-background opacity-50"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium shrink-0",
                          !showCorrectness && "bg-secondary text-foreground",
                          showCorrectness && isCorrectOption && "bg-primary text-primary-foreground",
                          showCorrectness && isSelected && !isCorrectOption && "bg-destructive text-destructive-foreground",
                          showCorrectness && !isSelected && !isCorrectOption && "bg-secondary text-muted-foreground"
                        )}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className={cn(
                          "font-medium",
                          showCorrectness && isCorrectOption && "text-primary",
                          showCorrectness && isSelected && !isCorrectOption && "text-destructive",
                          !showCorrectness && "text-foreground"
                        )}>
                          {option}
                        </span>
                        {showCorrectness && isCorrectOption && (
                          <svg className="ml-auto h-5 w-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {showCorrectness && isSelected && !isCorrectOption && (
                          <svg className="ml-auto h-5 w-5 text-destructive shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showExplanation && isAnswered && (
                <div className={cn(
                  "mt-6 rounded-lg border p-4",
                  isCorrect ? "border-primary/30 bg-primary/5" : "border-accent/30 bg-accent/5"
                )}>
                  <div className="flex items-start gap-3">
                    <div className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full shrink-0",
                      isCorrect ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                    )}>
                      {isCorrect ? (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className={cn(
                        "font-semibold",
                        isCorrect ? "text-primary" : "text-accent"
                      )}>
                        {isCorrect ? "Correct!" : "Not quite right"}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 0}
                >
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </Button>

                <div className="flex gap-1">
                  {quiz.questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentQuestion(index);
                        setShowExplanation(selectedAnswers[index] !== undefined && selectedAnswers[index] !== null);
                      }}
                      className={cn(
                        "h-2 w-2 rounded-full transition-all",
                        index === currentQuestion
                          ? "bg-primary w-4"
                          : selectedAnswers[index] !== undefined && selectedAnswers[index] !== null
                          ? "bg-primary/50"
                          : "bg-secondary"
                      )}
                    />
                  ))}
                </div>

                {isAnswered ? (
                  <Button onClick={handleNextQuestion}>
                    {currentQuestion === quiz.questions.length - 1 ? "See Results" : "Next"}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                ) : (
                  <Button disabled variant="outline">
                    Select an answer
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
