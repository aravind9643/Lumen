import type { Tutorial } from '../types'

export const dotnetCore: Tutorial = {
  "slug": "dotnet-core",
  "title": "C# & .NET Core Enterprise Systems Architecture",
  "shortTitle": ".NET Core",
  "description": "Build enterprise-grade Web APIs, microservices, and high-throughput systems with modern C#, ASP.NET Core, and Entity Framework Core.",
  "category": "Backend & Enterprise",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Entity Framework",
    "LINQ",
    "Architecture"
  ],
  "color": "#8b5cf6",
  "updated": "2026-08-17",
  "prerequisites": [
    "Basic object-oriented programming concepts."
  ],
  "outcomes": [
    "Master modern C# features, pattern matching, LINQ, and async tasks",
    "Build high-performance Web APIs with ASP.NET Core",
    "Model relational databases using Entity Framework Core (EF Core)",
    "Design clean architectures and dependency injection patterns"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "csharp-basics",
          "title": "CSharp Basics",
          "description": "Master CSharp Basics with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is C# and .NET",
                "Variables and data types",
                "Operators",
                "Type casting and conversion",
                "Console I/O",
                "Comments and naming conventions"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is C# and .NET?"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "C#"
            },
            {
              "type": "paragraph",
              "text": "**C#** (pronounced \"C-sharp\") is a modern, object-oriented, type-safe programming language developed by Microsoft. It's used for building web apps, desktop apps, games (Unity), mobile apps (MAUI), and cloud services."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "NET"
            },
            {
              "type": "paragraph",
              "text": "**.NET** is the runtime platform that executes C# code. Think of C# as the language and .NET as the engine that runs it."
            },
            {
              "type": "code",
              "language": "text",
              "code": "C# Code (.cs)\n    ↓ Compilation\nIL (Intermediate Language)\n    ↓ JIT (Just-In-Time) Compilation\nNative Machine Code\n    ↓\nExecutes on CLR (Common Language Runtime)"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create and run your first program\ndotnet new console -n HelloWorld\ncd HelloWorld\ndotnet run"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Program.cs (minimal — C# 10+ top-level statements)\nConsole.WriteLine(\"Hello, World!\");\n\n// Traditional way (explicit Main method)\nnamespace MyApp\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine(\"Hello, World!\");\n        }\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Variables and Data Types"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Variable?"
            },
            {
              "type": "paragraph",
              "text": "A **variable** is a named container that stores a value. In C#, every variable must have a declared type."
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Declaration and assignment\nstring name = \"Aravind\";\nint age = 25;\ndouble salary = 75000.50;\nbool isActive = true;\nchar grade = 'A';\n\n// var — compiler infers the type (use when type is obvious)\nvar city = \"Hyderabad\";    // Inferred as string\nvar count = 10;            // Inferred as int"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Value Types vs Reference Types"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Value Types (stored on STACK — fast, copied by value):\n  int, double, float, decimal, bool, char, byte, long, struct, enum\n\nReference Types (stored on HEAP — reference is on stack):\n  string, object, class, array, interface, delegate"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Numeric Types"
            },
            {
              "type": "table",
              "headers": [
                "Type",
                "Size",
                "Range",
                "Example"
              ],
              "rows": [
                [
                  "byte`",
                  "1 byte",
                  "0 to 255",
                  "byte b = 255;`",
                  ""
                ],
                [
                  "short`",
                  "2 bytes",
                  "-32,768 to 32,767",
                  "short s = 100;`",
                  ""
                ],
                [
                  "int`",
                  "4 bytes",
                  "2.1 billion",
                  "int i = 42;`",
                  ""
                ],
                [
                  "long`",
                  "8 bytes",
                  "9.2 quintillion",
                  "long l = 123456789L;`",
                  ""
                ],
                [
                  "float`",
                  "4 bytes",
                  "7 digits precision",
                  "float f = 3.14f;`",
                  ""
                ],
                [
                  "double`",
                  "8 bytes",
                  "15 digits precision",
                  "double d = 3.14159;`",
                  ""
                ],
                [
                  "decimal`",
                  "16 bytes",
                  "28 digits (money!)",
                  "decimal m = 99.99m;`",
                  ""
                ],
                [
                  "bool`",
                  "1 byte",
                  "true/false",
                  "bool b = true;`",
                  ""
                ],
                [
                  "char`",
                  "2 bytes",
                  "Single character",
                  "char c = 'A';`",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "String"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "string name = \"Aravind\";\nstring empty = \"\";\nstring nothing = null;      // No value at all\nstring empty2 = string.Empty; // Preferred over \"\"\n\n// String interpolation (best way!)\nstring msg = $\"Name: {name}, Age: {age}\";\n\n// Verbatim string (ignore escape characters)\nstring path = @\"C:\\Users\\Aravind\\Documents\";\n\n// Raw string literal (C# 11+)\nstring json = \"\"\"\n    {\n        \"name\": \"Aravind\",\n        \"age\": 25\n    }\n    \"\"\";\n\n// String is IMMUTABLE — every modification creates a new string"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Constants"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "const double PI = 3.14159;     // Compile-time constant (cannot change!)\nreadonly int maxRetries = 3;   // Runtime constant (set once in constructor)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Operators"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Arithmetic"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "int a = 10, b = 3;\na + b     // 13 (addition)\na - b     // 7  (subtraction)\na * b     // 30 (multiplication)\na / b     // 3  (integer division — truncates!)\na % b     // 1  (modulo — remainder)\n\n// For decimal division, at least one operand must be double/float\ndouble result = 10.0 / 3;   // 3.333...\n\n// Increment/Decrement\na++;   // a = 11 (post-increment)\n++a;   // a = 12 (pre-increment)\na--;   // a = 11"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Comparison"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "a == b    // Equal to\na != b    // Not equal to\na > b     // Greater than\na < b     // Less than\na >= b    // Greater than or equal\na <= b    // Less than or equal"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Logical"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "true && true    // AND (both must be true)\ntrue || false   // OR (at least one true)\n!true           // NOT (inverts)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Null Operators"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Null-coalescing operator (??)\nstring name = null;\nstring display = name ?? \"Unknown\";    // \"Unknown\" (if name is null)\n\n// Null-coalescing assignment (??=)\nname ??= \"Default\";   // Assigns \"Default\" only if name is null\n\n// Null-conditional operator (?.)\nstring upper = name?.ToUpper();   // Returns null instead of crashing\n\n// Null-forgiving operator (!)\nstring notNull = name!;   // Tell compiler \"I know this isn't null\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.4 Type Casting & Conversion"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Implicit (safe — no data loss)\nint num = 42;\ndouble d = num;       // int → double (automatic)\nlong l = num;         // int → long (automatic)\n\n// Explicit (may lose data — requires cast)\ndouble pi = 3.14;\nint rounded = (int)pi;    // 3 (truncated!)\n\n// Convert class (handles null safely)\nstring str = \"42\";\nint parsed = Convert.ToInt32(str);\ndouble parsed2 = Convert.ToDouble(\"3.14\");\nbool parsed3 = Convert.ToBoolean(\"true\");\n\n// Parse (throws exception if invalid)\nint n = int.Parse(\"42\");         // 42\n// int n2 = int.Parse(\"hello\");  // FormatException!\n\n// TryParse (safe — returns bool, no exception)\nif (int.TryParse(\"42\", out int result))\n{\n    Console.WriteLine(result);   // 42\n}\nelse\n{\n    Console.WriteLine(\"Invalid!\");\n}\n\n// is and as (for reference types)\nobject obj = \"Hello\";\nif (obj is string s)\n{\n    Console.WriteLine(s.ToUpper());   // \"HELLO\"\n}\n\nstring str2 = obj as string;   // Returns null if cast fails (no exception)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.5 Console I/O"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Output\nConsole.WriteLine(\"Hello!\");              // With newline\nConsole.Write(\"Enter name: \");            // Without newline\nConsole.WriteLine($\"Age: {age}\");         // Interpolated\n\n// Input\nstring input = Console.ReadLine();        // Read a line of text\nConsole.Write(\"Enter age: \");\nint userAge = int.Parse(Console.ReadLine()!);\n\n// Formatted output\nConsole.WriteLine($\"Price: {price:C}\");        // Currency: $99.99\nConsole.WriteLine($\"Percent: {0.85:P}\");       // Percent: 85.00%\nConsole.WriteLine($\"Padded: {42:D5}\");         // 00042\nConsole.WriteLine($\"Decimal: {3.14159:F2}\");   // 3.14"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.6 Comments & Naming Conventions"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Single-line comment\n\n/* Multi-line\n   comment */\n\n/// <summary>\n/// XML documentation comment (for IntelliSense)\n/// </summary>\n\n// Naming conventions:\n// PascalCase → Classes, Methods, Properties: UserAccount, GetName()\n// camelCase → Local variables, parameters: userName, itemCount\n// _camelCase → Private fields: _connectionString\n// UPPER_CASE → Constants: MAX_RETRIES (some prefer PascalCase)\n// IPrefixed → Interfaces: IDisposable, IUserService"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a program that asks for name, age, and city, then prints a formatted greeting",
                "Write a temperature converter (Celsius ↔ Fahrenheit)",
                "Use `TryParse` to safely read numbers from the user and handle invalid input",
                "Explore all null operators with practical examples"
              ]
            },
            {
              "type": "quiz",
              "question": "In CSharp Basics, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of CSharp Basics.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "CSharp Basics is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "csharp-oop",
          "title": "CSharp OOP",
          "description": "Master CSharp OOP with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for CSharp OOP."
            },
            {
              "type": "quiz",
              "question": "In CSharp OOP, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of CSharp OOP."
              ],
              "answer": 3,
              "explanation": "CSharp OOP is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "control-flow",
          "title": "Control Flow",
          "description": "Master Control Flow with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Conditional statements (if, switch, ternary)",
                "Loops (for, while, do-while, foreach)",
                "Pattern matching (C# 7+)",
                "Jump statements (break, continue, return)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 If / Else If / Else"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "int score = 85;\n\nif (score >= 90)\n    Console.WriteLine(\"A\");\nelse if (score >= 80)\n    Console.WriteLine(\"B\");     // ← This executes\nelse if (score >= 70)\n    Console.WriteLine(\"C\");\nelse\n    Console.WriteLine(\"F\");\n\n// Always use braces for multi-line blocks\nif (score >= 80)\n{\n    Console.WriteLine(\"Good job!\");\n    Console.WriteLine(\"Keep it up!\");\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Ternary Operator"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "int age = 20;\nstring status = age >= 18 ? \"Adult\" : \"Minor\";\n// Same as if-else but in one line"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Switch Statement"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "string day = \"Monday\";\n\nswitch (day)\n{\n    case \"Monday\":\n    case \"Tuesday\":\n    case \"Wednesday\":\n    case \"Thursday\":\n    case \"Friday\":\n        Console.WriteLine(\"Weekday\");\n        break;\n    case \"Saturday\":\n    case \"Sunday\":\n        Console.WriteLine(\"Weekend\");\n        break;\n    default:\n        Console.WriteLine(\"Invalid day\");\n        break;\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Switch Expression (C# 8+)"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Cleaner, returns a value\nstring dayType = day switch\n{\n    \"Monday\" or \"Tuesday\" or \"Wednesday\" or \"Thursday\" or \"Friday\" => \"Weekday\",\n    \"Saturday\" or \"Sunday\" => \"Weekend\",\n    _ => \"Invalid\"    // _ is the default (discard)\n};"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Pattern Matching"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Type pattern\nobject obj = \"Hello\";\nif (obj is string s)\n{\n    Console.WriteLine(s.ToUpper());   // \"HELLO\"\n}\n\n// Relational patterns (C# 9+)\nstring GetGrade(int score) => score switch\n{\n    >= 90 => \"A\",\n    >= 80 => \"B\",\n    >= 70 => \"C\",\n    >= 60 => \"D\",\n    _ => \"F\"\n};\n\n// Logical patterns\nstring Classify(int n) => n switch\n{\n    > 0 and < 10 => \"Small positive\",\n    >= 10 and <= 100 => \"Medium positive\",\n    < 0 => \"Negative\",\n    _ => \"Zero or large\"\n};\n\n// Property pattern\nrecord Person(string Name, int Age);\n\nstring Greet(Person p) => p switch\n{\n    { Age: < 13 } => \"Hi kid!\",\n    { Age: < 18, Name: var name } => $\"Hey {name}!\",\n    { Name: \"Admin\" } => \"Welcome, Admin\",\n    _ => \"Hello!\"\n};\n\n// Tuple pattern\nstring GetQuadrant(int x, int y) => (x, y) switch\n{\n    ( > 0, > 0) => \"Q1\",\n    ( < 0, > 0) => \"Q2\",\n    ( < 0, < 0) => \"Q3\",\n    ( > 0, < 0) => \"Q4\",\n    _ => \"On axis\"\n};"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.4 Loops"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "for Loop"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "for (int i = 0; i < 5; i++)\n{\n    Console.WriteLine(i);   // 0, 1, 2, 3, 4\n}\n\n// Countdown\nfor (int i = 10; i > 0; i--)\n{\n    Console.WriteLine(i);\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "while Loop"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "int count = 0;\nwhile (count < 5)\n{\n    Console.WriteLine(count);\n    count++;\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "do-while Loop"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Always executes at least ONCE (checks condition AFTER)\nint input;\ndo\n{\n    Console.Write(\"Enter a positive number: \");\n    input = int.Parse(Console.ReadLine()!);\n} while (input <= 0);"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "foreach Loop"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "string[] fruits = { \"Apple\", \"Banana\", \"Cherry\" };\n\nforeach (string fruit in fruits)\n{\n    Console.WriteLine(fruit);\n}\n\n// With index (use LINQ or for loop)\nforeach (var (fruit, index) in fruits.Select((f, i) => (f, i)))\n{\n    Console.WriteLine($\"{index}: {fruit}\");\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.5 Jump Statements"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// break — exit loop immediately\nfor (int i = 0; i < 10; i++)\n{\n    if (i == 5) break;\n    Console.WriteLine(i);   // 0, 1, 2, 3, 4\n}\n\n// continue — skip current iteration\nfor (int i = 0; i < 10; i++)\n{\n    if (i % 2 == 0) continue;   // Skip even numbers\n    Console.WriteLine(i);       // 1, 3, 5, 7, 9\n}\n\n// return — exit method\nint FindFirst(int[] arr, int target)\n{\n    for (int i = 0; i < arr.Length; i++)\n    {\n        if (arr[i] == target) return i;   // Exit immediately\n    }\n    return -1;\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a FizzBuzz program (1-100: \"Fizz\" for 3x, \"Buzz\" for 5x, \"FizzBuzz\" for both)",
                "Use pattern matching to classify shapes by their properties",
                "Build a simple calculator using switch expressions",
                "Write a number guessing game using a while loop"
              ]
            },
            {
              "type": "quiz",
              "question": "In Control Flow, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Control Flow.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Control Flow is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "csharp-advanced-linq",
          "title": "CSharp Advanced LINQ",
          "description": "Master CSharp Advanced LINQ with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for CSharp Advanced LINQ."
            },
            {
              "type": "quiz",
              "question": "In CSharp Advanced LINQ, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of CSharp Advanced LINQ.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "CSharp Advanced LINQ is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "data-structures",
          "title": "Data Structures",
          "description": "Master Data Structures with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Arrays (single, multi-dimensional, jagged)",
                "List\\<T\\>, Dictionary\\<K,V\\>, HashSet\\<T\\>",
                "Queue\\<T\\>, Stack\\<T\\>, LinkedList\\<T\\>",
                "Span\\<T\\> and ReadOnlySpan\\<T\\>",
                "When to use which collection"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 Arrays"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Declaration and initialization\nint[] numbers = { 1, 2, 3, 4, 5 };\nstring[] names = new string[3];   // Default: null, null, null\nint[] zeros = new int[5];         // Default: 0, 0, 0, 0, 0\n\n// Access and modify\nnumbers[0] = 10;\nConsole.WriteLine(numbers[0]);    // 10\nConsole.WriteLine(numbers.Length); // 5\n\n// Iterate\nforeach (int n in numbers) Console.Write($\"{n} \");\n\n// Array methods\nArray.Sort(numbers);              // Sort in place\nArray.Reverse(numbers);           // Reverse in place\nint index = Array.IndexOf(numbers, 3);  // Find index\nbool exists = Array.Exists(numbers, x => x > 3);\n\n// Multi-dimensional array\nint[,] matrix = {\n    { 1, 2, 3 },\n    { 4, 5, 6 }\n};\nConsole.WriteLine(matrix[1, 2]);  // 6\n\n// Jagged array (array of arrays — different lengths)\nint[][] jagged = new int[3][];\njagged[0] = new int[] { 1, 2 };\njagged[1] = new int[] { 3, 4, 5 };\njagged[2] = new int[] { 6 };"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 List\\<T\\>"
            },
            {
              "type": "paragraph",
              "text": "**List\\<T\\>** is a dynamically-sized array. Use it when you need to add/remove items."
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using System.Collections.Generic;\n\nList<string> fruits = new() { \"Apple\", \"Banana\", \"Cherry\" };\n\n// Add\nfruits.Add(\"Date\");                    // Add to end\nfruits.Insert(1, \"Avocado\");          // Insert at index 1\nfruits.AddRange(new[] { \"Fig\", \"Grape\" });\n\n// Remove\nfruits.Remove(\"Banana\");              // Remove by value\nfruits.RemoveAt(0);                   // Remove by index\nfruits.RemoveAll(f => f.StartsWith(\"A\")); // Remove all matching\n\n// Access\nstring first = fruits[0];\nstring last = fruits[^1];             // Index from end (C# 8+)\nList<string> slice = fruits[1..3];    // Range (C# 8+)\n\n// Search\nbool has = fruits.Contains(\"Apple\");\nint idx = fruits.IndexOf(\"Cherry\");\nstring? found = fruits.Find(f => f.Length > 5);\nList<string> all = fruits.FindAll(f => f.Length > 4);\n\n// Info\nfruits.Count                          // Number of items\nfruits.Sort();                        // Sort alphabetically\nfruits.Reverse();\nfruits.Clear();                       // Remove all\n\n// Convert\nstring[] array = fruits.ToArray();"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 Dictionary\\<TKey, TValue\\>"
            },
            {
              "type": "paragraph",
              "text": "**Dictionary** stores key-value pairs with O(1) lookup."
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var person = new Dictionary<string, string>\n{\n    [\"name\"] = \"Aravind\",\n    [\"city\"] = \"Hyderabad\",\n    [\"role\"] = \"Developer\"\n};\n\n// Add / Update\nperson[\"age\"] = \"25\";                 // Add new key\nperson[\"city\"] = \"Mumbai\";            // Update existing\n\n// Access (safe)\nif (person.TryGetValue(\"name\", out string? name))\n{\n    Console.WriteLine(name);          // \"Aravind\"\n}\n// person[\"missing\"]                  // KeyNotFoundException!\n\n// Check\nperson.ContainsKey(\"name\");           // true\nperson.ContainsValue(\"Aravind\");      // true\n\n// Iterate\nforeach (KeyValuePair<string, string> kv in person)\n{\n    Console.WriteLine($\"{kv.Key}: {kv.Value}\");\n}\n\n// Deconstruct\nforeach (var (key, value) in person)\n{\n    Console.WriteLine($\"{key}: {value}\");\n}\n\n// Remove\nperson.Remove(\"age\");\nperson.Count;                         // Number of entries"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.4 HashSet\\<T\\>"
            },
            {
              "type": "paragraph",
              "text": "**HashSet** stores unique values only. O(1) for add/remove/lookup."
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var set = new HashSet<int> { 1, 2, 3, 4, 5 };\n\nset.Add(3);        // false (already exists — no duplicates!)\nset.Add(6);        // true\nset.Remove(1);\nset.Contains(3);   // true\n\n// Set operations\nvar setA = new HashSet<int> { 1, 2, 3, 4 };\nvar setB = new HashSet<int> { 3, 4, 5, 6 };\n\nsetA.UnionWith(setB);       // {1,2,3,4,5,6}\nsetA.IntersectWith(setB);   // {3,4}\nsetA.ExceptWith(setB);      // {1,2} (in A but not B)\n\n// Great for removing duplicates!\nvar list = new List<int> { 1, 2, 2, 3, 3, 3 };\nvar unique = new HashSet<int>(list);  // {1, 2, 3}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.5 Queue\\<T\\> and Stack\\<T\\>"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Queue: FIFO (First In, First Out) — like a line at a store\nvar queue = new Queue<string>();\nqueue.Enqueue(\"Alice\");   // Add to back\nqueue.Enqueue(\"Bob\");\nqueue.Enqueue(\"Charlie\");\nqueue.Dequeue();          // \"Alice\" (remove from front)\nqueue.Peek();             // \"Bob\" (look without removing)\n\n// Stack: LIFO (Last In, First Out) — like a stack of plates\nvar stack = new Stack<int>();\nstack.Push(1);\nstack.Push(2);\nstack.Push(3);\nstack.Pop();              // 3 (remove from top)\nstack.Peek();             // 2 (look without removing)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.6 Collection Comparison"
            },
            {
              "type": "table",
              "headers": [
                "Collection",
                "Ordered?",
                "Duplicates?",
                "Lookup",
                "Best For"
              ],
              "rows": [
                [
                  "Array`",
                  "",
                  "",
                  "O(n)",
                  "Fixed-size, fast index access",
                  ""
                ],
                [
                  "List<T>`",
                  "",
                  "",
                  "O(n)",
                  "Dynamic-size, most common",
                  ""
                ],
                [
                  "Dictionary<K,V>`",
                  "",
                  "Keys:",
                  "O(1)",
                  "Key-value lookup",
                  ""
                ],
                [
                  "HashSet<T>`",
                  "",
                  "",
                  "O(1)",
                  "Unique items, membership test",
                  ""
                ],
                [
                  "Queue<T>`",
                  "",
                  "",
                  "O(n)",
                  "FIFO processing",
                  ""
                ],
                [
                  "Stack<T>`",
                  "",
                  "",
                  "O(n)",
                  "LIFO, undo operations",
                  ""
                ],
                [
                  "SortedList<K,V>`",
                  "(by key)",
                  "Keys:",
                  "O(log n)",
                  "Sorted key-value",
                  ""
                ]
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a program that removes duplicates from a list using HashSet",
                "Implement a simple undo system using a Stack",
                "Use Dictionary to count word frequency in a sentence",
                "Process a task queue using Queue\\<T\\>"
              ]
            },
            {
              "type": "quiz",
              "question": "In Data Structures, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Data Structures.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Data Structures is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "asp-net-core-fundamentals",
          "title": "ASP NET Core Fundamentals",
          "description": "Master ASP NET Core Fundamentals with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for ASP NET Core Fundamentals."
            },
            {
              "type": "quiz",
              "question": "In ASP NET Core Fundamentals, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of ASP NET Core Fundamentals."
              ],
              "answer": 3,
              "explanation": "ASP NET Core Fundamentals is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "methods",
          "title": "Methods",
          "description": "Master Methods with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Defining and calling methods",
                "Parameters (ref, out, in, params)",
                "Method overloading",
                "Expression-bodied members",
                "Local functions",
                "Extension methods"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 Defining Methods"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Basic method\nstatic int Add(int a, int b)\n{\n    return a + b;\n}\n\n// Void method (no return)\nstatic void PrintGreeting(string name)\n{\n    Console.WriteLine($\"Hello, {name}!\");\n}\n\n// Expression-bodied (one-liner)\nstatic int Square(int n) => n * n;\nstatic void Log(string msg) => Console.WriteLine($\"[LOG] {msg}\");\n\n// Calling\nint result = Add(3, 5);\nPrintGreeting(\"Aravind\");"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Parameters"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Default Parameters"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "static void Greet(string name, string greeting = \"Hello\")\n{\n    Console.WriteLine($\"{greeting}, {name}!\");\n}\n\nGreet(\"Aravind\");              // \"Hello, Aravind!\"\nGreet(\"Aravind\", \"Welcome\");  // \"Welcome, Aravind!\""
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Named Arguments"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "static void CreateUser(string name, int age, string city)\n{\n    Console.WriteLine($\"{name}, {age}, {city}\");\n}\n\n// Use names — order doesn't matter\nCreateUser(age: 25, city: \"Hyderabad\", name: \"Aravind\");"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "ref — Pass by Reference"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// ref: caller MUST initialize, method CAN read and modify\nstatic void Double(ref int number)\n{\n    number *= 2;   // Modifies the ORIGINAL variable\n}\n\nint x = 5;\nDouble(ref x);\nConsole.WriteLine(x);   // 10 (changed!)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "out — Output Parameter"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// out: caller doesn't need to initialize, method MUST assign\nstatic bool TryDivide(int a, int b, out int result)\n{\n    if (b == 0) { result = 0; return false; }\n    result = a / b;\n    return true;\n}\n\nif (TryDivide(10, 3, out int answer))\n    Console.WriteLine(answer);   // 3\n\n// Inline out declaration (C# 7+)\nif (int.TryParse(\"42\", out int parsed))\n    Console.WriteLine(parsed);"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "in — Read-Only Reference"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// in: pass by reference but CANNOT modify (for large structs)\nstatic double Distance(in Point p1, in Point p2)\n{\n    // p1.X = 10;   // Compile error! Can't modify 'in' parameter\n    return Math.Sqrt(Math.Pow(p2.X - p1.X, 2) + Math.Pow(p2.Y - p1.Y, 2));\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "params — Variable Arguments"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "static int Sum(params int[] numbers)\n{\n    return numbers.Sum();\n}\n\nSum(1, 2, 3);              // 6\nSum(1, 2, 3, 4, 5);        // 15\nSum(new int[] { 10, 20 }); // 30"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Method Overloading"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Same name, different parameters\nstatic int Add(int a, int b) => a + b;\nstatic double Add(double a, double b) => a + b;\nstatic string Add(string a, string b) => a + b;\n\nAdd(1, 2);        // Calls int version → 3\nAdd(1.5, 2.5);    // Calls double version → 4.0\nAdd(\"Hi\", \" !\");  // Calls string version → \"Hi !\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.4 Returning Multiple Values"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Using tuples (best way!)\nstatic (string Name, int Age) GetUser()\n{\n    return (\"Aravind\", 25);\n}\n\nvar user = GetUser();\nConsole.WriteLine(user.Name);    // \"Aravind\"\n\n// Deconstruct\nvar (name, age) = GetUser();\nConsole.WriteLine($\"{name}, {age}\");"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.5 Local Functions"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "static int Factorial(int n)\n{\n    // Local function — only accessible inside Factorial\n    int Compute(int x)\n    {\n        if (x <= 1) return 1;\n        return x * Compute(x - 1);\n    }\n\n    if (n < 0) throw new ArgumentException(\"Negative!\");\n    return Compute(n);\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.6 Extension Methods"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Add methods to existing types without modifying them!\npublic static class StringExtensions\n{\n    public static string Reverse(this string str)\n    {\n        return new string(str.ToCharArray().Reverse().ToArray());\n    }\n\n    public static bool IsNullOrEmpty(this string? str)\n    {\n        return string.IsNullOrEmpty(str);\n    }\n\n    public static int WordCount(this string str)\n    {\n        return str.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length;\n    }\n}\n\n// Usage — looks like a native method!\nstring name = \"Aravind\";\nConsole.WriteLine(name.Reverse());     // \"dnيvarA\"\nConsole.WriteLine(name.WordCount());   // 1"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write methods with `ref`, `out`, and `params` and compare behavior",
                "Create extension methods for `int` (IsEven, IsPrime, Factorial)",
                "Write an overloaded `Calculate` method for +, -, ×, ÷",
                "Use tuples to return min, max, and average from an array"
              ]
            },
            {
              "type": "quiz",
              "question": "In Methods, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Methods.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Methods is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "oop",
          "title": "OOP",
          "description": "Master OOP with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner → Intermediate | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Classes, objects, constructors",
                "Properties and access modifiers",
                "Inheritance and polymorphism",
                "Interfaces and abstract classes",
                "Records and structs",
                "Sealed, static, and partial classes"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 Classes and Objects"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public class Dog\n{\n    // Fields (private by convention)\n    private string _name;\n    \n    // Properties (public access to data)\n    public string Name { get; set; }\n    public string Breed { get; set; }\n    public int Age { get; set; }\n    \n    // Constructor\n    public Dog(string name, string breed, int age)\n    {\n        Name = name;\n        Breed = breed;\n        Age = age;\n    }\n    \n    // Method\n    public string Bark() => $\"{Name} says Woof!\";\n    \n    // Override ToString (like Python's __str__)\n    public override string ToString() => $\"{Name} ({Breed}, {Age}y)\";\n}\n\n// Creating objects\nvar dog = new Dog(\"Buddy\", \"Golden Retriever\", 3);\nConsole.WriteLine(dog.Bark());        // \"Buddy says Woof!\"\nConsole.WriteLine(dog);               // \"Buddy (Golden Retriever, 3y)\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Properties"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public class BankAccount\n{\n    // Auto-property\n    public string Owner { get; set; }\n    \n    // Read-only property (set only in constructor)\n    public string AccountNumber { get; }\n    \n    // Property with backing field + validation\n    private decimal _balance;\n    public decimal Balance\n    {\n        get => _balance;\n        private set   // Private setter — only this class can modify\n        {\n            if (value < 0)\n                throw new ArgumentException(\"Balance can't be negative\");\n            _balance = value;\n        }\n    }\n    \n    // Init-only property (C# 9+) — set only during initialization\n    public DateTime CreatedAt { get; init; }\n    \n    // Computed property (no setter)\n    public bool IsOverdrawn => Balance < 0;\n    \n    // Required property (C# 11+) — MUST be set during initialization\n    public required string Currency { get; set; }\n    \n    public BankAccount(string owner, string accountNumber)\n    {\n        Owner = owner;\n        AccountNumber = accountNumber;\n        CreatedAt = DateTime.UtcNow;\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 Access Modifiers"
            },
            {
              "type": "table",
              "headers": [
                "Modifier",
                "Access"
              ],
              "rows": [
                [
                  "public`",
                  "Anywhere",
                  ""
                ],
                [
                  "private`",
                  "Same class only",
                  ""
                ],
                [
                  "protected`",
                  "Same class + derived classes",
                  ""
                ],
                [
                  "internal`",
                  "Same assembly (project) only",
                  ""
                ],
                [
                  "protected internal`",
                  "Same assembly OR derived classes",
                  ""
                ],
                [
                  "private protected`",
                  "Same class + derived classes in same assembly",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.4 Inheritance"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Base class\npublic class Animal\n{\n    public string Name { get; set; }\n    \n    public Animal(string name) => Name = name;\n    \n    public virtual string Speak() => $\"{Name} makes a sound\";\n}\n\n// Derived class\npublic class Dog : Animal\n{\n    public string Breed { get; set; }\n    \n    public Dog(string name, string breed) : base(name)\n    {\n        Breed = breed;\n    }\n    \n    public override string Speak() => $\"{Name} says Woof!\";\n}\n\npublic class Cat : Animal\n{\n    public Cat(string name) : base(name) { }\n    \n    public override string Speak() => $\"{Name} says Meow!\";\n}\n\n// Polymorphism — treat all as Animal\nList<Animal> animals = new() { new Dog(\"Buddy\", \"Lab\"), new Cat(\"Whiskers\") };\nforeach (Animal a in animals)\n    Console.WriteLine(a.Speak());   // Each calls its own override!"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.5 Interfaces"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Interface = contract. Defines WHAT, not HOW\npublic interface IShape\n{\n    double Area();\n    double Perimeter();\n    void Draw();   // Default implementation (C# 8+):\n    // void Draw() => Console.WriteLine($\"Drawing shape with area {Area()}\");\n}\n\npublic interface IResizable\n{\n    void Resize(double factor);\n}\n\n// A class can implement MULTIPLE interfaces (unlike inheritance)\npublic class Circle : IShape, IResizable\n{\n    public double Radius { get; set; }\n    \n    public Circle(double radius) => Radius = radius;\n    \n    public double Area() => Math.PI * Radius * Radius;\n    public double Perimeter() => 2 * Math.PI * Radius;\n    public void Draw() => Console.WriteLine($\"Drawing circle r={Radius}\");\n    public void Resize(double factor) => Radius *= factor;\n}\n\n// Use interfaces as types (dependency inversion!)\nIShape shape = new Circle(5);\nConsole.WriteLine(shape.Area());   // 78.54"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.6 Abstract Classes"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Can't be instantiated. Can have both abstract and concrete methods\npublic abstract class Shape\n{\n    public string Color { get; set; }\n    \n    // Abstract — MUST be implemented by derived classes\n    public abstract double Area();\n    \n    // Concrete — shared implementation\n    public void PrintInfo() => Console.WriteLine($\"{Color} shape: Area = {Area():F2}\");\n}\n\npublic class Rectangle : Shape\n{\n    public double Width { get; set; }\n    public double Height { get; set; }\n    \n    public override double Area() => Width * Height;\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Interface vs Abstract Class"
            },
            {
              "type": "table",
              "headers": [
                "Feature",
                "Interface",
                "Abstract Class"
              ],
              "rows": [
                [
                  "Multiple inheritance",
                  "",
                  "",
                  ""
                ],
                [
                  "Fields",
                  "",
                  "",
                  ""
                ],
                [
                  "Constructors",
                  "",
                  "",
                  ""
                ],
                [
                  "Default implementation",
                  "(C# 8+)",
                  "",
                  ""
                ],
                [
                  "Access modifiers on members",
                  "(C# 8+)",
                  "",
                  ""
                ],
                [
                  "When to use",
                  "Can do\" behavior",
                  "Is a\" relationship",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.7 Records (C# 9+)"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Record = immutable class with value-based equality\n// Auto-generates: Constructor, Properties, ToString, Equals, GetHashCode\n\npublic record User(string Name, int Age, string Email);\n\nvar user1 = new User(\"Aravind\", 25, \"a@test.com\");\nvar user2 = new User(\"Aravind\", 25, \"a@test.com\");\n\nConsole.WriteLine(user1 == user2);   // True (value equality!)\nConsole.WriteLine(user1);            // User { Name = Aravind, Age = 25, ... }\n\n// with expression (create copy with changes)\nvar user3 = user1 with { Age = 26 };\n\n// Record struct (C# 10+)\npublic record struct Point(double X, double Y);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.8 Structs"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Struct = value type (stored on stack, copied by value)\n// Use for small, immutable data (like Point, Color, DateTime)\n\npublic struct Coordinate\n{\n    public double Lat { get; init; }\n    public double Lng { get; init; }\n    \n    public double DistanceTo(Coordinate other)\n    {\n        return Math.Sqrt(Math.Pow(Lat - other.Lat, 2) + Math.Pow(Lng - other.Lng, 2));\n    }\n}\n\n// Struct vs Class\n// Struct: value type, stack, copied, no inheritance, for small data\n// Class:  reference type, heap, referenced, supports inheritance, for complex objects"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.9 Sealed, Static, Partial"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Sealed — cannot be inherited\npublic sealed class Singleton { }\n\n// Static — cannot be instantiated, all members static\npublic static class MathHelper\n{\n    public static double CircleArea(double r) => Math.PI * r * r;\n}\nMathHelper.CircleArea(5);   // Call without creating instance\n\n// Partial — split a class across multiple files\n// File1.cs\npublic partial class User { public string Name { get; set; } }\n// File2.cs\npublic partial class User { public void Greet() => Console.WriteLine($\"Hi {Name}\"); }"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a class hierarchy: Vehicle → Car, Truck, Motorcycle",
                "Create an `IPaymentProcessor` interface with Stripe and PayPal implementations",
                "Use records for DTOs (Data Transfer Objects) and compare equality",
                "Implement a simple shape calculator using abstract classes"
              ]
            },
            {
              "type": "quiz",
              "question": "In OOP, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of OOP.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "OOP is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "web-api-development",
          "title": "Web API Development",
          "description": "Master Web API Development with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for Web API Development."
            },
            {
              "type": "quiz",
              "question": "In Web API Development, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Web API Development.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Web API Development is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "entity-framework-core",
          "title": "Entity Framework Core",
          "description": "Master Entity Framework Core with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for Entity Framework Core."
            },
            {
              "type": "quiz",
              "question": "In Entity Framework Core, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Entity Framework Core."
              ],
              "answer": 3,
              "explanation": "Entity Framework Core is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "strings-and-linq",
          "title": "Strings And LINQ",
          "description": "Master Strings And LINQ with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "String methods and manipulation",
                "StringBuilder for performance",
                "Regular expressions",
                "LINQ basics (query and method syntax)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 String Methods"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "string s = \"  Hello, World!  \";\n\n// Case\ns.ToUpper();            // \"  HELLO, WORLD!  \"\ns.ToLower();            // \"  hello, world!  \"\n\n// Trim\ns.Trim();               // \"Hello, World!\"\ns.TrimStart();          // \"Hello, World!  \"\ns.TrimEnd();            // \"  Hello, World!\"\n\n// Search\ns.Contains(\"World\");    // true\ns.StartsWith(\"  He\");   // true\ns.EndsWith(\"!  \");      // true\ns.IndexOf(\"World\");     // 9\ns.LastIndexOf(\"l\");     // 12\n\n// Modify (returns new string — strings are immutable!)\ns.Replace(\"World\", \"C#\");     // \"  Hello, C#!  \"\ns.Remove(5, 8);                // \"  Hel  \"\ns.Insert(5, \" there\");        // \"  Hel there...\"\ns.Substring(9, 5);            // \"World\"\n\n// Split & Join\n\"apple,banana,cherry\".Split(',');              // [\"apple\",\"banana\",\"cherry\"]\nstring.Join(\" | \", new[] { \"a\", \"b\", \"c\" });  // \"a | b | c\"\n\n// Check content\nstring.IsNullOrEmpty(s);           // false\nstring.IsNullOrWhiteSpace(\"  \");   // true\n\n// Compare\nstring.Equals(\"abc\", \"ABC\", StringComparison.OrdinalIgnoreCase); // true"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 String Interpolation & Formatting"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "string name = \"Aravind\";\nint age = 25;\n\n// Interpolation (best way!)\n$\"Name: {name}, Age: {age}\"\n\n// Formatting\n$\"{99.99:C}\"        // \"$99.99\" (currency)\n$\"{0.85:P}\"         // \"85.00%\" (percent)\n$\"{42:D5}\"          // \"00042\" (padded)\n$\"{3.14159:F2}\"     // \"3.14\" (fixed decimal)\n$\"{1000000:N0}\"     // \"1,000,000\" (number with commas)\n$\"{DateTime.Now:yyyy-MM-dd HH:mm:ss}\"  // \"2024-01-15 10:30:00\"\n\n// Alignment\n$\"{\"Left\",-20}|{\"Right\",20}\"\n// \"Left                |               Right\"\n\n// Raw string literal (C# 11+)\nstring json = \"\"\"\n    {\n        \"name\": \"Aravind\",\n        \"age\": 25\n    }\n    \"\"\";"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 StringBuilder"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using System.Text;\n\n// String concatenation in a loop is SLOW (creates new string each time)\n// ❌ Bad:\nstring result = \"\";\nfor (int i = 0; i < 10000; i++)\n    result += i.ToString();   // O(n²)!\n\n// ✅ Good: Use StringBuilder\nvar sb = new StringBuilder();\nfor (int i = 0; i < 10000; i++)\n    sb.Append(i);\n\nstring output = sb.ToString();\n\n// StringBuilder methods\nsb.Append(\"Hello\");\nsb.AppendLine(\" World\");   // Adds newline\nsb.Insert(0, \"Start: \");\nsb.Replace(\"Hello\", \"Hi\");\nsb.Remove(0, 7);\nsb.Clear();"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.4 Regular Expressions"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using System.Text.RegularExpressions;\n\nstring text = \"Call me at 123-456-7890 or 987-654-3210\";\n\n// Match (first match)\nMatch match = Regex.Match(text, @\"\\d{3}-\\d{3}-\\d{4}\");\nif (match.Success) Console.WriteLine(match.Value);   // \"123-456-7890\"\n\n// Matches (all)\nMatchCollection matches = Regex.Matches(text, @\"\\d{3}-\\d{3}-\\d{4}\");\nforeach (Match m in matches) Console.WriteLine(m.Value);\n\n// Replace\nstring cleaned = Regex.Replace(text, @\"\\d{3}-\\d{3}-\\d{4}\", \"[REDACTED]\");\n\n// IsMatch\nbool isEmail = Regex.IsMatch(\"test@email.com\", @\"^[\\w.-]+@[\\w.-]+\\.\\w+$\");\n\n// Groups\nMatch m2 = Regex.Match(\"2024-01-15\", @\"(\\d{4})-(\\d{2})-(\\d{2})\");\nstring year = m2.Groups[1].Value;   // \"2024\"\nstring month = m2.Groups[2].Value;  // \"01\"\n\n// Generated regex (C# 11+ — compiled at build time, faster!)\n[GeneratedRegex(@\"\\d{3}-\\d{3}-\\d{4}\")]\nprivate static partial Regex PhoneRegex();"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.5 LINQ Basics"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is LINQ?"
            },
            {
              "type": "paragraph",
              "text": "**LINQ** (Language Integrated Query) lets you query collections (lists, arrays, databases) using SQL-like syntax directly in C#."
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using System.Linq;\n\nint[] numbers = { 5, 3, 8, 1, 9, 2, 7, 4, 6 };\n\n// Method syntax (most common)\nvar evens = numbers.Where(n => n % 2 == 0).ToList();         // [8, 2, 4, 6]\nvar sorted = numbers.OrderBy(n => n).ToList();                // [1,2,3,4,5,6,7,8,9]\nvar squares = numbers.Select(n => n * n).ToList();            // [25,9,64,1,81,...]\nvar sum = numbers.Sum();                                       // 45\nvar avg = numbers.Average();                                   // 5.0\nvar max = numbers.Max();                                       // 9\nvar first = numbers.First(n => n > 5);                        // 8\nvar any = numbers.Any(n => n > 10);                           // false\nvar all = numbers.All(n => n > 0);                            // true\nvar count = numbers.Count(n => n > 5);                        // 3\nvar distinct = numbers.Distinct().ToList();                    // Remove duplicates\n\n// Query syntax (SQL-like)\nvar result = from n in numbers\n             where n % 2 == 0\n             orderby n\n             select n * 10;\n// [20, 40, 60, 80]\n\n// LINQ with objects\nvar people = new List<(string Name, int Age, string City)>\n{\n    (\"Alice\", 25, \"NYC\"),\n    (\"Bob\", 30, \"LA\"),\n    (\"Charlie\", 25, \"NYC\"),\n};\n\nvar nycPeople = people.Where(p => p.City == \"NYC\")\n                      .OrderBy(p => p.Name)\n                      .Select(p => p.Name)\n                      .ToList();\n// [\"Alice\", \"Charlie\"]"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a program to count vowels, consonants, and digits in a string",
                "Use StringBuilder to build an HTML table from a list of data",
                "Extract all email addresses from text using Regex",
                "Use LINQ to find the top 3 highest-scoring students from a list"
              ]
            },
            {
              "type": "quiz",
              "question": "In Strings And LINQ, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Strings And LINQ.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Strings And LINQ is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "generics-delegates-events",
          "title": "Generics Delegates Events",
          "description": "Master Generics Delegates Events with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Generics (classes, methods, constraints)",
                "Delegates (Action, Func, Predicate)",
                "Lambda expressions",
                "Events and event handlers"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Generics"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What are Generics?"
            },
            {
              "type": "paragraph",
              "text": "**Generics** let you write code that works with any type while remaining type-safe. Instead of writing separate methods for `int`, `string`, `double`, etc., you write one generic method."
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Without generics — need separate methods\nint MaxInt(int a, int b) => a > b ? a : b;\ndouble MaxDouble(double a, double b) => a > b ? a : b;\n\n// With generics — ONE method for all types!\nT Max<T>(T a, T b) where T : IComparable<T>\n{\n    return a.CompareTo(b) > 0 ? a : b;\n}\n\nMax(3, 5);           // 5\nMax(3.14, 2.71);     // 3.14\nMax(\"apple\", \"banana\"); // \"banana\""
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Generic Classes"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public class Box<T>\n{\n    public T Value { get; set; }\n    \n    public Box(T value) => Value = value;\n    \n    public override string ToString() => $\"Box<{typeof(T).Name}>({Value})\";\n}\n\nvar intBox = new Box<int>(42);\nvar strBox = new Box<string>(\"Hello\");\nConsole.WriteLine(intBox);   // \"Box<Int32>(42)\""
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Generic Constraints"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// where T : struct          → Value type only\n// where T : class           → Reference type only\n// where T : new()           → Must have parameterless constructor\n// where T : IComparable<T>  → Must implement interface\n// where T : BaseClass       → Must inherit from BaseClass\n// where T : notnull          → Cannot be null\n\npublic class Repository<T> where T : class, new()\n{\n    private readonly List<T> _items = new();\n    \n    public void Add(T item) => _items.Add(item);\n    public T CreateNew() => new T();   // Requires new() constraint\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 Delegates"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Delegate?"
            },
            {
              "type": "paragraph",
              "text": "A **delegate** is a type-safe function pointer — it holds a reference to a method. Think of it as a variable that stores a method."
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Declare a delegate type\ndelegate int MathOperation(int a, int b);\n\n// Methods that match the delegate signature\nint Add(int a, int b) => a + b;\nint Multiply(int a, int b) => a * b;\n\n// Use the delegate\nMathOperation op = Add;\nConsole.WriteLine(op(3, 5));   // 8\n\nop = Multiply;\nConsole.WriteLine(op(3, 5));   // 15\n\n// Pass delegate as parameter\nint Apply(MathOperation operation, int x, int y) => operation(x, y);\nApply(Add, 10, 20);   // 30"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Built-in Delegates"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Action — void return (0-16 params)\nAction greet = () => Console.WriteLine(\"Hello!\");\nAction<string> greetName = name => Console.WriteLine($\"Hello, {name}!\");\nAction<int, int> printSum = (a, b) => Console.WriteLine(a + b);\n\ngreet();               // \"Hello!\"\ngreetName(\"Aravind\");  // \"Hello, Aravind!\"\n\n// Func — has return value (last type parameter is return type)\nFunc<int, int, int> add = (a, b) => a + b;\nFunc<string, int> getLength = s => s.Length;\nFunc<bool> isReady = () => true;\n\nConsole.WriteLine(add(3, 5));        // 8\nConsole.WriteLine(getLength(\"Hi\"));  // 2\n\n// Predicate — returns bool (used for filtering)\nPredicate<int> isEven = n => n % 2 == 0;\nConsole.WriteLine(isEven(4));        // true\n\n// Used in List methods\nvar numbers = new List<int> { 1, 2, 3, 4, 5 };\nvar evens = numbers.FindAll(isEven);  // [2, 4]"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.3 Lambda Expressions"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Lambda = anonymous function (inline)\n\n// Expression lambda (one expression)\nFunc<int, int> square = x => x * x;\n\n// Statement lambda (multiple statements)\nFunc<int, int> factorial = n =>\n{\n    int result = 1;\n    for (int i = 1; i <= n; i++) result *= i;\n    return result;\n};\n\n// Used extensively with LINQ\nvar names = new List<string> { \"Alice\", \"Bob\", \"Charlie\" };\nvar long_names = names.Where(n => n.Length > 3).ToList();   // [\"Alice\", \"Charlie\"]\nnames.ForEach(n => Console.WriteLine(n));\nnames.Sort((a, b) => a.Length.CompareTo(b.Length));"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.4 Events"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is an Event?"
            },
            {
              "type": "paragraph",
              "text": "An **event** is a notification mechanism. A class raises an event, and other classes subscribe to handle it. Based on the Observer pattern."
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public class Button\n{\n    // Declare event using EventHandler delegate\n    public event EventHandler? Clicked;\n    \n    public void Click()\n    {\n        Console.WriteLine(\"Button clicked!\");\n        Clicked?.Invoke(this, EventArgs.Empty);   // Raise event\n    }\n}\n\n// Subscribe to event\nvar btn = new Button();\nbtn.Clicked += (sender, args) => Console.WriteLine(\"Handler 1: Clicked!\");\nbtn.Clicked += (sender, args) => Console.WriteLine(\"Handler 2: Logged!\");\n\nbtn.Click();\n// Output:\n// Button clicked!\n// Handler 1: Clicked!\n// Handler 2: Logged!"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Custom EventArgs"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public class OrderEventArgs : EventArgs\n{\n    public int OrderId { get; set; }\n    public decimal Total { get; set; }\n}\n\npublic class OrderService\n{\n    public event EventHandler<OrderEventArgs>? OrderPlaced;\n    \n    public void PlaceOrder(int id, decimal total)\n    {\n        // Process order...\n        OrderPlaced?.Invoke(this, new OrderEventArgs { OrderId = id, Total = total });\n    }\n}\n\nvar service = new OrderService();\nservice.OrderPlaced += (s, e) => Console.WriteLine($\"Order {e.OrderId}: ${e.Total}\");\nservice.PlaceOrder(1, 99.99m);   // \"Order 1: $99.99\""
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a generic `Stack<T>` class with Push, Pop, and Peek",
                "Write a method that accepts `Func<int, bool>` to filter a list",
                "Build a simple event system: `Timer` class that fires a `Tick` event every second",
                "Chain multiple delegates together using multicast delegates"
              ]
            },
            {
              "type": "quiz",
              "question": "In Generics Delegates Events, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Generics Delegates Events.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Generics Delegates Events is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "identity-security-jwt",
          "title": "Identity Security JWT",
          "description": "Master Identity Security JWT with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for Identity Security JWT."
            },
            {
              "type": "quiz",
              "question": "In Identity Security JWT, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Identity Security JWT.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Identity Security JWT is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "linq",
          "title": "LINQ",
          "description": "Master LINQ with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Method syntax vs Query syntax",
                "Filtering, ordering, projecting",
                "Grouping, joining, aggregating",
                "Deferred vs immediate execution"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Core LINQ Operations"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var products = new List<Product>\n{\n    new(\"Laptop\", \"Electronics\", 999.99m, 50),\n    new(\"Phone\", \"Electronics\", 699.99m, 100),\n    new(\"Shirt\", \"Clothing\", 29.99m, 200),\n    new(\"Jeans\", \"Clothing\", 49.99m, 150),\n    new(\"Book\", \"Books\", 14.99m, 300),\n};\nrecord Product(string Name, string Category, decimal Price, int Stock);"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Filtering (Where)"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var expensive = products.Where(p => p.Price > 100);\nvar electronics = products.Where(p => p.Category == \"Electronics\");\nvar inStock = products.Where(p => p.Stock > 0 && p.Price < 50);"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Ordering"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var byPrice = products.OrderBy(p => p.Price);            // Ascending\nvar byPriceDesc = products.OrderByDescending(p => p.Price); // Descending\nvar multi = products.OrderBy(p => p.Category)\n                    .ThenByDescending(p => p.Price);     // Then by"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Projecting (Select)"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var names = products.Select(p => p.Name);                 // Just names\nvar dtos = products.Select(p => new { p.Name, p.Price }); // Anonymous type\nvar formatted = products.Select(p => $\"{p.Name}: {p.Price:C}\");\n\n// SelectMany — flatten nested collections\nvar orders = customers.SelectMany(c => c.Orders);"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Aggregation"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "products.Count();                           // 5\nproducts.Count(p => p.Price > 100);        // 2\nproducts.Sum(p => p.Price);                 // 1794.95\nproducts.Average(p => p.Price);             // 358.99\nproducts.Min(p => p.Price);                 // 14.99\nproducts.Max(p => p.Price);                 // 999.99\nproducts.Aggregate((a, b) => a.Price > b.Price ? a : b); // Most expensive"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Grouping"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var byCategory = products.GroupBy(p => p.Category);\n\nforeach (var group in byCategory)\n{\n    Console.WriteLine($\"\\n{group.Key}:\");\n    foreach (var product in group)\n        Console.WriteLine($\"  {product.Name}: {product.Price:C}\");\n}\n// Electronics:\n//   Laptop: $999.99\n//   Phone: $699.99\n// Clothing:\n//   Shirt: $29.99\n//   Jeans: $49.99\n\n// Group with aggregation\nvar categorySummary = products\n    .GroupBy(p => p.Category)\n    .Select(g => new\n    {\n        Category = g.Key,\n        Count = g.Count(),\n        AvgPrice = g.Average(p => p.Price),\n        TotalStock = g.Sum(p => p.Stock)\n    });"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.3 Joining"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var employees = new List<(int Id, string Name, int DeptId)>\n{\n    (1, \"Alice\", 101), (2, \"Bob\", 102), (3, \"Charlie\", 101)\n};\n\nvar departments = new List<(int Id, string Name)>\n{\n    (101, \"Engineering\"), (102, \"Marketing\"), (103, \"Sales\")\n};\n\n// Inner Join\nvar joined = employees.Join(\n    departments,\n    emp => emp.DeptId,       // Outer key\n    dept => dept.Id,         // Inner key\n    (emp, dept) => new { emp.Name, Department = dept.Name }\n);\n// Alice → Engineering, Bob → Marketing, Charlie → Engineering\n\n// Group Join (left join)\nvar grouped = departments.GroupJoin(\n    employees,\n    dept => dept.Id,\n    emp => emp.DeptId,\n    (dept, emps) => new { dept.Name, Employees = emps.ToList() }\n);\n\n// Query syntax join\nvar result = from e in employees\n             join d in departments on e.DeptId equals d.Id\n             select new { e.Name, Department = d.Name };"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.4 Element Operations"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "products.First();                          // First item (throws if empty)\nproducts.FirstOrDefault();                 // First or default(T)\nproducts.First(p => p.Price > 500);       // First matching\nproducts.Single(p => p.Name == \"Laptop\"); // Exactly one (throws if 0 or 2+)\nproducts.SingleOrDefault(p => p.Name == \"Missing\"); // One or default\nproducts.Last();                           // Last item\nproducts.ElementAt(2);                     // Item at index 2\n\n// Check\nproducts.Any(p => p.Price > 1000);        // false\nproducts.All(p => p.Stock > 0);           // true\nproducts.Contains(someProduct);            // Check membership"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.5 Set Operations"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var list1 = new[] { 1, 2, 3, 4, 5 };\nvar list2 = new[] { 3, 4, 5, 6, 7 };\n\nlist1.Union(list2);        // {1,2,3,4,5,6,7}\nlist1.Intersect(list2);    // {3,4,5}\nlist1.Except(list2);       // {1,2}\nlist1.Distinct();          // Remove duplicates\nlist1.Concat(list2);       // {1,2,3,4,5,3,4,5,6,7} (no dedup)\n\n// Zip\nvar names2 = new[] { \"A\", \"B\", \"C\" };\nvar scores = new[] { 90, 85, 92 };\nvar combined = names2.Zip(scores, (n, s) => $\"{n}: {s}\");\n// \"A: 90\", \"B: 85\", \"C: 92\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.6 Deferred vs Immediate Execution"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var numbers = new List<int> { 1, 2, 3, 4, 5 };\n\n// DEFERRED — query is NOT executed yet (just stored)\nvar query = numbers.Where(n => n > 3);   // Nothing happens!\n\nnumbers.Add(6);   // Modify source\n\n// Executes NOW when iterated\nforeach (var n in query)\n    Console.Write($\"{n} \");   // 4 5 6 (includes 6!)\n\n// IMMEDIATE — executes right away\nvar result = numbers.Where(n => n > 3).ToList();   // [4, 5, 6]\nvar count = numbers.Count(n => n > 3);              // 3\n\n// ToList(), ToArray(), Count(), Sum(), First() → Immediate\n// Where(), Select(), OrderBy(), GroupBy() → Deferred"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Group a list of students by grade and show count per grade",
                "Join two lists (employees + departments) and project into a new type",
                "Use LINQ to find the second highest salary",
                "Chain multiple LINQ operations to filter, sort, project, and paginate"
              ]
            },
            {
              "type": "quiz",
              "question": "In LINQ, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of LINQ."
              ],
              "answer": 3,
              "explanation": "LINQ is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "testing-xunit",
          "title": "Testing XUnit",
          "description": "Master Testing XUnit with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for Testing XUnit."
            },
            {
              "type": "quiz",
              "question": "In Testing XUnit, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Testing XUnit.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Testing XUnit is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "async-and-multithreading",
          "title": "Async And Multithreading",
          "description": "Master Async And Multithreading with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "async/await fundamentals",
                "Task and Task\\<T\\>",
                "Parallel programming",
                "Thread safety and synchronization",
                "Common async patterns"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 Why Async?"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Synchronous (blocking):\n  Thread: [===API Call===][===DB Query===][===File Read===]\n  Total: 6 seconds (each waits for the previous)\n\nAsynchronous (non-blocking):\n  Thread: [Start API]→free→[Start DB]→free→[Start File]→free→[All Done]\n  Total: ~2 seconds (all run concurrently!)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 async/await Basics"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// async method returns Task (void) or Task<T> (with value)\nasync Task<string> FetchDataAsync(string url)\n{\n    using HttpClient client = new();\n    string result = await client.GetStringAsync(url);  // Non-blocking!\n    return result;\n}\n\n// Calling async methods\nasync Task Main()\n{\n    string data = await FetchDataAsync(\"https://api.example.com/data\");\n    Console.WriteLine(data);\n}\n\n// Key rules:\n// 1. async methods MUST return Task, Task<T>, or ValueTask<T>\n// 2. Use 'await' to wait for async operations\n// 3. Name async methods with 'Async' suffix: GetDataAsync()\n// 4. NEVER use .Result or .Wait() — causes deadlocks!"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.3 Task.WhenAll & Task.WhenAny"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Run multiple tasks concurrently\nasync Task ProcessAllAsync()\n{\n    Task<string> task1 = FetchDataAsync(\"https://api1.com\");\n    Task<string> task2 = FetchDataAsync(\"https://api2.com\");\n    Task<string> task3 = FetchDataAsync(\"https://api3.com\");\n    \n    // Wait for ALL to complete\n    string[] results = await Task.WhenAll(task1, task2, task3);\n    // All 3 run concurrently — total time ≈ slowest one!\n    \n    // Wait for FIRST to complete\n    Task<string> fastest = await Task.WhenAny(task1, task2, task3);\n    string firstResult = await fastest;\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.4 Cancellation"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "async Task DownloadAsync(CancellationToken cancellationToken)\n{\n    using HttpClient client = new();\n    \n    for (int i = 0; i < 100; i++)\n    {\n        cancellationToken.ThrowIfCancellationRequested();  // Check if cancelled\n        \n        await client.GetStringAsync(\n            $\"https://api.com/page/{i}\",\n            cancellationToken   // Pass token to async operations\n        );\n    }\n}\n\n// Usage\nvar cts = new CancellationTokenSource();\ncts.CancelAfter(TimeSpan.FromSeconds(5));   // Auto-cancel after 5s\n\ntry\n{\n    await DownloadAsync(cts.Token);\n}\ncatch (OperationCanceledException)\n{\n    Console.WriteLine(\"Operation was cancelled!\");\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.5 Parallel Programming"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Parallel.ForEach — CPU-bound parallelism (uses multiple threads)\nvar items = Enumerable.Range(1, 1000).ToList();\n\nParallel.ForEach(items, item =>\n{\n    // Runs on multiple CPU cores simultaneously\n    var result = HeavyComputation(item);\n});\n\n// Parallel.For\nParallel.For(0, 100, i =>\n{\n    Console.WriteLine($\"Processing {i} on thread {Thread.CurrentThread.ManagedThreadId}\");\n});\n\n// PLINQ (Parallel LINQ)\nvar results = items\n    .AsParallel()\n    .Where(x => x % 2 == 0)\n    .Select(x => x * x)\n    .ToList();"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.6 Thread Safety"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// ❌ NOT thread-safe (race condition!)\nint counter = 0;\nParallel.For(0, 10000, i => counter++);   // Result: unpredictable!\n\n// ✅ Thread-safe with lock\nint safeCounter = 0;\nobject lockObj = new();\nParallel.For(0, 10000, i =>\n{\n    lock (lockObj) { safeCounter++; }\n});\n\n// ✅ Thread-safe with Interlocked\nint atomicCounter = 0;\nParallel.For(0, 10000, i =>\n{\n    Interlocked.Increment(ref atomicCounter);\n});\n\n// ✅ Thread-safe collections\nusing System.Collections.Concurrent;\nvar safeBag = new ConcurrentBag<int>();\nvar safeDict = new ConcurrentDictionary<string, int>();\nvar safeQueue = new ConcurrentQueue<string>();"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.7 Common Async Patterns"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// 1. Fire and forget (use carefully!)\n_ = DoSomethingAsync();   // Don't await — runs in background\n\n// 2. Retry pattern\nasync Task<T> RetryAsync<T>(Func<Task<T>> action, int maxRetries = 3)\n{\n    for (int i = 0; i < maxRetries; i++)\n    {\n        try { return await action(); }\n        catch when (i < maxRetries - 1)\n        {\n            await Task.Delay(TimeSpan.FromSeconds(Math.Pow(2, i))); // Exponential backoff\n        }\n    }\n    return await action();   // Last attempt — let it throw\n}\n\n// 3. Semaphore (limit concurrency)\nvar semaphore = new SemaphoreSlim(5);   // Max 5 concurrent\n\nasync Task ProcessWithLimitAsync(string url)\n{\n    await semaphore.WaitAsync();\n    try { await FetchDataAsync(url); }\n    finally { semaphore.Release(); }\n}\n\n// Process 100 URLs but only 5 at a time\nvar tasks = urls.Select(url => ProcessWithLimitAsync(url));\nawait Task.WhenAll(tasks);"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Fetch data from 3 URLs concurrently using `Task.WhenAll`",
                "Implement a retry mechanism with exponential backoff",
                "Use `Parallel.ForEach` to process a large list and compare with sequential",
                "Build a thread-safe counter using `Interlocked`"
              ]
            },
            {
              "type": "quiz",
              "question": "In Async And Multithreading, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Async And Multithreading.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Async And Multithreading is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "clean-architecture-patterns",
          "title": "Clean Architecture Patterns",
          "description": "Master Clean Architecture Patterns with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for Clean Architecture Patterns."
            },
            {
              "type": "quiz",
              "question": "In Clean Architecture Patterns, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Clean Architecture Patterns.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Clean Architecture Patterns is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "file-io-and-serialization",
          "title": "File IO And Serialization",
          "description": "Master File IO And Serialization with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Reading/writing files (sync and async)",
                "JSON serialization (System.Text.Json)",
                "XML handling",
                "Streams and exception handling"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 File Operations"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using System.IO;\n\n// Write text\nFile.WriteAllText(\"output.txt\", \"Hello, World!\");\nFile.WriteAllLines(\"lines.txt\", new[] { \"Line 1\", \"Line 2\", \"Line 3\" });\nFile.AppendAllText(\"log.txt\", $\"{DateTime.Now}: Log entry\\n\");\n\n// Read text\nstring content = File.ReadAllText(\"output.txt\");\nstring[] lines = File.ReadAllLines(\"lines.txt\");\n\n// Read line by line (memory efficient for large files)\nforeach (string line in File.ReadLines(\"large.txt\"))\n{\n    Console.WriteLine(line);\n}\n\n// Async versions\nawait File.WriteAllTextAsync(\"output.txt\", \"Async Hello!\");\nstring asyncContent = await File.ReadAllTextAsync(\"output.txt\");\n\n// File info\nbool exists = File.Exists(\"output.txt\");\nFile.Copy(\"source.txt\", \"dest.txt\", overwrite: true);\nFile.Move(\"old.txt\", \"new.txt\");\nFile.Delete(\"temp.txt\");\nFileInfo info = new(\"output.txt\");\nConsole.WriteLine($\"Size: {info.Length} bytes, Modified: {info.LastWriteTime}\");"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 Directory Operations"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Create\nDirectory.CreateDirectory(\"data/output\");\n\n// List contents\nstring[] files = Directory.GetFiles(\".\", \"*.txt\");\nstring[] dirs = Directory.GetDirectories(\".\");\nstring[] allFiles = Directory.GetFiles(\".\", \"*.cs\", SearchOption.AllDirectories);\n\n// Check\nDirectory.Exists(\"data\");\n\n// Path manipulation\nstring full = Path.Combine(\"data\", \"output\", \"file.txt\");   // \"data/output/file.txt\"\nstring ext = Path.GetExtension(\"file.txt\");                  // \".txt\"\nstring name = Path.GetFileNameWithoutExtension(\"file.txt\");  // \"file\"\nstring dir = Path.GetDirectoryName(\"/data/file.txt\")!;       // \"/data\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.3 JSON Serialization (System.Text.Json)"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using System.Text.Json;\nusing System.Text.Json.Serialization;\n\npublic class User\n{\n    public string Name { get; set; } = \"\";\n    public int Age { get; set; }\n    public string Email { get; set; } = \"\";\n    \n    [JsonIgnore]   // Won't be serialized\n    public string Password { get; set; } = \"\";\n    \n    [JsonPropertyName(\"is_active\")]   // Custom JSON name\n    public bool IsActive { get; set; } = true;\n}\n\n// Serialize (object → JSON)\nvar user = new User { Name = \"Aravind\", Age = 25, Email = \"a@test.com\" };\n\nstring json = JsonSerializer.Serialize(user, new JsonSerializerOptions\n{\n    WriteIndented = true,          // Pretty print\n    PropertyNamingPolicy = JsonNamingPolicy.CamelCase  // camelCase keys\n});\n\n// Deserialize (JSON → object)\nstring jsonStr = \"\"\"{\"name\":\"Aravind\",\"age\":25,\"email\":\"a@test.com\"}\"\"\";\nUser? parsed = JsonSerializer.Deserialize<User>(jsonStr, new JsonSerializerOptions\n{\n    PropertyNameCaseInsensitive = true\n});\n\n// Save/load JSON files\nawait File.WriteAllTextAsync(\"user.json\", json);\nstring loaded = await File.ReadAllTextAsync(\"user.json\");\nUser? fromFile = JsonSerializer.Deserialize<User>(loaded);\n\n// Serialize lists\nvar users = new List<User> { user };\nstring jsonList = JsonSerializer.Serialize(users);\nList<User>? userList = JsonSerializer.Deserialize<List<User>>(jsonList);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.4 Exception Handling"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "try\n{\n    string content = File.ReadAllText(\"missing.txt\");\n}\ncatch (FileNotFoundException ex)\n{\n    Console.WriteLine($\"File not found: {ex.FileName}\");\n}\ncatch (UnauthorizedAccessException ex)\n{\n    Console.WriteLine($\"No permission: {ex.Message}\");\n}\ncatch (IOException ex)\n{\n    Console.WriteLine($\"IO error: {ex.Message}\");\n}\ncatch (Exception ex)   // Catch-all (last resort)\n{\n    Console.WriteLine($\"Unexpected: {ex.Message}\");\n}\nfinally\n{\n    Console.WriteLine(\"Cleanup here (always runs)\");\n}\n\n// Custom exceptions\npublic class OrderNotFoundException : Exception\n{\n    public int OrderId { get; }\n    \n    public OrderNotFoundException(int orderId)\n        : base($\"Order {orderId} not found\")\n    {\n        OrderId = orderId;\n    }\n}\n\n// Throw\nthrow new OrderNotFoundException(42);\n\n// Exception filters (C# 6+)\ncatch (HttpRequestException ex) when (ex.StatusCode == System.Net.HttpStatusCode.NotFound)\n{\n    Console.WriteLine(\"404 — Not found\");\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.5 Streams"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// StreamWriter/StreamReader — for text\nusing (var writer = new StreamWriter(\"output.txt\"))\n{\n    writer.WriteLine(\"Line 1\");\n    writer.WriteLine(\"Line 2\");\n}\n\nusing (var reader = new StreamReader(\"output.txt\"))\n{\n    string? line;\n    while ((line = reader.ReadLine()) != null)\n        Console.WriteLine(line);\n}\n\n// using declaration (C# 8+ — no braces needed)\nusing var writer2 = new StreamWriter(\"output.txt\");\nwriter2.WriteLine(\"Cleaner syntax!\");\n\n// FileStream — for binary data\nusing var fs = new FileStream(\"data.bin\", FileMode.Create);\nbyte[] data = { 0x48, 0x65, 0x6C, 0x6C, 0x6F };\nfs.Write(data, 0, data.Length);\n\n// MemoryStream — in-memory stream\nusing var ms = new MemoryStream();\nms.Write(data, 0, data.Length);\nbyte[] result = ms.ToArray();"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Read a CSV file, parse it, and display as a formatted table",
                "Serialize/deserialize a list of products to/from JSON",
                "Build a simple file logger that appends timestamped entries",
                "Implement a try-catch hierarchy for a file processing pipeline"
              ]
            },
            {
              "type": "quiz",
              "question": "In File IO And Serialization, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of File IO And Serialization."
              ],
              "answer": 3,
              "explanation": "File IO And Serialization is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "microservices-deployment",
          "title": "Microservices Deployment",
          "description": "Master Microservices Deployment with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for Microservices Deployment."
            },
            {
              "type": "quiz",
              "question": "In Microservices Deployment, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Microservices Deployment.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Microservices Deployment is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "aspnet-core-basics",
          "title": "ASPNET Core Basics",
          "description": "Master ASPNET Core Basics with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is ASP.NET Core",
                "Project structure",
                "Program.cs and configuration",
                "Routing and middleware pipeline",
                "Razor Pages and MVC pattern"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.1 What is ASP.NET Core?"
            },
            {
              "type": "paragraph",
              "text": "**ASP.NET Core** is Microsoft's cross-platform framework for building modern web applications and APIs. It's high-performance, open-source, and runs on Windows, Linux, and macOS."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create a Web API project\ndotnet new webapi -n MyApi\ncd MyApi\ndotnet run\n# API running at: https://localhost:5001"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.2 Project Structure"
            },
            {
              "type": "code",
              "language": "text",
              "code": "MyApi/\n├── Program.cs              ← App entry point + configuration\n├── appsettings.json        ← Configuration (connection strings, settings)\n├── appsettings.Development.json\n├── Controllers/            ← API controllers\n│   └── WeatherController.cs\n├── Models/                 ← Data models / DTOs\n├── Services/               ← Business logic\n├── Properties/\n│   └── launchSettings.json ← Dev launch config\n└── MyApi.csproj            ← Project file (dependencies)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.3 Program.cs (Minimal API)"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "var builder = WebApplication.CreateBuilder(args);\n\n// ── Register Services (DI Container) ──\nbuilder.Services.AddControllers();               // Controllers\nbuilder.Services.AddEndpointsApiExplorer();       // Swagger\nbuilder.Services.AddSwaggerGen();                 // Swagger docs\n\nvar app = builder.Build();\n\n// ── Configure Middleware Pipeline ──\nif (app.Environment.IsDevelopment())\n{\n    app.UseSwagger();\n    app.UseSwaggerUI();\n}\n\napp.UseHttpsRedirection();\napp.UseAuthorization();\napp.MapControllers();      // Map controller routes\n\napp.Run();"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.4 Middleware Pipeline"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Request → [Middleware 1] → [Middleware 2] → [Middleware 3] → Controller\nResponse ← [Middleware 1] ← [Middleware 2] ← [Middleware 3] ← Controller\n\nEach middleware can:\n  1. Process the request\n  2. Pass to next middleware (next())\n  3. Process the response (on the way back)\n  4. Short-circuit (return early without calling next)"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Custom middleware (logging)\napp.Use(async (context, next) =>\n{\n    Console.WriteLine($\"→ {context.Request.Method} {context.Request.Path}\");\n    var sw = Stopwatch.StartNew();\n    \n    await next();   // Call next middleware\n    \n    sw.Stop();\n    Console.WriteLine($\"← {context.Response.StatusCode} ({sw.ElapsedMilliseconds}ms)\");\n});\n\n// Built-in middleware order (matters!)\napp.UseExceptionHandler(\"/error\");    // 1. Global error handling\napp.UseHttpsRedirection();            // 2. HTTPS redirect\napp.UseStaticFiles();                 // 3. Serve static files\napp.UseRouting();                     // 4. Route matching\napp.UseCors();                        // 5. CORS\napp.UseAuthentication();              // 6. Auth (who are you?)\napp.UseAuthorization();               // 7. Auth (what can you do?)\napp.MapControllers();                 // 8. Endpoint execution"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.5 Configuration"
            },
            {
              "type": "code",
              "language": "json",
              "code": "// appsettings.json\n{\n  \"ConnectionStrings\": {\n    \"DefaultConnection\": \"Server=localhost;Database=MyDb;...\"\n  },\n  \"AppSettings\": {\n    \"ApiKey\": \"my-secret-key\",\n    \"MaxPageSize\": 50\n  },\n  \"Logging\": {\n    \"LogLevel\": {\n      \"Default\": \"Information\"\n    }\n  }\n}"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Read configuration\nvar connStr = builder.Configuration.GetConnectionString(\"DefaultConnection\");\nvar apiKey = builder.Configuration[\"AppSettings:ApiKey\"];\nvar maxPage = builder.Configuration.GetValue<int>(\"AppSettings:MaxPageSize\");\n\n// Strongly-typed configuration (best practice!)\npublic class AppSettings\n{\n    public string ApiKey { get; set; } = \"\";\n    public int MaxPageSize { get; set; } = 25;\n}\n\nbuilder.Services.Configure<AppSettings>(\n    builder.Configuration.GetSection(\"AppSettings\")\n);\n\n// Inject in controller\npublic class MyController : ControllerBase\n{\n    private readonly AppSettings _settings;\n    public MyController(IOptions<AppSettings> options)\n    {\n        _settings = options.Value;\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.6 Minimal APIs (C# 12+)"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Entire API in Program.cs — great for microservices!\nvar app = WebApplication.Create(args);\n\napp.MapGet(\"/\", () => \"Hello, World!\");\n\napp.MapGet(\"/users/{id}\", (int id) =>\n    new { Id = id, Name = \"Aravind\" });\n\napp.MapPost(\"/users\", (User user) =>\n    Results.Created($\"/users/{user.Id}\", user));\n\napp.MapPut(\"/users/{id}\", (int id, User user) =>\n    Results.Ok(user));\n\napp.MapDelete(\"/users/{id}\", (int id) =>\n    Results.NoContent());\n\napp.Run();\n\nrecord User(int Id, string Name, string Email);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.7 Environments"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Check current environment\nif (app.Environment.IsDevelopment())   // ASPNETCORE_ENVIRONMENT=Development\n{\n    app.UseDeveloperExceptionPage();\n}\nelse if (app.Environment.IsProduction())\n{\n    app.UseExceptionHandler(\"/error\");\n}\n\n// Set via environment variable:\n// Windows: set ASPNETCORE_ENVIRONMENT=Development\n// Linux: export ASPNETCORE_ENVIRONMENT=Production"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a new ASP.NET Core Web API project and explore the structure",
                "Add custom logging middleware that logs every request",
                "Create a minimal API with 5 endpoints (CRUD for a resource)",
                "Configure settings from appsettings.json and use them in code"
              ]
            },
            {
              "type": "quiz",
              "question": "In ASPNET Core Basics, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of ASPNET Core Basics.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "ASPNET Core Basics is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "web-api",
          "title": "Web API",
          "description": "Master Web API with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Building REST APIs with controllers",
                "DTOs and model validation",
                "HTTP methods and status codes",
                "Swagger/OpenAPI documentation",
                "API versioning and global error handling"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.1 Controller-Based API"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using Microsoft.AspNetCore.Mvc;\n\n[ApiController]\n[Route(\"api/[controller]\")]   // Route: /api/users\npublic class UsersController : ControllerBase\n{\n    private static readonly List<User> _users = new()\n    {\n        new User(1, \"Alice\", \"alice@test.com\"),\n        new User(2, \"Bob\", \"bob@test.com\"),\n    };\n    \n    // GET /api/users\n    [HttpGet]\n    public ActionResult<IEnumerable<User>> GetAll()\n    {\n        return Ok(_users);\n    }\n    \n    // GET /api/users/1\n    [HttpGet(\"{id}\")]\n    public ActionResult<User> GetById(int id)\n    {\n        var user = _users.FirstOrDefault(u => u.Id == id);\n        if (user is null) return NotFound(new { message = \"User not found\" });\n        return Ok(user);\n    }\n    \n    // POST /api/users\n    [HttpPost]\n    public ActionResult<User> Create([FromBody] CreateUserDto dto)\n    {\n        var user = new User(_users.Max(u => u.Id) + 1, dto.Name, dto.Email);\n        _users.Add(user);\n        return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);\n    }\n    \n    // PUT /api/users/1\n    [HttpPut(\"{id}\")]\n    public IActionResult Update(int id, [FromBody] UpdateUserDto dto)\n    {\n        var user = _users.FirstOrDefault(u => u.Id == id);\n        if (user is null) return NotFound();\n        \n        _users.Remove(user);\n        _users.Add(new User(id, dto.Name, dto.Email));\n        return NoContent();   // 204\n    }\n    \n    // DELETE /api/users/1\n    [HttpDelete(\"{id}\")]\n    public IActionResult Delete(int id)\n    {\n        var user = _users.FirstOrDefault(u => u.Id == id);\n        if (user is null) return NotFound();\n        \n        _users.Remove(user);\n        return NoContent();\n    }\n}\n\nrecord User(int Id, string Name, string Email);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.2 DTOs and Validation"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using System.ComponentModel.DataAnnotations;\n\n// DTOs (Data Transfer Objects) — separate from domain models!\npublic class CreateUserDto\n{\n    [Required(ErrorMessage = \"Name is required\")]\n    [StringLength(100, MinimumLength = 2)]\n    public string Name { get; set; } = \"\";\n    \n    [Required]\n    [EmailAddress(ErrorMessage = \"Invalid email\")]\n    public string Email { get; set; } = \"\";\n    \n    [Range(18, 120, ErrorMessage = \"Age must be 18-120\")]\n    public int Age { get; set; }\n    \n    [RegularExpression(@\"^\\d{10}$\", ErrorMessage = \"Phone must be 10 digits\")]\n    public string? Phone { get; set; }\n}\n\npublic class UpdateUserDto\n{\n    [Required]\n    public string Name { get; set; } = \"\";\n    \n    [Required, EmailAddress]\n    public string Email { get; set; } = \"\";\n}\n\n// [ApiController] automatically returns 400 Bad Request\n// if validation fails — you don't need manual checks!"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.3 Query Parameters, Pagination, Search"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "[HttpGet]\npublic ActionResult<PagedResult<User>> GetAll(\n    [FromQuery] string? search = null,\n    [FromQuery] string? sortBy = \"name\",\n    [FromQuery] int page = 1,\n    [FromQuery] int pageSize = 10)\n{\n    var query = _users.AsQueryable();\n    \n    // Filter\n    if (!string.IsNullOrEmpty(search))\n        query = query.Where(u => u.Name.Contains(search, StringComparison.OrdinalIgnoreCase));\n    \n    // Sort\n    query = sortBy?.ToLower() switch\n    {\n        \"email\" => query.OrderBy(u => u.Email),\n        \"id\" => query.OrderBy(u => u.Id),\n        _ => query.OrderBy(u => u.Name)\n    };\n    \n    // Paginate\n    int total = query.Count();\n    var items = query.Skip((page - 1) * pageSize).Take(pageSize).ToList();\n    \n    return Ok(new PagedResult<User>(items, total, page, pageSize));\n}\n\nrecord PagedResult<T>(List<T> Items, int TotalCount, int Page, int PageSize)\n{\n    public int TotalPages => (int)Math.Ceiling(TotalCount / (double)PageSize);\n    public bool HasNext => Page < TotalPages;\n    public bool HasPrevious => Page > 1;\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.4 Return Types & Status Codes"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Common return patterns\nreturn Ok(data);                                    // 200\nreturn Created($\"/api/users/{id}\", user);           // 201\nreturn CreatedAtAction(nameof(GetById), new { id }, user);\nreturn NoContent();                                 // 204\nreturn BadRequest(\"Invalid data\");                  // 400\nreturn Unauthorized();                              // 401\nreturn Forbid();                                    // 403\nreturn NotFound(new { message = \"Not found\" });     // 404\nreturn Conflict(\"Already exists\");                  // 409\nreturn StatusCode(500, \"Internal error\");           // 500\n\n// Typed responses\n[HttpGet(\"{id}\")]\n[ProducesResponseType(typeof(User), 200)]\n[ProducesResponseType(404)]\npublic ActionResult<User> GetById(int id) { ... }"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.5 Global Error Handling"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Exception handling middleware\napp.UseExceptionHandler(errorApp =>\n{\n    errorApp.Run(async context =>\n    {\n        context.Response.StatusCode = 500;\n        context.Response.ContentType = \"application/json\";\n        \n        var error = context.Features.Get<IExceptionHandlerFeature>();\n        if (error != null)\n        {\n            var response = new\n            {\n                status = 500,\n                message = \"Internal server error\",\n                detail = app.Environment.IsDevelopment() ? error.Error.Message : null\n            };\n            await context.Response.WriteAsJsonAsync(response);\n        }\n    });\n});"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.6 Swagger / OpenAPI"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Already set up in template, but customize:\nbuilder.Services.AddSwaggerGen(c =>\n{\n    c.SwaggerDoc(\"v1\", new OpenApiInfo\n    {\n        Title = \"My API\",\n        Version = \"v1\",\n        Description = \"A comprehensive REST API\"\n    });\n});\n\n// Access at: https://localhost:5001/swagger"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a complete CRUD API for a `Product` resource",
                "Add validation DTOs with data annotations",
                "Implement pagination, search, and sorting",
                "Add global error handling middleware"
              ]
            },
            {
              "type": "quiz",
              "question": "In Web API, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Web API.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Web API is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "entity-framework-core",
          "title": "Entity Framework Core",
          "description": "Master Entity Framework Core with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is EF Core (ORM)",
                "DbContext and models",
                "Migrations",
                "CRUD operations",
                "Relationships (1:1, 1:N, N:N)",
                "Queries and performance"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.1 What is Entity Framework Core?"
            },
            {
              "type": "paragraph",
              "text": "**EF Core** is Microsoft's ORM (Object-Relational Mapper). It lets you work with databases using C# objects instead of writing raw SQL."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Install packages\ndotnet add package Microsoft.EntityFrameworkCore.SqlServer\ndotnet add package Microsoft.EntityFrameworkCore.Design\ndotnet add package Microsoft.EntityFrameworkCore.Tools\n\n# For SQLite (simpler, no server needed)\ndotnet add package Microsoft.EntityFrameworkCore.Sqlite"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.2 Defining Models"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public class User\n{\n    public int Id { get; set; }                  // Primary Key (by convention)\n    \n    [Required]\n    [MaxLength(100)]\n    public string Name { get; set; } = \"\";\n    \n    [Required]\n    [MaxLength(200)]\n    public string Email { get; set; } = \"\";\n    \n    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;\n    \n    // Navigation property (1:N relationship)\n    public ICollection<Post> Posts { get; set; } = new List<Post>();\n}\n\npublic class Post\n{\n    public int Id { get; set; }\n    \n    [Required]\n    [MaxLength(200)]\n    public string Title { get; set; } = \"\";\n    \n    public string Content { get; set; } = \"\";\n    \n    public DateTime PublishedAt { get; set; }\n    \n    // Foreign Key\n    public int UserId { get; set; }\n    public User User { get; set; } = null!;   // Navigation property\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.3 DbContext"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using Microsoft.EntityFrameworkCore;\n\npublic class AppDbContext : DbContext\n{\n    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }\n    \n    public DbSet<User> Users { get; set; }\n    public DbSet<Post> Posts { get; set; }\n    \n    // Fluent API configuration (alternative to data annotations)\n    protected override void OnModelCreating(ModelBuilder modelBuilder)\n    {\n        modelBuilder.Entity<User>(entity =>\n        {\n            entity.HasIndex(e => e.Email).IsUnique();\n            entity.Property(e => e.Name).HasMaxLength(100);\n        });\n        \n        modelBuilder.Entity<Post>(entity =>\n        {\n            entity.HasOne(p => p.User)\n                  .WithMany(u => u.Posts)\n                  .HasForeignKey(p => p.UserId)\n                  .OnDelete(DeleteBehavior.Cascade);\n        });\n        \n        // Seed data\n        modelBuilder.Entity<User>().HasData(\n            new User { Id = 1, Name = \"Admin\", Email = \"admin@test.com\" }\n        );\n    }\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Register in Program.cs"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// SQL Server\nbuilder.Services.AddDbContext<AppDbContext>(options =>\n    options.UseSqlServer(builder.Configuration.GetConnectionString(\"DefaultConnection\")));\n\n// SQLite (for learning)\nbuilder.Services.AddDbContext<AppDbContext>(options =>\n    options.UseSqlite(\"Data Source=app.db\"));"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.4 Migrations"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create migration (generates SQL from your models)\ndotnet ef migrations add InitialCreate\n\n# Apply migration (create/update database)\ndotnet ef database update\n\n# Rollback\ndotnet ef database update PreviousMigrationName\n\n# Remove last migration (if not applied)\ndotnet ef migrations remove\n\n# Generate SQL script (for production)\ndotnet ef migrations script"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.5 CRUD Operations"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public class UserService\n{\n    private readonly AppDbContext _context;\n    \n    public UserService(AppDbContext context) => _context = context;\n    \n    // CREATE\n    public async Task<User> CreateAsync(User user)\n    {\n        _context.Users.Add(user);\n        await _context.SaveChangesAsync();\n        return user;\n    }\n    \n    // READ (all)\n    public async Task<List<User>> GetAllAsync()\n    {\n        return await _context.Users\n            .OrderBy(u => u.Name)\n            .ToListAsync();\n    }\n    \n    // READ (single with related data)\n    public async Task<User?> GetByIdAsync(int id)\n    {\n        return await _context.Users\n            .Include(u => u.Posts)         // Eager loading\n            .FirstOrDefaultAsync(u => u.Id == id);\n    }\n    \n    // UPDATE\n    public async Task<bool> UpdateAsync(int id, string name, string email)\n    {\n        var user = await _context.Users.FindAsync(id);\n        if (user is null) return false;\n        \n        user.Name = name;\n        user.Email = email;\n        await _context.SaveChangesAsync();\n        return true;\n    }\n    \n    // DELETE\n    public async Task<bool> DeleteAsync(int id)\n    {\n        var user = await _context.Users.FindAsync(id);\n        if (user is null) return false;\n        \n        _context.Users.Remove(user);\n        await _context.SaveChangesAsync();\n        return true;\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.6 Querying with LINQ"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Filter\nvar activeUsers = await _context.Users\n    .Where(u => u.IsActive)\n    .ToListAsync();\n\n// Search\nvar results = await _context.Users\n    .Where(u => u.Name.Contains(search))\n    .ToListAsync();\n\n// Pagination\nvar page = await _context.Users\n    .OrderBy(u => u.Name)\n    .Skip((pageNum - 1) * pageSize)\n    .Take(pageSize)\n    .ToListAsync();\n\n// Select specific columns (projection)\nvar names = await _context.Users\n    .Select(u => new { u.Id, u.Name })\n    .ToListAsync();\n\n// Include related data\nvar usersWithPosts = await _context.Users\n    .Include(u => u.Posts)\n    .ThenInclude(p => p.Comments)    // Nested include\n    .ToListAsync();\n\n// Count, Any, Sum\nint count = await _context.Users.CountAsync();\nbool exists = await _context.Users.AnyAsync(u => u.Email == email);\n\n// Raw SQL (when needed)\nvar users = await _context.Users\n    .FromSqlRaw(\"SELECT * FROM Users WHERE Age > {0}\", 18)\n    .ToListAsync();"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.7 Relationships"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// One-to-Many (User → Posts)\npublic class User\n{\n    public int Id { get; set; }\n    public ICollection<Post> Posts { get; set; } = new List<Post>();\n}\n\npublic class Post\n{\n    public int Id { get; set; }\n    public int UserId { get; set; }       // FK\n    public User User { get; set; } = null!;\n}\n\n// Many-to-Many (Student ↔ Course)\npublic class Student\n{\n    public int Id { get; set; }\n    public ICollection<Course> Courses { get; set; } = new List<Course>();\n}\n\npublic class Course\n{\n    public int Id { get; set; }\n    public ICollection<Student> Students { get; set; } = new List<Student>();\n}\n// EF Core 5+ auto-creates join table!\n\n// One-to-One (User ↔ Profile)\npublic class UserProfile\n{\n    public int Id { get; set; }\n    public int UserId { get; set; }\n    public User User { get; set; } = null!;\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a blog database with Users, Posts, and Comments",
                "Implement pagination with search and sorting using EF Core",
                "Set up relationships (1:N, N:N) and query with Include",
                "Write a migration to add a new column to an existing table"
              ]
            },
            {
              "type": "quiz",
              "question": "In Entity Framework Core, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Entity Framework Core."
              ],
              "answer": 3,
              "explanation": "Entity Framework Core is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "auth-and-security",
          "title": "Auth And Security",
          "description": "Master Auth And Security with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Authentication vs Authorization",
                "JWT (JSON Web Tokens)",
                "ASP.NET Core Identity",
                "Role-based & Claims-based auth",
                "CORS, HTTPS, and security headers"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.1 Authentication vs Authorization"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Authentication (AuthN): \"Who are you?\"\n  → Login with username/password, get a token\n\nAuthorization (AuthZ): \"What can you do?\"\n  → Check if the authenticated user has permission"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.2 JWT Authentication"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is JWT?"
            },
            {
              "type": "paragraph",
              "text": "A **JWT** (JSON Web Token) is a compact token containing user info. The server issues it on login, and the client sends it with every request."
            },
            {
              "type": "code",
              "language": "text",
              "code": "JWT Structure:\n  Header.Payload.Signature\n\n  Header:   {\"alg\": \"HS256\", \"typ\": \"JWT\"}\n  Payload:  {\"sub\": \"user123\", \"name\": \"Aravind\", \"role\": \"Admin\", \"exp\": 1234567890}\n  Signature: HMAC-SHA256(header + payload, secret)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Setup JWT"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Program.cs\nusing Microsoft.AspNetCore.Authentication.JwtBearer;\nusing Microsoft.IdentityModel.Tokens;\nusing System.Text;\n\nvar key = Encoding.UTF8.GetBytes(builder.Configuration[\"Jwt:Key\"]!);\n\nbuilder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)\n    .AddJwtBearer(options =>\n    {\n        options.TokenValidationParameters = new TokenValidationParameters\n        {\n            ValidateIssuer = true,\n            ValidateAudience = true,\n            ValidateLifetime = true,\n            ValidateIssuerSigningKey = true,\n            ValidIssuer = builder.Configuration[\"Jwt:Issuer\"],\n            ValidAudience = builder.Configuration[\"Jwt:Audience\"],\n            IssuerSigningKey = new SymmetricSecurityKey(key)\n        };\n    });\n\n// Middleware order matters!\napp.UseAuthentication();    // Must come BEFORE Authorization\napp.UseAuthorization();"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Generate JWT Token"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using System.IdentityModel.Tokens.Jwt;\nusing System.Security.Claims;\n\npublic class AuthService\n{\n    private readonly IConfiguration _config;\n    \n    public AuthService(IConfiguration config) => _config = config;\n    \n    public string GenerateToken(User user)\n    {\n        var claims = new[]\n        {\n            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),\n            new Claim(ClaimTypes.Name, user.Name),\n            new Claim(ClaimTypes.Email, user.Email),\n            new Claim(ClaimTypes.Role, user.Role),   // \"Admin\", \"User\"\n        };\n        \n        var key = new SymmetricSecurityKey(\n            Encoding.UTF8.GetBytes(_config[\"Jwt:Key\"]!));\n        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);\n        \n        var token = new JwtSecurityToken(\n            issuer: _config[\"Jwt:Issuer\"],\n            audience: _config[\"Jwt:Audience\"],\n            claims: claims,\n            expires: DateTime.UtcNow.AddHours(24),\n            signingCredentials: creds\n        );\n        \n        return new JwtSecurityTokenHandler().WriteToken(token);\n    }\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Login Endpoint"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "[ApiController]\n[Route(\"api/[controller]\")]\npublic class AuthController : ControllerBase\n{\n    private readonly AuthService _auth;\n    \n    [HttpPost(\"login\")]\n    public IActionResult Login([FromBody] LoginDto dto)\n    {\n        // Validate credentials (simplified)\n        var user = ValidateUser(dto.Email, dto.Password);\n        if (user is null)\n            return Unauthorized(new { message = \"Invalid credentials\" });\n        \n        string token = _auth.GenerateToken(user);\n        return Ok(new { token });\n    }\n}\n\npublic record LoginDto(string Email, string Password);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.3 Protecting Endpoints"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Require authentication\n[Authorize]\n[HttpGet(\"profile\")]\npublic IActionResult GetProfile()\n{\n    var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;\n    var name = User.FindFirst(ClaimTypes.Name)?.Value;\n    return Ok(new { userId, name });\n}\n\n// Require specific role\n[Authorize(Roles = \"Admin\")]\n[HttpDelete(\"users/{id}\")]\npublic IActionResult DeleteUser(int id) { ... }\n\n// Require specific policy\n[Authorize(Policy = \"MinAge18\")]\n[HttpGet(\"restricted\")]\npublic IActionResult Restricted() { ... }\n\n// Allow anonymous (skip auth)\n[AllowAnonymous]\n[HttpGet(\"public\")]\npublic IActionResult PublicEndpoint() { ... }"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Policy-Based Authorization"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Program.cs\nbuilder.Services.AddAuthorization(options =>\n{\n    options.AddPolicy(\"AdminOnly\", policy => policy.RequireRole(\"Admin\"));\n    options.AddPolicy(\"MinAge18\", policy =>\n        policy.RequireClaim(\"Age\").RequireAssertion(context =>\n        {\n            var ageClaim = context.User.FindFirst(\"Age\");\n            return ageClaim != null && int.Parse(ageClaim.Value) >= 18;\n        }));\n});"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.4 Password Hashing"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using BCrypt.Net;\n\n// Never store plain text passwords!\nstring hashed = BCrypt.Net.BCrypt.HashPassword(\"MyPassword123\");\n// \"$2a$11$hR4...\" (salted + hashed)\n\nbool verified = BCrypt.Net.BCrypt.Verify(\"MyPassword123\", hashed);\n// true"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.5 CORS"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Allow frontend (React/Angular) to call your API\nbuilder.Services.AddCors(options =>\n{\n    options.AddPolicy(\"AllowFrontend\", policy =>\n    {\n        policy.WithOrigins(\"http://localhost:3000\", \"https://myapp.com\")\n              .AllowAnyMethod()\n              .AllowAnyHeader()\n              .AllowCredentials();\n    });\n});\n\napp.UseCors(\"AllowFrontend\");"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.6 Security Best Practices"
            },
            {
              "type": "code",
              "language": "text",
              "code": "✅ Always use HTTPS in production\n✅ Hash passwords with BCrypt/Argon2 (NEVER store plain text!)\n✅ Use short-lived JWTs + refresh tokens\n✅ Validate all input (SQL injection, XSS)\n✅ Use CORS properly\n✅ Keep secrets in appsettings (not in code)\n✅ Use rate limiting to prevent abuse\n\n❌ Never expose stack traces in production\n❌ Never log sensitive data (passwords, tokens)\n❌ Never trust client-side validation alone"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Implement JWT login/register with password hashing",
                "Create role-based endpoints (Admin, User, Guest)",
                "Add refresh token rotation",
                "Configure CORS for a specific frontend URL"
              ]
            },
            {
              "type": "quiz",
              "question": "In Auth And Security, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Auth And Security.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Auth And Security is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "di-and-middleware",
          "title": "DI And Middleware",
          "description": "Master DI And Middleware with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Dependency Injection (DI) explained",
                "Service lifetimes (Transient, Scoped, Singleton)",
                "Custom middleware",
                "Action filters and exception filters"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.1 Dependency Injection"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is DI?"
            },
            {
              "type": "paragraph",
              "text": "**Dependency Injection** means a class receives its dependencies from the outside instead of creating them itself. This makes code testable, maintainable, and loosely coupled."
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// ❌ Without DI — tightly coupled, untestable\npublic class OrderService\n{\n    private readonly SqlDatabase _db = new SqlDatabase();   // Hard to test!\n    \n    public void PlaceOrder(Order order) => _db.Save(order);\n}\n\n// ✅ With DI — loosely coupled, testable\npublic interface IDatabase\n{\n    void Save<T>(T entity);\n}\n\npublic class SqlDatabase : IDatabase\n{\n    public void Save<T>(T entity) => Console.WriteLine(\"Saved to SQL\");\n}\n\npublic class OrderService\n{\n    private readonly IDatabase _db;\n    \n    public OrderService(IDatabase db) => _db = db;   // Injected!\n    \n    public void PlaceOrder(Order order) => _db.Save(order);\n}\n\n// Register in Program.cs\nbuilder.Services.AddScoped<IDatabase, SqlDatabase>();\nbuilder.Services.AddScoped<OrderService>();"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.2 Service Lifetimes"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// TRANSIENT — new instance EVERY time it's requested\nbuilder.Services.AddTransient<IEmailService, EmailService>();\n// Best for: lightweight, stateless services\n\n// SCOPED — one instance per HTTP REQUEST\nbuilder.Services.AddScoped<IUserRepository, UserRepository>();\n// Best for: DbContext, services that hold per-request state\n\n// SINGLETON — one instance for ENTIRE app lifetime\nbuilder.Services.AddSingleton<ICacheService, CacheService>();\n// Best for: caching, configuration, logging"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Request 1:  Transient → New | Scoped → A | Singleton → X\nRequest 1:  Transient → New | Scoped → A | Singleton → X (same)\nRequest 2:  Transient → New | Scoped → B | Singleton → X (same)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.3 Registering Services"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Interface → Implementation\nbuilder.Services.AddScoped<IUserService, UserService>();\n\n// Concrete class (no interface)\nbuilder.Services.AddScoped<EmailService>();\n\n// Factory registration (complex creation logic)\nbuilder.Services.AddScoped<IPaymentGateway>(provider =>\n{\n    var config = provider.GetRequiredService<IConfiguration>();\n    var env = config[\"Environment\"];\n    return env == \"Production\"\n        ? new StripeGateway(config[\"Stripe:Key\"]!)\n        : new MockGateway();\n});\n\n// Register all implementations of an interface\nbuilder.Services.AddScoped<INotificationService, EmailNotification>();\nbuilder.Services.AddScoped<INotificationService, SmsNotification>();\n// Inject as: IEnumerable<INotificationService> notifications\n\n// Register HttpClient\nbuilder.Services.AddHttpClient<IGitHubService, GitHubService>(client =>\n{\n    client.BaseAddress = new Uri(\"https://api.github.com\");\n    client.DefaultRequestHeaders.Add(\"User-Agent\", \"MyApp\");\n});"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.4 Custom Middleware"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Middleware class\npublic class RequestTimingMiddleware\n{\n    private readonly RequestDelegate _next;\n    private readonly ILogger<RequestTimingMiddleware> _logger;\n    \n    public RequestTimingMiddleware(RequestDelegate next, ILogger<RequestTimingMiddleware> logger)\n    {\n        _next = next;\n        _logger = logger;\n    }\n    \n    public async Task InvokeAsync(HttpContext context)\n    {\n        var sw = Stopwatch.StartNew();\n        \n        // Before request processing\n        _logger.LogInformation(\"→ {Method} {Path}\", context.Request.Method, context.Request.Path);\n        \n        await _next(context);   // Pass to next middleware\n        \n        // After response\n        sw.Stop();\n        _logger.LogInformation(\"← {StatusCode} ({Elapsed}ms)\",\n            context.Response.StatusCode, sw.ElapsedMilliseconds);\n    }\n}\n\n// Register\napp.UseMiddleware<RequestTimingMiddleware>();\n\n// Extension method (cleaner)\npublic static class MiddlewareExtensions\n{\n    public static IApplicationBuilder UseRequestTiming(this IApplicationBuilder app)\n        => app.UseMiddleware<RequestTimingMiddleware>();\n}\n\napp.UseRequestTiming();"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.5 Action Filters"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Action Filter — runs before/after controller actions\npublic class ValidateModelFilter : IActionFilter\n{\n    public void OnActionExecuting(ActionExecutingContext context)\n    {\n        if (!context.ModelState.IsValid)\n        {\n            context.Result = new BadRequestObjectResult(context.ModelState);\n        }\n    }\n    \n    public void OnActionExecuted(ActionExecutedContext context) { }\n}\n\n// Register globally\nbuilder.Services.AddControllers(options =>\n{\n    options.Filters.Add<ValidateModelFilter>();\n});\n\n// Or per-controller/action\n[ServiceFilter(typeof(ValidateModelFilter))]\n[HttpPost]\npublic IActionResult Create(CreateDto dto) { ... }"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Exception Filter"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public class GlobalExceptionFilter : IExceptionFilter\n{\n    private readonly ILogger<GlobalExceptionFilter> _logger;\n    \n    public GlobalExceptionFilter(ILogger<GlobalExceptionFilter> logger) => _logger = logger;\n    \n    public void OnException(ExceptionContext context)\n    {\n        _logger.LogError(context.Exception, \"Unhandled exception\");\n        \n        context.Result = new ObjectResult(new\n        {\n            status = 500,\n            message = \"An internal error occurred\"\n        })\n        { StatusCode = 500 };\n        \n        context.ExceptionHandled = true;\n    }\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Register services with all 3 lifetimes and observe behavior",
                "Create a custom middleware that adds a `X-Request-Id` header",
                "Implement a rate-limiting middleware",
                "Build an exception filter that logs errors and returns clean responses"
              ]
            },
            {
              "type": "quiz",
              "question": "In DI And Middleware, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of DI And Middleware.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "DI And Middleware is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "design-patterns-and-solid",
          "title": "Design Patterns And SOLID",
          "description": "Master Design Patterns And SOLID with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "SOLID principles",
                "Repository and Unit of Work patterns",
                "Common design patterns in .NET",
                "Clean Architecture overview"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.1 SOLID Principles"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "S — Single Responsibility"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// ❌ Bad: one class does everything\npublic class UserService\n{\n    public void CreateUser(User user) { /* DB */ }\n    public void SendEmail(string to) { /* Email */ }\n    public void GenerateReport() { /* PDF */ }\n}\n\n// ✅ Good: each class has one job\npublic class UserService { public void CreateUser(User user) { } }\npublic class EmailService { public void SendEmail(string to) { } }\npublic class ReportService { public void GenerateReport() { } }"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "O — Open/Closed"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Open for extension, closed for modification\n\n// ❌ Bad: modify this method every time you add a shape\ndouble CalculateArea(object shape)\n{\n    if (shape is Circle c) return Math.PI * c.Radius * c.Radius;\n    if (shape is Rectangle r) return r.Width * r.Height;\n    // Add more here... breaks OCP!\n}\n\n// ✅ Good: extend by adding new classes\npublic interface IShape { double Area(); }\npublic class Circle : IShape { public double Radius; public double Area() => Math.PI * Radius * Radius; }\npublic class Triangle : IShape { public double Base, Height; public double Area() => 0.5 * Base * Height; }\n// New shapes just implement IShape — no existing code changes!"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "L — Liskov Substitution"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Derived classes must be substitutable for their base class\n\n// ❌ Bad: Square violates Rectangle contract\nclass Rectangle { public virtual int Width { get; set; } public virtual int Height { get; set; } }\nclass Square : Rectangle\n{\n    public override int Width { set { base.Width = value; base.Height = value; } }\n    // Changing Width also changes Height — breaks expectations!\n}\n\n// ✅ Good: use separate types or a common interface\ninterface IShape { double Area(); }"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "I — Interface Segregation"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// ❌ Bad: fat interface forces unnecessary implementations\npublic interface IWorker { void Work(); void Eat(); void Sleep(); }\npublic class Robot : IWorker\n{\n    public void Work() { } \n    public void Eat() { }    // Robots don't eat!\n    public void Sleep() { }  // Robots don't sleep!\n}\n\n// ✅ Good: small, focused interfaces\npublic interface IWorkable { void Work(); }\npublic interface IFeedable { void Eat(); }\npublic class Robot : IWorkable { public void Work() { } }\npublic class Human : IWorkable, IFeedable { public void Work() { } public void Eat() { } }"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "D — Dependency Inversion"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Depend on abstractions, not concretions\n\n// ❌ Bad: depends on concrete class\npublic class OrderService\n{\n    private SqlDatabase _db = new SqlDatabase();   // Tightly coupled!\n}\n\n// ✅ Good: depends on interface\npublic class OrderService\n{\n    private readonly IDatabase _db;\n    public OrderService(IDatabase db) => _db = db;   // Inject via DI\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.2 Repository Pattern"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Generic repository interface\npublic interface IRepository<T> where T : class\n{\n    Task<IEnumerable<T>> GetAllAsync();\n    Task<T?> GetByIdAsync(int id);\n    Task AddAsync(T entity);\n    Task UpdateAsync(T entity);\n    Task DeleteAsync(int id);\n}\n\n// Implementation\npublic class Repository<T> : IRepository<T> where T : class\n{\n    private readonly AppDbContext _context;\n    private readonly DbSet<T> _dbSet;\n    \n    public Repository(AppDbContext context)\n    {\n        _context = context;\n        _dbSet = context.Set<T>();\n    }\n    \n    public async Task<IEnumerable<T>> GetAllAsync() => await _dbSet.ToListAsync();\n    public async Task<T?> GetByIdAsync(int id) => await _dbSet.FindAsync(id);\n    public async Task AddAsync(T entity) { await _dbSet.AddAsync(entity); await _context.SaveChangesAsync(); }\n    public async Task UpdateAsync(T entity) { _dbSet.Update(entity); await _context.SaveChangesAsync(); }\n    public async Task DeleteAsync(int id)\n    {\n        var entity = await _dbSet.FindAsync(id);\n        if (entity != null) { _dbSet.Remove(entity); await _context.SaveChangesAsync(); }\n    }\n}\n\n// Register\nbuilder.Services.AddScoped(typeof(IRepository<>), typeof(Repository<>));"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.3 Unit of Work Pattern"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public interface IUnitOfWork : IDisposable\n{\n    IRepository<User> Users { get; }\n    IRepository<Post> Posts { get; }\n    Task<int> SaveChangesAsync();\n}\n\npublic class UnitOfWork : IUnitOfWork\n{\n    private readonly AppDbContext _context;\n    \n    public IRepository<User> Users { get; }\n    public IRepository<Post> Posts { get; }\n    \n    public UnitOfWork(AppDbContext context)\n    {\n        _context = context;\n        Users = new Repository<User>(context);\n        Posts = new Repository<Post>(context);\n    }\n    \n    public async Task<int> SaveChangesAsync() => await _context.SaveChangesAsync();\n    public void Dispose() => _context.Dispose();\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.4 Other Common Patterns"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Builder Pattern"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public class QueryBuilder\n{\n    private string _table = \"\";\n    private string _where = \"\";\n    private string _orderBy = \"\";\n    \n    public QueryBuilder From(string table) { _table = table; return this; }\n    public QueryBuilder Where(string condition) { _where = $\"WHERE {condition}\"; return this; }\n    public QueryBuilder OrderBy(string column) { _orderBy = $\"ORDER BY {column}\"; return this; }\n    public string Build() => $\"SELECT * FROM {_table} {_where} {_orderBy}\".Trim();\n}\n\nvar query = new QueryBuilder()\n    .From(\"Users\")\n    .Where(\"Age > 18\")\n    .OrderBy(\"Name\")\n    .Build();\n// \"SELECT * FROM Users WHERE Age > 18 ORDER BY Name\""
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Strategy Pattern"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public interface IDiscountStrategy { decimal Calculate(decimal price); }\npublic class NoDiscount : IDiscountStrategy { public decimal Calculate(decimal price) => price; }\npublic class PercentDiscount : IDiscountStrategy\n{\n    private readonly decimal _percent;\n    public PercentDiscount(decimal percent) => _percent = percent;\n    public decimal Calculate(decimal price) => price * (1 - _percent / 100);\n}\n\n// Usage\nIDiscountStrategy strategy = new PercentDiscount(20);\ndecimal final_price = strategy.Calculate(100m);   // 80"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.5 Clean Architecture"
            },
            {
              "type": "code",
              "language": "text",
              "code": "┌─────────────────────────────────────────────┐\n│              Presentation Layer             │\n│  (Controllers, Middleware, Program.cs)      │\n├─────────────────────────────────────────────┤\n│              Application Layer              │\n│  (Services, DTOs, Interfaces, Validation)   │\n├─────────────────────────────────────────────┤\n│               Domain Layer                  │\n│  (Entities, Value Objects, Domain Events)   │\n├─────────────────────────────────────────────┤\n│           Infrastructure Layer              │\n│  (EF Core, Repositories, External APIs)     │\n└─────────────────────────────────────────────┘\n\nDependencies point INWARD:\n  Presentation → Application → Domain ← Infrastructure"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Refactor a monolithic service to follow SOLID principles",
                "Implement Repository + Unit of Work for a blog API",
                "Use the Strategy pattern for different payment methods",
                "Structure a project following Clean Architecture"
              ]
            },
            {
              "type": "quiz",
              "question": "In Design Patterns And SOLID, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Design Patterns And SOLID.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Design Patterns And SOLID is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "testing",
          "title": "Testing",
          "description": "Master Testing with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Unit testing with xUnit",
                "Mocking with Moq",
                "Integration testing",
                "Testing controllers and services",
                "Test-Driven Development (TDD)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.1 Unit Testing with xUnit"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "dotnet new xunit -n MyApi.Tests\ncd MyApi.Tests\ndotnet add reference ../MyApi/MyApi.csproj\ndotnet add package Moq\ndotnet add package FluentAssertions"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using Xunit;\n\npublic class CalculatorTests\n{\n    [Fact]    // Single test case\n    public void Add_TwoNumbers_ReturnsSum()\n    {\n        // Arrange\n        var calc = new Calculator();\n        \n        // Act\n        int result = calc.Add(3, 5);\n        \n        // Assert\n        Assert.Equal(8, result);\n    }\n    \n    [Theory]  // Parameterized test — runs multiple times\n    [InlineData(1, 2, 3)]\n    [InlineData(0, 0, 0)]\n    [InlineData(-1, 1, 0)]\n    [InlineData(100, -50, 50)]\n    public void Add_Various_ReturnsCorrect(int a, int b, int expected)\n    {\n        var calc = new Calculator();\n        Assert.Equal(expected, calc.Add(a, b));\n    }\n    \n    [Fact]\n    public void Divide_ByZero_ThrowsException()\n    {\n        var calc = new Calculator();\n        Assert.Throws<DivideByZeroException>(() => calc.Divide(10, 0));\n    }\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Common Assertions"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "Assert.Equal(expected, actual);\nAssert.NotEqual(unexpected, actual);\nAssert.True(condition);\nAssert.False(condition);\nAssert.Null(value);\nAssert.NotNull(value);\nAssert.Contains(\"sub\", \"substring\");\nAssert.Empty(collection);\nAssert.Single(collection);\nAssert.IsType<string>(value);\nAssert.Throws<Exception>(() => method());\nAssert.InRange(value, low, high);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.2 FluentAssertions (Readable)"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using FluentAssertions;\n\n[Fact]\npublic void GetUser_ReturnsValidUser()\n{\n    var user = service.GetUser(1);\n    \n    user.Should().NotBeNull();\n    user.Name.Should().Be(\"Aravind\");\n    user.Age.Should().BeGreaterThan(18);\n    user.Email.Should().Contain(\"@\");\n    user.Roles.Should().Contain(\"Admin\");\n    user.Roles.Should().HaveCount(2);\n    user.CreatedAt.Should().BeCloseTo(DateTime.UtcNow, TimeSpan.FromSeconds(5));\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.3 Mocking with Moq"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using Moq;\n\npublic class UserServiceTests\n{\n    private readonly Mock<IUserRepository> _mockRepo;\n    private readonly Mock<IEmailService> _mockEmail;\n    private readonly UserService _service;\n    \n    public UserServiceTests()\n    {\n        _mockRepo = new Mock<IUserRepository>();\n        _mockEmail = new Mock<IEmailService>();\n        _service = new UserService(_mockRepo.Object, _mockEmail.Object);\n    }\n    \n    [Fact]\n    public async Task CreateUser_ValidUser_SavesAndSendsEmail()\n    {\n        // Arrange\n        var user = new User { Name = \"Aravind\", Email = \"a@test.com\" };\n        _mockRepo.Setup(r => r.AddAsync(It.IsAny<User>())).Returns(Task.CompletedTask);\n        _mockEmail.Setup(e => e.SendAsync(It.IsAny<string>(), It.IsAny<string>()))\n                  .Returns(Task.CompletedTask);\n        \n        // Act\n        await _service.CreateUserAsync(user);\n        \n        // Assert\n        _mockRepo.Verify(r => r.AddAsync(user), Times.Once);\n        _mockEmail.Verify(e => e.SendAsync(user.Email, It.IsAny<string>()), Times.Once);\n    }\n    \n    [Fact]\n    public async Task GetUser_NotFound_ReturnsNull()\n    {\n        // Arrange\n        _mockRepo.Setup(r => r.GetByIdAsync(999)).ReturnsAsync((User?)null);\n        \n        // Act\n        var result = await _service.GetByIdAsync(999);\n        \n        // Assert\n        result.Should().BeNull();\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.4 Testing Controllers"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "public class UsersControllerTests\n{\n    private readonly Mock<IUserService> _mockService;\n    private readonly UsersController _controller;\n    \n    public UsersControllerTests()\n    {\n        _mockService = new Mock<IUserService>();\n        _controller = new UsersController(_mockService.Object);\n    }\n    \n    [Fact]\n    public async Task GetById_ExistingId_Returns200()\n    {\n        var user = new User { Id = 1, Name = \"Aravind\" };\n        _mockService.Setup(s => s.GetByIdAsync(1)).ReturnsAsync(user);\n        \n        var result = await _controller.GetById(1);\n        \n        var okResult = result.Result as OkObjectResult;\n        okResult.Should().NotBeNull();\n        okResult!.StatusCode.Should().Be(200);\n        (okResult.Value as User)!.Name.Should().Be(\"Aravind\");\n    }\n    \n    [Fact]\n    public async Task GetById_NonExistingId_Returns404()\n    {\n        _mockService.Setup(s => s.GetByIdAsync(999)).ReturnsAsync((User?)null);\n        \n        var result = await _controller.GetById(999);\n        \n        result.Result.Should().BeOfType<NotFoundResult>();\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.5 Integration Testing"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "using Microsoft.AspNetCore.Mvc.Testing;\n\npublic class ApiIntegrationTests : IClassFixture<WebApplicationFactory<Program>>\n{\n    private readonly HttpClient _client;\n    \n    public ApiIntegrationTests(WebApplicationFactory<Program> factory)\n    {\n        _client = factory.CreateClient();\n    }\n    \n    [Fact]\n    public async Task GetUsers_ReturnsSuccess()\n    {\n        var response = await _client.GetAsync(\"/api/users\");\n        \n        response.StatusCode.Should().Be(System.Net.HttpStatusCode.OK);\n        var content = await response.Content.ReadAsStringAsync();\n        content.Should().Contain(\"Aravind\");\n    }\n    \n    [Fact]\n    public async Task CreateUser_ValidData_Returns201()\n    {\n        var dto = new { Name = \"Test\", Email = \"test@test.com\" };\n        var content = new StringContent(\n            JsonSerializer.Serialize(dto), Encoding.UTF8, \"application/json\");\n        \n        var response = await _client.PostAsync(\"/api/users\", content);\n        \n        response.StatusCode.Should().Be(System.Net.HttpStatusCode.Created);\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.6 TDD Cycle"
            },
            {
              "type": "code",
              "language": "text",
              "code": "1. RED   → Write a failing test first\n2. GREEN → Write minimum code to make it pass\n3. REFACTOR → Clean up, keep tests green\n\nRepeat for every feature!"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write unit tests for a calculator with [Theory] and [InlineData]",
                "Mock a repository and test a service layer",
                "Write controller tests for all CRUD operations",
                "Set up integration tests that hit actual endpoints"
              ]
            },
            {
              "type": "quiz",
              "question": "In Testing, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Testing."
              ],
              "answer": 3,
              "explanation": "Testing is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "deployment-and-devops",
          "title": "Deployment And DevOps",
          "description": "Master Deployment And DevOps with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Publishing .NET apps",
                "Docker containerization",
                "Azure deployment",
                "CI/CD pipelines",
                "Logging and monitoring"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.1 Publishing a .NET App"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Build for production\ndotnet publish -c Release -o ./publish\n\n# Self-contained (includes .NET runtime — no runtime needed on server)\ndotnet publish -c Release -r win-x64 --self-contained true -o ./publish\n\n# Framework-dependent (smaller — server needs .NET runtime)\ndotnet publish -c Release -o ./publish\n\n# Single file executable\ndotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.2 Docker"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# Dockerfile (multi-stage build)\nFROM mcr.microsoft.com/dotnet/sdk:8.0 AS build\nWORKDIR /src\nCOPY *.csproj ./\nRUN dotnet restore\nCOPY . ./\nRUN dotnet publish -c Release -o /app\n\nFROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime\nWORKDIR /app\nCOPY --from=build /app .\nEXPOSE 8080\nENV ASPNETCORE_URLS=http://+:8080\nENTRYPOINT [\"dotnet\", \"MyApi.dll\"]"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# docker-compose.yml\nversion: '3.8'\nservices:\n  api:\n    build: .\n    ports:\n      - \"8080:8080\"\n    environment:\n      - ASPNETCORE_ENVIRONMENT=Production\n      - ConnectionStrings__DefaultConnection=Server=db;Database=myapp;User=sa;Password=YourPass123!\n    depends_on:\n      - db\n  \n  db:\n    image: mcr.microsoft.com/mssql/server:2022-latest\n    environment:\n      - ACCEPT_EULA=Y\n      - SA_PASSWORD=YourPass123!\n    ports:\n      - \"1433:1433\"\n    volumes:\n      - sqldata:/var/opt/mssql\n\nvolumes:\n  sqldata:"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "docker build -t myapi .\ndocker run -p 8080:8080 myapi\ndocker compose up -d"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.3 Azure Deployment"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Azure CLI deployment\naz login\naz group create --name myResourceGroup --location eastus\naz appservice plan create --name myPlan --resource-group myResourceGroup --sku B1 --is-linux\naz webapp create --name myapi --resource-group myResourceGroup --plan myPlan --runtime \"DOTNET|8.0\"\n\n# Deploy from local\naz webapp deployment source config-local-git --name myapi --resource-group myResourceGroup\ngit remote add azure <git-url>\ngit push azure main\n\n# Or deploy directly\naz webapp deploy --resource-group myResourceGroup --name myapi --src-path ./publish.zip --type zip"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.4 CI/CD with GitHub Actions"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# .github/workflows/deploy.yml\nname: Build and Deploy\n\non:\n  push:\n    branches: [main]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      \n      - name: Setup .NET\n        uses: actions/setup-dotnet@v4\n        with:\n          dotnet-version: '8.0.x'\n      \n      - name: Restore\n        run: dotnet restore\n      \n      - name: Build\n        run: dotnet build --no-restore\n      \n      - name: Test\n        run: dotnet test --no-build --verbosity normal\n      \n      - name: Publish\n        run: dotnet publish -c Release -o ./publish\n      \n      - name: Deploy to Azure\n        uses: azure/webapps-deploy@v2\n        with:\n          app-name: 'myapi'\n          publish-profile: ${{ secrets.AZURE_PUBLISH_PROFILE }}\n          package: './publish'"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.5 Logging"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Built-in logging (ILogger)\npublic class UserService\n{\n    private readonly ILogger<UserService> _logger;\n    \n    public UserService(ILogger<UserService> logger) => _logger = logger;\n    \n    public async Task<User?> GetByIdAsync(int id)\n    {\n        _logger.LogInformation(\"Getting user {UserId}\", id);\n        \n        try\n        {\n            var user = await _repo.GetByIdAsync(id);\n            if (user is null)\n                _logger.LogWarning(\"User {UserId} not found\", id);\n            return user;\n        }\n        catch (Exception ex)\n        {\n            _logger.LogError(ex, \"Error getting user {UserId}\", id);\n            throw;\n        }\n    }\n}\n\n// Log levels: Trace < Debug < Information < Warning < Error < Critical\n\n// Serilog (popular structured logging library)\n// dotnet add package Serilog.AspNetCore\nbuilder.Host.UseSerilog((context, config) =>\n{\n    config\n        .WriteTo.Console()\n        .WriteTo.File(\"logs/app-.log\", rollingInterval: RollingInterval.Day)\n        .MinimumLevel.Information();\n});"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.6 Health Checks"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// Program.cs\nbuilder.Services.AddHealthChecks()\n    .AddDbContextCheck<AppDbContext>()          // DB connectivity\n    .AddUrlGroup(new Uri(\"https://api.com\"));  // External API\n\napp.MapHealthChecks(\"/health\");\n\n// GET /health → Healthy | Degraded | Unhealthy"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.7 Environment Variables & Secrets"
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "// appsettings.json — non-sensitive config\n// Environment variables — sensitive config in production\n\n// User secrets (development only)\n// dotnet user-secrets init\n// dotnet user-secrets set \"Jwt:Key\" \"my-secret-key\"\n\n// Access in code\nvar key = builder.Configuration[\"Jwt:Key\"];\n\n// Azure Key Vault (production)\n// builder.Configuration.AddAzureKeyVault(new Uri(\"https://myvault.vault.azure.net/\"), new DefaultAzureCredential());"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Dockerize your API with a multi-stage Dockerfile",
                "Set up docker-compose with API + SQL Server",
                "Create a GitHub Actions pipeline that builds, tests, and deploys",
                "Add structured logging with Serilog and health checks"
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the .NET Learning Path!"
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "Go back to the Main README to review all modules."
            },
            {
              "type": "quiz",
              "question": "In Deployment And DevOps, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Deployment And DevOps.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Deployment And DevOps is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
