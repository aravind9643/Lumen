import type { Tutorial } from '../types'

export const javaEnterprise: Tutorial = {
  "slug": "java-enterprise",
  "title": "Java Programming & Spring Boot Enterprise Architecture",
  "shortTitle": "Java Enterprise",
  "description": "Master Core Java, JVM internals, Object-Oriented design patterns, Spring Boot microservices, and enterprise JPA persistence.",
  "category": "Backend & Enterprise",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Java",
    "Spring Boot",
    "OOP",
    "JVM",
    "Microservices",
    "Hibernate",
    "Enterprise"
  ],
  "color": "#f97316",
  "updated": "2026-08-17",
  "prerequisites": [
    "Basic programming logic understanding."
  ],
  "outcomes": [
    "Master Core Java OOP, Generics, Lambdas, and Stream API",
    "Understand JVM memory architecture and Garbage Collection",
    "Build enterprise RESTful microservices with Spring Boot and Spring Data JPA",
    "Implement authentication with Spring Security and JWT"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "java-basics",
          "title": "Java Basics",
          "description": "Master Java Basics with hands-on examples, architectural diagrams, and structured exercises.",
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
                "What is Java, JDK, JVM, JRE",
                "Variables and data types",
                "Operators",
                "Type casting",
                "Console I/O",
                "Comments and naming conventions"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is Java?"
            },
            {
              "type": "paragraph",
              "text": "**Java** is a compiled, object-oriented, strongly-typed language that runs on the JVM (Java Virtual Machine). \"Write once, run anywhere\" — Java code compiles to bytecode that runs on any platform with a JVM."
            },
            {
              "type": "code",
              "language": "text",
              "code": "Java Source (.java)\n    ↓ javac (compiler)\nBytecode (.class)\n    ↓ JVM (Java Virtual Machine)\nNative Machine Code\n    ↓\nExecutes on any OS (Windows, Linux, macOS)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "JDK vs JRE vs JVM"
            },
            {
              "type": "table",
              "headers": [
                "Component",
                "What It Is"
              ],
              "rows": [
                [
                  "**JVM**",
                  "Runs bytecode — the execution engine",
                  ""
                ],
                [
                  "**JRE**",
                  "JVM + standard libraries — run Java apps",
                  ""
                ],
                [
                  "**JDK**",
                  "JRE + compiler + dev tools — develop Java apps",
                  ""
                ]
              ]
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create your first program\nmkdir HelloWorld && cd HelloWorld"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// HelloWorld.java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "javac HelloWorld.java   # Compile → HelloWorld.class\njava HelloWorld         # Run → \"Hello, World!\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Variables and Data Types"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Primitive Types (8 types)"
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
                  "-128 to 127",
                  "byte b = 100;`",
                  ""
                ],
                [
                  "short`",
                  "2 bytes",
                  "-32,768 to 32,767",
                  "short s = 1000;`",
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
                  "7 digits",
                  "float f = 3.14f;`",
                  ""
                ],
                [
                  "double`",
                  "8 bytes",
                  "15 digits",
                  "double d = 3.14159;`",
                  ""
                ],
                [
                  "boolean`",
                  "1 bit",
                  "true/false",
                  "boolean b = true;`",
                  ""
                ],
                [
                  "char`",
                  "2 bytes",
                  "Unicode character",
                  "char c = 'A';`",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Reference Types"
            },
            {
              "type": "code",
              "language": "java",
              "code": "String name = \"Aravind\";           // String (class, not primitive)\nint[] numbers = {1, 2, 3};        // Array\nObject obj = new Object();        // Object\n\n// String is IMMUTABLE — every modification creates a new String\nString greeting = \"Hello\";\ngreeting = greeting + \" World\";   // New String created"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "var (Type Inference — Java 10+)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "var name = \"Aravind\";   // Inferred as String\nvar age = 25;            // Inferred as int\nvar prices = new ArrayList<Double>();   // Inferred as ArrayList<Double>\n\n// Only for local variables — NOT for fields, parameters, or return types"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Constants"
            },
            {
              "type": "code",
              "language": "java",
              "code": "final double PI = 3.14159;   // Cannot change after assignment\nfinal int MAX_SIZE = 100;\n// PI = 3.0;   // Compile error!"
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
              "language": "java",
              "code": "int a = 10, b = 3;\na + b     // 13\na - b     // 7\na * b     // 30\na / b     // 3  (integer division!)\na % b     // 1  (remainder)\n\n// For decimal division\ndouble result = 10.0 / 3;   // 3.333...\n\na++;   // Post-increment: a = 11\n++a;   // Pre-increment: a = 12"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Comparison & Logical"
            },
            {
              "type": "code",
              "language": "java",
              "code": "a == b    // Equal to\na != b    // Not equal\na > b     // Greater than\na <= b    // Less than or equal\n\ntrue && false   // AND → false\ntrue || false   // OR → true\n!true           // NOT → false\n\n// ⚠️ Use .equals() for String comparison, NOT ==\nString s1 = \"Hello\";\nString s2 = new String(\"Hello\");\ns1 == s2         // false (compares references!)\ns1.equals(s2)    // true (compares content!)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Ternary Operator"
            },
            {
              "type": "code",
              "language": "java",
              "code": "int age = 20;\nString status = (age >= 18) ? \"Adult\" : \"Minor\";"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.4 Type Casting"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Implicit (widening — safe, no data loss)\nint num = 42;\ndouble d = num;     // int → double (automatic)\nlong l = num;       // int → long (automatic)\n\n// Explicit (narrowing — may lose data)\ndouble pi = 3.14;\nint rounded = (int) pi;   // 3 (truncated!)\n\n// String conversions\nString str = String.valueOf(42);           // int → String: \"42\"\nString str2 = Integer.toString(42);        // int → String: \"42\"\nint parsed = Integer.parseInt(\"42\");       // String → int: 42\ndouble parsed2 = Double.parseDouble(\"3.14\"); // String → double: 3.14\n\n// Wrapper classes (primitive ↔ object)\nInteger boxed = 42;             // Autoboxing: int → Integer\nint unboxed = boxed;            // Unboxing: Integer → int"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.5 Console I/O"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.Scanner;\n\npublic class IODemo {\n    public static void main(String[] args) {\n        // Output\n        System.out.println(\"With newline\");\n        System.out.print(\"Without newline: \");\n        System.out.printf(\"Name: %s, Age: %d%n\", \"Aravind\", 25);\n        System.out.printf(\"Price: $%.2f%n\", 99.99);\n\n        // Input\n        Scanner scanner = new Scanner(System.in);\n\n        System.out.print(\"Enter name: \");\n        String name = scanner.nextLine();\n\n        System.out.print(\"Enter age: \");\n        int age = scanner.nextInt();\n\n        System.out.print(\"Enter salary: \");\n        double salary = scanner.nextDouble();\n\n        System.out.printf(\"Hi %s, age %d, salary $%.2f%n\", name, age, salary);\n\n        scanner.close();\n    }\n}\n\n// Format specifiers:\n// %s = String, %d = int, %f = float/double, %b = boolean\n// %n = newline, %.2f = 2 decimal places, %10s = right-padded"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.6 Comments & Naming Conventions"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Single-line comment\n\n/* Multi-line\n   comment */\n\n/**\n * Javadoc comment — generates documentation.\n * @param name the user's name\n * @return greeting message\n */\npublic String greet(String name) {\n    return \"Hello, \" + name;\n}\n\n// Naming conventions:\n// PascalCase → Classes: UserAccount, HttpClient\n// camelCase → Methods, variables: getUserById, itemCount\n// UPPER_SNAKE → Constants: MAX_RETRIES, DATABASE_URL\n// lowercase → Packages: com.example.myapp"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a program that converts temperature between Celsius and Fahrenheit",
                "Write a program that reads two numbers and prints all arithmetic operations",
                "Explore autoboxing/unboxing with wrapper classes",
                "Use `Scanner` to build an interactive greeting program"
              ]
            },
            {
              "type": "quiz",
              "question": "In Java Basics, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Java Basics.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Java Basics is built around established design principles, structured syntax, and robust real-world implementations."
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
                "if / else if / else",
                "switch (traditional and enhanced)",
                "for, while, do-while, for-each loops",
                "Pattern matching (Java 17+)",
                "break, continue, labeled loops"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 If / Else"
            },
            {
              "type": "code",
              "language": "java",
              "code": "int score = 85;\n\nif (score >= 90) {\n    System.out.println(\"Grade: A\");\n} else if (score >= 80) {\n    System.out.println(\"Grade: B\");   // ← executes\n} else if (score >= 70) {\n    System.out.println(\"Grade: C\");\n} else {\n    System.out.println(\"Grade: F\");\n}\n\n// Ternary\nString result = (score >= 60) ? \"Pass\" : \"Fail\";"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Switch Statement"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Traditional switch\nString day = \"MONDAY\";\nswitch (day) {\n    case \"MONDAY\":\n    case \"TUESDAY\":\n    case \"WEDNESDAY\":\n    case \"THURSDAY\":\n    case \"FRIDAY\":\n        System.out.println(\"Weekday\");\n        break;   // ⚠️ Don't forget break!\n    case \"SATURDAY\":\n    case \"SUNDAY\":\n        System.out.println(\"Weekend\");\n        break;\n    default:\n        System.out.println(\"Invalid\");\n}\n\n// Enhanced switch expression (Java 14+)\nString type = switch (day) {\n    case \"MONDAY\", \"TUESDAY\", \"WEDNESDAY\", \"THURSDAY\", \"FRIDAY\" -> \"Weekday\";\n    case \"SATURDAY\", \"SUNDAY\" -> \"Weekend\";\n    default -> \"Invalid\";\n};\n\n// Switch with blocks\nint numLetters = switch (day) {\n    case \"MONDAY\", \"FRIDAY\", \"SUNDAY\" -> 6;\n    case \"TUESDAY\" -> 7;\n    default -> {\n        System.out.println(\"Calculating...\");\n        yield day.length();   // yield returns value from block\n    }\n};"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Pattern Matching (Java 17+)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// instanceof pattern matching (Java 16+)\nObject obj = \"Hello\";\nif (obj instanceof String s) {\n    System.out.println(s.toUpperCase());   // No need to cast!\n}\n\n// Pattern matching in switch (Java 21+)\nString describe(Object obj) {\n    return switch (obj) {\n        case Integer i when i > 0 -> \"Positive int: \" + i;\n        case Integer i            -> \"Non-positive int: \" + i;\n        case String s             -> \"String: \" + s;\n        case null                 -> \"null\";\n        default                   -> \"Unknown: \" + obj;\n    };\n}\n\n// Sealed classes + pattern matching\nsealed interface Shape permits Circle, Rectangle {}\nrecord Circle(double radius) implements Shape {}\nrecord Rectangle(double w, double h) implements Shape {}\n\ndouble area(Shape shape) {\n    return switch (shape) {\n        case Circle c    -> Math.PI * c.radius() * c.radius();\n        case Rectangle r -> r.w() * r.h();\n    };   // No default needed — sealed = exhaustive!\n}"
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
              "language": "java",
              "code": "for (int i = 0; i < 5; i++) {\n    System.out.println(i);   // 0, 1, 2, 3, 4\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "while Loop"
            },
            {
              "type": "code",
              "language": "java",
              "code": "int count = 0;\nwhile (count < 5) {\n    System.out.println(count);\n    count++;\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "do-while Loop"
            },
            {
              "type": "code",
              "language": "java",
              "code": "Scanner scanner = new Scanner(System.in);\nint input;\ndo {\n    System.out.print(\"Enter positive number: \");\n    input = scanner.nextInt();\n} while (input <= 0);   // Runs at least ONCE"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "for-each Loop"
            },
            {
              "type": "code",
              "language": "java",
              "code": "String[] fruits = {\"Apple\", \"Banana\", \"Cherry\"};\nfor (String fruit : fruits) {\n    System.out.println(fruit);\n}\n\n// With index — use traditional for loop\nfor (int i = 0; i < fruits.length; i++) {\n    System.out.printf(\"%d: %s%n\", i, fruits[i]);\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.5 Jump Statements"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// break — exit loop\nfor (int i = 0; i < 10; i++) {\n    if (i == 5) break;\n    System.out.println(i);   // 0, 1, 2, 3, 4\n}\n\n// continue — skip iteration\nfor (int i = 0; i < 10; i++) {\n    if (i % 2 == 0) continue;\n    System.out.println(i);   // 1, 3, 5, 7, 9\n}\n\n// Labeled break (exit nested loop)\nouter:\nfor (int i = 0; i < 5; i++) {\n    for (int j = 0; j < 5; j++) {\n        if (i * j > 6) break outer;   // Breaks BOTH loops\n        System.out.printf(\"(%d,%d) \", i, j);\n    }\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write FizzBuzz (1-100)",
                "Build a calculator using switch expressions",
                "Use pattern matching to classify different objects",
                "Write a number guessing game with a do-while loop"
              ]
            },
            {
              "type": "quiz",
              "question": "In Control Flow, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Control Flow.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Control Flow is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "arrays-and-collections",
          "title": "Arrays And Collections",
          "description": "Master Arrays And Collections with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Arrays (single, multi-dimensional)",
                "ArrayList, LinkedList",
                "HashMap, TreeMap",
                "HashSet, TreeSet",
                "When to use which"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 Arrays"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Declaration and initialization\nint[] numbers = {1, 2, 3, 4, 5};\nString[] names = new String[3];   // Default: null, null, null\nint[] zeros = new int[5];         // Default: 0, 0, 0, 0, 0\n\n// Access\nnumbers[0] = 10;\nSystem.out.println(numbers.length);  // 5 (length is a field, NOT a method)\n\n// Iterate\nfor (int n : numbers) System.out.print(n + \" \");\n\n// Array utility methods\nimport java.util.Arrays;\nArrays.sort(numbers);                       // Sort\nArrays.fill(numbers, 0);                    // Fill with 0\nint idx = Arrays.binarySearch(numbers, 3);  // Search (sorted only)\nint[] copy = Arrays.copyOf(numbers, 10);    // Copy with new size\nSystem.out.println(Arrays.toString(numbers)); // [1, 2, 3, 4, 5]\nboolean equal = Arrays.equals(arr1, arr2);   // Compare\n\n// 2D Array\nint[][] matrix = {\n    {1, 2, 3},\n    {4, 5, 6}\n};\nSystem.out.println(matrix[1][2]);   // 6"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 ArrayList"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.ArrayList;\nimport java.util.List;\n\n// List interface — ArrayList is the most common implementation\nList<String> fruits = new ArrayList<>();\n// Or: var fruits = new ArrayList<String>();\n\n// Add\nfruits.add(\"Apple\");\nfruits.add(\"Banana\");\nfruits.add(1, \"Avocado\");          // Insert at index\nfruits.addAll(List.of(\"Fig\", \"Grape\"));\n\n// Access\nString first = fruits.get(0);      // \"Apple\"\nString last = fruits.get(fruits.size() - 1);   // Last item\n\n// Modify\nfruits.set(0, \"Apricot\");         // Replace at index\n\n// Remove\nfruits.remove(\"Banana\");          // Remove by value\nfruits.remove(0);                 // Remove by index\nfruits.removeIf(f -> f.startsWith(\"A\"));  // Remove matching\n\n// Search\nboolean has = fruits.contains(\"Apple\");\nint index = fruits.indexOf(\"Cherry\");\n\n// Info\nfruits.size();                    // Number of elements\nfruits.isEmpty();                 // true/false\n\n// Sort\nfruits.sort(null);                // Natural order\nfruits.sort(String::compareToIgnoreCase);  // Custom comparator\n\n// Immutable list (Java 9+)\nList<String> fixed = List.of(\"A\", \"B\", \"C\");\n// fixed.add(\"D\");   // UnsupportedOperationException!\n\n// Convert\nString[] array = fruits.toArray(new String[0]);\nList<String> fromArray = new ArrayList<>(Arrays.asList(array));"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 HashMap"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.HashMap;\nimport java.util.Map;\n\nMap<String, Integer> scores = new HashMap<>();\n\n// Put (add/update)\nscores.put(\"Alice\", 95);\nscores.put(\"Bob\", 87);\nscores.put(\"Alice\", 98);         // Updates existing key\n\n// Get\nint aliceScore = scores.get(\"Alice\");                    // 98\nint unknown = scores.getOrDefault(\"Charlie\", 0);        // 0 (default)\n\n// Check\nscores.containsKey(\"Alice\");     // true\nscores.containsValue(87);        // true\n\n// Remove\nscores.remove(\"Bob\");\nscores.remove(\"Alice\", 98);     // Remove only if value matches\n\n// Iterate\nfor (Map.Entry<String, Integer> entry : scores.entrySet()) {\n    System.out.printf(\"%s: %d%n\", entry.getKey(), entry.getValue());\n}\n\n// Java 10+\nscores.forEach((key, value) -> System.out.printf(\"%s: %d%n\", key, value));\n\n// Useful methods\nscores.putIfAbsent(\"Dave\", 80);          // Add only if missing\nscores.computeIfPresent(\"Alice\", (k, v) -> v + 10);  // Update if exists\nscores.merge(\"Alice\", 5, Integer::sum);  // Merge with function\n\n// Immutable map (Java 9+)\nMap<String, Integer> fixed = Map.of(\"A\", 1, \"B\", 2, \"C\", 3);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.4 HashSet"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.HashSet;\nimport java.util.Set;\n\nSet<Integer> set = new HashSet<>(Set.of(1, 2, 3, 4, 5));\n\nset.add(3);         // false (already exists — no duplicates!)\nset.add(6);         // true\nset.remove(1);\nset.contains(3);    // true\nset.size();          // 5\n\n// Set operations\nSet<Integer> setA = new HashSet<>(Set.of(1, 2, 3, 4));\nSet<Integer> setB = new HashSet<>(Set.of(3, 4, 5, 6));\n\n// Union\nSet<Integer> union = new HashSet<>(setA);\nunion.addAll(setB);         // {1,2,3,4,5,6}\n\n// Intersection\nSet<Integer> intersection = new HashSet<>(setA);\nintersection.retainAll(setB); // {3,4}\n\n// Difference\nSet<Integer> diff = new HashSet<>(setA);\ndiff.removeAll(setB);       // {1,2}\n\n// Remove duplicates from a list\nList<Integer> list = List.of(1, 2, 2, 3, 3, 3);\nList<Integer> unique = new ArrayList<>(new HashSet<>(list));"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.5 Collection Comparison"
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
                  "Index",
                  "",
                  "O(n)",
                  "Fixed-size, fast index access",
                  ""
                ],
                [
                  "ArrayList`",
                  "Index",
                  "",
                  "O(n)",
                  "Dynamic list, random access",
                  ""
                ],
                [
                  "LinkedList`",
                  "Index",
                  "",
                  "O(n)",
                  "Frequent insert/delete at head",
                  ""
                ],
                [
                  "HashMap`",
                  "",
                  "Keys:",
                  "O(1)",
                  "Key-value lookup",
                  ""
                ],
                [
                  "TreeMap`",
                  "Sorted",
                  "Keys:",
                  "O(log n)",
                  "Sorted key-value",
                  ""
                ],
                [
                  "HashSet`",
                  "",
                  "",
                  "O(1)",
                  "Unique items, membership test",
                  ""
                ],
                [
                  "TreeSet`",
                  "Sorted",
                  "",
                  "O(log n)",
                  "Sorted unique items",
                  ""
                ],
                [
                  "LinkedHashMap`",
                  "Insert",
                  "Keys:",
                  "O(1)",
                  "Insertion-ordered map",
                  ""
                ]
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Remove duplicates from an array using a HashSet",
                "Count word frequency in a sentence using HashMap",
                "Implement a simple phone book with HashMap",
                "Compare ArrayList vs LinkedList performance for inserts"
              ]
            },
            {
              "type": "quiz",
              "question": "In Arrays And Collections, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Arrays And Collections.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Arrays And Collections is built around established design principles, structured syntax, and robust real-world implementations."
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
                "Parameters and return types",
                "Method overloading",
                "Varargs",
                "Static vs instance methods",
                "Recursion"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 Defining Methods"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Syntax: accessModifier returnType methodName(parameters) { body }\n\npublic static int add(int a, int b) {\n    return a + b;\n}\n\npublic static void greet(String name) {   // void = no return\n    System.out.println(\"Hello, \" + name + \"!\");\n}\n\n// Calling\nint result = add(3, 5);   // 8\ngreet(\"Aravind\");          // \"Hello, Aravind!\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Method Overloading"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Same name, different parameter types or count\nstatic int add(int a, int b) { return a + b; }\nstatic double add(double a, double b) { return a + b; }\nstatic int add(int a, int b, int c) { return a + b + c; }\n\nadd(1, 2);         // Calls int version → 3\nadd(1.5, 2.5);     // Calls double version → 4.0\nadd(1, 2, 3);      // Calls 3-param version → 6"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Varargs (Variable Arguments)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Accept any number of arguments\nstatic int sum(int... numbers) {   // numbers is an int[]\n    int total = 0;\n    for (int n : numbers) total += n;\n    return total;\n}\n\nsum(1, 2, 3);                // 6\nsum(1, 2, 3, 4, 5);          // 15\nsum();                        // 0\n\n// Varargs must be the LAST parameter\nstatic void log(String level, String... messages) { }"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.4 Pass by Value"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Java is ALWAYS pass by value\n// Primitives: copies the value\nstatic void modify(int x) { x = 100; }\nint num = 5;\nmodify(num);\nSystem.out.println(num);   // 5 (unchanged!)\n\n// Objects: copies the REFERENCE (not the object)\nstatic void addItem(List<String> list) {\n    list.add(\"New\");   // Modifies original — same reference!\n}\nList<String> items = new ArrayList<>(List.of(\"A\"));\naddItem(items);\nSystem.out.println(items);   // [A, New] (modified!)\n\n// But reassigning the reference doesn't affect original\nstatic void replace(List<String> list) {\n    list = new ArrayList<>();   // New reference — original untouched\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.5 Static vs Instance Methods"
            },
            {
              "type": "code",
              "language": "java",
              "code": "public class MathUtils {\n    // Static — belongs to CLASS, call without an object\n    public static int add(int a, int b) { return a + b; }\n    \n    // Instance — belongs to OBJECT, needs an instance\n    private int lastResult;\n    public int addAndStore(int a, int b) {\n        lastResult = a + b;\n        return lastResult;\n    }\n}\n\n// Static: MathUtils.add(3, 5);\n// Instance: new MathUtils().addAndStore(3, 5);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.6 Recursion"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Method that calls itself\nstatic int factorial(int n) {\n    if (n <= 1) return 1;           // Base case\n    return n * factorial(n - 1);    // Recursive case\n}\n\nfactorial(5);   // 5 * 4 * 3 * 2 * 1 = 120\n\n// Fibonacci\nstatic int fibonacci(int n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write overloaded `max` methods for int, double, and String",
                "Create a varargs method that calculates the average",
                "Implement recursive binary search",
                "Demonstrate pass-by-value with primitives and objects"
              ]
            },
            {
              "type": "quiz",
              "question": "In Methods, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Methods."
              ],
              "answer": 3,
              "explanation": "Methods is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
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
                "Encapsulation (access modifiers, getters/setters)",
                "Inheritance and polymorphism",
                "Interfaces and abstract classes",
                "Records, enums, sealed classes",
                "equals/hashCode contract",
                "Inner classes"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 Classes and Objects"
            },
            {
              "type": "code",
              "language": "java",
              "code": "public class Dog {\n    // Fields\n    private String name;\n    private String breed;\n    private int age;\n\n    // Constructor\n    public Dog(String name, String breed, int age) {\n        this.name = name;\n        this.breed = breed;\n        this.age = age;\n    }\n\n    // Getters and Setters (encapsulation)\n    public String getName() { return name; }\n    public void setName(String name) { this.name = name; }\n    public String getBreed() { return breed; }\n    public int getAge() { return age; }\n\n    // Methods\n    public String bark() {\n        return name + \" says Woof!\";\n    }\n\n    @Override\n    public String toString() {\n        return String.format(\"%s (%s, %dy)\", name, breed, age);\n    }\n}\n\n// Creating objects\nDog dog = new Dog(\"Buddy\", \"Golden Retriever\", 3);\nSystem.out.println(dog.bark());      // \"Buddy says Woof!\"\nSystem.out.println(dog);             // \"Buddy (Golden Retriever, 3y)\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Access Modifiers"
            },
            {
              "type": "table",
              "headers": [
                "Modifier",
                "Class",
                "Package",
                "Subclass",
                "World"
              ],
              "rows": [
                [
                  "public`",
                  "",
                  "",
                  "",
                  "",
                  ""
                ],
                [
                  "protected`",
                  "",
                  "",
                  "",
                  "",
                  ""
                ],
                [
                  "default)",
                  "",
                  "",
                  "",
                  "",
                  ""
                ],
                [
                  "private`",
                  "",
                  "",
                  "",
                  "",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 Inheritance"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Base class\npublic class Animal {\n    protected String name;\n\n    public Animal(String name) { this.name = name; }\n\n    public String speak() { return name + \" makes a sound\"; }\n}\n\n// Derived class\npublic class Cat extends Animal {\n    public Cat(String name) { super(name); }   // Call parent constructor\n\n    @Override   // ← Always use this annotation\n    public String speak() { return name + \" says Meow!\"; }\n}\n\n// Polymorphism\nAnimal animal = new Cat(\"Whiskers\");   // Upcasting\nSystem.out.println(animal.speak());    // \"Whiskers says Meow!\" (Cat's version)\n\n// instanceof check\nif (animal instanceof Cat cat) {   // Pattern matching (Java 16+)\n    System.out.println(\"It's a cat!\");\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.4 Interfaces"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Interface = contract (WHAT to do, not HOW)\npublic interface Shape {\n    double area();\n    double perimeter();\n\n    // Default method (Java 8+) — has implementation\n    default void printInfo() {\n        System.out.printf(\"Area: %.2f, Perimeter: %.2f%n\", area(), perimeter());\n    }\n\n    // Static method\n    static Shape bigger(Shape a, Shape b) {\n        return a.area() > b.area() ? a : b;\n    }\n}\n\npublic interface Drawable {\n    void draw();\n}\n\n// A class can implement MULTIPLE interfaces\npublic class Circle implements Shape, Drawable {\n    private double radius;\n\n    public Circle(double radius) { this.radius = radius; }\n\n    @Override public double area() { return Math.PI * radius * radius; }\n    @Override public double perimeter() { return 2 * Math.PI * radius; }\n    @Override public void draw() { System.out.println(\"Drawing circle\"); }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.5 Abstract Classes"
            },
            {
              "type": "code",
              "language": "java",
              "code": "public abstract class Vehicle {\n    protected String brand;\n\n    public Vehicle(String brand) { this.brand = brand; }\n\n    // Abstract — MUST be implemented by subclasses\n    public abstract double fuelEfficiency();\n\n    // Concrete — shared implementation\n    public String getBrand() { return brand; }\n    public void printInfo() {\n        System.out.printf(\"%s: %.1f km/l%n\", brand, fuelEfficiency());\n    }\n}\n\npublic class Car extends Vehicle {\n    public Car(String brand) { super(brand); }\n\n    @Override\n    public double fuelEfficiency() { return 15.5; }\n}"
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
                  "Only constants",
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
                  "Default methods",
                  "(Java 8+)",
                  "",
                  ""
                ],
                [
                  "When to use",
                  "Can do\" (Comparable, Serializable)",
                  "Is a\" (Animal → Dog)",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.6 Records (Java 16+)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Record = immutable data class (auto-generates constructor, getters, equals, hashCode, toString)\npublic record User(String name, int age, String email) {}\n\nUser user = new User(\"Aravind\", 25, \"a@test.com\");\nSystem.out.println(user.name());     // \"Aravind\" (accessor, not getName)\nSystem.out.println(user);            // User[name=Aravind, age=25, email=a@test.com]\n\n// Records are final and immutable — all fields are private final\n// user.name = \"New\";   // Compile error!\n\n// Custom validation\npublic record Product(String name, double price) {\n    public Product {   // Compact constructor\n        if (price < 0) throw new IllegalArgumentException(\"Negative price\");\n        name = name.trim();   // Modify before assignment\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.7 Enums"
            },
            {
              "type": "code",
              "language": "java",
              "code": "public enum Priority {\n    LOW(1), MEDIUM(2), HIGH(3), CRITICAL(4);\n\n    private final int level;\n\n    Priority(int level) { this.level = level; }\n\n    public int getLevel() { return level; }\n\n    public boolean isUrgent() { return level >= 3; }\n}\n\nPriority p = Priority.HIGH;\nSystem.out.println(p.getLevel());    // 3\nSystem.out.println(p.isUrgent());    // true\nSystem.out.println(p.name());        // \"HIGH\"\nSystem.out.println(p.ordinal());     // 2 (0-based index)\n\n// Iterate\nfor (Priority pr : Priority.values()) {\n    System.out.println(pr);\n}\n\n// Parse from string\nPriority parsed = Priority.valueOf(\"HIGH\");"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.8 Sealed Classes (Java 17+)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Sealed = restricts which classes can extend/implement\npublic sealed interface Shape permits Circle, Rectangle, Triangle {}\n\npublic record Circle(double radius) implements Shape {}\npublic record Rectangle(double w, double h) implements Shape {}\npublic final class Triangle implements Shape { /* ... */ }\n\n// Enables exhaustive pattern matching in switch\ndouble area(Shape s) {\n    return switch (s) {\n        case Circle c    -> Math.PI * c.radius() * c.radius();\n        case Rectangle r -> r.w() * r.h();\n        case Triangle t  -> /* ... */ 0;\n    };\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.9 equals() and hashCode() Contract"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// ⚠️ MUST override both together — if a.equals(b), then a.hashCode() == b.hashCode()\n\npublic class Employee {\n    private int id;\n    private String name;\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;                       // Same reference\n        if (o == null || getClass() != o.getClass()) return false;\n        Employee other = (Employee) o;\n        return id == other.id && Objects.equals(name, other.name);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(id, name);   // Must use same fields as equals\n    }\n}\n\n// Why does this matter?\n// HashMap and HashSet use hashCode() to find buckets, then equals() to match\n// Without proper overrides, same data = different objects in sets/maps!\n\nSet<Employee> set = new HashSet<>();\nset.add(new Employee(1, \"Aravind\"));\nset.contains(new Employee(1, \"Aravind\"));   // false WITHOUT overrides! true WITH.\n\n// Records auto-generate equals/hashCode based on all fields — no need to override!"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.10 Inner Classes"
            },
            {
              "type": "code",
              "language": "java",
              "code": "public class Outer {\n    private String name = \"Outer\";\n\n    // 1. Static nested class (most common — doesn't need outer instance)\n    public static class StaticNested {\n        public void show() { System.out.println(\"Static nested\"); }\n    }\n\n    // 2. Inner class (has access to outer instance)\n    public class Inner {\n        public void show() { System.out.println(\"Inner: \" + name); }\n    }\n\n    // 3. Local class (inside a method)\n    public void method() {\n        class Local {\n            void show() { System.out.println(\"Local class\"); }\n        }\n        new Local().show();\n    }\n\n    // 4. Anonymous class (inline implementation)\n    Runnable task = new Runnable() {\n        @Override\n        public void run() { System.out.println(\"Anonymous class\"); }\n    };\n    // Replaced by lambdas: Runnable task = () -> System.out.println(\"Lambda\");\n}\n\n// Usage\nOuter.StaticNested sn = new Outer.StaticNested();\nOuter.Inner inner = new Outer().new Inner();   // Needs outer instance"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a class hierarchy: Employee → Manager, Developer, Intern",
                "Create a Shape interface with Circle, Rectangle, Triangle implementations",
                "Override equals/hashCode and test with HashMap/HashSet",
                "Build a Priority enum with custom methods"
              ]
            },
            {
              "type": "quiz",
              "question": "In OOP, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of OOP.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "OOP is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "strings-and-exceptions",
          "title": "Strings And Exceptions",
          "description": "Master Strings And Exceptions with hands-on examples, architectural diagrams, and structured exercises.",
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
                "String methods and immutability",
                "StringBuilder for performance",
                "Regular expressions",
                "Exception handling (try-catch-finally)",
                "Custom exceptions and try-with-resources",
                "Date & Time API (java.time)",
                "Java Memory Model (Stack, Heap, GC)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 String Methods"
            },
            {
              "type": "code",
              "language": "java",
              "code": "String s = \"  Hello, World!  \";\n\n// Info\ns.length();                    // 17\ns.isEmpty();                   // false\ns.isBlank();                   // false (Java 11+)\ns.charAt(7);                   // 'W'\n\n// Case\ns.toUpperCase();               // \"  HELLO, WORLD!  \"\ns.toLowerCase();               // \"  hello, world!  \"\n\n// Trim\ns.trim();                      // \"Hello, World!\"\ns.strip();                     // \"Hello, World!\" (Unicode-aware, Java 11+)\ns.stripLeading();              // \"Hello, World!  \"\ns.stripTrailing();             // \"  Hello, World!\"\n\n// Search\ns.contains(\"World\");           // true\ns.startsWith(\"  He\");          // true\ns.endsWith(\"!  \");             // true\ns.indexOf(\"World\");            // 9\ns.lastIndexOf(\"l\");            // 12\n\n// Modify (returns NEW string)\ns.replace(\"World\", \"Java\");    // \"  Hello, Java!  \"\ns.substring(9, 14);            // \"World\"\ns.repeat(3);                   // Repeats 3 times (Java 11+)\n\n// Split & Join\n\"a,b,c\".split(\",\");            // [\"a\", \"b\", \"c\"]\nString.join(\" | \", \"a\", \"b\");  // \"a | b\"\n\n// Compare\n\"abc\".equals(\"abc\");                                     // true\n\"abc\".equalsIgnoreCase(\"ABC\");                           // true\n\"apple\".compareTo(\"banana\");                             // negative (a < b)\n\n// Format\nString.format(\"Name: %s, Age: %d\", \"Aravind\", 25);\n\"Name: %s, Age: %d\".formatted(\"Aravind\", 25);           // Java 15+"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Text Blocks (Java 15+)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "String json = \"\"\"\n        {\n            \"name\": \"Aravind\",\n            \"age\": 25\n        }\n        \"\"\";"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 StringBuilder"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// String concatenation in loops is SLOW (creates new object each time)\n// ❌ Bad:\nString result = \"\";\nfor (int i = 0; i < 10000; i++) result += i;   // O(n²)!\n\n// ✅ Good: StringBuilder\nStringBuilder sb = new StringBuilder();\nfor (int i = 0; i < 10000; i++) sb.append(i);\nString output = sb.toString();\n\n// Methods\nsb.append(\"Hello\");\nsb.append(\" World\");\nsb.insert(5, \",\");          // \"Hello, World\"\nsb.delete(5, 6);            // \"Hello World\"\nsb.replace(5, 10, \" Java\"); // \"Hello Java\"\nsb.reverse();               // \"avaJ olleH\"\nsb.length();                // Character count\nsb.toString();              // Convert to String"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Regular Expressions"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.regex.*;\n\nString text = \"Call me at 123-456-7890 or 987-654-3210\";\n\n// Match check\nboolean isEmail = \"test@mail.com\".matches(\"^[\\\\w.-]+@[\\\\w.-]+\\\\.\\\\w+$\");   // true\n\n// Find all matches\nPattern pattern = Pattern.compile(\"\\\\d{3}-\\\\d{3}-\\\\d{4}\");\nMatcher matcher = pattern.matcher(text);\nwhile (matcher.find()) {\n    System.out.println(matcher.group());   // \"123-456-7890\", \"987-654-3210\"\n}\n\n// Replace\nString cleaned = text.replaceAll(\"\\\\d{3}-\\\\d{3}-\\\\d{4}\", \"[REDACTED]\");\n\n// Groups\nMatcher m = Pattern.compile(\"(\\\\d{4})-(\\\\d{2})-(\\\\d{2})\").matcher(\"2024-01-15\");\nif (m.find()) {\n    String year = m.group(1);    // \"2024\"\n    String month = m.group(2);   // \"01\"\n}\n\n// Split\nString[] parts = \"apple; banana; cherry\".split(\";\\\\s*\");"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.4 Exception Handling"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// try-catch-finally\ntry {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Math error: \" + e.getMessage());\n} catch (Exception e) {   // Catch-all (put specific catches first!)\n    System.out.println(\"Error: \" + e.getMessage());\n} finally {\n    System.out.println(\"Always runs (cleanup)\");\n}\n\n// Multi-catch (Java 7+)\ntry {\n    // code\n} catch (IOException | SQLException e) {\n    System.out.println(\"IO or SQL error: \" + e.getMessage());\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Exception Hierarchy"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Throwable\n├── Error (don't catch — JVM errors)\n│   ├── OutOfMemoryError\n│   └── StackOverflowError\n└── Exception\n    ├── RuntimeException (unchecked — don't HAVE to catch)\n    │   ├── NullPointerException\n    │   ├── IndexOutOfBoundsException\n    │   ├── IllegalArgumentException\n    │   └── ArithmeticException\n    └── Checked Exceptions (MUST catch or declare)\n        ├── IOException\n        ├── SQLException\n        └── FileNotFoundException"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Custom Exceptions"
            },
            {
              "type": "code",
              "language": "java",
              "code": "public class UserNotFoundException extends RuntimeException {\n    private final int userId;\n\n    public UserNotFoundException(int userId) {\n        super(\"User not found: \" + userId);\n        this.userId = userId;\n    }\n\n    public int getUserId() { return userId; }\n}\n\n// Throw\npublic User findUser(int id) {\n    return users.stream()\n        .filter(u -> u.getId() == id)\n        .findFirst()\n        .orElseThrow(() -> new UserNotFoundException(id));\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.5 Try-With-Resources (Java 7+)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Automatically closes resources (AutoCloseable)\ntry (var reader = new BufferedReader(new FileReader(\"file.txt\"))) {\n    String line;\n    while ((line = reader.readLine()) != null) {\n        System.out.println(line);\n    }\n}   // reader.close() called automatically — even if exception!\n\n// Multiple resources\ntry (var input = new FileInputStream(\"in.txt\");\n     var output = new FileOutputStream(\"out.txt\")) {\n    input.transferTo(output);\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.6 Date & Time API (java.time)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.time.*;\nimport java.time.format.DateTimeFormatter;\n\n// Current date/time\nLocalDate today = LocalDate.now();                      // 2024-01-15\nLocalTime now = LocalTime.now();                        // 14:30:45.123\nLocalDateTime dateTime = LocalDateTime.now();           // 2024-01-15T14:30:45\nZonedDateTime zoned = ZonedDateTime.now(ZoneId.of(\"Asia/Kolkata\"));\nInstant instant = Instant.now();                        // UTC timestamp\n\n// Create specific date/time\nLocalDate birthday = LocalDate.of(2000, 5, 15);\nLocalTime meeting = LocalTime.of(14, 30);\nLocalDateTime event = LocalDateTime.of(2024, 12, 31, 23, 59);\n\n// Parse from string\nLocalDate parsed = LocalDate.parse(\"2024-01-15\");\nLocalDateTime parsed2 = LocalDateTime.parse(\"2024-01-15T14:30:00\");\n\n// Format\nDateTimeFormatter fmt = DateTimeFormatter.ofPattern(\"dd-MM-yyyy HH:mm\");\nString formatted = dateTime.format(fmt);     // \"15-01-2024 14:30\"\n\n// Manipulate (immutable — returns new object)\nLocalDate tomorrow = today.plusDays(1);\nLocalDate lastMonth = today.minusMonths(1);\nLocalDate nextYear = today.plusYears(1);\nLocalDate withDay = today.withDayOfMonth(1);  // First of month\n\n// Compare\ntoday.isBefore(tomorrow);    // true\ntoday.isAfter(birthday);     // true\ntoday.isEqual(LocalDate.now());\n\n// Duration (time-based) and Period (date-based)\nDuration duration = Duration.between(LocalTime.of(9, 0), LocalTime.of(17, 30));\nSystem.out.println(duration.toHours());     // 8\n\nPeriod period = Period.between(birthday, today);\nSystem.out.printf(\"Age: %d years, %d months%n\", period.getYears(), period.getMonths());\n\n// Useful methods\ntoday.getDayOfWeek();        // MONDAY\ntoday.getMonth();            // JANUARY\ntoday.lengthOfMonth();       // 31\nYear.isLeap(2024);           // true"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.7 Java Memory Model"
            },
            {
              "type": "code",
              "language": "text",
              "code": "JVM Memory:\n┌─────────────────────────────┐\n│  STACK (per thread)         │  ← Local variables, method calls\n│  ┌─────────────────┐       │     Fast, auto-cleaned\n│  │ int age = 25     │       │     Stores: primitives, references\n│  │ String ref → ────┼───┐   │\n│  └─────────────────┘   │   │\n├─────────────────────────┼───┤\n│  HEAP (shared)          │   │  ← Objects live here\n│  ┌──────────────────┐   │   │     Managed by Garbage Collector\n│  │ String \"Aravind\" │←──┘   │     Stores: all objects, arrays, Strings\n│  └──────────────────┘       │\n│  ┌──────────────────┐       │\n│  │ String Pool      │       │  ← Interned strings (reused)\n│  │ \"Hello\" \"World\"  │       │\n│  └──────────────────┘       │\n├─────────────────────────────┤\n│  METASPACE                  │  ← Class metadata, method info\n└─────────────────────────────┘\n\nGarbage Collection (GC):\n  - Automatically frees unused heap objects\n  - Objects with no references → eligible for GC\n  - You CANNOT force GC (System.gc() is only a suggestion)\n  - Types: G1GC (default), ZGC (low-latency), Shenandoah"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// String Pool\nString s1 = \"Hello\";               // Created in String Pool\nString s2 = \"Hello\";               // Reuses same pool object\nString s3 = new String(\"Hello\");   // Created in Heap (separate object)\n\ns1 == s2     // true (same pool reference)\ns1 == s3     // false (different objects!)\ns1.equals(s3) // true (same content)\n\n// Null safety\nString name = null;\n// name.length();          // NullPointerException!\n// Prefer: Objects.requireNonNull(name, \"Name cannot be null\");"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a program to count vowels, consonants, and digits in a string",
                "Use StringBuilder to build an HTML table",
                "Calculate age in years, months, and days using java.time",
                "Create custom exceptions for a banking application"
              ]
            },
            {
              "type": "quiz",
              "question": "In Strings And Exceptions, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Strings And Exceptions.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Strings And Exceptions is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "generics-and-collections",
          "title": "Generics And Collections",
          "description": "Master Generics And Collections with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Generics (classes, methods, wildcards)",
                "Collections Framework deep dive",
                "Comparable vs Comparator",
                "Iterators"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Generics"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Without generics — no type safety\nList raw = new ArrayList();\nraw.add(\"Hello\");\nraw.add(42);\nString s = (String) raw.get(1);   // ClassCastException at runtime!\n\n// With generics — type-safe at compile time\nList<String> safe = new ArrayList<>();\nsafe.add(\"Hello\");\n// safe.add(42);   // Compile error!\n\n// Generic class\npublic class Box<T> {\n    private T value;\n\n    public Box(T value) { this.value = value; }\n    public T getValue() { return value; }\n    public void setValue(T value) { this.value = value; }\n}\n\nBox<String> strBox = new Box<>(\"Hello\");\nBox<Integer> intBox = new Box<>(42);\n\n// Generic method\npublic static <T> T findFirst(List<T> list, Predicate<T> predicate) {\n    for (T item : list) {\n        if (predicate.test(item)) return item;\n    }\n    return null;\n}\n\nString found = findFirst(List.of(\"a\", \"bb\", \"ccc\"), s -> s.length() > 1);\n\n// Multiple type parameters\npublic class Pair<K, V> {\n    private K key;\n    private V value;\n    public Pair(K key, V value) { this.key = key; this.value = value; }\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Bounded Generics"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Upper bound: T must be Number or its subclass\npublic static <T extends Number> double sum(List<T> list) {\n    return list.stream().mapToDouble(Number::doubleValue).sum();\n}\nsum(List.of(1, 2, 3));       // Works (Integer extends Number)\nsum(List.of(1.5, 2.5));      // Works (Double extends Number)\n// sum(List.of(\"a\", \"b\"));   // Compile error!\n\n// Multiple bounds\npublic static <T extends Comparable<T> & Serializable> T max(T a, T b) {\n    return a.compareTo(b) > 0 ? a : b;\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Wildcards"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// ? = unknown type\n// ? extends T — upper bound (read-only, \"producer\")\npublic static double sumAll(List<? extends Number> list) {\n    double total = 0;\n    for (Number n : list) total += n.doubleValue();\n    return total;\n}\nsumAll(List.of(1, 2, 3));      // Works with Integer\nsumAll(List.of(1.5, 2.5));     // Works with Double\n\n// ? super T — lower bound (write-only, \"consumer\")\npublic static void addNumbers(List<? super Integer> list) {\n    list.add(1);\n    list.add(2);\n}\n\n// PECS: Producer Extends, Consumer Super"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 Comparable vs Comparator"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Comparable — natural ordering (implement in the class itself)\npublic class Employee implements Comparable<Employee> {\n    private String name;\n    private double salary;\n\n    @Override\n    public int compareTo(Employee other) {\n        return Double.compare(this.salary, other.salary);   // By salary\n    }\n}\nCollections.sort(employees);   // Uses compareTo\n\n// Comparator — custom ordering (external, reusable)\nComparator<Employee> byName = Comparator.comparing(Employee::getName);\nComparator<Employee> bySalaryDesc = Comparator.comparing(Employee::getSalary).reversed();\nComparator<Employee> byNameThenSalary = byName.thenComparing(Employee::getSalary);\n\nemployees.sort(byName);\nemployees.sort(bySalaryDesc);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.3 Collections Utility Class"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.Collections;\n\nList<Integer> list = new ArrayList<>(List.of(5, 3, 8, 1, 9));\n\nCollections.sort(list);                  // [1, 3, 5, 8, 9]\nCollections.reverse(list);              // [9, 8, 5, 3, 1]\nCollections.shuffle(list);             // Random order\nCollections.max(list);                  // 9\nCollections.min(list);                  // 1\nCollections.frequency(list, 5);        // Count occurrences\nCollections.unmodifiableList(list);    // Read-only wrapper\n\n// Thread-safe wrappers\nList<String> syncList = Collections.synchronizedList(new ArrayList<>());\nMap<String, Integer> syncMap = Collections.synchronizedMap(new HashMap<>());"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.4 Iterator"
            },
            {
              "type": "code",
              "language": "java",
              "code": "List<String> names = new ArrayList<>(List.of(\"Alice\", \"Bob\", \"Charlie\"));\n\n// Iterator — safely remove during iteration\nIterator<String> it = names.iterator();\nwhile (it.hasNext()) {\n    String name = it.next();\n    if (name.startsWith(\"B\")) {\n        it.remove();   // Safe removal!\n    }\n}\n\n// ❌ Don't do this — ConcurrentModificationException!\n// for (String name : names) {\n//     if (name.startsWith(\"B\")) names.remove(name);\n// }"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a generic `Stack<T>` class with push, pop, peek",
                "Sort a list of objects using Comparator with multiple criteria",
                "Write a generic method that finds the maximum element in a list",
                "Demonstrate wildcard usage with a print method"
              ]
            },
            {
              "type": "quiz",
              "question": "In Generics And Collections, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Generics And Collections.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Generics And Collections is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "functional-and-streams",
          "title": "Functional And Streams",
          "description": "Master Functional And Streams with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Lambda expressions",
                "Functional interfaces (Predicate, Function, Consumer, Supplier)",
                "Method references",
                "Stream API (filter, map, reduce, collect)",
                "Optional"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Lambda Expressions"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Lambda = anonymous function (Java 8+)\n// Syntax: (parameters) -> expression  OR  (parameters) -> { statements }\n\n// Without lambda\nComparator<String> comp = new Comparator<String>() {\n    @Override public int compare(String a, String b) {\n        return a.length() - b.length();\n    }\n};\n\n// With lambda — much cleaner!\nComparator<String> comp2 = (a, b) -> a.length() - b.length();\n\n// Single parameter — parentheses optional\nFunction<String, Integer> len = s -> s.length();\n\n// No parameters\nRunnable task = () -> System.out.println(\"Running!\");\n\n// Multiple statements\nComparator<String> comp3 = (a, b) -> {\n    System.out.println(\"Comparing \" + a + \" and \" + b);\n    return a.compareTo(b);\n};"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Functional Interfaces"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.function.*;\n\n// Predicate<T> — takes T, returns boolean (for filtering)\nPredicate<Integer> isEven = n -> n % 2 == 0;\nPredicate<String> isLong = s -> s.length() > 5;\nisEven.test(4);       // true\nisEven.and(n -> n > 0).test(4);   // true (chaining)\nisEven.negate().test(4);           // false\n\n// Function<T, R> — takes T, returns R (for transforming)\nFunction<String, Integer> toLength = String::length;\nFunction<Integer, String> toString = n -> \"Number: \" + n;\ntoLength.apply(\"Hello\");          // 5\ntoLength.andThen(toString).apply(\"Hello\");  // \"Number: 5\" (chaining)\n\n// Consumer<T> — takes T, returns void (for side effects)\nConsumer<String> printer = System.out::println;\nConsumer<String> shouter = s -> System.out.println(s.toUpperCase());\nprinter.andThen(shouter).accept(\"hello\");   // \"hello\" then \"HELLO\"\n\n// Supplier<T> — takes nothing, returns T (for creating)\nSupplier<List<String>> listFactory = ArrayList::new;\nList<String> newList = listFactory.get();\n\n// BiFunction<T, U, R> — takes T and U, returns R\nBiFunction<Integer, Integer, Integer> add = Integer::sum;\nadd.apply(3, 5);   // 8"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.3 Method References"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Instead of lambda, reference an existing method\n// Type 1: Static method\nFunction<String, Integer> parse = Integer::parseInt;      // s -> Integer.parseInt(s)\n\n// Type 2: Instance method on parameter\nFunction<String, String> upper = String::toUpperCase;     // s -> s.toUpperCase()\n\n// Type 3: Instance method on specific object\nString prefix = \"Hello \";\nFunction<String, String> greet = prefix::concat;          // s -> prefix.concat(s)\n\n// Type 4: Constructor\nSupplier<ArrayList<String>> newList = ArrayList::new;      // () -> new ArrayList<>()\nFunction<String, Dog> dogFactory = Dog::new;               // name -> new Dog(name)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.4 Stream API"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.stream.*;\n\nList<String> names = List.of(\"Alice\", \"Bob\", \"Charlie\", \"Dave\", \"Eve\");\n\n// Filter → Map → Collect\nList<String> result = names.stream()\n    .filter(n -> n.length() > 3)           // [\"Alice\", \"Charlie\", \"Dave\"]\n    .map(String::toUpperCase)              // [\"ALICE\", \"CHARLIE\", \"DAVE\"]\n    .sorted()                               // [\"ALICE\", \"CHARLIE\", \"DAVE\"]\n    .collect(Collectors.toList());\n\n// Common operations\nnames.stream().count();                                    // 5\nnames.stream().findFirst();                                // Optional[\"Alice\"]\nnames.stream().anyMatch(n -> n.startsWith(\"A\"));          // true\nnames.stream().allMatch(n -> n.length() > 2);             // true\nnames.stream().noneMatch(n -> n.isEmpty());               // true\nnames.stream().distinct().toList();                        // Remove duplicates\nnames.stream().limit(3).toList();                          // First 3\nnames.stream().skip(2).toList();                           // Skip first 2\n\n// Numeric streams\nList<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\nint sum = numbers.stream().mapToInt(Integer::intValue).sum();   // 55\ndouble avg = numbers.stream().mapToInt(Integer::intValue).average().orElse(0);\nint max = numbers.stream().mapToInt(Integer::intValue).max().orElse(0);\n\n// Reduce\nint product = numbers.stream().reduce(1, (a, b) -> a * b);   // 3628800\nString joined = names.stream().collect(Collectors.joining(\", \"));  // \"Alice, Bob, ...\""
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Collectors"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// GroupBy\nMap<Integer, List<String>> byLength = names.stream()\n    .collect(Collectors.groupingBy(String::length));\n// {3=[Bob, Eve], 4=[Dave], 5=[Alice], 7=[Charlie]}\n\n// Counting\nMap<Integer, Long> countByLength = names.stream()\n    .collect(Collectors.groupingBy(String::length, Collectors.counting()));\n\n// Partitioning (split into two groups)\nMap<Boolean, List<String>> partitioned = names.stream()\n    .collect(Collectors.partitioningBy(n -> n.length() > 3));\n// {false=[Bob, Eve], true=[Alice, Charlie, Dave]}\n\n// ToMap\nMap<String, Integer> nameToLength = names.stream()\n    .collect(Collectors.toMap(n -> n, String::length));\n\n// Statistics\nIntSummaryStatistics stats = numbers.stream()\n    .mapToInt(Integer::intValue)\n    .summaryStatistics();\nSystem.out.printf(\"Count: %d, Sum: %d, Avg: %.1f, Min: %d, Max: %d%n\",\n    stats.getCount(), stats.getSum(), stats.getAverage(), stats.getMin(), stats.getMax());"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.5 Optional"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.Optional;\n\n// Optional = container that may or may not contain a value (avoids null!)\nOptional<String> name = Optional.of(\"Aravind\");\nOptional<String> empty = Optional.empty();\nOptional<String> maybe = Optional.ofNullable(possiblyNull);\n\n// Access\nname.isPresent();                    // true\nname.isEmpty();                      // false (Java 11+)\nname.get();                          // \"Aravind\" (throws if empty!)\n\n// Safe access\nname.orElse(\"Unknown\");             // \"Aravind\" (or default if empty)\nname.orElseGet(() -> \"Computed\");   // Lazy default\nname.orElseThrow(() -> new RuntimeException(\"Not found\"));\n\n// Transform\nOptional<String> upper = name.map(String::toUpperCase);     // Optional[\"ARAVIND\"]\nOptional<Integer> length = name.map(String::length);        // Optional[7]\n\n// Chain\nOptional<String> result = name\n    .filter(n -> n.length() > 5)\n    .map(String::toUpperCase);\n\n// ifPresent\nname.ifPresent(System.out::println);          // Prints if value exists\nname.ifPresentOrElse(                         // Java 9+\n    System.out::println,\n    () -> System.out.println(\"Empty!\")\n);"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Use streams to find the 3 most common words in a text",
                "Group a list of employees by department and calculate average salary per dept",
                "Rewrite a for-loop based search using Optional and streams",
                "Chain map, filter, and reduce to process a list of orders"
              ]
            },
            {
              "type": "quiz",
              "question": "In Functional And Streams, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Functional And Streams."
              ],
              "answer": 3,
              "explanation": "Functional And Streams is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "concurrency",
          "title": "Concurrency",
          "description": "Master Concurrency with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Threads and Runnable",
                "ExecutorService and thread pools",
                "CompletableFuture (async)",
                "Synchronization and thread safety",
                "Concurrent collections"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 Creating Threads"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Method 1: Extend Thread\nclass MyThread extends Thread {\n    @Override\n    public void run() {\n        System.out.println(\"Running on: \" + Thread.currentThread().getName());\n    }\n}\nnew MyThread().start();\n\n// Method 2: Implement Runnable (preferred — allows extending other classes)\nRunnable task = () -> System.out.println(\"Running on: \" + Thread.currentThread().getName());\nnew Thread(task).start();\n\n// Thread.sleep\nThread.sleep(1000);   // Pause for 1 second (throws InterruptedException)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 ExecutorService (Thread Pools)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.concurrent.*;\n\n// Create thread pool (don't create raw threads in production!)\nExecutorService executor = Executors.newFixedThreadPool(4);   // 4 threads\n\n// Submit tasks\nexecutor.submit(() -> System.out.println(\"Task 1 on \" + Thread.currentThread().getName()));\nexecutor.submit(() -> System.out.println(\"Task 2 on \" + Thread.currentThread().getName()));\n\n// Submit with return value\nFuture<String> future = executor.submit(() -> {\n    Thread.sleep(1000);\n    return \"Result!\";\n});\nString result = future.get();   // Blocks until done\nString result2 = future.get(5, TimeUnit.SECONDS);   // Timeout\n\n// Shutdown (important!)\nexecutor.shutdown();                        // Finish existing tasks, reject new\nexecutor.shutdownNow();                     // Interrupt all tasks\nexecutor.awaitTermination(10, TimeUnit.SECONDS);\n\n// Virtual threads (Java 21+ — Project Loom)\ntry (var executor2 = Executors.newVirtualThreadPerTaskExecutor()) {\n    for (int i = 0; i < 10000; i++) {\n        executor2.submit(() -> {\n            Thread.sleep(1000);\n            return \"done\";\n        });\n    }\n}   // Can handle millions of virtual threads!"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.3 CompletableFuture (Async)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.concurrent.CompletableFuture;\n\n// Async computation\nCompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n    // Runs on ForkJoinPool (background thread)\n    return fetchFromApi();\n});\n\n// Chain operations (non-blocking!)\nCompletableFuture<Integer> result = future\n    .thenApply(String::toUpperCase)       // Transform result\n    .thenApply(String::length);           // Transform again\n\n// Side effect\nfuture.thenAccept(System.out::println);   // Consume result (no return)\n\n// Combine two futures\nCompletableFuture<String> user = CompletableFuture.supplyAsync(() -> \"Aravind\");\nCompletableFuture<Integer> age = CompletableFuture.supplyAsync(() -> 25);\n\nCompletableFuture<String> combined = user.thenCombine(age,\n    (u, a) -> u + \" is \" + a + \" years old\");\n\n// Wait for ALL\nCompletableFuture<Void> all = CompletableFuture.allOf(future1, future2, future3);\nall.join();   // Block until all complete\n\n// Wait for ANY (first to complete)\nCompletableFuture<Object> any = CompletableFuture.anyOf(future1, future2, future3);\n\n// Error handling\nfuture\n    .thenApply(this::process)\n    .exceptionally(ex -> {\n        System.out.println(\"Error: \" + ex.getMessage());\n        return \"default\";\n    });"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.4 Synchronization"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// ❌ Race condition — not thread-safe\nint counter = 0;\n// Multiple threads doing counter++ = unpredictable!\n\n// ✅ Method 1: synchronized keyword\nclass SafeCounter {\n    private int count = 0;\n\n    public synchronized void increment() { count++; }\n    public synchronized int getCount() { return count; }\n}\n\n// ✅ Method 2: AtomicInteger (lock-free, faster)\nimport java.util.concurrent.atomic.AtomicInteger;\nAtomicInteger atomicCounter = new AtomicInteger(0);\natomicCounter.incrementAndGet();   // Thread-safe\n\n// ✅ Method 3: ReentrantLock (more control)\nimport java.util.concurrent.locks.ReentrantLock;\nReentrantLock lock = new ReentrantLock();\nlock.lock();\ntry {\n    // Critical section\n} finally {\n    lock.unlock();   // Always unlock in finally!\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.5 Concurrent Collections"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.util.concurrent.*;\n\n// Thread-safe collections (no external synchronization needed)\nConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();\nCopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();\nBlockingQueue<String> queue = new LinkedBlockingQueue<>();\nConcurrentLinkedQueue<String> lockFreeQueue = new ConcurrentLinkedQueue<>();\n\n// ConcurrentHashMap — thread-safe operations\nmap.putIfAbsent(\"key\", 0);\nmap.compute(\"key\", (k, v) -> v == null ? 1 : v + 1);   // Atomic compute\nmap.merge(\"key\", 1, Integer::sum);                       // Atomic merge"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Process 10 API calls concurrently using CompletableFuture.allOf",
                "Implement a thread-safe counter using AtomicInteger",
                "Use ExecutorService to process a list of tasks in a thread pool",
                "Compare Virtual Threads vs Platform Threads performance (Java 21+)"
              ]
            },
            {
              "type": "quiz",
              "question": "In Concurrency, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Concurrency.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Concurrency is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "file-io",
          "title": "File IO",
          "description": "Master File IO with hands-on examples, architectural diagrams, and structured exercises.",
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
                "NIO.2 file operations (Path, Files)",
                "Reading/writing files",
                "JSON with Jackson/Gson",
                "Logging (SLF4J + Logback)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Path & Files (NIO.2)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.nio.file.*;\n\n// Path — represents a file/directory location\nPath path = Path.of(\"data\", \"output\", \"file.txt\");  // data/output/file.txt\nPath absolute = path.toAbsolutePath();\nPath parent = path.getParent();            // data/output\nString fileName = path.getFileName().toString();  // file.txt\n\n// Files — all file operations\nboolean exists = Files.exists(path);\nboolean isDir = Files.isDirectory(path);\nlong size = Files.size(path);\n\n// Create\nFiles.createFile(Path.of(\"new.txt\"));\nFiles.createDirectories(Path.of(\"a/b/c\"));   // Creates all parent dirs\n\n// Copy, Move, Delete\nFiles.copy(source, dest, StandardCopyOption.REPLACE_EXISTING);\nFiles.move(source, dest, StandardCopyOption.ATOMIC_MOVE);\nFiles.delete(path);\nFiles.deleteIfExists(path);\n\n// List directory\ntry (var stream = Files.list(Path.of(\".\"))) {\n    stream.forEach(System.out::println);\n}\n\n// Walk directory tree (recursive)\ntry (var stream = Files.walk(Path.of(\"src\"), 5)) {\n    stream.filter(p -> p.toString().endsWith(\".java\"))\n          .forEach(System.out::println);\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 Reading & Writing Files"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Write text\nFiles.writeString(Path.of(\"output.txt\"), \"Hello, World!\");\nFiles.write(Path.of(\"lines.txt\"), List.of(\"Line 1\", \"Line 2\", \"Line 3\"));\n\n// Append\nFiles.writeString(Path.of(\"log.txt\"), \"New entry\\n\", StandardOpenOption.APPEND);\n\n// Read text\nString content = Files.readString(Path.of(\"output.txt\"));\nList<String> lines = Files.readAllLines(Path.of(\"lines.txt\"));\n\n// Stream lines (memory efficient for large files)\ntry (var stream = Files.lines(Path.of(\"large.txt\"))) {\n    stream.filter(line -> line.contains(\"ERROR\"))\n          .forEach(System.out::println);\n}\n\n// BufferedReader/Writer (for complex operations)\ntry (var reader = Files.newBufferedReader(Path.of(\"input.txt\"));\n     var writer = Files.newBufferedWriter(Path.of(\"output.txt\"))) {\n    String line;\n    while ((line = reader.readLine()) != null) {\n        writer.write(line.toUpperCase());\n        writer.newLine();\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.3 JSON with Jackson"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Jackson is the most popular JSON library in Java\n// Maven: com.fasterxml.jackson.core:jackson-databind\n\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport com.fasterxml.jackson.annotation.*;\n\npublic class User {\n    private String name;\n    private int age;\n\n    @JsonIgnore                      // Won't be serialized\n    private String password;\n\n    @JsonProperty(\"email_address\")   // Custom JSON key\n    private String email;\n\n    // Getters/setters required for Jackson\n}\n\nObjectMapper mapper = new ObjectMapper();\n\n// Serialize (Object → JSON)\nUser user = new User(\"Aravind\", 25, \"a@test.com\");\nString json = mapper.writeValueAsString(user);\n// {\"name\":\"Aravind\",\"age\":25,\"email_address\":\"a@test.com\"}\n\n// Pretty print\nString pretty = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(user);\n\n// Deserialize (JSON → Object)\nString jsonStr = \"\"\"\n    {\"name\":\"Aravind\",\"age\":25,\"email_address\":\"a@test.com\"}\n    \"\"\";\nUser parsed = mapper.readValue(jsonStr, User.class);\n\n// List\nList<User> users = mapper.readValue(jsonArray,\n    mapper.getTypeFactory().constructCollectionType(List.class, User.class));\n\n// File I/O\nmapper.writeValue(new File(\"user.json\"), user);\nUser fromFile = mapper.readValue(new File(\"user.json\"), User.class);\n\n// Configure mapper\nmapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.4 Logging (SLF4J + Logback)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// SLF4J = logging API, Logback = implementation\n// Maven: org.slf4j:slf4j-api + ch.qos.logback:logback-classic\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\npublic class UserService {\n    private static final Logger log = LoggerFactory.getLogger(UserService.class);\n\n    public User findById(int id) {\n        log.info(\"Finding user with id={}\", id);             // Info\n        log.debug(\"Query: SELECT * FROM users WHERE id={}\", id); // Debug\n        log.warn(\"User {} not found, returning default\", id);    // Warning\n        log.error(\"Database connection failed\", exception);      // Error\n\n        // Parameterized logging (avoid string concatenation)\n        // ✅ log.info(\"User: {}\", name);\n        // ❌ log.info(\"User: \" + name);   // Concatenates even if level disabled\n    }\n}\n\n// Log levels: TRACE < DEBUG < INFO < WARN < ERROR"
            },
            {
              "type": "code",
              "language": "xml",
              "code": "<!-- logback.xml (in src/main/resources) -->\n<configuration>\n    <appender name=\"CONSOLE\" class=\"ch.qos.logback.core.ConsoleAppender\">\n        <encoder>\n            <pattern>%d{HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <appender name=\"FILE\" class=\"ch.qos.logback.core.rolling.RollingFileAppender\">\n        <file>logs/app.log</file>\n        <rollingPolicy class=\"ch.qos.logback.core.rolling.TimeBasedRollingPolicy\">\n            <fileNamePattern>logs/app-%d{yyyy-MM-dd}.log</fileNamePattern>\n            <maxHistory>30</maxHistory>\n        </rollingPolicy>\n        <encoder>\n            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>\n        </encoder>\n    </appender>\n\n    <root level=\"INFO\">\n        <appender-ref ref=\"CONSOLE\" />\n        <appender-ref ref=\"FILE\" />\n    </root>\n</configuration>"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Read a CSV file, parse it, and write results as JSON",
                "Use Files.walk to find all files larger than 1MB recursively",
                "Serialize/deserialize a list of products with Jackson",
                "Set up SLF4J logging with console + file appenders"
              ]
            },
            {
              "type": "quiz",
              "question": "In File IO, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of File IO.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "File IO is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "spring-boot-basics",
          "title": "Spring Boot Basics",
          "description": "Master Spring Boot Basics with hands-on examples, architectural diagrams, and structured exercises.",
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
                "What is Spring Boot",
                "Project structure and annotations",
                "Configuration and profiles",
                "Lombok (eliminate boilerplate)",
                "Custom annotations"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.1 What is Spring Boot?"
            },
            {
              "type": "paragraph",
              "text": "**Spring Boot** is Java's most popular framework for building production-ready web applications and REST APIs. It's built on top of the Spring Framework and provides auto-configuration so you can focus on business logic."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create project at https://start.spring.io/\n# Or with CLI:\ncurl https://start.spring.io/starter.zip \\\n  -d dependencies=web,jpa,h2,validation \\\n  -d javaVersion=21 \\\n  -d bootVersion=3.2.0 \\\n  -d name=myapi \\\n  -o myapi.zip"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.2 Project Structure"
            },
            {
              "type": "code",
              "language": "text",
              "code": "myapi/\n├── src/\n│   ├── main/\n│   │   ├── java/com/example/myapi/\n│   │   │   ├── MyApiApplication.java       ← Entry point\n│   │   │   ├── controller/                 ← REST controllers\n│   │   │   ├── service/                    ← Business logic\n│   │   │   ├── repository/                 ← Data access\n│   │   │   ├── model/                      ← Entities / domain\n│   │   │   ├── dto/                        ← Data transfer objects\n│   │   │   ├── config/                     ← Configuration classes\n│   │   │   └── exception/                  ← Custom exceptions\n│   │   └── resources/\n│   │       ├── application.properties      ← Configuration\n│   │       ├── application-dev.properties  ← Dev profile\n│   │       └── static/                     ← Static files\n│   └── test/\n│       └── java/com/example/myapi/         ← Tests\n├── pom.xml                                  ← Maven dependencies\n└── build.gradle                             ← Gradle (alternative)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.3 Entry Point"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@SpringBootApplication   // = @Configuration + @EnableAutoConfiguration + @ComponentScan\npublic class MyApiApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(MyApiApplication.class, args);\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.4 Key Annotations"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Stereotype annotations (auto-detected by component scan)\n@Component          // Generic Spring-managed bean\n@Service            // Business logic layer\n@Repository         // Data access layer (adds exception translation)\n@Controller         // MVC controller (returns views)\n@RestController     // REST controller (returns JSON) = @Controller + @ResponseBody\n@Configuration      // Configuration class (defines beans)\n\n// Dependency Injection\n@Autowired          // Inject dependency (prefer constructor injection!)\n\n// Example\n@Service\npublic class UserService {\n    private final UserRepository userRepo;\n\n    // Constructor injection (preferred — no @Autowired needed with single constructor)\n    public UserService(UserRepository userRepo) {\n        this.userRepo = userRepo;\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.5 Configuration"
            },
            {
              "type": "code",
              "language": "properties",
              "code": "# application.properties\nserver.port=8080\nspring.application.name=myapi\n\n# Database\nspring.datasource.url=jdbc:h2:mem:testdb\nspring.datasource.driver-class-name=org.h2.Driver\nspring.jpa.hibernate.ddl-auto=update\nspring.jpa.show-sql=true\n\n# Logging\nlogging.level.root=INFO\nlogging.level.com.example.myapi=DEBUG\nlogging.file.name=logs/app.log\n\n# Custom properties\napp.api-key=my-secret-key\napp.max-page-size=50"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# application.yml (alternative format)\nserver:\n  port: 8080\n\nspring:\n  datasource:\n    url: jdbc:h2:mem:testdb\n  jpa:\n    hibernate:\n      ddl-auto: update\n\napp:\n  api-key: my-secret-key"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Reading Custom Properties"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Component\npublic class AppConfig {\n    @Value(\"${app.api-key}\")\n    private String apiKey;\n\n    @Value(\"${app.max-page-size:25}\")   // Default value\n    private int maxPageSize;\n}\n\n// Or type-safe configuration (recommended)\n@ConfigurationProperties(prefix = \"app\")\npublic record AppProperties(String apiKey, int maxPageSize) {}\n\n// Enable in main class\n@EnableConfigurationProperties(AppProperties.class)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.6 Profiles"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Run with specific profile\njava -jar myapi.jar --spring.profiles.active=dev\n# Or: SPRING_PROFILES_ACTIVE=prod java -jar myapi.jar"
            },
            {
              "type": "code",
              "language": "properties",
              "code": "# application-dev.properties (loaded when profile=dev)\nspring.datasource.url=jdbc:h2:mem:devdb\nlogging.level.root=DEBUG\n\n# application-prod.properties\nspring.datasource.url=jdbc:postgresql://prod-db:5432/mydb\nlogging.level.root=WARN"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Profile(\"dev\")\n@Configuration\npublic class DevConfig {\n    @Bean\n    public DataSource dataSource() { /* dev database */ }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.7 Lombok — Eliminate Boilerplate"
            },
            {
              "type": "code",
              "language": "xml",
              "code": "<!-- pom.xml -->\n<dependency>\n    <groupId>org.projectlombok</groupId>\n    <artifactId>lombok</artifactId>\n    <optional>true</optional>\n</dependency>"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import lombok.*;\n\n// Without Lombok — 80 lines of boilerplate\n// With Lombok:\n@Data                    // @Getter + @Setter + @ToString + @EqualsAndHashCode + @RequiredArgsConstructor\n@NoArgsConstructor\n@AllArgsConstructor\n@Builder\npublic class User {\n    private Long id;\n    private String name;\n    private String email;\n}\n\n// Usage\nUser user = User.builder()\n    .id(1L).name(\"Aravind\").email(\"a@test.com\")\n    .build();\n\n// Common Lombok annotations:\n// @Getter / @Setter          → Generate getters/setters\n// @ToString                  → Generate toString()\n// @EqualsAndHashCode         → Generate equals() and hashCode()\n// @NoArgsConstructor         → Empty constructor\n// @AllArgsConstructor        → Constructor with all fields\n// @RequiredArgsConstructor   → Constructor with final fields (great for DI!)\n// @Builder                   → Builder pattern\n// @Slf4j                     → Logger: private static final Logger log = ...\n// @Value                     → Immutable class (all fields final + private)\n\n@Slf4j        // Adds: private static final Logger log = LoggerFactory.getLogger(...)\n@Service\n@RequiredArgsConstructor   // Generates constructor for final fields (DI!)\npublic class UserService {\n    private final UserRepository userRepo;   // Auto-injected!\n\n    public User findById(Long id) {\n        log.info(\"Finding user {}\", id);     // log is auto-generated by @Slf4j\n        return userRepo.findById(id).orElseThrow();\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.8 Custom Annotations"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import java.lang.annotation.*;\n\n// Define a custom annotation\n@Target(ElementType.METHOD)         // Where: METHOD, TYPE, FIELD, PARAMETER\n@Retention(RetentionPolicy.RUNTIME) // When: RUNTIME (available via reflection), SOURCE, CLASS\n@Documented                         // Include in Javadoc\npublic @interface RateLimit {\n    int maxRequests() default 100;\n    int windowSeconds() default 60;\n}\n\n// Use it\n@RestController\npublic class ApiController {\n\n    @RateLimit(maxRequests = 10, windowSeconds = 30)\n    @GetMapping(\"/search\")\n    public List<Result> search(@RequestParam String q) { ... }\n}\n\n// Process with AOP (see Module 15)\n@Aspect @Component\npublic class RateLimitAspect {\n    @Around(\"@annotation(rateLimit)\")\n    public Object enforce(ProceedingJoinPoint pjp, RateLimit rateLimit) throws Throwable {\n        // Check rate limit using rateLimit.maxRequests() and rateLimit.windowSeconds()\n        return pjp.proceed();\n    }\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a Spring Boot project with Spring Initializr",
                "Configure application properties with custom values and read them",
                "Refactor a POJO to use Lombok annotations",
                "Create a custom `@Timed` annotation and process it with AOP"
              ]
            },
            {
              "type": "quiz",
              "question": "In Spring Boot Basics, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Spring Boot Basics.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Spring Boot Basics is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "rest-api",
          "title": "REST API",
          "description": "Master REST API with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Building REST controllers",
                "DTOs and validation",
                "Exception handling",
                "Pagination and sorting",
                "Swagger/OpenAPI"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.1 REST Controller"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@RestController\n@RequestMapping(\"/api/users\")\npublic class UserController {\n    private final UserService userService;\n\n    public UserController(UserService userService) {\n        this.userService = userService;\n    }\n\n    // GET /api/users\n    @GetMapping\n    public ResponseEntity<List<UserDto>> getAll() {\n        return ResponseEntity.ok(userService.getAll());\n    }\n\n    // GET /api/users/1\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<UserDto> getById(@PathVariable Long id) {\n        return userService.getById(id)\n            .map(ResponseEntity::ok)\n            .orElse(ResponseEntity.notFound().build());\n    }\n\n    // POST /api/users\n    @PostMapping\n    public ResponseEntity<UserDto> create(@Valid @RequestBody CreateUserDto dto) {\n        UserDto created = userService.create(dto);\n        URI location = URI.create(\"/api/users/\" + created.id());\n        return ResponseEntity.created(location).body(created);\n    }\n\n    // PUT /api/users/1\n    @PutMapping(\"/{id}\")\n    public ResponseEntity<UserDto> update(@PathVariable Long id, @Valid @RequestBody UpdateUserDto dto) {\n        return ResponseEntity.ok(userService.update(id, dto));\n    }\n\n    // DELETE /api/users/1\n    @DeleteMapping(\"/{id}\")\n    public ResponseEntity<Void> delete(@PathVariable Long id) {\n        userService.delete(id);\n        return ResponseEntity.noContent().build();\n    }\n\n    // GET /api/users/search?name=Aravind&minAge=18\n    @GetMapping(\"/search\")\n    public ResponseEntity<List<UserDto>> search(\n            @RequestParam(required = false) String name,\n            @RequestParam(defaultValue = \"0\") int minAge) {\n        return ResponseEntity.ok(userService.search(name, minAge));\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.2 DTOs and Validation"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Jakarta Validation (spring-boot-starter-validation)\n\npublic record CreateUserDto(\n    @NotBlank(message = \"Name is required\")\n    @Size(min = 2, max = 100)\n    String name,\n\n    @NotBlank @Email(message = \"Invalid email\")\n    String email,\n\n    @Min(18) @Max(120)\n    int age,\n\n    @Pattern(regexp = \"^\\\\d{10}$\", message = \"Phone must be 10 digits\")\n    String phone\n) {}\n\npublic record UpdateUserDto(\n    @NotBlank String name,\n    @NotBlank @Email String email\n) {}\n\npublic record UserDto(Long id, String name, String email, int age) {}\n\n// Mapper (manual or use MapStruct)\npublic static UserDto toDto(User user) {\n    return new UserDto(user.getId(), user.getName(), user.getEmail(), user.getAge());\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.3 Global Exception Handling"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    @ExceptionHandler(ResourceNotFoundException.class)\n    public ResponseEntity<ErrorResponse> handleNotFound(ResourceNotFoundException ex) {\n        var error = new ErrorResponse(404, ex.getMessage(), LocalDateTime.now());\n        return ResponseEntity.status(404).body(error);\n    }\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {\n        Map<String, String> errors = new HashMap<>();\n        ex.getBindingResult().getFieldErrors()\n            .forEach(e -> errors.put(e.getField(), e.getDefaultMessage()));\n        return ResponseEntity.badRequest().body(errors);\n    }\n\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<ErrorResponse> handleGeneral(Exception ex) {\n        var error = new ErrorResponse(500, \"Internal server error\", LocalDateTime.now());\n        return ResponseEntity.status(500).body(error);\n    }\n}\n\nrecord ErrorResponse(int status, String message, LocalDateTime timestamp) {}\n\n// Custom exception\npublic class ResourceNotFoundException extends RuntimeException {\n    public ResourceNotFoundException(String resource, Long id) {\n        super(resource + \" not found with id: \" + id);\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.4 Pagination & Sorting"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Spring Data provides Pageable out of the box\n@GetMapping\npublic ResponseEntity<Page<UserDto>> getAll(\n        @RequestParam(defaultValue = \"0\") int page,\n        @RequestParam(defaultValue = \"10\") int size,\n        @RequestParam(defaultValue = \"name\") String sortBy) {\n\n    Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));\n    Page<UserDto> result = userService.getAll(pageable);\n    return ResponseEntity.ok(result);\n}\n\n// GET /api/users?page=0&size=10&sortBy=name\n// Response includes: content, totalElements, totalPages, number, size"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.5 Swagger / OpenAPI"
            },
            {
              "type": "code",
              "language": "xml",
              "code": "<!-- pom.xml -->\n<dependency>\n    <groupId>org.springdoc</groupId>\n    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>\n    <version>2.3.0</version>\n</dependency>"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Access at: http://localhost:8080/swagger-ui.html\n// Annotate controllers for better docs:\n@Operation(summary = \"Get user by ID\")\n@ApiResponse(responseCode = \"200\", description = \"User found\")\n@ApiResponse(responseCode = \"404\", description = \"User not found\")\n@GetMapping(\"/{id}\")\npublic ResponseEntity<UserDto> getById(@PathVariable Long id) { ... }"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build complete CRUD API for a Product resource",
                "Add validation with custom error messages",
                "Implement global exception handling",
                "Add pagination, sorting, and search"
              ]
            },
            {
              "type": "quiz",
              "question": "In REST API, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of REST API."
              ],
              "answer": 3,
              "explanation": "REST API is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "spring-data-jpa",
          "title": "Spring Data JPA",
          "description": "Master Spring Data JPA with hands-on examples, architectural diagrams, and structured exercises.",
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
                "JPA entities and annotations",
                "Spring Data repositories",
                "CRUD and custom queries",
                "Relationships (1:1, 1:N, N:N)",
                "Migrations with Flyway"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.1 JPA Entity"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import jakarta.persistence.*;\n\n@Entity\n@Table(name = \"users\")\npublic class User {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false, length = 100)\n    private String name;\n\n    @Column(nullable = false, unique = true)\n    private String email;\n\n    @Column(name = \"created_at\")\n    private LocalDateTime createdAt = LocalDateTime.now();\n\n    @Enumerated(EnumType.STRING)   // Store enum as string, not ordinal\n    private Role role = Role.USER;\n\n    // One-to-Many relationship\n    @OneToMany(mappedBy = \"author\", cascade = CascadeType.ALL, fetch = FetchType.LAZY)\n    private List<Post> posts = new ArrayList<>();\n\n    // Constructors, getters, setters...\n    protected User() {}   // JPA requires no-arg constructor\n\n    public User(String name, String email) {\n        this.name = name;\n        this.email = email;\n    }\n}\n\n@Entity\n@Table(name = \"posts\")\npublic class Post {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @Column(nullable = false)\n    private String title;\n\n    @Lob   // Large text\n    private String content;\n\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"author_id\", nullable = false)\n    private User author;\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.2 Spring Data Repository"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// JpaRepository provides ALL CRUD operations automatically!\npublic interface UserRepository extends JpaRepository<User, Long> {\n\n    // Derived query methods (Spring generates SQL from method name!)\n    Optional<User> findByEmail(String email);\n    List<User> findByNameContainingIgnoreCase(String name);\n    List<User> findByAgeGreaterThanEqual(int age);\n    List<User> findByRoleOrderByNameAsc(Role role);\n    boolean existsByEmail(String email);\n    long countByRole(Role role);\n\n    // Custom JPQL query\n    @Query(\"SELECT u FROM User u WHERE u.name LIKE %:keyword% OR u.email LIKE %:keyword%\")\n    List<User> search(@Param(\"keyword\") String keyword);\n\n    // Native SQL query\n    @Query(value = \"SELECT * FROM users WHERE created_at > :date\", nativeQuery = true)\n    List<User> findRecentUsers(@Param(\"date\") LocalDateTime date);\n\n    // Pagination\n    Page<User> findByRole(Role role, Pageable pageable);\n}\n\n// JpaRepository gives you for FREE:\n// save(), findById(), findAll(), deleteById(), count(), existsById()\n// + pagination and sorting"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.3 Service Layer"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Service\n@Transactional\npublic class UserService {\n    private final UserRepository userRepo;\n\n    public UserService(UserRepository userRepo) {\n        this.userRepo = userRepo;\n    }\n\n    public List<UserDto> getAll() {\n        return userRepo.findAll().stream()\n            .map(this::toDto)\n            .toList();\n    }\n\n    public Optional<UserDto> getById(Long id) {\n        return userRepo.findById(id).map(this::toDto);\n    }\n\n    public UserDto create(CreateUserDto dto) {\n        if (userRepo.existsByEmail(dto.email())) {\n            throw new DuplicateResourceException(\"Email already exists\");\n        }\n        User user = new User(dto.name(), dto.email());\n        return toDto(userRepo.save(user));\n    }\n\n    public UserDto update(Long id, UpdateUserDto dto) {\n        User user = userRepo.findById(id)\n            .orElseThrow(() -> new ResourceNotFoundException(\"User\", id));\n        user.setName(dto.name());\n        user.setEmail(dto.email());\n        return toDto(userRepo.save(user));\n    }\n\n    public void delete(Long id) {\n        if (!userRepo.existsById(id)) {\n            throw new ResourceNotFoundException(\"User\", id);\n        }\n        userRepo.deleteById(id);\n    }\n\n    private UserDto toDto(User user) {\n        return new UserDto(user.getId(), user.getName(), user.getEmail(), user.getAge());\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.4 Relationships"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// One-to-Many (User → Posts)\n// User side:\n@OneToMany(mappedBy = \"author\", cascade = CascadeType.ALL)\nprivate List<Post> posts;\n\n// Post side:\n@ManyToOne(fetch = FetchType.LAZY)\n@JoinColumn(name = \"author_id\")\nprivate User author;\n\n// Many-to-Many (Student ↔ Course)\n@Entity\npublic class Student {\n    @ManyToMany\n    @JoinTable(\n        name = \"student_courses\",\n        joinColumns = @JoinColumn(name = \"student_id\"),\n        inverseJoinColumns = @JoinColumn(name = \"course_id\")\n    )\n    private Set<Course> courses = new HashSet<>();\n}\n\n@Entity\npublic class Course {\n    @ManyToMany(mappedBy = \"courses\")\n    private Set<Student> students = new HashSet<>();\n}\n\n// One-to-One (User ↔ Profile)\n@Entity\npublic class UserProfile {\n    @OneToOne\n    @JoinColumn(name = \"user_id\", unique = true)\n    private User user;\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.5 Flyway Migrations"
            },
            {
              "type": "code",
              "language": "sql",
              "code": "-- src/main/resources/db/migration/V1__create_users.sql\nCREATE TABLE users (\n    id BIGSERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(200) NOT NULL UNIQUE,\n    role VARCHAR(20) DEFAULT 'USER',\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- V2__add_posts.sql\nCREATE TABLE posts (\n    id BIGSERIAL PRIMARY KEY,\n    title VARCHAR(200) NOT NULL,\n    content TEXT,\n    author_id BIGINT REFERENCES users(id) ON DELETE CASCADE\n);"
            },
            {
              "type": "code",
              "language": "properties",
              "code": "# application.properties\nspring.flyway.enabled=true\nspring.jpa.hibernate.ddl-auto=validate   # Validate, don't auto-create"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create User and Post entities with a one-to-many relationship",
                "Write custom queries with @Query and derived method names",
                "Implement full CRUD with service layer and DTOs",
                "Set up Flyway migrations for your schema"
              ]
            },
            {
              "type": "quiz",
              "question": "In Spring Data JPA, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Spring Data JPA.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Spring Data JPA is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "security",
          "title": "Security",
          "description": "Master Security with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Spring Security basics",
                "JWT authentication",
                "Password hashing (BCrypt)",
                "Role-based authorization",
                "CORS configuration"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.1 Spring Security Setup"
            },
            {
              "type": "code",
              "language": "xml",
              "code": "<!-- pom.xml -->\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-api</artifactId>\n    <version>0.12.3</version>\n</dependency>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.2 Security Configuration"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Configuration\n@EnableWebSecurity\npublic class SecurityConfig {\n\n    private final JwtAuthFilter jwtAuthFilter;\n\n    public SecurityConfig(JwtAuthFilter jwtAuthFilter) {\n        this.jwtAuthFilter = jwtAuthFilter;\n    }\n\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        return http\n            .csrf(csrf -> csrf.disable())   // Disable CSRF for REST APIs\n            .sessionManagement(session ->\n                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/api/auth/**\").permitAll()        // Public\n                .requestMatchers(\"/swagger-ui/**\").permitAll()      // Swagger\n                .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\") // Admin only\n                .anyRequest().authenticated()                       // All else → auth\n            )\n            .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)\n            .build();\n    }\n\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder();\n    }\n\n    @Bean\n    public AuthenticationManager authManager(AuthenticationConfiguration config) throws Exception {\n        return config.getAuthenticationManager();\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.3 JWT Service"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Service\npublic class JwtService {\n    @Value(\"${app.jwt.secret}\")\n    private String secret;\n\n    @Value(\"${app.jwt.expiration-ms:86400000}\")   // 24h default\n    private long expirationMs;\n\n    public String generateToken(UserDetails userDetails) {\n        return Jwts.builder()\n            .subject(userDetails.getUsername())\n            .claim(\"roles\", userDetails.getAuthorities().stream()\n                .map(GrantedAuthority::getAuthority).toList())\n            .issuedAt(new Date())\n            .expiration(new Date(System.currentTimeMillis() + expirationMs))\n            .signWith(getSigningKey())\n            .compact();\n    }\n\n    public String extractUsername(String token) {\n        return getClaims(token).getSubject();\n    }\n\n    public boolean isTokenValid(String token, UserDetails userDetails) {\n        String username = extractUsername(token);\n        return username.equals(userDetails.getUsername()) && !isExpired(token);\n    }\n\n    private boolean isExpired(String token) {\n        return getClaims(token).getExpiration().before(new Date());\n    }\n\n    private Claims getClaims(String token) {\n        return Jwts.parser().verifyWith(getSigningKey()).build()\n            .parseSignedClaims(token).getPayload();\n    }\n\n    private SecretKey getSigningKey() {\n        return Keys.hmacShaKeyFor(Decoders.BASE64.decode(secret));\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.4 JWT Auth Filter"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Component\npublic class JwtAuthFilter extends OncePerRequestFilter {\n    private final JwtService jwtService;\n    private final UserDetailsService userDetailsService;\n\n    public JwtAuthFilter(JwtService jwtService, UserDetailsService userDetailsService) {\n        this.jwtService = jwtService;\n        this.userDetailsService = userDetailsService;\n    }\n\n    @Override\n    protected void doFilterInternal(HttpServletRequest request,\n            HttpServletResponse response, FilterChain chain) throws ServletException, IOException {\n\n        String header = request.getHeader(\"Authorization\");\n        if (header == null || !header.startsWith(\"Bearer \")) {\n            chain.doFilter(request, response);\n            return;\n        }\n\n        String token = header.substring(7);\n        String username = jwtService.extractUsername(token);\n\n        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {\n            UserDetails user = userDetailsService.loadUserByUsername(username);\n            if (jwtService.isTokenValid(token, user)) {\n                var authToken = new UsernamePasswordAuthenticationToken(\n                    user, null, user.getAuthorities());\n                SecurityContextHolder.getContext().setAuthentication(authToken);\n            }\n        }\n        chain.doFilter(request, response);\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.5 Auth Controller"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@RestController\n@RequestMapping(\"/api/auth\")\npublic class AuthController {\n    private final AuthenticationManager authManager;\n    private final JwtService jwtService;\n    private final UserService userService;\n\n    @PostMapping(\"/register\")\n    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterDto dto) {\n        UserDto user = userService.register(dto);\n        String token = jwtService.generateToken(/* userDetails */);\n        return ResponseEntity.ok(new AuthResponse(token, user));\n    }\n\n    @PostMapping(\"/login\")\n    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginDto dto) {\n        authManager.authenticate(\n            new UsernamePasswordAuthenticationToken(dto.email(), dto.password()));\n\n        UserDetails user = userDetailsService.loadUserByUsername(dto.email());\n        String token = jwtService.generateToken(user);\n        return ResponseEntity.ok(new AuthResponse(token, toDto(user)));\n    }\n}\n\nrecord LoginDto(@NotBlank @Email String email, @NotBlank String password) {}\nrecord RegisterDto(@NotBlank String name, @NotBlank @Email String email, @NotBlank String password) {}\nrecord AuthResponse(String token, UserDto user) {}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.6 Password Hashing"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Service\npublic class UserService {\n    private final PasswordEncoder passwordEncoder;\n\n    public UserDto register(RegisterDto dto) {\n        User user = new User();\n        user.setName(dto.name());\n        user.setEmail(dto.email());\n        user.setPassword(passwordEncoder.encode(dto.password()));   // Hash!\n        return toDto(userRepo.save(user));\n    }\n}\n// NEVER store plain text passwords!"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.7 CORS"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Configuration\npublic class CorsConfig implements WebMvcConfigurer {\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping(\"/api/**\")\n            .allowedOrigins(\"http://localhost:3000\", \"https://myapp.com\")\n            .allowedMethods(\"GET\", \"POST\", \"PUT\", \"DELETE\")\n            .allowedHeaders(\"*\")\n            .allowCredentials(true);\n    }\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Implement JWT login/register with BCrypt password hashing",
                "Create role-based endpoints (ADMIN, USER)",
                "Add a JWT refresh token mechanism",
                "Configure CORS for a frontend application"
              ]
            },
            {
              "type": "quiz",
              "question": "In Security, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Security.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Security is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "di-and-aop",
          "title": "DI And AOP",
          "description": "Master DI And AOP with hands-on examples, architectural diagrams, and structured exercises.",
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
                "IoC and DI in Spring",
                "Bean scopes",
                "Aspect-Oriented Programming (AOP)",
                "Conditional and profiles"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.1 Dependency Injection"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// ❌ Tight coupling — hard to test\npublic class OrderService {\n    private PaymentGateway gateway = new StripeGateway();   // Hard-coded!\n}\n\n// ✅ Loose coupling with DI\npublic class OrderService {\n    private final PaymentGateway gateway;\n\n    public OrderService(PaymentGateway gateway) {   // Injected!\n        this.gateway = gateway;\n    }\n}\n\n// Constructor injection (PREFERRED — immutable, testable)\n@Service\npublic class UserService {\n    private final UserRepository repo;\n    private final EmailService email;\n\n    public UserService(UserRepository repo, EmailService email) {\n        this.repo = repo;\n        this.email = email;\n    }\n}\n// Spring auto-detects the single constructor and injects dependencies"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.2 Bean Registration"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Method 1: Stereotype annotations (auto-detected by @ComponentScan)\n@Component   // Generic bean\n@Service     // Service layer\n@Repository  // Data layer\n@Controller  // Web layer\n\n// Method 2: @Bean in @Configuration class (for external/complex objects)\n@Configuration\npublic class AppConfig {\n\n    @Bean\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n\n    @Bean\n    @Profile(\"prod\")\n    public PaymentGateway stripeGateway() {\n        return new StripeGateway();\n    }\n\n    @Bean\n    @Profile(\"dev\")\n    public PaymentGateway mockGateway() {\n        return new MockPaymentGateway();\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.3 Bean Scopes"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Component\n@Scope(\"singleton\")    // DEFAULT — one instance for entire app\npublic class CacheService { }\n\n@Component\n@Scope(\"prototype\")    // New instance every time it's injected\npublic class RequestHandler { }\n\n// Web scopes (only in web apps)\n@Scope(\"request\")      // One instance per HTTP request\n@Scope(\"session\")      // One instance per HTTP session\n\n// Comparison:\n// Singleton:  AppStart ──────────────────── AppEnd (one instance)\n// Prototype:  Inject → New | Inject → New | Inject → New\n// Request:    Request1 → A | Request2 → B | Request1 → A (same req)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.4 Aspect-Oriented Programming (AOP)"
            },
            {
              "type": "paragraph",
              "text": "**AOP** lets you add cross-cutting concerns (logging, security, timing, transactions) without modifying business code."
            },
            {
              "type": "code",
              "language": "xml",
              "code": "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-aop</artifactId>\n</dependency>"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Aspect\n@Component\npublic class LoggingAspect {\n    private static final Logger log = LoggerFactory.getLogger(LoggingAspect.class);\n\n    // Run BEFORE any method in service package\n    @Before(\"execution(* com.example.myapi.service.*.*(..))\")\n    public void logBefore(JoinPoint jp) {\n        log.info(\"→ {}.{}()\", jp.getTarget().getClass().getSimpleName(),\n            jp.getSignature().getName());\n    }\n\n    // Run AFTER method returns\n    @AfterReturning(pointcut = \"execution(* com.example.myapi.service.*.*(..))\",\n                    returning = \"result\")\n    public void logAfter(JoinPoint jp, Object result) {\n        log.info(\"← {} returned: {}\", jp.getSignature().getName(), result);\n    }\n\n    // Run AROUND method (full control — timing, retry, etc.)\n    @Around(\"@annotation(Timed)\")   // Custom annotation trigger\n    public Object timeExecution(ProceedingJoinPoint pjp) throws Throwable {\n        long start = System.currentTimeMillis();\n        Object result = pjp.proceed();   // Execute the method\n        long elapsed = System.currentTimeMillis() - start;\n        log.info(\"{} executed in {}ms\", pjp.getSignature().getName(), elapsed);\n        return result;\n    }\n}\n\n// Custom annotation\n@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface Timed {}\n\n// Usage\n@Service\npublic class UserService {\n    @Timed   // Automatically logged with timing!\n    public User findById(Long id) { ... }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.5 Event Publishing"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Define event\npublic record UserCreatedEvent(Long userId, String email) {}\n\n// Publish\n@Service\npublic class UserService {\n    private final ApplicationEventPublisher eventPublisher;\n\n    public User create(CreateUserDto dto) {\n        User user = repo.save(new User(dto.name(), dto.email()));\n        eventPublisher.publishEvent(new UserCreatedEvent(user.getId(), user.getEmail()));\n        return user;\n    }\n}\n\n// Listen\n@Component\npublic class EmailListener {\n    @EventListener\n    public void onUserCreated(UserCreatedEvent event) {\n        System.out.println(\"Sending welcome email to: \" + event.email());\n    }\n\n    @Async @EventListener   // Run asynchronously\n    public void onUserCreatedAsync(UserCreatedEvent event) { ... }\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Register beans with @Configuration and inject them",
                "Compare Singleton vs Prototype scope behavior",
                "Create a logging aspect that times all service methods",
                "Implement a custom event system with publisher and listener"
              ]
            },
            {
              "type": "quiz",
              "question": "In DI And AOP, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of DI And AOP.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "DI And AOP is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "design-patterns",
          "title": "Design Patterns",
          "description": "Master Design Patterns with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Repository pattern",
                "Factory, Builder, Strategy, Observer",
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
              "language": "java",
              "code": "// ❌ One class doing everything\npublic class UserService {\n    public void createUser(User user) { /* DB */ }\n    public void sendEmail(String to) { /* Email */ }\n    public byte[] generateReport() { /* PDF */ }\n}\n\n// ✅ Each class has one job\npublic class UserService { public void createUser(User user) { } }\npublic class EmailService { public void sendEmail(String to) { } }\npublic class ReportService { public byte[] generateReport() { } }"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "O — Open/Closed"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Open for extension, closed for modification\npublic interface DiscountStrategy {\n    double apply(double price);\n}\n\npublic class NoDiscount implements DiscountStrategy {\n    public double apply(double price) { return price; }\n}\npublic class PercentDiscount implements DiscountStrategy {\n    private final double percent;\n    public PercentDiscount(double percent) { this.percent = percent; }\n    public double apply(double price) { return price * (1 - percent / 100); }\n}\n// Add new discounts without modifying existing code!"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "L — Liskov Substitution"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Subtypes must be substitutable for their base types\n// ✅ Good — all shapes compute area correctly\npublic interface Shape { double area(); }\npublic class Circle implements Shape { public double area() { return Math.PI * r * r; } }\npublic class Rectangle implements Shape { public double area() { return w * h; } }"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "I — Interface Segregation"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// ❌ Fat interface\npublic interface Worker { void work(); void eat(); void sleep(); }\n\n// ✅ Small, focused interfaces\npublic interface Workable { void work(); }\npublic interface Feedable { void eat(); }\npublic class Robot implements Workable { public void work() { } }\npublic class Human implements Workable, Feedable { ... }"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "D — Dependency Inversion"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Depend on abstractions, not concretions\n// ❌ public class OrderService { private SqlDatabase db = new SqlDatabase(); }\n// ✅\npublic class OrderService {\n    private final Database db;\n    public OrderService(Database db) { this.db = db; }   // Inject interface\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.2 Common Patterns"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Builder"
            },
            {
              "type": "code",
              "language": "java",
              "code": "public class User {\n    private final String name;\n    private final String email;\n    private final int age;\n    private final String phone;\n\n    private User(Builder builder) {\n        this.name = builder.name;\n        this.email = builder.email;\n        this.age = builder.age;\n        this.phone = builder.phone;\n    }\n\n    public static class Builder {\n        private String name;\n        private String email;\n        private int age;\n        private String phone;\n\n        public Builder name(String name) { this.name = name; return this; }\n        public Builder email(String email) { this.email = email; return this; }\n        public Builder age(int age) { this.age = age; return this; }\n        public Builder phone(String phone) { this.phone = phone; return this; }\n        public User build() { return new User(this); }\n    }\n}\n\nUser user = new User.Builder()\n    .name(\"Aravind\").email(\"a@test.com\").age(25)\n    .build();\n// Or use Lombok: @Builder on the class!"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Factory"
            },
            {
              "type": "code",
              "language": "java",
              "code": "public interface Notification { void send(String message); }\npublic class EmailNotification implements Notification { ... }\npublic class SmsNotification implements Notification { ... }\npublic class PushNotification implements Notification { ... }\n\npublic class NotificationFactory {\n    public static Notification create(String type) {\n        return switch (type.toLowerCase()) {\n            case \"email\" -> new EmailNotification();\n            case \"sms\" -> new SmsNotification();\n            case \"push\" -> new PushNotification();\n            default -> throw new IllegalArgumentException(\"Unknown: \" + type);\n        };\n    }\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Strategy"
            },
            {
              "type": "code",
              "language": "java",
              "code": "public interface SortStrategy<T> { List<T> sort(List<T> data); }\n\npublic class QuickSort<T extends Comparable<T>> implements SortStrategy<T> {\n    public List<T> sort(List<T> data) { /* quicksort */ }\n}\n\npublic class MergeSort<T extends Comparable<T>> implements SortStrategy<T> {\n    public List<T> sort(List<T> data) { /* mergesort */ }\n}\n\n// Use via DI — swap strategy without changing client code\n@Service\npublic class DataProcessor {\n    private final SortStrategy<Integer> sortStrategy;\n    public DataProcessor(SortStrategy<Integer> sortStrategy) {\n        this.sortStrategy = sortStrategy;\n    }\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Observer (Events)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "// Already built into Spring! (See Module 15)\n// Publish: eventPublisher.publishEvent(new OrderPlacedEvent(...))\n// Listen: @EventListener on methods"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.3 Clean Architecture"
            },
            {
              "type": "code",
              "language": "text",
              "code": "┌─────────────────────────────────────────────┐\n│              Presentation Layer             │\n│  (Controllers, Filters, Exception Handlers) │\n├─────────────────────────────────────────────┤\n│              Application Layer              │\n│  (Services, DTOs, Use Cases, Interfaces)    │\n├─────────────────────────────────────────────┤\n│               Domain Layer                  │\n│  (Entities, Value Objects, Domain Events)   │\n├─────────────────────────────────────────────┤\n│           Infrastructure Layer              │\n│  (JPA Repos, External APIs, Config)         │\n└─────────────────────────────────────────────┘\n\nDependencies point INWARD:\n  Presentation → Application → Domain ← Infrastructure"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Refactor a monolithic service to follow SOLID",
                "Implement the Builder pattern for a complex object",
                "Use Factory + Strategy to handle multiple payment providers",
                "Structure a project following Clean Architecture layers"
              ]
            },
            {
              "type": "quiz",
              "question": "In Design Patterns, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Design Patterns."
              ],
              "answer": 3,
              "explanation": "Design Patterns is built around established design principles, structured syntax, and robust real-world implementations."
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
                "JUnit 5 basics",
                "Mockito for mocking",
                "Testing services and controllers",
                "Integration testing with @SpringBootTest",
                "TDD"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.1 JUnit 5 Basics"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import org.junit.jupiter.api.*;\nimport static org.junit.jupiter.api.Assertions.*;\n\nclass CalculatorTest {\n\n    private Calculator calc;\n\n    @BeforeEach\n    void setUp() { calc = new Calculator(); }\n\n    @Test\n    @DisplayName(\"Addition of two positive numbers\")\n    void add_twoPositive_returnsSum() {\n        assertEquals(8, calc.add(3, 5));\n    }\n\n    @Test\n    void divide_byZero_throwsException() {\n        assertThrows(ArithmeticException.class, () -> calc.divide(10, 0));\n    }\n\n    @ParameterizedTest   // Run multiple times with different data\n    @CsvSource({\"1, 2, 3\", \"0, 0, 0\", \"-1, 1, 0\", \"100, -50, 50\"})\n    void add_various_returnsCorrect(int a, int b, int expected) {\n        assertEquals(expected, calc.add(a, b));\n    }\n\n    @ParameterizedTest\n    @ValueSource(ints = {2, 4, 6, 8, 100})\n    void isEven_evenNumbers_returnsTrue(int n) {\n        assertTrue(calc.isEven(n));\n    }\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Common Assertions"
            },
            {
              "type": "code",
              "language": "java",
              "code": "assertEquals(expected, actual);\nassertNotEquals(unexpected, actual);\nassertTrue(condition);\nassertFalse(condition);\nassertNull(value);\nassertNotNull(value);\nassertThrows(Exception.class, () -> method());\nassertDoesNotThrow(() -> method());\nassertIterableEquals(expectedList, actualList);\nassertTimeout(Duration.ofSeconds(2), () -> slowMethod());\nassertAll(   // Group assertions — all run even if one fails\n    () -> assertEquals(\"a\", obj.getName()),\n    () -> assertEquals(25, obj.getAge())\n);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.2 Mockito"
            },
            {
              "type": "code",
              "language": "java",
              "code": "import org.mockito.Mock;\nimport org.mockito.InjectMocks;\nimport org.mockito.junit.jupiter.MockitoExtension;\nimport static org.mockito.Mockito.*;\n\n@ExtendWith(MockitoExtension.class)\nclass UserServiceTest {\n\n    @Mock private UserRepository userRepo;\n    @Mock private EmailService emailService;\n    @InjectMocks private UserService userService;\n\n    @Test\n    void getById_existingUser_returnsUser() {\n        // Arrange\n        User user = new User(1L, \"Aravind\", \"a@test.com\");\n        when(userRepo.findById(1L)).thenReturn(Optional.of(user));\n\n        // Act\n        Optional<UserDto> result = userService.getById(1L);\n\n        // Assert\n        assertTrue(result.isPresent());\n        assertEquals(\"Aravind\", result.get().name());\n        verify(userRepo, times(1)).findById(1L);   // Verify called once\n    }\n\n    @Test\n    void create_validUser_savesAndSendsEmail() {\n        var dto = new CreateUserDto(\"Aravind\", \"a@test.com\");\n        var user = new User(1L, \"Aravind\", \"a@test.com\");\n\n        when(userRepo.existsByEmail(anyString())).thenReturn(false);\n        when(userRepo.save(any(User.class))).thenReturn(user);\n\n        userService.create(dto);\n\n        verify(userRepo).save(any(User.class));         // Was save called?\n        verify(emailService).sendWelcome(\"a@test.com\"); // Was email sent?\n        verify(userRepo, never()).deleteById(anyLong()); // Was delete NOT called?\n    }\n\n    @Test\n    void create_duplicateEmail_throwsException() {\n        when(userRepo.existsByEmail(\"a@test.com\")).thenReturn(true);\n\n        assertThrows(DuplicateResourceException.class, () ->\n            userService.create(new CreateUserDto(\"Test\", \"a@test.com\")));\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.3 Testing Controllers (MockMvc)"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@WebMvcTest(UserController.class)\nclass UserControllerTest {\n\n    @Autowired private MockMvc mockMvc;\n    @MockBean private UserService userService;\n    @Autowired private ObjectMapper objectMapper;\n\n    @Test\n    void getById_existingId_returns200() throws Exception {\n        var user = new UserDto(1L, \"Aravind\", \"a@test.com\", 25);\n        when(userService.getById(1L)).thenReturn(Optional.of(user));\n\n        mockMvc.perform(get(\"/api/users/1\"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.name\").value(\"Aravind\"))\n            .andExpect(jsonPath(\"$.email\").value(\"a@test.com\"));\n    }\n\n    @Test\n    void getById_nonExisting_returns404() throws Exception {\n        when(userService.getById(999L)).thenReturn(Optional.empty());\n\n        mockMvc.perform(get(\"/api/users/999\"))\n            .andExpect(status().isNotFound());\n    }\n\n    @Test\n    void create_validData_returns201() throws Exception {\n        var dto = new CreateUserDto(\"Aravind\", \"a@test.com\", 25, \"1234567890\");\n        var result = new UserDto(1L, \"Aravind\", \"a@test.com\", 25);\n        when(userService.create(any())).thenReturn(result);\n\n        mockMvc.perform(post(\"/api/users\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(objectMapper.writeValueAsString(dto)))\n            .andExpect(status().isCreated())\n            .andExpect(jsonPath(\"$.id\").value(1));\n    }\n\n    @Test\n    void create_invalidData_returns400() throws Exception {\n        var dto = new CreateUserDto(\"\", \"invalid\", 10, null);\n\n        mockMvc.perform(post(\"/api/users\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(objectMapper.writeValueAsString(dto)))\n            .andExpect(status().isBadRequest());\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.4 Integration Testing"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@AutoConfigureMockMvc\nclass UserIntegrationTest {\n\n    @Autowired private MockMvc mockMvc;\n    @Autowired private UserRepository userRepo;\n\n    @BeforeEach\n    void setUp() { userRepo.deleteAll(); }\n\n    @Test\n    @Transactional\n    void fullCrud_workflow() throws Exception {\n        // Create\n        String json = \"\"\"\n            {\"name\": \"Aravind\", \"email\": \"a@test.com\", \"age\": 25}\n            \"\"\";\n\n        mockMvc.perform(post(\"/api/users\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(json))\n            .andExpect(status().isCreated());\n\n        // Verify in DB\n        assertEquals(1, userRepo.count());\n\n        // Read\n        mockMvc.perform(get(\"/api/users\"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$[0].name\").value(\"Aravind\"));\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.5 TDD Cycle"
            },
            {
              "type": "code",
              "language": "text",
              "code": "1. RED   → Write a failing test first\n2. GREEN → Write minimum code to make it pass\n3. REFACTOR → Clean up while keeping tests green\nRepeat!"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write unit tests for a service with JUnit 5 and Mockito",
                "Test a controller with MockMvc for all CRUD operations",
                "Write integration tests that hit the actual database",
                "Practice TDD: write tests first, then implement"
              ]
            },
            {
              "type": "quiz",
              "question": "In Testing, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Testing.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Testing is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "deployment",
          "title": "Deployment",
          "description": "Master Deployment with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Maven & Gradle build tools",
                "Docker containerization",
                "CI/CD with GitHub Actions",
                "Monitoring and health checks",
                "Production best practices"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.1 Maven"
            },
            {
              "type": "code",
              "language": "xml",
              "code": "<!-- pom.xml — key sections -->\n<project>\n    <groupId>com.example</groupId>\n    <artifactId>myapi</artifactId>\n    <version>1.0.0</version>\n    <packaging>jar</packaging>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.2.0</version>\n    </parent>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n</project>"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "mvn clean install       # Build + run tests + create JAR\nmvn spring-boot:run     # Run locally\nmvn test                # Run tests only\nmvn package -DskipTests # Build without tests\nmvn dependency:tree     # Show dependency tree"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.2 Gradle"
            },
            {
              "type": "code",
              "language": "groovy",
              "code": "// build.gradle\nplugins {\n    id 'java'\n    id 'org.springframework.boot' version '3.2.0'\n    id 'io.spring.dependency-management' version '1.1.4'\n}\n\ngroup = 'com.example'\nversion = '1.0.0'\njava.sourceCompatibility = JavaVersion.VERSION_21\n\ndependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'\n    runtimeOnly 'org.postgresql:postgresql'\n    testImplementation 'org.springframework.boot:spring-boot-starter-test'\n}"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "./gradlew build          # Build + test\n./gradlew bootRun        # Run locally\n./gradlew test           # Run tests\n./gradlew bootJar        # Create executable JAR"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.3 Docker"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# Dockerfile (multi-stage build)\nFROM eclipse-temurin:21-jdk AS build\nWORKDIR /app\nCOPY pom.xml .\nCOPY src ./src\nCOPY mvnw .\nCOPY .mvn ./.mvn\nRUN chmod +x mvnw && ./mvnw package -DskipTests\n\nFROM eclipse-temurin:21-jre\nWORKDIR /app\nCOPY --from=build /app/target/*.jar app.jar\nEXPOSE 8080\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# docker-compose.yml\nversion: '3.8'\nservices:\n  api:\n    build: .\n    ports:\n      - \"8080:8080\"\n    environment:\n      - SPRING_PROFILES_ACTIVE=prod\n      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mydb\n      - SPRING_DATASOURCE_USERNAME=postgres\n      - SPRING_DATASOURCE_PASSWORD=secret\n    depends_on:\n      - db\n\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: mydb\n      POSTGRES_PASSWORD: secret\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\nvolumes:\n  pgdata:"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "docker build -t myapi .\ndocker run -p 8080:8080 myapi\ndocker compose up -d"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.4 CI/CD with GitHub Actions"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# .github/workflows/ci.yml\nname: Build & Deploy\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup JDK 21\n        uses: actions/setup-java@v4\n        with:\n          java-version: '21'\n          distribution: 'temurin'\n\n      - name: Build & Test\n        run: ./mvnw clean verify\n\n      - name: Build Docker Image\n        if: github.ref == 'refs/heads/main'\n        run: docker build -t myapi:latest .\n\n      - name: Push to Docker Hub\n        if: github.ref == 'refs/heads/main'\n        run: |\n          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin\n          docker tag myapi:latest ${{ secrets.DOCKER_USERNAME }}/myapi:latest\n          docker push ${{ secrets.DOCKER_USERNAME }}/myapi:latest"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.5 Health Checks & Monitoring"
            },
            {
              "type": "code",
              "language": "xml",
              "code": "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>"
            },
            {
              "type": "code",
              "language": "properties",
              "code": "# application.properties\nmanagement.endpoints.web.exposure.include=health,info,metrics,prometheus\nmanagement.endpoint.health.show-details=always"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "GET /actuator/health      # Health status\nGET /actuator/info         # App info\nGET /actuator/metrics      # Metrics\nGET /actuator/prometheus   # Prometheus format (for Grafana)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Custom Health Check"
            },
            {
              "type": "code",
              "language": "java",
              "code": "@Component\npublic class DatabaseHealthIndicator implements HealthIndicator {\n    private final DataSource dataSource;\n\n    @Override\n    public Health health() {\n        try (var conn = dataSource.getConnection()) {\n            return Health.up()\n                .withDetail(\"database\", \"Reachable\")\n                .build();\n        } catch (SQLException e) {\n            return Health.down()\n                .withDetail(\"error\", e.getMessage())\n                .build();\n        }\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.6 Production Checklist"
            },
            {
              "type": "code",
              "language": "text",
              "code": "✅ Use profiles (dev, staging, prod)\n✅ Externalize all configuration (env vars, config server)\n✅ Enable HTTPS in production\n✅ Set up structured logging (JSON format for log aggregation)\n✅ Add health checks (/actuator/health)\n✅ Monitor with Prometheus + Grafana\n✅ Use connection pooling (HikariCP — default in Spring Boot)\n✅ Set JVM memory: java -Xmx512m -jar app.jar\n✅ Enable graceful shutdown: server.shutdown=graceful\n✅ Rate limit APIs to prevent abuse"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Dockerize your Spring Boot app with a multi-stage Dockerfile",
                "Set up docker-compose with API + PostgreSQL",
                "Create a GitHub Actions CI pipeline",
                "Enable Actuator and create a custom health check"
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Java Learning Path!"
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "Go back to the Main README to review all modules."
            },
            {
              "type": "quiz",
              "question": "In Deployment, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Deployment.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Deployment is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
