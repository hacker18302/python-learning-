export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  lessonId: string;
  lessonTitle: string;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  {
    lessonId: "what-is-python",
    lessonTitle: "What is Python?",
    questions: [
      {
        id: 1,
        question: "Who created the Python programming language?",
        options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"],
        correctAnswer: 1,
        explanation: "Guido van Rossum created Python in 1991. He named it after the British comedy group Monty Python."
      },
      {
        id: 2,
        question: "Which of the following is TRUE about Python?",
        options: [
          "Python is a compiled language only",
          "Python code must be written in lowercase",
          "Python is an interpreted, high-level language",
          "Python cannot be used for web development"
        ],
        correctAnswer: 2,
        explanation: "Python is an interpreted, high-level, general-purpose programming language. It can be used for web development, data science, AI, and much more."
      },
      {
        id: 3,
        question: "What is the file extension for Python files?",
        options: [".python", ".pt", ".py", ".pyt"],
        correctAnswer: 2,
        explanation: "Python files use the .py extension. For example: hello.py, calculator.py, etc."
      },
      {
        id: 4,
        question: "Which of these is NOT a feature of Python?",
        options: [
          "Easy to learn syntax",
          "Requires memory management by programmer",
          "Cross-platform compatibility",
          "Large standard library"
        ],
        correctAnswer: 1,
        explanation: "Python has automatic memory management (garbage collection). Programmers don't need to manually manage memory like in C or C++."
      },
      {
        id: 5,
        question: "What does 'interpreted language' mean?",
        options: [
          "Code is converted to machine code before running",
          "Code is executed line by line at runtime",
          "Code can only run on specific machines",
          "Code must be compiled first"
        ],
        correctAnswer: 1,
        explanation: "An interpreted language executes code line by line at runtime, without needing a separate compilation step. This makes development faster and debugging easier."
      }
    ]
  },
  {
    lessonId: "variables",
    lessonTitle: "Variables in Python",
    questions: [
      {
        id: 1,
        question: "Which is the correct way to create a variable in Python?",
        options: ["var name = 'John'", "name = 'John'", "string name = 'John'", "let name = 'John'"],
        correctAnswer: 1,
        explanation: "In Python, you simply write the variable name followed by = and the value. No keyword like var, let, or type declaration is needed."
      },
      {
        id: 2,
        question: "Which variable name is INVALID in Python?",
        options: ["my_name", "_count", "2nd_value", "firstName"],
        correctAnswer: 2,
        explanation: "Variable names cannot start with a number. '2nd_value' is invalid. Valid names can start with letters or underscores."
      },
      {
        id: 3,
        question: "What will be the output of: x = 5; x = 10; print(x)",
        options: ["5", "10", "15", "Error"],
        correctAnswer: 1,
        explanation: "When you assign a new value to a variable, the old value is replaced. x first becomes 5, then becomes 10. The final value is 10."
      },
      {
        id: 4,
        question: "Which naming convention is recommended for variables in Python?",
        options: ["camelCase", "PascalCase", "snake_case", "UPPERCASE"],
        correctAnswer: 2,
        explanation: "Python's PEP 8 style guide recommends snake_case for variable names: words are lowercase and separated by underscores (e.g., user_name, total_count)."
      },
      {
        id: 5,
        question: "What is the result of: a, b, c = 1, 2, 3",
        options: [
          "Error - invalid syntax",
          "a=1, b=2, c=3",
          "All variables equal to 3",
          "All variables equal to 1"
        ],
        correctAnswer: 1,
        explanation: "Python supports multiple assignment in one line. Each variable gets the corresponding value: a=1, b=2, c=3."
      }
    ]
  },
  {
    lessonId: "data-types",
    lessonTitle: "Data Types in Python",
    questions: [
      {
        id: 1,
        question: "What is the data type of: x = 3.14",
        options: ["int", "float", "double", "decimal"],
        correctAnswer: 1,
        explanation: "Numbers with decimal points are float (floating-point) type in Python. 3.14 is a float."
      },
      {
        id: 2,
        question: "Which function is used to check the type of a variable?",
        options: ["typeof()", "type()", "datatype()", "check()"],
        correctAnswer: 1,
        explanation: "The type() function returns the data type of any value or variable. Example: type(5) returns <class 'int'>."
      },
      {
        id: 3,
        question: "What is the output of: type(True)",
        options: ["<class 'int'>", "<class 'str'>", "<class 'bool'>", "<class 'boolean'>"],
        correctAnswer: 2,
        explanation: "True and False are boolean values in Python. The type is 'bool', not 'boolean'."
      },
      {
        id: 4,
        question: "Which is a valid string in Python?",
        options: ["'Hello'", '"Hello"', "'''Hello'''", "All of the above"],
        correctAnswer: 3,
        explanation: "Python allows strings to be created using single quotes, double quotes, or triple quotes. All three are valid ways to create a string."
      },
      {
        id: 5,
        question: "What will int('42') return?",
        options: ["'42'", "42", "Error", "4.2"],
        correctAnswer: 1,
        explanation: "The int() function converts a string containing a number to an integer. '42' (string) becomes 42 (integer)."
      }
    ]
  },
  {
    lessonId: "input-output",
    lessonTitle: "Input and Output",
    questions: [
      {
        id: 1,
        question: "Which function is used to get input from the user?",
        options: ["get()", "read()", "input()", "scan()"],
        correctAnswer: 2,
        explanation: "The input() function is used to get user input. It displays a prompt and waits for the user to type something."
      },
      {
        id: 2,
        question: "What data type does input() always return?",
        options: ["int", "float", "str", "depends on input"],
        correctAnswer: 2,
        explanation: "The input() function ALWAYS returns a string, even if the user types a number. You need to convert it using int() or float() if needed."
      },
      {
        id: 3,
        question: "What will print('Hello', 'World') output?",
        options: ["HelloWorld", "Hello World", "Hello, World", "Error"],
        correctAnswer: 1,
        explanation: "When you pass multiple values to print(), they are separated by a space by default. So it outputs 'Hello World'."
      },
      {
        id: 4,
        question: "How do you print without a newline at the end?",
        options: ["print('Hi', end='')", "print('Hi', no_newline)", "print('Hi').nonewline()", "println('Hi')"],
        correctAnswer: 0,
        explanation: "The end parameter controls what is printed at the end. By default it's '\\n' (newline). Setting end='' prints nothing at the end."
      },
      {
        id: 5,
        question: "What is the output of: print(f'I am {20 + 5} years old')",
        options: ["I am {20 + 5} years old", "I am 20 + 5 years old", "I am 25 years old", "Error"],
        correctAnswer: 2,
        explanation: "F-strings (f'...') allow you to put expressions inside curly braces. {20 + 5} is calculated and replaced with 25."
      }
    ]
  },
  {
    lessonId: "operators",
    lessonTitle: "Operators in Python",
    questions: [
      {
        id: 1,
        question: "What is the result of: 17 // 5",
        options: ["3.4", "3", "4", "2"],
        correctAnswer: 1,
        explanation: "// is floor division. It divides and rounds down to the nearest integer. 17 / 5 = 3.4, rounded down = 3."
      },
      {
        id: 2,
        question: "What is the result of: 17 % 5",
        options: ["3.4", "3", "2", "5"],
        correctAnswer: 2,
        explanation: "% is the modulus operator - it gives the remainder after division. 17 divided by 5 is 3 remainder 2."
      },
      {
        id: 3,
        question: "What is 2 ** 3 in Python?",
        options: ["6", "8", "5", "Error"],
        correctAnswer: 1,
        explanation: "** is the exponentiation operator (power). 2 ** 3 means 2 to the power of 3 = 2 × 2 × 2 = 8."
      },
      {
        id: 4,
        question: "What does 'and' operator do?",
        options: [
          "Adds two numbers",
          "Returns True if both conditions are True",
          "Returns True if any condition is True",
          "Compares two values"
        ],
        correctAnswer: 1,
        explanation: "The 'and' operator is a logical operator. It returns True only if BOTH conditions are True. If either is False, it returns False."
      },
      {
        id: 5,
        question: "What is the result of: 10 == 10 and 5 > 3",
        options: ["True", "False", "10", "Error"],
        correctAnswer: 0,
        explanation: "10 == 10 is True. 5 > 3 is True. True and True = True. Both conditions are true, so the result is True."
      }
    ]
  },
  {
    lessonId: "loops",
    lessonTitle: "Loops in Python",
    questions: [
      {
        id: 1,
        question: "How many times will this loop run: for i in range(5)",
        options: ["4 times", "5 times", "6 times", "Infinite"],
        correctAnswer: 1,
        explanation: "range(5) generates numbers 0, 1, 2, 3, 4 - that's 5 numbers. So the loop runs 5 times."
      },
      {
        id: 2,
        question: "What does range(2, 8, 2) generate?",
        options: ["2, 4, 6, 8", "2, 4, 6", "2, 3, 4, 5, 6, 7", "2, 8, 2"],
        correctAnswer: 1,
        explanation: "range(start, stop, step) generates numbers from start, incrementing by step, but stopping before stop. So: 2, 4, 6."
      },
      {
        id: 3,
        question: "What does the 'break' statement do?",
        options: [
          "Pauses the loop temporarily",
          "Exits the loop completely",
          "Skips to the next iteration",
          "Restarts the loop"
        ],
        correctAnswer: 1,
        explanation: "The break statement immediately exits the loop, even if the loop condition is still true or there are more items to iterate."
      },
      {
        id: 4,
        question: "What does the 'continue' statement do?",
        options: [
          "Exits the loop",
          "Restarts the loop from beginning",
          "Skips current iteration and continues to next",
          "Continues without any change"
        ],
        correctAnswer: 2,
        explanation: "The continue statement skips the rest of the current iteration and jumps to the next iteration of the loop."
      },
      {
        id: 5,
        question: "Which loop is best when you don't know how many times to repeat?",
        options: ["for loop", "while loop", "do-while loop", "foreach loop"],
        correctAnswer: 1,
        explanation: "Use a while loop when you don't know the exact number of iterations. It continues as long as a condition is true."
      }
    ]
  },
  {
    lessonId: "functions",
    lessonTitle: "Functions in Python",
    questions: [
      {
        id: 1,
        question: "Which keyword is used to define a function?",
        options: ["function", "func", "def", "define"],
        correctAnswer: 2,
        explanation: "In Python, we use the 'def' keyword to define a function: def function_name():"
      },
      {
        id: 2,
        question: "What does a function return if there's no return statement?",
        options: ["0", "Empty string", "None", "Error"],
        correctAnswer: 2,
        explanation: "If a function doesn't have a return statement, it automatically returns None."
      },
      {
        id: 3,
        question: "What is a parameter?",
        options: [
          "The value passed to a function",
          "The variable in function definition",
          "The function's return value",
          "The function name"
        ],
        correctAnswer: 1,
        explanation: "A parameter is the variable listed in the function definition. An argument is the actual value passed when calling the function."
      },
      {
        id: 4,
        question: "What is the output of: def greet(name='User'): return f'Hi {name}'  then greet()",
        options: ["Hi", "Hi User", "Hi name", "Error"],
        correctAnswer: 1,
        explanation: "The function has a default parameter value of 'User'. When called without an argument, it uses this default value."
      },
      {
        id: 5,
        question: "What does *args allow in a function?",
        options: [
          "Only one argument",
          "Exactly two arguments",
          "Any number of positional arguments",
          "Only keyword arguments"
        ],
        correctAnswer: 2,
        explanation: "*args allows a function to accept any number of positional arguments. They are collected into a tuple."
      }
    ]
  },
  {
    lessonId: "lists",
    lessonTitle: "Lists and Tuples",
    questions: [
      {
        id: 1,
        question: "How do you access the first element of a list?",
        options: ["list[1]", "list[0]", "list.first()", "list(0)"],
        correctAnswer: 1,
        explanation: "In Python, indexing starts at 0. The first element is at index 0, so list[0] gives the first element."
      },
      {
        id: 2,
        question: "What is the difference between a list and a tuple?",
        options: [
          "Lists use () and tuples use []",
          "Lists are mutable, tuples are immutable",
          "Tuples can only hold numbers",
          "There is no difference"
        ],
        correctAnswer: 1,
        explanation: "Lists are mutable (can be changed), while tuples are immutable (cannot be changed after creation). Lists use [], tuples use ()."
      },
      {
        id: 3,
        question: "What does fruits[-1] return if fruits = ['apple', 'banana', 'cherry']?",
        options: ["apple", "banana", "cherry", "Error"],
        correctAnswer: 2,
        explanation: "Negative indexing starts from the end. -1 is the last element, -2 is second to last, etc. fruits[-1] is 'cherry'."
      },
      {
        id: 4,
        question: "Which method adds an element to the end of a list?",
        options: ["add()", "append()", "insert()", "push()"],
        correctAnswer: 1,
        explanation: "The append() method adds an element to the end of a list. insert() adds at a specific position."
      },
      {
        id: 5,
        question: "What is the output of: len([1, 2, [3, 4], 5])",
        options: ["5", "4", "6", "Error"],
        correctAnswer: 1,
        explanation: "The len() function counts the top-level elements. [3, 4] is ONE element (a nested list). So we have: 1, 2, [3, 4], 5 = 4 elements."
      }
    ]
  },
  {
    lessonId: "dictionaries",
    lessonTitle: "Dictionaries in Python",
    questions: [
      {
        id: 1,
        question: "What symbol is used to create a dictionary?",
        options: ["[]", "()", "{}", "<>"],
        correctAnswer: 2,
        explanation: "Dictionaries use curly braces {}. Example: person = {'name': 'John', 'age': 25}"
      },
      {
        id: 2,
        question: "How do you access the value for key 'name' in dict person?",
        options: ["person.name", "person['name']", "person(name)", "person->name"],
        correctAnswer: 1,
        explanation: "Use square brackets with the key: person['name']. You can also use person.get('name') which is safer."
      },
      {
        id: 3,
        question: "What happens if you access a key that doesn't exist using []?",
        options: ["Returns None", "Returns 0", "Raises KeyError", "Returns empty string"],
        correctAnswer: 2,
        explanation: "Using [] to access a non-existent key raises a KeyError. Use .get() method to avoid this - it returns None for missing keys."
      },
      {
        id: 4,
        question: "Which method returns all the keys of a dictionary?",
        options: ["all_keys()", "keys()", "get_keys()", "list()"],
        correctAnswer: 1,
        explanation: "The keys() method returns all keys in a dictionary. Similarly, values() returns all values and items() returns key-value pairs."
      },
      {
        id: 5,
        question: "Can a dictionary have duplicate keys?",
        options: ["Yes, always", "No, never", "Only for string keys", "Only for number keys"],
        correctAnswer: 1,
        explanation: "Dictionary keys must be unique. If you assign a value to an existing key, the old value is replaced, not duplicated."
      }
    ]
  },
  {
    lessonId: "oop",
    lessonTitle: "Object-Oriented Programming",
    questions: [
      {
        id: 1,
        question: "Which keyword is used to create a class in Python?",
        options: ["class", "Class", "def", "new"],
        correctAnswer: 0,
        explanation: "Use the 'class' keyword (lowercase) to define a class: class ClassName:"
      },
      {
        id: 2,
        question: "What is __init__ in a class?",
        options: [
          "A destructor method",
          "A constructor method",
          "A private method",
          "A class variable"
        ],
        correctAnswer: 1,
        explanation: "__init__ is the constructor method. It's automatically called when you create a new object and is used to initialize the object's attributes."
      },
      {
        id: 3,
        question: "What does 'self' represent in a class method?",
        options: [
          "The class itself",
          "The current instance/object",
          "The parent class",
          "A global variable"
        ],
        correctAnswer: 1,
        explanation: "'self' refers to the current instance of the class. It allows you to access the instance's attributes and methods."
      },
      {
        id: 4,
        question: "What is inheritance in OOP?",
        options: [
          "Creating multiple objects",
          "A class getting properties from another class",
          "Hiding data from users",
          "Breaking code into functions"
        ],
        correctAnswer: 1,
        explanation: "Inheritance allows a child class to inherit attributes and methods from a parent class, promoting code reuse."
      },
      {
        id: 5,
        question: "How do you create an object from class Dog?",
        options: ["Dog.new()", "new Dog()", "Dog()", "create Dog()"],
        correctAnswer: 2,
        explanation: "To create an object, simply call the class name like a function: my_dog = Dog(). This calls __init__ automatically."
      }
    ]
  },
  {
    lessonId: "file-handling",
    lessonTitle: "File Handling",
    questions: [
      {
        id: 1,
        question: "Which function is used to open a file?",
        options: ["file()", "open()", "read()", "load()"],
        correctAnswer: 1,
        explanation: "The open() function is used to open a file. It returns a file object that you can use to read or write."
      },
      {
        id: 2,
        question: "What mode is used to write to a file (overwriting existing content)?",
        options: ["'r'", "'w'", "'a'", "'rw'"],
        correctAnswer: 1,
        explanation: "'w' mode opens a file for writing. It creates the file if it doesn't exist and overwrites existing content."
      },
      {
        id: 3,
        question: "What mode is used to append to a file?",
        options: ["'r'", "'w'", "'a'", "'+'"],
        correctAnswer: 2,
        explanation: "'a' mode opens a file for appending. New content is added at the end without deleting existing content."
      },
      {
        id: 4,
        question: "Why is 'with' statement recommended for file handling?",
        options: [
          "It's faster",
          "It automatically closes the file",
          "It allows multiple files",
          "It encrypts the file"
        ],
        correctAnswer: 1,
        explanation: "The 'with' statement automatically closes the file when the block ends, even if an error occurs. This prevents resource leaks."
      },
      {
        id: 5,
        question: "What does file.readlines() return?",
        options: [
          "The first line as a string",
          "The entire content as one string",
          "A list of all lines",
          "The number of lines"
        ],
        correctAnswer: 2,
        explanation: "readlines() returns a list where each element is a line from the file. read() returns everything as one string."
      }
    ]
  },
  {
    lessonId: "apis",
    lessonTitle: "Working with APIs",
    questions: [
      {
        id: 1,
        question: "What does API stand for?",
        options: [
          "Application Programming Interface",
          "Applied Program Integration",
          "Automated Programming Input",
          "Application Process Integration"
        ],
        correctAnswer: 0,
        explanation: "API stands for Application Programming Interface. It's a way for different software applications to communicate with each other."
      },
      {
        id: 2,
        question: "Which Python library is commonly used for HTTP requests?",
        options: ["http", "requests", "urllib only", "api"],
        correctAnswer: 1,
        explanation: "The 'requests' library is the most popular and user-friendly library for making HTTP requests in Python."
      },
      {
        id: 3,
        question: "What HTTP method is used to retrieve data?",
        options: ["POST", "PUT", "GET", "DELETE"],
        correctAnswer: 2,
        explanation: "GET is used to retrieve/read data from a server. POST is for sending/creating, PUT for updating, DELETE for removing."
      },
      {
        id: 4,
        question: "What format do most APIs return data in?",
        options: ["XML only", "HTML", "JSON", "Plain text only"],
        correctAnswer: 2,
        explanation: "Most modern APIs use JSON (JavaScript Object Notation) because it's lightweight, easy to read, and easy to parse."
      },
      {
        id: 5,
        question: "What does status code 200 mean?",
        options: ["Error occurred", "Not found", "Success/OK", "Unauthorized"],
        correctAnswer: 2,
        explanation: "Status code 200 means the request was successful. 404 means not found, 500 means server error, 401 means unauthorized."
      }
    ]
  },
  {
    lessonId: "projects",
    lessonTitle: "Python Projects",
    questions: [
      {
        id: 1,
        question: "What is the first step in planning a programming project?",
        options: [
          "Start coding immediately",
          "Understand and define the requirements",
          "Choose the programming language",
          "Design the user interface"
        ],
        correctAnswer: 1,
        explanation: "Always start by understanding what you need to build. Clear requirements help you plan your code structure and avoid rewrites."
      },
      {
        id: 2,
        question: "Why is it important to break a project into smaller parts?",
        options: [
          "It makes the code longer",
          "It's easier to test, debug, and manage",
          "It uses more memory",
          "It's a requirement in Python"
        ],
        correctAnswer: 1,
        explanation: "Breaking a project into smaller functions/modules makes it easier to test each part, find bugs, and collaborate with others."
      },
      {
        id: 3,
        question: "What is a good practice for naming variables in a project?",
        options: [
          "Use single letters like x, y, z",
          "Use descriptive names like user_age, total_score",
          "Use random names",
          "Use numbers as names"
        ],
        correctAnswer: 1,
        explanation: "Descriptive variable names make code self-documenting and easier to understand for you and others."
      },
      {
        id: 4,
        question: "What should you do when you encounter an error?",
        options: [
          "Delete the code and start over",
          "Read the error message and trace back to find the issue",
          "Ignore it and continue",
          "Copy someone else's code"
        ],
        correctAnswer: 1,
        explanation: "Error messages tell you what went wrong and where. Read them carefully - they're your guide to fixing the problem."
      },
      {
        id: 5,
        question: "Why are comments important in code?",
        options: [
          "They make the code run faster",
          "They explain what the code does for future reference",
          "Python requires them",
          "They reduce file size"
        ],
        correctAnswer: 1,
        explanation: "Comments help others (and your future self) understand why code was written a certain way. They're crucial for maintainability."
      }
    ]
  },
  {
    lessonId: "string-methods",
    lessonTitle: "String Methods and Formatting",
    questions: [
      {
        id: 1,
        question: "What does 'Hello World'.upper() return?",
        options: ["hello world", "HELLO WORLD", "Hello World", "hELLO wORLD"],
        correctAnswer: 1,
        explanation: "upper() converts all characters to uppercase."
      },
      {
        id: 2,
        question: "What does 'apple,banana,cherry'.split(',') return?",
        options: ["'apple banana cherry'", "['apple', 'banana', 'cherry']", "('apple', 'banana', 'cherry')", "Error"],
        correctAnswer: 1,
        explanation: "split() divides a string into a list based on the delimiter."
      },
      {
        id: 3,
        question: "What does ' hello '.strip() return?",
        options: ["' hello '", "'hello '", "' hello'", "'hello'"],
        correctAnswer: 3,
        explanation: "strip() removes whitespace from both ends of the string."
      },
      {
        id: 4,
        question: "What is an f-string?",
        options: ["A filtered string", "A formatted string literal", "A function string", "A file string"],
        correctAnswer: 1,
        explanation: "f-strings (formatted string literals) allow embedding expressions inside string literals using {expression}."
      },
      {
        id: 5,
        question: "What does '-'.join(['a', 'b', 'c']) return?",
        options: ["'abc'", "'a-b-c'", "['-a', '-b', '-c']", "Error"],
        correctAnswer: 1,
        explanation: "join() combines list elements into a string with the separator between them."
      }
    ]
  },
  {
    lessonId: "list-comprehensions",
    lessonTitle: "List Comprehensions",
    questions: [
      {
        id: 1,
        question: "What does [x*2 for x in [1,2,3]] produce?",
        options: ["[1, 2, 3]", "[2, 4, 6]", "[1, 4, 9]", "Error"],
        correctAnswer: 1,
        explanation: "The comprehension doubles each element: 1*2=2, 2*2=4, 3*2=6."
      },
      {
        id: 2,
        question: "What does [x for x in range(10) if x % 2 == 0] return?",
        options: ["[1, 3, 5, 7, 9]", "[0, 2, 4, 6, 8]", "[2, 4, 6, 8, 10]", "[0, 1, 2, 3, 4]"],
        correctAnswer: 1,
        explanation: "The condition filters to keep only even numbers from 0-9."
      },
      {
        id: 3,
        question: "What is {x: x**2 for x in [1,2,3]}?",
        options: ["A list", "A dictionary", "A set", "A tuple"],
        correctAnswer: 1,
        explanation: "Using key:value syntax with curly braces creates a dictionary comprehension."
      },
      {
        id: 4,
        question: "Where does the filtering 'if' go in a comprehension?",
        options: ["Before 'for'", "After 'for'", "At the beginning", "At the end"],
        correctAnswer: 1,
        explanation: "Filtering 'if' comes after 'for': [x for x in list if condition]"
      },
      {
        id: 5,
        question: "What does {x for x in [1,1,2,2,3]} create?",
        options: ["A list with duplicates", "A set (unique values)", "A dictionary", "Error"],
        correctAnswer: 1,
        explanation: "Curly braces without colons create a set, which automatically removes duplicates."
      }
    ]
  },
  {
    lessonId: "exception-handling",
    lessonTitle: "Exception Handling",
    questions: [
      {
        id: 1,
        question: "Which keyword starts an exception handling block?",
        options: ["catch", "try", "handle", "error"],
        correctAnswer: 1,
        explanation: "The 'try' keyword begins the block where exceptions might occur."
      },
      {
        id: 2,
        question: "What happens if an exception is not caught?",
        options: ["Program continues", "Program crashes", "Exception is ignored", "Loops forever"],
        correctAnswer: 1,
        explanation: "Uncaught exceptions cause the program to terminate with an error message."
      },
      {
        id: 3,
        question: "When does the 'finally' block execute?",
        options: ["Only on error", "Only on success", "Always", "Never"],
        correctAnswer: 2,
        explanation: "finally always executes, whether an exception occurred or not. It's used for cleanup."
      },
      {
        id: 4,
        question: "What does 'raise' do?",
        options: ["Catches an exception", "Creates/throws an exception", "Ignores an exception", "Logs an exception"],
        correctAnswer: 1,
        explanation: "raise creates and throws an exception, stopping normal execution."
      },
      {
        id: 5,
        question: "When does the 'else' clause run in try-except-else?",
        options: ["When exception occurs", "When no exception occurs", "Always", "Before try"],
        correctAnswer: 1,
        explanation: "else runs only if no exception occurred in the try block."
      }
    ]
  },
  {
    lessonId: "modules-packages",
    lessonTitle: "Modules and Packages",
    questions: [
      {
        id: 1,
        question: "What is a Python module?",
        options: ["A folder", "A Python file (.py)", "A class", "A function"],
        correctAnswer: 1,
        explanation: "A module is a Python file containing code (functions, classes, variables) that can be imported."
      },
      {
        id: 2,
        question: "What does 'import math as m' do?",
        options: ["Renames math module", "Creates alias m for math", "Imports only 'm'", "Error"],
        correctAnswer: 1,
        explanation: "'as' creates an alias, so you can use m.sqrt() instead of math.sqrt()."
      },
      {
        id: 3,
        question: "What is __name__ when a file is run directly?",
        options: ["The filename", "'__main__'", "None", "'module'"],
        correctAnswer: 1,
        explanation: "__name__ is '__main__' when the file is executed directly, not imported."
      },
      {
        id: 4,
        question: "What file makes a folder a Python package?",
        options: ["main.py", "__init__.py", "package.py", "setup.py"],
        correctAnswer: 1,
        explanation: "__init__.py marks a directory as a Python package (can be empty)."
      },
      {
        id: 5,
        question: "Which is NOT a standard library module?",
        options: ["os", "random", "numpy", "json"],
        correctAnswer: 2,
        explanation: "numpy is a third-party package that must be installed. os, random, json come with Python."
      }
    ]
  },
  {
    lessonId: "lambda-functions",
    lessonTitle: "Lambda Functions and Functional Programming",
    questions: [
      {
        id: 1,
        question: "What is a lambda function?",
        options: ["A named function", "An anonymous one-line function", "A class method", "A module"],
        correctAnswer: 1,
        explanation: "Lambda is an anonymous (unnamed) function that fits in a single expression."
      },
      {
        id: 2,
        question: "What does map(lambda x: x*2, [1,2,3]) return?",
        options: ["[2, 4, 6]", "An iterator", "[1, 2, 3]", "Error"],
        correctAnswer: 1,
        explanation: "map() returns an iterator (not a list). Use list() to convert: list(map(...))."
      },
      {
        id: 3,
        question: "What does filter() do?",
        options: ["Transforms items", "Keeps items where function returns True", "Combines items", "Sorts items"],
        correctAnswer: 1,
        explanation: "filter() keeps only items where the function returns True (or truthy)."
      },
      {
        id: 4,
        question: "Which module contains reduce()?",
        options: ["math", "functools", "itertools", "collections"],
        correctAnswer: 1,
        explanation: "reduce() is in the functools module: from functools import reduce"
      },
      {
        id: 5,
        question: "What is the key parameter in sorted() for?",
        options: ["Password protection", "Custom comparison function", "Sorting direction", "Item count"],
        correctAnswer: 1,
        explanation: "key accepts a function that extracts a comparison value from each item."
      }
    ]
  }
];

export function getQuizByLessonId(lessonId: string): Quiz | undefined {
  return quizzes.find(q => q.lessonId === lessonId);
}

export function getAllQuizzes(): Quiz[] {
  return quizzes;
}
