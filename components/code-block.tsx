"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  output?: string;
  showLineNumbers?: boolean;
  title?: string;
}

export function CodeBlock({
  code,
  output,
  showLineNumbers = true,
  title,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  // Simple syntax highlighting
  const highlightLine = (line: string) => {
    // Keywords
    let highlighted = line.replace(
      /\b(def|class|if|elif|else|for|while|return|import|from|as|try|except|finally|with|in|not|and|or|is|None|True|False|break|continue|pass|raise|yield|lambda|global|nonlocal|assert|del)\b/g,
      '<span class="code-keyword">$1</span>'
    );

    // Strings (double and single quotes)
    highlighted = highlighted.replace(
      /(["'])(?:(?=(\\?))\2.)*?\1/g,
      '<span class="code-string">$&</span>'
    );

    // Comments
    highlighted = highlighted.replace(
      /(#.*)$/gm,
      '<span class="code-comment">$1</span>'
    );

    // Numbers
    highlighted = highlighted.replace(
      /\b(\d+\.?\d*)\b/g,
      '<span class="code-number">$1</span>'
    );

    // Function names
    highlighted = highlighted.replace(
      /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*(?=\()/g,
      '<span class="code-function">$1</span>'
    );

    return highlighted;
  };

  return (
    <div className="my-4 overflow-hidden rounded-lg border border-border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-destructive/60" />
            <div className="h-3 w-3 rounded-full bg-accent/60" />
            <div className="h-3 w-3 rounded-full bg-primary/60" />
          </div>
          {title && (
            <span className="ml-2 text-sm font-medium text-muted-foreground">
              {title}
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="h-8 text-xs"
        >
          {copied ? (
            <>
              <svg
                className="mr-1.5 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="mr-1.5 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </Button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                {showLineNumbers && (
                  <span className="mr-4 select-none text-muted-foreground/50 w-6 text-right">
                    {i + 1}
                  </span>
                )}
                <span
                  dangerouslySetInnerHTML={{ __html: highlightLine(line) || "&nbsp;" }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Output */}
      {output && (
        <div className="border-t border-border bg-secondary/30">
          <div className="px-4 py-2 text-xs font-medium text-muted-foreground">
            Output:
          </div>
          <pre className="px-4 pb-4 font-mono text-sm text-primary">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
