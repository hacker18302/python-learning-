export interface Lesson {
  id: string;
  title: string;
  slug: string;
  level: "beginner" | "intermediate" | "advanced";
  category: string;
  duration: string;
  description: string;
  content: string;
  examples: {
    title: string;
    code: string;
    output: string;
    explanation: string;
  }[];
  practiceQuestions: {
    question: string;
    hint: string;
  }[];
}

export interface Quiz {
  id: string;
  lessonId: string;
  title: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

export const lessons: Lesson[] = [
  {
    id: "1",
    title: "What is Python?",
    slug: "what-is-python",
    level: "beginner",
    category: "Introduction",
    duration: "15 min",
    description: "Learn what Python is and why it is one of the most popular programming languages in the world.",
    content: `# What is Python?

Python is a high-level, interpreted programming language that was created by Guido van Rossum and first released in 1991. The name "Python" comes from the British comedy group Monty Python, not from the snake! Python is known for its simple and easy-to-read syntax, which makes it an excellent choice for beginners who are just starting their programming journey.

## Why Learn Python?

Python has become one of the most popular programming languages in the world, and there are many good reasons for this:

### 1. Easy to Learn and Read

Python was designed with simplicity in mind. Its syntax is clean and straightforward, which means you can focus on learning programming concepts rather than struggling with complicated syntax rules. When you write Python code, it almost reads like plain English, making it easier to understand what the code does.

### 2. Versatile and Powerful

Python is used in many different areas of technology. You can use Python to build websites, create games, analyze data, build artificial intelligence systems, automate tasks, and much more. This versatility means that once you learn Python, you can apply your skills in many different directions.

### 3. Large Community and Support

Python has a huge community of developers around the world. This means you can easily find help when you get stuck, access thousands of free tutorials, and use millions of pre-built code packages that make your work easier. The community is very welcoming to beginners.

### 4. High Demand in Jobs

Companies like Google, Netflix, Instagram, Spotify, and NASA all use Python in their systems. Learning Python can open doors to many career opportunities in software development, data science, machine learning, and web development.

## How Python Works

When you write Python code, the computer needs to understand what you want it to do. Python is an interpreted language, which means your code is read and executed line by line by a program called the Python interpreter. You do not need to compile your code before running it, which makes the development process faster and easier.

## Python Philosophy

Python follows a philosophy called "The Zen of Python" which includes principles like:
- Beautiful is better than ugly
- Simple is better than complex
- Readability counts
- There should be one obvious way to do it

These principles guide how Python is designed and how Python programmers write their code.

## Getting Started

To start writing Python code, you need to have Python installed on your computer. However, in this course, we provide an online code editor where you can write and run Python code directly in your browser without installing anything!

In the next lessons, we will start writing our first Python programs and learn about variables, data types, and basic operations. Get ready to begin your programming journey!`,
    examples: [
      {
        title: "Your First Python Program",
        code: `# This is a comment - Python ignores this line
print("Hello, World!")
print("Welcome to Python programming!")`,
        output: `Hello, World!
Welcome to Python programming!`,
        explanation: "The print() function displays text on the screen. Text inside quotes is called a string. Comments start with # and are ignored by Python."
      },
      {
        title: "Basic Math in Python",
        code: `# Python can do math calculations
print(5 + 3)
print(10 - 4)
print(6 * 7)
print(20 / 4)`,
        output: `8
6
42
5.0`,
        explanation: "Python can perform mathematical operations like addition (+), subtraction (-), multiplication (*), and division (/). The results are displayed using print()."
      },
      {
        title: "Combining Text and Numbers",
        code: `# You can combine text with calculations
print("The result of 10 + 5 is:", 10 + 5)
print("Python is", 2024 - 1991, "years old!")`,
        output: `The result of 10 + 5 is: 15
Python is 33 years old!`,
        explanation: "You can print multiple items by separating them with commas. Python will automatically add spaces between them."
      }
    ],
    practiceQuestions: [
      {
        question: "Write a program that prints your name and your age on separate lines.",
        hint: "Use two print() statements, one for your name and one for your age."
      },
      {
        question: "Write a program that calculates and prints the result of 25 multiplied by 4.",
        hint: "Use print() with the multiplication operator (*)."
      },
      {
        question: "Write a program that prints a message saying how many days are in a year.",
        hint: "You can combine text and numbers in print() using commas."
      }
    ]
  },
  {
    id: "2",
    title: "Variables in Python",
    slug: "variables",
    level: "beginner",
    category: "Basics",
    duration: "20 min",
    description: "Learn how to store and use data in Python using variables.",
    content: `# Variables in Python

Variables are one of the most fundamental concepts in programming. Think of a variable as a container or a box that stores a value. You can give this container a name, and then use that name to access or change the value stored inside it.

## What is a Variable?

In real life, you might label a box "Books" to remember what is inside it. Similarly, in Python, you create a variable with a name and store a value in it. Later, you can use the variable name to get that value back.

## Creating Variables in Python

Creating a variable in Python is very simple. You just write the variable name, followed by an equals sign (=), and then the value you want to store. This is called assignment.

### Variable Naming Rules

When naming your variables, you must follow these rules:

1. **Start with a letter or underscore**: Variable names must begin with a letter (a-z, A-Z) or an underscore (_). They cannot start with a number.

2. **Use only letters, numbers, and underscores**: After the first character, you can use letters, numbers, and underscores. No spaces or special characters like @, #, $, etc.

3. **Case sensitive**: Python treats uppercase and lowercase letters as different. So "name", "Name", and "NAME" are three different variables.

4. **Cannot use reserved words**: Python has special keywords like "print", "if", "for", etc. You cannot use these as variable names.

### Good Variable Naming Practices

While Python allows many variable names, good programmers follow these practices:

- Use descriptive names: "student_age" is better than "x"
- Use lowercase letters with underscores for multiple words: "first_name" (this is called snake_case)
- Make names meaningful but not too long
- Avoid single letters except for simple counters

## How Variables Work

When you create a variable, Python does several things:
1. It reserves a space in the computer's memory
2. It stores the value you specified in that memory space
3. It creates a connection between the variable name and that memory location

When you use the variable name later, Python looks up that connection and retrieves the stored value.

## Changing Variable Values

One powerful feature of variables is that you can change their values. When you assign a new value to an existing variable, the old value is replaced with the new one.

## Multiple Assignment

Python allows you to assign values to multiple variables in a single line. This can make your code shorter and cleaner.

## Variable Types

Python is a dynamically typed language, which means you do not need to declare what type of data a variable will hold. Python figures this out automatically based on the value you assign. We will learn more about different data types in the next lesson.

## Why Variables Are Important

Variables are essential because they allow your programs to:
- Store information for later use
- Perform calculations with changing values
- Make your code more readable and organized
- Reuse values without typing them again
- Create interactive programs that work with user input

Understanding variables well is crucial because almost every Python program you write will use them!`,
    examples: [
      {
        title: "Creating and Using Variables",
        code: `# Creating variables
name = "Alice"
age = 25
city = "New York"

# Using variables with print
print("Name:", name)
print("Age:", age)
print("City:", city)`,
        output: `Name: Alice
Age: 25
City: New York`,
        explanation: "We create three variables (name, age, city) and assign values to them. Then we use these variables in print() statements to display their values."
      },
      {
        title: "Changing Variable Values",
        code: `# Initial value
score = 100
print("Starting score:", score)

# Changing the value
score = 150
print("New score:", score)

# Using math to change value
score = score + 50
print("After bonus:", score)`,
        output: `Starting score: 100
New score: 150
After bonus: 200`,
        explanation: "Variables can be changed after they are created. You can assign a completely new value or use the current value in a calculation to create a new value."
      },
      {
        title: "Multiple Assignment",
        code: `# Assign multiple variables at once
x, y, z = 10, 20, 30
print("x =", x)
print("y =", y)
print("z =", z)

# Assign same value to multiple variables
a = b = c = 100
print("a, b, c are all:", a, b, c)`,
        output: `x = 10
y = 20
z = 30
a, b, c are all: 100 100 100`,
        explanation: "Python allows you to assign values to multiple variables in one line. You can also assign the same value to multiple variables at once."
      }
    ],
    practiceQuestions: [
      {
        question: "Create three variables: your_name, your_age, and your_country. Assign appropriate values and print them.",
        hint: "Use descriptive variable names and remember to put text values in quotes."
      },
      {
        question: "Create a variable called price with value 50, then increase it by 25, and print the final price.",
        hint: "You can use price = price + 25 to increase the value."
      },
      {
        question: "Create two variables for length and width of a rectangle, then calculate and print the area.",
        hint: "Area of a rectangle = length * width. Store this in a new variable called area."
      }
    ]
  },
  {
    id: "3",
    title: "Data Types",
    slug: "data-types",
    level: "beginner",
    category: "Basics",
    duration: "25 min",
    description: "Understand the different types of data you can work with in Python.",
    content: `# Data Types in Python

In Python, every piece of data has a type. Understanding data types is essential because different types of data behave differently and can do different things. Python has several built-in data types, and in this lesson, we will learn about the most common ones.

## Why Data Types Matter

Imagine you want to add two things together. If you add two numbers like 5 + 3, you get 8. But if you add two words like "Hello" + "World", you get "HelloWorld". The same operation (+) does different things depending on the data type. This is why understanding data types is important.

## Basic Data Types in Python

### 1. Integers (int)

Integers are whole numbers without any decimal point. They can be positive, negative, or zero. Integers are used when you need to count things or work with whole numbers.

Examples: 1, 42, -10, 0, 1000000

### 2. Floating-Point Numbers (float)

Floats are numbers that have a decimal point. They are used when you need more precision or when working with measurements, percentages, or calculations that might not result in whole numbers.

Examples: 3.14, -0.5, 100.0, 2.5

### 3. Strings (str)

Strings are sequences of characters. They are used to store text. In Python, you create strings by putting text inside quotes. You can use single quotes ('hello'), double quotes ("hello"), or triple quotes for multi-line strings.

Examples: "Hello", 'Python', "123" (yes, numbers in quotes are strings!)

### 4. Booleans (bool)

Booleans can only have two values: True or False. They are used to represent yes/no or on/off situations. Booleans are very important for making decisions in your programs.

Examples: True, False

## Checking Data Types

Python has a built-in function called type() that tells you what type of data you are working with. This is very useful when you are not sure about a variable's type.

## Type Conversion

Sometimes you need to convert data from one type to another. Python provides functions for this:

- int() - converts to integer
- float() - converts to float
- str() - converts to string
- bool() - converts to boolean

This process is called type casting or type conversion.

## Important Points About Type Conversion

1. Converting a float to int removes the decimal part (it does not round)
2. Converting a string to a number only works if the string contains a valid number
3. Converting to boolean: 0, 0.0, and empty strings become False; everything else becomes True

## None Type

Python has a special value called None, which represents the absence of a value. It is often used to indicate that a variable has no value assigned yet or that a function does not return anything.

## Dynamic Typing

Python is dynamically typed, which means:
- You do not need to declare a variable's type before using it
- A variable can change its type when you assign a new value
- Python figures out the type automatically based on the value

This makes Python flexible and easy to use, but you should still be aware of what types you are working with to avoid errors.`,
    examples: [
      {
        title: "Different Data Types",
        code: `# Integer
age = 25
print("Age:", age, "- Type:", type(age))

# Float
temperature = 98.6
print("Temperature:", temperature, "- Type:", type(temperature))

# String
name = "Python"
print("Name:", name, "- Type:", type(name))

# Boolean
is_sunny = True
print("Is Sunny:", is_sunny, "- Type:", type(is_sunny))`,
        output: `Age: 25 - Type: <class 'int'>
Temperature: 98.6 - Type: <class 'float'>
Name: Python - Type: <class 'str'>
Is Sunny: True - Type: <class 'bool'>`,
        explanation: "We create variables of different types and use type() to check each one. Notice how Python automatically detects the type based on the value."
      },
      {
        title: "Type Conversion",
        code: `# Converting between types
number_string = "42"
number_int = int(number_string)
print("String to Int:", number_int, type(number_int))

decimal = 3.7
whole = int(decimal)
print("Float to Int:", whole, "(decimal removed)")

age = 25
age_string = str(age)
print("Int to String:", age_string, type(age_string))`,
        output: `String to Int: 42 <class 'int'>
Float to Int: 3 (decimal removed)
Int to String: 25 <class 'str'>`,
        explanation: "Type conversion functions (int(), float(), str()) change data from one type to another. Note that converting float to int removes the decimal part."
      },
      {
        title: "String Operations",
        code: `# Strings can be combined (concatenated)
first_name = "John"
last_name = "Smith"
full_name = first_name + " " + last_name
print("Full Name:", full_name)

# Strings can be repeated
line = "-" * 20
print(line)

# Finding string length
message = "Hello, Python!"
print("Message length:", len(message))`,
        output: `Full Name: John Smith
--------------------
Message length: 14`,
        explanation: "Strings support special operations: + combines strings together, * repeats a string, and len() returns the number of characters in a string."
      }
    ],
    practiceQuestions: [
      {
        question: "Create variables of each type (int, float, str, bool) and print their types using the type() function.",
        hint: "Use type() inside print() to show the type of each variable."
      },
      {
        question: "Convert the string '123' to an integer, add 77 to it, and print the result.",
        hint: "Use int() to convert the string, then perform the addition."
      },
      {
        question: "Create two strings for first name and last name, combine them with a space, and print the full name along with its length.",
        hint: "Use + to combine strings and len() to find the length."
      }
    ]
  },
  {
    id: "4",
    title: "Input and Output",
    slug: "input-output",
    level: "beginner",
    category: "Basics",
    duration: "20 min",
    description: "Learn how to take input from users and display output in Python.",
    content: `# Input and Output in Python

Every useful program needs to communicate with its users. This communication happens through input (receiving information from the user) and output (displaying information to the user). In this lesson, we will learn how Python handles both.

## Output with print()

We have already used the print() function many times. It is the main way to display information to the user in Python. Let us explore its features in more detail.

### Basic Printing

The simplest use of print() is to display a message:
- print("Hello!") displays Hello!
- print(42) displays 42
- print(3.14) displays 3.14

### Printing Multiple Items

You can print multiple items by separating them with commas. Python automatically adds a space between each item.

### The sep Parameter

By default, print() separates items with a space. You can change this using the sep parameter.

### The end Parameter

By default, print() adds a new line at the end. You can change this using the end parameter.

## Input with input()

The input() function allows your program to receive information from the user. When Python reaches an input() statement, it pauses and waits for the user to type something and press Enter.

### How input() Works

1. Python displays the prompt message (if provided)
2. The program pauses and waits
3. The user types something and presses Enter
4. Whatever the user typed is returned as a string

### Important: input() Always Returns a String

No matter what the user types, input() always returns it as a string. If you need a number, you must convert it using int() or float().

## Building Interactive Programs

By combining input() and print(), you can create programs that have conversations with the user. This is the foundation of interactive programming.

## Formatting Output

Python provides several ways to create nicely formatted output:

### 1. String Concatenation
Combining strings with + operator. Remember to convert numbers to strings first!

### 2. Comma Separation
Using commas in print() automatically adds spaces.

### 3. f-strings (Formatted String Literals)
The most modern and recommended way. Put f before the string and use {variable} to insert values.

### 4. format() Method
An older but still useful method using placeholders.

## Common Mistakes to Avoid

1. Forgetting that input() returns a string
2. Trying to do math with string numbers
3. Forgetting to convert input when you need numbers
4. Using the wrong quotes (mixing single and double)

## Best Practices

1. Always provide clear prompts so users know what to enter
2. Convert input types immediately if you need numbers
3. Use f-strings for clean, readable output formatting
4. Add spaces in prompts so the cursor is not right against the text`,
    examples: [
      {
        title: "Basic Input and Output",
        code: `# Getting user input
name = input("What is your name? ")
print("Hello,", name + "!")

# Getting age (convert to number)
age = input("How old are you? ")
age = int(age)  # Convert string to integer
next_year = age + 1
print("Next year you will be", next_year)`,
        output: `What is your name? Alice
Hello, Alice!
How old are you? 25
Next year you will be 26`,
        explanation: "input() gets text from the user. For names, we use it directly. For numbers like age, we convert it with int() so we can do math with it."
      },
      {
        title: "Formatted Output with f-strings",
        code: `# Using f-strings for clean output
name = "Bob"
age = 30
city = "London"

# f-string formatting
print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"{name} is {age} years old and lives in {city}.")`,
        output: `Name: Bob
Age: 30
City: London
Bob is 30 years old and lives in London.`,
        explanation: "f-strings start with 'f' before the quotes. Variables inside curly braces {} are automatically replaced with their values. This is the cleanest way to format output."
      },
      {
        title: "Calculator Program",
        code: `# Simple calculator
print("Simple Calculator")
print("-" * 20)

num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

print(f"\\n{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} * {num2} = {num1 * num2}")
print(f"{num1} / {num2} = {num1 / num2}")`,
        output: `Simple Calculator
--------------------
Enter first number: 10
Enter second number: 3

10.0 + 3.0 = 13.0
10.0 - 3.0 = 7.0
10.0 * 3.0 = 30.0
10.0 / 3.0 = 3.3333333333333335`,
        explanation: "This program takes two numbers from the user and shows all basic math operations. We use float() to handle decimal numbers. f-strings make the output clean and readable."
      }
    ],
    practiceQuestions: [
      {
        question: "Create a program that asks for the user's favorite color and food, then prints a sentence using both.",
        hint: "Use two input() calls, then use an f-string to combine them in a sentence."
      },
      {
        question: "Create a program that asks for a number and prints its double and triple.",
        hint: "Use int() or float() to convert the input, then multiply by 2 and 3."
      },
      {
        question: "Create a program that calculates the area of a rectangle by asking for length and width.",
        hint: "Get both inputs, convert to numbers, multiply them, and display the result with a nice message."
      }
    ]
  },
  {
    id: "5",
    title: "Operators",
    slug: "operators",
    level: "beginner",
    category: "Basics",
    duration: "25 min",
    description: "Master arithmetic, comparison, and logical operators in Python.",
    content: `# Operators in Python

Operators are special symbols that perform operations on values and variables. They are the building blocks of all calculations and comparisons in programming. In this lesson, we will learn about the different types of operators in Python.

## Arithmetic Operators

Arithmetic operators are used for mathematical calculations. Python supports all the basic math operations and some special ones too.

### Basic Arithmetic Operators

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| + | Addition | 5 + 3 | 8 |
| - | Subtraction | 10 - 4 | 6 |
| * | Multiplication | 6 * 7 | 42 |
| / | Division | 20 / 4 | 5.0 |
| // | Floor Division | 17 // 5 | 3 |
| % | Modulus (Remainder) | 17 % 5 | 2 |
| ** | Exponentiation | 2 ** 3 | 8 |

### Understanding Special Operators

**Floor Division (//)**: This divides and rounds down to the nearest whole number. It always gives an integer result (though it may be a float if one operand is a float).

**Modulus (%)**: This gives the remainder after division. It is very useful for checking if a number is even or odd, or for wrapping values around.

**Exponentiation (**)**: This raises a number to a power. For example, 2 ** 3 means 2 × 2 × 2 = 8.

## Comparison Operators

Comparison operators compare two values and return a boolean (True or False). They are essential for making decisions in your programs.

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| == | Equal to | 5 == 5 | True |
| != | Not equal to | 5 != 3 | True |
| > | Greater than | 10 > 5 | True |
| < | Less than | 3 < 7 | True |
| >= | Greater or equal | 5 >= 5 | True |
| <= | Less or equal | 4 <= 3 | False |

### Important: == vs =

A common mistake for beginners is confusing = and ==:
- = is the assignment operator (assigns a value to a variable)
- == is the comparison operator (checks if two values are equal)

## Logical Operators

Logical operators combine multiple conditions. They work with boolean values and return boolean results.

| Operator | Description | Example |
|----------|-------------|---------|
| and | True if both are True | True and False = False |
| or | True if at least one is True | True or False = True |
| not | Reverses the boolean | not True = False |

### Truth Tables

**and operator**: Returns True only if BOTH conditions are True
- True and True = True
- True and False = False
- False and True = False
- False and False = False

**or operator**: Returns True if AT LEAST ONE condition is True
- True or True = True
- True or False = True
- False or True = True
- False or False = False

**not operator**: Reverses the value
- not True = False
- not False = True

## Assignment Operators

Assignment operators are shortcuts for updating variables.

| Operator | Example | Equivalent to |
|----------|---------|---------------|
| = | x = 5 | x = 5 |
| += | x += 3 | x = x + 3 |
| -= | x -= 3 | x = x - 3 |
| *= | x *= 3 | x = x * 3 |
| /= | x /= 3 | x = x / 3 |
| //= | x //= 3 | x = x // 3 |
| %= | x %= 3 | x = x % 3 |
| **= | x **= 3 | x = x ** 3 |

## Operator Precedence

When an expression has multiple operators, Python follows a specific order:
1. ** (exponentiation)
2. *, /, //, % (multiplication, division, modulus)
3. +, - (addition, subtraction)
4. ==, !=, <, >, <=, >= (comparisons)
5. not
6. and
7. or

Use parentheses () to make your code clearer and to override precedence when needed.`,
    examples: [
      {
        title: "Arithmetic Operators",
        code: `a = 17
b = 5

print(f"{a} + {b} = {a + b}")   # Addition
print(f"{a} - {b} = {a - b}")   # Subtraction
print(f"{a} * {b} = {a * b}")   # Multiplication
print(f"{a} / {b} = {a / b}")   # Division
print(f"{a} // {b} = {a // b}") # Floor Division
print(f"{a} % {b} = {a % b}")   # Modulus
print(f"{a} ** {b} = {a ** b}") # Exponentiation`,
        output: `17 + 5 = 22
17 - 5 = 12
17 * 5 = 85
17 / 5 = 3.4
17 // 5 = 3
17 % 5 = 2
17 ** 5 = 1419857`,
        explanation: "This shows all arithmetic operators. Notice how / gives a decimal (3.4) while // gives just the whole number (3). The modulus % gives the remainder (2)."
      },
      {
        title: "Comparison Operators",
        code: `x = 10
y = 5

print(f"{x} == {y}: {x == y}")  # Equal to
print(f"{x} != {y}: {x != y}")  # Not equal
print(f"{x} > {y}: {x > y}")    # Greater than
print(f"{x} < {y}: {x < y}")    # Less than
print(f"{x} >= 10: {x >= 10}")  # Greater or equal
print(f"{y} <= 5: {y <= 5}")    # Less or equal`,
        output: `10 == 5: False
10 != 5: True
10 > 5: True
10 < 5: False
10 >= 10: True
5 <= 5: True`,
        explanation: "Comparison operators always return True or False. They are used to compare values and make decisions. Note: == checks equality, = assigns values."
      },
      {
        title: "Logical Operators",
        code: `age = 25
has_license = True
has_car = False

# Using 'and' - both must be True
can_drive = age >= 18 and has_license
print(f"Can drive (age>=18 AND license): {can_drive}")

# Using 'or' - at least one must be True
needs_transport = not has_car or age < 16
print(f"Needs transport: {needs_transport}")

# Combining conditions
is_adult = age >= 18
print(f"Is adult: {is_adult}")
print(f"Not adult: {not is_adult}")`,
        output: `Can drive (age>=18 AND license): True
Needs transport: True
Is adult: True
Not adult: False`,
        explanation: "Logical operators combine conditions. 'and' requires both to be True, 'or' requires at least one, and 'not' reverses the value."
      }
    ],
    practiceQuestions: [
      {
        question: "Write a program that checks if a number is even or odd using the modulus operator.",
        hint: "A number is even if number % 2 equals 0."
      },
      {
        question: "Create a program that checks if a person can vote (age >= 18 and is_citizen == True).",
        hint: "Use the 'and' operator to combine both conditions."
      },
      {
        question: "Calculate the result of 2 to the power of 10 using the exponentiation operator.",
        hint: "Use the ** operator: 2 ** 10"
      }
    ]
  },
  {
    id: "6",
    title: "Loops - For and While",
    slug: "loops",
    level: "intermediate",
    category: "Control Flow",
    duration: "30 min",
    description: "Learn how to repeat actions using for and while loops.",
    content: `# Loops in Python

Loops are one of the most powerful concepts in programming. They allow you to repeat a block of code multiple times without writing the same code over and over. Python has two main types of loops: for loops and while loops.

## Why Use Loops?

Imagine you want to print "Hello" 100 times. Without loops, you would need to write print("Hello") 100 times! With a loop, you can do it in just two lines of code. Loops save time, reduce errors, and make your code cleaner.

## The for Loop

A for loop is used when you know how many times you want to repeat something, or when you want to go through each item in a collection (like a list or string).

### Basic for Loop Syntax

The basic structure is:
for variable in sequence:
    # code to repeat

### Using range() with for Loops

The range() function generates a sequence of numbers. It is commonly used with for loops.

- range(5) gives 0, 1, 2, 3, 4 (5 numbers, starting from 0)
- range(1, 6) gives 1, 2, 3, 4, 5 (from 1 to 5)
- range(0, 10, 2) gives 0, 2, 4, 6, 8 (from 0 to 9, step of 2)

### Looping Through Strings

You can loop through each character in a string.

### Looping Through Lists

You can loop through each item in a list.

## The while Loop

A while loop repeats as long as a condition is True. It is used when you do not know exactly how many times you need to repeat.

### Basic while Loop Syntax

while condition:
    # code to repeat
    # make sure to update the condition!

### Important: Avoid Infinite Loops

Always make sure your while loop will eventually stop! If the condition never becomes False, the loop will run forever (infinite loop).

## Loop Control Statements

Python provides special statements to control loop behavior:

### break Statement

The break statement stops the loop immediately, even if the loop condition is still True.

### continue Statement

The continue statement skips the rest of the current iteration and moves to the next one.

### pass Statement

The pass statement does nothing. It is used as a placeholder when you need a statement but do not want to do anything yet.

## Nested Loops

You can put a loop inside another loop. The inner loop runs completely for each iteration of the outer loop.

## Choosing Between for and while

**Use for when:**
- You know how many times to repeat
- You want to go through a collection
- You want to repeat a specific number of times

**Use while when:**
- You do not know how many times to repeat
- You want to repeat until a condition changes
- You are waiting for user input or an event`,
    examples: [
      {
        title: "For Loop with range()",
        code: `# Print numbers 1 to 5
print("Counting from 1 to 5:")
for i in range(1, 6):
    print(i)

print("\\nCounting by 2s:")
for i in range(0, 11, 2):
    print(i, end=" ")`,
        output: `Counting from 1 to 5:
1
2
3
4
5

Counting by 2s:
0 2 4 6 8 10 `,
        explanation: "range(1, 6) generates numbers from 1 to 5. range(0, 11, 2) generates even numbers from 0 to 10. The 'end' parameter keeps printing on the same line."
      },
      {
        title: "While Loop",
        code: `# Countdown using while loop
count = 5
print("Countdown:")
while count > 0:
    print(count)
    count -= 1  # Same as count = count - 1
print("Blast off!")

# Sum numbers until total reaches 100
print("\\nAdding numbers until sum >= 100:")
total = 0
number = 1
while total < 100:
    total += number
    number += 1
print(f"Sum: {total}, Numbers added: {number - 1}")`,
        output: `Countdown:
5
4
3
2
1
Blast off!

Adding numbers until sum >= 100:
Sum: 105, Numbers added: 14`,
        explanation: "The first while loop counts down from 5. The second keeps adding numbers (1+2+3+...) until the total reaches 100. Always update the condition variable!"
      },
      {
        title: "Loop Control: break and continue",
        code: `# Using break to exit early
print("Finding first number divisible by 7:")
for num in range(1, 100):
    if num % 7 == 0:
        print(f"Found: {num}")
        break

# Using continue to skip numbers
print("\\nOdd numbers from 1 to 10:")
for num in range(1, 11):
    if num % 2 == 0:  # Skip even numbers
        continue
    print(num, end=" ")`,
        output: `Finding first number divisible by 7:
Found: 7

Odd numbers from 1 to 10:
1 3 5 7 9 `,
        explanation: "'break' stops the loop completely when we find 7. 'continue' skips the print statement for even numbers and moves to the next iteration."
      }
    ],
    practiceQuestions: [
      {
        question: "Write a for loop that prints the multiplication table of 5 (5x1 to 5x10).",
        hint: "Use range(1, 11) and multiply each number by 5."
      },
      {
        question: "Write a while loop that keeps asking for a password until the user enters 'secret123'.",
        hint: "Use input() inside the loop and check if it matches the correct password."
      },
      {
        question: "Write a program that prints all numbers from 1 to 50 that are divisible by 3.",
        hint: "Use a for loop with range(1, 51) and check if num % 3 == 0."
      }
    ]
  },
  {
    id: "7",
    title: "Functions",
    slug: "functions",
    level: "intermediate",
    category: "Functions",
    duration: "35 min",
    description: "Learn how to create reusable blocks of code with functions.",
    content: `# Functions in Python

Functions are reusable blocks of code that perform a specific task. They are one of the most important concepts in programming because they help you organize your code, avoid repetition, and make your programs easier to understand and maintain.

## Why Use Functions?

Imagine you need to calculate the area of a rectangle in multiple places in your program. Without functions, you would copy and paste the same calculation code each time. With functions, you write the code once and call it whenever you need it.

### Benefits of Functions

1. **Reusability**: Write code once, use it many times
2. **Organization**: Break complex programs into smaller, manageable pieces
3. **Readability**: Give meaningful names to blocks of code
4. **Maintainability**: Fix bugs in one place instead of many
5. **Testing**: Test each function independently

## Creating Functions

To create (define) a function in Python, use the def keyword followed by the function name and parentheses.

### Basic Function Syntax

def function_name():
    # code inside the function
    # this is called the function body

### Calling a Function

To use (call) a function, write its name followed by parentheses:
function_name()

## Parameters and Arguments

Functions become much more powerful when they can accept input values called parameters.

### Parameters

Parameters are variables listed in the function definition. They act as placeholders for the values you will pass to the function.

### Arguments

Arguments are the actual values you pass to the function when you call it.

### Multiple Parameters

Functions can have multiple parameters, separated by commas.

### Default Parameters

You can give parameters default values. If no argument is provided, the default is used.

## Return Values

Functions can send back a result using the return statement. This allows you to use the function's result in other parts of your code.

### The return Statement

When Python reaches a return statement:
1. The function stops executing
2. The value after return is sent back to where the function was called
3. Any code after return in the function is not executed

### Returning Multiple Values

Python functions can return multiple values as a tuple.

## Variable Scope

Variables created inside a function are called local variables. They only exist inside that function. Variables created outside functions are called global variables.

### Local Variables

Local variables are created when the function starts and destroyed when it ends. They cannot be accessed outside the function.

### Global Variables

Global variables can be accessed from anywhere in your program, but you should use them sparingly as they can make code harder to understand.

## Docstrings

A docstring is a string at the beginning of a function that describes what it does. It helps other programmers (and your future self) understand your code.

## Best Practices for Functions

1. **Use descriptive names**: calculate_area is better than ca
2. **Do one thing**: Each function should have one clear purpose
3. **Keep functions short**: If a function is too long, break it into smaller functions
4. **Use parameters**: Avoid using global variables inside functions
5. **Add docstrings**: Document what your function does
6. **Return values when needed**: Use return to give back results`,
    examples: [
      {
        title: "Basic Function",
        code: `# Defining a simple function
def greet():
    print("Hello!")
    print("Welcome to Python functions!")

# Calling the function
greet()
print("---")
greet()  # We can call it multiple times`,
        output: `Hello!
Welcome to Python functions!
---
Hello!
Welcome to Python functions!`,
        explanation: "A function is defined with 'def' followed by a name and parentheses. The code inside (indented) runs when we call the function by writing its name with parentheses."
      },
      {
        title: "Functions with Parameters and Return",
        code: `# Function with parameters
def greet_person(name, greeting="Hello"):
    return f"{greeting}, {name}!"

# Calling with different arguments
print(greet_person("Alice"))
print(greet_person("Bob", "Hi"))
print(greet_person("Charlie", "Good morning"))

# Function that calculates
def calculate_rectangle(length, width):
    area = length * width
    perimeter = 2 * (length + width)
    return area, perimeter

# Using the returned values
a, p = calculate_rectangle(5, 3)
print(f"\\nRectangle 5x3: Area={a}, Perimeter={p}")`,
        output: `Hello, Alice!
Hi, Bob!
Good morning, Charlie!

Rectangle 5x3: Area=15, Perimeter=16`,
        explanation: "Parameters let functions accept input. 'greeting' has a default value. Return sends values back. The second function returns two values (area and perimeter)."
      },
      {
        title: "Practical Function Examples",
        code: `def is_even(number):
    """Check if a number is even."""
    return number % 2 == 0

def find_max(a, b, c):
    """Find the maximum of three numbers."""
    if a >= b and a >= c:
        return a
    elif b >= c:
        return b
    return c

# Testing the functions
print("Is 10 even?", is_even(10))
print("Is 7 even?", is_even(7))
print("Max of 5, 12, 8:", find_max(5, 12, 8))
print("Max of 100, 50, 75:", find_max(100, 50, 75))`,
        output: `Is 10 even? True
Is 7 even? False
Max of 5, 12, 8: 12
Max of 100, 50, 75: 100`,
        explanation: "These functions show practical uses: is_even() returns True/False, find_max() compares three numbers. The triple-quoted strings are docstrings that document what each function does."
      }
    ],
    practiceQuestions: [
      {
        question: "Create a function called 'square' that takes a number and returns its square (number * number).",
        hint: "def square(n): return n * n"
      },
      {
        question: "Create a function called 'is_adult' that takes an age and returns True if age >= 18, False otherwise.",
        hint: "Use return age >= 18"
      },
      {
        question: "Create a function called 'calculate_tip' that takes a bill amount and tip percentage (default 15%), and returns the tip amount.",
        hint: "def calculate_tip(bill, tip_percent=15): return bill * tip_percent / 100"
      }
    ]
  },
  {
    id: "8",
    title: "Lists and Tuples",
    slug: "lists-tuples",
    level: "intermediate",
    category: "Data Structures",
    duration: "30 min",
    description: "Learn how to store multiple values in lists and tuples.",
    content: `# Lists and Tuples in Python

So far, we have learned how to store single values in variables. But what if you want to store many values together, like a list of student names or a collection of test scores? This is where lists and tuples come in.

## Lists

A list is an ordered collection of items. Lists are one of the most versatile and commonly used data structures in Python.

### Creating Lists

You create a list by putting values inside square brackets [], separated by commas.

### List Characteristics

1. **Ordered**: Items maintain their order
2. **Mutable**: You can change, add, or remove items
3. **Allow duplicates**: Same value can appear multiple times
4. **Can mix types**: A list can contain different data types

### Accessing List Items

Each item in a list has an index (position). Indexes start at 0, not 1!

### Negative Indexing

You can use negative numbers to access items from the end. -1 is the last item, -2 is second to last, etc.

### Slicing Lists

You can get a portion of a list using slicing: list[start:end]

### Modifying Lists

Since lists are mutable, you can change them after creation.

### Common List Methods

- append(item): Add item to the end
- insert(index, item): Add item at specific position
- remove(item): Remove first occurrence of item
- pop(): Remove and return last item
- pop(index): Remove and return item at index
- sort(): Sort the list
- reverse(): Reverse the list
- len(list): Get number of items

## Tuples

A tuple is similar to a list, but it is immutable - once created, it cannot be changed.

### Creating Tuples

You create a tuple by putting values inside parentheses (), separated by commas.

### Tuple Characteristics

1. **Ordered**: Items maintain their order
2. **Immutable**: Cannot be changed after creation
3. **Allow duplicates**: Same value can appear multiple times
4. **Can mix types**: A tuple can contain different data types
5. **Faster than lists**: Due to immutability

### When to Use Tuples

Use tuples when:
- Data should not change (coordinates, RGB colors)
- You want to protect data from accidental modification
- Using as dictionary keys (lists cannot be used as keys)
- Returning multiple values from functions

## List vs Tuple

| Feature | List | Tuple |
|---------|------|-------|
| Syntax | [1, 2, 3] | (1, 2, 3) |
| Mutable | Yes | No |
| Speed | Slower | Faster |
| Methods | Many | Few |
| Use case | Changing data | Fixed data |

## Looping Through Lists and Tuples

You can use for loops to go through each item.

### Using enumerate()

enumerate() gives you both the index and the value while looping.

## List Comprehensions

A list comprehension is a short way to create a new list based on an existing list. It combines a for loop and optional condition in one line.`,
    examples: [
      {
        title: "Working with Lists",
        code: `# Creating and accessing lists
fruits = ["apple", "banana", "cherry", "date"]
print("All fruits:", fruits)
print("First fruit:", fruits[0])
print("Last fruit:", fruits[-1])
print("First 3:", fruits[:3])

# Modifying lists
fruits.append("elderberry")
print("After append:", fruits)

fruits[1] = "blueberry"  # Change banana
print("After change:", fruits)

fruits.remove("cherry")
print("After remove:", fruits)`,
        output: `All fruits: ['apple', 'banana', 'cherry', 'date']
First fruit: apple
Last fruit: date
First 3: ['apple', 'banana', 'cherry']
After append: ['apple', 'banana', 'cherry', 'date', 'elderberry']
After change: ['apple', 'blueberry', 'cherry', 'date', 'elderberry']
After remove: ['apple', 'blueberry', 'date', 'elderberry']`,
        explanation: "Lists use square brackets. Index 0 is the first item. You can slice with [:3]. Lists can be modified with append(), direct assignment, and remove()."
      },
      {
        title: "Tuples - Immutable Sequences",
        code: `# Creating tuples
coordinates = (10, 20)
rgb_color = (255, 128, 0)
person = ("Alice", 25, "Engineer")

print("Coordinates:", coordinates)
print("X:", coordinates[0], "Y:", coordinates[1])
print("Color:", rgb_color)
print("Person:", person)

# Unpacking tuples
name, age, job = person
print(f"\\n{name} is {age} years old, works as {job}")

# Tuples in functions
def get_min_max(numbers):
    return min(numbers), max(numbers)

result = get_min_max([5, 2, 8, 1, 9])
print(f"\\nMin and Max: {result}")`,
        output: `Coordinates: (10, 20)
X: 10 Y: 20
Color: (255, 128, 0)
Person: ('Alice', 25, 'Engineer')

Alice is 25 years old, works as Engineer

Min and Max: (1, 9)`,
        explanation: "Tuples use parentheses and cannot be changed. They are great for fixed data like coordinates. Unpacking lets you assign tuple values to separate variables."
      },
      {
        title: "List Comprehensions",
        code: `# Traditional way
squares = []
for x in range(1, 6):
    squares.append(x ** 2)
print("Squares (traditional):", squares)

# List comprehension - same result, one line!
squares = [x ** 2 for x in range(1, 6)]
print("Squares (comprehension):", squares)

# With condition - only even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [n for n in numbers if n % 2 == 0]
print("Even numbers:", evens)

# Transform and filter
words = ["hello", "world", "python", "code"]
long_upper = [w.upper() for w in words if len(w) > 4]
print("Long words uppercase:", long_upper)`,
        output: `Squares (traditional): [1, 4, 9, 16, 25]
Squares (comprehension): [1, 4, 9, 16, 25]
Even numbers: [2, 4, 6, 8, 10]
Long words uppercase: ['HELLO', 'WORLD', 'PYTHON']`,
        explanation: "List comprehensions create lists in one line. Format: [expression for item in iterable if condition]. They are more concise and often faster than traditional loops."
      }
    ],
    practiceQuestions: [
      {
        question: "Create a list of 5 of your favorite movies and print the first and last one.",
        hint: "Use index [0] for first and [-1] for last."
      },
      {
        question: "Create a tuple with your name, age, and city. Then unpack it into three separate variables.",
        hint: "name, age, city = (\"John\", 25, \"NYC\")"
      },
      {
        question: "Use a list comprehension to create a list of numbers from 1 to 20 that are divisible by 3.",
        hint: "[x for x in range(1, 21) if x % 3 == 0]"
      }
    ]
  },
  {
    id: "9",
    title: "Dictionaries",
    slug: "dictionaries",
    level: "intermediate",
    category: "Data Structures",
    duration: "25 min",
    description: "Learn how to store key-value pairs using dictionaries.",
    content: `# Dictionaries in Python

A dictionary is a collection of key-value pairs. Unlike lists where you access items by their position (index), dictionaries let you access values using meaningful keys. This makes dictionaries perfect for storing related information about something.

## Real-World Analogy

Think of a real dictionary: you look up a word (key) to find its definition (value). A Python dictionary works the same way - you use a key to find its associated value.

## Creating Dictionaries

You create a dictionary using curly braces {} with key-value pairs separated by colons.

### Dictionary Characteristics

1. **Key-value pairs**: Each item has a key and a value
2. **Unordered**: As of Python 3.7+, dictionaries maintain insertion order
3. **Mutable**: You can add, change, or remove items
4. **Keys must be unique**: No duplicate keys allowed
5. **Keys must be immutable**: Strings, numbers, and tuples can be keys

## Accessing Values

You access values using their keys in square brackets or using the get() method.

### Using get()

The get() method is safer because it returns None (or a default value) if the key does not exist, instead of raising an error.

## Modifying Dictionaries

Since dictionaries are mutable, you can change them after creation.

### Adding and Updating Items

You add or update items by assigning a value to a key.

### Removing Items

- pop(key): Remove item with specified key and return its value
- del dict[key]: Remove item with specified key
- clear(): Remove all items
- popitem(): Remove the last inserted item

## Dictionary Methods

- keys(): Get all keys
- values(): Get all values
- items(): Get all key-value pairs as tuples
- update(other_dict): Add items from another dictionary
- copy(): Create a copy of the dictionary

## Looping Through Dictionaries

You can loop through keys, values, or both.

## Nested Dictionaries

Dictionaries can contain other dictionaries, creating complex data structures.

## Dictionary Comprehensions

Similar to list comprehensions, you can create dictionaries in one line.

## When to Use Dictionaries

Use dictionaries when:
- You need to associate values with unique keys
- You want fast lookups by key
- Data has a natural key-value relationship
- Order is not important (though order is preserved)

## Common Use Cases

1. **Storing user data**: {"name": "Alice", "age": 25, "email": "..."}
2. **Counting occurrences**: {"apple": 3, "banana": 2}
3. **Caching/Memoization**: Store computed results for quick access
4. **Configuration settings**: {"debug": True, "max_users": 100}
5. **JSON data**: Dictionaries map naturally to JSON format`,
    examples: [
      {
        title: "Creating and Accessing Dictionaries",
        code: `# Creating a dictionary
student = {
    "name": "Alice",
    "age": 20,
    "grade": "A",
    "subjects": ["Math", "Physics", "Chemistry"]
}

# Accessing values
print("Name:", student["name"])
print("Age:", student["age"])
print("Subjects:", student["subjects"])

# Using get() - safer access
print("Grade:", student.get("grade"))
print("Email:", student.get("email", "Not provided"))`,
        output: `Name: Alice
Age: 20
Subjects: ['Math', 'Physics', 'Chemistry']
Grade: A
Email: Not provided`,
        explanation: "Dictionaries use curly braces with key: value pairs. Access values with dict[key] or dict.get(key). The get() method lets you provide a default value if the key does not exist."
      },
      {
        title: "Modifying Dictionaries",
        code: `# Start with a dictionary
person = {"name": "Bob", "age": 25}
print("Original:", person)

# Add new key-value pairs
person["city"] = "New York"
person["job"] = "Developer"
print("After adding:", person)

# Update existing value
person["age"] = 26
print("After update:", person)

# Remove items
removed = person.pop("job")
print(f"Removed job: {removed}")
print("Final:", person)

# Get all keys, values, items
print("\\nKeys:", list(person.keys()))
print("Values:", list(person.values()))`,
        output: `Original: {'name': 'Bob', 'age': 25}
After adding: {'name': 'Bob', 'age': 25, 'city': 'New York', 'job': 'Developer'}
After update: {'name': 'Bob', 'age': 26, 'city': 'New York', 'job': 'Developer'}
Removed job: Developer
Final: {'name': 'Bob', 'age': 26, 'city': 'New York'}

Keys: ['name', 'age', 'city']
Values: ['Bob', 26, 'New York']`,
        explanation: "Add items by assigning to a new key. Update by assigning to an existing key. Remove with pop() which also returns the removed value. keys() and values() give you the dictionary's contents."
      },
      {
        title: "Looping and Nested Dictionaries",
        code: `# Looping through a dictionary
scores = {"Math": 95, "English": 88, "Science": 92}

print("Scores:")
for subject, score in scores.items():
    print(f"  {subject}: {score}")

# Nested dictionary
students = {
    "alice": {"age": 20, "grade": "A"},
    "bob": {"age": 22, "grade": "B"},
    "charlie": {"age": 21, "grade": "A"}
}

print("\\nStudent Details:")
for name, info in students.items():
    print(f"  {name.title()}: Age {info['age']}, Grade {info['grade']}")

# Dictionary comprehension
squared = {x: x**2 for x in range(1, 6)}
print("\\nSquared numbers:", squared)`,
        output: `Scores:
  Math: 95
  English: 88
  Science: 92

Student Details:
  Alice: Age 20, Grade A
  Bob: Age 22, Grade B
  Charlie: Age 21, Grade A

Squared numbers: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`,
        explanation: "items() returns key-value pairs for looping. Nested dictionaries store dictionaries inside dictionaries. Dictionary comprehensions create dictionaries in one line: {key: value for item in iterable}."
      }
    ],
    practiceQuestions: [
      {
        question: "Create a dictionary storing information about your favorite book (title, author, year, pages).",
        hint: "Use string keys and appropriate values for each piece of information."
      },
      {
        question: "Write code that counts how many times each letter appears in the word 'mississippi'.",
        hint: "Loop through the string and use the dictionary to count each letter."
      },
      {
        question: "Create a nested dictionary storing information about 3 countries (name, capital, population).",
        hint: "Each country is a key whose value is another dictionary with the details."
      }
    ]
  },
  {
    id: "10",
    title: "Object-Oriented Programming",
    slug: "oop",
    level: "advanced",
    category: "OOP",
    duration: "45 min",
    description: "Learn the fundamentals of object-oriented programming with classes and objects.",
    content: `# Object-Oriented Programming (OOP) in Python

Object-Oriented Programming is a programming paradigm that organizes code around objects rather than functions and logic. Objects are instances of classes, which are like blueprints defining what data and behaviors an object will have.

## Why OOP?

As programs grow larger, they become harder to manage. OOP helps by:
1. **Organizing code**: Group related data and functions together
2. **Reusing code**: Create new classes based on existing ones
3. **Modeling real-world**: Objects can represent real things
4. **Hiding complexity**: Keep internal details private

## Classes and Objects

### What is a Class?

A class is a blueprint or template for creating objects. It defines:
- **Attributes**: Data that the object will hold
- **Methods**: Functions that the object can perform

### What is an Object?

An object is an instance of a class. If a class is like a cookie cutter, objects are the cookies made from it. Each object has its own data but shares the same methods.

## Creating a Class

Use the class keyword to define a class. By convention, class names use CamelCase (first letter of each word capitalized).

### The __init__ Method

The __init__ method is a special method called a constructor. It runs automatically when you create a new object. It is used to initialize the object's attributes.

### The self Parameter

self refers to the current instance of the class. It allows you to access the object's attributes and methods. You must include self as the first parameter of every method in a class.

## Creating Objects

To create an object (instance) of a class, call the class name like a function, passing any required arguments.

## Instance Attributes vs Class Attributes

- **Instance attributes**: Unique to each object (defined in __init__)
- **Class attributes**: Shared by all objects of the class (defined outside __init__)

## Methods

Methods are functions defined inside a class. They can access and modify the object's attributes.

### Instance Methods

Regular methods that operate on an instance of the class.

### Special Methods (Magic Methods/Dunder Methods)

Python has special methods with double underscores that give your objects special behaviors:
- __init__: Constructor
- __str__: String representation (used by print())
- __repr__: Official string representation
- __len__: Used by len() function
- __add__: Used by + operator

## Encapsulation

Encapsulation means hiding internal details and providing a public interface. In Python:
- Public attributes: accessible from anywhere
- Protected attributes: start with _ (convention, not enforced)
- Private attributes: start with __ (name mangling)

## Inheritance

Inheritance allows a class to inherit attributes and methods from another class. The new class (child/subclass) can add or override features.

### Benefits of Inheritance

1. Code reuse
2. Establish relationships between classes
3. Override behavior when needed

## Polymorphism

Polymorphism means "many forms." Objects of different classes can be treated the same way if they share a common interface (same method names).

## When to Use OOP

Use OOP when:
- Modeling real-world entities
- Building complex systems with many components
- You need code reuse through inheritance
- You want to organize related data and behavior

For simple scripts, functions might be sufficient.`,
    examples: [
      {
        title: "Creating a Basic Class",
        code: `class Dog:
    # Class attribute (shared by all dogs)
    species = "Canis familiaris"
    
    # Constructor - runs when creating a new dog
    def __init__(self, name, age):
        # Instance attributes (unique to each dog)
        self.name = name
        self.age = age
    
    # Instance method
    def bark(self):
        return f"{self.name} says Woof!"
    
    def describe(self):
        return f"{self.name} is {self.age} years old"

# Creating objects (instances)
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

print(dog1.describe())
print(dog2.describe())
print(dog1.bark())
print(f"Species: {Dog.species}")`,
        output: `Buddy is 3 years old
Max is 5 years old
Buddy says Woof!
Species: Canis familiaris`,
        explanation: "A class defines a blueprint. __init__ creates instance attributes. Methods like bark() and describe() define behaviors. Each dog object has its own name and age, but they share the species attribute."
      },
      {
        title: "Special Methods",
        code: `class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    # Called by print()
    def __str__(self):
        return f"'{self.title}' by {self.author}"
    
    # Called by len()
    def __len__(self):
        return self.pages
    
    # Compare books by pages
    def __gt__(self, other):
        return self.pages > other.pages

# Create books
book1 = Book("Python Basics", "John Smith", 250)
book2 = Book("Advanced Python", "Jane Doe", 400)

print(book1)
print(f"Pages: {len(book1)}")
print(f"Is book2 longer? {book2 > book1}")`,
        output: `'Python Basics' by John Smith
Pages: 250
Is book2 longer? True`,
        explanation: "Special methods (dunder methods) customize behavior. __str__ defines how print() displays the object. __len__ works with len(). __gt__ enables > comparison between objects."
      },
      {
        title: "Inheritance",
        code: `class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        return "Some sound"

class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name)  # Call parent's __init__
        self.color = color
    
    def speak(self):  # Override parent method
        return f"{self.name} says Meow!"
    
    def describe(self):
        return f"{self.name} is a {self.color} cat"

class Bird(Animal):
    def speak(self):
        return f"{self.name} says Tweet!"

# Create instances
cat = Cat("Whiskers", "orange")
bird = Bird("Tweety")

print(cat.speak())
print(cat.describe())
print(bird.speak())`,
        output: `Whiskers says Meow!
Whiskers is a orange cat
Tweety says Tweet!`,
        explanation: "Cat and Bird inherit from Animal using class Cat(Animal). super().__init__() calls the parent's constructor. Child classes can override methods (speak) or add new ones (describe)."
      }
    ],
    practiceQuestions: [
      {
        question: "Create a class called Rectangle with width and height attributes, and methods to calculate area and perimeter.",
        hint: "def area(self): return self.width * self.height"
      },
      {
        question: "Create a BankAccount class with deposit and withdraw methods. Include a balance attribute.",
        hint: "Use __init__ to set initial balance, methods modify self.balance"
      },
      {
        question: "Create a Student class and a GraduateStudent class that inherits from it, adding a thesis_title attribute.",
        hint: "class GraduateStudent(Student): and use super().__init__()"
      }
    ]
  },
  {
    id: "11",
    title: "File Handling",
    slug: "file-handling",
    level: "advanced",
    category: "File I/O",
    duration: "30 min",
    description: "Learn how to read from and write to files in Python.",
    content: `# File Handling in Python

Files allow your programs to store data permanently. Without files, all data would be lost when your program ends. Python makes it easy to work with files for reading, writing, and managing data.

## Why File Handling Matters

1. **Persistence**: Save data between program runs
2. **Data Processing**: Read and analyze large amounts of data
3. **Configuration**: Store program settings
4. **Logging**: Record program activity
5. **Data Exchange**: Share data with other programs

## Opening Files

To work with a file, you first need to open it using the open() function.

### File Modes

| Mode | Description |
|------|-------------|
| 'r' | Read (default) - file must exist |
| 'w' | Write - creates new file or overwrites |
| 'a' | Append - adds to end of file |
| 'r+' | Read and write |
| 'x' | Create - fails if file exists |

### The Basic Pattern

The safest way to work with files is using the with statement, which automatically closes the file when done.

## Reading Files

There are several ways to read file contents.

### read() - Read Entire File

Reads the entire file as a single string.

### readline() - Read One Line

Reads one line at a time.

### readlines() - Read All Lines as List

Returns a list where each element is a line.

### Iterating Over Lines

The most memory-efficient way for large files.

## Writing Files

Writing files is similar to reading but uses write() or writelines().

### write() - Write a String

Writes a string to the file. Does not add newlines automatically.

### writelines() - Write a List

Writes a list of strings. Does not add newlines between items.

## File Positions

When you read or write, Python keeps track of your position in the file.

### tell() - Get Current Position

Returns the current position (in bytes).

### seek() - Move to Position

Moves to a specific position. seek(0) goes to the beginning.

## Working with CSV Files

CSV (Comma-Separated Values) files are common for storing tabular data. Python has a built-in csv module.

## Working with JSON Files

JSON is a popular format for storing structured data. Python has a built-in json module.

## Best Practices

1. **Always use with**: Ensures files are properly closed
2. **Handle exceptions**: Use try/except for file operations
3. **Use appropriate modes**: Do not use 'w' if you want to keep existing data
4. **Close files**: If not using with, always close() files
5. **Check file existence**: Use os.path.exists() before reading
6. **Use proper encoding**: Specify encoding='utf-8' for text files`,
    examples: [
      {
        title: "Reading and Writing Text Files",
        code: `# Writing to a file
with open("sample.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("This is line 2.\\n")
    file.write("Python file handling is easy!")

print("File written successfully!")

# Reading the entire file
with open("sample.txt", "r") as file:
    content = file.read()
    print("\\nFile contents:")
    print(content)

# Reading line by line
print("\\nReading line by line:")
with open("sample.txt", "r") as file:
    for line_number, line in enumerate(file, 1):
        print(f"Line {line_number}: {line.strip()}")`,
        output: `File written successfully!

File contents:
Hello, World!
This is line 2.
Python file handling is easy!

Reading line by line:
Line 1: Hello, World!
Line 2: This is line 2.
Line 3: Python file handling is easy!`,
        explanation: "Use 'w' mode to write (creates new file or overwrites). Use 'r' mode to read. The 'with' statement automatically closes the file. strip() removes the newline character from each line."
      },
      {
        title: "Appending to Files",
        code: `# First, create a file
with open("log.txt", "w") as file:
    file.write("Log started\\n")

# Append multiple entries
entries = ["User logged in", "File uploaded", "Settings changed"]
with open("log.txt", "a") as file:
    for entry in entries:
        file.write(f"- {entry}\\n")

# Read and display the log
print("Log contents:")
with open("log.txt", "r") as file:
    print(file.read())

# Append more
with open("log.txt", "a") as file:
    file.write("- User logged out\\n")

print("Updated log:")
with open("log.txt", "r") as file:
    print(file.read())`,
        output: `Log contents:
Log started
- User logged in
- File uploaded
- Settings changed

Updated log:
Log started
- User logged in
- File uploaded
- Settings changed
- User logged out
`,
        explanation: "Use 'a' (append) mode to add to existing files without erasing their contents. Each write() adds to the end. This is perfect for log files."
      },
      {
        title: "Working with JSON",
        code: `import json

# Data to save
user_data = {
    "name": "Alice",
    "age": 25,
    "hobbies": ["reading", "coding", "gaming"],
    "active": True
}

# Write JSON to file
with open("user.json", "w") as file:
    json.dump(user_data, file, indent=2)

print("JSON saved!")

# Read JSON from file
with open("user.json", "r") as file:
    loaded_data = json.load(file)

print("\\nLoaded data:")
print(f"Name: {loaded_data['name']}")
print(f"Age: {loaded_data['age']}")
print(f"Hobbies: {', '.join(loaded_data['hobbies'])}")

# Pretty print entire JSON
print("\\nFull JSON:")
print(json.dumps(loaded_data, indent=2))`,
        output: `JSON saved!

Loaded data:
Name: Alice
Age: 25
Hobbies: reading, coding, gaming

Full JSON:
{
  "name": "Alice",
  "age": 25,
  "hobbies": [
    "reading",
    "coding",
    "gaming"
  ],
  "active": true
}`,
        explanation: "The json module handles JSON files. json.dump() writes Python data to a JSON file. json.load() reads it back. indent=2 makes it readable. JSON is perfect for storing structured data."
      }
    ],
    practiceQuestions: [
      {
        question: "Write a program that saves a shopping list to a file, with each item on a new line.",
        hint: "Use a list and write each item with a newline character."
      },
      {
        question: "Read a text file and count how many words it contains.",
        hint: "Read the file, split() the content, and use len() on the result."
      },
      {
        question: "Create a program that saves and loads a dictionary of contacts (name: phone) using JSON.",
        hint: "Use json.dump() to save and json.load() to read the dictionary."
      }
    ]
  },
  {
    id: "12",
    title: "Working with APIs",
    slug: "apis",
    level: "advanced",
    category: "Web",
    duration: "35 min",
    description: "Learn how to fetch data from web APIs using Python.",
    content: `# Working with APIs in Python

An API (Application Programming Interface) allows different software applications to communicate with each other. Web APIs let your Python programs fetch data from servers on the internet, enabling you to build powerful applications that use data from various sources.

## What is an API?

Think of an API like a waiter in a restaurant. You (the client) tell the waiter (API) what you want, the waiter goes to the kitchen (server) and brings back your order (data). You do not need to know how the kitchen works - you just need to know how to communicate with the waiter.

## HTTP and REST

Most web APIs use HTTP (the same protocol your browser uses) and follow REST (Representational State Transfer) principles.

### HTTP Methods

| Method | Purpose | Example |
|--------|---------|---------|
| GET | Retrieve data | Get user info |
| POST | Send/Create data | Create new user |
| PUT | Update data | Update user info |
| DELETE | Remove data | Delete user |

### HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Server Error |

## The requests Library

Python's requests library makes working with APIs simple. It handles all the complexity of HTTP communication.

### Making GET Requests

GET requests retrieve data from a server.

### Understanding the Response

A response object contains:
- status_code: HTTP status code
- text: Response as a string
- json(): Response parsed as Python dictionary
- headers: Response headers

### Query Parameters

Many APIs accept parameters to customize the request.

### Making POST Requests

POST requests send data to a server.

### Headers and Authentication

Many APIs require authentication, usually via headers.

## Working with JSON

APIs typically return data in JSON format, which maps directly to Python dictionaries and lists.

## Error Handling

Always handle potential errors when working with APIs.

### Common Errors

1. Network errors (no internet)
2. Timeout (server too slow)
3. Invalid responses
4. Authentication failures
5. Rate limiting (too many requests)

## Best Practices

1. **Always check status codes**: Verify the request succeeded
2. **Handle errors gracefully**: Use try/except blocks
3. **Use timeouts**: Prevent hanging requests
4. **Respect rate limits**: Do not overwhelm APIs
5. **Secure API keys**: Never hardcode secrets
6. **Cache responses**: Reduce unnecessary requests

## Free APIs for Practice

There are many free APIs you can use to practice:
- JSONPlaceholder: Fake REST API for testing
- OpenWeatherMap: Weather data
- PokeAPI: Pokemon data
- REST Countries: Country information
- NASA API: Space data`,
    examples: [
      {
        title: "Basic API Request",
        code: `import requests

# Fetch a list of posts from JSONPlaceholder (fake API)
url = "https://jsonplaceholder.typicode.com/posts"
response = requests.get(url)

# Check if request was successful
print(f"Status Code: {response.status_code}")

if response.status_code == 200:
    posts = response.json()
    print(f"Total posts: {len(posts)}")
    
    # Show first 3 posts
    print("\\nFirst 3 posts:")
    for post in posts[:3]:
        print(f"  {post['id']}. {post['title'][:40]}...")`,
        output: `Status Code: 200
Total posts: 100

First 3 posts:
  1. sunt aut facere repellat provident MDoccaecati...
  2. qui est esse...
  3. ea molestias quasi exercitationem repell...`,
        explanation: "requests.get() fetches data from a URL. status_code tells if it succeeded (200 = OK). response.json() converts the response to a Python dictionary/list."
      },
      {
        title: "API with Parameters",
        code: `import requests

# Fetch specific post by ID
url = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(url)
post = response.json()

print("Single Post:")
print(f"Title: {post['title']}")
print(f"Body: {post['body'][:100]}...")

# Fetch with query parameters
print("\\n--- Comments for post 1 ---")
url = "https://jsonplaceholder.typicode.com/comments"
params = {"postId": 1}
response = requests.get(url, params=params)
comments = response.json()

print(f"Found {len(comments)} comments:")
for comment in comments[:2]:
    print(f"\\n  From: {comment['email']}")
    print(f"  Comment: {comment['body'][:60]}...")`,
        output: `Single Post:
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Body: quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas...

--- Comments for post 1 ---
Found 5 comments:

  From: Eliseo@gardner.biz
  Comment: laudantium enim quasi est quidem magnam voluptate ipsa...

  From: Jayne_Kuhic@sydney.com
  Comment: est natus enim nihil est dolore omnis voluptatem numquam...`,
        explanation: "You can add parameters to filter results. The params dictionary is passed to get() and added to the URL automatically. This is cleaner than building the URL yourself."
      },
      {
        title: "Error Handling with APIs",
        code: `import requests

def fetch_user(user_id):
    """Fetch user data with proper error handling."""
    url = f"https://jsonplaceholder.typicode.com/users/{user_id}"
    
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()  # Raises error for bad status
        return response.json()
    except requests.exceptions.Timeout:
        print("Error: Request timed out")
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
    return None

# Test with valid user
user = fetch_user(1)
if user:
    print(f"User: {user['name']}")
    print(f"Email: {user['email']}")
    print(f"City: {user['address']['city']}")

# Test with invalid user
print("\\nTrying invalid user ID 999:")
user = fetch_user(999)
if user is None:
    print("Could not fetch user")
else:
    print(f"Found: {user['name']}")`,
        output: `User: Leanne Graham
Email: Sincere@april.biz
City: Gwenborough

Trying invalid user ID 999:
Could not fetch user`,
        explanation: "Always wrap API calls in try/except. timeout prevents hanging. raise_for_status() raises an error if status is not 200. Return None on failure so calling code can handle it."
      }
    ],
    practiceQuestions: [
      {
        question: "Write code to fetch and display the first 5 users from JSONPlaceholder API.",
        hint: "Use requests.get('https://jsonplaceholder.typicode.com/users') and slice the result."
      },
      {
        question: "Create a function that fetches all todos for a specific user ID and counts completed vs incomplete.",
        hint: "Use the /todos endpoint with userId parameter, then count where completed is True/False."
      },
      {
        question: "Write code that handles potential network errors when fetching data from an API.",
        hint: "Use try/except with requests.exceptions.RequestException and set a timeout."
      }
    ]
  },
  {
    id: "13",
    title: "String Methods and Formatting",
    slug: "string-methods",
    level: "intermediate",
    category: "String Operations",
    duration: "30 min",
    description: "Master string manipulation with built-in methods and modern formatting techniques in Python.",
    content: `# String Methods and Formatting

Strings are one of the most commonly used data types in Python. Whether you are building a website, processing data, or creating a simple program, you will work with text all the time. Python provides many powerful built-in methods to manipulate strings, and understanding these methods will make your programming life much easier.

## What Are String Methods?

A method is like a special function that belongs to a specific data type. String methods are functions that you can call on any string to perform various operations. The syntax is: string.method_name(). The string stays the same (strings are immutable in Python), but the method returns a new modified string.

## Case Conversion Methods

### upper() and lower()

These methods convert text to all uppercase or all lowercase letters. They are very useful when you need to compare text without worrying about case differences.

The upper() method converts every letter to uppercase: "hello" becomes "HELLO". The lower() method does the opposite: "HELLO" becomes "hello". Numbers and special characters remain unchanged because they do not have case.

### capitalize() and title()

The capitalize() method makes only the first character uppercase and everything else lowercase. So "hello WORLD" becomes "Hello world". This is useful for formatting names or sentences.

The title() method capitalizes the first letter of every word. So "hello world python" becomes "Hello World Python". This is perfect for formatting titles or headlines.

### swapcase()

This method switches uppercase letters to lowercase and vice versa. So "Hello World" becomes "hELLO wORLD". While not commonly used, it can be helpful in certain text processing tasks.

## Checking String Content

### startswith() and endswith()

These methods check if a string begins or ends with a specific substring. They return True or False. You can use them to validate file extensions, check URL protocols, or verify text patterns.

For example, "filename.txt".endswith(".txt") returns True. And "https://google.com".startswith("https") also returns True.

### isdigit(), isalpha(), and isalnum()

These methods check if a string contains only certain types of characters. isdigit() returns True if all characters are digits (0-9). isalpha() returns True if all characters are letters. isalnum() returns True if all characters are either letters or digits.

These are super useful for validating user input. For example, you can check if a phone number contains only digits, or if a username contains only letters and numbers.

### isupper() and islower()

These check if all letters in the string are uppercase or lowercase. Note that they ignore non-letter characters. So "HELLO123" would return True for isupper() because all letters are uppercase.

## Finding and Replacing

### find() and index()

Both methods search for a substring and return its position (index). The difference is what happens when the substring is not found. find() returns -1, while index() raises an error.

Generally, use find() when you want to check if something exists and handle the "not found" case gracefully. Use index() when you are sure the substring exists and want an error if it does not.

### count()

This method counts how many times a substring appears in the string. It is case-sensitive. For example, "hello hello Hello".count("hello") returns 2 because "Hello" with capital H does not match.

### replace()

The replace() method substitutes all occurrences of one substring with another. For example, "Hello World".replace("World", "Python") returns "Hello Python". You can also specify a maximum number of replacements as a third argument.

## Splitting and Joining

### split()

This is one of the most powerful string methods. It breaks a string into a list of parts based on a separator (called delimiter). By default, it splits on whitespace (spaces, tabs, newlines).

For example, "apple banana cherry".split() returns ["apple", "banana", "cherry"]. You can also specify a custom delimiter: "apple,banana,cherry".split(",") gives the same list.

### join()

This is the opposite of split(). It takes a list of strings and combines them into one string, with the original string as the separator. The syntax is: separator.join(list).

For example, ", ".join(["apple", "banana", "cherry"]) returns "apple, banana, cherry". This is the most efficient way to combine many strings in Python.

## Stripping Whitespace

### strip(), lstrip(), and rstrip()

These methods remove whitespace (spaces, tabs, newlines) from strings. strip() removes from both ends, lstrip() removes from the left (beginning), and rstrip() removes from the right (end).

These are essential when processing user input or reading data from files, as there are often unwanted spaces at the beginning or end of text.

You can also specify characters to remove. For example, "...hello...".strip(".") returns "hello".

## String Formatting

### Old Style: % Operator

The oldest way to format strings uses the % operator. While you might see this in older code, it is not recommended for new code.

### format() Method

This method uses curly braces {} as placeholders. You can use positional arguments, keyword arguments, and even format specifications.

### f-strings (Recommended)

F-strings, introduced in Python 3.6, are the modern and preferred way to format strings. Put f before the string and use {expression} to insert values. They are fast, readable, and can include any Python expression.

## Advanced Formatting

### Alignment and Padding

You can align text and add padding using format specifications. Use < for left align, > for right align, and ^ for center. Follow with a number for the width.

### Number Formatting

Format numbers with thousands separators, decimal places, percentages, and more. For example, {number:,.2f} formats a number with comma separators and 2 decimal places.

## Best Practices

1. Use f-strings for most formatting needs - they are the most readable
2. Remember strings are immutable - methods return new strings
3. Use strip() on user input to remove accidental whitespace
4. Use lower() or upper() when comparing text to ignore case
5. Use split() and join() for efficient string list operations`,
    examples: [
      {
        title: "Case Conversion Methods",
        code: `text = "Hello World Python"

# Convert case
print("upper():", text.upper())
print("lower():", text.lower())
print("capitalize():", text.capitalize())
print("title():", "hello world python".title())
print("swapcase():", text.swapcase())

# Practical use: case-insensitive comparison
user_input = "YES"
if user_input.lower() == "yes":
    print("\\nUser agreed!")

# Check case
print("\\nIs 'HELLO' uppercase?", "HELLO".isupper())
print("Is 'hello' lowercase?", "hello".islower())`,
        output: `upper(): HELLO WORLD PYTHON
lower(): hello world python
capitalize(): Hello world python
title(): Hello World Python
swapcase(): hELLO wORLD pYTHON

User agreed!

Is 'HELLO' uppercase? True
Is 'hello' lowercase? True`,
        explanation: "Case methods are essential for text processing. Use lower() or upper() for case-insensitive comparisons. capitalize() and title() are great for formatting names and headings."
      },
      {
        title: "Finding, Splitting, and Joining",
        code: `# Finding substrings
sentence = "Python is amazing and Python is easy"
print("Find 'Python':", sentence.find("Python"))
print("Find 'Java':", sentence.find("Java"))  # Returns -1
print("Count 'Python':", sentence.count("Python"))

# Replace
new_sentence = sentence.replace("Python", "Coding")
print("After replace:", new_sentence)

# Splitting
words = sentence.split()
print("\\nSplit into words:", words)
print("Number of words:", len(words))

# Split on specific character
data = "apple,banana,cherry,date"
fruits = data.split(",")
print("\\nFruits:", fruits)

# Joining
joined = " - ".join(fruits)
print("Joined with ' - ':", joined)

# Practical: CSV line to formatted output
csv_line = "John,25,Developer"
name, age, job = csv_line.split(",")
print(f"\\nName: {name}, Age: {age}, Job: {job}")`,
        output: `Find 'Python': 0
Find 'Java': -1
Count 'Python': 2
After replace: Coding is amazing and Coding is easy

Split into words: ['Python', 'is', 'amazing', 'and', 'Python', 'is', 'easy']
Number of words: 7

Fruits: ['apple', 'banana', 'cherry', 'date']
Joined with ' - ': apple - banana - cherry - date

Name: John, Age: 25, Job: Developer`,
        explanation: "split() breaks strings into lists, join() combines lists into strings. These are the most efficient ways to work with text data. find() returns -1 if not found, making it safe to use."
      },
      {
        title: "Modern String Formatting with f-strings",
        code: `name = "Alice"
age = 25
balance = 1234567.89

# Basic f-string
print(f"Hello, {name}! You are {age} years old.")

# Expressions in f-strings
print(f"In 10 years, you will be {age + 10} years old.")

# Formatting numbers
print(f"Balance: \${balance:,.2f}")  # Comma separator, 2 decimals
print(f"Percentage: {0.756:.1%}")   # As percentage

# Alignment and padding
print(f"\\n{'Name':<15}{'Age':>5}")
print(f"{'-'*20}")
print(f"{'Alice':<15}{25:>5}")
print(f"{'Bob':<15}{30:>5}")
print(f"{'Charlie':<15}{22:>5}")

# Centered text
title = "Python Course"
print(f"\\n{title:=^30}")  # Centered with = padding

# Debug feature (Python 3.8+)
x = 10
y = 20
print(f"\\n{x=}, {y=}, {x+y=}")`,
        output: `Hello, Alice! You are 25 years old.
In 10 years, you will be 35 years old.
Balance: $1,234,567.89
Percentage: 75.6%

Name                Age
--------------------
Alice                25
Bob                  30
Charlie              22

========Python Course=========

x=10, y=20, x+y=30`,
        explanation: "F-strings are the most powerful and readable way to format strings. Use :, for thousands, :.2f for decimals, :% for percentages, :< :> :^ for alignment. The {variable=} syntax is great for debugging."
      }
    ],
    practiceQuestions: [
      {
        question: "Write a program that takes a sentence and counts how many words start with a capital letter.",
        hint: "Split the sentence into words, then check if each word's first character isupper()."
      },
      {
        question: "Create a function that formats a phone number string '1234567890' into '(123) 456-7890'.",
        hint: "Use string slicing and f-strings or concatenation to build the formatted number."
      },
      {
        question: "Write code that reverses each word in a sentence while keeping the word order the same.",
        hint: "Split into words, reverse each word with [::-1], then join back together."
      }
    ]
  },
  {
    id: "14",
    title: "List Comprehensions",
    slug: "list-comprehensions",
    level: "intermediate",
    category: "Advanced Lists",
    duration: "25 min",
    description: "Learn the Pythonic way to create and transform lists using list comprehensions.",
    content: `# List Comprehensions

List comprehension is one of Python's most loved features. It provides a concise and elegant way to create new lists by transforming or filtering existing data. Once you learn this technique, you will use it everywhere because it makes your code shorter, more readable, and often faster than traditional loops.

## What is List Comprehension?

A list comprehension is a compact way to create a new list by applying an operation to each item in an existing sequence (like a list, range, or string). Instead of writing multiple lines with a loop and append(), you write everything in a single line.

The basic syntax is: [expression for item in iterable]

This reads almost like English: "give me [expression] for each [item] in [iterable]"

## Why Use List Comprehensions?

There are several benefits to using list comprehensions:

1. **Shorter Code**: What takes 3-4 lines with a loop takes just 1 line with comprehension
2. **More Readable**: Once you are familiar with the syntax, it clearly shows intent
3. **Often Faster**: Python optimizes list comprehensions internally
4. **More Pythonic**: This is the preferred Python style for simple transformations

## Basic List Comprehension

Let us start with the simplest form. Say you want to create a list of squares from 1 to 5.

Without list comprehension (traditional way):
squares = []
for x in range(1, 6):
    squares.append(x ** 2)

With list comprehension:
squares = [x ** 2 for x in range(1, 6)]

Both give [1, 4, 9, 16, 25], but the comprehension is cleaner!

## Adding Conditions (Filtering)

You can add an if condition to filter which items get included. The syntax becomes: [expression for item in iterable if condition]

For example, to get only even numbers from a list:
evens = [x for x in numbers if x % 2 == 0]

This reads as: "give me x for each x in numbers IF x is even"

## Multiple Conditions

You can chain multiple conditions using 'and' and 'or':
[x for x in numbers if x > 0 and x < 10]

Or use multiple if clauses (they work like 'and'):
[x for x in numbers if x > 0 if x < 10]

## If-Else in Comprehensions

Sometimes you want to transform items differently based on a condition. For this, use a conditional expression in the expression part (before 'for'):

[expression_if_true if condition else expression_if_false for item in iterable]

For example, to replace negative numbers with 0:
[x if x > 0 else 0 for x in numbers]

Note: The if-else comes BEFORE 'for', while filtering 'if' comes AFTER 'for'.

## Working with Strings

Since strings are sequences of characters, you can use comprehensions on them too:

vowels = [char for char in "Hello World" if char.lower() in 'aeiou']
# Result: ['e', 'o', 'o']

## Transforming Data

List comprehensions are perfect for transforming data:

# Convert all strings to uppercase
upper_names = [name.upper() for name in names]

# Extract specific information
ages = [person['age'] for person in people]

# Apply a function to each item
lengths = [len(word) for word in words]

## Nested Loops in Comprehensions

You can have multiple 'for' clauses, which work like nested loops:
[expression for x in outer_list for y in inner_list]

This is equivalent to:
for x in outer_list:
    for y in inner_list:
        result.append(expression)

For example, to create all pairs from two lists:
pairs = [(x, y) for x in [1, 2] for y in ['a', 'b']]
# Result: [(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]

## Flattening Nested Lists

A common use case is flattening a 2D list into a 1D list:
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in matrix for num in row]
# Result: [1, 2, 3, 4, 5, 6]

## Dictionary and Set Comprehensions

The same concept works for dictionaries and sets!

Dictionary comprehension uses curly braces with key:value:
{key_expr: value_expr for item in iterable}

Example:
squares_dict = {x: x**2 for x in range(1, 6)}
# Result: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

Set comprehension uses curly braces without colons:
{expression for item in iterable}

Example:
unique_lengths = {len(word) for word in words}
# Result: set of unique word lengths

## Generator Expressions

If you use parentheses instead of brackets, you get a generator expression. This is memory-efficient for large sequences because it does not create the entire list in memory:

sum_squares = sum(x**2 for x in range(1000000))

## When NOT to Use List Comprehensions

While powerful, comprehensions are not always the best choice:

1. **Complex logic**: If your comprehension needs multiple lines or is hard to read, use a regular loop
2. **Side effects**: If you are not building a list (just printing or modifying), use a loop
3. **Readability**: If other programmers might struggle to understand it, simplify

A good rule: if your comprehension fits on one line and is easy to understand, use it. Otherwise, use a regular loop.

## Performance Tips

List comprehensions are generally faster than equivalent loops because:
1. The append method call is optimized away
2. Python can optimize the internal operations
3. Less interpreter overhead

However, the speed difference is usually small for small lists. Choose based on readability first!`,
    examples: [
      {
        title: "Basic List Comprehensions",
        code: `# Create a list of squares
squares = [x ** 2 for x in range(1, 6)]
print("Squares:", squares)

# Double each number
numbers = [1, 2, 3, 4, 5]
doubled = [x * 2 for x in numbers]
print("Doubled:", doubled)

# Convert temperatures from Celsius to Fahrenheit
celsius = [0, 10, 20, 30, 40]
fahrenheit = [(c * 9/5) + 32 for c in celsius]
print("Fahrenheit:", fahrenheit)

# Get lengths of words
words = ["Python", "is", "awesome"]
lengths = [len(word) for word in words]
print("Word lengths:", lengths)

# Transform strings
names = ["alice", "bob", "charlie"]
capitalized = [name.capitalize() for name in names]
print("Capitalized:", capitalized)`,
        output: `Squares: [1, 4, 9, 16, 25]
Doubled: [2, 4, 6, 8, 10]
Fahrenheit: [32.0, 50.0, 68.0, 86.0, 104.0]
Word lengths: [6, 2, 7]
Capitalized: ['Alice', 'Bob', 'Charlie']`,
        explanation: "The basic form [expression for item in iterable] applies the expression to each item. This is perfect for transforming data - squaring numbers, converting units, changing string case, etc."
      },
      {
        title: "Filtering with Conditions",
        code: `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Filter: only even numbers
evens = [x for x in numbers if x % 2 == 0]
print("Even numbers:", evens)

# Filter: only numbers greater than 5
big = [x for x in numbers if x > 5]
print("Greater than 5:", big)

# Multiple conditions (AND)
even_and_big = [x for x in numbers if x % 2 == 0 and x > 4]
print("Even AND > 4:", even_and_big)

# Filter strings by length
words = ["a", "hello", "hi", "world", "python", "go"]
long_words = [w for w in words if len(w) > 3]
print("\\nLong words:", long_words)

# If-else: transform based on condition
labels = ["even" if x % 2 == 0 else "odd" for x in range(1, 6)]
print("Labels:", labels)

# Replace negatives with 0
mixed = [-5, 3, -1, 7, -2, 10]
no_negatives = [x if x >= 0 else 0 for x in mixed]
print("\\nNo negatives:", no_negatives)`,
        output: `Even numbers: [2, 4, 6, 8, 10]
Greater than 5: [6, 7, 8, 9, 10]
Even AND > 4: [6, 8, 10]

Long words: ['hello', 'world', 'python']
Labels: ['odd', 'even', 'odd', 'even', 'odd']

No negatives: [0, 3, 0, 7, 0, 10]`,
        explanation: "Add 'if condition' after 'for' to filter. Use 'if-else' BEFORE 'for' to transform conditionally. Remember: filtering 'if' comes after for, conditional expression comes before for."
      },
      {
        title: "Advanced Comprehensions",
        code: `# Nested list comprehension - flatten 2D list
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print("Flattened:", flat)

# Create pairs (nested loop)
colors = ["red", "blue"]
sizes = ["S", "M", "L"]
combinations = [(color, size) for color in colors for size in sizes]
print("\\nCombinations:", combinations)

# Dictionary comprehension
words = ["apple", "banana", "cherry"]
word_lengths = {word: len(word) for word in words}
print("\\nWord lengths dict:", word_lengths)

# Set comprehension (unique values only)
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique_squares = {x ** 2 for x in numbers}
print("Unique squares:", unique_squares)

# Filter dictionary
scores = {"Alice": 85, "Bob": 62, "Charlie": 90, "Diana": 58}
passed = {name: score for name, score in scores.items() if score >= 70}
print("\\nPassed students:", passed)

# Swap keys and values
inverted = {score: name for name, score in scores.items()}
print("Inverted:", inverted)`,
        output: `Flattened: [1, 2, 3, 4, 5, 6, 7, 8, 9]

Combinations: [('red', 'S'), ('red', 'M'), ('red', 'L'), ('blue', 'S'), ('blue', 'M'), ('blue', 'L')]

Word lengths dict: {'apple': 5, 'banana': 6, 'cherry': 6}
Unique squares: {16, 1, 4, 9}

Passed students: {'Alice': 85, 'Charlie': 90}
Inverted: {85: 'Alice', 62: 'Bob', 90: 'Charlie', 58: 'Diana'}`,
        explanation: "Use multiple 'for' clauses for nested loops. Dictionary comprehensions use {key: value}. Set comprehensions use {} without colons and automatically remove duplicates. These patterns are very powerful for data processing."
      }
    ],
    practiceQuestions: [
      {
        question: "Create a list of all numbers from 1 to 50 that are divisible by both 3 and 5.",
        hint: "Use a comprehension with 'if x % 3 == 0 and x % 5 == 0'."
      },
      {
        question: "Given a list of words, create a dictionary where keys are words and values are the words reversed.",
        hint: "Use {word: word[::-1] for word in words} syntax."
      },
      {
        question: "Flatten a list of lists and filter to keep only positive numbers.",
        hint: "Use two 'for' clauses to flatten, then add 'if num > 0' to filter."
      }
    ]
  },
  {
    id: "15",
    title: "Exception Handling",
    slug: "exception-handling",
    level: "advanced",
    category: "Error Handling",
    duration: "30 min",
    description: "Learn how to handle errors gracefully and write robust Python programs.",
    content: `# Exception Handling in Python

No program is perfect. Users enter wrong input, files go missing, networks fail, and calculations go wrong. Without proper error handling, these problems crash your program. Exception handling lets you anticipate problems, handle them gracefully, and keep your program running.

## What Are Exceptions?

An exception is an error that occurs during program execution. When Python encounters an error, it creates an exception object containing information about what went wrong. If not handled, the exception stops your program and displays an error message.

Common exceptions include:
- ValueError: Wrong type of value (like int("hello"))
- TypeError: Wrong type used (like "2" + 2)
- ZeroDivisionError: Division by zero
- FileNotFoundError: File does not exist
- KeyError: Dictionary key not found
- IndexError: List index out of range
- NameError: Variable not defined

## The try-except Block

The fundamental way to handle exceptions is the try-except block. Put code that might fail in the try block, and handle the error in the except block.

try:
    # Code that might cause an error
except:
    # Code to run if an error occurs

If an exception occurs in the try block, Python jumps to the except block instead of crashing. If no exception occurs, the except block is skipped.

## Catching Specific Exceptions

It is best practice to catch specific exceptions rather than using a bare except. This way, you handle expected errors and let unexpected ones surface (which helps with debugging).

try:
    number = int(input("Enter a number: "))
except ValueError:
    print("That is not a valid number!")

You can catch multiple exception types:
except (ValueError, TypeError):
    print("Invalid input!")

Or handle different exceptions differently:
try:
    # code
except ValueError:
    print("Invalid value!")
except ZeroDivisionError:
    print("Cannot divide by zero!")

## Getting Exception Information

You can capture the exception object to get more details:

try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error occurred: {e}")

The 'as e' part saves the exception object to variable 'e'. This is useful for logging or displaying error details.

## The else Clause

The else clause runs only if no exception occurred in the try block. It is useful for code that should only execute if the try block succeeded.

try:
    number = int(input("Enter a number: "))
except ValueError:
    print("Invalid input!")
else:
    print(f"You entered: {number}")

## The finally Clause

The finally clause always runs, whether an exception occurred or not. It is perfect for cleanup operations like closing files or network connections.

try:
    file = open("data.txt")
    data = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    if 'file' in locals():
        file.close()
    print("Cleanup complete!")

The finally block runs even if you have return statements in try or except!

## Complete try-except-else-finally

You can use all four clauses together:

try:
    # Code that might fail
except SomeError:
    # Handle the error
else:
    # Runs if no error
finally:
    # Always runs

## Raising Exceptions

Sometimes you want to raise your own exceptions. Use the raise keyword:

def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative!")
    return age

You can also re-raise an exception after logging it:
except ValueError as e:
    print(f"Logging error: {e}")
    raise  # Re-raises the same exception

## Creating Custom Exceptions

For larger programs, you might want custom exception types:

class InsufficientFundsError(Exception):
    pass

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError("Not enough money!")
    return balance - amount

Custom exceptions make your code more readable and allow for specific error handling.

## Exception Chaining

Python 3 supports exception chaining with 'from':

try:
    data = get_data()
except ConnectionError as e:
    raise DataError("Could not load data") from e

This preserves the original exception information.

## Best Practices

1. **Catch specific exceptions**: Avoid bare except - it catches everything including keyboard interrupts
2. **Keep try blocks small**: Only wrap the code that might fail
3. **Don't silence exceptions**: Always log or handle them meaningfully
4. **Use else for success code**: It makes the intent clearer
5. **Use finally for cleanup**: Ensures resources are released
6. **Raise with messages**: Include helpful error messages
7. **Document exceptions**: In docstrings, mention what exceptions a function might raise

## LBYL vs EAFP

Python has two styles for handling potential errors:

LBYL (Look Before You Leap):
if key in dictionary:
    value = dictionary[key]

EAFP (Easier to Ask Forgiveness than Permission):
try:
    value = dictionary[key]
except KeyError:
    # handle missing key

Python prefers EAFP because:
- It is often faster (no double lookup)
- It handles race conditions better
- It is more Pythonic

## Common Patterns

### Safe Conversion
def safe_int(value, default=0):
    try:
        return int(value)
    except (ValueError, TypeError):
        return default

### File Handling
try:
    with open(filename) as f:
        return f.read()
except FileNotFoundError:
    return None

### Dictionary Access
value = dictionary.get(key, default_value)  # No exception!`,
    examples: [
      {
        title: "Basic Exception Handling",
        code: `# Without exception handling - program crashes
# result = 10 / 0  # ZeroDivisionError!

# With exception handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")
    result = 0

print(f"Result: {result}")

# Handling user input
print("\\n--- User Input Example ---")
inputs = ["42", "hello", "3.14", ""]

for user_input in inputs:
    try:
        number = int(user_input)
        print(f"'{user_input}' -> {number}")
    except ValueError:
        print(f"'{user_input}' -> Invalid number!")

# Multiple exception types
print("\\n--- Multiple Exceptions ---")
def divide(a, b):
    try:
        result = a / b
        return result
    except ZeroDivisionError:
        return "Cannot divide by zero"
    except TypeError:
        return "Invalid types for division"

print(divide(10, 2))
print(divide(10, 0))
print(divide("10", 2))`,
        output: `Error: Cannot divide by zero!
Result: 0

--- User Input Example ---
'42' -> 42
'hello' -> Invalid number!
'3.14' -> Invalid number!
'' -> Invalid number!

--- Multiple Exceptions ---
5.0
Cannot divide by zero
Invalid types for division`,
        explanation: "The try block contains code that might fail. The except block handles specific errors gracefully. Without handling, these errors would crash the program. Different exception types can be handled differently."
      },
      {
        title: "Complete try-except-else-finally",
        code: `def process_file(filename):
    """Demonstrate all exception handling clauses."""
    file = None
    try:
        print(f"Attempting to open '{filename}'...")
        file = open(filename, 'r')
        content = file.read()
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found!")
        return None
    except PermissionError:
        print(f"Error: No permission to read '{filename}'!")
        return None
    else:
        # Only runs if no exception
        print(f"Success! Read {len(content)} characters.")
        return content
    finally:
        # Always runs
        if file:
            file.close()
            print("File closed.")
        print("Cleanup complete.\\n")

# Test with non-existent file
result1 = process_file("missing.txt")
print(f"Result: {result1}")

# Simulating successful read
print("--- Simulating Success ---")
try:
    data = "Hello, World!"
    print(f"Processing: {data}")
except:
    print("Error occurred")
else:
    print("Processing successful!")
finally:
    print("Always executes")`,
        output: `Attempting to open 'missing.txt'...
Error: File 'missing.txt' not found!
Cleanup complete.

Result: None
--- Simulating Success ---
Processing: Hello, World!
Processing successful!
Always executes`,
        explanation: "else runs only if try succeeds. finally always runs, even if there's a return statement. Use else for success-dependent code and finally for cleanup like closing files or connections."
      },
      {
        title: "Raising Custom Exceptions",
        code: `# Define a custom exception
class InvalidAgeError(Exception):
    """Raised when age is invalid."""
    pass

class InsufficientFundsError(Exception):
    """Raised when balance is too low."""
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        self.deficit = amount - balance
        super().__init__(
            f"Need ${amount}, but only have ${balance}. "
           f"Short by \${self.deficit}"
        )

# Using custom exceptions
def validate_age(age):
    if not isinstance(age, int):
        raise TypeError("Age must be an integer")
    if age < 0:
        raise InvalidAgeError("Age cannot be negative")
    if age > 150:
        raise InvalidAgeError("Age seems unrealistic")
    return True

# Test age validation
test_ages = [25, -5, 200, "thirty"]
for age in test_ages:
    try:
        validate_age(age)
        print(f"Age {age}: Valid")
    except InvalidAgeError as e:
        print(f"Age {age}: {e}")
    except TypeError as e:
        print(f"Age {age}: {e}")

# Bank account example
print("\\n--- Bank Account ---")
def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    new_balance = withdraw(100, 150)
except InsufficientFundsError as e:
    print(f"Transaction failed: {e}")
    print(f"You need \${e.deficit} more")
        output: `Age 25: Valid
Age -5: Age cannot be negative
Age 200: Age seems unrealistic
Age thirty: Age must be an integer

--- Bank Account ---
Transaction failed: Need $150, but only have $100. Short by $50
You need $50 more`,
        explanation: "Custom exceptions make code more readable and allow specific handling. You can add extra attributes (like balance and amount) for detailed error information. Raise exceptions with helpful messages."
      }
    ],
    practiceQuestions: [
      {
        question: "Create a safe division function that handles both zero division and type errors, returning None on failure.",
        hint: "Use try-except with multiple except clauses for different error types."
      },
      {
        question: "Write a function that reads a file and returns its contents, or a custom error message if the file doesn't exist.",
        hint: "Use try-except with FileNotFoundError and return appropriate values."
      },
      {
        question: "Create a custom PasswordTooWeakError and a function that raises it if a password is less than 8 characters.",
        hint: "Define class PasswordTooWeakError(Exception), then raise it in your validation function."
      }
    ]
  },
  {
    id: "16",
    title: "Modules and Packages",
    slug: "modules-packages",
    level: "advanced",
    category: "Code Organization",
    duration: "25 min",
    description: "Learn how to organize code using modules and packages, and use Python's standard library.",
    content: `# Modules and Packages in Python

As your programs grow larger, you need ways to organize code. Python's module and package system helps you break code into manageable pieces, reuse code across projects, and use the vast ecosystem of third-party libraries. Understanding this system is essential for any serious Python developer.

## What is a Module?

A module is simply a Python file (.py) containing code - functions, classes, variables, or runnable code. Any Python file can be imported and used as a module. This lets you organize related code together and reuse it across programs.

For example, if you have calculations in math_helpers.py, you can import it in other files and use its functions.

## Why Use Modules?

Modules provide several benefits:
1. **Code Reuse**: Write once, use everywhere
2. **Organization**: Group related code together
3. **Namespace**: Avoid naming conflicts between different parts of code
4. **Maintainability**: Easier to update and fix code
5. **Testing**: Test individual modules separately

## Importing Modules

There are several ways to import modules:

### Basic Import
import math
result = math.sqrt(16)

You access everything with the module name prefix.

### Import Specific Items
from math import sqrt, pi
result = sqrt(16)

Import specific functions/variables directly.

### Import All (Not Recommended)
from math import *
result = sqrt(16)

Imports everything directly. Avoid this - it can cause naming conflicts.

### Import with Alias
import numpy as np
import pandas as pd

Common aliases make code shorter and more readable.

## Creating Your Own Modules

Creating a module is simple - just create a Python file! For example:

# my_module.py
def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

Then use it:
import my_module
print(my_module.greet("Alice"))

## The __name__ Variable

Every module has a special __name__ variable. When a file is run directly, __name__ is "__main__". When imported, __name__ is the module name.

This lets you write code that only runs when executed directly:

def main():
    # Main program code
    pass

if __name__ == "__main__":
    main()

This pattern is extremely common and important!

## What Are Packages?

A package is a folder containing Python modules. It must have an __init__.py file (can be empty) to be recognized as a package. Packages let you organize related modules in a hierarchy.

my_package/
    __init__.py
    module1.py
    module2.py
    subpackage/
        __init__.py
        module3.py

Import from packages:
from my_package import module1
from my_package.subpackage import module3

## Python Standard Library

Python comes with a rich standard library - modules for common tasks that you can use without installing anything. Here are the most useful ones:

### os - Operating System Interface
import os
os.getcwd()  # Current directory
os.listdir() # List files
os.path.exists('file.txt')

### sys - System Parameters
import sys
sys.argv  # Command line arguments
sys.path  # Module search paths
sys.version  # Python version

### datetime - Date and Time
from datetime import datetime, timedelta
now = datetime.now()
tomorrow = now + timedelta(days=1)

### json - JSON Handling
import json
data = json.loads('{"name": "Alice"}')
text = json.dumps(data)

### random - Random Numbers
import random
random.random()  # 0 to 1
random.randint(1, 10)  # 1 to 10
random.choice(['a', 'b', 'c'])

### re - Regular Expressions
import re
match = re.search(r'\\d+', 'Price: 42')

### collections - Specialized Containers
from collections import Counter, defaultdict
Counter(['a', 'a', 'b'])  # {'a': 2, 'b': 1}

### itertools - Iteration Tools
import itertools
itertools.combinations([1, 2, 3], 2)

## Third-Party Packages

Beyond the standard library, Python has a huge ecosystem of third-party packages. Install them with pip:

pip install requests
pip install pandas
pip install numpy

Popular packages include:
- requests: HTTP requests made easy
- pandas: Data analysis and manipulation
- numpy: Numerical computing
- matplotlib: Creating charts and graphs
- flask/django: Web development
- pytest: Testing framework

## The __init__.py File

The __init__.py file marks a directory as a package. It can be empty, or can contain:
- Package initialization code
- Definitions of what to export
- Convenient imports for users

Example:
# my_package/__init__.py
from .module1 import important_function
from .module2 import SomeClass

Now users can do:
from my_package import important_function

## Managing Dependencies

For projects, track dependencies in a requirements.txt file:
requests==2.28.0
pandas>=1.5.0
numpy

Install all with: pip install -r requirements.txt

## Best Practices

1. **Use clear module names**: Names should describe content
2. **One purpose per module**: Keep modules focused
3. **Avoid circular imports**: Module A imports B, B imports A
4. **Use absolute imports**: from package.module import func
5. **Keep __init__.py minimal**: Complex code goes in modules
6. **Document your modules**: Docstrings at module level
7. **Use if __name__ == "__main__"**: For runnable modules`,
    examples: [
      {
        title: "Using Standard Library Modules",
        code: `# Operating System
import os
print("Current directory:", os.getcwd())
print("Python file exists:", os.path.exists("main.py"))

# Date and Time
from datetime import datetime, timedelta
now = datetime.now()
print(f"\\nCurrent time: {now.strftime('%Y-%m-%d %H:%M')}")
next_week = now + timedelta(days=7)
print(f"Next week: {next_week.strftime('%Y-%m-%d')}")

# Random
import random
print("\\nRandom number (1-100):", random.randint(1, 100))
fruits = ["apple", "banana", "cherry", "date"]
print("Random fruit:", random.choice(fruits))
random.shuffle(fruits)
print("Shuffled:", fruits)

# Math
import math
print(f"\\nPi: {math.pi:.4f}")
print(f"Square root of 144: {math.sqrt(144)}")
print(f"Ceiling of 4.2: {math.ceil(4.2)}")

# String operations
import string
print("\\nAll letters:", string.ascii_lowercase)
print("All digits:", string.digits)`,
        output: `Current directory: /home/user/project
Python file exists: False

Current time: 2024-01-15 14:30
Next week: 2024-01-22

Random number (1-100): 42
Random fruit: cherry
Shuffled: ['date', 'apple', 'cherry', 'banana']

Pi: 3.1416
Square root of 144: 12.0
Ceiling of 4.2: 5

All letters: abcdefghijklmnopqrstuvwxyz
All digits: 0123456789`,
        explanation: "Python's standard library provides modules for most common tasks. os for file/system operations, datetime for dates and times, random for randomness, math for mathematics, and string for string constants."
      },
      {
        title: "Collections Module",
        code: `from collections import Counter, defaultdict, namedtuple

# Counter - count occurrences
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
word_counts = Counter(words)
print("Word counts:", dict(word_counts))
print("Most common:", word_counts.most_common(2))

# Count characters in a string
text = "mississippi"
char_counts = Counter(text)
print(f"\\nCharacters in '{text}':", dict(char_counts))

# defaultdict - dictionary with default values
# Normal dict raises KeyError for missing keys
# defaultdict provides a default value

# Count words by first letter
words = ["apple", "apricot", "banana", "blueberry", "cherry"]
by_letter = defaultdict(list)
for word in words:
    by_letter[word[0]].append(word)
print("\\nWords by letter:", dict(by_letter))

# Sum values with defaultdict
sales = [("Alice", 100), ("Bob", 150), ("Alice", 200), ("Bob", 50)]
totals = defaultdict(int)
for name, amount in sales:
    totals[name] += amount
print("Sales totals:", dict(totals))

# namedtuple - tuple with named fields
Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(f"\\nPoint: ({p.x}, {p.y})")
print(f"Distance from origin: {(p.x**2 + p.y**2)**0.5}")

Person = namedtuple("Person", ["name", "age", "city"])
person = Person("Alice", 30, "NYC")
print(f"{person.name} is {person.age} years old from {person.city}")`,
        output: `Word counts: {'apple': 3, 'banana': 2, 'cherry': 1}
Most common: [('apple', 3), ('banana', 2)]

Characters in 'mississippi': {'m': 1, 'i': 4, 's': 4, 'p': 2}

Words by letter: {'a': ['apple', 'apricot'], 'b': ['banana', 'blueberry'], 'c': ['cherry']}
Sales totals: {'Alice': 300, 'Bob': 200}

Point: (3, 4)
Distance from origin: 5.0
Alice is 30 years old from NYC`,
        explanation: "Counter counts hashable objects efficiently. defaultdict provides default values for missing keys (no KeyError!). namedtuple creates tuple-like objects with named fields for cleaner code."
      },
      {
        title: "Creating and Importing Modules",
        code: `# Simulating a module structure
# In real code, these would be separate files

# === utils.py (module content) ===
def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}!"

def calculate_tax(amount, rate=0.1):
    """Calculate tax on an amount."""
    return amount * rate

PI = 3.14159
VERSION = "1.0.0"

# === main.py (importing module) ===
# Simulating: import utils

# Using module functions
message = greet("Python Developer")
print(message)

tax = calculate_tax(100, 0.15)
print(f"Tax on $100 at 15%: \${tax}")

print(f"PI value: {PI}")
print(f"Version: {VERSION}")

# === Demonstrating __name__ ===
print("\\n--- Module Name Demonstration ---")

def main():
    print("This is the main function")
    print("Running program logic...")

# This pattern lets code run only when file is executed directly
if __name__ == "__main__":
    print("File is being run directly (not imported)")
    main()
else:
    print("File is being imported as a module")

# === Import styles demonstration ===
print("\\n--- Import Styles ---")
import math

# Full module import
print(f"math.sqrt(16) = {math.sqrt(16)}")

# From import (selective)
from math import pi, ceil
print(f"pi = {pi}")
print(f"ceil(4.2) = {ceil(4.2)}")

# Alias import
import random as rnd
print(f"rnd.randint(1, 10) = {rnd.randint(1, 10)}")`,
        output: `Hello, Python Developer!
Tax on $100 at 15%: $15.0
PI value: 3.14159
Version: 1.0.0

--- Module Name Demonstration ---
File is being run directly (not imported)
This is the main function
Running program logic...

--- Import Styles ---
math.sqrt(16) = 4.0
pi = 3.141592653589793
ceil(4.2) = 5
rnd.randint(1, 10) = 7`,
        explanation: "Modules are Python files with reusable code. The if __name__ == '__main__' pattern lets code run only when executed directly. Use different import styles based on needs: full import for clarity, from import for convenience, aliases for common modules."
      }
    ],
    practiceQuestions: [
      {
        question: "Use the random module to create a simple password generator that creates a 12-character password with letters and digits.",
        hint: "Use string.ascii_letters + string.digits and random.choice() in a loop or comprehension."
      },
      {
        question: "Use the collections module to count how many times each word appears in a sentence.",
        hint: "Split the sentence into words, then use Counter from collections."
      },
      {
        question: "Write code that gets the current date and prints how many days until New Year.",
        hint: "Use datetime.now() and create a date object for Jan 1 next year, then subtract."
      }
    ]
  },
  {
    id: "17",
    title: "Lambda Functions and Functional Programming",
    slug: "lambda-functions",
    level: "advanced",
    category: "Functional Programming",
    duration: "25 min",
    description: "Master lambda functions, map, filter, reduce, and functional programming concepts in Python.",
    content: `# Lambda Functions and Functional Programming

Python supports multiple programming paradigms, including functional programming. Lambda functions, along with map(), filter(), and reduce(), allow you to write concise, expressive code. Understanding these concepts will make you a more versatile Python programmer.

## What is a Lambda Function?

A lambda function is a small, anonymous function defined in a single line. Unlike regular functions created with def, lambdas have no name and are used for simple, throwaway operations.

Syntax: lambda arguments: expression

For example:
square = lambda x: x ** 2
add = lambda a, b: a + b

Lambdas can have any number of arguments but only one expression. The expression's result is automatically returned.

## When to Use Lambdas

Lambdas are best for:
1. Simple operations that fit in one line
2. Passing functions as arguments to other functions
3. Temporary functions you only use once
4. Sorting with custom keys

Avoid lambdas when:
1. The logic is complex
2. You need multiple statements
3. You need to reuse the function in multiple places
4. Readability suffers

## Lambdas vs Regular Functions

# Lambda
square = lambda x: x ** 2

# Equivalent regular function
def square(x):
    return x ** 2

Both work the same, but regular functions:
- Can have multiple statements
- Have a name for better debugging
- Can have docstrings
- Are more readable for complex operations

## The map() Function

map() applies a function to every item in an iterable and returns an iterator. It is a core functional programming tool.

Syntax: map(function, iterable)

# Double all numbers
numbers = [1, 2, 3, 4, 5]
doubled = map(lambda x: x * 2, numbers)
print(list(doubled))  # [2, 4, 6, 8, 10]

With regular function:
def double(x):
    return x * 2
doubled = map(double, numbers)

## The filter() Function

filter() keeps only items where the function returns True. It is perfect for selecting items that meet a condition.

Syntax: filter(function, iterable)

# Keep only even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
evens = filter(lambda x: x % 2 == 0, numbers)
print(list(evens))  # [2, 4, 6, 8]

The function should return True or False (or truthy/falsy values).

## The reduce() Function

reduce() applies a function cumulatively to items, reducing the sequence to a single value. It is in the functools module.

from functools import reduce
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda x, y: x + y, numbers)
# Works like: ((((1+2)+3)+4)+5) = 15

Common uses:
- Sum all items
- Find maximum/minimum
- Concatenate strings
- Calculate factorial

## Combining map, filter, and reduce

These functions can be chained together for powerful data processing:

# Sum of squares of even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
result = reduce(
    lambda a, b: a + b,
    map(lambda x: x ** 2,
        filter(lambda x: x % 2 == 0, numbers))
)
# Filter even: [2, 4, 6, 8]
# Square: [4, 16, 36, 64]
# Sum: 120

## Lambda with sorted()

Lambdas shine when providing custom sorting keys:

# Sort by absolute value
numbers = [-5, 2, -1, 8, -3]
sorted_nums = sorted(numbers, key=lambda x: abs(x))
# Result: [-1, 2, -3, -5, 8]

# Sort dictionaries by value
people = [
    {'name': 'Alice', 'age': 30},
    {'name': 'Bob', 'age': 25},
    {'name': 'Charlie', 'age': 35}
]
sorted_by_age = sorted(people, key=lambda p: p['age'])

## Lambda with max() and min()

# Find longest word
words = ['apple', 'pie', 'banana', 'a']
longest = max(words, key=lambda w: len(w))  # 'banana'

# Find person with highest age
oldest = max(people, key=lambda p: p['age'])

## Higher-Order Functions

A higher-order function takes functions as arguments or returns functions. map, filter, and sorted are examples. You can create your own:

def apply_twice(func, value):
    return func(func(value))

result = apply_twice(lambda x: x * 2, 5)  # 20

## Closures

Lambda functions can capture variables from their enclosing scope:

def multiplier(n):
    return lambda x: x * n

double = multiplier(2)
triple = multiplier(3)

print(double(5))  # 10
print(triple(5))  # 15

## List Comprehensions vs map/filter

List comprehensions often provide a cleaner alternative:

# map equivalent
squared = [x ** 2 for x in numbers]

# filter equivalent
evens = [x for x in numbers if x % 2 == 0]

# map + filter equivalent
even_squares = [x ** 2 for x in numbers if x % 2 == 0]

For simple operations, comprehensions are usually more readable. Use map/filter when:
- Working with existing functions
- You need lazy evaluation (iterators)
- Functional style is preferred

## Best Practices

1. **Keep lambdas simple**: One expression only
2. **Prefer comprehensions**: For simple transformations
3. **Use named functions**: For complex or reused logic
4. **Convert to list**: map/filter return iterators
5. **Avoid nested lambdas**: They hurt readability
6. **Use operator module**: For common operations`,
    examples: [
      {
        title: "Lambda Basics and Comparisons",
        code: `# Basic lambda functions
square = lambda x: x ** 2
add = lambda a, b: a + b
greet = lambda name: f"Hello, {name}!"

print("Square of 5:", square(5))
print("3 + 4 =", add(3, 4))
print(greet("Python"))

# Lambda with multiple arguments
calculate = lambda a, b, c: a * b + c
print("2 * 3 + 4 =", calculate(2, 3, 4))

# Lambda with conditional expression
is_even = lambda x: "even" if x % 2 == 0 else "odd"
print("\\n5 is", is_even(5))
print("6 is", is_even(6))

# Immediately invoked lambda
result = (lambda x, y: x + y)(10, 20)
print("\\nImmediate result:", result)

# Compare with regular function
def regular_square(x):
    """Returns the square of x."""
    return x ** 2

# Both work the same
print("\\nLambda square:", square(4))
print("Regular square:", regular_square(4))

# But regular functions have names and docstrings
print("Lambda name:", square.__name__)
print("Regular name:", regular_square.__name__)`,
        output: `Square of 5: 25
3 + 4 = 7
Hello, Python!
2 * 3 + 4 = 10

5 is odd
6 is even

Immediate result: 30

Lambda square: 16
Regular square: 16
Lambda name: <lambda>
Regular name: regular_square`,
        explanation: "Lambda functions are concise one-liners. They can take multiple arguments and include conditionals. The main trade-off is they lack names and docstrings, making debugging harder. Use them for simple, throwaway functions."
      },
      {
        title: "map(), filter(), and reduce()",
        code: `from functools import reduce

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map - apply function to all items
squared = list(map(lambda x: x ** 2, numbers))
print("Squared:", squared)

# map with multiple iterables
a = [1, 2, 3]
b = [10, 20, 30]
sums = list(map(lambda x, y: x + y, a, b))
print("Sums:", sums)

# filter - keep items that pass test
evens = list(filter(lambda x: x % 2 == 0, numbers))
print("\\nEvens:", evens)

# Filter strings by length
words = ["a", "hello", "hi", "world", "python"]
long_words = list(filter(lambda w: len(w) > 3, words))
print("Long words:", long_words)

# reduce - combine all items into one
total = reduce(lambda a, b: a + b, numbers)
print("\\nSum with reduce:", total)

# Find maximum with reduce
maximum = reduce(lambda a, b: a if a > b else b, numbers)
print("Max with reduce:", maximum)

# Combine all three!
# Sum of squares of even numbers
result = reduce(
    lambda a, b: a + b,
    map(lambda x: x ** 2,
        filter(lambda x: x % 2 == 0, numbers))
)
print("\\nSum of even squares:", result)

# More readable with intermediate variables
evens = filter(lambda x: x % 2 == 0, numbers)
squares = map(lambda x: x ** 2, evens)
total = reduce(lambda a, b: a + b, squares)
print("Same result:", total)`,
        output: `Squared: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
Sums: [11, 22, 33]

Evens: [2, 4, 6, 8, 10]
Long words: ['hello', 'world', 'python']

Sum with reduce: 55
Max with reduce: 10

Sum of even squares: 220
Same result: 220`,
        explanation: "map() transforms each item. filter() selects items matching a condition. reduce() combines all items into one value. They can be chained for complex data processing, but readability matters - use intermediate variables when needed."
      },
      {
        title: "Lambdas with sorted(), max(), min()",
        code: `# Sort by custom key
numbers = [-5, 3, -2, 8, -1, 4]

# Sort by absolute value
by_absolute = sorted(numbers, key=lambda x: abs(x))
print("By absolute value:", by_absolute)

# Sort strings by length
words = ["python", "is", "awesome", "and", "powerful"]
by_length = sorted(words, key=lambda w: len(w))
print("By length:", by_length)

# Sort dictionaries
people = [
    {"name": "Alice", "age": 30, "salary": 50000},
    {"name": "Bob", "age": 25, "salary": 60000},
    {"name": "Charlie", "age": 35, "salary": 45000}
]

by_age = sorted(people, key=lambda p: p["age"])
print("\\nBy age:", [p["name"] for p in by_age])

by_salary = sorted(people, key=lambda p: p["salary"], reverse=True)
print("By salary (desc):", [p["name"] for p in by_salary])

# Multiple sort criteria (age, then name)
people2 = [
    {"name": "Alice", "age": 30},
    {"name": "Zoe", "age": 30},
    {"name": "Bob", "age": 25}
]
by_age_name = sorted(people2, key=lambda p: (p["age"], p["name"]))
print("By age, then name:", [(p["name"], p["age"]) for p in by_age_name])

# max and min with key
longest_word = max(words, key=lambda w: len(w))
shortest_word = min(words, key=lambda w: len(w))
print(f"\\nLongest: '{longest_word}', Shortest: '{shortest_word}'")

highest_paid = max(people, key=lambda p: p["salary"])
print(f"Highest paid: {highest_paid['name']} (\${highest_paid['salary']})")

youngest = min(people, key=lambda p: p["age"])
print(f"Youngest: {youngest['name']} (age {youngest['age']})")`,
        output: `By absolute value: [-1, -2, 3, 4, -5, 8]
By length: ['is', 'and', 'python', 'awesome', 'powerful']

By age: ['Bob', 'Alice', 'Charlie']
By salary (desc): ['Bob', 'Alice', 'Charlie']
By age, then name: [('Bob', 25), ('Alice', 30), ('Zoe', 30)]

Longest: 'powerful', Shortest: 'is'
Highest paid: Bob ($60000)
Youngest: Bob (age 25)`,
        explanation: "The key parameter accepts a function that extracts a comparison value. Lambdas are perfect for this! Use tuples for multi-level sorting. max() and min() also accept key for custom comparisons."
      }
    ],
    practiceQuestions: [
      {
        question: "Use map() and a lambda to convert a list of temperatures from Celsius to Fahrenheit (F = C * 9/5 + 32).",
        hint: "list(map(lambda c: c * 9/5 + 32, celsius_temps))"
      },
      {
        question: "Use filter() to get all words from a list that start with a vowel (a, e, i, o, u).",
        hint: "Use word[0].lower() in 'aeiou' in your lambda condition."
      },
      {
        question: "Sort a list of tuples (name, score) by score in descending order using sorted() and a lambda.",
        hint: "sorted(data, key=lambda x: x[1], reverse=True)"
      }
    ]
  }
];

export const quizzes: Quiz[] = [
  {
    id: "quiz-1",
    lessonId: "1",
    title: "What is Python? Quiz",
    questions: [
      {
        id: "q1-1",
        question: "Who created Python?",
        options: ["Guido van Rossum", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
        correctAnswer: 0,
        explanation: "Python was created by Guido van Rossum and first released in 1991."
      },
      {
        id: "q1-2",
        question: "What does print() do in Python?",
        options: ["Creates a printer", "Displays text on screen", "Draws pictures", "Sends an email"],
        correctAnswer: 1,
        explanation: "The print() function displays text or values on the screen."
      },
      {
        id: "q1-3",
        question: "What is the output of print(5 + 3)?",
        options: ["53", "8", "5 + 3", "Error"],
        correctAnswer: 1,
        explanation: "Python calculates 5 + 3 = 8 and prints the result."
      },
      {
        id: "q1-4",
        question: "Python is named after:",
        options: ["A snake", "A movie", "Monty Python comedy group", "A scientist"],
        correctAnswer: 2,
        explanation: "Python is named after the British comedy group Monty Python."
      },
      {
        id: "q1-5",
        question: "What symbol starts a comment in Python?",
        options: ["//", "#", "/*", "--"],
        correctAnswer: 1,
        explanation: "Comments in Python start with the # symbol."
      }
    ]
  },
  {
    id: "quiz-2",
    lessonId: "2",
    title: "Variables Quiz",
    questions: [
      {
        id: "q2-1",
        question: "Which is a valid variable name?",
        options: ["2name", "my-name", "my_name", "my name"],
        correctAnswer: 2,
        explanation: "Variable names can't start with numbers, contain hyphens, or have spaces. my_name uses underscores which is valid."
      },
      {
        id: "q2-2",
        question: "What does age = 25 do?",
        options: ["Checks if age equals 25", "Assigns 25 to variable age", "Creates an error", "Prints 25"],
        correctAnswer: 1,
        explanation: "The = sign assigns the value 25 to the variable named age."
      },
      {
        id: "q2-3",
        question: "Are 'Name' and 'name' the same variable?",
        options: ["Yes", "No", "Sometimes", "Only in Python 3"],
        correctAnswer: 1,
        explanation: "Python is case-sensitive, so 'Name' and 'name' are different variables."
      },
      {
        id: "q2-4",
        question: "What is x after: x = 10; x = x + 5?",
        options: ["10", "5", "15", "Error"],
        correctAnswer: 2,
        explanation: "First x is 10, then x + 5 = 15 is assigned back to x."
      },
      {
        id: "q2-5",
        question: "What does a, b = 1, 2 do?",
        options: ["Creates an error", "Assigns 1 to a and 2 to b", "Assigns 1,2 to both a and b", "Assigns 2,1 to a and b"],
        correctAnswer: 1,
        explanation: "This is multiple assignment: a gets 1 and b gets 2 in one line."
      }
    ]
  },
  {
    id: "quiz-3",
    lessonId: "3",
    title: "Data Types Quiz",
    questions: [
      {
        id: "q3-1",
        question: "What type is 42?",
        options: ["str", "float", "int", "bool"],
        correctAnswer: 2,
        explanation: "42 is a whole number, which is an integer (int)."
      },
      {
        id: "q3-2",
        question: "What type is 3.14?",
        options: ["str", "float", "int", "bool"],
        correctAnswer: 1,
        explanation: "3.14 has a decimal point, making it a float."
      },
      {
        id: "q3-3",
        question: "What is type(\"Hello\")?",
        options: ["int", "float", "str", "bool"],
        correctAnswer: 2,
        explanation: "Text in quotes is a string (str)."
      },
      {
        id: "q3-4",
        question: "What does int(\"42\") return?",
        options: ["\"42\"", "42", "Error", "42.0"],
        correctAnswer: 1,
        explanation: "int() converts the string \"42\" to the integer 42."
      },
      {
        id: "q3-5",
        question: "What does \"Hi\" + \"World\" produce?",
        options: ["Hi World", "HiWorld", "Error", "Hi + World"],
        correctAnswer: 1,
        explanation: "The + operator concatenates strings without adding a space."
      }
    ]
  },
  {
    id: "quiz-4",
    lessonId: "4",
    title: "Input/Output Quiz",
    questions: [
      {
        id: "q4-1",
        question: "What does input() always return?",
        options: ["Integer", "Float", "String", "Boolean"],
        correctAnswer: 2,
        explanation: "input() always returns a string, even if the user types a number."
      },
      {
        id: "q4-2",
        question: "How do you print multiple items with spaces between them?",
        options: ["print(a + b)", "print(a, b)", "print(a - b)", "print(a * b)"],
        correctAnswer: 1,
        explanation: "Commas in print() separate items with spaces automatically."
      },
      {
        id: "q4-3",
        question: "What is an f-string?",
        options: ["A float string", "A formatted string literal", "A function string", "A file string"],
        correctAnswer: 1,
        explanation: "f-strings (f\"...\") allow you to embed variables directly in strings using {variable}."
      },
      {
        id: "q4-4",
        question: "How to get a number from user input?",
        options: ["input()", "int(input())", "number(input())", "input(int())"],
        correctAnswer: 1,
        explanation: "Wrap input() with int() or float() to convert the string to a number."
      },
      {
        id: "q4-5",
        question: "What does print(end=\"\") do?",
        options: ["Ends the program", "Prints 'end'", "Prevents newline", "Creates an error"],
        correctAnswer: 2,
        explanation: "end=\"\" makes print() not add a newline at the end."
      }
    ]
  },
  {
    id: "quiz-5",
    lessonId: "5",
    title: "Operators Quiz",
    questions: [
      {
        id: "q5-1",
        question: "What is 17 // 5?",
        options: ["3.4", "3", "4", "2"],
        correctAnswer: 1,
        explanation: "// is floor division, which divides and rounds down: 17 / 5 = 3.4, floor = 3."
      },
      {
        id: "q5-2",
        question: "What is 17 % 5?",
        options: ["3.4", "3", "2", "0"],
        correctAnswer: 2,
        explanation: "% gives the remainder: 17 divided by 5 is 3 remainder 2."
      },
      {
        id: "q5-3",
        question: "What is 2 ** 4?",
        options: ["8", "6", "16", "24"],
        correctAnswer: 2,
        explanation: "** is exponentiation: 2^4 = 2 * 2 * 2 * 2 = 16."
      },
      {
        id: "q5-4",
        question: "What is True and False?",
        options: ["True", "False", "Error", "None"],
        correctAnswer: 1,
        explanation: "'and' returns True only if both are True. Since one is False, result is False."
      },
      {
        id: "q5-5",
        question: "What is 5 == 5?",
        options: ["5", "True", "False", "Error"],
        correctAnswer: 1,
        explanation: "== compares values. 5 equals 5, so it returns True."
      }
    ]
  },
  {
    id: "quiz-6",
    lessonId: "6",
    title: "Loops Quiz",
    questions: [
      {
        id: "q6-1",
        question: "What does range(5) produce?",
        options: ["1,2,3,4,5", "0,1,2,3,4", "0,1,2,3,4,5", "1,2,3,4"],
        correctAnswer: 1,
        explanation: "range(5) produces 0, 1, 2, 3, 4 (5 numbers starting from 0)."
      },
      {
        id: "q6-2",
        question: "When should you use a while loop?",
        options: ["When you know iterations", "When iterations are unknown", "Never", "Only for lists"],
        correctAnswer: 1,
        explanation: "Use while when you don't know how many times to repeat (repeat until condition)."
      },
      {
        id: "q6-3",
        question: "What does 'break' do?",
        options: ["Pauses the loop", "Stops the loop completely", "Skips one iteration", "Breaks the program"],
        correctAnswer: 1,
        explanation: "'break' immediately exits the loop, stopping all further iterations."
      },
      {
        id: "q6-4",
        question: "What does 'continue' do?",
        options: ["Stops the loop", "Skips to next iteration", "Continues forever", "Restarts the loop"],
        correctAnswer: 1,
        explanation: "'continue' skips the rest of current iteration and moves to the next one."
      },
      {
        id: "q6-5",
        question: "What is range(1, 10, 2)?",
        options: ["1,2,3...10", "1,3,5,7,9", "2,4,6,8", "1,10,2"],
        correctAnswer: 1,
        explanation: "range(1, 10, 2) starts at 1, goes to 9, stepping by 2: 1, 3, 5, 7, 9."
      }
    ]
  },
  {
    id: "quiz-7",
    lessonId: "7",
    title: "Functions Quiz",
    questions: [
      {
        id: "q7-1",
        question: "How do you define a function?",
        options: ["function name():", "def name():", "create name():", "fn name():"],
        correctAnswer: 1,
        explanation: "In Python, functions are defined using the 'def' keyword."
      },
      {
        id: "q7-2",
        question: "What is a parameter?",
        options: ["Function output", "Function name", "Input placeholder", "Return value"],
        correctAnswer: 2,
        explanation: "Parameters are variables in the function definition that act as placeholders for input values."
      },
      {
        id: "q7-3",
        question: "What does 'return' do?",
        options: ["Prints a value", "Sends a value back", "Restarts function", "Ends program"],
        correctAnswer: 1,
        explanation: "'return' sends a value back to where the function was called."
      },
      {
        id: "q7-4",
        question: "What is a default parameter?",
        options: ["Required parameter", "Parameter with preset value", "First parameter", "Last parameter"],
        correctAnswer: 1,
        explanation: "A default parameter has a preset value used when no argument is provided."
      },
      {
        id: "q7-5",
        question: "Can a function return multiple values?",
        options: ["No", "Yes, as a tuple", "Only in Python 3", "Only integers"],
        correctAnswer: 1,
        explanation: "Yes, Python functions can return multiple values as a tuple."
      }
    ]
  },
  {
    id: "quiz-8",
    lessonId: "8",
    title: "Lists and Tuples Quiz",
    questions: [
      {
        id: "q8-1",
        question: "How do you create a list?",
        options: ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "<1, 2, 3>"],
        correctAnswer: 1,
        explanation: "Lists use square brackets []."
      },
      {
        id: "q8-2",
        question: "What is the index of the first item?",
        options: ["1", "0", "-1", "First"],
        correctAnswer: 1,
        explanation: "Python indexes start at 0, so the first item is at index 0."
      },
      {
        id: "q8-3",
        question: "What is the difference between list and tuple?",
        options: ["No difference", "Lists are immutable", "Tuples are immutable", "Lists use ()"],
        correctAnswer: 2,
        explanation: "Tuples are immutable (cannot be changed), while lists are mutable."
      },
      {
        id: "q8-4",
        question: "What does list[-1] give?",
        options: ["First item", "Error", "Last item", "Nothing"],
        correctAnswer: 2,
        explanation: "Negative indexing: -1 gives the last item, -2 gives second to last, etc."
      },
      {
        id: "q8-5",
        question: "What does append() do?",
        options: ["Removes last item", "Adds to end", "Adds to beginning", "Sorts the list"],
        correctAnswer: 1,
        explanation: "append() adds an item to the end of a list."
      }
    ]
  },
  {
    id: "quiz-9",
    lessonId: "9",
    title: "Dictionaries Quiz",
    questions: [
      {
        id: "q9-1",
        question: "How do you create a dictionary?",
        options: ["[key: value]", "{key: value}", "(key: value)", "<key: value>"],
        correctAnswer: 1,
        explanation: "Dictionaries use curly braces {} with key: value pairs."
      },
      {
        id: "q9-2",
        question: "How do you access a value by key?",
        options: ["dict.key", "dict[key]", "dict(key)", "dict->key"],
        correctAnswer: 1,
        explanation: "Use square brackets with the key: dict[key] or dict.get(key)."
      },
      {
        id: "q9-3",
        question: "Can dictionary keys be duplicated?",
        options: ["Yes", "No", "Sometimes", "Only strings"],
        correctAnswer: 1,
        explanation: "Dictionary keys must be unique. If you use the same key twice, the second value overwrites the first."
      },
      {
        id: "q9-4",
        question: "What does dict.keys() return?",
        options: ["All values", "All keys", "All pairs", "Dictionary length"],
        correctAnswer: 1,
        explanation: "keys() returns all the keys in the dictionary."
      },
      {
        id: "q9-5",
        question: "What happens with dict['nonexistent']?",
        options: ["Returns None", "Returns 0", "Raises KeyError", "Creates the key"],
        correctAnswer: 2,
        explanation: "Accessing a non-existent key with [] raises a KeyError. Use get() for safe access."
      }
    ]
  },
  {
    id: "quiz-10",
    lessonId: "10",
    title: "OOP Quiz",
    questions: [
      {
        id: "q10-1",
        question: "What is a class?",
        options: ["A variable type", "A blueprint for objects", "A function", "A loop type"],
        correctAnswer: 1,
        explanation: "A class is a blueprint or template that defines what attributes and methods an object will have."
      },
      {
        id: "q10-2",
        question: "What is __init__?",
        options: ["A destructor", "A constructor", "A loop", "A variable"],
        correctAnswer: 1,
        explanation: "__init__ is the constructor method that runs when creating a new object."
      },
      {
        id: "q10-3",
        question: "What is 'self' in a method?",
        options: ["The class name", "Reference to current object", "A keyword", "A variable type"],
        correctAnswer: 1,
        explanation: "'self' refers to the current instance of the class, allowing access to its attributes and methods."
      },
      {
        id: "q10-4",
        question: "What is inheritance?",
        options: ["Copying code", "Class getting attributes from parent", "Creating objects", "Defining methods"],
        correctAnswer: 1,
        explanation: "Inheritance allows a class to inherit attributes and methods from another class."
      },
      {
        id: "q10-5",
        question: "What does super() do?",
        options: ["Creates super object", "Calls parent class method", "Makes class faster", "Deletes object"],
        correctAnswer: 1,
        explanation: "super() allows you to call methods from the parent class."
      }
    ]
  },
  {
    id: "quiz-13",
    lessonId: "13",
    title: "String Methods Quiz",
    questions: [
      {
        id: "q13-1",
        question: "What does 'Hello World'.upper() return?",
        options: ["hello world", "HELLO WORLD", "Hello World", "hELLO wORLD"],
        correctAnswer: 1,
        explanation: "upper() converts all characters to uppercase."
      },
      {
        id: "q13-2",
        question: "What does 'apple,banana,cherry'.split(',') return?",
        options: ["'apple banana cherry'", "['apple', 'banana', 'cherry']", "('apple', 'banana', 'cherry')", "Error"],
        correctAnswer: 1,
        explanation: "split() divides a string into a list based on the delimiter."
      },
      {
        id: "q13-3",
        question: "What does ' hello '.strip() return?",
        options: ["' hello '", "'hello '", "' hello'", "'hello'"],
        correctAnswer: 3,
        explanation: "strip() removes whitespace from both ends of the string."
      },
      {
        id: "q13-4",
        question: "What is an f-string?",
        options: ["A filtered string", "A formatted string literal", "A function string", "A file string"],
        correctAnswer: 1,
        explanation: "f-strings (formatted string literals) allow embedding expressions inside string literals using {expression}."
      },
      {
        id: "q13-5",
        question: "What does '-'.join(['a', 'b', 'c']) return?",
        options: ["'abc'", "'a-b-c'", "['-a', '-b', '-c']", "Error"],
        correctAnswer: 1,
        explanation: "join() combines list elements into a string with the separator between them."
      }
    ]
  },
  {
    id: "quiz-14",
    lessonId: "14",
    title: "List Comprehensions Quiz",
    questions: [
      {
        id: "q14-1",
        question: "What does [x*2 for x in [1,2,3]] produce?",
        options: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "Error"],
        correctAnswer: 1,
        explanation: "The comprehension doubles each element: 1*2=2, 2*2=4, 3*2=6."
      },
      {
        id: "q14-2",
        question: "What does [x for x in range(10) if x % 2 == 0] return?",
        options: ["[1, 3, 5, 7, 9]", "[0, 2, 4, 6, 8]", "[2, 4, 6, 8, 10]", "[0, 1, 2, 3, 4]"],
        correctAnswer: 1,
        explanation: "The condition filters to keep only even numbers from 0-9."
      },
      {
        id: "q14-3",
        question: "What is {x: x**2 for x in [1,2,3]}?",
        options: ["A list", "A dictionary", "A set", "A tuple"],
        correctAnswer: 1,
        explanation: "Using key:value syntax with curly braces creates a dictionary comprehension."
      },
      {
        id: "q14-4",
        question: "Where does the filtering 'if' go in a comprehension?",
        options: ["Before 'for'", "After 'for'", "At the beginning", "At the end"],
        correctAnswer: 1,
        explanation: "Filtering 'if' comes after 'for': [x for x in list if condition]"
      },
      {
        id: "q14-5",
        question: "What does {x for x in [1,1,2,2,3]} create?",
        options: ["A list with duplicates", "A set (unique values)", "A dictionary", "Error"],
        correctAnswer: 1,
        explanation: "Curly braces without colons create a set, which automatically removes duplicates."
      }
    ]
  },
  {
    id: "quiz-15",
    lessonId: "15",
    title: "Exception Handling Quiz",
    questions: [
      {
        id: "q15-1",
        question: "Which keyword starts an exception handling block?",
        options: ["catch", "try", "handle", "error"],
        correctAnswer: 1,
        explanation: "The 'try' keyword begins the block where exceptions might occur."
      },
      {
        id: "q15-2",
        question: "What happens if an exception is not caught?",
        options: ["Program continues", "Program crashes", "Exception is ignored", "Loops forever"],
        correctAnswer: 1,
        explanation: "Uncaught exceptions cause the program to terminate with an error message."
      },
      {
        id: "q15-3",
        question: "When does the 'finally' block execute?",
        options: ["Only on error", "Only on success", "Always", "Never"],
        correctAnswer: 2,
        explanation: "finally always executes, whether an exception occurred or not. It's used for cleanup."
      },
      {
        id: "q15-4",
        question: "What does 'raise' do?",
        options: ["Catches an exception", "Creates/throws an exception", "Ignores an exception", "Logs an exception"],
        correctAnswer: 1,
        explanation: "raise creates and throws an exception, stopping normal execution."
      },
      {
        id: "q15-5",
        question: "When does the 'else' clause run in try-except-else?",
        options: ["When exception occurs", "When no exception occurs", "Always", "Before try"],
        correctAnswer: 1,
        explanation: "else runs only if no exception occurred in the try block."
      }
    ]
  },
  {
    id: "quiz-16",
    lessonId: "16",
    title: "Modules and Packages Quiz",
    questions: [
      {
        id: "q16-1",
        question: "What is a Python module?",
        options: ["A folder", "A Python file (.py)", "A class", "A function"],
        correctAnswer: 1,
        explanation: "A module is a Python file containing code (functions, classes, variables) that can be imported."
      },
      {
        id: "q16-2",
        question: "What does 'import math as m' do?",
        options: ["Renames math module", "Creates alias m for math", "Imports only 'm'", "Error"],
        correctAnswer: 1,
        explanation: "'as' creates an alias, so you can use m.sqrt() instead of math.sqrt()."
      },
      {
        id: "q16-3",
        question: "What is __name__ when a file is run directly?",
        options: ["The filename", "'__main__'", "None", "'module'"],
        correctAnswer: 1,
        explanation: "__name__ is '__main__' when the file is executed directly, not imported."
      },
      {
        id: "q16-4",
        question: "What file makes a folder a Python package?",
        options: ["main.py", "__init__.py", "package.py", "setup.py"],
        correctAnswer: 1,
        explanation: "__init__.py marks a directory as a Python package (can be empty)."
      },
      {
        id: "q16-5",
        question: "Which is NOT a standard library module?",
        options: ["os", "random", "numpy", "json"],
        correctAnswer: 2,
        explanation: "numpy is a third-party package that must be installed. os, random, json come with Python."
      }
    ]
  },
  {
    id: "quiz-17",
    lessonId: "17",
    title: "Lambda Functions Quiz",
    questions: [
      {
        id: "q17-1",
        question: "What is a lambda function?",
        options: ["A named function", "An anonymous one-line function", "A class method", "A module"],
        correctAnswer: 1,
        explanation: "Lambda is an anonymous (unnamed) function that fits in a single expression."
      },
      {
        id: "q17-2",
        question: "What does map(lambda x: x*2, [1,2,3]) return?",
        options: ["[2, 4, 6]", "An iterator", "[1, 2, 3]", "Error"],
        correctAnswer: 1,
        explanation: "map() returns an iterator (not a list). Use list() to convert: list(map(...))."
      },
      {
        id: "q17-3",
        question: "What does filter() do?",
        options: ["Transforms items", "Keeps items where function returns True", "Combines items", "Sorts items"],
        correctAnswer: 1,
        explanation: "filter() keeps only items where the function returns True (or truthy)."
      },
      {
        id: "q17-4",
        question: "Which module contains reduce()?",
        options: ["math", "functools", "itertools", "collections"],
        correctAnswer: 1,
        explanation: "reduce() is in the functools module: from functools import reduce"
      },
      {
        id: "q17-5",
        question: "What is the key parameter in sorted() for?",
        options: ["Password protection", "Custom comparison function", "Sorting direction", "Item count"],
        correctAnswer: 1,
        explanation: "key accepts a function that extracts a comparison value from each item."
      }
    ]
  }
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find(lesson => lesson.slug === slug);
}

export function getQuizByLessonId(lessonId: string): Quiz | undefined {
  return quizzes.find(quiz => quiz.lessonId === lessonId);
}

export function getLessonsByLevel(level: Lesson["level"]): Lesson[] {
  return lessons.filter(lesson => lesson.level === level);
}
