import type { Tutorial } from '../types'

export const flutterDart: Tutorial = {
  "slug": "flutter-dart",
  "title": "Cross-Platform Mobile Development with Flutter & Dart",
  "shortTitle": "Flutter & Dart",
  "description": "Build native cross-platform iOS and Android applications with Google Flutter, Dart language, sound null safety, and BLoC state management.",
  "category": "Mobile Development",
  "difficulty": "intermediate",
  "icon": "robot",
  "tags": [
    "Flutter",
    "Dart",
    "Mobile",
    "iOS",
    "Android",
    "State Management",
    "BLoC"
  ],
  "color": "#0284c7",
  "updated": "2026-08-17",
  "prerequisites": [
    "Basic object-oriented programming concepts."
  ],
  "outcomes": [
    "Master the Dart language: sound null safety, async streams, and mixins",
    "Build fluid cross-platform UIs using Flutter widgets and Material 3 / Cupertino",
    "Architect robust apps with BLoC, Riverpod, and Provider state management",
    "Integrate device hardware APIs (Camera, Location, SQLite storage)"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "dart-language",
          "title": "Dart Language",
          "description": "Master Dart Language with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Master the Dart programming language, optimized for client-side development for fast apps on any platform. This course is the prerequisite for professional Flutter development."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Phase 1: Basics"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Variables & Data Types**: Typing, Null Safety, and core values.",
                "**Operators & Control Flow**: Logic, loops, and switches.",
                "**Functions & Methods**: Named parameters and callbacks.",
                "**Collections (Lists, Sets, Maps)**: Managing groups of data."
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Phase 2: Object-Oriented Programming"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**OOP — Classes & Objects**: Constructors and Getters/Setters.",
                "**OOP — Inheritance & Mixins**: Code reuse and extensions."
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Phase 3: Advanced Concepts"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Async — Futures & Await**: Asynchronous logic.",
                "**Async — Streams**: Real-time data events.",
                "**Error Handling & Exceptions**: Defensive programming.",
                "**Dart CLI & Packages**: Project management and tooling."
              ]
            },
            {
              "type": "paragraph",
              "text": "Back to Main Index"
            },
            {
              "type": "quiz",
              "question": "In Dart Language, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Dart Language.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Dart Language is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "introduction-and-setup",
          "title": "Introduction And Setup",
          "description": "Master Introduction And Setup with hands-on examples, architectural diagrams, and structured exercises.",
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
                "What is Flutter? (The multi-platform vision)",
                "Setting up the Flutter SDK",
                "Dart Language Basics (Variables, Types, Functions)",
                "Creating your first \"Hello World\" app",
                "Hot Reload vs. Hot Restart"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is Flutter?"
            },
            {
              "type": "definition",
              "term": "Flutter is an open",
              "plain": "Flutter is an open-source UI software development kit created by Google. It allows you to build apps for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a **single codebase**."
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
                "**Native Development** (Android/iOS) is like having two different workshops making two different versions of the same chair.",
                "**Flutter** is like a **3D Printer**. You design the \"blueprint\" once in the computer (Dart), and the printer can output that exact same chair in wood (Android), metal (iOS), or plastic (Web)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Dart \"Crash Course\""
            },
            {
              "type": "paragraph",
              "text": "Dart is a client-optimized language for fast apps on any platform."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "// 1. Variables\nString name = \"Aravind\";\nvar age = 25; // Type inference\n\n// 2. Functions\nvoid sayHello() {\n  print(\"Hello Flutter!\");\n}\n\n// 3. Classes\nclass User {\n  String name;\n  User(this.name);\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Setup & First App"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Download Flutter SDK**: From flutter.dev.",
                "**Flutter Doctor**: Run `flutter doctor` in your terminal to check for missing dependencies.",
                "**First Project**:"
              ]
            },
            {
              "type": "code",
              "language": "bash",
              "code": "flutter create my_first_app\ncd my_first_app\nflutter run"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.4 Hot Reload"
            },
            {
              "type": "paragraph",
              "text": "This is Flutter's \"superpower.\" You can change your code and see the result in the app in less than a second **without losing the app's state**."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Install the Flutter SDK and run `flutter doctor`.",
                "Create a new project and run it on an emulator or your browser.",
                "Change the `_counter` increment logic to multiply by 2 instead of adding 1.",
                "Experiment with `print()` statements in the Dart code and view them in the Debug Console."
              ]
            },
            {
              "type": "quiz",
              "question": "In Introduction And Setup, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Introduction And Setup.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Introduction And Setup is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "widgets-stateless-stateful",
          "title": "Widgets Stateless Stateful",
          "description": "Master Widgets Stateless Stateful with hands-on examples, architectural diagrams, and structured exercises.",
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
                "The \"Widget\" philosophy",
                "StatelessWidgets vs. StatefullWidgets",
                "The Widget Tree",
                "The `build()` method",
                "Common Widgets: `Text`, `Icon`, `Image`"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 The Widget Philosophy"
            },
            {
              "type": "paragraph",
              "text": "In Flutter, **Everything is a Widget**. The app bar, the text, the buttons, even the alignment and padding are widgets. You build your UI by nesting widgets inside each other."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Stateless vs. Stateful"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "StatelessWidget"
            },
            {
              "type": "paragraph",
              "text": "A widget that does not require mutable state. It’s \"dumb\" and only displays what you give it."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "class MyHeader extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return Text(\"Hello, I am static!\");\n  }\n}"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "StatefulWidget"
            },
            {
              "type": "paragraph",
              "text": "A widget that has mutable state. It can change over time (e.g., a counter, a checkbox)."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "class MyCounter extends StatefulWidget {\n  @override\n  _MyCounterState createState() => _MyCounterState();\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 The Widget Tree"
            },
            {
              "type": "paragraph",
              "text": "Widgets are nested into a parent-child relationship."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Root**: `MaterialApp`",
                "**Scaffold**: The \"Skeleton\" of the page.",
                "**Body**: Where the main content lives."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a custom `StatelessWidget` that displays your name in a specific color.",
                "Build a `StatefulWidget` with a button that changes the text on the screen when clicked.",
                "Explore the `flutter_test` file generated by the CLI to see how widgets are tested.",
                "Try nesting an `Icon` inside a `Container` inside a `Center` widget."
              ]
            },
            {
              "type": "quiz",
              "question": "In Widgets Stateless Stateful, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Widgets Stateless Stateful."
              ],
              "answer": 3,
              "explanation": "Widgets Stateless Stateful is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "layout-and-positioning",
          "title": "Layout And Positioning",
          "description": "Master Layout And Positioning with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Layout Widgets: `Row`, `Column`, `Stack`",
                "Sizing with `Container` and `SizedBox`",
                "Flex logic with `Expanded` and `Flexible`",
                "Alignment and Padding",
                "Aspect Ratio and Constrained Boxes"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 Rows & Columns"
            },
            {
              "type": "paragraph",
              "text": "Just like Flexbox on the web or in Android Compose, Flutter uses `Row` and `Column` for linear layouts."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "Column(\n  mainAxisAlignment: MainAxisAlignment.center, // Vertical\n  crossAxisAlignment: CrossAxisAlignment.start, // Horizontal\n  children: [\n    Text(\"Line 1\"),\n    Text(\"Line 2\"),\n  ],\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 The `Stack` Widget"
            },
            {
              "type": "paragraph",
              "text": "Used to place widgets on top of each other (e.g., text over an image)."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "Stack(\n  children: [\n    Image.network(\"...\"),\n    Positioned(\n      bottom: 10,\n      left: 10,\n      child: Text(\"On top!\"),\n    ),\n  ],\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 `Expanded` & `Flexible`"
            },
            {
              "type": "paragraph",
              "text": "Use these to tell a widget how to take up remaining space inside a Row or Column."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "Row(\n  children: [\n    Icon(Icons.star),\n    Expanded(child: Text(\"This text will stretch to fit the row\")),\n    Icon(Icons.arrow_forward),\n  ],\n)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Business Card\" layout: An `Image` on the left and a `Column` of text on the right.",
                "Use a `Stack` to place a \"Sale\" badge icon on top of a product image.",
                "Create a `Row` with three containers and give each a different `flex` value using `Expanded`.",
                "Use `SizedBox` to add exactly 20 pixels of space between two widgets in a `Column`."
              ]
            },
            {
              "type": "quiz",
              "question": "In Layout And Positioning, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Layout And Positioning.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Layout And Positioning is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "design-material-cupertino",
          "title": "Design Material Cupertino",
          "description": "Master Design Material Cupertino with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner → Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "ThemeData` and Global Styling",
                "Material 3 vs. Material 2",
                "Cupertino Widgets (iOS Style)",
                "Working with Assets (Images and Fonts)",
                "Dark Mode support"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 Global Theming"
            },
            {
              "type": "paragraph",
              "text": "Instead of styling every widget individually, you define a theme at the root of your app."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "MaterialApp(\n  theme: ThemeData(\n    useMaterial3: true,\n    colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),\n    textTheme: TextTheme(\n      displayLarge: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),\n    ),\n  ),\n  home: MyHomePage(),\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Handling Assets"
            },
            {
              "type": "paragraph",
              "text": "To use images or custom fonts, you must register them in `pubspec.yaml`."
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# pubspec.yaml\nflutter:\n  assets:\n    - assets/images/logo.png\n  fonts:\n    - family: MyFont\n      fonts:\n        - asset: assets/fonts/MyFont-Regular.ttf"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Adaptive UI"
            },
            {
              "type": "paragraph",
              "text": "Flutter can use \"Adaptive\" constructors to automatically switch between Material (Android) and Cupertino (iOS) looks."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "Switch.adaptive(\n  value: _value,\n  onChanged: (bool value) { ... },\n)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Change the primary color of your app in `ThemeData` and see how it affects buttons and bars.",
                "Download a custom font from Google Fonts and set it as the default font for your app.",
                "Build a \"Settings\" page using `Cupertino` widgets (iOS look) and see how it looks on an Android emulator.",
                "Set up a separate `darkTheme` property in `MaterialApp` and test it by switching your device to dark mode."
              ]
            },
            {
              "type": "quiz",
              "question": "In Design Material Cupertino, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Design Material Cupertino.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Design Material Cupertino is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "state-management-basics",
          "title": "State Management Basics",
          "description": "Master State Management Basics with hands-on examples, architectural diagrams, and structured exercises.",
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
                "The `setState()` method",
                "Lifting State up",
                "Passing data via constructors",
                "Introduction to `ValueNotifier`",
                "Performance: When NOT to use `setState`"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 The `setState()` Method"
            },
            {
              "type": "paragraph",
              "text": "When you call `setState()`, you tell the Flutter framework: \"The data in this object has changed, please call the `build()` method again.\""
            },
            {
              "type": "code",
              "language": "dart",
              "code": "int _counter = 0;\n\nvoid _increment() {\n  setState(() {\n    _counter++; // Framework now knows to update UI\n  });\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Lifting State Up"
            },
            {
              "type": "paragraph",
              "text": "When two widgets need to share the same data, you move the state to their common parent and pass it down as a parameter."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 The Lifecycle of a State"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "initState()`: Called once when the widget is created.",
                "didChangeDependencies()`: Called when dependency changes.",
                "build()`: Called many times.",
                "dispose()`: Called when the widget is destroyed (cleanup).",
                "Build a \"Color Picker\" app where clicking a button changes the background color of the entire screen.",
                "Create a child widget that receives a number and a callback function to increment that number in the parent.",
                "Use `initState()` to start a timer that updates a value every second.",
                "Experiment with `dispose()` to stop the timer when you navigate away from the screen."
              ]
            },
            {
              "type": "quiz",
              "question": "In State Management Basics, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of State Management Basics.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "State Management Basics is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "navigation-and-routing",
          "title": "Navigation And Routing",
          "description": "Master Navigation And Routing with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Navigator.push()` and `pop()`",
                "Named Routes",
                "Passing data between screens",
                "Introduction to `GoRouter` (Modern routing)",
                "Handling the Back button"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 Basic Navigation"
            },
            {
              "type": "paragraph",
              "text": "Flutter uses a \"Stack\" based navigation system."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "// Move to next screen\nNavigator.push(\n  context,\n  MaterialPageRoute(builder: (context) => SecondScreen()),\n);\n\n// Go back\nNavigator.pop(context);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 Passing Arguments"
            },
            {
              "type": "code",
              "language": "dart",
              "code": "// Send\nNavigator.push(\n  context,\n  MaterialPageRoute(builder: (context) => DetailScreen(id: 42)),\n);\n\n// Receive (In DetailScreen constructor)\nfinal int id;\nDetailScreen({required this.id});"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Named Routes"
            },
            {
              "type": "paragraph",
              "text": "Used for better organization in larger apps."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "MaterialApp(\n  initialRoute: '/',\n  routes: {\n    '/': (context) => HomeScreen(),\n    '/details': (context) => DetailScreen(),\n  },\n)\n\n// Usage\nNavigator.pushNamed(context, '/details');"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a \"Home\" and \"Settings\" screen and navigate between them.",
                "Build a \"User List\" where clicking a name navigates to a \"Profile\" screen and passes the user's name.",
                "Return data from a screen using `Navigator.pop(context, 'Success!')` and display it in the original screen.",
                "Set up `GoRouter` in a new project to see how it handles URL-like routing."
              ]
            },
            {
              "type": "quiz",
              "question": "In Navigation And Routing, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Navigation And Routing."
              ],
              "answer": 3,
              "explanation": "Navigation And Routing is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "lists-and-builders",
          "title": "Lists And Builders",
          "description": "Master Lists And Builders with hands-on examples, architectural diagrams, and structured exercises.",
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
                "ListView` vs `ListView.builder`",
                "Handling Large Data sets",
                "GridView` and custom layouts",
                "List Dividers and Spacing",
                "The `ListTile` widget"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Why Builders?"
            },
            {
              "type": "paragraph",
              "text": "ListView` renders all items at once. **`ListView.builder`** renders only the items currently visible on the screen, making it efficient for lists with thousands of items."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "ListView.builder(\n  itemCount: 1000,\n  itemBuilder: (context, index) {\n    return ListTile(\n      title: Text(\"Item #$index\"),\n      leading: Icon(Icons.star),\n    );\n  },\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 GridView"
            },
            {
              "type": "paragraph",
              "text": "Used for multi-column layouts like a gallery."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "GridView.count(\n  crossAxisCount: 2,\n  children: [\n    Container(color: Colors.red),\n    Container(color: Colors.blue),\n  ],\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.3 List Interactions"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "onTap` in `ListTile`.",
                "Dismissible` for swipe-to-delete.",
                "RefreshIndicator` for pull-to-refresh."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Contacts List\" with 50 items using `ListView.builder`.",
                "Use `ListTile` with a `trailing` icon to show a \"Delete\" button.",
                "Build a 3-column \"Photo Grid\" using `GridView.builder`.",
                "Implement a `Dismissible` widget to remove items from your list with a swipe gesture."
              ]
            },
            {
              "type": "quiz",
              "question": "In Lists And Builders, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Lists And Builders.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Lists And Builders is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "input-and-forms",
          "title": "Input And Forms",
          "description": "Master Input And Forms with hands-on examples, architectural diagrams, and structured exercises.",
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
                "TextField` vs `TextFormField`",
                "Controllers (`TextEditingController`)",
                "Form Validation and `GlobalKey`",
                "Checkboxes, Radio buttons, and Switches",
                "Handling the Keyboard"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Basic Input"
            },
            {
              "type": "code",
              "language": "dart",
              "code": "final myController = TextEditingController();\n\nTextField(\n  controller: myController,\n  decoration: InputDecoration(labelText: 'Enter your name'),\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Form Validation"
            },
            {
              "type": "paragraph",
              "text": "Use `TextFormField` inside a `Form` widget to handle validation and submission easily."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "final _formKey = GlobalKey<FormState>();\n\nForm(\n  key: _formKey,\n  child: Column(\n    children: [\n      TextFormField(\n        validator: (value) {\n          if (value == null || value.isEmpty) return 'Please enter text';\n          return null;\n        },\n      ),\n      ElevatedButton(\n        onPressed: () {\n          if (_formKey.currentState!.validate()) {\n            // Process data\n          }\n        },\n        child: Text('Submit'),\n      ),\n    ],\n  ),\n)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a \"Login\" form with Email and Password fields.",
                "Add validation to ensure the Email field contains an `@` symbol.",
                "Build a \"Settings\" screen with a `Switch` for Dark Mode and a `Checkbox` for \"Remember Me.\"",
                "Use a `FocusNode` to automatically move the focus to the next input when the user clicks \"Enter.\""
              ]
            },
            {
              "type": "quiz",
              "question": "In Input And Forms, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Input And Forms.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Input And Forms is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "state-management-advanced",
          "title": "State Management Advanced",
          "description": "Master State Management Advanced with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate → Advanced | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Why do we need State Management libraries?",
                "Introduction to **Provider**",
                "ChangeNotifier` and `notifyListeners()`",
                "Consumer` and `context.watch()`",
                "Comparison: Provider vs. Riverpod vs. BLoC"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 The Provider Pattern"
            },
            {
              "type": "paragraph",
              "text": "Provider is the most popular way to share data across many widgets in a clean way."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "// 1. Create a Model\nclass CartModel extends ChangeNotifier {\n  int _items = 0;\n  int get items => _items;\n\n  void add() {\n    _items++;\n    notifyListeners(); // Tells the UI to update\n  }\n}\n\n// 2. Wrap the app\nChangeNotifierProvider(\n  create: (context) => CartModel(),\n  child: MyApp(),\n)\n\n// 3. Use the data\nConsumer<CartModel>(\n  builder: (context, cart, child) => Text(\"Items: ${cart.items}\"),\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 Riverpod & BLoC"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Riverpod**: The modern successor to Provider. More type-safe and doesn't depend on the Widget Tree.",
                "**BLoC**: Best for very large, complex apps. Uses Streams to separate logic from UI completely."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"User Profile\" app where the user's name is stored in a `Provider` and used on two different screens.",
                "Implement a \"Shopping Cart\" where adding an item on one screen updates the \"Cart Count\" in the App Bar of all screens.",
                "Use `context.read<T>()` to call a function in your provider without causing a rebuild.",
                "Experiment with `MultiProvider` to manage multiple data models at once."
              ]
            },
            {
              "type": "quiz",
              "question": "In State Management Advanced, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of State Management Advanced.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "State Management Advanced is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "network-and-apis",
          "title": "Network And APIs",
          "description": "Master Network And APIs with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate → Advanced | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The `http` package",
                "Async/Await in Dart",
                "FutureBuilder` (Handling data states in UI)",
                "JSON Parsing and Serialization",
                "Handling Errors and Timeouts"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Fetching Data"
            },
            {
              "type": "code",
              "language": "dart",
              "code": "import 'package:http/http.dart' as http;\n\nFuture<void> fetchData() async {\n  final response = await http.get(Uri.parse('https://api.example.com/data'));\n  if (response.statusCode == 200) {\n    print(response.body);\n  }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 FutureBuilder"
            },
            {
              "type": "paragraph",
              "text": "The easiest way to show \"Loading\", \"Data\", or \"Error\" states."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "FutureBuilder<List<User>>(\n  future: apiService.getUsers(),\n  builder: (context, snapshot) {\n    if (snapshot.connectionState == ConnectionState.waiting) {\n      return CircularProgressIndicator();\n    } else if (snapshot.hasError) {\n      return Text(\"Error: ${snapshot.error}\");\n    } else {\n      return ListView(...);\n    }\n  },\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.3 JSON Serialization"
            },
            {
              "type": "paragraph",
              "text": "Manual parsing is error-prone. Use classes to map your JSON."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "class User {\n  final String name;\n  User.fromJson(Map<String, dynamic> json) : name = json['name'];\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Fetch a list of posts from `https://jsonplaceholder.typicode.com/posts`.",
                "Display them in a `ListView.builder` inside a `FutureBuilder`.",
                "Add a \"Refresh\" button that calls the API again.",
                "Implement error handling to show a \"Try Again\" button if the network is down."
              ]
            },
            {
              "type": "quiz",
              "question": "In Network And APIs, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Network And APIs."
              ],
              "answer": 3,
              "explanation": "Network And APIs is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "animations-and-transitions",
          "title": "Animations And Transitions",
          "description": "Master Animations And Transitions with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate → Advanced | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Implicit Animations (`AnimatedContainer`, `AnimatedOpacity`)",
                "Explicit Animations (`AnimationController`, `Tween`)",
                "Hero Animations (Shared elements)",
                "Page Transitions",
                "Rive for advanced Vector animations"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.1 Implicit Animations"
            },
            {
              "type": "paragraph",
              "text": "The easiest way to animate properties like size, color, or opacity."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "AnimatedContainer(\n  duration: Duration(seconds: 1),\n  color: _selected ? Colors.red : Colors.blue,\n  width: _selected ? 200 : 100,\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.2 Hero Animations"
            },
            {
              "type": "paragraph",
              "text": "Animate an element (like an image) as it moves from one screen to another."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "// Screen 1\nHero(tag: 'logo', child: Image.asset('logo.png'))\n\n// Screen 2\nHero(tag: 'logo', child: Image.asset('logo.png'))"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.3 AnimationController"
            },
            {
              "type": "paragraph",
              "text": "For complex, repeating, or manual animations."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "late AnimationController _controller;\n\n@override\nvoid initState() {\n  _controller = AnimationController(vsync: this, duration: Duration(seconds: 2))..repeat();\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Pulse\" animation for a button using `AnimatedContainer`.",
                "Implement a `Hero` animation for a profile picture moving from a list to a detail page.",
                "Use `AnimatedList` to animate items as they are added or removed from a list.",
                "Experiment with `Lottie` or `Rive` to add professional vector animations to your app."
              ]
            },
            {
              "type": "quiz",
              "question": "In Animations And Transitions, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Animations And Transitions.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Animations And Transitions is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "native-features-and-plugins",
          "title": "Native Features And Plugins",
          "description": "Master Native Features And Plugins with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Finding and using Plugins (`pub.dev`)",
                "Handling Permissions (`permission_handler`)",
                "Camera & Image Picker",
                "Geolocation",
                "Method Channels (Communicating with Native code)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.1 The Plugin Ecosystem"
            },
            {
              "type": "paragraph",
              "text": "Flutter has thousands of community plugins on `pub.dev`. Most common tasks are already solved."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.2 Camera Example"
            },
            {
              "type": "code",
              "language": "dart",
              "code": "final ImagePicker picker = ImagePicker();\nfinal XFile? image = await picker.pickImage(source: ImageSource.camera);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.3 Method Channels"
            },
            {
              "type": "paragraph",
              "text": "When a plugin doesn't exist, you can write your own native code (Java/Kotlin/Swift) and call it from Dart."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "static const platform = MethodChannel('samples.flutter.dev/battery');\n\nFuture<void> getBatteryLevel() async {\n  final int result = await platform.invokeMethod('getBatteryLevel');\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Use the `url_launcher` plugin to open a website from your app.",
                "Build a \"Profile Photo\" feature that lets users take a picture and display it in the app.",
                "Use `geolocator` to find and display the user's current city.",
                "Experiment with `path_provider` to find where the app can securely store files on the device."
              ]
            },
            {
              "type": "quiz",
              "question": "In Native Features And Plugins, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Native Features And Plugins.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Native Features And Plugins is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "local-storage-persistence",
          "title": "Local Storage Persistence",
          "description": "Master Local Storage Persistence with hands-on examples, architectural diagrams, and structured exercises.",
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
                "shared_preferences` (Simple Key-Value)",
                "Sqflite` (Relational SQL)",
                "Hive` (High-performance NoSQL)",
                "Working with the File System"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.1 shared_preferences"
            },
            {
              "type": "paragraph",
              "text": "Best for small data like settings, tokens, or booleans."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "final prefs = await SharedPreferences.getInstance();\nawait prefs.setBool('dark_mode', true);\nfinal isDark = prefs.getBool('dark_mode');"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.2 Hive (Recommended)"
            },
            {
              "type": "paragraph",
              "text": "Hive is a lightweight and blazing fast key-value database written in pure Dart. It's great for storing objects."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "var box = Hive.box('myBox');\nbox.put('name', 'Aravind');\nprint('Name: ${box.get('name')}');"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Save the user's \"Display Name\" to `shared_preferences` so it persists after restart.",
                "Build a \"Notes\" app using `Hive` that saves a list of note objects.",
                "Use `path_provider` to create a custom text file and write \"Hello from Flutter\" into it.",
                "Experiment with `sqflite` for a project that needs complex SQL queries and table joins."
              ]
            },
            {
              "type": "quiz",
              "question": "In Local Storage Persistence, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Local Storage Persistence.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Local Storage Persistence is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "testing-and-quality",
          "title": "Testing And Quality",
          "description": "Master Testing And Quality with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Unit Testing (Testing logic)",
                "Widget Testing (Testing UI)",
                "Integration Testing (Testing the whole app)",
                "Mocking with `mockito`",
                "Debugging with Flutter DevTools"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.1 Unit Testing"
            },
            {
              "type": "code",
              "language": "dart",
              "code": "test('counter value should be incremented', () {\n  final counter = Counter();\n  counter.increment();\n  expect(counter.value, 1);\n});"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.2 Widget Testing"
            },
            {
              "type": "paragraph",
              "text": "Simulates user interaction without a device."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "testWidgets('Counter increments smoke test', (WidgetTester tester) async {\n  await tester.pumpWidget(MyApp());\n  expect(find.text('0'), findsOneWidget);\n\n  await tester.tap(find.byIcon(Icons.add));\n  await tester.pump(); // Rebuild UI\n\n  expect(find.text('1'), findsOneWidget);\n});"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a Unit test for a custom \"Validator\" function.",
                "Build a screen and write a Widget test to ensure the \"Submit\" button is present.",
                "Use the \"Flutter Inspector\" in DevTools to debug a layout issue (e.g., an overflow).",
                "Use `mockito` to mock an API response and test how your UI handles it."
              ]
            },
            {
              "type": "quiz",
              "question": "In Testing And Quality, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Testing And Quality."
              ],
              "answer": 3,
              "explanation": "Testing And Quality is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "publishing-and-deployment",
          "title": "Publishing And Deployment",
          "description": "Master Publishing And Deployment with hands-on examples, architectural diagrams, and structured exercises.",
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
                "App Icons and Launch Screens",
                "Building for Android (`.apk`, `.aab`)",
                "Building for iOS (`.ipa`)",
                "Building for the Web",
                "Release best practices"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.1 Preparing for Release"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Change App Name & ID**: In `pubspec.yaml` and platform folders.",
                "**Icons**: Use the `flutter_launcher_icons` plugin.",
                "**Check Permissions**: Ensure you only ask for what you need."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.2 Build Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Android\nflutter build appbundle\n\n# iOS\nflutter build ipa\n\n# Web\nflutter build web"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.3 Deployment"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Android**: Upload to Google Play Console.",
                "**iOS**: Upload to App Store Connect via Xcode.",
                "**Web**: Host the `build/web` folder on Netlify, Vercel, or Firebase."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build your app for the Web and run it locally.",
                "Design a custom icon and use `flutter_launcher_icons` to generate all sizes.",
                "Learn how to sign an Android app using a `key.properties` file.",
                "Experiment with `shorebird` (if interested) for Hot Updates (OTA) in Flutter."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Flutter Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In Publishing And Deployment, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Publishing And Deployment.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Publishing And Deployment is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "advanced-patterns-riverpod-bloc",
          "title": "Advanced Patterns Riverpod Bloc",
          "description": "Master Advanced Patterns Riverpod Bloc with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Why move beyond Provider?",
                "Riverpod: Global Providers and `ConsumerWidget`",
                "BLoC: Streams, Sinks, and Events",
                "Cubit: A simpler version of BLoC",
                "Choosing the right tool for your team"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.1 Riverpod (The \"Modern\" Way)"
            },
            {
              "type": "paragraph",
              "text": "Riverpod is a complete rewrite of Provider that catches errors at compile time and doesn't depend on the Widget Tree."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "// 1. Define a provider\nfinal countProvider = StateProvider((ref) => 0);\n\n// 2. Use in a Widget\nclass HomeView extends ConsumerWidget {\n  @override\n  Widget build(BuildContext context, WidgetRef ref) {\n    final count = ref.watch(countProvider);\n    return Text('$count');\n  }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.2 BLoC (The \"Enterprise\" Way)"
            },
            {
              "type": "paragraph",
              "text": "BLoC (Business Logic Component) uses **Streams** to separate the UI from the logic. It's great for traceability and complex state transitions."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Events**: What the user does (e.g., `AddProductEvent`).",
                "**States**: What the UI shows (e.g., `ProductAddedState`).",
                "**BLoC**: Maps Events to States.",
                "Build a \"Counter\" app using **Riverpod** and `ref.watch`.",
                "Convert a \"Login\" form to use a **Cubit** to manage `Loading`, `Success`, and `Error` states.",
                "Use `ProviderObserver` in Riverpod to log every state change in your app.",
                "Implement a BLoC that fetches a list of items and handles an `EmptyState` vs `DataState`."
              ]
            },
            {
              "type": "quiz",
              "question": "In Advanced Patterns Riverpod Bloc, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Advanced Patterns Riverpod Bloc.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Advanced Patterns Riverpod Bloc is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "firebase-for-flutter",
          "title": "Firebase For Flutter",
          "description": "Master Firebase For Flutter with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Firebase Setup (CLI and Console)",
                "Authentication (Email, Google, Anonymous)",
                "Cloud Firestore (NoSQL Database)",
                "Firebase Cloud Messaging (Push Notifications)",
                "Firebase Storage (Uploading images/files)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.1 Setup"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Install Firebase CLI\nnpm install -g firebase-tools\n# Configure Flutter\ndart pub global activate flutterfire_cli\nflutterfire configure"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.2 Cloud Firestore"
            },
            {
              "type": "paragraph",
              "text": "Firestore is a real-time database. You can \"listen\" to changes, and the UI will update automatically."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "FirebaseFirestore.instance\n    .collection('users')\n    .doc(uid)\n    .snapshots() // Returns a Stream!\n    .listen((data) => print(data));"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.3 Push Notifications (FCM)"
            },
            {
              "type": "paragraph",
              "text": "Critical for user engagement."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "FirebaseMessaging.onMessage.listen((RemoteMessage message) {\n  print('Got a message whilst in the foreground!');\n});"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Set up a Firebase project and connect it to your Flutter app using the FlutterFire CLI.",
                "Implement \"Email/Password Login\" using `firebase_auth`.",
                "Create a \"Chat Room\" where users can post messages to Firestore and see them appear in real-time.",
                "Set up a simple Cloud Function to send a push notification when a new document is added to Firestore."
              ]
            },
            {
              "type": "quiz",
              "question": "In Firebase For Flutter, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Firebase For Flutter.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Firebase For Flutter is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "clean-architecture-ddd",
          "title": "Clean Architecture DDD",
          "description": "Master Clean Architecture DDD with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The \"Layered\" approach",
                "Data Layer (Models, Data Sources, Repositories)",
                "Domain Layer (Entities, Use Cases, Repository Interfaces)",
                "Presentation Layer (BLoCs, Widgets)",
                "Dependency Inversion principle"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.1 The Three Layers"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Presentation**: All your Flutter widgets and BLoCs/Providers. This layer only knows about the **Domain** layer.",
                "**Domain**: The core business logic. It contains **Entities** (pure Dart objects) and **Use Cases**. This layer has ZERO dependencies on other layers.",
                "**Data**: Communicates with the outside world (APIs, Databases). It implements the interfaces defined in the Domain layer."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.2 Why use Use Cases?"
            },
            {
              "type": "paragraph",
              "text": "A Use Case represents a single action a user can take (e.g., `GetWeatherForCity`). It makes the code incredibly easy to read and test."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "class GetUserUseCase {\n  final UserRepository repository;\n  GetUserUseCase(this.repository);\n\n  Future<User> call(String id) => repository.getUser(id);\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Refactor a simple \"Fetch Users\" feature into the three Clean Architecture layers.",
                "Define an \"Entity\" in the Domain layer and a \"Model\" in the Data layer that extends it (using `fromJson`).",
                "Write a \"Mock\" repository and use it to test a Use Case without calling a real API.",
                "Experiment with the `get_it` package to handle Dependency Injection across your layers."
              ]
            },
            {
              "type": "quiz",
              "question": "In Clean Architecture DDD, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Clean Architecture DDD."
              ],
              "answer": 3,
              "explanation": "Clean Architecture DDD is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "advanced-dart-isolates",
          "title": "Advanced Dart Isolates",
          "description": "Master Advanced Dart Isolates with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The Event Loop and Microtask Queue",
                "Streams and StreamControllers",
                "Multi-threading with **Isolates**",
                "The `compute()` function",
                "Handling heavy data processing without dropping frames"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.1 The Event Loop"
            },
            {
              "type": "paragraph",
              "text": "Dart is single-threaded. It uses an \"Event Loop\" to process tasks. If you perform a heavy task (like parsing a 10MB JSON) on the main thread, the app will \"jank\" or freeze for a moment."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.2 Isolates"
            },
            {
              "type": "paragraph",
              "text": "Isolates are separate \"workers\" with their own memory. They don't share data with the main thread; they communicate via **Ports**."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "// The easy way\nfinal result = await compute(heavyProcessingTask, data);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "19.3 Streams"
            },
            {
              "type": "paragraph",
              "text": "Streams are a source of asynchronous data events. They are the backbone of BLoC and real-time features."
            },
            {
              "type": "code",
              "language": "dart",
              "code": "Stream<int> countStream() async* {\n  for (int i = 1; i <= 10; i++) {\n    yield i; // Emit a value\n    await Future.delayed(Duration(seconds: 1));\n  }\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a script that simulates a heavy mathematical calculation and run it using `compute()` to see if the UI stays smooth.",
                "Build a \"Stopwatch\" using a `Stream` that emits the current time every 10 milliseconds.",
                "Use `StreamBuilder` to display the data from your stopwatch.",
                "Experiment with `Isolate.spawn` for more complex multi-threaded communication."
              ]
            },
            {
              "type": "quiz",
              "question": "In Advanced Dart Isolates, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Advanced Dart Isolates.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Advanced Dart Isolates is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "ci-cd-store-optimization",
          "title": "CI CD Store Optimization",
          "description": "Master CI CD Store Optimization with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "App Store Optimization (ASO) basics",
                "Automating builds with **Fastlane**",
                "CI/CD with **Codemagic** or **GitHub Actions**",
                "Handling App Bundles and Signing in the cloud",
                "Managing Beta releases (TestFlight and Play Store Testing)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.1 Fastlane"
            },
            {
              "type": "paragraph",
              "text": "Fastlane is a tool that automates taking screenshots, managing provisioning profiles, and releasing your app."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Example Fastlane command\nlane :beta do\n  build_app(scheme: \"Release\")\n  upload_to_testflight\nend"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "20.2 CI/CD with GitHub Actions"
            },
            {
              "type": "paragraph",
              "text": "Every time you push code, your tests should run, and a new build should be generated."
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# .github/workflows/main.yml\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: subosito/flutter-action@v2\n      - run: flutter test\n      - run: flutter build appbundle"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Set up a GitHub Action that runs `flutter test` whenever you push code to the `main` branch.",
                "Review the `fastlane` documentation and understand how it handles \"Match\" (code signing).",
                "Draft a set of high-quality \"Store Screenshots\" and a \"Description\" with keywords for ASO.",
                "Learn how to set up \"App Groups\" and \"Internal Testing\" in the Google Play Console."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the full 20-module Flutter Expert Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In CI CD Store Optimization, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of CI CD Store Optimization.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "CI CD Store Optimization is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
