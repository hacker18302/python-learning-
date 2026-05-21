"use client";

import { useState, useRef } from "react";
import Editor, { OnMount } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const defaultCode = `# Welcome to PythonLearn Code Editor!
# Write your Python code here and click "Run Code" to see the output.

# Example: Hello World
print("Hello, World!")

# Example: Variables
name = "Python Learner"
age = 25

print(f"Welcome, {name}!")
print(f"You are {age} years old.")

# Example: Simple calculation
result = 10 + 20
print(f"10 + 20 = {result}")

# Try writing your own code below!
`;

const exampleCodes = [
  {
    name: "Hello World",
    code: `# Your first Python program
print("Hello, World!")
print("Welcome to Python programming!")`,
  },
  {
    name: "Variables",
    code: `# Working with variables
name = "Alice"
age = 25
city = "New York"

print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")

# Changing variable values
age = age + 1
print(f"Next year, you will be {age}")`,
  },
  {
    name: "Calculator",
    code: `# Simple calculator
num1 = 10
num2 = 5

print(f"{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} * {num2} = {num1 * num2}")
print(f"{num1} / {num2} = {num1 / num2}")
print(f"{num1} % {num2} = {num1 % num2}")
print(f"{num1} ** {num2} = {num1 ** num2}")`,
  },
  {
    name: "Lists",
    code: `# Working with lists
fruits = ["apple", "banana", "cherry", "date"]

print("All fruits:", fruits)
print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])

# Adding items
fruits.append("elderberry")
print("After append:", fruits)

# Looping through list
print("\\nAll fruits:")
for fruit in fruits:
    print(f"  - {fruit}")`,
  },
  {
    name: "Functions",
    code: `# Creating functions
def greet(name):
    """This function greets a person"""
    return f"Hello, {name}!"

def calculate_area(length, width):
    """Calculate rectangle area"""
    return length * width

# Using functions
message = greet("Python Learner")
print(message)

area = calculate_area(10, 5)
print(f"Area of rectangle: {area}")`,
  },
  {
    name: "Loops",
    code: `# For loop - counting
print("Counting from 1 to 5:")
for i in range(1, 6):
    print(i)

# For loop with list
print("\\nFruits:")
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"  - {fruit}")

# While loop
print("\\nCountdown:")
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blast off!")`,
  },
];

// Simulated Python execution (client-side simulation)
function simulatePythonExecution(code: string): string {
  const output: string[] = [];
  const variables: Record<string, unknown> = {};

  // Split code into lines
  const lines = code.split("\n");

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Skip empty lines and comments
    if (!trimmedLine || trimmedLine.startsWith("#")) {
      continue;
    }

    // Handle print statements
    const printMatch = trimmedLine.match(/^print\s*\((.*)\)\s*$/);
    if (printMatch) {
      let content = printMatch[1];

      // Handle f-strings
      if (content.startsWith('f"') || content.startsWith("f'")) {
        const quote = content[1];
        content = content.slice(2, -1);
        // Replace {variable} with actual values
        content = content.replace(/\{([^}]+)\}/g, (match, expr) => {
          try {
            // Handle simple expressions
            if (expr in variables) {
              return String(variables[expr]);
            }
            // Handle simple arithmetic in f-strings
            if (expr.includes("+") || expr.includes("-") || expr.includes("*") || expr.includes("/")) {
              const evalExpr = expr.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, (varName: string) => {
                return varName in variables ? String(variables[varName]) : varName;
              });
              try {
                return String(eval(evalExpr));
              } catch {
                return match;
              }
            }
            return match;
          } catch {
            return match;
          }
        });
        output.push(content);
      }
      // Handle regular strings
      else if (content.startsWith('"') || content.startsWith("'")) {
        const quote = content[0];
        // Check for simple string
        if (content.endsWith(quote)) {
          output.push(content.slice(1, -1).replace(/\\n/g, "\n"));
        }
      }
      // Handle multiple arguments
      else if (content.includes(",")) {
        const parts = content.split(",").map((part) => {
          part = part.trim();
          if (part.startsWith('"') || part.startsWith("'")) {
            return part.slice(1, -1);
          }
          if (part in variables) {
            return String(variables[part]);
          }
          // Try to evaluate simple expressions
          try {
            const evalPart = part.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, (varName: string) => {
              return varName in variables ? String(variables[varName]) : varName;
            });
            return String(eval(evalPart));
          } catch {
            return part;
          }
        });
        output.push(parts.join(" "));
      }
      // Handle variable or expression
      else {
        if (content in variables) {
          output.push(String(variables[content]));
        } else {
          // Try to evaluate expression
          try {
            const evalContent = content.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, (varName: string) => {
              return varName in variables ? String(variables[varName]) : varName;
            });
            output.push(String(eval(evalContent)));
          } catch {
            output.push(content);
          }
        }
      }
      continue;
    }

    // Handle simple variable assignment
    const assignMatch = trimmedLine.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)$/);
    if (assignMatch) {
      const [, varName, value] = assignMatch;
      let processedValue: unknown = value.trim();

      // String value
      if (
        (typeof processedValue === "string" && processedValue.startsWith('"') && processedValue.endsWith('"')) ||
        (typeof processedValue === "string" && processedValue.startsWith("'") && processedValue.endsWith("'"))
      ) {
        processedValue = (processedValue as string).slice(1, -1);
      }
      // List value
      else if (typeof processedValue === "string" && processedValue.startsWith("[") && processedValue.endsWith("]")) {
        try {
          processedValue = JSON.parse(processedValue.replace(/'/g, '"'));
        } catch {
          // Keep as string if parse fails
        }
      }
      // Number or expression
      else if (typeof processedValue === "string") {
        try {
          const evalValue = processedValue.replace(/[a-zA-Z_][a-zA-Z0-9_]*/g, (varName: string) => {
            return varName in variables ? String(variables[varName]) : varName;
          });
          processedValue = eval(evalValue);
        } catch {
          // Keep as string
        }
      }

      variables[varName] = processedValue;
      continue;
    }

    // Handle for loops (simplified)
    const forMatch = trimmedLine.match(/^for\s+(\w+)\s+in\s+range\s*\(\s*(\d+)\s*(?:,\s*(\d+))?\s*\)\s*:$/);
    if (forMatch) {
      // Skip for now - complex to handle
      continue;
    }
  }

  return output.join("\n") || "# No output generated. Try using print() to display results.";
}

