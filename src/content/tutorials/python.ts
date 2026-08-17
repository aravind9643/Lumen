import type { Tutorial } from '../types'

export const pythonProgramming: Tutorial = {
  "slug": "python-programming",
  "title": "Mastering Modern Python: Zero to Advanced",
  "shortTitle": "Python Programming",
  "description": "A complete, zero-to-advanced path covering core Python syntax, data structures, OOP, advanced internals, async concurrency, data science, web development, and cloud automation.",
  "category": "Programming",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "Python",
    "OOP",
    "Data Structures",
    "AsyncIO",
    "Data Science",
    "FastAPI",
    "Django"
  ],
  "color": "#0ea5e9",
  "updated": "2026-08-17",
  "prerequisites": [
    "Zero programming experience required — starts from absolute fundamentals.",
    "A computer with Python 3.11+ installed."
  ],
  "outcomes": [
    "Master core Python syntax, control flow, functions, and builtin data structures",
    "Design modular software with Object-Oriented and Functional programming paradigms",
    "Write high-performance concurrent code using AsyncIO, Multiprocessing, and Threading",
    "Understand CPython internals, memory management, garbage collection, and profiling",
    "Build modern web applications and REST APIs using FastAPI, Flask, and Django",
    "Perform data analysis, visualization, and machine learning with NumPy, Pandas, and Scikit-Learn",
    "Automate cloud workflows and big data pipelines with Boto3 and PySpark"
  ],
  "chapters": [
    {
      "title": "Chapter 1: Python Fundamentals (Beginner)",
      "lessons": [
        {
          "slug": "python-basics-and-syntax",
          "title": "Python Basics: Variables, Types & Syntax",
          "description": "Comprehensive hands-on guide to python basics: variables, types & syntax in Python.",
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
                "What Python is and why it's popular",
                "Variables and data types",
                "Operators (arithmetic, comparison, logical, assignment)",
                "Input/Output",
                "Type conversion"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is Python?"
            },
            {
              "type": "paragraph",
              "text": "**Python** is a high-level, interpreted, general-purpose programming language. Created by Guido van Rossum in 1991, it's designed for readability and simplicity."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Why Python?"
            },
            {
              "type": "code",
              "language": "python",
              "code": "✅ Easy to read (looks like English)\n✅ Huge ecosystem (300,000+ packages on PyPI)\n✅ Used everywhere: AI/ML, web dev, automation, data science, DevOps\n✅ Most in-demand programming language for AI/ML\n✅ Large community and support"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Python is Interpreted"
            },
            {
              "type": "code",
              "language": "python",
              "code": "Compiled languages (C, Java):\n  Source code → Compiler → Machine code → Run\n  Must compile BEFORE running\n\nInterpreted languages (Python):\n  Source code → Interpreter → Run line by line\n  No compilation step — just write and run!\n  \nTrade-off: Python is slower than C, but MUCH faster to write"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Variables"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Variable?"
            },
            {
              "type": "paragraph",
              "text": "A **variable** is a name that refers to a value stored in memory. Think of it as a labeled box that holds data."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Creating variables (no need to declare types — Python figures it out!)\nname = \"Aravind\"          # str (text)\nage = 25                  # int (whole number)\nsalary = 75000.50         # float (decimal number)\nis_active = True          # bool (True or False)\n\n# Python is dynamically typed — the type is determined at runtime\nx = 10       # x is int\nx = \"hello\"  # x is now str (same variable, different type!)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Variable Naming Rules"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# ✅ Valid names\nuser_name = \"John\"        # snake_case (Python convention)\nage2 = 30                 # Can contain numbers (not at start)\n_private = \"hidden\"       # Can start with underscore\nMAX_SIZE = 100            # UPPER_CASE for constants\n\n# ❌ Invalid names\n# 2name = \"John\"          # Cannot start with number\n# my-name = \"John\"        # No hyphens\n# class = \"Python\"        # Cannot use reserved keywords"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Constants"
            },
            {
              "type": "paragraph",
              "text": "Python doesn't have true constants, but by convention, UPPER_CASE names mean \"don't change this\":"
            },
            {
              "type": "code",
              "language": "python",
              "code": "PI = 3.14159\nMAX_CONNECTIONS = 100\nDATABASE_URL = \"postgres://localhost:5432/mydb\"\n# These CAN be changed, but you SHOULDN'T"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Data Types"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Data Type?"
            },
            {
              "type": "paragraph",
              "text": "A **data type** defines what kind of value a variable holds and what operations you can perform on it."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Primitive Data Types"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# int — Whole numbers (no size limit in Python!)\nage = 25\npopulation = 8_000_000_000    # Underscores for readability\nhex_num = 0xFF                 # Hexadecimal (255)\nbinary = 0b1010               # Binary (10)\n\n# float — Decimal numbers\nprice = 19.99\npi = 3.14159\nscientific = 2.5e6            # 2,500,000.0\n\n# str — Text (sequence of characters)\nname = \"Aravind\"\ngreeting = 'Hello World'\nmultiline = \"\"\"This is\na multiline\nstring\"\"\"\n\n# bool — True or False\nis_valid = True\nis_empty = False\n# Booleans are actually integers: True = 1, False = 0\nprint(True + True)   # 2\n\n# NoneType — Represents \"nothing\" / \"no value\"\nresult = None        # Similar to null in other languages"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Checking Types"
            },
            {
              "type": "code",
              "language": "python",
              "code": "x = 42\nprint(type(x))          # <class 'int'>\nprint(isinstance(x, int))  # True\n\n# Check multiple types\nprint(isinstance(x, (int, float)))  # True"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.4 Operators"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Arithmetic Operators"
            },
            {
              "type": "code",
              "language": "python",
              "code": "a, b = 10, 3\n\nprint(a + b)    # 13   Addition\nprint(a - b)    # 7    Subtraction\nprint(a * b)    # 30   Multiplication\nprint(a / b)    # 3.33 Division (always returns float!)\nprint(a // b)   # 3    Floor division (rounds down to int)\nprint(a % b)    # 1    Modulo (remainder)\nprint(a ** b)   # 1000 Exponentiation (10³)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Comparison Operators"
            },
            {
              "type": "code",
              "language": "python",
              "code": "x, y = 10, 20\n\nprint(x == y)   # False   Equal to\nprint(x != y)   # True    Not equal to\nprint(x > y)    # False   Greater than\nprint(x < y)    # True    Less than\nprint(x >= y)   # False   Greater than or equal\nprint(x <= y)   # True    Less than or equal"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Logical Operators"
            },
            {
              "type": "code",
              "language": "python",
              "code": "a, b = True, False\n\nprint(a and b)  # False   Both must be True\nprint(a or b)   # True    At least one True\nprint(not a)    # False   Inverts the value\n\n# Short-circuit evaluation:\n# 'and' stops at first False, 'or' stops at first True\nresult = None or \"default\"    # \"default\" (None is falsy)\nresult = \"hello\" and \"world\"  # \"world\" (both truthy, returns last)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Assignment Operators"
            },
            {
              "type": "code",
              "language": "python",
              "code": "x = 10\nx += 5      # x = x + 5  → 15\nx -= 3      # x = x - 3  → 12\nx *= 2      # x = x * 2  → 24\nx /= 4      # x = x / 4  → 6.0\nx //= 2     # x = x // 2 → 3.0\nx **= 3     # x = x ** 3 → 27.0\nx %= 5      # x = x % 5  → 2.0"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Identity and Membership Operators"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Identity: checks if same object in memory (not just equal value)\na = [1, 2, 3]\nb = [1, 2, 3]\nc = a\n\nprint(a == b)     # True  (same value)\nprint(a is b)     # False (different objects in memory!)\nprint(a is c)     # True  (c points to same object as a)\n\n# Membership: checks if value exists in a collection\nfruits = [\"apple\", \"banana\", \"cherry\"]\nprint(\"apple\" in fruits)       # True\nprint(\"grape\" not in fruits)   # True"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.5 Type Conversion (Casting)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Implicit conversion (Python does it automatically)\nx = 10 + 3.5    # int + float → float (13.5)\n\n# Explicit conversion (you do it manually)\nnum_str = \"42\"\nnum_int = int(num_str)       # str → int: 42\nnum_float = float(num_str)   # str → float: 42.0\nback_str = str(num_int)      # int → str: \"42\"\n\n# Common conversions\nint(\"100\")       # 100\nfloat(\"3.14\")    # 3.14\nstr(42)          # \"42\"\nbool(0)          # False (0, \"\", None, [], {} are all False)\nbool(1)          # True  (everything else is True)\nlist(\"hello\")    # ['h', 'e', 'l', 'l', 'o']"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.6 Input and Output"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Output with print()"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Basic print\nprint(\"Hello, World!\")\n\n# Multiple values\nname, age = \"Aravind\", 25\nprint(\"Name:\", name, \"Age:\", age)      # Name: Aravind Age: 25\n\n# f-strings (best way — Python 3.6+)\nprint(f\"Name: {name}, Age: {age}\")     # Name: Aravind, Age: 25\nprint(f\"In 5 years: {age + 5}\")        # In 5 years: 30\nprint(f\"Price: ${19.99:.2f}\")          # Price: $19.99\n\n# .format() method (older way)\nprint(\"Name: {}, Age: {}\".format(name, age))\n\n# Print with custom separator and end\nprint(\"a\", \"b\", \"c\", sep=\"-\")         # a-b-c\nprint(\"Hello\", end=\" \")               # No newline at end\nprint(\"World\")                        # Hello World"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Input from User"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# input() always returns a string!\nname = input(\"Enter your name: \")\nage = int(input(\"Enter your age: \"))   # Convert to int\nheight = float(input(\"Height: \"))      # Convert to float\n\nprint(f\"Hello {name}, you are {age} years old!\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.7 Comments"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# This is a single-line comment\n\n# Comments explain WHY, not WHAT\nx = x + 1  # Bad comment: increment x\nx = x + 1  # Good comment: account for zero-based indexing\n\n\"\"\"\nThis is a multi-line comment (docstring).\nUsed for documenting functions, classes, and modules.\n\"\"\"\n\ndef greet(name):\n    \"\"\"Return a greeting message for the given name.\"\"\"\n    return f\"Hello, {name}!\""
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create variables for your name, age, height, and print them using f-strings",
                "Write a program that converts Celsius to Fahrenheit: `F = C × 9/5 + 32`",
                "Take two numbers as input, print their sum, difference, product, and quotient",
                "Experiment with `is` vs `==` — create two lists with same values and test both"
              ]
            },
            {
              "type": "quiz",
              "question": "What is the main difference between is and == in Python?",
              "options": [
                "== checks value equality, whereas is checks memory identity (same object reference).",
                "is compares numbers, while == only compares strings.",
                "== creates a copy of the object, while is modifies it.",
                "is is deprecated in Python 3.10 and replaced by ==."
              ],
              "answer": 0,
              "explanation": "== evaluates whether two objects hold the same value (calls __eq__), while is checks if both variables point to the exact same memory address (id(a) == id(b))."
            }
          ]
        },
        {
          "slug": "data-structures",
          "title": "Data Structures: Lists, Tuples, Dicts & Sets",
          "description": "Comprehensive hands-on guide to data structures: lists, tuples, dicts & sets in Python.",
          "duration": 25,
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
                "Lists (ordered, mutable)",
                "Tuples (ordered, immutable)",
                "Dictionaries (key-value pairs)",
                "Sets (unique, unordered)",
                "When to use each"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Lists"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a List?"
            },
            {
              "type": "paragraph",
              "text": "A **list** is an ordered, mutable (changeable) collection that can hold items of any type. Lists are the most commonly used data structure in Python."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Creating lists\nfruits = [\"apple\", \"banana\", \"cherry\"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = [1, \"hello\", 3.14, True, None]   # Mixed types allowed\nempty = []                                # Empty list\nnested = [[1, 2], [3, 4], [5, 6]]       # List of lists\n\n# Accessing elements (0-indexed)\nprint(fruits[0])     # \"apple\" (first)\nprint(fruits[-1])    # \"cherry\" (last)\nprint(fruits[1:3])   # [\"banana\", \"cherry\"] (slicing)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "List Methods"
            },
            {
              "type": "code",
              "language": "python",
              "code": "fruits = [\"apple\", \"banana\"]\n\n# Adding elements\nfruits.append(\"cherry\")        # Add to end → [\"apple\", \"banana\", \"cherry\"]\nfruits.insert(1, \"blueberry\")  # Insert at index 1\nfruits.extend([\"date\", \"fig\"]) # Add multiple items\n\n# Removing elements\nfruits.remove(\"banana\")        # Remove by value (first occurrence)\npopped = fruits.pop()          # Remove and return last item\npopped = fruits.pop(0)         # Remove and return item at index 0\nfruits.clear()                 # Remove ALL items\n\n# Searching\nfruits = [\"apple\", \"banana\", \"cherry\", \"banana\"]\nprint(fruits.index(\"banana\"))  # 1 (first occurrence index)\nprint(fruits.count(\"banana\"))  # 2 (how many times)\nprint(\"apple\" in fruits)       # True\n\n# Sorting\nnumbers = [3, 1, 4, 1, 5, 9]\nnumbers.sort()                 # In-place sort → [1, 1, 3, 4, 5, 9]\nnumbers.sort(reverse=True)     # Descending → [9, 5, 4, 3, 1, 1]\nsorted_nums = sorted(numbers)  # Returns NEW sorted list (original unchanged)\n\n# Other\nnumbers.reverse()              # Reverse in-place\ncopy = numbers.copy()          # Shallow copy\nprint(len(numbers))            # Length"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "List Slicing"
            },
            {
              "type": "code",
              "language": "python",
              "code": "nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n\n# Syntax: list[start:stop:step]\nprint(nums[2:5])     # [2, 3, 4]       (index 2 to 4)\nprint(nums[:3])      # [0, 1, 2]       (first 3)\nprint(nums[7:])      # [7, 8, 9]       (from index 7 to end)\nprint(nums[-3:])     # [7, 8, 9]       (last 3)\nprint(nums[::2])     # [0, 2, 4, 6, 8] (every 2nd element)\nprint(nums[::-1])    # [9, 8, 7, ...]  (reversed!)\nprint(nums[1:8:2])   # [1, 3, 5, 7]   (index 1 to 7, step 2)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "List Unpacking"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Assign list elements to variables\nfirst, second, third = [10, 20, 30]\n\n# Star unpacking (catch the rest)\nfirst, *rest = [1, 2, 3, 4, 5]\n# first = 1, rest = [2, 3, 4, 5]\n\nhead, *middle, tail = [1, 2, 3, 4, 5]\n# head = 1, middle = [2, 3, 4], tail = 5"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Tuples"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Tuple?"
            },
            {
              "type": "paragraph",
              "text": "A **tuple** is an ordered, **immutable** (unchangeable) collection. Once created, you cannot add, remove, or modify elements."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Creating tuples\npoint = (10, 20)\nrgb = (255, 128, 0)\nsingle = (42,)           # Single element needs trailing comma!\nempty = ()\nfrom_list = tuple([1, 2, 3])\n\n# Accessing (same as lists)\nprint(point[0])           # 10\nprint(rgb[-1])            # 0\nprint(rgb[0:2])           # (255, 128)\n\n# Immutable — cannot modify!\n# point[0] = 99           # TypeError!\n\n# Tuple methods (only 2)\nnums = (1, 2, 3, 2, 2)\nprint(nums.count(2))     # 3\nprint(nums.index(3))     # 2\n\n# Tuple unpacking\nx, y = (10, 20)\nname, age, city = (\"Aravind\", 25, \"Hyderabad\")\n\n# Swap values (Python trick using tuples)\na, b = 1, 2\na, b = b, a              # Now a=2, b=1"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "When to Use Tuples vs Lists"
            },
            {
              "type": "code",
              "language": "python",
              "code": "Lists:  When you need to ADD, REMOVE, or CHANGE items\n        → Shopping cart, todo list, search results\n\nTuples: When data should NOT change (immutable = safer & faster)\n        → Coordinates (x, y), RGB colors, database records\n        → Dictionary keys (lists can't be keys, tuples can!)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Dictionaries"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Dictionary?"
            },
            {
              "type": "paragraph",
              "text": "A **dictionary** (dict) is an unordered collection of **key-value pairs**. Each key is unique and maps to a value. Think of it like a real dictionary: word (key) → definition (value)."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Creating dictionaries\nperson = {\n    \"name\": \"Aravind\",\n    \"age\": 25,\n    \"city\": \"Hyderabad\",\n    \"skills\": [\"Python\", \"Docker\", \"GenAI\"]\n}\n\n# Accessing values\nprint(person[\"name\"])              # \"Aravind\"\nprint(person.get(\"age\"))           # 25\nprint(person.get(\"salary\", 0))    # 0 (default if key doesn't exist)\n# person[\"salary\"]                 # KeyError! (no default)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Dictionary Methods"
            },
            {
              "type": "code",
              "language": "python",
              "code": "person = {\"name\": \"Aravind\", \"age\": 25}\n\n# Adding/updating\nperson[\"city\"] = \"Hyderabad\"       # Add new key\nperson[\"age\"] = 26                 # Update existing key\nperson.update({\"age\": 27, \"job\": \"Engineer\"})  # Update multiple\n\n# Removing\ndel person[\"city\"]                 # Remove by key\nage = person.pop(\"age\")           # Remove and return value\nperson.popitem()                   # Remove last inserted\nperson.clear()                     # Remove ALL\n\n# Accessing keys, values, items\nperson = {\"name\": \"Aravind\", \"age\": 25, \"city\": \"Hyderabad\"}\nprint(person.keys())               # dict_keys(['name', 'age', 'city'])\nprint(person.values())             # dict_values(['Aravind', 25, 'Hyderabad'])\nprint(person.items())              # dict_items([('name', 'Aravind'), ...])\n\n# Check if key exists\nprint(\"name\" in person)           # True\nprint(\"salary\" in person)         # False\n\n# Iterating\nfor key in person:\n    print(f\"{key}: {person[key]}\")\n\nfor key, value in person.items():\n    print(f\"{key}: {value}\")\n\n# setdefault (get value, or set it if missing)\nperson.setdefault(\"country\", \"India\")  # Sets \"India\" only if key missing\n\n# Dictionary comprehension\nsquares = {x: x**2 for x in range(6)}\n# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Nested Dictionaries"
            },
            {
              "type": "code",
              "language": "python",
              "code": "company = {\n    \"engineering\": {\n        \"team_lead\": \"Alice\",\n        \"members\": [\"Bob\", \"Charlie\"]\n    },\n    \"marketing\": {\n        \"team_lead\": \"Diana\",\n        \"members\": [\"Eve\"]\n    }\n}\n\nprint(company[\"engineering\"][\"team_lead\"])     # \"Alice\"\nprint(company[\"engineering\"][\"members\"][0])    # \"Bob\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.4 Sets"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Set?"
            },
            {
              "type": "paragraph",
              "text": "A **set** is an **unordered** collection of **unique** elements. Duplicates are automatically removed. Sets are fast for membership testing and mathematical operations."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Creating sets\nfruits = {\"apple\", \"banana\", \"cherry\"}\nnumbers = {1, 2, 3, 2, 1}         # Duplicates removed → {1, 2, 3}\nempty_set = set()                   # NOT {} (that's a dict!)\nfrom_list = set([1, 2, 2, 3, 3])  # {1, 2, 3}\n\n# Adding/removing\nfruits.add(\"date\")                 # Add one item\nfruits.update([\"fig\", \"grape\"])    # Add multiple\nfruits.remove(\"banana\")           # Remove (KeyError if not found)\nfruits.discard(\"banana\")          # Remove (NO error if not found)\nfruits.pop()                       # Remove and return random item"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Set Operations (Math)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "a = {1, 2, 3, 4, 5}\nb = {4, 5, 6, 7, 8}\n\n# Union (all elements from both)\nprint(a | b)            # {1, 2, 3, 4, 5, 6, 7, 8}\nprint(a.union(b))\n\n# Intersection (elements in BOTH)\nprint(a & b)            # {4, 5}\nprint(a.intersection(b))\n\n# Difference (in a but NOT in b)\nprint(a - b)            # {1, 2, 3}\nprint(a.difference(b))\n\n# Symmetric difference (in one but NOT both)\nprint(a ^ b)            # {1, 2, 3, 6, 7, 8}\n\n# Subset/superset\nprint({1, 2}.issubset(a))      # True\nprint(a.issuperset({1, 2}))    # True"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Frozen Sets (Immutable Sets)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Frozen set — immutable version of set\nfs = frozenset([1, 2, 3])\n# fs.add(4)   # Error! Can't modify\n# Can be used as dictionary keys or set elements"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.5 Comparison Table"
            },
            {
              "type": "table",
              "headers": [
                "Feature",
                "List",
                "Tuple",
                "Dict",
                "Set"
              ],
              "rows": [
                [
                  "**Syntax**",
                  "1, 2]`",
                  "1, 2)`",
                  "a\": 1}`",
                  "1, 2}`",
                  ""
                ],
                [
                  "**Ordered**",
                  "",
                  "",
                  "(3.7+)",
                  "",
                  ""
                ],
                [
                  "**Mutable**",
                  "",
                  "",
                  "",
                  "",
                  ""
                ],
                [
                  "**Duplicates**",
                  "",
                  "",
                  "Keys:",
                  "",
                  ""
                ],
                [
                  "**Indexing**",
                  "",
                  "",
                  "By key",
                  "",
                  ""
                ],
                [
                  "**Use case**",
                  "General collection",
                  "Fixed data",
                  "Key-value mapping",
                  "Unique items",
                  ""
                ]
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a list of 5 numbers, sort it, reverse it, and find the sum",
                "Create a dict representing a student (name, grades, courses) and access nested data",
                "Find common elements between two lists using sets",
                "Create a frequency counter: count occurrences of each word in a sentence"
              ]
            },
            {
              "type": "quiz",
              "question": "What is the average time complexity for checking if an item exists in a Python set vs a list?",
              "options": [
                "O(N) for set, O(1) for list.",
                "O(log N) for both set and list.",
                "O(1) average for set (hash table lookup) vs O(N) for list (linear scan).",
                "O(N^2) for set, O(N) for list."
              ],
              "answer": 2,
              "explanation": "Python sets are implemented as hash tables, providing O(1) average membership check complexity (x in my_set), whereas lists require scanning elements sequentially (O(N))."
            }
          ]
        },
        {
          "slug": "control-flow",
          "title": "Control Flow: Conditionals, Loops & Match/Case",
          "description": "Comprehensive hands-on guide to control flow: conditionals, loops & match/case in Python.",
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
                "Conditional statements (if, elif, else)",
                "Loops (for, while)",
                "Loop control (break, continue, pass)",
                "Comprehensions (list, dict, set)",
                "Ternary operator",
                "Match-case (Python 3.10+)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 Conditional Statements"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "if / elif / else"
            },
            {
              "type": "code",
              "language": "python",
              "code": "age = 20\n\nif age < 13:\n    print(\"Child\")\nelif age < 18:\n    print(\"Teenager\")\nelif age < 65:\n    print(\"Adult\")         # ← This executes\nelse:\n    print(\"Senior\")\n\n# Python uses INDENTATION (4 spaces) instead of braces {}\n# This is mandatory, not optional!"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Truthy and Falsy Values"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# These are all FALSY (evaluate to False):\nFalse, None, 0, 0.0, \"\", [], {}, set(), ()\n\n# Everything else is TRUTHY:\nTrue, 1, -1, \"hello\", [1], {\"a\": 1}, {1}\n\n# Use this for cleaner code:\nname = \"\"\nif name:              # Instead of: if name != \"\"\n    print(name)\nelse:\n    print(\"No name\")\n\nitems = []\nif not items:         # Instead of: if len(items) == 0\n    print(\"Empty!\")"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Ternary Operator (One-Line If)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "age = 20\nstatus = \"adult\" if age >= 18 else \"minor\"\n# Same as:\n# if age >= 18:\n#     status = \"adult\"\n# else:\n#     status = \"minor\"\n\n# Nested ternary (use sparingly!)\ngrade = \"A\" if score >= 90 else \"B\" if score >= 80 else \"C\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 For Loops"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a For Loop?"
            },
            {
              "type": "paragraph",
              "text": "A **for loop** iterates over a sequence (list, tuple, string, range, etc.) and executes a block of code for each item."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Iterate over a list\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor fruit in fruits:\n    print(fruit)\n\n# Iterate over a string\nfor char in \"Hello\":\n    print(char)    # H, e, l, l, o\n\n# range() — generate numbers\nfor i in range(5):           # 0, 1, 2, 3, 4\n    print(i)\n\nfor i in range(2, 8):        # 2, 3, 4, 5, 6, 7\n    print(i)\n\nfor i in range(0, 10, 2):    # 0, 2, 4, 6, 8 (step of 2)\n    print(i)\n\nfor i in range(10, 0, -1):   # 10, 9, 8, ..., 1 (countdown)\n    print(i)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "enumerate() — Get Index + Value"
            },
            {
              "type": "code",
              "language": "python",
              "code": "fruits = [\"apple\", \"banana\", \"cherry\"]\n\n# Without enumerate (ugly):\nfor i in range(len(fruits)):\n    print(f\"{i}: {fruits[i]}\")\n\n# With enumerate (Pythonic!):\nfor index, fruit in enumerate(fruits):\n    print(f\"{index}: {fruit}\")\n\n# Start from 1 instead of 0\nfor index, fruit in enumerate(fruits, start=1):\n    print(f\"{index}: {fruit}\")"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "zip() — Loop Over Multiple Lists"
            },
            {
              "type": "code",
              "language": "python",
              "code": "names = [\"Alice\", \"Bob\", \"Charlie\"]\nages = [25, 30, 35]\ncities = [\"NYC\", \"LA\", \"Chicago\"]\n\nfor name, age, city in zip(names, ages, cities):\n    print(f\"{name}, {age}, {city}\")\n# Alice, 25, NYC\n# Bob, 30, LA\n# Charlie, 35, Chicago"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 While Loops"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a While Loop?"
            },
            {
              "type": "paragraph",
              "text": "A **while loop** repeats a block of code **as long as a condition is True**. Be careful — if the condition never becomes False, you get an infinite loop!"
            },
            {
              "type": "code",
              "language": "python",
              "code": "count = 0\nwhile count < 5:\n    print(count)     # 0, 1, 2, 3, 4\n    count += 1       # Don't forget to update!\n\n# User input loop\nwhile True:\n    answer = input(\"Continue? (y/n): \")\n    if answer.lower() == \"n\":\n        break\n    print(\"Continuing...\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.4 Loop Control"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "break — Exit the Loop Immediately"
            },
            {
              "type": "code",
              "language": "python",
              "code": "for num in range(10):\n    if num == 5:\n        break          # Stop at 5\n    print(num)         # 0, 1, 2, 3, 4"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "continue — Skip Current Iteration"
            },
            {
              "type": "code",
              "language": "python",
              "code": "for num in range(10):\n    if num % 2 == 0:\n        continue       # Skip even numbers\n    print(num)         # 1, 3, 5, 7, 9"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "pass — Do Nothing (Placeholder)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "for num in range(10):\n    if num < 5:\n        pass           # TODO: handle later\n    else:\n        print(num)\n\n# Use pass for empty functions/classes too\ndef future_function():\n    pass               # Placeholder — will implement later"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "else on Loops"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# 'else' runs when loop completes WITHOUT break\nfor num in range(10):\n    if num == 99:\n        break\nelse:\n    print(\"Loop completed without break!\")  # This runs\n\n# Practical use: searching\nfor item in items:\n    if item == target:\n        print(\"Found!\")\n        break\nelse:\n    print(\"Not found!\")  # Only runs if break was never hit"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.5 Comprehensions"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "List Comprehension"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Traditional way:\nsquares = []\nfor x in range(10):\n    squares.append(x ** 2)\n\n# List comprehension (Pythonic!):\nsquares = [x ** 2 for x in range(10)]\n# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n\n# With condition (filter)\nevens = [x for x in range(20) if x % 2 == 0]\n# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]\n\n# With if-else (transform)\nlabels = [\"even\" if x % 2 == 0 else \"odd\" for x in range(5)]\n# [\"even\", \"odd\", \"even\", \"odd\", \"even\"]\n\n# Nested loops\npairs = [(x, y) for x in range(3) for y in range(3)]\n# [(0,0), (0,1), (0,2), (1,0), (1,1), (1,2), (2,0), (2,1), (2,2)]\n\n# Flatten nested list\nmatrix = [[1, 2], [3, 4], [5, 6]]\nflat = [num for row in matrix for num in row]\n# [1, 2, 3, 4, 5, 6]"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Dictionary Comprehension"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Create dict from two lists\nkeys = [\"name\", \"age\", \"city\"]\nvalues = [\"Aravind\", 25, \"Hyderabad\"]\nperson = {k: v for k, v in zip(keys, values)}\n# {\"name\": \"Aravind\", \"age\": 25, \"city\": \"Hyderabad\"}\n\n# Transform values\nprices = {\"apple\": 1.5, \"banana\": 0.5, \"cherry\": 2.0}\ndoubled = {k: v * 2 for k, v in prices.items()}\n# {\"apple\": 3.0, \"banana\": 1.0, \"cherry\": 4.0}\n\n# Filter\nexpensive = {k: v for k, v in prices.items() if v > 1.0}\n# {\"apple\": 1.5, \"cherry\": 2.0}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Set Comprehension"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Unique squares\nsquares = {x ** 2 for x in range(-5, 6)}\n# {0, 1, 4, 9, 16, 25}\n\n# Unique first letters\nwords = [\"apple\", \"avocado\", \"banana\", \"blueberry\"]\nfirst_letters = {w[0] for w in words}\n# {\"a\", \"b\"}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Generator Expression (Preview)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Like list comprehension but uses () — lazy evaluation (memory efficient)\ngen = (x ** 2 for x in range(1_000_000))\n# Doesn't create a million items in memory — generates one at a time!\nprint(next(gen))   # 0\nprint(next(gen))   # 1\nprint(sum(gen))    # Sum of remaining"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.6 Match-Case (Python 3.10+)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Similar to switch-case in other languages\ncommand = \"start\"\n\nmatch command:\n    case \"start\":\n        print(\"Starting...\")\n    case \"stop\":\n        print(\"Stopping...\")\n    case \"pause\" | \"suspend\":    # Multiple values\n        print(\"Pausing...\")\n    case _:                      # Default (like else)\n        print(\"Unknown command\")\n\n# Pattern matching with structures\npoint = (0, 5)\nmatch point:\n    case (0, 0):\n        print(\"Origin\")\n    case (0, y):\n        print(f\"On Y-axis at {y}\")\n    case (x, 0):\n        print(f\"On X-axis at {x}\")\n    case (x, y):\n        print(f\"Point at ({x}, {y})\")"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a FizzBuzz program (1-100: print \"Fizz\" for 3x, \"Buzz\" for 5x, \"FizzBuzz\" for both)",
                "Create a list of even squares from 1-50 using list comprehension",
                "Write a program to find all prime numbers up to 100",
                "Use a dictionary comprehension to invert a dict (swap keys and values)"
              ]
            },
            {
              "type": "quiz",
              "question": "When does the else block of a Python for loop execute?",
              "options": [
                "Whenever the loop terminates via a break statement.",
                "When the loop completes all iterations naturally without hitting a break statement.",
                "Only if the iterable passed to the loop is completely empty.",
                "Before the first iteration of the loop begins."
              ],
              "answer": 1,
              "explanation": "In Python, a loop's else clause executes only when the loop terminates by exhausting the iterator, not when exited early via break."
            }
          ]
        },
        {
          "slug": "functions-and-scope",
          "title": "Functions, Arguments, Scope & Closures",
          "description": "Comprehensive hands-on guide to functions, arguments, scope & closures in Python.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner → Intermediate | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Defining and calling functions",
                "Parameters: positional, keyword, default, *args, **kwargs",
                "Return values",
                "Scope (local, global, nonlocal)",
                "Lambda functions",
                "Decorators",
                "Closures",
                "Recursion"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 Defining Functions"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Function?"
            },
            {
              "type": "paragraph",
              "text": "A **function** is a reusable block of code that performs a specific task. Functions help organize code, avoid repetition (DRY), and make programs easier to test."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Defining a function\ndef greet(name):\n    \"\"\"Return a greeting message.\"\"\"      # Docstring\n    return f\"Hello, {name}!\"\n\n# Calling a function\nmessage = greet(\"Aravind\")\nprint(message)    # Hello, Aravind!\n\n# Function with no return (returns None implicitly)\ndef print_header(title):\n    print(\"=\" * 40)\n    print(title.center(40))\n    print(\"=\" * 40)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Parameters and Arguments"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Positional Arguments"
            },
            {
              "type": "code",
              "language": "python",
              "code": "def add(a, b):\n    return a + b\n\nadd(3, 5)      # a=3, b=5 (order matters!)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Keyword Arguments"
            },
            {
              "type": "code",
              "language": "python",
              "code": "def create_user(name, age, city):\n    return f\"{name}, {age}, {city}\"\n\n# Using keyword arguments (order doesn't matter)\ncreate_user(age=25, city=\"Hyderabad\", name=\"Aravind\")"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Default Parameters"
            },
            {
              "type": "code",
              "language": "python",
              "code": "def greet(name, greeting=\"Hello\"):\n    return f\"{greeting}, {name}!\"\n\ngreet(\"Aravind\")              # \"Hello, Aravind!\"\ngreet(\"Aravind\", \"Welcome\")  # \"Welcome, Aravind!\"\n\n# ⚠️ GOTCHA: Never use mutable defaults!\n# ❌ BAD:\ndef append_to(item, lst=[]):     # Same list is shared across calls!\n    lst.append(item)\n    return lst\n\n# ✅ GOOD:\ndef append_to(item, lst=None):\n    if lst is None:\n        lst = []\n    lst.append(item)\n    return lst"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "*args — Variable Positional Arguments"
            },
            {
              "type": "code",
              "language": "python",
              "code": "def add_all(*args):\n    \"\"\"Accept any number of positional arguments.\"\"\"\n    print(type(args))    # <class 'tuple'>\n    return sum(args)\n\nadd_all(1, 2, 3)         # 6\nadd_all(1, 2, 3, 4, 5)   # 15"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "**kwargs — Variable Keyword Arguments"
            },
            {
              "type": "code",
              "language": "python",
              "code": "def build_profile(**kwargs):\n    \"\"\"Accept any number of keyword arguments.\"\"\"\n    print(type(kwargs))   # <class 'dict'>\n    for key, value in kwargs.items():\n        print(f\"{key}: {value}\")\n\nbuild_profile(name=\"Aravind\", age=25, city=\"Hyderabad\")\n# name: Aravind\n# age: 25\n# city: Hyderabad"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Parameter Order Rule"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# The correct order when combining all types:\ndef func(positional, /, normal, *, keyword_only, **kwargs):\n    pass\n\n# Practical example:\ndef create_element(tag, *children, class_name=None, **attrs):\n    print(f\"Tag: {tag}\")\n    print(f\"Children: {children}\")\n    print(f\"Class: {class_name}\")\n    print(f\"Attrs: {attrs}\")\n\ncreate_element(\"div\", \"Hello\", \"World\", class_name=\"container\", id=\"main\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Return Values"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Return single value\ndef square(n):\n    return n ** 2\n\n# Return multiple values (as tuple)\ndef divmod_custom(a, b):\n    quotient = a // b\n    remainder = a % b\n    return quotient, remainder\n\nq, r = divmod_custom(17, 5)    # q=3, r=2\n\n# Return early (guard clause pattern)\ndef get_grade(score):\n    if score < 0 or score > 100:\n        return \"Invalid score\"   # Return early\n    if score >= 90: return \"A\"\n    if score >= 80: return \"B\"\n    if score >= 70: return \"C\"\n    return \"F\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.4 Scope"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is Scope?"
            },
            {
              "type": "paragraph",
              "text": "**Scope** determines where a variable is accessible. Python has 4 scopes: **LEGB** (Local, Enclosing, Global, Built-in)."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Built-in scope: print(), len(), range(), etc.\n\n# Global scope\nx = \"global\"\n\ndef outer():\n    # Enclosing scope\n    y = \"enclosing\"\n    \n    def inner():\n        # Local scope\n        z = \"local\"\n        print(x)    # ✅ Can access global\n        print(y)    # ✅ Can access enclosing\n        print(z)    # ✅ Can access local\n    \n    inner()\n\nouter()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "global and nonlocal"
            },
            {
              "type": "code",
              "language": "python",
              "code": "count = 0\n\ndef increment():\n    global count        # Access the global variable\n    count += 1\n\nincrement()\nprint(count)   # 1\n\n# nonlocal — access enclosing scope variable\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x      # Modify enclosing scope's x\n        x += 5\n    inner()\n    print(x)   # 15\n\nouter()"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.5 Lambda Functions"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Lambda?"
            },
            {
              "type": "paragraph",
              "text": "A **lambda** is a small, anonymous (unnamed) function defined in one line. Use for simple operations where a full function is overkill."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Syntax: lambda arguments: expression\n\n# Regular function\ndef square(x):\n    return x ** 2\n\n# Same as lambda\nsquare = lambda x: x ** 2\n\n# Multiple arguments\nadd = lambda a, b: a + b\nprint(add(3, 5))   # 8\n\n# Most useful: as arguments to other functions\nnumbers = [5, 2, 8, 1, 9, 3]\nnumbers.sort(key=lambda x: x)           # Sort ascending\nnumbers.sort(key=lambda x: -x)          # Sort descending\n\n# Sort list of dicts by a key\npeople = [{\"name\": \"Charlie\", \"age\": 30}, {\"name\": \"Alice\", \"age\": 25}]\npeople.sort(key=lambda p: p[\"age\"])      # Sort by age\n\n# Filter with lambda\nadults = list(filter(lambda p: p[\"age\"] >= 18, people))"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.6 Decorators"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Decorator?"
            },
            {
              "type": "paragraph",
              "text": "A **decorator** is a function that wraps another function to add extra behavior — without modifying the original function. Think of it as a wrapper or a plugin."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": "Like adding a phone case — the phone works the same, but you've added protection/features without changing the phone itself."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Basic decorator\ndef logger(func):\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__}...\")\n        result = func(*args, **kwargs)\n        print(f\"{func.__name__} returned {result}\")\n        return result\n    return wrapper\n\n@logger                          # Same as: greet = logger(greet)\ndef greet(name):\n    return f\"Hello, {name}!\"\n\ngreet(\"Aravind\")\n# Calling greet...\n# greet returned Hello, Aravind!"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Practical Decorators"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import time\nfrom functools import wraps\n\n# Timer decorator\ndef timer(func):\n    @wraps(func)     # Preserves original function name and docstring\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        elapsed = time.time() - start\n        print(f\"{func.__name__} took {elapsed:.4f}s\")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(1)\n    return \"done\"\n\n# Retry decorator\ndef retry(max_attempts=3):\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            for attempt in range(1, max_attempts + 1):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    print(f\"Attempt {attempt} failed: {e}\")\n                    if attempt == max_attempts:\n                        raise\n        return wrapper\n    return decorator\n\n@retry(max_attempts=3)\ndef risky_operation():\n    # ... might fail ...\n    pass"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.7 Closures"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Closure?"
            },
            {
              "type": "paragraph",
              "text": "A **closure** is an inner function that remembers variables from its enclosing scope, even after the outer function has finished executing."
            },
            {
              "type": "code",
              "language": "python",
              "code": "def make_multiplier(factor):\n    def multiply(number):\n        return number * factor    # 'factor' is remembered!\n    return multiply\n\ndouble = make_multiplier(2)\ntriple = make_multiplier(3)\n\nprint(double(5))     # 10\nprint(triple(5))     # 15\n\n# 'factor' still exists inside the closure,\n# even though make_multiplier() has finished!"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.8 Recursion"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is Recursion?"
            },
            {
              "type": "paragraph",
              "text": "**Recursion** is when a function calls itself. Every recursive function needs a **base case** (when to stop) to avoid infinite recursion."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Factorial: n! = n × (n-1) × (n-2) × ... × 1\ndef factorial(n):\n    if n <= 1:           # Base case\n        return 1\n    return n * factorial(n - 1)    # Recursive case\n\nprint(factorial(5))   # 120 (5 × 4 × 3 × 2 × 1)\n\n# Fibonacci\ndef fibonacci(n):\n    if n <= 1:           # Base cases\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\n# ⚠️ Python has a recursion limit (default: 1000)\nimport sys\nprint(sys.getrecursionlimit())    # 1000\nsys.setrecursionlimit(5000)       # Increase if needed (careful!)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a function that accepts `*args` and returns the average",
                "Create a decorator that caches function results (memoization)",
                "Write a `make_counter()` closure that increments each time it's called",
                "Implement binary search using recursion"
              ]
            },
            {
              "type": "quiz",
              "question": "Why is using a mutable default argument like def append_to(item, target=[]) dangerous in Python?",
              "options": [
                "It causes a syntax error during compilation.",
                "The default list is created once at function definition time, so all subsequent calls without target share and mutate the same list.",
                "Python converts mutable defaults to tuples automatically.",
                "It disables garbage collection on all local variables."
              ],
              "answer": 1,
              "explanation": "Default argument expressions are evaluated once when the function definition is executed, so the same mutable list persists and accumulates elements across calls."
            }
          ]
        },
        {
          "slug": "strings-and-text",
          "title": "Strings, Formatting, Slices & Regex",
          "description": "Comprehensive hands-on guide to strings, formatting, slices & regex in Python.",
          "duration": 15,
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
                "String creation and escaping",
                "All essential string methods",
                "String formatting (f-strings, .format())",
                "Regular expressions basics",
                "String slicing and manipulation"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 Creating Strings"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Single quotes, double quotes (identical)\ns1 = 'Hello'\ns2 = \"Hello\"\n\n# Triple quotes (multiline)\ns3 = \"\"\"This is a\nmultiline string\"\"\"\n\n# Raw strings (ignore escape characters)\npath = r\"C:\\Users\\name\\folder\"    # Backslashes are literal\nregex = r\"\\d+\\.\\d+\"\n\n# Escape characters\ntab = \"Col1\\tCol2\"        # Tab\nnewline = \"Line1\\nLine2\"  # Newline\nquote = \"He said \\\"hi\\\"\"  # Escaped quote\nbackslash = \"path\\\\file\"  # Literal backslash"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 String Methods"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Case Methods"
            },
            {
              "type": "code",
              "language": "python",
              "code": "s = \"hello World\"\ns.upper()          # \"HELLO WORLD\"\ns.lower()          # \"hello world\"\ns.title()          # \"Hello World\"\ns.capitalize()     # \"Hello world\"\ns.swapcase()       # \"HELLO wORLD\"\ns.casefold()       # \"hello world\" (aggressive lowercase for comparison)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Search & Check Methods"
            },
            {
              "type": "code",
              "language": "python",
              "code": "s = \"Hello, World! Hello!\"\n\ns.find(\"Hello\")         # 0 (first index, -1 if not found)\ns.rfind(\"Hello\")        # 14 (last occurrence)\ns.index(\"Hello\")        # 0 (like find, but raises ValueError if not found)\ns.count(\"Hello\")        # 2\n\ns.startswith(\"Hello\")   # True\ns.endswith(\"!\")          # True\n\"Hello\" in s             # True (membership test)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Check Content"
            },
            {
              "type": "code",
              "language": "python",
              "code": "\"abc123\".isalnum()     # True  (letters + numbers only)\n\"abc\".isalpha()        # True  (letters only)\n\"123\".isdigit()        # True  (digits only)\n\"123\".isnumeric()      # True  (numeric characters)\n\"  \".isspace()         # True  (whitespace only)\n\"Hello\".istitle()      # True  (title case)\n\"HELLO\".isupper()      # True\n\"hello\".islower()      # True"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Trim & Pad Methods"
            },
            {
              "type": "code",
              "language": "python",
              "code": "s = \"  Hello World  \"\ns.strip()              # \"Hello World\" (remove both sides)\ns.lstrip()             # \"Hello World  \" (remove left)\ns.rstrip()             # \"  Hello World\" (remove right)\ns.strip(\"*-\")          # Strip specific characters\n\n# Padding\n\"42\".zfill(5)          # \"00042\" (pad with zeros)\n\"hi\".ljust(10)         # \"hi        \" (left-justify, pad right)\n\"hi\".rjust(10)         # \"        hi\" (right-justify, pad left)\n\"hi\".center(10)        # \"    hi    \" (center)\n\"hi\".center(10, \"-\")   # \"----hi----\" (center with custom char)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Split & Join"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Split string into list\n\"apple,banana,cherry\".split(\",\")       # [\"apple\", \"banana\", \"cherry\"]\n\"Hello World\".split()                   # [\"Hello\", \"World\"] (default: whitespace)\n\"one::two::three\".split(\"::\", 1)       # [\"one\", \"two::three\"] (max 1 split)\n\"Line1\\nLine2\\nLine3\".splitlines()     # [\"Line1\", \"Line2\", \"Line3\"]\n\n# Join list into string\n\", \".join([\"apple\", \"banana\", \"cherry\"])  # \"apple, banana, cherry\"\n\"-\".join([\"2024\", \"01\", \"15\"])            # \"2024-01-15\"\n\"\".join([\"H\", \"e\", \"l\", \"l\", \"o\"])       # \"Hello\""
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Replace & Translate"
            },
            {
              "type": "code",
              "language": "python",
              "code": "s = \"Hello World\"\ns.replace(\"World\", \"Python\")       # \"Hello Python\"\ns.replace(\"l\", \"L\", 1)             # \"HeLlo World\" (max 1 replacement)\n\n# Translate (character-level replacement)\ntable = str.maketrans(\"aeiou\", \"12345\")\n\"hello world\".translate(table)     # \"h2ll4 w4rld\"\n\n# Remove specific characters\n\"hello!!??\".translate(str.maketrans(\"\", \"\", \"!?\"))  # \"hello\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 String Formatting"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "f-strings (Best — Python 3.6+)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "name, age = \"Aravind\", 25\n\n# Basic\nf\"Name: {name}, Age: {age}\"\n\n# Expressions inside\nf\"In 5 years: {age + 5}\"\nf\"Uppercase: {name.upper()}\"\n\n# Number formatting\npi = 3.14159\nf\"{pi:.2f}\"           # \"3.14\" (2 decimal places)\nf\"{1000000:,}\"        # \"1,000,000\" (thousands separator)\nf\"{0.15:.1%}\"         # \"15.0%\" (percentage)\nf\"{42:05d}\"           # \"00042\" (zero-padded, 5 digits)\nf\"{255:x}\"            # \"ff\" (hexadecimal)\nf\"{255:b}\"            # \"11111111\" (binary)\nf\"{255:o}\"            # \"377\" (octal)\n\n# Alignment\nf\"{'left':<20}\"       # \"left                \" (left-align)\nf\"{'right':>20}\"      # \"               right\" (right-align)\nf\"{'center':^20}\"     # \"       center       \" (center)\nf\"{'padded':*^20}\"    # \"*******padded*******\" (center with *)\n\n# Debugging (Python 3.8+)\nx = 42\nf\"{x = }\"             # \"x = 42\" (shows variable name AND value!)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "format() Method"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Positional\n\"{} is {} years old\".format(\"Aravind\", 25)\n\n# Indexed\n\"{0} likes {1}. {0} also likes {2}\".format(\"Aravind\", \"Python\", \"Docker\")\n\n# Named\n\"{name} is {age}\".format(name=\"Aravind\", age=25)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.4 String Slicing"
            },
            {
              "type": "code",
              "language": "python",
              "code": "s = \"Hello, World!\"\n\ns[0]       # \"H\"\ns[-1]      # \"!\"\ns[7:12]    # \"World\"\ns[:5]      # \"Hello\"\ns[7:]      # \"World!\"\ns[::2]     # \"Hlo ol!\"\ns[::-1]    # \"!dlroW ,olleH\" (reversed)\n\n# Strings are IMMUTABLE — cannot change in place\n# s[0] = \"h\"   # TypeError!\n# Instead, create a new string:\ns = \"h\" + s[1:]   # \"hello, World!\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.5 Useful String Patterns"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Check palindrome\ndef is_palindrome(s):\n    cleaned = s.lower().replace(\" \", \"\")\n    return cleaned == cleaned[::-1]\n\nprint(is_palindrome(\"Race Car\"))   # True\n\n# Count word frequency\ntext = \"the cat sat on the mat the cat\"\nwords = text.split()\nfreq = {}\nfor word in words:\n    freq[word] = freq.get(word, 0) + 1\n# {'the': 3, 'cat': 2, 'sat': 1, 'on': 1, 'mat': 1}\n\n# Or use Counter:\nfrom collections import Counter\nfreq = Counter(text.split())"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a function that reverses words in a sentence: \"Hello World\" → \"World Hello\"",
                "Count vowels, consonants, digits, and spaces in a string",
                "Implement a Caesar cipher (shift each letter by n positions)",
                "Format a table of data using f-string alignment"
              ]
            },
            {
              "type": "quiz",
              "question": "Why are Python strings immutable?",
              "options": [
                "Because strings cannot be converted into lists.",
                "To prevent string methods from using CPU cycles.",
                "To allow strings to be used as hashable dictionary keys and safely shared in memory.",
                "Because UTF-8 does not support in-place modification."
              ],
              "answer": 2,
              "explanation": "Immutability ensures string hashes remain constant throughout their lifecycle, allowing them to serve safely as dictionary keys and set elements with interned memory sharing."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Object-Oriented & Modular Python (Intermediate)",
      "lessons": [
        {
          "slug": "object-oriented-programming",
          "title": "Object-Oriented Programming (OOP) & Dunder Methods",
          "description": "Comprehensive hands-on guide to object-oriented programming (oop) & dunder methods in Python.",
          "duration": 25,
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
                "Classes and objects",
                "__init__`, `self`, attributes, methods",
                "Inheritance and method overriding",
                "Polymorphism",
                "Encapsulation (public, protected, private)",
                "Dunder (magic) methods",
                "Class methods, static methods, properties",
                "Abstract classes and interfaces",
                "Dataclasses"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 Classes and Objects"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Class?"
            },
            {
              "type": "paragraph",
              "text": "A **class** is a blueprint for creating objects. An **object** is an instance of a class."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": "A class is like a cookie cutter (blueprint), objects are the cookies (instances)."
            },
            {
              "type": "code",
              "language": "python",
              "code": "class Dog:\n    # Class attribute (shared by ALL dogs)\n    species = \"Canis lupus familiaris\"\n    \n    # Constructor (called when creating an object)\n    def __init__(self, name, breed, age):\n        # Instance attributes (unique to each dog)\n        self.name = name\n        self.breed = breed\n        self.age = age\n    \n    # Instance method\n    def bark(self):\n        return f\"{self.name} says Woof!\"\n    \n    def info(self):\n        return f\"{self.name} is a {self.age}-year-old {self.breed}\"\n\n# Creating objects (instances)\ndog1 = Dog(\"Buddy\", \"Golden Retriever\", 3)\ndog2 = Dog(\"Max\", \"German Shepherd\", 5)\n\nprint(dog1.bark())    # \"Buddy says Woof!\"\nprint(dog2.info())    # \"Max is a 5-year-old German Shepherd\"\nprint(Dog.species)    # \"Canis lupus familiaris\""
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is `self`?"
            },
            {
              "type": "paragraph",
              "text": "self` refers to the **current instance** of the class. It lets each object access its own attributes and methods."
            },
            {
              "type": "code",
              "language": "python",
              "code": "class Counter:\n    def __init__(self):\n        self.count = 0     # 'self' = the specific Counter object\n    \n    def increment(self):\n        self.count += 1    # Modify THIS object's count\n    \n# c1 and c2 have SEPARATE count values\nc1 = Counter()\nc2 = Counter()\nc1.increment()\nc1.increment()\nprint(c1.count)   # 2\nprint(c2.count)   # 0 (untouched!)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 Inheritance"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is Inheritance?"
            },
            {
              "type": "paragraph",
              "text": "**Inheritance** lets a class (child) inherit attributes and methods from another class (parent). This promotes code reuse."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Parent class\nclass Animal:\n    def __init__(self, name, sound):\n        self.name = name\n        self.sound = sound\n    \n    def speak(self):\n        return f\"{self.name} says {self.sound}!\"\n\n# Child class (inherits from Animal)\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name, \"Woof\")   # Call parent constructor\n        self.breed = breed\n    \n    def fetch(self):\n        return f\"{self.name} fetches the ball!\"\n\nclass Cat(Animal):\n    def __init__(self, name):\n        super().__init__(name, \"Meow\")\n    \n    def purr(self):\n        return f\"{self.name} is purring...\"\n\ndog = Dog(\"Buddy\", \"Lab\")\nprint(dog.speak())    # \"Buddy says Woof!\" (inherited)\nprint(dog.fetch())    # \"Buddy fetches the ball!\" (own method)\n\ncat = Cat(\"Whiskers\")\nprint(cat.speak())    # \"Whiskers says Meow!\" (inherited)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Method Overriding"
            },
            {
              "type": "code",
              "language": "python",
              "code": "class Shape:\n    def area(self):\n        return 0\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):                    # Override parent method\n        return 3.14159 * self.radius ** 2\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):                    # Override parent method\n        return self.width * self.height"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Multiple Inheritance"
            },
            {
              "type": "code",
              "language": "python",
              "code": "class Flyable:\n    def fly(self):\n        return \"Flying!\"\n\nclass Swimmable:\n    def swim(self):\n        return \"Swimming!\"\n\nclass Duck(Flyable, Swimmable):    # Inherits from BOTH\n    def quack(self):\n        return \"Quack!\"\n\nduck = Duck()\nprint(duck.fly())     # \"Flying!\"\nprint(duck.swim())    # \"Swimming!\"\nprint(duck.quack())   # \"Quack!\"\n\n# Check MRO (Method Resolution Order)\nprint(Duck.__mro__)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Encapsulation"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Access Modifiers (Convention)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "class BankAccount:\n    def __init__(self, owner, balance):\n        self.owner = owner          # Public (anyone can access)\n        self._account_type = \"Savings\"  # Protected (convention: internal use)\n        self.__balance = balance    # Private (name-mangled)\n    \n    # Public method to access private data\n    def get_balance(self):\n        return self.__balance\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n    \n    def withdraw(self, amount):\n        if 0 < amount <= self.__balance:\n            self.__balance -= amount\n        else:\n            print(\"Insufficient funds!\")\n\nacc = BankAccount(\"Aravind\", 1000)\nprint(acc.owner)           # ✅ \"Aravind\" (public)\nprint(acc._account_type)   # ⚠️ Works but shouldn't (protected)\n# print(acc.__balance)     # ❌ AttributeError (private)\nprint(acc.get_balance())   # ✅ 1000 (via public method)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.4 Dunder (Magic) Methods"
            },
            {
              "type": "paragraph",
              "text": "**Dunder methods** (double underscore) let your objects work with built-in Python operations like `+`, `==`, `print()`, `len()`."
            },
            {
              "type": "code",
              "language": "python",
              "code": "class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __repr__(self):                # Developer representation\n        return f\"Vector({self.x}, {self.y})\"\n    \n    def __str__(self):                 # User-friendly string\n        return f\"({self.x}, {self.y})\"\n    \n    def __add__(self, other):          # v1 + v2\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __sub__(self, other):          # v1 - v2\n        return Vector(self.x - other.x, self.y - other.y)\n    \n    def __eq__(self, other):           # v1 == v2\n        return self.x == other.x and self.y == other.y\n    \n    def __len__(self):                 # len(v)\n        return int((self.x**2 + self.y**2) ** 0.5)\n    \n    def __getitem__(self, index):      # v[0], v[1]\n        if index == 0: return self.x\n        if index == 1: return self.y\n        raise IndexError(\"Index out of range\")\n    \n    def __contains__(self, value):     # 'in' operator\n        return value == self.x or value == self.y\n    \n    def __bool__(self):                # bool(v), if v:\n        return self.x != 0 or self.y != 0\n\nv1 = Vector(3, 4)\nv2 = Vector(1, 2)\nprint(v1 + v2)       # (4, 6)\nprint(v1 == v2)      # False\nprint(len(v1))        # 5\nprint(v1[0])          # 3\nprint(3 in v1)        # True"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Common Dunder Methods Reference"
            },
            {
              "type": "table",
              "headers": [
                "Method",
                "Triggered By",
                "Example"
              ],
              "rows": [
                [
                  "__init__`",
                  "obj = Class()`",
                  "Constructor",
                  ""
                ],
                [
                  "__str__`",
                  "str(obj)`, `print(obj)`",
                  "Human-readable",
                  ""
                ],
                [
                  "__repr__`",
                  "repr(obj)`, debugger",
                  "Developer-readable",
                  ""
                ],
                [
                  "__len__`",
                  "len(obj)`",
                  "Length",
                  ""
                ],
                [
                  "__getitem__`",
                  "obj[key]`",
                  "Index/key access",
                  ""
                ],
                [
                  "__setitem__`",
                  "obj[key] = val`",
                  "Index/key assignment",
                  ""
                ],
                [
                  "__contains__`",
                  "item in obj`",
                  "Membership",
                  ""
                ],
                [
                  "__add__`",
                  "obj1 + obj2`",
                  "Addition",
                  ""
                ],
                [
                  "__eq__`",
                  "obj1 == obj2`",
                  "Equality",
                  ""
                ],
                [
                  "__lt__`",
                  "obj1 < obj2`",
                  "Less than",
                  ""
                ],
                [
                  "__hash__`",
                  "hash(obj)`",
                  "Hashing (for sets/dicts)",
                  ""
                ],
                [
                  "__call__`",
                  "obj()`",
                  "Make object callable",
                  ""
                ],
                [
                  "__iter__`",
                  "for x in obj`",
                  "Iteration",
                  ""
                ],
                [
                  "__enter__`/`__exit__`",
                  "with obj`",
                  "Context manager",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.5 Class Methods & Static Methods"
            },
            {
              "type": "code",
              "language": "python",
              "code": "class Employee:\n    raise_amount = 1.05               # Class attribute\n    employee_count = 0\n    \n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n        Employee.employee_count += 1\n    \n    # Instance method — operates on instance (self)\n    def apply_raise(self):\n        self.salary *= self.raise_amount\n    \n    # Class method — operates on class (cls), not instance\n    @classmethod\n    def set_raise_amount(cls, amount):\n        cls.raise_amount = amount\n    \n    # Class method as alternative constructor\n    @classmethod\n    def from_string(cls, emp_str):\n        name, salary = emp_str.split(\"-\")\n        return cls(name, int(salary))\n    \n    # Static method — no access to instance or class\n    @staticmethod\n    def is_workday(day):\n        return day.weekday() < 5\n\n# Usage\nemp = Employee.from_string(\"Aravind-75000\")\nEmployee.set_raise_amount(1.10)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.6 Properties"
            },
            {
              "type": "code",
              "language": "python",
              "code": "class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self._celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError(\"Temperature below absolute zero!\")\n        self._celsius = value\n    \n    @property\n    def fahrenheit(self):\n        return self._celsius * 9/5 + 32\n\nt = Temperature(25)\nprint(t.celsius)       # 25 (getter)\nprint(t.fahrenheit)    # 77.0 (computed property)\nt.celsius = 30         # setter (with validation)\n# t.celsius = -300     # ValueError!"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.7 Abstract Classes"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from abc import ABC, abstractmethod\n\nclass Shape(ABC):                  # Abstract base class\n    @abstractmethod\n    def area(self):\n        pass                       # Must be implemented by subclasses\n    \n    @abstractmethod\n    def perimeter(self):\n        pass\n\n# shape = Shape()                  # TypeError! Can't instantiate abstract\n\nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):                # MUST implement\n        return 3.14159 * self.radius ** 2\n    \n    def perimeter(self):           # MUST implement\n        return 2 * 3.14159 * self.radius"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.8 Dataclasses (Python 3.7+)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from dataclasses import dataclass, field\n\n@dataclass\nclass User:\n    name: str\n    age: int\n    email: str\n    active: bool = True\n    tags: list = field(default_factory=list)\n\n# Auto-generates __init__, __repr__, __eq__!\nuser = User(\"Aravind\", 25, \"aravind@email.com\")\nprint(user)   # User(name='Aravind', age=25, email='aravind@email.com', active=True, tags=[])\n\nuser2 = User(\"Aravind\", 25, \"aravind@email.com\")\nprint(user == user2)   # True (auto __eq__)\n\n# Frozen (immutable)\n@dataclass(frozen=True)\nclass Point:\n    x: float\n    y: float\n\np = Point(3.0, 4.0)\n# p.x = 5.0   # FrozenInstanceError!"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a `BankAccount` class with deposit, withdraw, and transfer methods",
                "Build a class hierarchy: `Shape` → `Circle`, `Rectangle`, `Triangle` with `area()` and `perimeter()`",
                "Implement a `__add__` method that lets you add two custom objects",
                "Create a `Student` dataclass and sort a list of students by GPA"
              ]
            },
            {
              "type": "quiz",
              "question": "What is the primary difference between __str__ and __repr__ in Python classes?",
              "options": [
                "__str__ is meant for user-friendly readable display, whereas __repr__ is intended for unambiguous debugging representation.",
                "__str__ returns an integer, while __repr__ returns a string.",
                "__repr__ only works in Python 2.",
                "__str__ is called by print(), but __repr__ is never called automatically."
              ],
              "answer": 0,
              "explanation": "__str__ provides an informal, human-friendly representation for end-users, while __repr__ provides an unambiguous representation ideally evaluable with eval()."
            }
          ]
        },
        {
          "slug": "files-and-error-handling",
          "title": "File Operations, Context Managers & Exception Handling",
          "description": "Comprehensive hands-on guide to file operations, context managers & exception handling in Python.",
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
                "Reading and writing text files",
                "Working with CSV, JSON, and binary files",
                "Context managers (with statement)",
                "Exception handling (try/except/finally)",
                "Custom exceptions",
                "Logging"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Reading Files"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Method 1: Using 'with' statement (BEST — auto-closes file)\nwith open(\"data.txt\", \"r\") as f:\n    content = f.read()           # Read entire file as string\n\nwith open(\"data.txt\", \"r\") as f:\n    lines = f.readlines()        # Read all lines as list\n\nwith open(\"data.txt\", \"r\") as f:\n    for line in f:               # Read line by line (memory efficient)\n        print(line.strip())\n\nwith open(\"data.txt\", \"r\") as f:\n    first_line = f.readline()    # Read single line"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "File Modes"
            },
            {
              "type": "table",
              "headers": [
                "Mode",
                "Description"
              ],
              "rows": [
                [
                  "r\"`",
                  "Read (default). Error if file doesn't exist",
                  ""
                ],
                [
                  "w\"`",
                  "Write. Creates file or **overwrites** existing",
                  ""
                ],
                [
                  "a\"`",
                  "Append. Creates file or adds to end",
                  ""
                ],
                [
                  "x\"`",
                  "Create. Error if file already exists",
                  ""
                ],
                [
                  "r+\"`",
                  "Read + Write",
                  ""
                ],
                [
                  "b\"`",
                  "Binary mode (add to any: `\"rb\"`, `\"wb\"`)",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 Writing Files"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Write (creates or overwrites)\nwith open(\"output.txt\", \"w\") as f:\n    f.write(\"Hello, World!\\n\")\n    f.write(\"Second line\\n\")\n\n# Write multiple lines\nlines = [\"Line 1\\n\", \"Line 2\\n\", \"Line 3\\n\"]\nwith open(\"output.txt\", \"w\") as f:\n    f.writelines(lines)\n\n# Append (add to end without erasing)\nwith open(\"log.txt\", \"a\") as f:\n    f.write(\"New log entry\\n\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.3 Working with CSV"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import csv\n\n# Reading CSV\nwith open(\"data.csv\", \"r\") as f:\n    reader = csv.reader(f)\n    header = next(reader)          # Skip header row\n    for row in reader:\n        print(row)                 # ['Alice', '25', 'NYC']\n\n# Reading CSV as dictionaries\nwith open(\"data.csv\", \"r\") as f:\n    reader = csv.DictReader(f)\n    for row in reader:\n        print(row[\"name\"], row[\"age\"])\n\n# Writing CSV\nwith open(\"output.csv\", \"w\", newline=\"\") as f:\n    writer = csv.writer(f)\n    writer.writerow([\"name\", \"age\", \"city\"])       # Header\n    writer.writerow([\"Aravind\", 25, \"Hyderabad\"])  # Row\n    writer.writerows([                              # Multiple rows\n        [\"Alice\", 30, \"NYC\"],\n        [\"Bob\", 28, \"LA\"]\n    ])"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.4 Working with JSON"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import json\n\n# Python dict → JSON string\ndata = {\"name\": \"Aravind\", \"age\": 25, \"skills\": [\"Python\", \"Docker\"]}\njson_str = json.dumps(data, indent=2)\nprint(json_str)\n\n# JSON string → Python dict\nparsed = json.loads(json_str)\nprint(parsed[\"name\"])\n\n# Write JSON to file\nwith open(\"data.json\", \"w\") as f:\n    json.dump(data, f, indent=2)\n\n# Read JSON from file\nwith open(\"data.json\", \"r\") as f:\n    loaded = json.load(f)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.5 Path Handling (pathlib)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from pathlib import Path\n\n# Create path objects\np = Path(\"data/files/report.txt\")\n\np.name           # \"report.txt\"\np.stem           # \"report\"\np.suffix         # \".txt\"\np.parent         # Path(\"data/files\")\np.exists()       # True/False\np.is_file()      # True/False\np.is_dir()       # True/False\n\n# Create directories\nPath(\"data/output\").mkdir(parents=True, exist_ok=True)\n\n# List files\nfor f in Path(\".\").glob(\"*.py\"):\n    print(f)\n\n# Recursive glob\nfor f in Path(\".\").rglob(\"*.txt\"):\n    print(f)\n\n# Read/write with pathlib\ncontent = Path(\"data.txt\").read_text()\nPath(\"output.txt\").write_text(\"Hello!\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.6 Exception Handling"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "try / except / else / finally"
            },
            {
              "type": "code",
              "language": "python",
              "code": "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero!\")\nexcept (TypeError, ValueError) as e:\n    print(f\"Error: {e}\")\nexcept Exception as e:             # Catch ANY exception\n    print(f\"Unexpected error: {e}\")\nelse:\n    print(\"Success!\")              # Runs only if NO exception\nfinally:\n    print(\"Cleanup here\")         # ALWAYS runs"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Common Exception Types"
            },
            {
              "type": "table",
              "headers": [
                "Exception",
                "When"
              ],
              "rows": [
                [
                  "ValueError`",
                  "Wrong value type: `int(\"abc\")`",
                  ""
                ],
                [
                  "TypeError`",
                  "Wrong type: `\"2\" + 2`",
                  ""
                ],
                [
                  "KeyError`",
                  "Missing dict key: `d[\"missing\"]`",
                  ""
                ],
                [
                  "IndexError`",
                  "List index out of range: `[1,2][5]`",
                  ""
                ],
                [
                  "FileNotFoundError`",
                  "File doesn't exist",
                  ""
                ],
                [
                  "AttributeError`",
                  "Missing attribute: `\"str\".foo()`",
                  ""
                ],
                [
                  "ImportError`",
                  "Module not found",
                  ""
                ],
                [
                  "ZeroDivisionError`",
                  "Division by zero",
                  ""
                ],
                [
                  "StopIteration`",
                  "Iterator exhausted",
                  ""
                ],
                [
                  "PermissionError`",
                  "No file permission",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Custom Exceptions"
            },
            {
              "type": "code",
              "language": "python",
              "code": "class InsufficientFundsError(Exception):\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(\n            f\"Cannot withdraw ${amount}. Balance: ${balance}\"\n        )\n\nclass BankAccount:\n    def __init__(self, balance):\n        self.balance = balance\n    \n    def withdraw(self, amount):\n        if amount > self.balance:\n            raise InsufficientFundsError(self.balance, amount)\n        self.balance -= amount\n\ntry:\n    acc = BankAccount(100)\n    acc.withdraw(200)\nexcept InsufficientFundsError as e:\n    print(e)   # Cannot withdraw $200. Balance: $100"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.7 Logging"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import logging\n\n# Basic setup\nlogging.basicConfig(\n    level=logging.DEBUG,\n    format=\"%(asctime)s - %(name)s - %(levelname)s - %(message)s\",\n    filename=\"app.log\"\n)\n\nlogger = logging.getLogger(__name__)\n\n# Log levels (from lowest to highest severity)\nlogger.debug(\"Detailed diagnostic info\")\nlogger.info(\"General information\")\nlogger.warning(\"Something unexpected\")\nlogger.error(\"Something failed\")\nlogger.critical(\"System is down!\")\n\n# Log with exception traceback\ntry:\n    1 / 0\nexcept:\n    logger.exception(\"An error occurred\")  # Includes full traceback"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Read a CSV file, filter rows where age > 25, write results to a new CSV",
                "Create a JSON config file, read it, modify values, save back",
                "Write a custom exception hierarchy for a library system",
                "Set up logging that writes to both console and a file"
              ]
            },
            {
              "type": "quiz",
              "question": "Which dunder methods must a class implement to support the with statement (Context Manager)?",
              "options": [
                "__open__ and __close__",
                "__start__ and __stop__",
                "__init__ and __del__",
                "__enter__ and __exit__"
              ],
              "answer": 3,
              "explanation": "Python's context manager protocol requires __enter__() (executed before entering the block) and __exit__() (executed upon exiting, handling any raised exceptions)."
            }
          ]
        },
        {
          "slug": "modules-packages-and-environments",
          "title": "Modules, Packages, Virtual Environments & Pip",
          "description": "Comprehensive hands-on guide to modules, packages, virtual environments & pip in Python.",
          "duration": 15,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Importing modules",
                "Creating your own modules and packages",
                "__init__.py`, `__name__`, `__main__`",
                "Virtual environments",
                "pip and package management"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Modules"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Module?"
            },
            {
              "type": "paragraph",
              "text": "A **module** is simply a `.py` file containing Python code. It lets you organize and reuse code across files."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# math_utils.py (this IS a module)\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\nPI = 3.14159"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Importing"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Import entire module\nimport math_utils\nprint(math_utils.add(3, 5))\n\n# Import specific items\nfrom math_utils import add, PI\nprint(add(3, 5))\nprint(PI)\n\n# Import with alias\nimport math_utils as mu\nprint(mu.add(3, 5))\n\n# Import everything (avoid in production!)\nfrom math_utils import *\n\n# Check what's in a module\nimport math\nprint(dir(math))   # Lists all functions/variables"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Packages"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Package?"
            },
            {
              "type": "paragraph",
              "text": "A **package** is a directory containing multiple modules and a special `__init__.py` file."
            },
            {
              "type": "code",
              "language": "python",
              "code": "my_project/\n├── main.py\n└── utils/                  # This is a package\n    ├── __init__.py         # Makes it a package\n    ├── string_utils.py     # Module 1\n    ├── math_utils.py       # Module 2\n    └── file_utils.py       # Module 3"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# __init__.py — controls what's exported\nfrom .string_utils import clean_text\nfrom .math_utils import add, multiply\n\n# main.py\nfrom utils import clean_text, add\nfrom utils.file_utils import read_csv"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.3 `__name__` and `__main__`"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# my_module.py\ndef main():\n    print(\"Running as main program\")\n\ndef helper():\n    return \"I'm a helper\"\n\n# This block runs ONLY when the file is executed directly\n# NOT when imported by another file\nif __name__ == \"__main__\":\n    main()\n\n# Running directly: python my_module.py  → \"Running as main program\"\n# Importing: import my_module             → Nothing happens"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.4 Virtual Environments"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Virtual Environment?"
            },
            {
              "type": "paragraph",
              "text": "A **virtual environment** is an isolated Python installation that has its own packages, separate from your system Python. This prevents package conflicts between projects."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create virtual environment\npython -m venv venv\n\n# Activate\n# Windows:\nvenv\\Scripts\\activate\n# Mac/Linux:\nsource venv/bin/activate\n\n# Deactivate\ndeactivate\n\n# Your terminal shows (venv) when activated:\n# (venv) C:\\Projects\\myapp>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.5 pip — Package Manager"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Install a package\npip install requests\npip install requests==2.31.0          # Specific version\npip install \"requests>=2.28,<3.0\"     # Version range\n\n# Uninstall\npip uninstall requests\n\n# List installed packages\npip list\npip freeze                            # Output format for requirements.txt\n\n# Save/restore dependencies\npip freeze > requirements.txt         # Save\npip install -r requirements.txt       # Install from file\n\n# Upgrade\npip install --upgrade requests\npip install --upgrade pip             # Upgrade pip itself\n\n# Search for packages at https://pypi.org"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "requirements.txt"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# requirements.txt\nrequests==2.31.0\nflask==3.0.0\nnumpy>=1.24\npandas~=2.0         # Compatible release (2.0.x)\npython-dotenv       # Latest version"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.6 Popular Third-Party Packages"
            },
            {
              "type": "table",
              "headers": [
                "Package",
                "Purpose"
              ],
              "rows": [
                [
                  "requests`",
                  "HTTP requests",
                  ""
                ],
                [
                  "flask` / `fastapi`",
                  "Web frameworks",
                  ""
                ],
                [
                  "numpy`",
                  "Numerical computing",
                  ""
                ],
                [
                  "pandas`",
                  "Data manipulation",
                  ""
                ],
                [
                  "pytest`",
                  "Testing",
                  ""
                ],
                [
                  "black`",
                  "Code formatter",
                  ""
                ],
                [
                  "ruff`",
                  "Fast linter",
                  ""
                ],
                [
                  "python-dotenv`",
                  "Load .env files",
                  ""
                ],
                [
                  "pydantic`",
                  "Data validation",
                  ""
                ],
                [
                  "sqlalchemy`",
                  "Database ORM",
                  ""
                ]
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a package with 3 modules, import and use functions from each",
                "Set up a virtual environment, install 3 packages, freeze to `requirements.txt`",
                "Create a module with `if __name__ == \"__main__\"` that works both as script and import"
              ]
            },
            {
              "type": "quiz",
              "question": "What is the purpose of the if __name__ == \"__main__\": guard in Python scripts?",
              "options": [
                "It checks whether the script is running with administrator/root permissions.",
                "It allows code inside the block to run only when executed directly as a script, but not when imported as a module.",
                "It validates that all required package dependencies are installed.",
                "It forces the Python interpreter to run in multi-threaded mode."
              ],
              "answer": 1,
              "explanation": "When a Python file is run directly, its __name__ is set to \"__main__\". When imported into another file, __name__ is set to the module's filename, bypassing the guarded code."
            }
          ]
        },
        {
          "slug": "functional-programming",
          "title": "Functional Python: Comprehensions, Map/Filter & Itertools",
          "description": "Comprehensive hands-on guide to functional python: comprehensions, map/filter & itertools in Python.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "First-class functions",
                "map(), filter(), reduce()",
                "functools (partial, lru_cache, wraps)",
                "itertools (chain, product, combinations, groupby)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 First-Class Functions"
            },
            {
              "type": "paragraph",
              "text": "In Python, functions are **first-class objects** — they can be assigned to variables, passed as arguments, and returned from other functions."
            },
            {
              "type": "code",
              "language": "python",
              "code": "def greet(name):\n    return f\"Hello, {name}!\"\n\n# Assign function to variable\nsay_hello = greet\nprint(say_hello(\"Aravind\"))    # \"Hello, Aravind!\"\n\n# Pass function as argument\ndef apply(func, value):\n    return func(value)\n\nprint(apply(str.upper, \"hello\"))   # \"HELLO\"\nprint(apply(len, [1, 2, 3]))      # 3\n\n# Return function from function\ndef make_greeter(greeting):\n    def greeter(name):\n        return f\"{greeting}, {name}!\"\n    return greeter\n\nhi = make_greeter(\"Hi\")\nprint(hi(\"Aravind\"))   # \"Hi, Aravind!\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 map(), filter(), reduce()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "map() — Transform Each Item"
            },
            {
              "type": "code",
              "language": "python",
              "code": "numbers = [1, 2, 3, 4, 5]\n\n# Apply function to every item\nsquared = list(map(lambda x: x**2, numbers))\n# [1, 4, 9, 16, 25]\n\n# With named function\ndef double(x):\n    return x * 2\ndoubled = list(map(double, numbers))\n# [2, 4, 6, 8, 10]\n\n# map with multiple iterables\na = [1, 2, 3]\nb = [10, 20, 30]\nsums = list(map(lambda x, y: x + y, a, b))\n# [11, 22, 33]\n\n# Equivalent list comprehension (preferred in Python):\nsquared = [x**2 for x in numbers]"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "filter() — Keep Items That Pass Test"
            },
            {
              "type": "code",
              "language": "python",
              "code": "numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\nevens = list(filter(lambda x: x % 2 == 0, numbers))\n# [2, 4, 6, 8, 10]\n\n# Filter out None/falsy values\ndata = [0, 1, \"\", \"hello\", None, True, False, [], [1]]\ntruthy = list(filter(None, data))\n# [1, \"hello\", True, [1]]\n\n# Equivalent comprehension (preferred):\nevens = [x for x in numbers if x % 2 == 0]"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "reduce() — Combine All Items Into One"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from functools import reduce\n\nnumbers = [1, 2, 3, 4, 5]\n\n# Sum all numbers\ntotal = reduce(lambda acc, x: acc + x, numbers)    # 15\n\n# Find maximum\nmaximum = reduce(lambda a, b: a if a > b else b, numbers)  # 5\n\n# With initial value\ntotal = reduce(lambda acc, x: acc + x, numbers, 100)  # 115\n\n# How reduce works:\n# Step 1: acc=1, x=2 → 3\n# Step 2: acc=3, x=3 → 6\n# Step 3: acc=6, x=4 → 10\n# Step 4: acc=10, x=5 → 15"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.3 functools"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from functools import partial, lru_cache, wraps, reduce\n\n# partial — pre-fill some arguments\ndef power(base, exponent):\n    return base ** exponent\n\nsquare = partial(power, exponent=2)\ncube = partial(power, exponent=3)\nprint(square(5))    # 25\nprint(cube(3))      # 27\n\n# lru_cache — memoize function results (caching)\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(100))   # Instant! (without cache: impossibly slow)\nprint(fibonacci.cache_info())  # CacheInfo(hits=98, misses=101, ...)\n\n# wraps — preserve function metadata in decorators\ndef my_decorator(func):\n    @wraps(func)        # Without this, func.__name__ would be \"wrapper\"\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.4 itertools"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from itertools import (\n    chain, count, cycle, repeat,\n    product, permutations, combinations,\n    groupby, islice, accumulate, starmap, compress\n)\n\n# chain — combine multiple iterables\nlist(chain([1, 2], [3, 4], [5]))         # [1, 2, 3, 4, 5]\n\n# count — infinite counter\n# for i in count(10, 2):   # 10, 12, 14, 16, ...\n\n# cycle — repeat infinitely\n# colors = cycle([\"red\", \"green\", \"blue\"])\n\n# repeat\nlist(repeat(\"hello\", 3))                  # [\"hello\", \"hello\", \"hello\"]\n\n# product — cartesian product\nlist(product(\"AB\", \"12\"))\n# [('A','1'), ('A','2'), ('B','1'), ('B','2')]\n\n# permutations — all orderings\nlist(permutations([1, 2, 3], 2))\n# [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]\n\n# combinations — unique groups (order doesn't matter)\nlist(combinations([1, 2, 3, 4], 2))\n# [(1,2), (1,3), (1,4), (2,3), (2,4), (3,4)]\n\n# groupby — group consecutive items\ndata = sorted([\"apple\", \"avocado\", \"banana\", \"blueberry\", \"cherry\"])\nfor letter, group in groupby(data, key=lambda x: x[0]):\n    print(f\"{letter}: {list(group)}\")\n# a: ['apple', 'avocado']\n# b: ['banana', 'blueberry']\n# c: ['cherry']\n\n# islice — slice any iterator\nfrom itertools import islice\nlist(islice(range(100), 5, 10))          # [5, 6, 7, 8, 9]\n\n# accumulate — running total\nlist(accumulate([1, 2, 3, 4, 5]))        # [1, 3, 6, 10, 15]"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Use `map` and `filter` together to get squares of even numbers from 1-20",
                "Implement `flatten` using `reduce` to flatten a nested list",
                "Use `lru_cache` to memoize an expensive computation",
                "Generate all possible 3-letter combinations from \"ABCDE\" using `itertools`"
              ]
            },
            {
              "type": "quiz",
              "question": "How do list comprehensions differ from generator expressions in memory consumption?",
              "options": [
                "List comprehensions use O(1) memory, whereas generator expressions load everything into RAM.",
                "List comprehensions build the entire list in memory immediately, whereas generator expressions yield items lazily on demand.",
                "Both allocate the exact same memory buffer.",
                "Generator expressions cannot be iterated with a for loop."
              ],
              "answer": 1,
              "explanation": "List comprehensions ([x for x in seq]) eagerly construct the full list in memory, while generator expressions ((x for x in seq)) produce an iterator that yields one item at a time lazily with O(1) memory overhead."
            }
          ]
        },
        {
          "slug": "standard-library-essentials",
          "title": "Python Standard Library: Collections, Datetime & Pathlib",
          "description": "Comprehensive hands-on guide to python standard library: collections, datetime & pathlib in Python.",
          "duration": 25,
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
                "collections (Counter, defaultdict, namedtuple, deque, OrderedDict)",
                "datetime & time",
                "os & sys",
                "re (regular expressions)",
                "hashlib, secrets",
                "subprocess",
                "copy (shallow vs deep)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.1 collections"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Counter"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from collections import Counter\n\n# Count occurrences\nwords = \"the cat sat on the mat the cat\".split()\ncount = Counter(words)\nprint(count)                    # Counter({'the': 3, 'cat': 2, ...})\nprint(count.most_common(2))    # [('the', 3), ('cat', 2)]\nprint(count[\"cat\"])             # 2\n\n# Arithmetic with Counters\nc1 = Counter(a=3, b=1)\nc2 = Counter(a=1, b=2)\nprint(c1 + c2)   # Counter({'a': 4, 'b': 3})\nprint(c1 - c2)   # Counter({'a': 2})"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "defaultdict"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from collections import defaultdict\n\n# Regular dict raises KeyError for missing keys\n# defaultdict provides a default value automatically\n\n# Group items\nwords = [\"apple\", \"avocado\", \"banana\", \"blueberry\", \"cherry\"]\nby_letter = defaultdict(list)\nfor word in words:\n    by_letter[word[0]].append(word)\n# {'a': ['apple', 'avocado'], 'b': ['banana', 'blueberry'], 'c': ['cherry']}\n\n# Count items (alternative to Counter)\ncounter = defaultdict(int)\nfor word in \"hello world\".split():\n    counter[word] += 1"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "namedtuple"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from collections import namedtuple\n\n# Like a lightweight class or struct\nPoint = namedtuple(\"Point\", [\"x\", \"y\"])\np = Point(3, 4)\nprint(p.x, p.y)     # 3 4 (access by name!)\nprint(p[0], p[1])   # 3 4 (also by index)\n\n# With defaults\nEmployee = namedtuple(\"Employee\", [\"name\", \"dept\", \"salary\"], defaults=[\"Engineering\", 50000])\nemp = Employee(\"Aravind\")\nprint(emp)   # Employee(name='Aravind', dept='Engineering', salary=50000)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "deque (Double-Ended Queue)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from collections import deque\n\n# O(1) append/pop from BOTH ends (list is O(n) for left operations!)\nd = deque([1, 2, 3])\nd.appendleft(0)     # [0, 1, 2, 3]\nd.append(4)          # [0, 1, 2, 3, 4]\nd.popleft()          # 0 → [1, 2, 3, 4]\nd.pop()              # 4 → [1, 2, 3]\nd.rotate(1)          # [3, 1, 2] (rotate right)\nd.rotate(-1)         # [1, 2, 3] (rotate left)\n\n# Fixed-size deque (auto-drops oldest)\nlast_5 = deque(maxlen=5)\nfor i in range(10):\n    last_5.append(i)\nprint(last_5)        # deque([5, 6, 7, 8, 9])"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.2 datetime"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from datetime import datetime, date, time, timedelta\n\n# Current date and time\nnow = datetime.now()\ntoday = date.today()\n\n# Create specific datetime\ndt = datetime(2024, 1, 15, 10, 30, 0)\n\n# Formatting (datetime → string)\nnow.strftime(\"%Y-%m-%d %H:%M:%S\")    # \"2024-01-15 10:30:00\"\nnow.strftime(\"%B %d, %Y\")             # \"January 15, 2024\"\nnow.strftime(\"%I:%M %p\")              # \"10:30 AM\"\n\n# Parsing (string → datetime)\ndt = datetime.strptime(\"2024-01-15\", \"%Y-%m-%d\")\n\n# Arithmetic with timedelta\ntomorrow = today + timedelta(days=1)\nnext_week = today + timedelta(weeks=1)\ntwo_hours_later = now + timedelta(hours=2)\ndifference = datetime(2024, 12, 31) - datetime(2024, 1, 1)\nprint(difference.days)   # 365\n\n# Common format codes:\n# %Y=year, %m=month, %d=day, %H=hour(24), %I=hour(12)\n# %M=minute, %S=second, %p=AM/PM, %B=month name, %A=day name"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.3 os & sys"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import os\nimport sys\n\n# Environment variables\ndb_url = os.environ.get(\"DATABASE_URL\", \"sqlite:///default.db\")\nos.environ[\"MY_VAR\"] = \"hello\"\n\n# File system operations\nos.getcwd()                        # Current working directory\nos.listdir(\".\")                    # List directory contents\nos.makedirs(\"path/to/dir\", exist_ok=True)  # Create dirs\nos.path.exists(\"file.txt\")        # Check if exists\nos.path.join(\"folder\", \"file.txt\") # Platform-safe path joining\nos.path.getsize(\"file.txt\")       # File size in bytes\nos.rename(\"old.txt\", \"new.txt\")   # Rename\nos.remove(\"file.txt\")             # Delete file\n\n# sys\nsys.argv               # Command-line arguments\nsys.path               # Module search paths\nsys.version            # Python version\nsys.exit(0)            # Exit program\nsys.getsizeof(obj)     # Memory size of object in bytes\nsys.platform           # 'win32', 'linux', 'darwin'"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.4 Regular Expressions (re)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import re\n\ntext = \"Call me at 123-456-7890 or 987-654-3210\"\n\n# Search for first match\nmatch = re.search(r\"\\d{3}-\\d{3}-\\d{4}\", text)\nif match:\n    print(match.group())   # \"123-456-7890\"\n\n# Find ALL matches\nphones = re.findall(r\"\\d{3}-\\d{3}-\\d{4}\", text)\n# [\"123-456-7890\", \"987-654-3210\"]\n\n# Replace\ncleaned = re.sub(r\"\\d{3}-\\d{3}-\\d{4}\", \"[REDACTED]\", text)\n# \"Call me at [REDACTED] or [REDACTED]\"\n\n# Split\nparts = re.split(r\"[,;]\\s*\", \"apple, banana; cherry, date\")\n# [\"apple\", \"banana\", \"cherry\", \"date\"]\n\n# Groups (capture parts of match)\nmatch = re.search(r\"(\\d{3})-(\\d{3})-(\\d{4})\", text)\nprint(match.group(1))   # \"123\" (area code)\nprint(match.group(2))   # \"456\"\nprint(match.groups())   # (\"123\", \"456\", \"7890\")\n\n# Named groups\npattern = r\"(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})\"\nmatch = re.search(pattern, \"Date: 2024-01-15\")\nprint(match.group(\"year\"))    # \"2024\"\n\n# Common patterns:\n# \\d     digit           \\D     non-digit\n# \\w     word char       \\W     non-word\n# \\s     whitespace      \\S     non-whitespace\n# .      any char        ^      start of string\n# $      end of string   *      0 or more\n# +      1 or more       ?      0 or 1\n# {n}    exactly n       {n,m}  n to m\n# [abc]  char class      [^abc] negated class\n# (...)  capture group   (?:...) non-capture group"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.5 Other Useful Modules"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "hashlib & secrets"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import hashlib\nimport secrets\n\n# Hashing\nhash_obj = hashlib.sha256(b\"password123\")\nprint(hash_obj.hexdigest())   # \"ef92b778...\"\n\n# Secure random (for passwords, tokens)\ntoken = secrets.token_hex(32)          # Random hex string\nurl_token = secrets.token_urlsafe(32)  # URL-safe token\npassword = secrets.token_urlsafe(16)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "subprocess"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import subprocess\n\n# Run a command\nresult = subprocess.run([\"python\", \"--version\"], capture_output=True, text=True)\nprint(result.stdout)    # \"Python 3.11.x\"\nprint(result.returncode) # 0 (success)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "copy (Shallow vs Deep)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import copy\n\noriginal = [[1, 2], [3, 4]]\n\n# Shallow copy — copies outer list, inner lists are shared\nshallow = copy.copy(original)\nshallow[0][0] = 99\nprint(original[0][0])   # 99! (inner list changed!)\n\n# Deep copy — copies EVERYTHING\noriginal = [[1, 2], [3, 4]]\ndeep = copy.deepcopy(original)\ndeep[0][0] = 99\nprint(original[0][0])   # 1 (untouched!)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Enum (Named Constants)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from enum import Enum, auto, IntEnum\n\nclass Color(Enum):\n    RED = 1\n    GREEN = 2\n    BLUE = 3\n\nclass Status(Enum):\n    PENDING = auto()       # auto() assigns 1, 2, 3...\n    ACTIVE = auto()\n    INACTIVE = auto()\n\n# Usage\nprint(Color.RED)           # Color.RED\nprint(Color.RED.name)      # \"RED\"\nprint(Color.RED.value)     # 1\nprint(Color(2))            # Color.GREEN (by value)\nprint(Color[\"BLUE\"])       # Color.BLUE (by name)\n\n# Use in comparisons\nstatus = Status.ACTIVE\nif status == Status.ACTIVE:\n    print(\"Active!\")\n\n# Iterate over members\nfor color in Color:\n    print(f\"{color.name} = {color.value}\")\n\n# String enum\nfrom enum import StrEnum  # Python 3.11+\nclass Direction(StrEnum):\n    UP = \"up\"\n    DOWN = \"down\"\n    LEFT = \"left\"\n    RIGHT = \"right\"\n\nprint(Direction.UP == \"up\")   # True (StrEnum compares with strings)\n\n# IntEnum (compares with integers)\nclass Priority(IntEnum):\n    LOW = 1\n    MEDIUM = 2\n    HIGH = 3\n\nprint(Priority.HIGH > Priority.LOW)   # True"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "argparse (CLI Tools)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import argparse\n\nparser = argparse.ArgumentParser(description=\"My CLI Tool\")\n\n# Positional argument (required)\nparser.add_argument(\"filename\", help=\"File to process\")\n\n# Optional arguments\nparser.add_argument(\"-o\", \"--output\", help=\"Output file\", default=\"output.txt\")\nparser.add_argument(\"-v\", \"--verbose\", action=\"store_true\", help=\"Verbose mode\")\nparser.add_argument(\"-n\", \"--count\", type=int, default=10, help=\"Number of items\")\nparser.add_argument(\"--format\", choices=[\"csv\", \"json\", \"xml\"], default=\"csv\")\n\nargs = parser.parse_args()\n\nprint(args.filename)    # Positional arg\nprint(args.output)      # --output value\nprint(args.verbose)     # True/False\nprint(args.count)       # Integer\n\n# Usage: python script.py data.csv -o result.json -v -n 50 --format json\n# Help:  python script.py --help"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "pickle & shelve (Serialization)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import pickle\n\n# pickle — serialize ANY Python object to bytes\ndata = {\"name\": \"Aravind\", \"scores\": [95, 87, 92], \"active\": True}\n\n# Save to file\nwith open(\"data.pkl\", \"wb\") as f:\n    pickle.dump(data, f)\n\n# Load from file\nwith open(\"data.pkl\", \"rb\") as f:\n    loaded = pickle.load(f)\nprint(loaded)   # Same dict!\n\n# Serialize to bytes (for network transfer)\nbytes_data = pickle.dumps(data)\nrestored = pickle.loads(bytes_data)\n\n# ⚠️ WARNING: Never unpickle data from untrusted sources!\n# pickle can execute arbitrary code — security risk!\n\n# shelve — persistent dict-like storage\nimport shelve\n\nwith shelve.open(\"mydata\") as db:\n    db[\"users\"] = [\"Alice\", \"Bob\"]\n    db[\"config\"] = {\"theme\": \"dark\"}\n\nwith shelve.open(\"mydata\") as db:\n    print(db[\"users\"])    # [\"Alice\", \"Bob\"]"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Use `Counter` to find the 5 most common words in a text file",
                "Parse dates from a log file using `datetime.strptime()`",
                "Extract all email addresses from text using regex",
                "Use `deque(maxlen=10)` to keep only the last 10 items from a stream"
              ]
            },
            {
              "type": "quiz",
              "question": "Why is collections.deque preferred over a standard Python list when implementing a FIFO queue?",
              "options": [
                "deque elements cannot be modified.",
                "deque provides O(1) time complexity for appends and pops from both ends, whereas list.pop(0) is O(N).",
                "deque uses binary trees instead of arrays.",
                "deque only accepts string values."
              ],
              "answer": 1,
              "explanation": "Standard lists store contiguous arrays where removing the first element (pop(0)) requires shifting all remaining N elements (O(N)). collections.deque is a doubly-linked list with O(1) popleft() and append()."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 3: Advanced Python & Systems (Advanced)",
      "lessons": [
        {
          "slug": "advanced-python-constructs",
          "title": "Advanced Python: Generators, Decorators & Metaclasses",
          "description": "Comprehensive hands-on guide to advanced python: generators, decorators & metaclasses in Python.",
          "duration": 25,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Generators and iterators",
                "Context managers",
                "Metaclasses",
                "Descriptors",
                "Slots",
                "Walrus operator",
                "Advanced unpacking"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Iterators"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is an Iterator?"
            },
            {
              "type": "paragraph",
              "text": "An **iterator** is an object that produces one value at a time via `__next__()`. Lists are iterable but not iterators — iterators are lazy (generate values on demand, saving memory)."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Any iterable can be converted to an iterator\nnums = [1, 2, 3]\niterator = iter(nums)\n\nprint(next(iterator))   # 1\nprint(next(iterator))   # 2\nprint(next(iterator))   # 3\n# print(next(iterator)) # StopIteration!\n\n# Building a custom iterator\nclass Countdown:\n    def __init__(self, start):\n        self.current = start\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        value = self.current\n        self.current -= 1\n        return value\n\nfor num in Countdown(5):\n    print(num)   # 5, 4, 3, 2, 1"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 Generators"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Generator?"
            },
            {
              "type": "paragraph",
              "text": "A **generator** is a function that produces values lazily using `yield` instead of `return`. It pauses execution and resumes where it left off."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Generator function (uses yield)\ndef countdown(n):\n    while n > 0:\n        yield n     # Pause here, return value, resume on next()\n        n -= 1\n\nfor num in countdown(5):\n    print(num)   # 5, 4, 3, 2, 1\n\n# Generators are LAZY — they don't compute until asked\ngen = countdown(1_000_000)\nprint(next(gen))   # 1000000 (only computes ONE value)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Why Generators?"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# ❌ List: stores ALL values in memory\nsquares = [x**2 for x in range(10_000_000)]  # ~80MB of RAM!\n\n# ✅ Generator: stores NOTHING, computes one at a time\nsquares = (x**2 for x in range(10_000_000))  # ~0 MB!\n# Only computes when you iterate or call next()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Generator Patterns"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Read huge files line by line (without loading entire file)\ndef read_large_file(filepath):\n    with open(filepath) as f:\n        for line in f:\n            yield line.strip()\n\n# Chain generators (pipeline)\ndef numbers():\n    yield from range(100)\n\ndef evens(nums):\n    for n in nums:\n        if n % 2 == 0:\n            yield n\n\ndef squared(nums):\n    for n in nums:\n        yield n ** 2\n\n# Pipeline: numbers → filter evens → square\nresult = squared(evens(numbers()))\nprint(list(result))   # [0, 4, 16, 36, 64, ...]\n\n# send() — send values INTO a generator\ndef accumulator():\n    total = 0\n    while True:\n        value = yield total\n        total += value\n\nacc = accumulator()\nnext(acc)              # Initialize (must call next first)\nprint(acc.send(10))    # 10\nprint(acc.send(20))    # 30\nprint(acc.send(5))     # 35"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.3 Context Managers"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Context Manager?"
            },
            {
              "type": "paragraph",
              "text": "A **context manager** manages setup and cleanup automatically using the `with` statement. Ensures resources are properly released."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Class-based context manager\nclass FileManager:\n    def __init__(self, filename, mode):\n        self.filename = filename\n        self.mode = mode\n    \n    def __enter__(self):\n        self.file = open(self.filename, self.mode)\n        return self.file      # What 'with ... as f' gives you\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.file.close()     # Cleanup — always runs!\n        return False          # Don't suppress exceptions\n\nwith FileManager(\"test.txt\", \"w\") as f:\n    f.write(\"Hello!\")\n# File is automatically closed here, even if an error occurs\n\n# Generator-based context manager (simpler!)\nfrom contextlib import contextmanager\n\n@contextmanager\ndef timer(label):\n    import time\n    start = time.time()\n    yield                  # The 'with' block runs here\n    elapsed = time.time() - start\n    print(f\"{label}: {elapsed:.4f}s\")\n\nwith timer(\"Processing\"):\n    # ... some code ...\n    sum(range(1_000_000))\n# Output: Processing: 0.0234s"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.4 Metaclasses"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Metaclass?"
            },
            {
              "type": "paragraph",
              "text": "A **metaclass** is a \"class of a class.\" Just as a class defines how objects behave, a metaclass defines how classes behave. The default metaclass is `type`."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# type is the metaclass of all classes\nclass Dog:\n    pass\n\nprint(type(Dog))      # <class 'type'>\nprint(type(Dog()))    # <class '__main__.Dog'>\n\n# Creating a class dynamically with type\nCat = type(\"Cat\", (), {\"sound\": \"meow\", \"speak\": lambda self: self.sound})\nc = Cat()\nprint(c.speak())      # \"meow\"\n\n# Custom metaclass (advanced!)\nclass SingletonMeta(type):\n    _instances = {}\n    \n    def __call__(cls, *args, **kwargs):\n        if cls not in cls._instances:\n            cls._instances[cls] = super().__call__(*args, **kwargs)\n        return cls._instances[cls]\n\nclass Database(metaclass=SingletonMeta):\n    def __init__(self):\n        self.connection = \"connected\"\n\ndb1 = Database()\ndb2 = Database()\nprint(db1 is db2)   # True (same object!)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.5 __slots__"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Without __slots__ — each instance has a __dict__ (flexible but heavy)\nclass PointRegular:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n# With __slots__ — fixed attributes, no __dict__ (less memory, faster)\nclass PointSlots:\n    __slots__ = ('x', 'y')\n    \n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n# PointSlots uses ~40% less memory per instance!\n# p = PointSlots(1, 2)\n# p.z = 3   # AttributeError! Can't add new attributes"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.6 Walrus Operator `:=` (Python 3.8+)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Assign AND use a value in one expression\n\n# Without walrus:\nline = input(\"Enter: \")\nwhile line != \"quit\":\n    print(f\"You said: {line}\")\n    line = input(\"Enter: \")\n\n# With walrus:\nwhile (line := input(\"Enter: \")) != \"quit\":\n    print(f\"You said: {line}\")\n\n# In list comprehensions\ndata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nresults = [y for x in data if (y := x**2) > 20]\n# [25, 36, 49, 64, 81, 100]\n\n# In if statements\nimport re\nif match := re.search(r\"\\d+\", \"abc123def\"):\n    print(f\"Found number: {match.group()}\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.7 Advanced Unpacking"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Extended unpacking\nfirst, *middle, last = [1, 2, 3, 4, 5]\n# first=1, middle=[2,3,4], last=5\n\n# Nested unpacking\n(a, b), (c, d) = [1, 2], [3, 4]\n\n# Dict merging (Python 3.9+)\ndefaults = {\"color\": \"blue\", \"size\": 10}\ncustom = {\"size\": 20, \"font\": \"Arial\"}\nmerged = defaults | custom    # {\"color\": \"blue\", \"size\": 20, \"font\": \"Arial\"}\n\n# In-place merge\ndefaults |= custom"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.8 Descriptors"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Descriptor?"
            },
            {
              "type": "paragraph",
              "text": "A **descriptor** is an object that customizes attribute access by implementing `__get__`, `__set__`, or `__delete__`. Python's `property`, `classmethod`, and `staticmethod` are all built using descriptors."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Descriptor that validates value type and range\nclass Validated:\n    def __init__(self, min_val=None, max_val=None):\n        self.min_val = min_val\n        self.max_val = max_val\n    \n    def __set_name__(self, owner, name):\n        self.name = name                # Attribute name (e.g., \"age\")\n    \n    def __get__(self, obj, objtype=None):\n        if obj is None:\n            return self\n        return obj.__dict__.get(self.name)\n    \n    def __set__(self, obj, value):\n        if self.min_val is not None and value < self.min_val:\n            raise ValueError(f\"{self.name} must be >= {self.min_val}\")\n        if self.max_val is not None and value > self.max_val:\n            raise ValueError(f\"{self.name} must be <= {self.max_val}\")\n        obj.__dict__[self.name] = value\n\nclass Employee:\n    age = Validated(min_val=18, max_val=99)\n    salary = Validated(min_val=0)\n    \n    def __init__(self, name, age, salary):\n        self.name = name\n        self.age = age           # Triggers Validated.__set__\n        self.salary = salary\n\nemp = Employee(\"Aravind\", 25, 75000)\n# emp.age = 10    # ValueError: age must be >= 18\n# emp.salary = -1 # ValueError: salary must be >= 0"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a generator that produces Fibonacci numbers infinitely",
                "Create a context manager that temporarily changes the working directory",
                "Implement a `Singleton` using a metaclass",
                "Use `__slots__` and compare memory usage with a regular class"
              ]
            },
            {
              "type": "quiz",
              "question": "What does the functools.wraps decorator do when writing custom decorators?",
              "options": [
                "It compiles the decorated function into C bytecode.",
                "It prevents the function from raising exceptions.",
                "It preserves the original function's metadata (__name__, __doc__, __annotations__).",
                "It forces the decorated function to execute asynchronously."
              ],
              "answer": 2,
              "explanation": "Without @functools.wraps(fn), a decorated function takes on the name and docstring of the inner wrapper function, breaking introspection, debugging tools, and documentation generators."
            }
          ]
        },
        {
          "slug": "concurrency-and-asyncio",
          "title": "Concurrency: Threading, Multiprocessing & AsyncIO",
          "description": "Comprehensive hands-on guide to concurrency: threading, multiprocessing & asyncio in Python.",
          "duration": 25,
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
                "Threading (I/O-bound tasks)",
                "Multiprocessing (CPU-bound tasks)",
                "asyncio (async/await)",
                "When to use which"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.1 Concurrency vs Parallelism"
            },
            {
              "type": "code",
              "language": "python",
              "code": "Concurrency: Multiple tasks make PROGRESS at the same time (may not run simultaneously)\n  Analogy: One chef switching between multiple dishes\n\nParallelism: Multiple tasks run SIMULTANEOUSLY on different CPUs\n  Analogy: Multiple chefs each cooking a different dish\n\nPython's GIL (Global Interpreter Lock):\n  Only ONE thread can execute Python bytecode at a time.\n  → Threading does NOT give true parallelism for CPU work!\n  → Use multiprocessing for CPU-bound, threading for I/O-bound"
            },
            {
              "type": "table",
              "headers": [
                "Type",
                "Best For",
                "Tool",
                "True Parallel?"
              ],
              "rows": [
                [
                  "**Threading**",
                  "I/O-bound (HTTP, file, DB)",
                  "threading`",
                  "(GIL)",
                  ""
                ],
                [
                  "**Multiprocessing**",
                  "CPU-bound (math, processing)",
                  "multiprocessing`",
                  "",
                  ""
                ],
                [
                  "**Asyncio**",
                  "I/O-bound (many connections)",
                  "asyncio`",
                  "(single thread)",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.2 Threading"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import threading\nimport time\n\ndef download(url):\n    print(f\"Downloading {url}...\")\n    time.sleep(2)                       # Simulates I/O wait\n    print(f\"Finished {url}\")\n\n# Sequential (slow): 6 seconds\nurls = [\"url1\", \"url2\", \"url3\"]\n# for url in urls: download(url)\n\n# Threaded (fast): ~2 seconds\nthreads = []\nfor url in urls:\n    t = threading.Thread(target=download, args=(url,))\n    threads.append(t)\n    t.start()\n\nfor t in threads:\n    t.join()              # Wait for all threads to finish\n\nprint(\"All downloads complete!\")"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Thread Safety (Locks)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import threading\n\ncounter = 0\nlock = threading.Lock()\n\ndef increment():\n    global counter\n    for _ in range(100_000):\n        with lock:                   # Only one thread at a time\n            counter += 1\n\nt1 = threading.Thread(target=increment)\nt2 = threading.Thread(target=increment)\nt1.start(); t2.start()\nt1.join(); t2.join()\nprint(counter)   # 200000 (correct with lock, wrong without!)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "ThreadPoolExecutor (Easier!)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from concurrent.futures import ThreadPoolExecutor, as_completed\n\ndef fetch_data(url):\n    import time\n    time.sleep(1)\n    return f\"Data from {url}\"\n\nurls = [f\"https://api.example.com/{i}\" for i in range(10)]\n\nwith ThreadPoolExecutor(max_workers=5) as executor:\n    futures = {executor.submit(fetch_data, url): url for url in urls}\n    \n    for future in as_completed(futures):\n        url = futures[future]\n        result = future.result()\n        print(f\"{url}: {result}\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.3 Multiprocessing"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import multiprocessing\nimport time\n\ndef heavy_computation(n):\n    \"\"\"CPU-bound task.\"\"\"\n    total = sum(i * i for i in range(n))\n    return total\n\n# Sequential: uses 1 CPU core\nstart = time.time()\nresults = [heavy_computation(10_000_000) for _ in range(4)]\nprint(f\"Sequential: {time.time() - start:.2f}s\")\n\n# Parallel: uses ALL CPU cores\nstart = time.time()\nwith multiprocessing.Pool(processes=4) as pool:\n    results = pool.map(heavy_computation, [10_000_000] * 4)\nprint(f\"Parallel: {time.time() - start:.2f}s\")  # ~4x faster!"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "ProcessPoolExecutor"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from concurrent.futures import ProcessPoolExecutor\n\ndef cpu_task(n):\n    return sum(i ** 2 for i in range(n))\n\nwith ProcessPoolExecutor(max_workers=4) as executor:\n    futures = [executor.submit(cpu_task, 5_000_000) for _ in range(4)]\n    results = [f.result() for f in futures]"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.4 asyncio (Async/Await)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is asyncio?"
            },
            {
              "type": "paragraph",
              "text": "**asyncio** lets you write concurrent code using `async/await` syntax. It uses a single thread with an event loop — perfect for handling thousands of I/O operations."
            },
            {
              "type": "code",
              "language": "python",
              "code": "import asyncio\n\nasync def fetch_data(url, delay):\n    print(f\"Fetching {url}...\")\n    await asyncio.sleep(delay)           # Non-blocking wait\n    print(f\"Got data from {url}\")\n    return f\"Data from {url}\"\n\nasync def main():\n    # Run multiple async tasks concurrently\n    tasks = [\n        fetch_data(\"api/users\", 2),\n        fetch_data(\"api/posts\", 1),\n        fetch_data(\"api/comments\", 3),\n    ]\n    results = await asyncio.gather(*tasks)\n    print(results)\n    # Total time: ~3s (not 6s!) — all run concurrently\n\nasyncio.run(main())"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Real-World: Async HTTP Requests"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import asyncio\nimport aiohttp       # pip install aiohttp\n\nasync def fetch(session, url):\n    async with session.get(url) as response:\n        return await response.json()\n\nasync def main():\n    urls = [f\"https://jsonplaceholder.typicode.com/posts/{i}\" for i in range(1, 11)]\n    \n    async with aiohttp.ClientSession() as session:\n        tasks = [fetch(session, url) for url in urls]\n        results = await asyncio.gather(*tasks)\n        \n        for result in results:\n            print(result[\"title\"])\n\nasyncio.run(main())\n# 10 HTTP requests complete in ~0.5s instead of ~5s!"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Key asyncio Concepts"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# async def → defines a coroutine\nasync def my_func():\n    return \"hello\"\n\n# await → pause until result is ready (only inside async def)\nresult = await my_func()\n\n# asyncio.gather → run multiple coroutines concurrently\nresults = await asyncio.gather(task1(), task2(), task3())\n\n# asyncio.create_task → schedule a coroutine to run\ntask = asyncio.create_task(my_func())\nresult = await task\n\n# Semaphore → limit concurrent tasks\nsem = asyncio.Semaphore(5)        # Max 5 concurrent\nasync def limited_task():\n    async with sem:\n        await asyncio.sleep(1)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.5 When to Use What"
            },
            {
              "type": "code",
              "language": "python",
              "code": "Question: Is your code waiting for external things (I/O)?\n├── YES (I/O-bound: HTTP, files, database)\n│   ├── Few tasks → threading (ThreadPoolExecutor)\n│   └── Many tasks (100+) → asyncio\n└── NO (CPU-bound: math, image processing, ML)\n    └── multiprocessing (ProcessPoolExecutor)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Download 10 web pages concurrently using `ThreadPoolExecutor`",
                "Compute Fibonacci for 10 different values in parallel using `multiprocessing`",
                "Write an async program that fetches data from 5 APIs concurrently",
                "Add a `Lock` to a shared counter with threads and verify correctness"
              ]
            },
            {
              "type": "quiz",
              "question": "Which concurrency model should you choose for CPU-bound tasks in standard CPython?",
              "options": [
                "asyncio event loops with async/await.",
                "threading with standard ThreadPoolExecutor.",
                "multiprocessing to spawn separate OS processes and bypass the Global Interpreter Lock (GIL).",
                "Generator coroutines with yield."
              ],
              "answer": 2,
              "explanation": "Because CPython's GIL permits only one thread to execute Python bytecode at a time, CPU-intensive mathematical or encoding workloads must use multiprocessing to utilize multiple CPU cores in parallel."
            }
          ]
        },
        {
          "slug": "type-hints-and-testing",
          "title": "Type Hints, Pydantic, Pytest & Mocking",
          "description": "Comprehensive hands-on guide to type hints, pydantic, pytest & mocking in Python.",
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
                "Type hints (annotations)",
                "typing module",
                "Pydantic for data validation",
                "unittest",
                "pytest",
                "Mocking"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.1 Type Hints"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What are Type Hints?"
            },
            {
              "type": "paragraph",
              "text": "**Type hints** annotate the expected types of variables, function parameters, and return values. Python doesn't enforce them at runtime — they're for documentation, IDE support, and static analysis tools (mypy)."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Basic type hints\nname: str = \"Aravind\"\nage: int = 25\nprice: float = 19.99\nis_active: bool = True\n\n# Function type hints\ndef greet(name: str) -> str:\n    return f\"Hello, {name}!\"\n\ndef add(a: int, b: int) -> int:\n    return a + b\n\n# None return type\ndef log(message: str) -> None:\n    print(message)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Complex Types"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from typing import (\n    List, Dict, Tuple, Set, Optional, Union,\n    Any, Callable, Iterator, Generator\n)\n\n# Collections (Python 3.9+ can use lowercase: list[int])\ndef process(items: list[int]) -> list[str]:\n    return [str(i) for i in items]\n\nscores: dict[str, int] = {\"Alice\": 95, \"Bob\": 87}\npoint: tuple[float, float] = (3.14, 2.71)\nunique: set[str] = {\"apple\", \"banana\"}\n\n# Optional (value OR None)\ndef find_user(user_id: int) -> Optional[dict]:\n    # Returns dict or None\n    return None\n\n# Union (one of multiple types)\ndef process(value: Union[int, str]) -> str:\n    return str(value)\n\n# Python 3.10+ syntax (cleaner):\ndef process(value: int | str) -> str:\n    return str(value)\n\n# Callable (function as parameter)\ndef apply(func: Callable[[int, int], int], a: int, b: int) -> int:\n    return func(a, b)\n\n# Any (opt out of type checking)\ndef dangerous(x: Any) -> Any:\n    return x"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "TypedDict & Literal"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from typing import TypedDict, Literal\n\nclass UserDict(TypedDict):\n    name: str\n    age: int\n    email: str\n\ndef create_user(data: UserDict) -> None:\n    print(data[\"name\"])\n\n# Literal — restrict to specific values\ndef set_mode(mode: Literal[\"read\", \"write\", \"append\"]) -> None:\n    print(f\"Mode: {mode}\")\n\nset_mode(\"read\")    # ✅\n# set_mode(\"delete\")  # mypy error!"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.2 Pydantic (Data Validation)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from pydantic import BaseModel, field_validator, EmailStr\n\nclass User(BaseModel):\n    name: str\n    age: int\n    email: str\n    active: bool = True\n\n    @field_validator(\"age\")\n    @classmethod\n    def validate_age(cls, v):\n        if v < 0 or v > 150:\n            raise ValueError(\"Age must be between 0 and 150\")\n        return v\n\n# Automatic validation!\nuser = User(name=\"Aravind\", age=25, email=\"a@test.com\")\nprint(user.model_dump())  # {'name': 'Aravind', 'age': 25, ...}\n\n# Auto type conversion\nuser = User(name=\"Aravind\", age=\"25\", email=\"a@test.com\")  # \"25\" → 25\n\n# Validation error\n# User(name=\"Aravind\", age=-5, email=\"a@test.com\")\n# ValidationError: Age must be between 0 and 150"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.3 pytest"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is pytest?"
            },
            {
              "type": "paragraph",
              "text": "**pytest** is the most popular testing framework for Python. It's simpler and more powerful than the built-in `unittest`."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# test_math.py\n\ndef add(a, b):\n    return a + b\n\ndef divide(a, b):\n    if b == 0:\n        raise ValueError(\"Cannot divide by zero\")\n    return a / b\n\n# Tests — functions starting with 'test_'\ndef test_add():\n    assert add(2, 3) == 5\n    assert add(-1, 1) == 0\n    assert add(0, 0) == 0\n\ndef test_divide():\n    assert divide(10, 2) == 5.0\n    assert divide(7, 2) == 3.5\n\n# Test exceptions\nimport pytest\n\ndef test_divide_by_zero():\n    with pytest.raises(ValueError, match=\"Cannot divide by zero\"):\n        divide(10, 0)"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Run tests\npytest                        # Run all tests\npytest test_math.py           # Run specific file\npytest -v                     # Verbose output\npytest -k \"test_add\"          # Run tests matching name\npytest --tb=short             # Shorter tracebacks"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Fixtures"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import pytest\n\n@pytest.fixture\ndef sample_data():\n    \"\"\"Provide test data — runs before each test that uses it.\"\"\"\n    return {\"name\": \"Aravind\", \"age\": 25}\n\n@pytest.fixture\ndef db_connection():\n    \"\"\"Setup and teardown.\"\"\"\n    conn = create_connection()    # Setup\n    yield conn                     # Test runs here\n    conn.close()                   # Teardown (always runs)\n\ndef test_user_name(sample_data):\n    assert sample_data[\"name\"] == \"Aravind\"\n\ndef test_user_age(sample_data):\n    assert sample_data[\"age\"] == 25"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Parametrize (Run Same Test with Different Data)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "@pytest.mark.parametrize(\"input,expected\", [\n    (1, 1),\n    (2, 4),\n    (3, 9),\n    (4, 16),\n    (-2, 4),\n])\ndef test_square(input, expected):\n    assert input ** 2 == expected"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.4 Mocking"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from unittest.mock import Mock, patch, MagicMock\n\n# Mock an external API call\ndef get_user_data(user_id):\n    import requests\n    response = requests.get(f\"https://api.example.com/users/{user_id}\")\n    return response.json()\n\ndef test_get_user_data():\n    with patch(\"requests.get\") as mock_get:\n        # Configure the mock\n        mock_get.return_value.json.return_value = {\"name\": \"Aravind\", \"age\": 25}\n        mock_get.return_value.status_code = 200\n        \n        # Call the function\n        result = get_user_data(1)\n        \n        # Assertions\n        assert result[\"name\"] == \"Aravind\"\n        mock_get.assert_called_once_with(\"https://api.example.com/users/1\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.5 unittest (Built-in)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import unittest\n\nclass TestCalculator(unittest.TestCase):\n    \n    def setUp(self):\n        \"\"\"Runs before each test.\"\"\"\n        self.calc = Calculator()\n    \n    def test_add(self):\n        self.assertEqual(self.calc.add(2, 3), 5)\n    \n    def test_divide(self):\n        self.assertAlmostEqual(self.calc.divide(1, 3), 0.333, places=3)\n    \n    def test_divide_by_zero(self):\n        with self.assertRaises(ValueError):\n            self.calc.divide(10, 0)\n    \n    def tearDown(self):\n        \"\"\"Runs after each test.\"\"\"\n        pass\n\nif __name__ == \"__main__\":\n    unittest.main()"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Add type hints to all functions in a previous exercise module",
                "Write 5 pytest tests for a `BankAccount` class",
                "Use `@pytest.mark.parametrize` to test edge cases",
                "Mock an HTTP API call and test a function that uses it"
              ]
            },
            {
              "type": "quiz",
              "question": "In pytest, what is the role of a fixture with scope=\"session\"?",
              "options": [
                "It re-runs before every single individual test function.",
                "It runs once per test module.",
                "It executes once for the entire test session and shares its setup state across all tests.",
                "It disables assertions for slow network tests."
              ],
              "answer": 2,
              "explanation": "Session-scoped fixtures (scope=\"session\") instantiate expensive resources (e.g. database connections or test servers) once at the start of the test suite and tear them down when all tests complete."
            }
          ]
        },
        {
          "slug": "cpython-internals-and-performance",
          "title": "CPython Internals, The GIL, Memory & Profiling",
          "description": "Comprehensive hands-on guide to cpython internals, the gil, memory & profiling in Python.",
          "duration": 25,
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
                "How Python works under the hood",
                "GIL (Global Interpreter Lock)",
                "Memory management and garbage collection",
                "Performance profiling",
                "Optimization techniques"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.1 How Python Executes Code"
            },
            {
              "type": "code",
              "language": "python",
              "code": "Source Code (.py)\n      ↓ Compilation (automatic)\nBytecode (.pyc)         ← Cached in __pycache__/\n      ↓ Interpretation\nPython Virtual Machine (PVM)\n      ↓\nResults\n\nKey insight: Python IS compiled — but to bytecode, not machine code.\nThe PVM then interprets the bytecode line by line."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# See the bytecode\nimport dis\n\ndef add(a, b):\n    return a + b\n\ndis.dis(add)\n# Output:\n#   LOAD_FAST    0 (a)\n#   LOAD_FAST    1 (b)\n#   BINARY_ADD\n#   RETURN_VALUE"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.2 The GIL (Global Interpreter Lock)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is the GIL?"
            },
            {
              "type": "paragraph",
              "text": "The **GIL** is a mutex that allows only one thread to execute Python bytecode at a time. This means Python threads can't achieve true CPU parallelism."
            },
            {
              "type": "code",
              "language": "python",
              "code": "With GIL:\n  Thread 1: ████░░░░████░░░░████    (runs, waits, runs...)\n  Thread 2: ░░░░████░░░░████░░░░    (...waits, runs, waits...)\n  → Only ONE thread runs Python at any moment\n\nWhy does the GIL exist?\n  - Simplifies memory management (reference counting is thread-safe)\n  - Makes C extensions easier to write\n  - CPython's design decision from the 1990s\n\nImpact:\n  CPU-bound tasks: GIL is a bottleneck → use multiprocessing\n  I/O-bound tasks: GIL is released during I/O → threading works fine!"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.3 Memory Management"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Reference Counting"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import sys\n\na = [1, 2, 3]\nprint(sys.getrefcount(a))    # 2 (a + getrefcount's own reference)\n\nb = a                         # Reference count increases\nprint(sys.getrefcount(a))    # 3\n\ndel b                         # Reference count decreases\nprint(sys.getrefcount(a))    # 2\n\n# When refcount reaches 0 → object is immediately freed"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Garbage Collection (Cyclic References)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import gc\n\n# Cyclic reference (refcount never reaches 0!)\nclass Node:\n    def __init__(self):\n        self.other = None\n\na = Node()\nb = Node()\na.other = b    # a → b\nb.other = a    # b → a (cycle!)\n\ndel a, b       # Refcount is 1 each (not 0!) — can't be freed by refcount\n\n# Garbage collector detects and cleans up cycles\ngc.collect()   # Force garbage collection\n\n# Check GC stats\nprint(gc.get_stats())"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Small Integer Caching"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Python caches integers from -5 to 256\na = 256\nb = 256\nprint(a is b)    # True (same object, cached!)\n\na = 257\nb = 257\nprint(a is b)    # False (different objects!)\n\n# String interning (similar optimization)\na = \"hello\"\nb = \"hello\"\nprint(a is b)    # True (interned!)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.4 Performance Profiling"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import time\nimport cProfile\n\n# Simple timing\nstart = time.perf_counter()\nresult = sum(range(10_000_000))\nelapsed = time.perf_counter() - start\nprint(f\"Took {elapsed:.4f}s\")\n\n# cProfile — detailed profiling\ndef expensive_function():\n    total = 0\n    for i in range(1_000_000):\n        total += i ** 2\n    return total\n\ncProfile.run(\"expensive_function()\")\n# Output shows: number of calls, time per call, cumulative time\n\n# timeit — benchmark small code snippets\nimport timeit\ntime_taken = timeit.timeit(\"sum(range(1000))\", number=10000)\nprint(f\"Average: {time_taken/10000:.6f}s per call\")\n\n# Memory profiling (pip install memory-profiler)\n# @profile    # Add decorator\n# def my_function():\n#     big_list = [i for i in range(1_000_000)]\n#     return sum(big_list)\n# Run: python -m memory_profiler script.py"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.5 Optimization Techniques"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# 1. Use built-in functions (implemented in C — much faster)\n# ❌ Slow:\ntotal = 0\nfor x in range(1000000):\n    total += x\n# ✅ Fast:\ntotal = sum(range(1000000))\n\n# 2. List comprehension > for loop\n# ❌ Slow:\nresult = []\nfor x in range(1000):\n    result.append(x ** 2)\n# ✅ Fast:\nresult = [x ** 2 for x in range(1000)]\n\n# 3. Use generators for large data\n# ❌ Memory hog:\ndata = [x ** 2 for x in range(10_000_000)]  # ~80MB!\n# ✅ Memory efficient:\ndata = (x ** 2 for x in range(10_000_000))  # ~0MB\n\n# 4. Use 'in' for membership testing\n# ❌ Slow (O(n)):\nif item in my_list:     # Scans entire list\n    pass\n# ✅ Fast (O(1)):\nmy_set = set(my_list)\nif item in my_set:      # Hash lookup\n    pass\n\n# 5. Use join() for string concatenation\n# ❌ Slow (creates new string each time):\ns = \"\"\nfor word in words:\n    s += word + \" \"\n# ✅ Fast:\ns = \" \".join(words)\n\n# 6. Use local variables (faster than global)\ndef fast():\n    local_func = len    # Cache built-in as local\n    for _ in range(1000):\n        local_func([1, 2, 3])\n\n# 7. Use __slots__ for memory-heavy classes (see Module 10)\n\n# 8. Use functools.lru_cache for expensive repeated calculations\nfrom functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef expensive(n):\n    return sum(i**2 for i in range(n))"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Profile a slow function using `cProfile` and identify the bottleneck",
                "Compare `list` vs `set` lookup time for 1 million items using `timeit`",
                "Create a cyclic reference, verify it's cleaned up by `gc.collect()`",
                "Optimize a slow function using the techniques above and measure improvement"
              ]
            },
            {
              "type": "quiz",
              "question": "How does CPython's garbage collector handle objects with circular references?",
              "options": [
                "It ignores them, causing permanent memory leaks.",
                "Using reference counting alone, which immediately frees them.",
                "A cyclic garbage collector periodically traverses object graphs to detect and collect unreachable reference cycles.",
                "It converts cyclic references into weakref proxies."
              ],
              "answer": 2,
              "explanation": "While CPython uses reference counting for immediate cleanup when refcount reaches 0, it employs a generational cyclic garbage collector to detect and reclaim isolated circular reference graphs."
            }
          ]
        },
        {
          "slug": "python-best-practices-and-design-patterns",
          "title": "Python Best Practices, PEP 8 & Design Patterns",
          "description": "Comprehensive hands-on guide to python best practices, pep 8 & design patterns in Python.",
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
                "PEP 8 style guide",
                "Pythonic code patterns",
                "Common design patterns",
                "Project structure",
                "Code review checklist"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.1 PEP 8 — Python Style Guide"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Naming Conventions"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Variables and functions: snake_case\nuser_name = \"Aravind\"\ndef get_user_by_id(user_id): ...\n\n# Constants: UPPER_SNAKE_CASE\nMAX_RETRIES = 3\nDATABASE_URL = \"postgres://...\"\n\n# Classes: PascalCase\nclass UserAccount: ...\nclass HTTPClient: ...\n\n# Private: prefix with underscore\n_internal_cache = {}\ndef _helper_function(): ...\n\n# Name-mangled: prefix with double underscore\nclass MyClass:\n    __secret = \"hidden\""
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Formatting Rules"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Indentation: 4 spaces (NEVER tabs)\n# Line length: max 79 chars (code), 72 chars (docstrings)\n# Blank lines: 2 before top-level definitions, 1 before methods\n\n# Imports: one per line, grouped and ordered\n# 1. Standard library\nimport os\nimport sys\n\n# 2. Third-party\nimport requests\nimport flask\n\n# 3. Local\nfrom myproject import utils\n\n# ❌ Bad:\nimport os, sys\nfrom os import *"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.2 Pythonic Code Patterns"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# 1. EAFP over LBYL\n# ❌ Look Before You Leap:\nif key in dictionary:\n    value = dictionary[key]\n# ✅ Easier to Ask Forgiveness than Permission:\ntry:\n    value = dictionary[key]\nexcept KeyError:\n    value = default\n\n# 2. Use context managers\n# ❌ Bad:\nf = open(\"file.txt\")\ndata = f.read()\nf.close()\n# ✅ Good:\nwith open(\"file.txt\") as f:\n    data = f.read()\n\n# 3. Use enumerate instead of range(len(...))\n# ❌ Bad:\nfor i in range(len(items)):\n    print(i, items[i])\n# ✅ Good:\nfor i, item in enumerate(items):\n    print(i, item)\n\n# 4. Use zip for parallel iteration\n# ❌ Bad:\nfor i in range(len(names)):\n    print(names[i], ages[i])\n# ✅ Good:\nfor name, age in zip(names, ages):\n    print(name, age)\n\n# 5. Use any() and all()\n# ❌ Bad:\nfound = False\nfor item in items:\n    if item > 10:\n        found = True\n        break\n# ✅ Good:\nfound = any(item > 10 for item in items)\nall_valid = all(item > 0 for item in items)\n\n# 6. Use dict.get() with defaults\n# ❌ Bad:\nif key in d:\n    value = d[key]\nelse:\n    value = \"default\"\n# ✅ Good:\nvalue = d.get(key, \"default\")\n\n# 7. Use f-strings for formatting\n# ❌ Bad:\nmsg = \"Name: \" + name + \", Age: \" + str(age)\nmsg = \"Name: %s, Age: %d\" % (name, age)\n# ✅ Good:\nmsg = f\"Name: {name}, Age: {age}\"\n\n# 8. Unpacking instead of indexing\n# ❌ Bad:\npair = (3, 4)\nx = pair[0]\ny = pair[1]\n# ✅ Good:\nx, y = (3, 4)\n\n# 9. Use collections.defaultdict\n# ❌ Bad:\nd = {}\nfor item in items:\n    if item.category not in d:\n        d[item.category] = []\n    d[item.category].append(item)\n# ✅ Good:\nfrom collections import defaultdict\nd = defaultdict(list)\nfor item in items:\n    d[item.category].append(item)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.3 Design Patterns"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Singleton"
            },
            {
              "type": "code",
              "language": "python",
              "code": "class Database:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\ndb1 = Database()\ndb2 = Database()\nprint(db1 is db2)   # True (same instance)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Factory"
            },
            {
              "type": "code",
              "language": "python",
              "code": "class Dog:\n    def speak(self): return \"Woof!\"\n\nclass Cat:\n    def speak(self): return \"Meow!\"\n\nclass AnimalFactory:\n    @staticmethod\n    def create(animal_type: str):\n        if animal_type == \"dog\":\n            return Dog()\n        elif animal_type == \"cat\":\n            return Cat()\n        raise ValueError(f\"Unknown: {animal_type}\")\n\npet = AnimalFactory.create(\"dog\")\nprint(pet.speak())   # \"Woof!\""
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Observer"
            },
            {
              "type": "code",
              "language": "python",
              "code": "class EventEmitter:\n    def __init__(self):\n        self._listeners = defaultdict(list)\n    \n    def on(self, event: str, callback):\n        self._listeners[event].append(callback)\n    \n    def emit(self, event: str, *args, **kwargs):\n        for callback in self._listeners[event]:\n            callback(*args, **kwargs)\n\n# Usage\nemitter = EventEmitter()\nemitter.on(\"user_created\", lambda name: print(f\"Welcome, {name}!\"))\nemitter.on(\"user_created\", lambda name: print(f\"Sending email to {name}\"))\nemitter.emit(\"user_created\", \"Aravind\")\n# Welcome, Aravind!\n# Sending email to Aravind"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Strategy"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from typing import Callable\n\nclass Sorter:\n    def __init__(self, strategy: Callable):\n        self.strategy = strategy\n    \n    def sort(self, data: list) -> list:\n        return self.strategy(data)\n\n# Different strategies\nbubble_sort = lambda data: sorted(data)\nreverse_sort = lambda data: sorted(data, reverse=True)\n\nsorter = Sorter(bubble_sort)\nprint(sorter.sort([3, 1, 4, 1, 5]))   # [1, 1, 3, 4, 5]\n\nsorter = Sorter(reverse_sort)\nprint(sorter.sort([3, 1, 4, 1, 5]))   # [5, 4, 3, 1, 1]"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.4 Project Structure"
            },
            {
              "type": "code",
              "language": "python",
              "code": "my_project/\n├── README.md\n├── requirements.txt\n├── setup.py / pyproject.toml\n├── .env\n├── .gitignore\n├── src/\n│   └── my_project/\n│       ├── __init__.py\n│       ├── main.py\n│       ├── config.py\n│       ├── models/\n│       │   ├── __init__.py\n│       │   └── user.py\n│       ├── services/\n│       │   ├── __init__.py\n│       │   └── auth.py\n│       └── utils/\n│           ├── __init__.py\n│           └── helpers.py\n├── tests/\n│   ├── __init__.py\n│   ├── test_main.py\n│   └── test_auth.py\n└── docs/\n    └── guide.md"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.5 Code Quality Checklist"
            },
            {
              "type": "code",
              "language": "python",
              "code": "Before committing:\n  □ All functions have type hints\n  □ All public functions have docstrings\n  □ No hardcoded values (use constants or config)\n  □ No bare except: clauses\n  □ No mutable default arguments\n  □ All tests pass (pytest)\n  □ Code formatted (black/ruff)\n  □ No unused imports\n  □ Error handling is specific (not generic Exception)\n  □ Sensitive data in .env (not in code)"
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "Go back to the Main README to review all modules."
            },
            {
              "type": "quiz",
              "question": "What does the Single Responsibility Principle (SRP) dictate in Python software design?",
              "options": [
                "A class or function should have only one reason to change, encapsulating a single well-defined responsibility.",
                "All functions must have exactly one line of code.",
                "A Python module can only contain a single class definition.",
                "Every class must implement the Singleton design pattern."
              ],
              "answer": 0,
              "explanation": "The Single Responsibility Principle states that each module, class, or function should be responsible for a single part of the program's functionality, making code easier to test and maintain."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 4: Web Development & APIs (Professional)",
      "lessons": [
        {
          "slug": "apis-http-and-web-scraping",
          "title": "APIs, HTTP Requests & Web Scraping",
          "description": "Comprehensive hands-on guide to apis, http requests & web scraping in Python.",
          "duration": 25,
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
                "HTTP fundamentals (methods, status codes, headers)",
                "Consuming APIs with `requests`",
                "Authentication (API keys, OAuth, JWT)",
                "Building REST APIs with FastAPI",
                "Request validation and error handling"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "21.1 HTTP Fundamentals"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is an API?"
            },
            {
              "type": "paragraph",
              "text": "An **API** (Application Programming Interface) is a set of rules that allows different software systems to communicate. A **REST API** uses HTTP to exchange data (usually JSON)."
            },
            {
              "type": "code",
              "language": "python",
              "code": "Client (your Python code)           Server (API)\n   │                                    │\n   │── GET /users ─────────────────────→│\n   │                                    │── Looks up users\n   │←───────────── 200 OK + JSON ──────│\n   │                                    │\n   │── POST /users (body: new user) ──→│\n   │                                    │── Creates user\n   │←───────────── 201 Created + JSON ─│"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "HTTP Methods"
            },
            {
              "type": "table",
              "headers": [
                "Method",
                "Purpose",
                "Example"
              ],
              "rows": [
                [
                  "GET`",
                  "Read/retrieve data",
                  "Get list of users",
                  ""
                ],
                [
                  "POST`",
                  "Create new data",
                  "Create a new user",
                  ""
                ],
                [
                  "PUT`",
                  "Replace existing data",
                  "Update entire user",
                  ""
                ],
                [
                  "PATCH`",
                  "Partially update data",
                  "Update user's email only",
                  ""
                ],
                [
                  "DELETE`",
                  "Remove data",
                  "Delete a user",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "HTTP Status Codes"
            },
            {
              "type": "code",
              "language": "python",
              "code": "2xx Success:\n  200 OK               → Request succeeded\n  201 Created           → Resource created\n  204 No Content        → Success, no body\n\n3xx Redirection:\n  301 Moved Permanently\n  304 Not Modified\n\n4xx Client Error:\n  400 Bad Request       → Invalid data sent\n  401 Unauthorized      → Not logged in\n  403 Forbidden         → Logged in but no permission\n  404 Not Found         → Resource doesn't exist\n  422 Unprocessable     → Validation error\n  429 Too Many Requests → Rate limited\n\n5xx Server Error:\n  500 Internal Server Error\n  502 Bad Gateway\n  503 Service Unavailable"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "21.2 Consuming APIs with requests"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import requests\n\n# GET — retrieve data\nresponse = requests.get(\"https://jsonplaceholder.typicode.com/users\")\nprint(response.status_code)     # 200\nprint(response.json())          # List of users (parsed JSON)\nprint(response.headers)         # Response headers\nprint(response.text)            # Raw text\n\n# GET with query parameters\nresponse = requests.get(\n    \"https://api.example.com/search\",\n    params={\"q\": \"python\", \"page\": 1, \"limit\": 10}\n)\n# URL becomes: .../search?q=python&page=1&limit=10\n\n# POST — send data\nnew_user = {\"name\": \"Aravind\", \"email\": \"aravind@test.com\"}\nresponse = requests.post(\n    \"https://jsonplaceholder.typicode.com/users\",\n    json=new_user       # Automatically sets Content-Type: application/json\n)\nprint(response.status_code)   # 201\nprint(response.json())        # Created user with ID\n\n# PUT — update entire resource\nresponse = requests.put(\n    \"https://jsonplaceholder.typicode.com/users/1\",\n    json={\"name\": \"Updated Name\", \"email\": \"new@test.com\"}\n)\n\n# PATCH — partial update\nresponse = requests.patch(\n    \"https://jsonplaceholder.typicode.com/users/1\",\n    json={\"email\": \"newemail@test.com\"}\n)\n\n# DELETE\nresponse = requests.delete(\"https://jsonplaceholder.typicode.com/users/1\")\nprint(response.status_code)   # 200"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Headers and Authentication"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Custom headers\nresponse = requests.get(\n    \"https://api.example.com/data\",\n    headers={\n        \"Authorization\": \"Bearer your-token-here\",\n        \"Accept\": \"application/json\",\n        \"User-Agent\": \"MyApp/1.0\"\n    }\n)\n\n# API Key authentication\nresponse = requests.get(\n    \"https://api.example.com/data\",\n    headers={\"X-API-Key\": \"your-api-key\"}\n)\n\n# Basic auth (username/password)\nresponse = requests.get(\n    \"https://api.example.com/data\",\n    auth=(\"username\", \"password\")\n)\n\n# Bearer token (OAuth/JWT)\ntoken = \"eyJhbGciOiJIUzI1NiIs...\"\nresponse = requests.get(\n    \"https://api.example.com/data\",\n    headers={\"Authorization\": f\"Bearer {token}\"}\n)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Handling Errors & Timeouts"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Timeout (don't hang forever!)\ntry:\n    response = requests.get(\"https://api.example.com/data\", timeout=5)\n    response.raise_for_status()   # Raises HTTPError for 4xx/5xx\n    data = response.json()\nexcept requests.exceptions.Timeout:\n    print(\"Request timed out!\")\nexcept requests.exceptions.HTTPError as e:\n    print(f\"HTTP error: {e}\")\nexcept requests.exceptions.ConnectionError:\n    print(\"Connection failed!\")\nexcept requests.exceptions.RequestException as e:\n    print(f\"Request failed: {e}\")"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Sessions (Reuse Connections)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Session persists cookies, headers, and reuses TCP connections\nsession = requests.Session()\nsession.headers.update({\"Authorization\": \"Bearer my-token\"})\n\n# All requests through session share headers\nresponse = session.get(\"https://api.example.com/users\")\nresponse = session.get(\"https://api.example.com/posts\")  # Same token used\n\nsession.close()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Downloading Files"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Download a file\nresponse = requests.get(\"https://example.com/file.pdf\", stream=True)\nwith open(\"file.pdf\", \"wb\") as f:\n    for chunk in response.iter_content(chunk_size=8192):\n        f.write(chunk)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "21.3 Building REST APIs with FastAPI"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is FastAPI?"
            },
            {
              "type": "paragraph",
              "text": "**FastAPI** is a modern, high-performance Python web framework for building APIs. It's the most popular choice for new Python API projects."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "pip install fastapi uvicorn"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Basic API"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# main.py\nfrom fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI(title=\"My API\", version=\"1.0\")\n\n# Data model (auto-validates request body)\nclass User(BaseModel):\n    name: str\n    email: str\n    age: int | None = None\n\n# In-memory database (for demo)\nusers_db = {}\nnext_id = 1\n\n# GET — list all users\n@app.get(\"/users\")\ndef get_users():\n    return list(users_db.values())\n\n# GET — single user\n@app.get(\"/users/{user_id}\")\ndef get_user(user_id: int):\n    if user_id not in users_db:\n        raise HTTPException(status_code=404, detail=\"User not found\")\n    return users_db[user_id]\n\n# POST — create user\n@app.post(\"/users\", status_code=201)\ndef create_user(user: User):\n    global next_id\n    user_dict = user.model_dump()\n    user_dict[\"id\"] = next_id\n    users_db[next_id] = user_dict\n    next_id += 1\n    return user_dict\n\n# PUT — update user\n@app.put(\"/users/{user_id}\")\ndef update_user(user_id: int, user: User):\n    if user_id not in users_db:\n        raise HTTPException(status_code=404, detail=\"User not found\")\n    user_dict = user.model_dump()\n    user_dict[\"id\"] = user_id\n    users_db[user_id] = user_dict\n    return user_dict\n\n# DELETE — remove user\n@app.delete(\"/users/{user_id}\", status_code=204)\ndef delete_user(user_id: int):\n    if user_id not in users_db:\n        raise HTTPException(status_code=404, detail=\"User not found\")\n    del users_db[user_id]"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Run the API\nuvicorn main:app --reload\n\n# API available at: http://localhost:8000\n# Auto-generated docs at: http://localhost:8000/docs (Swagger UI!)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Query Parameters & Path Parameters"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from typing import Optional\n\n@app.get(\"/search\")\ndef search_users(\n    q: str,                      # Required query param\n    page: int = 1,               # Optional with default\n    limit: int = 10,             # Optional with default\n    active: Optional[bool] = None # Optional, can be None\n):\n    # URL: /search?q=python&page=2&limit=5\n    return {\"query\": q, \"page\": page, \"limit\": limit}\n\n@app.get(\"/users/{user_id}/posts/{post_id}\")\ndef get_user_post(user_id: int, post_id: int):\n    return {\"user_id\": user_id, \"post_id\": post_id}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Middleware & CORS"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from fastapi.middleware.cors import CORSMiddleware\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=[\"http://localhost:3000\"],   # Frontend URL\n    allow_methods=[\"*\"],\n    allow_headers=[\"*\"],\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "21.4 Flask (Lightweight Alternative)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from flask import Flask, request, jsonify\n\napp = Flask(__name__)\n\n@app.route(\"/users\", methods=[\"GET\"])\ndef get_users():\n    return jsonify([{\"name\": \"Alice\"}, {\"name\": \"Bob\"}])\n\n@app.route(\"/users\", methods=[\"POST\"])\ndef create_user():\n    data = request.json\n    return jsonify(data), 201\n\nif __name__ == \"__main__\":\n    app.run(debug=True)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Consume a public API (JSONPlaceholder), fetch and display users",
                "Build a CRUD API with FastAPI for a todo list",
                "Add authentication (API key) to your FastAPI endpoint",
                "Download a file from a URL using `requests` with streaming"
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What web scraping is and when to use it",
                "BeautifulSoup for HTML parsing",
                "Handling pagination and dynamic content",
                "Selenium for JavaScript-rendered pages",
                "Ethical scraping and best practices"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "22.1 What is Web Scraping?"
            },
            {
              "type": "paragraph",
              "text": "**Web scraping** is the automated extraction of data from websites. You fetch the HTML of a page and extract specific information (prices, titles, emails, etc.)."
            },
            {
              "type": "code",
              "language": "python",
              "code": "When to Use:\n  ✅ No API available\n  ✅ Public data (prices, news, weather)\n  ✅ Research and data collection\n  \nWhen NOT to Use:\n  ❌ An API exists (use the API instead!)\n  ❌ Website's robots.txt or Terms of Service forbids it\n  ❌ Scraping personal/private data"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "22.2 BeautifulSoup — HTML Parsing"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "pip install beautifulsoup4 requests lxml"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Basic Scraping"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import requests\nfrom bs4 import BeautifulSoup\n\n# Fetch the page\nurl = \"https://quotes.toscrape.com\"\nresponse = requests.get(url)\nsoup = BeautifulSoup(response.text, \"lxml\")\n\n# Find elements\ntitle = soup.title.text                      # Page title\nall_quotes = soup.find_all(\"span\", class_=\"text\")\nall_authors = soup.find_all(\"small\", class_=\"author\")\n\nfor quote, author in zip(all_quotes, all_authors):\n    print(f'\"{quote.text}\" — {author.text}')"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Finding Elements"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# By tag\nsoup.find(\"h1\")                     # First <h1>\nsoup.find_all(\"p\")                  # All <p> tags\n\n# By class\nsoup.find(\"div\", class_=\"content\")  # <div class=\"content\">\nsoup.find_all(\"span\", class_=\"price\")\n\n# By ID\nsoup.find(id=\"main-header\")        # <... id=\"main-header\">\n\n# By CSS selector (most powerful!)\nsoup.select(\"div.product > h2\")    # h2 inside div.product\nsoup.select(\"ul li a\")             # All links inside list items\nsoup.select(\"#main .title\")        # .title inside #main\nsoup.select(\"table tr td:nth-child(2)\")  # 2nd column of table\n\n# By attribute\nsoup.find(\"a\", attrs={\"data-id\": \"123\"})\nsoup.find_all(\"input\", {\"type\": \"text\"})"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Extracting Data"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Get text\nelement.text                        # All text content\nelement.get_text(strip=True)       # Stripped text\nelement.string                      # Direct string only\n\n# Get attributes\nlink = soup.find(\"a\")\nlink[\"href\"]                        # URL\nlink.get(\"href\", \"\")              # URL with default\n\n# Get attribute from all elements\nall_links = [a[\"href\"] for a in soup.find_all(\"a\", href=True)]\n\n# Navigate the DOM\nelement.parent                      # Parent element\nelement.children                    # Direct children\nelement.next_sibling               # Next sibling\nelement.find_next(\"p\")            # Next <p> in document"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Scraping a Table"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import pandas as pd\n\n# Method 1: Manual\ntable = soup.find(\"table\")\nrows = []\nfor tr in table.find_all(\"tr\"):\n    cells = [td.text.strip() for td in tr.find_all([\"td\", \"th\"])]\n    rows.append(cells)\n\ndf = pd.DataFrame(rows[1:], columns=rows[0])\n\n# Method 2: Pandas (even easier!)\ntables = pd.read_html(url)    # Finds ALL tables on the page\ndf = tables[0]                 # First table"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Handling Pagination"
            },
            {
              "type": "code",
              "language": "python",
              "code": "all_quotes = []\npage = 1\n\nwhile True:\n    url = f\"https://quotes.toscrape.com/page/{page}/\"\n    response = requests.get(url)\n    soup = BeautifulSoup(response.text, \"lxml\")\n    \n    quotes = soup.find_all(\"span\", class_=\"text\")\n    if not quotes:\n        break   # No more pages\n    \n    for q in quotes:\n        all_quotes.append(q.text)\n    \n    page += 1\n    import time\n    time.sleep(1)   # Be polite! Don't hammer the server\n\nprint(f\"Scraped {len(all_quotes)} quotes from {page-1} pages\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "22.3 Selenium — JavaScript-Rendered Pages"
            },
            {
              "type": "paragraph",
              "text": "BeautifulSoup can only parse static HTML. For pages that load content via JavaScript (SPAs, infinite scroll), use **Selenium**."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "pip install selenium webdriver-manager"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from selenium import webdriver\nfrom selenium.webdriver.common.by import By\nfrom selenium.webdriver.common.keys import Keys\nfrom selenium.webdriver.support.ui import WebDriverWait\nfrom selenium.webdriver.support import expected_conditions as EC\nfrom webdriver_manager.chrome import ChromeDriverManager\nfrom selenium.webdriver.chrome.service import Service\n\n# Setup browser\nservice = Service(ChromeDriverManager().install())\ndriver = webdriver.Chrome(service=service)\n\n# Navigate to page\ndriver.get(\"https://example.com\")\n\n# Find elements\nelement = driver.find_element(By.ID, \"search-box\")\nelements = driver.find_elements(By.CLASS_NAME, \"product\")\nlink = driver.find_element(By.CSS_SELECTOR, \"a.nav-link\")\n\n# Interact\nelement.send_keys(\"Python\")           # Type text\nelement.send_keys(Keys.RETURN)        # Press Enter\nbutton = driver.find_element(By.ID, \"submit\")\nbutton.click()                         # Click\n\n# Wait for element to appear (important for JS-rendered content!)\nwait = WebDriverWait(driver, 10)\nelement = wait.until(\n    EC.presence_of_element_located((By.CLASS_NAME, \"results\"))\n)\n\n# Get content\nprint(element.text)\nhtml = driver.page_source             # Get rendered HTML\n\n# Parse with BeautifulSoup\nsoup = BeautifulSoup(driver.page_source, \"lxml\")\n\n# Scroll down (for infinite scroll pages)\ndriver.execute_script(\"window.scrollTo(0, document.body.scrollHeight);\")\n\n# Screenshot\ndriver.save_screenshot(\"screenshot.png\")\n\n# Close\ndriver.quit()\n\n# Headless mode (no visible browser window)\noptions = webdriver.ChromeOptions()\noptions.add_argument(\"--headless\")\ndriver = webdriver.Chrome(service=service, options=options)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "22.4 Best Practices"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# 1. Always check robots.txt first\nresponse = requests.get(\"https://example.com/robots.txt\")\nprint(response.text)\n\n# 2. Set a User-Agent (identify yourself)\nheaders = {\"User-Agent\": \"MyBot/1.0 (contact@example.com)\"}\nresponse = requests.get(url, headers=headers)\n\n# 3. Add delays between requests\nimport time\ntime.sleep(1)   # 1 second between requests\n\n# 4. Handle errors gracefully\ntry:\n    response = requests.get(url, timeout=10)\n    response.raise_for_status()\nexcept requests.exceptions.RequestException as e:\n    print(f\"Failed: {e}\")\n\n# 5. Cache results (don't scrape the same page twice)\nimport hashlib, os, json\n\ndef cached_request(url, cache_dir=\"cache\"):\n    os.makedirs(cache_dir, exist_ok=True)\n    cache_key = hashlib.md5(url.encode()).hexdigest()\n    cache_file = os.path.join(cache_dir, f\"{cache_key}.html\")\n    \n    if os.path.exists(cache_file):\n        with open(cache_file, \"r\") as f:\n            return f.read()\n    \n    response = requests.get(url)\n    with open(cache_file, \"w\") as f:\n        f.write(response.text)\n    return response.text"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Scrape quotes from `quotes.toscrape.com` — extract quote, author, and tags",
                "Scrape a table from Wikipedia and convert to a Pandas DataFrame",
                "Handle pagination — scrape all pages of a multi-page listing",
                "Use Selenium to scrape a JavaScript-rendered page"
              ]
            },
            {
              "type": "quiz",
              "question": "Which HTTP status code indicates that the client request was successful and a new resource was created?",
              "options": [
                "200 OK",
                "204 No Content",
                "201 Created",
                "301 Moved Permanently"
              ],
              "answer": 2,
              "explanation": "HTTP 201 Created indicates that the request succeeded and led to the creation of a new resource on the server, commonly returned after a successful POST request."
            }
          ]
        },
        {
          "slug": "database-and-sql-orm",
          "title": "Databases, SQL & SQLAlchemy ORM",
          "description": "Comprehensive hands-on guide to databases, sql & sqlalchemy orm in Python.",
          "duration": 25,
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
                "SQL basics (CRUD operations)",
                "SQLite with Python (built-in, no setup!)",
                "SQLAlchemy ORM",
                "Connection pooling and transactions",
                "Database migrations (Alembic)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "23.1 SQL Basics"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is SQL?"
            },
            {
              "type": "paragraph",
              "text": "**SQL** (Structured Query Language) is the language used to interact with relational databases. Data is organized in **tables** with **rows** and **columns**."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "-- CREATE: Define a table structure\nCREATE TABLE users (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    email TEXT UNIQUE NOT NULL,\n    age INTEGER,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\n-- INSERT: Add data\nINSERT INTO users (name, email, age) VALUES ('Aravind', 'aravind@test.com', 25);\nINSERT INTO users (name, email, age) VALUES ('Alice', 'alice@test.com', 30);\n\n-- SELECT: Read data\nSELECT * FROM users;                          -- All columns, all rows\nSELECT name, email FROM users;                -- Specific columns\nSELECT * FROM users WHERE age > 25;           -- Filter\nSELECT * FROM users ORDER BY age DESC;        -- Sort\nSELECT * FROM users LIMIT 10 OFFSET 20;      -- Pagination\n\n-- UPDATE: Modify data\nUPDATE users SET age = 26 WHERE name = 'Aravind';\n\n-- DELETE: Remove data\nDELETE FROM users WHERE id = 1;\n\n-- Aggregate functions\nSELECT COUNT(*) FROM users;                   -- Count rows\nSELECT AVG(age) FROM users;                   -- Average\nSELECT MAX(age), MIN(age) FROM users;         -- Max/Min\nSELECT city, COUNT(*) FROM users GROUP BY city; -- Group\n\n-- JOIN: Combine tables\nSELECT users.name, orders.total\nFROM users\nJOIN orders ON users.id = orders.user_id;"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "23.2 SQLite with Python (Built-in)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import sqlite3\n\n# Connect (creates file if doesn't exist)\nconn = sqlite3.connect(\"myapp.db\")\n# For in-memory database:\n# conn = sqlite3.connect(\":memory:\")\n\ncursor = conn.cursor()\n\n# Create table\ncursor.execute(\"\"\"\n    CREATE TABLE IF NOT EXISTS users (\n        id INTEGER PRIMARY KEY AUTOINCREMENT,\n        name TEXT NOT NULL,\n        email TEXT UNIQUE NOT NULL,\n        age INTEGER\n    )\n\"\"\")\n\n# Insert data (use parameterized queries — prevents SQL injection!)\ncursor.execute(\n    \"INSERT INTO users (name, email, age) VALUES (?, ?, ?)\",\n    (\"Aravind\", \"aravind@test.com\", 25)\n)\n\n# Insert many\nusers = [\n    (\"Alice\", \"alice@test.com\", 30),\n    (\"Bob\", \"bob@test.com\", 28),\n    (\"Charlie\", \"charlie@test.com\", 35),\n]\ncursor.executemany(\n    \"INSERT INTO users (name, email, age) VALUES (?, ?, ?)\",\n    users\n)\n\n# Commit (save changes)\nconn.commit()\n\n# Query data\ncursor.execute(\"SELECT * FROM users WHERE age > ?\", (25,))\nrows = cursor.fetchall()       # List of tuples\nfor row in rows:\n    print(row)   # (1, 'Alice', 'alice@test.com', 30)\n\n# Fetch one\ncursor.execute(\"SELECT * FROM users WHERE id = ?\", (1,))\nuser = cursor.fetchone()\n\n# Get column names\ncursor.execute(\"SELECT * FROM users\")\ncolumns = [description[0] for description in cursor.description]\n# ['id', 'name', 'email', 'age']\n\n# Use Row factory (access by column name!)\nconn.row_factory = sqlite3.Row\ncursor = conn.cursor()\ncursor.execute(\"SELECT * FROM users\")\nfor row in cursor.fetchall():\n    print(row[\"name\"], row[\"email\"])   # Access by name!\n\n# Close connection\nconn.close()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Context Manager Pattern"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Best practice: use context manager (auto-commits and handles errors)\nimport sqlite3\n\ndef get_users(min_age=0):\n    with sqlite3.connect(\"myapp.db\") as conn:\n        conn.row_factory = sqlite3.Row\n        cursor = conn.execute(\n            \"SELECT * FROM users WHERE age >= ? ORDER BY name\",\n            (min_age,)\n        )\n        return [dict(row) for row in cursor.fetchall()]"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "23.3 SQLAlchemy ORM"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is an ORM?"
            },
            {
              "type": "paragraph",
              "text": "An **ORM** (Object-Relational Mapper) lets you interact with databases using Python classes instead of raw SQL. Each table = a class, each row = an object."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "pip install sqlalchemy"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Defining Models"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime, ForeignKey\nfrom sqlalchemy.orm import declarative_base, sessionmaker, relationship\nfrom datetime import datetime\n\n# Setup\nengine = create_engine(\"sqlite:///myapp.db\", echo=False)\nBase = declarative_base()\nSession = sessionmaker(bind=engine)\n\n# Define models (tables)\nclass User(Base):\n    __tablename__ = \"users\"\n    \n    id = Column(Integer, primary_key=True, autoincrement=True)\n    name = Column(String(100), nullable=False)\n    email = Column(String(200), unique=True, nullable=False)\n    age = Column(Integer)\n    created_at = Column(DateTime, default=datetime.utcnow)\n    \n    # Relationship: one user has many posts\n    posts = relationship(\"Post\", back_populates=\"author\")\n    \n    def __repr__(self):\n        return f\"<User(name={self.name}, email={self.email})>\"\n\nclass Post(Base):\n    __tablename__ = \"posts\"\n    \n    id = Column(Integer, primary_key=True, autoincrement=True)\n    title = Column(String(200), nullable=False)\n    content = Column(String)\n    user_id = Column(Integer, ForeignKey(\"users.id\"))\n    \n    # Relationship back to user\n    author = relationship(\"User\", back_populates=\"posts\")\n\n# Create all tables\nBase.metadata.create_all(engine)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "CRUD Operations"
            },
            {
              "type": "code",
              "language": "python",
              "code": "session = Session()\n\n# CREATE\nuser = User(name=\"Aravind\", email=\"aravind@test.com\", age=25)\nsession.add(user)\nsession.commit()\n\n# Add multiple\nusers = [\n    User(name=\"Alice\", email=\"alice@test.com\", age=30),\n    User(name=\"Bob\", email=\"bob@test.com\", age=28),\n]\nsession.add_all(users)\nsession.commit()\n\n# READ\nall_users = session.query(User).all()\nuser = session.query(User).filter_by(name=\"Aravind\").first()\nadults = session.query(User).filter(User.age >= 18).all()\nordered = session.query(User).order_by(User.age.desc()).all()\ncount = session.query(User).count()\n\n# READ with relationships\nuser = session.query(User).filter_by(name=\"Aravind\").first()\nfor post in user.posts:\n    print(post.title)\n\n# UPDATE\nuser = session.query(User).filter_by(name=\"Aravind\").first()\nuser.age = 26\nsession.commit()\n\n# Bulk update\nsession.query(User).filter(User.age < 18).update({\"age\": 18})\nsession.commit()\n\n# DELETE\nuser = session.query(User).filter_by(name=\"Bob\").first()\nsession.delete(user)\nsession.commit()\n\n# Close session\nsession.close()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Advanced Queries"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sqlalchemy import func, and_, or_, desc\n\n# Aggregate\navg_age = session.query(func.avg(User.age)).scalar()\ncount = session.query(func.count(User.id)).scalar()\n\n# Complex filters\nusers = session.query(User).filter(\n    and_(\n        User.age >= 25,\n        or_(User.name.like(\"A%\"), User.name.like(\"B%\"))\n    )\n).all()\n\n# JOIN\nresults = session.query(User, Post).join(Post).all()\n\n# Group By\nfrom sqlalchemy import func\nage_counts = session.query(\n    User.age, func.count(User.id)\n).group_by(User.age).all()\n\n# Pagination\npage = 1\nper_page = 10\nusers = session.query(User).offset((page-1)*per_page).limit(per_page).all()\n\n# Exists check\nexists = session.query(User).filter_by(email=\"test@test.com\").first() is not None"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "23.4 Database Connections for Different Databases"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sqlalchemy import create_engine\n\n# SQLite (file-based, no server needed)\nengine = create_engine(\"sqlite:///myapp.db\")\n\n# PostgreSQL\nengine = create_engine(\"postgresql://user:password@localhost:5432/mydb\")\n\n# MySQL\nengine = create_engine(\"mysql+pymysql://user:password@localhost:3306/mydb\")\n\n# Connection pool settings (production)\nengine = create_engine(\n    \"postgresql://user:pass@localhost/mydb\",\n    pool_size=10,          # Max connections in pool\n    max_overflow=20,       # Extra connections beyond pool_size\n    pool_recycle=3600,     # Recycle connections after 1 hour\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "23.5 Transactions"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Transactions ensure all-or-nothing operations\ntry:\n    session.begin()\n    \n    sender = session.query(User).filter_by(id=1).first()\n    receiver = session.query(User).filter_by(id=2).first()\n    \n    sender.balance -= 100\n    receiver.balance += 100\n    \n    session.commit()       # All changes saved\nexcept Exception:\n    session.rollback()     # Undo ALL changes if any error\n    raise\nfinally:\n    session.close()"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a SQLite database with 3 tables, insert data, and query with JOINs",
                "Build a `User` model with SQLAlchemy and implement full CRUD",
                "Create a one-to-many relationship (User → Posts) and query across tables",
                "Implement a transaction that transfers balance between two accounts"
              ]
            },
            {
              "type": "quiz",
              "question": "What is the benefit of using an Object-Relational Mapper (ORM) like SQLAlchemy?",
              "options": [
                "It compiles Python code directly into SQL stored procedures.",
                "It allows interacting with database tables and relationships as native Python classes and objects, abstracting SQL dialects.",
                "It eliminates the need for any database indexing.",
                "It replaces relational databases with flat CSV files."
              ],
              "answer": 1,
              "explanation": "An ORM maps database tables to Python objects and relationships, enabling developers to perform CRUD operations, migrations, and relationship navigation using Python code rather than raw SQL strings."
            }
          ]
        },
        {
          "slug": "fastapi-and-modern-apis",
          "title": "FastAPI: High-Performance Async APIs & Validation",
          "description": "Comprehensive hands-on guide to fastapi: high-performance async apis & validation in Python.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Master the art of building modern, asynchronous, and type-safe APIs using Python's fastest web framework."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Modules"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Introduction & Async**: Speed, Type Safety, and the Async/Await philosophy.",
                "**Pydantic & Validation**: Using Pydantic for robust data schemas.",
                "**Dependency Injection**: Reusable logic for Auth and DB sessions.",
                "**Database Integration**: Connecting SQLAlchemy and response models.",
                "**Security & Deployment**: OAuth2, JWT, and Dockerization."
              ]
            },
            {
              "type": "paragraph",
              "text": "Back to Python Index"
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Why FastAPI? (Speed, Type Safety, Async)",
                "Setting up the Environment",
                "Your first `async` endpoint",
                "Automatic Documentation (Swagger & Redoc)",
                "Type Hints and Pydantic basics"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 Why FastAPI?"
            },
            {
              "type": "definition",
              "term": "FastAPI is a modern, fast (high",
              "plain": "FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": ""
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Flask** is like a **Standard Elevator**. It goes up and down reliably.",
                "**FastAPI** is like a **Teleporter**. Because it uses **Asynchronous** code, it doesn't wait for one floor to finish; it handles thousands of requests simultaneously with near-zero latency."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Minimal Application"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get(\"/\")\nasync def root():\n    return {\"message\": \"Hello from the Future\"}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Automatic Documentation"
            },
            {
              "type": "paragraph",
              "text": "One of FastAPI's best features is that it creates an interactive API documentation for you automatically."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Swagger UI**: Visit `http://127.0.0.1:8000/docs`",
                "**ReDoc**: Visit `http://127.0.0.1:8000/redoc`"
              ]
            },
            {
              "type": "paragraph",
              "text": "You can test your API endpoints directly from the browser!"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Install `fastapi` and `uvicorn`.",
                "Create an `async` route that takes a path parameter `item_id`.",
                "Open the `/docs` page and use the \"Try it out\" feature to test your endpoint.",
                "Experiment with query parameters: Create a route that takes `q` and `limit`."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Pydantic?",
                "Creating Data Schemas",
                "Automatic JSON conversion",
                "Field validation and constraints",
                "Nested Models"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Pydantic Schemas"
            },
            {
              "type": "paragraph",
              "text": "FastAPI uses Pydantic to validate the data coming into your API. If the data is wrong, it returns a 422 error automatically."
            },
            {
              "type": "code",
              "language": "python",
              "code": "from pydantic import BaseModel, Field\n\nclass Item(BaseModel):\n    name: str\n    description: str | None = None\n    price: float = Field(gt=0, description=\"The price must be greater than zero\")\n    tax: float | None = None"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Using Schemas in Routes"
            },
            {
              "type": "code",
              "language": "python",
              "code": "@app.post(\"/items/\")\nasync def create_item(item: Item):\n    return item # FastAPI automatically converts this back to JSON"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a `User` schema with `username`, `email`, and an optional `bio`.",
                "Add a `Field` validator to ensure the `username` is at least 3 characters long.",
                "Build a POST route that accepts a `User` and returns it.",
                "Try sending invalid JSON to your API and observe the automatic error response."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The `Depends` keyword",
                "Creating reusable dependencies",
                "Sub-dependencies",
                "Global dependencies",
                "Using dependencies for Authentication"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 What is Dependency Injection?"
            },
            {
              "type": "paragraph",
              "text": "In FastAPI, a \"dependency\" is a function that can be shared across many routes to handle common logic like \"getting the current user\" or \"checking a database connection.\""
            },
            {
              "type": "code",
              "language": "python",
              "code": "from fastapi import Depends\n\nasync def common_parameters(q: str | None = None, skip: int = 0, limit: int = 100):\n    return {\"q\": q, \"skip\": skip, \"limit\": limit}\n\n@app.get(\"/items/\")\nasync def read_items(commons: dict = Depends(common_parameters)):\n    return commons"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a dependency that checks if a specific \"API-Key\" is present in the headers.",
                "Apply that dependency to a specific route using `Depends`.",
                "Create a sub-dependency that relies on another dependency.",
                "Experiment with `Annotated` (Python 3.9+) to define your dependencies more cleanly."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Connecting to SQLAlchemy",
                "Creating Database Sessions as Dependencies",
                "CRUD with FastAPI",
                "Response Models (Hiding sensitive data)",
                "Async Database drivers (Introduction)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 The DB Dependency"
            },
            {
              "type": "paragraph",
              "text": "The standard way to handle a database in FastAPI is to create a session for every request and close it when the request is done."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Dependency\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()\n\n@app.get(\"/users/{user_id}\", response_model=schemas.User)\ndef read_user(user_id: int, db: Session = Depends(get_db)):\n    db_user = crud.get_user(db, user_id=user_id)\n    if db_user is None:\n        raise HTTPException(status_code=404, detail=\"User not found\")\n    return db_user"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Set up a local SQLite database with SQLAlchemy in a FastAPI project.",
                "Create a `User` table and a corresponding Pydantic schema.",
                "Build a POST route to create a user and a GET route to fetch all users.",
                "Use `response_model` to ensure the user's password is NOT returned in the JSON response."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "OAuth2 with Password flow",
                "JWT (JSON Web Tokens)",
                "Hashing passwords with `passlib`",
                "Production deployment with Docker",
                "Uvicorn and Gunicorn workers"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 OAuth2 and JWT"
            },
            {
              "type": "paragraph",
              "text": "FastAPI has built-in support for security."
            },
            {
              "type": "code",
              "language": "python",
              "code": "from fastapi.security import OAuth2PasswordBearer\n\noauth2_scheme = OAuth2PasswordBearer(tokenUrl=\"token\")\n\n@app.get(\"/users/me\")\nasync def read_users_me(token: str = Depends(oauth2_scheme)):\n    # Verify JWT token here...\n    return {\"token\": token}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Deployment with Docker"
            },
            {
              "type": "paragraph",
              "text": "FastAPI apps are usually deployed as containers."
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "FROM python:3.9\nWORKDIR /code\nCOPY ./requirements.txt /code/requirements.txt\nRUN pip install --no-cache-dir --upgrade -r /code/requirements.txt\nCOPY ./app /code/app\nCMD [\"uvicorn\", \"app.main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"80\"]"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Implement a simple \"Login\" route that returns a hardcoded JWT token.",
                "Protect a \"Secret\" route so it only works if a valid token is provided.",
                "Create a `Dockerfile` for your FastAPI app.",
                "Learn how to use `python-jose` to sign and verify JWT tokens."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the FastAPI Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In FastAPI, how are input validation and interactive OpenAPI docs automatically generated?",
              "options": [
                "By writing separate XML schema configuration files.",
                "Through Python type hints and Pydantic model definitions in endpoint signatures.",
                "By running a separate code generation compiler.",
                "By inspecting incoming HTTP request headers at runtime."
              ],
              "answer": 1,
              "explanation": "FastAPI leverages standard Python type annotations and Pydantic models to automatically validate request payloads, deserialize parameters, and generate interactive OpenAPI (Swagger) documentation."
            }
          ]
        },
        {
          "slug": "flask-microframework",
          "title": "Flask Microframework: Routing, Templates & Blueprints",
          "description": "Comprehensive hands-on guide to flask microframework: routing, templates & blueprints in Python.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Master the art of building lightweight, flexible, and scalable web applications. Flask is the tool of choice for microservices and developers who want total control over their stack."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Modules"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Phase 1: Foundations"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Introduction & Setup**: Minimal app, routing, and debug mode.",
                "**Templates & Jinja2**: HTML rendering and inheritance.",
                "**Request Handling**: Queries, forms, and JSON."
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Phase 2: Building Features"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Database (SQLAlchemy)**: Models, CRUD, and Relationships.",
                "**Forms & Validation**: Flask-WTF and security.",
                "**Authentication (Flask-Login)**: User sessions and hashing."
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Phase 3: Professional Scale"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**REST APIs**: Flask-RESTful and JSON services.",
                "**Blueprints (Large Apps)**: Modular organization.",
                "**Error Handling & Context**: UX feedback and internals.",
                "**Testing & Deployment**: Quality and production servers."
              ]
            },
            {
              "type": "paragraph",
              "text": "Back to Main Index"
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 1 day"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The Micro-framework Philosophy",
                "Flask vs. Django",
                "Creating a Minimal Application",
                "Routing Basics",
                "Debug Mode and the Development Server"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is Flask?"
            },
            {
              "type": "definition",
              "term": "Flask is a lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications. It provides the \"core\" but lets you choose your own database, auth, and form libraries.",
              "plain": "Flask is a lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications. It provides the \"core\" but lets you choose your own database, auth, and form libraries."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": ""
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Django** is like a **Ready-to-Move-In Mansion**. It comes with furniture, plumbing, and a security system already installed.",
                "**Flask** is like a **Custom Studio Apartment**. You get the walls and the floor (the core), but you get to choose exactly what brand of stove (DB), sofa (Auth), and lights (Forms) you want to install."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Minimal Application"
            },
            {
              "type": "paragraph",
              "text": "Unlike Django, a Flask app can be as small as 5 lines of code in a single file."
            },
            {
              "type": "code",
              "language": "python",
              "code": "from flask import Flask\n\napp = Flask(__name__)\n\n@app.route(\"/\")\ndef hello_world():\n    return \"<p>Hello, Flask!</p>\"\n\nif __name__ == \"__main__\":\n    app.run(debug=True)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Routing"
            },
            {
              "type": "paragraph",
              "text": "Routes map URLs to Python functions."
            },
            {
              "type": "code",
              "language": "python",
              "code": "@app.route(\"/user/<username>\")\ndef show_user_profile(username):\n    # show the user profile for that user\n    return f\"User {username}\"\n\n@app.route(\"/post/<int:post_id>\")\ndef show_post(post_id):\n    # show the post with the given id, the id is an integer\n    return f\"Post {post_id}\""
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a virtual environment and install Flask using `pip install flask`.",
                "Build a \"Hello Flask\" app and run it in debug mode.",
                "Create a route `/greet/<name>` that returns \"Hello [name]!\".",
                "Add a route that takes two integers and returns their sum."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 1 day"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Rendering Templates with `render_template`",
                "Jinja2 Syntax (Variables, Loops, Ifs)",
                "Template Inheritance",
                "Using `url_for()`",
                "Static Files (Images, CSS, JS)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Rendering Templates"
            },
            {
              "type": "paragraph",
              "text": "Flask expects your HTML files to be in a folder named `templates`."
            },
            {
              "type": "code",
              "language": "python",
              "code": "from flask import render_template\n\n@app.route('/hello/')\n@app.route('/hello/<name>')\ndef hello(name=None):\n    return render_template('hello.html', name=name)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Template Inheritance"
            },
            {
              "type": "paragraph",
              "text": "Just like Django, Flask uses `block` and `extends` for base templates."
            },
            {
              "type": "paragraph",
              "text": "*`base.html`:*"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!doctype html>\n<title>{% block title %}{% endblock %} - My App</title>\n<nav>\n  <a href=\"{{ url_for('index') }}\">Home</a>\n</nav>\n<div id=\"content\">\n  {% block content %}{% endblock %}\n</div>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 url_for()"
            },
            {
              "type": "paragraph",
              "text": "Never hardcode URLs in your templates. Use `url_for('function_name')` to generate them dynamically."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<a href=\"{{ url_for('hello', name='Aravind') }}\">Greet me</a>"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a `base.html` and a `home.html` that extends it.",
                "Pass a list of \"Hobby\" strings from your Python view to a template and display them using a `{% for %}` loop.",
                "Link a CSS file in your `static/css/` folder to your base template.",
                "Experiment with `{% if user %}` to show different content if a name is passed to the template."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Why use Blueprints?",
                "Creating a Blueprint",
                "Registering Blueprints",
                "Organized Folder Structures",
                "Application Factories"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 What is a Blueprint?"
            },
            {
              "type": "paragraph",
              "text": "A Blueprint is a way to organize a group of related views and other code. Rather than registering views and other code directly with an application, they are registered with a blueprint."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": "Instead of writing your whole book on one massive scroll, you write it in **Chapters** (Blueprints) and then bind them together into a **Book** (App)."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Creating a Blueprint"
            },
            {
              "type": "paragraph",
              "text": "*`users/routes.py`:*"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from flask import Blueprint\n\nusers = Blueprint('users', __name__)\n\n@users.route(\"/login\")\ndef login():\n    return \"Login Page\""
            },
            {
              "type": "paragraph",
              "text": "*`__init__.py`:*"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from .users.routes import users\napp.register_blueprint(users)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a `main` blueprint and an `admin` blueprint.",
                "Register both blueprints in your main app file.",
                "Observe how the URL structure changes (e.g., `/admin/dashboard`).",
                "Implement an \"Application Factory\" function (`create_app()`) to initialize your app."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Testing with `pytest`",
                "Using the Flask `test_client`",
                "Environment Variables (`python-dotenv`)",
                "Production WSGI Servers (Gunicorn)",
                "Deployment on Heroku or VPS"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Testing with `test_client`"
            },
            {
              "type": "code",
              "language": "python",
              "code": "def test_home_page(client):\n    response = client.get('/')\n    assert response.status_code == 200\n    assert b\"Welcome\" in response.data"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 Gunicorn"
            },
            {
              "type": "paragraph",
              "text": "In production, Flask's built-in server is not secure or efficient. Use Gunicorn."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "pip install gunicorn\ngunicorn app:app"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.3 Deployment Checklist"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Use `python-dotenv` for `SECRET_KEY`.",
                "Set `DEBUG=False`.",
                "Configure a real database (PostgreSQL).",
                "Use a reverse proxy (Nginx)."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a test that ensures your Login page loads correctly.",
                "Create a `.env` file to store your `FLASK_APP` and `SECRET_KEY`.",
                "Learn how to create a `Procfile` for Heroku deployment.",
                "Research why Nginx is usually placed in front of Gunicorn."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Flask Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "What is the purpose of Flask Blueprints in large application design?",
              "options": [
                "They replace Python modules with C extensions.",
                "They organize routes, templates, and static files into modular, reusable architectural components.",
                "They automatically deploy apps to Kubernetes.",
                "They convert synchronous functions to async coroutines."
              ],
              "answer": 1,
              "explanation": "Blueprints allow developers to structure large Flask applications into self-contained modules with isolated route prefixes, static assets, and template folders."
            }
          ]
        },
        {
          "slug": "django-enterprise-framework",
          "title": "Django: MVT Architecture, ORM, Admin & REST Framework",
          "description": "Comprehensive hands-on guide to django: mvt architecture, orm, admin & rest framework in Python.",
          "duration": 30,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Django? (The \"Batteries Included\" framework)",
                "MVT vs. MVC Architecture",
                "Setting up a Virtual Environment",
                "Creating your first Project and App",
                "The Django project structure (`settings.py`, `urls.py`, `manage.py`)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is Django?"
            },
            {
              "type": "definition",
              "term": "Django is a high",
              "plain": "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It handles much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": ""
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Flask** is like a **Swiss Army Knife**. It's small, you carry it yourself, and you have to find your own extra tools (libraries) for big tasks.",
                "**Django** is like a **Fully Equipped Construction Vehicle**. It's huge, it comes with a crane, a drill, and a GPS. You don't need to buy extra tools because everything is already \"included in the cabin.\""
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 MVT Architecture"
            },
            {
              "type": "paragraph",
              "text": "Django uses the **MVT (Model-View-Template)** pattern:"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Model**: The data structure (Database).",
                "**View**: The logic that handles the request and returns the response.",
                "**Template**: The presentation layer (HTML/CSS)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Setup & Project Creation"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# 1. Create a virtual environment\npython -m venv venv\nsource venv/bin/activate # Windows: venv\\Scripts\\activate\n\n# 2. Install Django\npip install django\n\n# 3. Start a project\ndjango-admin startproject myproject\n\n# 4. Create an app (A project can have many apps)\ncd myproject\npython manage.py startapp blog"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Set up a virtual environment and install the latest version of Django.",
                "Create a project called `mysite` and an app called `news`.",
                "Explore `settings.py` and identify where the database configuration and `INSTALLED_APPS` are located.",
                "Run the development server using `python manage.py runserver` and view the \"It worked!\" page in your browser."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Defining Models (The ORM)",
                "Field Types (CharField, TextField, DateTimeField)",
                "Model Relationships (ForeignKey, ManyToMany)",
                "Making and Applying Migrations",
                "QuerySets (The Django way to talk to SQL)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 The Django ORM"
            },
            {
              "type": "paragraph",
              "text": "Django uses an **Object-Relational Mapper (ORM)**. You define your database tables as Python classes."
            },
            {
              "type": "code",
              "language": "python",
              "code": "from django.db import models\n\nclass Post(models.Model):\n    title = models.CharField(max_length=200)\n    content = models.TextField()\n    pub_date = models.DateTimeField('date published')\n    \n    def __str__(self):\n        return self.title"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Migrations"
            },
            {
              "type": "paragraph",
              "text": "Whenever you change your `models.py`, you must tell the database."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# 1. Create the instructions (migrations)\npython manage.py makemigrations\n\n# 2. Execute the instructions in the DB\npython manage.py migrate"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 QuerySets"
            },
            {
              "type": "paragraph",
              "text": "You can query the database using Python methods instead of raw SQL."
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Get all posts\nall_posts = Post.objects.all()\n\n# Filter posts\nrecent_posts = Post.objects.filter(title__contains='Django')\n\n# Get a single object\npost = Post.objects.get(id=1)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a `Product` model with `name`, `price`, and `stock_count`.",
                "Run migrations to create the table in your local SQLite database.",
                "Open the Django Shell (`python manage.py shell`) and create 3 products using Python code.",
                "Experiment with `filter()` and `exclude()` in the shell to find specific products."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 1 day"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Creating a Superuser",
                "Registering Models in `admin.py`",
                "Customizing the Admin list view",
                "Adding search and filters",
                "Using Admin for rapid data entry"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 What is the Admin?"
            },
            {
              "type": "paragraph",
              "text": "Django provides a built-in, production-ready interface for managing your database content. It is automatically generated based on your models."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 Setup"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create your login credentials\npython manage.py createsuperuser"
            },
            {
              "type": "paragraph",
              "text": "*In `blog/admin.py`:*"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from django.contrib import admin\nfrom .models import Post\n\nadmin.site.register(Post)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 Customizing the Admin"
            },
            {
              "type": "paragraph",
              "text": "You can make the admin much more powerful with just a few lines of code."
            },
            {
              "type": "code",
              "language": "python",
              "code": "@admin.register(Post)\nclass PostAdmin(admin.ModelAdmin):\n    list_display = ('title', 'pub_date', 'is_published')\n    list_filter = ('pub_date',)\n    search_fields = ('title', 'content')"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a superuser and log in to `/admin` in your browser.",
                "Register your `Product` model and add a few products through the browser.",
                "Customize the `ProductAdmin` to show the price and stock level in the list view.",
                "Add a search bar to the admin that searches through product names and descriptions."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is a REST API?",
                "Serializers (Converting Models to JSON)",
                "APIView` vs. `ViewSet`",
                "Router configuration",
                "Token Authentication"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 What is DRF?"
            },
            {
              "type": "paragraph",
              "text": "**Django Rest Framework (DRF)** is a powerful toolkit for building Web APIs. While standard Django returns HTML, DRF returns **JSON**."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 Serializers"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from rest_framework import serializers\nfrom .models import Post\n\nclass PostSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Post\n        fields = ['id', 'title', 'content', 'pub_date']"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.3 ViewSets & Routers"
            },
            {
              "type": "paragraph",
              "text": "ViewSets allow you to define the logic for a set of related views (List, Create, Retrieve, Update, Delete) in a single class."
            },
            {
              "type": "code",
              "language": "python",
              "code": "from rest_framework import viewsets\nfrom .serializers import PostSerializer\n\nclass PostViewSet(viewsets.ModelViewSet):\n    queryset = Post.objects.all()\n    serializer_class = PostSerializer"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Install `djangorestframework` and add it to `INSTALLED_APPS`.",
                "Create a `ProductSerializer` for your product model.",
                "Build a `ProductViewSet` and register it with a DRF `DefaultRouter`.",
                "Use a tool like **Postman** or **Insomnia** to fetch your products in JSON format."
              ]
            },
            {
              "type": "quiz",
              "question": "In Django's MVT (Model-View-Template) pattern, what role does the View play?",
              "options": [
                "It defines the database schema and columns.",
                "It contains the HTML layout shown to users.",
                "It handles business logic, interacting with the Model and selecting the Template to render the response.",
                "It serves as the web server gateway interface."
              ],
              "answer": 2,
              "explanation": "In Django MVT, Models define data schemas, Templates define presentation markup, and Views contain the business logic that queries models and renders templates."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 5: Data Science, Cloud & Big Data (Specialized)",
      "lessons": [
        {
          "slug": "numpy-numerical-computing",
          "title": "NumPy: Numerical Computing & Array Vectorization",
          "description": "Comprehensive hands-on guide to numpy: numerical computing & array vectorization in Python.",
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
                "What NumPy is and why it's the foundation of data science",
                "Arrays (creation, indexing, slicing, reshaping)",
                "Vectorized operations (broadcasting)",
                "Linear algebra operations",
                "Random number generation",
                "Practical data science patterns"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.1 What is NumPy?"
            },
            {
              "type": "paragraph",
              "text": "**NumPy** (Numerical Python) is the fundamental library for numerical computing in Python. It provides a powerful N-dimensional array object and optimized mathematical functions."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Why NumPy Over Python Lists?"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import numpy as np\nimport time\n\n# Speed comparison\npython_list = list(range(1_000_000))\nnumpy_array = np.arange(1_000_000)\n\n# Python list: ~150ms\nstart = time.time()\nresult = [x ** 2 for x in python_list]\nprint(f\"List: {time.time()-start:.4f}s\")\n\n# NumPy: ~3ms (50x faster!)\nstart = time.time()\nresult = numpy_array ** 2\nprint(f\"NumPy: {time.time()-start:.4f}s\")"
            },
            {
              "type": "code",
              "language": "python",
              "code": "Why is NumPy faster?\n  1. Fixed type: All elements are the same type (no type checking)\n  2. Contiguous memory: Elements stored side by side (cache friendly)\n  3. C implementation: Operations run in compiled C, not interpreted Python\n  4. Vectorization: Operations applied to entire array at once (no loops)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.2 Creating Arrays"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import numpy as np\n\n# From Python lists\na = np.array([1, 2, 3, 4, 5])               # 1D array\nb = np.array([[1, 2, 3], [4, 5, 6]])         # 2D array (matrix)\nc = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])  # 3D array\n\n# Special arrays\nnp.zeros((3, 4))          # 3×4 matrix of zeros\nnp.ones((2, 3))           # 2×3 matrix of ones\nnp.full((3, 3), 7)        # 3×3 matrix filled with 7\nnp.eye(4)                 # 4×4 identity matrix\nnp.empty((2, 3))          # 2×3 uninitialized (fast, random values)\n\n# Ranges\nnp.arange(0, 10, 2)       # [0, 2, 4, 6, 8] (like range())\nnp.linspace(0, 1, 5)      # [0. , 0.25, 0.5, 0.75, 1.] (5 evenly spaced)\nnp.logspace(0, 3, 4)      # [1, 10, 100, 1000] (log scale)\n\n# Data types\na = np.array([1, 2, 3], dtype=np.float32)\na = np.array([1, 2, 3], dtype=np.int64)\nprint(a.dtype)             # int64"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.3 Array Properties"
            },
            {
              "type": "code",
              "language": "python",
              "code": "a = np.array([[1, 2, 3], [4, 5, 6]])\n\na.shape       # (2, 3) — 2 rows, 3 columns\na.ndim        # 2 — number of dimensions\na.size        # 6 — total number of elements\na.dtype       # int64 — data type\na.itemsize    # 8 — bytes per element\na.nbytes      # 48 — total bytes (6 × 8)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.4 Indexing & Slicing"
            },
            {
              "type": "code",
              "language": "python",
              "code": "a = np.array([[10, 20, 30],\n              [40, 50, 60],\n              [70, 80, 90]])\n\n# Basic indexing\na[0, 0]        # 10 (row 0, col 0)\na[2, 1]        # 80 (row 2, col 1)\na[-1, -1]      # 90 (last element)\n\n# Slicing [row_start:row_end, col_start:col_end]\na[0:2, :]      # First 2 rows, all columns\na[:, 1]        # All rows, column 1 → [20, 50, 80]\na[1:, 1:]      # Rows 1+, columns 1+ → [[50, 60], [80, 90]]\n\n# Boolean indexing (filtering!)\na[a > 50]      # [60, 70, 80, 90] — elements > 50\n\n# Fancy indexing (index with arrays)\na[[0, 2], :]   # Rows 0 and 2\na[:, [0, 2]]   # Columns 0 and 2"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.5 Reshaping"
            },
            {
              "type": "code",
              "language": "python",
              "code": "a = np.arange(12)    # [0, 1, 2, ..., 11]\n\n# Reshape (total elements must match)\nb = a.reshape(3, 4)   # 3×4 matrix\nc = a.reshape(2, 2, 3) # 2×2×3 tensor\nd = a.reshape(4, -1)  # -1 = auto-calculate → 4×3\n\n# Flatten (multi-dim → 1D)\nb.flatten()           # Returns NEW array\nb.ravel()             # Returns VIEW (faster, shares memory)\n\n# Transpose\nb.T                   # Swap rows and columns\n\n# Add/remove dimensions\na = np.array([1, 2, 3])       # shape: (3,)\na[np.newaxis, :]               # shape: (1, 3) — row vector\na[:, np.newaxis]               # shape: (3, 1) — column vector\nnp.expand_dims(a, axis=0)     # shape: (1, 3)\nnp.squeeze(a)                  # Remove dimensions of size 1\n\n# Stacking\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nnp.vstack([a, b])     # [[1,2,3], [4,5,6]] — vertical stack\nnp.hstack([a, b])     # [1,2,3,4,5,6] — horizontal stack\nnp.concatenate([a, b]) # [1,2,3,4,5,6]"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.6 Vectorized Operations"
            },
            {
              "type": "code",
              "language": "python",
              "code": "a = np.array([1, 2, 3, 4])\nb = np.array([10, 20, 30, 40])\n\n# Element-wise operations (NO LOOPS needed!)\na + b          # [11, 22, 33, 44]\na * b          # [10, 40, 90, 160]\na ** 2         # [1, 4, 9, 16]\nnp.sqrt(a)     # [1., 1.41, 1.73, 2.]\nnp.log(a)      # Natural log\nnp.exp(a)      # e^x\n\n# Comparison (returns boolean array)\na > 2          # [False, False, True, True]\na == 3         # [False, False, True, False]\n\n# Aggregations\na.sum()        # 10\na.mean()       # 2.5\na.std()        # 1.118\na.min()        # 1\na.max()        # 4\na.argmin()     # 0 (index of min)\na.argmax()     # 3 (index of max)\na.cumsum()     # [1, 3, 6, 10] — running total\n\n# Axis operations on 2D arrays\nm = np.array([[1, 2, 3], [4, 5, 6]])\nm.sum(axis=0)    # [5, 7, 9]  — sum each column\nm.sum(axis=1)    # [6, 15]    — sum each row\nm.mean(axis=0)   # [2.5, 3.5, 4.5] — mean per column"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Broadcasting"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Broadcasting: NumPy auto-expands smaller arrays to match shapes\n\na = np.array([[1, 2, 3],\n              [4, 5, 6]])    # Shape: (2, 3)\n\nb = np.array([10, 20, 30])  # Shape: (3,) → auto-expanded to (2, 3)\n\nresult = a + b\n# [[11, 22, 33],\n#  [14, 25, 36]]\n\n# Scalar broadcasting\na * 2                        # Every element multiplied by 2"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.7 Linear Algebra"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Dot product\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nnp.dot(a, b)          # 32 (1×4 + 2×5 + 3×6)\n\n# Matrix multiplication\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nA @ B                  # Matrix multiply\nnp.matmul(A, B)       # Same thing\n\n# Other operations\nnp.linalg.det(A)      # Determinant\nnp.linalg.inv(A)      # Inverse\nnp.linalg.eig(A)      # Eigenvalues and eigenvectors\nnp.linalg.norm(a)     # Vector norm (magnitude)\n\n# Solve linear equations: Ax = b\nA = np.array([[2, 1], [1, 3]])\nb = np.array([5, 7])\nx = np.linalg.solve(A, b)    # x = [1.6, 1.8]"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.8 Random Numbers"
            },
            {
              "type": "code",
              "language": "python",
              "code": "rng = np.random.default_rng(seed=42)   # Reproducible random\n\nrng.random((3, 3))           # 3×3 of floats in [0, 1)\nrng.integers(1, 100, size=5) # 5 random ints between 1-99\nrng.normal(0, 1, size=1000)  # 1000 samples from standard normal\nrng.uniform(0, 10, size=5)   # Uniform distribution [0, 10)\nrng.choice([1, 2, 3, 4], size=3, replace=False)  # Random sample\nrng.shuffle(array)            # Shuffle in-place\nrng.permutation(array)        # Return shuffled copy"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.9 Practical Data Science Patterns"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Normalize data to [0, 1]\ndata = np.array([10, 20, 30, 40, 50])\nnormalized = (data - data.min()) / (data.max() - data.min())\n# [0., 0.25, 0.5, 0.75, 1.]\n\n# Standardize (mean=0, std=1)\nstandardized = (data - data.mean()) / data.std()\n\n# One-hot encoding\nlabels = np.array([0, 2, 1, 0, 2])\none_hot = np.eye(3)[labels]\n# [[1,0,0], [0,0,1], [0,1,0], [1,0,0], [0,0,1]]\n\n# Cosine similarity (used in embeddings/search)\ndef cosine_similarity(a, b):\n    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))\n\n# Softmax (used in neural networks)\ndef softmax(x):\n    exp_x = np.exp(x - np.max(x))  # Subtract max for numerical stability\n    return exp_x / exp_x.sum()\n\nprint(softmax(np.array([1.0, 2.0, 3.0])))\n# [0.09, 0.245, 0.665]"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a 5×5 matrix with random integers, find row-wise and column-wise means",
                "Normalize a dataset using min-max and z-score (standardization)",
                "Implement matrix multiplication from scratch and compare with `np.matmul`",
                "Generate 10,000 random samples from a normal distribution and plot a histogram"
              ]
            },
            {
              "type": "quiz",
              "question": "Why is vectorized computation in NumPy significantly faster than standard Python loops?",
              "options": [
                "NumPy arrays are stored in contiguous C memory buffers and execute pre-compiled C loops without Python interpreter overhead.",
                "NumPy converts all numbers to 8-bit integers.",
                "Python loops always run on a single CPU cache line.",
                "NumPy uses GPU threads exclusively for all operations."
              ],
              "answer": 0,
              "explanation": "Vectorized NumPy operations execute contiguous memory operations implemented in highly optimized C and Fortran routines with SIMD CPU instructions, eliminating Python per-element type-checking overhead."
            }
          ]
        },
        {
          "slug": "pandas-data-analysis",
          "title": "Pandas: DataFrames, Cleaning, GroupBy & Merges",
          "description": "Comprehensive hands-on guide to pandas: dataframes, cleaning, groupby & merges in Python.",
          "duration": 25,
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
                "Series and DataFrames",
                "Reading/writing data (CSV, Excel, JSON, SQL)",
                "Selecting, filtering, and sorting",
                "GroupBy and aggregation",
                "Merging, joining, and concatenating",
                "Handling missing data",
                "Apply, map, and transform",
                "Pivot tables and crosstabs"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.1 What is Pandas?"
            },
            {
              "type": "paragraph",
              "text": "**Pandas** is the go-to library for data manipulation and analysis in Python. It provides two main data structures: **Series** (1D) and **DataFrame** (2D table)."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": "A DataFrame is like an Excel spreadsheet — rows and columns with labels — but programmable and infinitely more powerful."
            },
            {
              "type": "code",
              "language": "python",
              "code": "import pandas as pd"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.2 Series & DataFrames"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Series (1D)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# From list\ns = pd.Series([10, 20, 30, 40], index=[\"a\", \"b\", \"c\", \"d\"])\nprint(s[\"b\"])       # 20\nprint(s[s > 20])    # c:30, d:40\n\n# From dict\ns = pd.Series({\"apples\": 5, \"bananas\": 3, \"oranges\": 8})"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "DataFrame (2D)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# From dictionary (most common)\ndf = pd.DataFrame({\n    \"name\": [\"Alice\", \"Bob\", \"Charlie\", \"Diana\"],\n    \"age\": [25, 30, 35, 28],\n    \"city\": [\"NYC\", \"LA\", \"Chicago\", \"NYC\"],\n    \"salary\": [70000, 85000, 90000, 75000]\n})\n\nprint(df)\n#       name  age     city  salary\n# 0    Alice   25      NYC   70000\n# 1      Bob   30       LA   85000\n# 2  Charlie   35  Chicago   90000\n# 3    Diana   28      NYC   75000\n\n# Basic info\ndf.shape       # (4, 4) — 4 rows, 4 columns\ndf.columns     # Index(['name', 'age', 'city', 'salary'])\ndf.dtypes      # Data type of each column\ndf.info()      # Summary (types, non-null counts, memory)\ndf.describe()  # Statistics for numeric columns\ndf.head(2)     # First 2 rows\ndf.tail(2)     # Last 2 rows\ndf.sample(2)   # 2 random rows"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.3 Reading & Writing Data"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# CSV\ndf = pd.read_csv(\"data.csv\")\ndf = pd.read_csv(\"data.csv\", sep=\";\", encoding=\"utf-8\", index_col=0)\ndf.to_csv(\"output.csv\", index=False)\n\n# Excel\ndf = pd.read_excel(\"data.xlsx\", sheet_name=\"Sheet1\")\ndf.to_excel(\"output.xlsx\", index=False)\n\n# JSON\ndf = pd.read_json(\"data.json\")\ndf.to_json(\"output.json\", orient=\"records\", indent=2)\n\n# SQL\nimport sqlite3\nconn = sqlite3.connect(\"database.db\")\ndf = pd.read_sql(\"SELECT * FROM users\", conn)\ndf.to_sql(\"users_backup\", conn, if_exists=\"replace\", index=False)\n\n# Clipboard (paste from Excel!)\ndf = pd.read_clipboard()\n\n# From URL\ndf = pd.read_csv(\"https://example.com/data.csv\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.4 Selecting Data"
            },
            {
              "type": "code",
              "language": "python",
              "code": "df = pd.DataFrame({\n    \"name\": [\"Alice\", \"Bob\", \"Charlie\", \"Diana\"],\n    \"age\": [25, 30, 35, 28],\n    \"city\": [\"NYC\", \"LA\", \"Chicago\", \"NYC\"],\n    \"salary\": [70000, 85000, 90000, 75000]\n})\n\n# Select columns\ndf[\"name\"]                      # Single column (Series)\ndf[[\"name\", \"age\"]]            # Multiple columns (DataFrame)\n\n# Select rows by index position (iloc = integer location)\ndf.iloc[0]                      # First row\ndf.iloc[0:2]                    # First 2 rows\ndf.iloc[0, 1]                   # Row 0, column 1 → 25\ndf.iloc[:, 1:3]                 # All rows, columns 1-2\n\n# Select rows by label (loc)\ndf.loc[0]                       # Row with index label 0\ndf.loc[0:2, \"name\":\"city\"]     # Rows 0-2, columns name to city\ndf.loc[:, [\"name\", \"salary\"]]  # All rows, specific columns\n\n# Filtering (Boolean indexing)\ndf[df[\"age\"] > 28]              # Rows where age > 28\ndf[df[\"city\"] == \"NYC\"]         # Rows where city is NYC\ndf[(df[\"age\"] > 25) & (df[\"salary\"] > 75000)]  # Multiple conditions\ndf[df[\"city\"].isin([\"NYC\", \"LA\"])]              # City in list\ndf[df[\"name\"].str.contains(\"li\")]               # Name contains \"li\"\ndf.query(\"age > 25 and salary > 75000\")         # Query string syntax"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.5 Modifying Data"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Add new column\ndf[\"bonus\"] = df[\"salary\"] * 0.1\ndf[\"senior\"] = df[\"age\"] > 30\n\n# Rename columns\ndf.rename(columns={\"name\": \"full_name\", \"city\": \"location\"}, inplace=True)\n\n# Drop columns/rows\ndf.drop(columns=[\"bonus\"], inplace=True)\ndf.drop(index=[0, 2], inplace=True)\n\n# Change data type\ndf[\"age\"] = df[\"age\"].astype(float)\n\n# Replace values\ndf[\"city\"].replace({\"NYC\": \"New York\", \"LA\": \"Los Angeles\"}, inplace=True)\n\n# Sort\ndf.sort_values(\"salary\", ascending=False)       # Sort by salary (desc)\ndf.sort_values([\"city\", \"age\"])                  # Sort by multiple columns\ndf.sort_index()                                   # Sort by index\n\n# Reset index\ndf.reset_index(drop=True, inplace=True)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.6 Handling Missing Data"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Check for missing values\ndf.isnull()                 # Boolean DataFrame\ndf.isnull().sum()           # Count NaN per column\ndf.isnull().sum().sum()     # Total NaN count\n\n# Drop missing values\ndf.dropna()                 # Drop rows with ANY NaN\ndf.dropna(subset=[\"age\"])  # Drop rows where 'age' is NaN\ndf.dropna(how=\"all\")       # Drop rows where ALL values are NaN\ndf.dropna(thresh=3)        # Keep rows with at least 3 non-NaN values\n\n# Fill missing values\ndf.fillna(0)                           # Fill all NaN with 0\ndf[\"age\"].fillna(df[\"age\"].mean())    # Fill with column mean\ndf[\"age\"].fillna(df[\"age\"].median())  # Fill with median\ndf.fillna(method=\"ffill\")             # Forward fill (use previous value)\ndf.fillna(method=\"bfill\")             # Backward fill (use next value)\ndf.interpolate()                       # Linear interpolation"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.7 GroupBy & Aggregation"
            },
            {
              "type": "code",
              "language": "python",
              "code": "df = pd.DataFrame({\n    \"department\": [\"Engineering\", \"Marketing\", \"Engineering\", \"Marketing\", \"Engineering\"],\n    \"name\": [\"Alice\", \"Bob\", \"Charlie\", \"Diana\", \"Eve\"],\n    \"salary\": [90000, 70000, 85000, 75000, 95000]\n})\n\n# Group by and aggregate\ndf.groupby(\"department\")[\"salary\"].mean()\n# Engineering    90000\n# Marketing      72500\n\n# Multiple aggregations\ndf.groupby(\"department\")[\"salary\"].agg([\"mean\", \"min\", \"max\", \"count\"])\n\n# Multiple columns\ndf.groupby(\"department\").agg({\n    \"salary\": [\"mean\", \"sum\"],\n    \"name\": \"count\"\n})\n\n# Custom aggregation\ndf.groupby(\"department\")[\"salary\"].agg(\n    avg_salary=\"mean\",\n    total_salary=\"sum\",\n    salary_range=lambda x: x.max() - x.min()\n)\n\n# Transform (return same-shape output)\ndf[\"salary_pct\"] = df.groupby(\"department\")[\"salary\"].transform(\n    lambda x: x / x.sum() * 100\n)\n\n# Filter groups\ndf.groupby(\"department\").filter(lambda x: x[\"salary\"].mean() > 80000)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.8 Merging & Joining"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Two DataFrames\nemployees = pd.DataFrame({\n    \"emp_id\": [1, 2, 3, 4],\n    \"name\": [\"Alice\", \"Bob\", \"Charlie\", \"Diana\"],\n    \"dept_id\": [101, 102, 101, 103]\n})\n\ndepartments = pd.DataFrame({\n    \"dept_id\": [101, 102, 104],\n    \"dept_name\": [\"Engineering\", \"Marketing\", \"Sales\"]\n})\n\n# Merge (like SQL JOIN)\npd.merge(employees, departments, on=\"dept_id\", how=\"inner\")  # Only matching\npd.merge(employees, departments, on=\"dept_id\", how=\"left\")   # All from left\npd.merge(employees, departments, on=\"dept_id\", how=\"right\")  # All from right\npd.merge(employees, departments, on=\"dept_id\", how=\"outer\")  # All from both\n\n# Concatenate (stack DataFrames)\ndf1 = pd.DataFrame({\"A\": [1, 2], \"B\": [3, 4]})\ndf2 = pd.DataFrame({\"A\": [5, 6], \"B\": [7, 8]})\npd.concat([df1, df2], ignore_index=True)      # Stack vertically\npd.concat([df1, df2], axis=1)                  # Stack horizontally"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.9 Apply, Map & Transform"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# apply — apply function to each row or column\ndf[\"name_upper\"] = df[\"name\"].apply(str.upper)\ndf[\"name_len\"] = df[\"name\"].apply(len)\n\n# Custom function\ndef categorize_salary(salary):\n    if salary > 90000: return \"High\"\n    elif salary > 75000: return \"Medium\"\n    else: return \"Low\"\n\ndf[\"salary_level\"] = df[\"salary\"].apply(categorize_salary)\n\n# apply to rows (axis=1)\ndf[\"summary\"] = df.apply(lambda row: f\"{row['name']} ({row['age']})\", axis=1)\n\n# map — map values using dict or function\ndf[\"city_code\"] = df[\"city\"].map({\"NYC\": \"NY\", \"LA\": \"CA\", \"Chicago\": \"IL\"})\n\n# applymap — apply function to every element (DataFrame-wide)\ndf[[\"age\", \"salary\"]] = df[[\"age\", \"salary\"]].map(lambda x: round(x, 2))"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.10 Pivot Tables & Crosstabs"
            },
            {
              "type": "code",
              "language": "python",
              "code": "sales = pd.DataFrame({\n    \"date\": [\"2024-01\", \"2024-01\", \"2024-02\", \"2024-02\"],\n    \"product\": [\"A\", \"B\", \"A\", \"B\"],\n    \"region\": [\"East\", \"West\", \"East\", \"West\"],\n    \"revenue\": [100, 200, 150, 250]\n})\n\n# Pivot table\npd.pivot_table(\n    sales,\n    values=\"revenue\",\n    index=\"product\",\n    columns=\"region\",\n    aggfunc=\"sum\"\n)\n#          East  West\n# A         250   NaN\n# B         NaN   450\n\n# Crosstab (frequency table)\npd.crosstab(df[\"city\"], df[\"department\"])"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.11 String & Datetime Operations"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# String methods (via .str accessor)\ndf[\"name\"].str.lower()\ndf[\"name\"].str.upper()\ndf[\"name\"].str.len()\ndf[\"name\"].str.contains(\"ali\", case=False)\ndf[\"name\"].str.replace(\"Alice\", \"Alicia\")\ndf[\"name\"].str.split(\" \")\ndf[\"email\"].str.extract(r\"@(\\w+)\")   # Regex extract\n\n# Datetime operations\ndf[\"date\"] = pd.to_datetime(df[\"date\"])\ndf[\"year\"] = df[\"date\"].dt.year\ndf[\"month\"] = df[\"date\"].dt.month\ndf[\"day_name\"] = df[\"date\"].dt.day_name()\ndf[\"is_weekend\"] = df[\"date\"].dt.dayofweek >= 5\n\n# Date filtering\ndf[df[\"date\"] > \"2024-06-01\"]\ndf[df[\"date\"].between(\"2024-01-01\", \"2024-06-30\")]\n\n# Resample time series\ndf.set_index(\"date\").resample(\"M\").sum()    # Monthly sum\ndf.set_index(\"date\").resample(\"W\").mean()   # Weekly average"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Load a CSV, filter rows, add computed columns, and save the result",
                "Group sales data by region and product, compute total and average revenue",
                "Merge two DataFrames (employees + departments) using left join",
                "Handle missing data: fill numeric with median, categorical with mode",
                "Create a pivot table from sales data showing revenue by month and product"
              ]
            },
            {
              "type": "quiz",
              "question": "In Pandas, what is the difference between loc and iloc?",
              "options": [
                "loc uses label-based indexing, whereas iloc uses zero-based integer positional indexing.",
                "loc only works on Series, while iloc works on DataFrames.",
                "iloc modifies data in-place, whereas loc returns a copy.",
                "loc is deprecated in Pandas 2.0."
              ],
              "answer": 0,
              "explanation": "df.loc[] selects rows and columns by their index/column names (labels), while df.iloc[] selects elements strictly by their numerical integer positions."
            }
          ]
        },
        {
          "slug": "data-visualization-and-eda",
          "title": "Data Visualization & Exploratory Data Analysis (EDA)",
          "description": "Comprehensive hands-on guide to data visualization & exploratory data analysis (eda) in Python.",
          "duration": 25,
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
                "Matplotlib (foundation of Python plotting)",
                "Seaborn (statistical visualization)",
                "Plotly (interactive charts)",
                "Chart types and when to use each"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.1 Matplotlib"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is Matplotlib?"
            },
            {
              "type": "paragraph",
              "text": "**Matplotlib** is the foundational plotting library in Python. Every other visualization library (Seaborn, Plotly, Pandas) is built on or inspired by it."
            },
            {
              "type": "code",
              "language": "python",
              "code": "import matplotlib.pyplot as plt\nimport numpy as np"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Line Plot"
            },
            {
              "type": "code",
              "language": "python",
              "code": "x = np.linspace(0, 10, 100)\n\nplt.figure(figsize=(10, 6))\nplt.plot(x, np.sin(x), label=\"sin(x)\", color=\"blue\", linewidth=2)\nplt.plot(x, np.cos(x), label=\"cos(x)\", color=\"red\", linestyle=\"--\")\nplt.title(\"Trigonometric Functions\", fontsize=16)\nplt.xlabel(\"x\")\nplt.ylabel(\"y\")\nplt.legend()\nplt.grid(True, alpha=0.3)\nplt.tight_layout()\nplt.savefig(\"trig.png\", dpi=150)\nplt.show()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Bar Chart"
            },
            {
              "type": "code",
              "language": "python",
              "code": "categories = [\"Python\", \"JavaScript\", \"Java\", \"C++\", \"Go\"]\nvalues = [35, 28, 20, 12, 5]\ncolors = [\"#3776AB\", \"#F7DF1E\", \"#ED8B00\", \"#00599C\", \"#00ADD8\"]\n\nplt.figure(figsize=(10, 6))\nbars = plt.bar(categories, values, color=colors, edgecolor=\"white\")\nplt.title(\"Programming Language Popularity\", fontsize=16)\nplt.ylabel(\"Popularity (%)\")\n\n# Add value labels on bars\nfor bar, val in zip(bars, values):\n    plt.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.5,\n             f\"{val}%\", ha=\"center\", fontsize=12)\n\nplt.tight_layout()\nplt.show()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Scatter Plot"
            },
            {
              "type": "code",
              "language": "python",
              "code": "np.random.seed(42)\nx = np.random.randn(100)\ny = 2 * x + np.random.randn(100) * 0.5\ncolors = np.random.rand(100)\nsizes = np.abs(np.random.randn(100)) * 200\n\nplt.figure(figsize=(10, 6))\nscatter = plt.scatter(x, y, c=colors, s=sizes, alpha=0.6, cmap=\"viridis\")\nplt.colorbar(scatter, label=\"Color Value\")\nplt.title(\"Scatter Plot with Colors & Sizes\")\nplt.xlabel(\"X\"); plt.ylabel(\"Y\")\nplt.tight_layout()\nplt.show()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Histogram"
            },
            {
              "type": "code",
              "language": "python",
              "code": "data = np.random.normal(loc=100, scale=15, size=1000)\n\nplt.figure(figsize=(10, 6))\nplt.hist(data, bins=30, color=\"steelblue\", edgecolor=\"white\", alpha=0.7)\nplt.axvline(data.mean(), color=\"red\", linestyle=\"--\", label=f\"Mean: {data.mean():.1f}\")\nplt.title(\"Score Distribution\")\nplt.xlabel(\"Score\"); plt.ylabel(\"Frequency\")\nplt.legend()\nplt.tight_layout()\nplt.show()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Subplots (Multiple Charts)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "fig, axes = plt.subplots(2, 2, figsize=(12, 8))\n\n# Top-left: Line\naxes[0, 0].plot(x, np.sin(x))\naxes[0, 0].set_title(\"Line Plot\")\n\n# Top-right: Bar\naxes[0, 1].bar([\"A\", \"B\", \"C\"], [10, 20, 15])\naxes[0, 1].set_title(\"Bar Chart\")\n\n# Bottom-left: Scatter\naxes[1, 0].scatter(np.random.rand(50), np.random.rand(50))\naxes[1, 0].set_title(\"Scatter Plot\")\n\n# Bottom-right: Histogram\naxes[1, 1].hist(np.random.randn(500), bins=20)\naxes[1, 1].set_title(\"Histogram\")\n\nplt.tight_layout()\nplt.show()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Pie Chart"
            },
            {
              "type": "code",
              "language": "python",
              "code": "sizes = [35, 25, 20, 15, 5]\nlabels = [\"Python\", \"JS\", \"Java\", \"C++\", \"Other\"]\nexplode = (0.05, 0, 0, 0, 0)   # Slightly separate first slice\n\nplt.figure(figsize=(8, 8))\nplt.pie(sizes, labels=labels, explode=explode, autopct=\"%1.1f%%\",\n        startangle=90, shadow=True)\nplt.title(\"Language Market Share\")\nplt.show()"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.2 Seaborn — Statistical Visualization"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is Seaborn?"
            },
            {
              "type": "paragraph",
              "text": "**Seaborn** builds on Matplotlib and provides high-level, beautiful statistical plots with less code. It integrates directly with Pandas DataFrames."
            },
            {
              "type": "code",
              "language": "python",
              "code": "import seaborn as sns\nimport pandas as pd\n\n# Set global style\nsns.set_theme(style=\"whitegrid\", palette=\"husl\")\n\n# Load built-in dataset\ntips = sns.load_dataset(\"tips\")"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Distribution Plots"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Histogram + KDE (Kernel Density Estimate)\nsns.histplot(data=tips, x=\"total_bill\", kde=True, bins=25)\nplt.title(\"Distribution of Total Bill\")\nplt.show()\n\n# KDE plot (smooth density curve)\nsns.kdeplot(data=tips, x=\"total_bill\", hue=\"time\", fill=True)\nplt.show()\n\n# Box plot (shows median, quartiles, outliers)\nsns.boxplot(data=tips, x=\"day\", y=\"total_bill\", hue=\"sex\")\nplt.title(\"Bill Distribution by Day and Gender\")\nplt.show()\n\n# Violin plot (box plot + density)\nsns.violinplot(data=tips, x=\"day\", y=\"total_bill\", hue=\"sex\", split=True)\nplt.show()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Relationship Plots"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Scatter with regression line\nsns.lmplot(data=tips, x=\"total_bill\", y=\"tip\", hue=\"smoker\", height=6)\nplt.title(\"Bill vs Tip\")\nplt.show()\n\n# Pair plot (scatter matrix — all pairs of variables)\nsns.pairplot(tips, hue=\"sex\", diag_kind=\"kde\")\nplt.show()\n\n# Joint plot (scatter + marginal distributions)\nsns.jointplot(data=tips, x=\"total_bill\", y=\"tip\", kind=\"hex\")\nplt.show()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Categorical Plots"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Count plot (bar chart of counts)\nsns.countplot(data=tips, x=\"day\", hue=\"sex\")\nplt.title(\"Visits by Day\")\nplt.show()\n\n# Bar plot (mean + confidence interval)\nsns.barplot(data=tips, x=\"day\", y=\"total_bill\", hue=\"sex\", ci=95)\nplt.title(\"Average Bill by Day\")\nplt.show()\n\n# Swarm plot (shows individual data points)\nsns.swarmplot(data=tips, x=\"day\", y=\"total_bill\", hue=\"sex\")\nplt.show()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Heatmap"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Correlation heatmap\ncorrelation = tips[[\"total_bill\", \"tip\", \"size\"]].corr()\n\nplt.figure(figsize=(8, 6))\nsns.heatmap(correlation, annot=True, cmap=\"coolwarm\", center=0,\n            fmt=\".2f\", linewidths=1, square=True)\nplt.title(\"Correlation Heatmap\")\nplt.tight_layout()\nplt.show()"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.3 Plotly — Interactive Charts"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import plotly.express as px\n\n# Interactive scatter\nfig = px.scatter(tips, x=\"total_bill\", y=\"tip\", color=\"day\",\n                 size=\"size\", hover_data=[\"sex\", \"smoker\"],\n                 title=\"Interactive Bill vs Tip\")\nfig.show()\n\n# Interactive bar\nfig = px.bar(tips.groupby(\"day\")[\"total_bill\"].mean().reset_index(),\n             x=\"day\", y=\"total_bill\", color=\"day\",\n             title=\"Average Bill by Day\")\nfig.show()\n\n# Interactive line\ndf = px.data.gapminder().query(\"country=='India'\")\nfig = px.line(df, x=\"year\", y=\"gdpPercap\", title=\"India GDP Over Time\")\nfig.show()\n\n# Interactive map\nfig = px.choropleth(px.data.gapminder().query(\"year==2007\"),\n                    locations=\"iso_alpha\", color=\"gdpPercap\",\n                    title=\"World GDP 2007\")\nfig.show()"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.4 Which Chart to Use?"
            },
            {
              "type": "table",
              "headers": [
                "Data Question",
                "Chart Type"
              ],
              "rows": [
                [
                  "Distribution of one variable",
                  "Histogram, KDE, Box plot",
                  ""
                ],
                [
                  "Compare categories",
                  "Bar chart, Count plot",
                  ""
                ],
                [
                  "Relationship between 2 variables",
                  "Scatter plot, Line plot",
                  ""
                ],
                [
                  "Composition / proportion",
                  "Pie chart, Stacked bar",
                  ""
                ],
                [
                  "Trend over time",
                  "Line plot, Area plot",
                  ""
                ],
                [
                  "Correlation matrix",
                  "Heatmap",
                  ""
                ],
                [
                  "All pairwise relationships",
                  "Pair plot",
                  ""
                ],
                [
                  "Geographic data",
                  "Choropleth map",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.5 Pandas Built-in Plotting"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Pandas has built-in plotting (wraps Matplotlib)\ndf = pd.DataFrame({\n    \"month\": range(1, 13),\n    \"sales\": [100, 120, 150, 130, 160, 180, 200, 190, 170, 160, 140, 220]\n})\n\ndf.plot(x=\"month\", y=\"sales\", kind=\"line\", title=\"Monthly Sales\", figsize=(10, 6))\ndf.plot(kind=\"bar\")\ndf.plot(kind=\"hist\", bins=10)\ndf.plot(kind=\"box\")\ndf[\"sales\"].plot(kind=\"pie\")\nplt.show()"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a multi-subplot figure with 4 different chart types",
                "Load the Seaborn `tips` dataset and create a pair plot colored by `time`",
                "Build a correlation heatmap for a numeric dataset",
                "Create an interactive Plotly scatter plot with hover information"
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Exploratory Data Analysis (EDA) workflow",
                "Handling missing values (strategies)",
                "Detecting and handling outliers",
                "Data type conversion and validation",
                "Feature engineering",
                "String cleaning and text processing",
                "Dealing with duplicates"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.1 The EDA Workflow"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is EDA?"
            },
            {
              "type": "paragraph",
              "text": "**Exploratory Data Analysis** is the process of investigating data to discover patterns, spot anomalies, and form hypotheses — BEFORE building models."
            },
            {
              "type": "code",
              "language": "python",
              "code": "import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\n\n# Step 1: Load and first look\ndf = pd.read_csv(\"data.csv\")\n\ndf.head()                    # First 5 rows\ndf.tail()                    # Last 5 rows\ndf.shape                     # (rows, columns)\ndf.info()                    # Types, non-null counts\ndf.describe()                # Statistics for numeric columns\ndf.describe(include=\"object\") # Statistics for categorical columns\n\n# Step 2: Check data quality\ndf.isnull().sum()            # Missing values per column\ndf.duplicated().sum()        # Duplicate rows\ndf.nunique()                 # Unique values per column\n\n# Step 3: Distribution of each column\nfor col in df.select_dtypes(include=\"number\").columns:\n    print(f\"\\n--- {col} ---\")\n    print(f\"  Mean: {df[col].mean():.2f}\")\n    print(f\"  Median: {df[col].median():.2f}\")\n    print(f\"  Std: {df[col].std():.2f}\")\n    print(f\"  Skew: {df[col].skew():.2f}\")\n    print(f\"  Range: [{df[col].min()}, {df[col].max()}]\")\n\n# Step 4: Visualize distributions\ndf.hist(figsize=(15, 10), bins=30, edgecolor=\"white\")\nplt.tight_layout()\nplt.show()\n\n# Step 5: Correlation\nsns.heatmap(df.corr(numeric_only=True), annot=True, cmap=\"coolwarm\")\nplt.show()"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.2 Handling Missing Data (Advanced)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Understanding Missing Data Types"
            },
            {
              "type": "code",
              "language": "python",
              "code": "MCAR (Missing Completely at Random):\n  → No pattern. Random sensor failure.\n  → Safe to drop or impute with mean.\n\nMAR (Missing at Random):\n  → Related to other columns. Higher earners skip \"income\" question.\n  → Impute using related columns.\n\nMNAR (Missing Not at Random):\n  → Related to the missing value itself. Very sick patients miss health surveys.\n  → Hardest to handle. May need domain knowledge."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Imputation Strategies"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# 1. Drop rows/columns\ndf.dropna()                          # Drop any row with NaN\ndf.dropna(thresh=len(df)*0.5, axis=1)  # Drop columns with >50% missing\n\n# 2. Simple imputation\ndf[\"age\"].fillna(df[\"age\"].mean(), inplace=True)        # Mean\ndf[\"age\"].fillna(df[\"age\"].median(), inplace=True)      # Median (robust to outliers!)\ndf[\"city\"].fillna(df[\"city\"].mode()[0], inplace=True)   # Mode (most frequent)\ndf[\"salary\"].fillna(0, inplace=True)                     # Constant\n\n# 3. Group-based imputation\ndf[\"salary\"] = df.groupby(\"department\")[\"salary\"].transform(\n    lambda x: x.fillna(x.median())\n)\n\n# 4. Interpolation (for time series)\ndf[\"value\"].interpolate(method=\"linear\")     # Linear interpolation\ndf[\"value\"].interpolate(method=\"time\")       # Time-aware interpolation\n\n# 5. Scikit-learn imputation\nfrom sklearn.impute import SimpleImputer, KNNImputer\n\n# Simple\nimputer = SimpleImputer(strategy=\"median\")\ndf[[\"age\", \"salary\"]] = imputer.fit_transform(df[[\"age\", \"salary\"]])\n\n# KNN-based (uses nearest neighbors — smarter!)\nimputer = KNNImputer(n_neighbors=5)\ndf[[\"age\", \"salary\"]] = imputer.fit_transform(df[[\"age\", \"salary\"]])\n\n# 6. Create a \"missing\" indicator column\ndf[\"salary_missing\"] = df[\"salary\"].isnull().astype(int)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.3 Handling Outliers"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Detecting Outliers"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Method 1: IQR (Interquartile Range)\nQ1 = df[\"salary\"].quantile(0.25)\nQ3 = df[\"salary\"].quantile(0.75)\nIQR = Q3 - Q1\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\n\noutliers = df[(df[\"salary\"] < lower) | (df[\"salary\"] > upper)]\nprint(f\"Found {len(outliers)} outliers\")\n\n# Method 2: Z-score\nfrom scipy import stats\nz_scores = np.abs(stats.zscore(df[\"salary\"].dropna()))\noutliers = df[z_scores > 3]   # More than 3 standard deviations\n\n# Visualize\nfig, axes = plt.subplots(1, 2, figsize=(14, 5))\nsns.boxplot(data=df, y=\"salary\", ax=axes[0])\naxes[0].set_title(\"Box Plot (shows outliers)\")\nsns.histplot(data=df, x=\"salary\", kde=True, ax=axes[1])\naxes[1].set_title(\"Distribution\")\nplt.tight_layout()\nplt.show()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Handling Outliers"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Option 1: Remove\ndf_clean = df[(df[\"salary\"] >= lower) & (df[\"salary\"] <= upper)]\n\n# Option 2: Cap (winsorize) — replace with boundary values\ndf[\"salary\"] = df[\"salary\"].clip(lower=lower, upper=upper)\n\n# Option 3: Log transform (reduces skew and outlier impact)\ndf[\"log_salary\"] = np.log1p(df[\"salary\"])\n\n# Option 4: Keep them! (sometimes outliers are real and important)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.4 Data Type Conversion"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Check current types\ndf.dtypes\n\n# Convert types\ndf[\"age\"] = df[\"age\"].astype(int)\ndf[\"salary\"] = pd.to_numeric(df[\"salary\"], errors=\"coerce\")  # Invalid → NaN\ndf[\"date\"] = pd.to_datetime(df[\"date\"], format=\"%Y-%m-%d\")\ndf[\"category\"] = df[\"category\"].astype(\"category\")  # Saves memory!\n\n# Boolean conversion\ndf[\"is_active\"] = df[\"status\"].map({\"active\": True, \"inactive\": False})\n\n# Extract from datetime\ndf[\"year\"] = df[\"date\"].dt.year\ndf[\"month\"] = df[\"date\"].dt.month\ndf[\"weekday\"] = df[\"date\"].dt.day_name()"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.5 Handling Duplicates"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Check duplicates\ndf.duplicated().sum()                         # Total duplicate rows\ndf[df.duplicated(keep=False)]                # Show all duplicates\ndf[df.duplicated(subset=[\"name\", \"email\"])]  # Duplicates based on columns\n\n# Remove duplicates\ndf.drop_duplicates(inplace=True)\ndf.drop_duplicates(subset=[\"email\"], keep=\"last\", inplace=True)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.6 Feature Engineering"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Create new features from existing ones\n\n# Binning (continuous → categorical)\ndf[\"age_group\"] = pd.cut(df[\"age\"], bins=[0, 18, 35, 50, 100],\n                         labels=[\"Teen\", \"Young\", \"Middle\", \"Senior\"])\n\n# Quantile-based binning\ndf[\"salary_rank\"] = pd.qcut(df[\"salary\"], q=4, labels=[\"Q1\", \"Q2\", \"Q3\", \"Q4\"])\n\n# Encode categorical variables\n# One-hot encoding (for ML models)\ndf_encoded = pd.get_dummies(df, columns=[\"city\"], drop_first=True)\n\n# Label encoding\nfrom sklearn.preprocessing import LabelEncoder\nle = LabelEncoder()\ndf[\"city_code\"] = le.fit_transform(df[\"city\"])\n\n# Interaction features\ndf[\"bill_per_person\"] = df[\"total_bill\"] / df[\"size\"]\ndf[\"tip_pct\"] = df[\"tip\"] / df[\"total_bill\"] * 100\n\n# Date features\ndf[\"days_since_signup\"] = (pd.Timestamp.now() - df[\"signup_date\"]).dt.days\ndf[\"is_weekend\"] = df[\"date\"].dt.dayofweek >= 5"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.7 String Cleaning"
            },
            {
              "type": "code",
              "language": "python",
              "code": "# Clean messy text data\ndf[\"name\"] = df[\"name\"].str.strip()          # Remove whitespace\ndf[\"name\"] = df[\"name\"].str.lower()          # Lowercase\ndf[\"name\"] = df[\"name\"].str.title()          # Title Case\n\n# Fix inconsistent values\ndf[\"city\"] = df[\"city\"].str.lower().str.strip()\ndf[\"city\"] = df[\"city\"].replace({\n    \"new york city\": \"nyc\",\n    \"new york\": \"nyc\",\n    \"ny\": \"nyc\",\n    \"n.y.c.\": \"nyc\"\n})\n\n# Extract patterns with regex\ndf[\"phone_clean\"] = df[\"phone\"].str.replace(r\"[^\\d]\", \"\", regex=True)\ndf[\"zip_code\"] = df[\"address\"].str.extract(r\"(\\d{5})\")\n\n# Split columns\ndf[[\"first_name\", \"last_name\"]] = df[\"full_name\"].str.split(\" \", n=1, expand=True)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.8 Complete EDA Pipeline"
            },
            {
              "type": "code",
              "language": "python",
              "code": "def quick_eda(df):\n    \"\"\"Run comprehensive EDA on any DataFrame.\"\"\"\n    print(\"=\" * 50)\n    print(f\"Shape: {df.shape}\")\n    print(f\"\\nColumn Types:\\n{df.dtypes}\")\n    print(f\"\\nMissing Values:\\n{df.isnull().sum()}\")\n    print(f\"\\nMissing %:\\n{(df.isnull().sum() / len(df) * 100).round(1)}\")\n    print(f\"\\nDuplicates: {df.duplicated().sum()}\")\n    print(f\"\\nNumeric Summary:\\n{df.describe()}\")\n    print(f\"\\nCategorical Summary:\\n{df.describe(include='object')}\")\n    \n    # Plot distributions\n    num_cols = df.select_dtypes(include=\"number\").columns\n    if len(num_cols) > 0:\n        df[num_cols].hist(figsize=(15, 10), bins=30, edgecolor=\"white\")\n        plt.suptitle(\"Numeric Distributions\", fontsize=16)\n        plt.tight_layout()\n        plt.show()\n\nquick_eda(df)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Load a messy dataset, identify all quality issues, and clean it completely",
                "Handle missing data using 3 different strategies and compare results",
                "Detect outliers using IQR and Z-score methods, visualize with box plots",
                "Engineer 5 new features from an existing dataset"
              ]
            },
            {
              "type": "quiz",
              "question": "Which plot type is most suitable for visualizing the distribution and identifying outliers in a continuous numerical feature?",
              "options": [
                "Pie Chart",
                "Box Plot (or Violin Plot)",
                "Stacked Bar Chart",
                "Network Graph"
              ],
              "answer": 1,
              "explanation": "Box plots display the median, interquartile range (IQR), and individual outlier points beyond 1.5 * IQR, making them ideal for identifying data skewness and anomalies."
            }
          ]
        },
        {
          "slug": "scikit-learn-machine-learning",
          "title": "Machine Learning with Scikit-Learn: Pipelines & Models",
          "description": "Comprehensive hands-on guide to machine learning with scikit-learn: pipelines & models in Python.",
          "duration": 30,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Scikit-learn API pattern",
                "Supervised learning (regression & classification)",
                "Unsupervised learning (clustering, PCA)",
                "Model evaluation and metrics",
                "Cross-validation and hyperparameter tuning",
                "Pipelines",
                "Feature scaling and selection"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.1 Scikit-learn Overview"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is Scikit-learn?"
            },
            {
              "type": "paragraph",
              "text": "**Scikit-learn** (sklearn) is the most widely used Python library for traditional machine learning. It provides clean, consistent APIs for every step of the ML workflow."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "The Universal sklearn Pattern"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.some_module import SomeModel\n\n# Every model follows the same pattern:\nmodel = SomeModel(hyperparameters)    # 1. Create\nmodel.fit(X_train, y_train)            # 2. Train\npredictions = model.predict(X_test)    # 3. Predict\nscore = model.score(X_test, y_test)    # 4. Evaluate"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.2 Data Preparation"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Train/Test Split"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.datasets import load_iris\n\n# Load dataset\niris = load_iris()\nX = iris.data         # Features (150 samples, 4 features)\ny = iris.target       # Labels (0, 1, or 2)\n\n# Split: 80% train, 20% test\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y,\n    test_size=0.2,        # 20% for testing\n    random_state=42,      # Reproducible split\n    stratify=y            # Maintain class proportions\n)\n\nprint(f\"Train: {X_train.shape}, Test: {X_test.shape}\")\n# Train: (120, 4), Test: (30, 4)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Feature Scaling"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.preprocessing import StandardScaler, MinMaxScaler\n\n# StandardScaler: mean=0, std=1 (most common)\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)   # Fit + transform on train\nX_test_scaled = scaler.transform(X_test)          # Only transform on test!\n\n# MinMaxScaler: scale to [0, 1]\nscaler = MinMaxScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)\n\n# ⚠️ CRITICAL: Always fit on TRAINING data only!\n# Never fit on test data (data leakage!)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.3 Supervised Learning — Regression"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Linear Regression"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score\nimport numpy as np\n\n# Generate sample data\nnp.random.seed(42)\nX = np.random.rand(100, 1) * 10\ny = 2.5 * X.squeeze() + np.random.randn(100) * 2 + 5\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# Train\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# Predict\ny_pred = model.predict(X_test)\n\n# Evaluate\nprint(f\"Coefficients: {model.coef_}\")          # Slope\nprint(f\"Intercept: {model.intercept_}\")        # Intercept\nprint(f\"R² Score: {r2_score(y_test, y_pred):.4f}\")\nprint(f\"MAE: {mean_absolute_error(y_test, y_pred):.4f}\")\nprint(f\"RMSE: {np.sqrt(mean_squared_error(y_test, y_pred)):.4f}\")"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Other Regression Models"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.linear_model import Ridge, Lasso, ElasticNet\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor\nfrom sklearn.svm import SVR\n\n# Ridge (L2 regularization — prevents overfitting)\nmodel = Ridge(alpha=1.0)\n\n# Lasso (L1 regularization — feature selection)\nmodel = Lasso(alpha=0.1)\n\n# Decision Tree\nmodel = DecisionTreeRegressor(max_depth=5)\n\n# Random Forest (ensemble of trees — usually best)\nmodel = RandomForestRegressor(n_estimators=100, max_depth=10, random_state=42)\n\n# Gradient Boosting\nmodel = GradientBoostingRegressor(n_estimators=100, learning_rate=0.1)\n\n# All follow same pattern: fit → predict → score"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.4 Supervised Learning — Classification"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Logistic Regression"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, classification_report, confusion_matrix\n\n# Train\nmodel = LogisticRegression(max_iter=200)\nmodel.fit(X_train, y_train)\n\n# Predict\ny_pred = model.predict(X_test)\ny_proba = model.predict_proba(X_test)    # Probability for each class\n\n# Evaluate\nprint(f\"Accuracy: {accuracy_score(y_test, y_pred):.4f}\")\nprint(f\"\\nClassification Report:\\n{classification_report(y_test, y_pred)}\")\nprint(f\"\\nConfusion Matrix:\\n{confusion_matrix(y_test, y_pred)}\")"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Common Classification Models"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier\nfrom sklearn.svm import SVC\nfrom sklearn.naive_bayes import GaussianNB\n\n# KNN\nmodel = KNeighborsClassifier(n_neighbors=5)\n\n# Decision Tree\nmodel = DecisionTreeClassifier(max_depth=5, random_state=42)\n\n# Random Forest (usually best out-of-the-box)\nmodel = RandomForestClassifier(n_estimators=100, max_depth=10, random_state=42)\n\n# SVM\nmodel = SVC(kernel=\"rbf\", C=1.0, probability=True)\n\n# Naive Bayes\nmodel = GaussianNB()\n\n# All the same: fit → predict → score"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Classification Metrics Explained"
            },
            {
              "type": "code",
              "language": "python",
              "code": "Confusion Matrix:\n                  Predicted\n                  Pos    Neg\nActual  Pos  │  TP     FN  │\n        Neg  │  FP     TN  │\n\nAccuracy  = (TP + TN) / Total          → Overall correctness\nPrecision = TP / (TP + FP)              → \"Of predicted positives, how many correct?\"\nRecall    = TP / (TP + FN)              → \"Of actual positives, how many found?\"\nF1 Score  = 2 × (Prec × Rec) / (Prec + Rec)  → Balance of precision & recall\n\nWhen to use what:\n  Accuracy:  Balanced classes\n  Precision: Cost of false positives is high (spam detection)\n  Recall:    Cost of false negatives is high (disease detection)\n  F1:        Imbalanced classes"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.5 Unsupervised Learning"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "K-Means Clustering"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.cluster import KMeans\nimport matplotlib.pyplot as plt\n\n# Generate data\nfrom sklearn.datasets import make_blobs\nX, _ = make_blobs(n_samples=300, centers=4, cluster_std=0.6, random_state=42)\n\n# Cluster\nkmeans = KMeans(n_clusters=4, random_state=42, n_init=10)\nlabels = kmeans.fit_predict(X)\n\n# Visualize\nplt.scatter(X[:, 0], X[:, 1], c=labels, cmap=\"viridis\", alpha=0.6)\nplt.scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1],\n            c=\"red\", marker=\"X\", s=200, label=\"Centers\")\nplt.title(\"K-Means Clustering\")\nplt.legend()\nplt.show()\n\n# Finding optimal K (Elbow Method)\ninertias = []\nfor k in range(1, 11):\n    km = KMeans(n_clusters=k, random_state=42, n_init=10)\n    km.fit(X)\n    inertias.append(km.inertia_)\n\nplt.plot(range(1, 11), inertias, marker=\"o\")\nplt.xlabel(\"K\"); plt.ylabel(\"Inertia\")\nplt.title(\"Elbow Method\")\nplt.show()"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "PCA (Dimensionality Reduction)"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.decomposition import PCA\n\n# Reduce from many dimensions to 2 (for visualization)\npca = PCA(n_components=2)\nX_reduced = pca.fit_transform(X_scaled)\n\nprint(f\"Explained variance: {pca.explained_variance_ratio_}\")\n# e.g., [0.72, 0.23] → first 2 components explain 95% of variance\n\nplt.scatter(X_reduced[:, 0], X_reduced[:, 1], c=y, cmap=\"viridis\")\nplt.xlabel(\"PC1\"); plt.ylabel(\"PC2\")\nplt.title(\"PCA Visualization\")\nplt.show()"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.6 Cross-Validation"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.model_selection import cross_val_score, KFold\n\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\n\n# 5-fold cross-validation\nscores = cross_val_score(model, X, y, cv=5, scoring=\"accuracy\")\nprint(f\"CV Scores: {scores}\")\nprint(f\"Mean: {scores.mean():.4f} ± {scores.std():.4f}\")\n\n# Custom KFold\nkfold = KFold(n_splits=10, shuffle=True, random_state=42)\nscores = cross_val_score(model, X, y, cv=kfold, scoring=\"accuracy\")"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.7 Hyperparameter Tuning"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.model_selection import GridSearchCV, RandomizedSearchCV\n\n# Grid Search (exhaustive — tries ALL combinations)\nparam_grid = {\n    \"n_estimators\": [50, 100, 200],\n    \"max_depth\": [3, 5, 10, None],\n    \"min_samples_split\": [2, 5, 10]\n}\n\ngrid_search = GridSearchCV(\n    RandomForestClassifier(random_state=42),\n    param_grid,\n    cv=5,\n    scoring=\"accuracy\",\n    n_jobs=-1           # Use all CPU cores\n)\ngrid_search.fit(X_train, y_train)\n\nprint(f\"Best params: {grid_search.best_params_}\")\nprint(f\"Best score: {grid_search.best_score_:.4f}\")\nbest_model = grid_search.best_estimator_\n\n# Randomized Search (faster — samples random combinations)\nfrom scipy.stats import randint\nparam_dist = {\n    \"n_estimators\": randint(50, 300),\n    \"max_depth\": [3, 5, 10, 20, None],\n    \"min_samples_split\": randint(2, 20)\n}\n\nrandom_search = RandomizedSearchCV(\n    RandomForestClassifier(random_state=42),\n    param_dist,\n    n_iter=50,          # Try 50 random combinations\n    cv=5,\n    scoring=\"accuracy\",\n    n_jobs=-1,\n    random_state=42\n)\nrandom_search.fit(X_train, y_train)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.8 Pipelines"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\n\n# Pipeline chains preprocessing + model into one object\npipe = Pipeline([\n    (\"scaler\", StandardScaler()),\n    (\"pca\", PCA(n_components=2)),\n    (\"classifier\", RandomForestClassifier(n_estimators=100))\n])\n\n# Fit and predict in one step\npipe.fit(X_train, y_train)\nscore = pipe.score(X_test, y_test)\nprint(f\"Pipeline accuracy: {score:.4f}\")\n\n# Pipeline with GridSearch\nparam_grid = {\n    \"pca__n_components\": [2, 3, 4],\n    \"classifier__n_estimators\": [50, 100, 200]\n}\n\ngrid = GridSearchCV(pipe, param_grid, cv=5)\ngrid.fit(X_train, y_train)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.9 Saving & Loading Models"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import joblib\n\n# Save model\njoblib.dump(model, \"model.pkl\")\n\n# Load model\nloaded_model = joblib.load(\"model.pkl\")\npredictions = loaded_model.predict(X_test)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.10 Model Selection Guide"
            },
            {
              "type": "code",
              "language": "python",
              "code": "Regression:\n  Start with → LinearRegression\n  Better     → Ridge / Lasso (regularized)\n  Best       → RandomForestRegressor / GradientBoostingRegressor\n\nClassification:\n  Start with → LogisticRegression\n  Try        → RandomForestClassifier, SVC\n  Best       → GradientBoostingClassifier / XGBoost\n\nClustering:\n  Known K    → KMeans\n  Unknown K  → DBSCAN\n  Hierarchical → AgglomerativeClustering\n\nDimensionality Reduction:\n  Linear     → PCA\n  Non-linear → t-SNE, UMAP"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a classification pipeline: load Iris → scale → train RF → evaluate",
                "Compare 5 different classifiers on the same dataset using cross-validation",
                "Use GridSearchCV to find the best hyperparameters for a Random Forest",
                "Perform K-Means clustering on a dataset and visualize with PCA",
                "Build an end-to-end pipeline with preprocessing, feature selection, and model"
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the entire Python Learning Path!"
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "Go back to the Main README to review all modules."
            },
            {
              "type": "quiz",
              "question": "Why should feature scaling (e.g. StandardScaler) be fit only on the training set and not the entire dataset?",
              "options": [
                "To prevent data leakage from the test distribution into the training pipeline.",
                "Because StandardScaler cannot process test data.",
                "Scaling test data causes matrix inversion errors.",
                "To reduce RAM consumption during training."
              ],
              "answer": 0,
              "explanation": "Fitting scalers or transformers on test data causes data leakage, artificially inflating validation accuracy by giving the model prior knowledge of the evaluation distribution statistics."
            }
          ]
        },
        {
          "slug": "cloud-automation-with-boto3",
          "title": "Cloud Automation with AWS Boto3 & Serverless Lambda",
          "description": "Comprehensive hands-on guide to cloud automation with aws boto3 & serverless lambda in Python.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Learn to control the entire Amazon Web Services ecosystem using Python scripts and automation."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Modules"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Setup & S3**: Cloud storage automation.",
                "**EC2 & IAM**: Managing servers and security roles.",
                "**Lambda & Automation**: Serverless Python and cron jobs."
              ]
            },
            {
              "type": "paragraph",
              "text": "Back to Python Index"
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Boto3?",
                "Setting up AWS CLI and Credentials",
                "Client vs. Resource interfaces",
                "Managing S3 Buckets and Files"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is Boto3?"
            },
            {
              "type": "definition",
              "term": "Boto3 is the Amazon Web Services (AWS) SDK for Python. It allows Python developers to write software that makes use of services like Amazon S3 and Amazon EC2.",
              "plain": "Boto3 is the Amazon Web Services (AWS) SDK for Python. It allows Python developers to write software that makes use of services like Amazon S3 and Amazon EC2."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Managing S3"
            },
            {
              "type": "code",
              "language": "python",
              "code": "import boto3\n\n# Create a client\ns3 = boto3.client('s3')\n\n# Upload a file\ns3.upload_file('local_file.txt', 'my-bucket', 'cloud_file.txt')\n\n# List files\nresponse = s3.list_objects_v2(Bucket='my-bucket')\nfor obj in response.get('Contents', []):\n    print(obj['Key'])"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Install `boto3` and set up your AWS credentials using `aws configure`.",
                "Create a new S3 bucket using Python.",
                "Upload an image to your bucket and set its ACL to \"public-read\".",
                "Download a file from S3 to your local machine."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Launching EC2 Instances",
                "Managing Instance Lifecycle (Start, Stop, Terminate)",
                "IAM Users and Roles",
                "Key Pairs and Security Groups"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Managing EC2"
            },
            {
              "type": "code",
              "language": "python",
              "code": "ec2 = boto3.resource('ec2')\n\n# Create an instance\ninstances = ec2.create_instances(\n     ImageId='ami-0abcdef1234567890', # Amazon Linux\n     MinCount=1,\n     MaxCount=1,\n     InstanceType='t2.micro'\n)\n\n# Stop an instance\nec2.Instance('instance-id').stop()"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a script that lists all your running EC2 instances.",
                "Create a \"Cleanup\" script that stops all instances with a specific tag (e.g., `Environment: Dev`).",
                "Research what an **AMI (Amazon Machine Image)** is.",
                "Create an IAM user and attach a specific policy to it using Boto3."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is AWS Lambda?",
                "Writing \"Serverless\" Python",
                "Triggering Lambda from S3",
                "CloudWatch Events (Cron jobs)",
                "Building a Serverless Image Resizer"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 Serverless Python"
            },
            {
              "type": "paragraph",
              "text": "A Lambda function is just a Python function that runs in response to an event."
            },
            {
              "type": "code",
              "language": "python",
              "code": "import json\n\ndef lambda_handler(event, context):\n    # This runs when the function is triggered\n    print(f\"Received event: {event}\")\n    return {\n        'statusCode': 200,\n        'body': json.dumps('Hello from Lambda!')\n    }"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a Lambda function manually in the AWS Console.",
                "Write a Boto3 script to update the code of an existing Lambda function.",
                "Set up an S3 trigger: When a file is uploaded, a Lambda function should print the file name.",
                "Build a \"Nightly Shutdown\" script using CloudWatch Events to stop your EC2 instances every night at 10 PM."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Boto3 Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In AWS Boto3, what is the key difference between a Client and a Resource?",
              "options": [
                "A Client provides a 1-to-1 low-level mapping to AWS service APIs returning raw dictionaries, whereas a Resource provides an object-oriented high-level abstraction.",
                "Clients only work in us-east-1, while Resources work globally.",
                "Resources cannot upload files to S3.",
                "Clients require root AWS account credentials."
              ],
              "answer": 0,
              "explanation": "boto3.client provides low-level service methods returning raw responses matching the AWS REST API, whereas boto3.resource wraps entities in Python objects with intuitive methods (e.g. bucket.objects.all())."
            }
          ]
        },
        {
          "slug": "big-data-with-pyspark",
          "title": "Big Data Processing with PySpark & Distributed DataFrames",
          "description": "Comprehensive hands-on guide to big data processing with pyspark & distributed dataframes in Python.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Master the tools needed to process and analyze massive datasets that are too large for a single machine."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Modules"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Context & DataFrames**: Spark sessions and large-scale data reading.",
                "**Transformations & Actions**: Lazy evaluation and PySpark SQL."
              ]
            },
            {
              "type": "paragraph",
              "text": "Back to Python Index"
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is \"Big Data\"?",
                "PySpark vs. Pandas",
                "SparkSession and Context",
                "Reading Large Files (CSV, Parquet, JSON)",
                "Schema inference"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is PySpark?"
            },
            {
              "type": "definition",
              "term": "PySpark is the Python API for Apache Spark, an open",
              "plain": "PySpark is the Python API for Apache Spark, an open-source, distributed computing framework. It allows you to process massive datasets by spreading the work across a cluster of computers."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": ""
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Pandas** is like a **Single Chef** in a kitchen. They can cook for a small family, but they get overwhelmed if 10,000 people arrive.",
                "**PySpark** is like a **Chain of 100 Restaurants**. You split the 10,000 customers among 100 chefs, and they all cook at the same time."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 The SparkSession"
            },
            {
              "type": "code",
              "language": "python",
              "code": "from pyspark.sql import SparkSession\n\nspark = SparkSession.builder \\\n    .appName(\"MyBigDataApp\") \\\n    .getOrCreate()\n\n# Read a massive CSV\ndf = spark.read.csv(\"huge_data.csv\", header=True, inferSchema=True)\ndf.show(5)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Install `pyspark`.",
                "Create a SparkSession and read a sample CSV file.",
                "Use `.printSchema()` to see how Spark inferred your data types.",
                "Count the total number of rows in your dataset and see how much faster it is than Pandas for large files."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Lazy Evaluation (Why Spark is fast)",
                "Transformations (`filter`, `select`, `groupBy`)",
                "Actions (`show`, `collect`, `count`, `write`)",
                "PySpark SQL (Using SQL queries on DataFrames)",
                "Saving data to Parquet"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Lazy Evaluation"
            },
            {
              "type": "paragraph",
              "text": "Spark doesn't do anything until you call an **Action**."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Transformations**: Create a \"Plan\" (e.g., Filter these rows). No data is moved yet.",
                "**Actions**: Execute the Plan (e.g., Show me the results). This is when the cluster starts working."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 PySpark SQL"
            },
            {
              "type": "paragraph",
              "text": "You can use standard SQL syntax on your distributed data!"
            },
            {
              "type": "code",
              "language": "python",
              "code": "df.createOrReplaceTempView(\"sales\")\n\nresult = spark.sql(\"\"\"\n    SELECT category, SUM(amount) \n    FROM sales \n    GROUP BY category \n    HAVING SUM(amount) > 10000\n\"\"\")\nresult.show()"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Perform a `groupBy` and `count` operation on your dataset.",
                "Filter your data to find only records from the year 2023.",
                "Use `spark.sql` to find the top 5 most frequent items in a column.",
                "Save your final result as a **Parquet** file (the industry standard for big data storage)."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the PySpark Mastery Path and the entire Python Expert Curriculum!"
            },
            {
              "type": "quiz",
              "question": "What is the significance of Lazy Evaluation in Apache Spark / PySpark?",
              "options": [
                "Transformations are not computed immediately; Spark records them in a DAG and optimizes the entire execution plan before running when an Action is triggered.",
                "Spark delays reading files until the server restarts.",
                "It prevents Spark from using multiple CPU cores.",
                "It automatically converts all queries into SQL strings."
              ],
              "answer": 0,
              "explanation": "Spark transformations (map, filter, groupBy) are lazily evaluated: Spark builds a Directed Acyclic Graph (DAG) of transformations and optimizes execution with Catalyst optimizer, computing results only when an action (count, collect, show) is called."
            }
          ]
        }
      ]
    }
  ]
}