export default function EditorPage() {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const editorRef = useRef<Parameters<OnMount>[0] | null>(null);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const runCode = () => {
    setIsRunning(true);
    setOutput("Running...");

    // Simulate a small delay for realism
    setTimeout(() => {
      try {
        const result = simulatePythonExecution(code);
        setOutput(result);
      } catch (error) {
        setOutput(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
      }
      setIsRunning(false);
    }, 500);
  };

  const loadExample = (exampleCode: string) => {
    setCode(exampleCode);
    setOutput("");
  };

  const clearOutput = () => {
    setOutput("");
  };

  const resetCode = () => {
    setCode(defaultCode);
    setOutput("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                Python Code Editor
              </h1>
              <p className="mt-1 text-muted-foreground">
                Write, run, and experiment with Python code directly in your browser.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={resetCode}
                className="text-sm"
              >
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Reset
              </Button>
              <Button
                onClick={runCode}
                disabled={isRunning}
                className="text-sm"
              >
                {isRunning ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Running...
                  </>
                ) : (
                  <>
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Run Code
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-4">
            {/* Examples Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border border-border bg-card p-4">
                <h3 className="font-semibold text-foreground mb-4">Example Code</h3>
                <div className="space-y-2">
                  {exampleCodes.map((example, index) => (
                    <button
                      key={index}
                      onClick={() => loadExample(example.code)}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-left text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary/5"
                    >
                      {example.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tips */}
              <div className="mt-6 rounded-lg border border-border bg-card p-4">
                <h3 className="font-semibold text-foreground mb-3">Quick Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Use print() to display output
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Comments start with #
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {"Use f-strings: f\"{var}\""}
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Python is case-sensitive
                  </li>
                </ul>
              </div>
            </div>

            {/* Editor and Output */}
            <div className="lg:col-span-3 space-y-6">
              {/* Code Editor */}
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-destructive/60" />
                      <div className="h-3 w-3 rounded-full bg-accent/60" />
                      <div className="h-3 w-3 rounded-full bg-primary/60" />
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">main.py</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Python 3.x (Simulated)</span>
                </div>
                <Editor
                  height="400px"
                  defaultLanguage="python"
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  onMount={handleEditorDidMount}
                  theme="vs-dark"
                  options={{
                    fontSize: 14,
                    fontFamily: "'Geist Mono', monospace",
                    minimap: { enabled: false },
                    padding: { top: 16, bottom: 16 },
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    lineNumbers: "on",
                    renderLineHighlight: "line",
                    tabSize: 4,
                    automaticLayout: true,
                  }}
                />
              </div>

              {/* Output */}
              <div className="overflow-hidden rounded-lg border border-border bg-card">
                <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-4 py-2">
                  <span className="text-sm font-medium text-foreground">Output</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearOutput}
                    className="h-7 text-xs"
                  >
                    Clear
                  </Button>
                </div>
                <div className="min-h-[150px] bg-[#1e1e1e] p-4">
                  <pre className="font-mono text-sm text-primary whitespace-pre-wrap">
                    {output || "# Output will appear here after you run your code..."}
                  </pre>
                </div>
              </div>

              {/* Info Banner */}
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-foreground font-medium">Simulated Python Environment</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      This editor simulates basic Python execution in your browser. It supports print statements, 
                      variables, f-strings, and simple expressions. For full Python functionality, install Python 
                      on your computer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
