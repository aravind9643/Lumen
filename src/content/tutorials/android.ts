import type { Tutorial } from '../types'

export const androidKotlin: Tutorial = {
  "slug": "android-kotlin",
  "title": "Native Android Development with Kotlin & Jetpack Compose",
  "shortTitle": "Android & Kotlin",
  "description": "Master modern Android development using Kotlin, declarative Jetpack Compose UIs, Coroutines, Flow, and clean MVVM architecture.",
  "category": "Mobile Development",
  "difficulty": "intermediate",
  "icon": "robot",
  "tags": [
    "Android",
    "Kotlin",
    "Jetpack Compose",
    "Coroutines",
    "Room",
    "MAD Architecture"
  ],
  "color": "#22c55e",
  "updated": "2026-08-17",
  "prerequisites": [
    "Basic programming background."
  ],
  "outcomes": [
    "Master Kotlin language features, coroutines, and Flow",
    "Build declarative native UIs with Jetpack Compose and Material 3",
    "Implement Modern Android Architecture (MVVM, Repositories, Use Cases)",
    "Persist offline data using Room Database and DataStore"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "introduction-and-setup",
          "title": "Introduction And Setup",
          "description": "Master Introduction And Setup with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Modern Android Development (MAD)?",
                "Setting up Android Studio",
                "Kotlin Basics for Android (val vs var, functions, null safety)",
                "Creating your first \"Hello World\" project",
                "Running on the Emulator"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 Why Kotlin & Jetpack Compose?"
            },
            {
              "type": "definition",
              "term": "Kotlin is a modern, concise, and safe programming language that is now the preferred language for Android. **Jetpack Compose** is Android’s modern toolkit for building native UI using a declarative approach (similar to React/Flutter).",
              "plain": "Kotlin is a modern, concise, and safe programming language that is now the preferred language for Android. **Jetpack Compose** is Android’s modern toolkit for building native UI using a declarative approach (similar to React/Flutter)."
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
                "**Legacy Android (XML)** was like building a house with **Blueprints and Bricks**. You had to describe the house in one file (XML) and build the logic in another (Java).",
                "**Jetpack Compose** is like building with **Magic Nano-Bots**. You describe what the UI should look like in Kotlin code, and the system automatically builds and updates it for you."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Environment Setup"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Download Android Studio**: The official IDE for Android.",
                "**Install SDKs**: Download the latest Android platform and tools.",
                "**Set up AVD**: Create an Android Virtual Device (Emulator) to test your apps."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Kotlin \"Crash Course\""
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "// 1. Variables\nval name = \"Aravind\" // Constant (Final)\nvar age = 25         // Mutable\n\n// 2. Null Safety\nvar title: String? = null // Can be null\ntitle?.length             // Safe call\n\n// 3. Functions\nfun greet(name: String): String {\n    return \"Hello, $name\"\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.4 Your First App"
            },
            {
              "type": "paragraph",
              "text": "When you create a new \"Empty Compose Activity,\" Android Studio generates the boilerplate for you."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "class MainActivity : ComponentActivity() {\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n        setContent {\n            Text(\"Hello Android!\")\n        }\n    }\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Install Android Studio and create your first \"Empty Compose Activity.\"",
                "Run the app on the emulator and change the \"Hello\" text to your name.",
                "Write a small Kotlin function that takes a number and returns its square, then display the result in the UI.",
                "Explore the \"Project\" window to understand the difference between `manifests`, `java/kotlin`, and `res` folders."
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
          "slug": "kotlin-basics",
          "title": "Kotlin Basics",
          "description": "Master Kotlin Basics with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for Kotlin Basics."
            },
            {
              "type": "quiz",
              "question": "In Kotlin Basics, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Kotlin Basics."
              ],
              "answer": 3,
              "explanation": "Kotlin Basics is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "jetpack-compose-basics",
          "title": "Jetpack Compose Basics",
          "description": "Master Jetpack Compose Basics with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Composable Functions (`@Composable`)",
                "The `@Preview` annotation",
                "Recomposition (How the UI updates)",
                "Core Composables: `Text`, `Button`, `Image`",
                "Introduction to Modifiers"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Composable Functions"
            },
            {
              "type": "paragraph",
              "text": "Composables are the building blocks of Jetpack Compose. They are standard Kotlin functions marked with the `@Composable` annotation."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Composable\nfun Greeting(name: String) {\n    Text(text = \"Hello $name!\")\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 The Power of `@Preview`"
            },
            {
              "type": "paragraph",
              "text": "You can see your UI updates in real-time without running the app on a device or emulator."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Preview(showBackground = true)\n@Composable\nfun GreetingPreview() {\n    Greeting(\"Aravind\")\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Recomposition"
            },
            {
              "type": "paragraph",
              "text": "Recomposition is the process of calling your Composable functions again when the data they depend on changes. Compose is smart: it only re-renders the parts of the UI that actually changed."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.4 Basic UI Elements"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Composable\nfun WelcomeScreen() {\n    Column {\n        Text(\"Welcome to Android\")\n        Button(onClick = { /* Do something */ }) {\n            Text(\"Click Me\")\n        }\n        Image(\n            painter = painterResource(id = R.drawable.my_image),\n            contentDescription = \"My Photo\"\n        )\n    }\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a custom Composable called `UserCard` that takes a name and a description.",
                "Use the `@Preview` annotation to see your `UserCard` in the Design tab.",
                "Add a `Button` to your UI and make it log a message to the \"Logcat\" when clicked.",
                "Experiment with different `Text` properties like `fontSize`, `fontWeight`, and `color`."
              ]
            },
            {
              "type": "quiz",
              "question": "In Jetpack Compose Basics, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Jetpack Compose Basics.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Jetpack Compose Basics is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "layouts-and-modifiers",
          "title": "Layouts And Modifiers",
          "description": "Master Layouts And Modifiers with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Layout Containers: `Column`, `Row`, `Box`",
                "Alignment and Arrangement",
                "Understanding the `Modifier` system",
                "Chaining Modifiers",
                "Sizing, Padding, and Borders"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 The \"Big Three\" Layouts"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**`Column`**: Places items vertically (one below the other).",
                "**`Row`**: Places items horizontally (side-by-side).",
                "**`Box`**: Places items on top of each other (stacking)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 Alignment vs. Arrangement"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Arrangement**: How items are spaced out along the **main axis** (e.g., `Arrangement.SpaceBetween`).",
                "**Alignment**: How items are positioned along the **cross axis** (e.g., `Alignment.CenterVertically`)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 The Modifier System"
            },
            {
              "type": "paragraph",
              "text": "Modifiers are the most important part of Compose styling. They are used to change a Composable's size, layout, appearance, or add high-level interactions."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Composable\nfun StyledBox() {\n    Box(\n        modifier = Modifier\n            .size(100.dp)           // Size\n            .padding(16.dp)         // External padding\n            .background(Color.Blue) // Background color\n            .clickable { /* ... */ } // Interaction\n    )\n}"
            },
            {
              "type": "paragraph",
              "text": "**CRITICAL RULE**: The order of modifiers matters! `.padding(16.dp).background(Color.Blue)` looks different from `.background(Color.Blue).padding(16.dp)`."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Social Media Profile\" header: A circular `Image` on the left, and a `Column` with Name and Username on the right.",
                "Use a `Box` to overlay a \"Verified\" badge icon on top of a profile picture.",
                "Create a `Row` with three buttons and space them out using `Arrangement.SpaceEvenly`.",
                "Experiment with modifier chaining: Apply a border *after* padding and see what happens."
              ]
            },
            {
              "type": "quiz",
              "question": "In Layouts And Modifiers, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Layouts And Modifiers.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Layouts And Modifiers is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "material-design-3",
          "title": "Material Design 3",
          "description": "Master Material Design 3 with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Intermediate | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Material You (M3)?",
                "Theming: Colors, Typography, and Shapes",
                "Using `Scaffold` for standard app structures",
                "Material Components: `Card`, `FloatingActionButton`, `TopAppBar`",
                "Dynamic Color support"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 Material Design 3 (M3)"
            },
            {
              "type": "paragraph",
              "text": "Material 3 is the latest version of Google’s design system. It focuses on personalization, adaptive layouts, and accessibility."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 The `Scaffold` Composable"
            },
            {
              "type": "paragraph",
              "text": "The `Scaffold` provides a top-level structure for a screen, with slots for a Top Bar, Bottom Bar, and FAB."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "Scaffold(\n    topBar = { TopAppBar(title = { Text(\"My App\") }) },\n    floatingActionButton = { FloatingActionButton(onClick = { /* ... */ }) { Icon(Icons.Default.Add, null) } }\n) { innerPadding ->\n    Column(modifier = Modifier.padding(innerPadding)) {\n        // App content here\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Theming"
            },
            {
              "type": "paragraph",
              "text": "You define your theme in the `ui.theme` package."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Color**: `ColorScheme` (Primary, Secondary, Tertiary, Surface).",
                "**Typography**: `Typography` (Display, Headline, Title, Body, Label).",
                "**Shapes**: `Shapes` (Small, Medium, Large corners)."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a screen using a `Scaffold` with a `TopAppBar` and a `FloatingActionButton`.",
                "Use a `Card` to display a list item with elevation and rounded corners.",
                "Change the `primary` color in your `Theme.kt` and see the entire app update.",
                "Experiment with `ElevatedButton`, `FilledButton`, and `OutlinedButton` to see the M3 style differences."
              ]
            },
            {
              "type": "quiz",
              "question": "In Material Design 3, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Material Design 3.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Material Design 3 is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "state-management",
          "title": "State Management",
          "description": "Master State Management with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Intermediate | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is State in Compose?",
                "remember` and `mutableStateOf`",
                "State Hoisting (Best Practice)",
                "Unidirectional Data Flow (UDF)",
                "rememberSaveable` (Handling configuration changes like screen rotation)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 What is State?"
            },
            {
              "type": "definition",
              "term": "State is any value that can change over time. In Compose, when state changes, the UI **re",
              "plain": "State is any value that can change over time. In Compose, when state changes, the UI **re-composes** (updates)."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Basic State"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Composable\nfun Counter() {\n    // remember keeps the value across re-compositions\n    var count by remember { mutableStateOf(0) }\n\n    Button(onClick = { count++ }) {\n        Text(\"Count is $count\")\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 State Hoisting"
            },
            {
              "type": "paragraph",
              "text": "State hoisting is a pattern of moving state to a component's caller to make a component stateless."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Composable\nfun CounterDisplay(count: Int, onIncrement: () -> Unit) {\n    Button(onClick = onIncrement) {\n        Text(\"Clicked $count times\")\n    }\n}"
            },
            {
              "type": "paragraph",
              "text": "*Why?* This makes the component easier to test and reuse."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.4 `rememberSaveable`"
            },
            {
              "type": "paragraph",
              "text": "If you rotate the phone, the `Activity` is destroyed and recreated. `remember` will lose its data. Use `rememberSaveable` to keep data even after a configuration change."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Toggle\" component that shows/hides a text message when a button is clicked.",
                "Build a `TextInput` (using `OutlinedTextField`) where the state is \"hoisted\" to a parent Composable.",
                "Test your `Counter` app: Use `remember` and rotate the phone. Then switch to `rememberSaveable` and observe the difference.",
                "Create a \"Shopping List\" counter where you can add and subtract items."
              ]
            },
            {
              "type": "quiz",
              "question": "In State Management, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of State Management."
              ],
              "answer": 3,
              "explanation": "State Management is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "navigation-in-compose",
          "title": "Navigation In Compose",
          "description": "Master Navigation In Compose with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Intermediate | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The Navigation Component for Compose",
                "NavController` and `NavHost`",
                "Defining Routes",
                "Navigating between screens",
                "Passing arguments (Strings, Ints)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 Setup"
            },
            {
              "type": "paragraph",
              "text": "Add the dependency to your `build.gradle`:"
            },
            {
              "type": "code",
              "language": "gradle",
              "code": "implementation \"androidx.navigation:navigation-compose:2.x.x\""
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 NavHost & Routes"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Composable\nfun AppNavigation() {\n    val navController = rememberNavController()\n\n    NavHost(navController = navController, startDestination = \"home\") {\n        composable(\"home\") { HomeScreen(navController) }\n        composable(\"details/{itemId}\") { backStackEntry ->\n            val itemId = backStackEntry.arguments?.getString(\"itemId\")\n            DetailsScreen(itemId)\n        }\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Navigating"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "// Navigate to a route\nnavController.navigate(\"details/86\")\n\n// Go back\nnavController.popBackStack()"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Set up a simple two-screen navigation: \"Home\" and \"Settings.\"",
                "Create a \"User Profile\" screen that takes a \"username\" as a navigation argument and displays it.",
                "Build a \"Back\" button in the Top Bar that only appears when you are not on the Home screen.",
                "Experiment with `launchSingleTop` to avoid creating multiple instances of the same screen in the backstack."
              ]
            },
            {
              "type": "quiz",
              "question": "In Navigation In Compose, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Navigation In Compose.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Navigation In Compose is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "lists-and-lazy-layouts",
          "title": "Lists And Lazy Layouts",
          "description": "Master Lists And Lazy Layouts with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Intermediate | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "LazyColumn` (Vertical lists)",
                "LazyRow` (Horizontal lists)",
                "List items and Sticky Headers",
                "Grid layouts (`LazyVerticalGrid`)",
                "Performance optimization with `key`"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Why \"Lazy\"?"
            },
            {
              "type": "paragraph",
              "text": "Just like React Native's `FlatList`, `LazyColumn` only renders the items currently visible on the screen. A regular `Column` with a scroll modifier renders all items at once, which will crash your app if you have thousands of items."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 LazyColumn Syntax"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Composable\nfun MessageList(messages: List<Message>) {\n    LazyColumn {\n        items(messages) { message ->\n            MessageCard(message)\n        }\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.3 LazyVerticalGrid"
            },
            {
              "type": "paragraph",
              "text": "Used for photo galleries or dashboard layouts."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "LazyVerticalGrid(\n    columns = GridCells.Fixed(2),\n    content = {\n        items(photos) { photo -> PhotoItem(photo) }\n    }\n)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Contacts List\" with 100 dummy names using `LazyColumn`.",
                "Add a \"Sticky Header\" for each letter category (A, B, C...).",
                "Build a \"Featured Products\" horizontal scroller using `LazyRow`.",
                "Use a `Card` as the item UI for your `LazyColumn` and add some padding."
              ]
            },
            {
              "type": "quiz",
              "question": "In Lists And Lazy Layouts, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Lists And Lazy Layouts.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Lists And Lazy Layouts is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "mvvm-architecture",
          "title": "MVVM Architecture",
          "description": "Master MVVM Architecture with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Intermediate → Advanced | ⏱ Time: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is MVVM? (Model-View-ViewModel)",
                "The lifecycle-aware `ViewModel`",
                "Using `StateFlow` and `LiveData`",
                "Collecting state in Composables",
                "Separation of Concerns"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Why MVVM?"
            },
            {
              "type": "paragraph",
              "text": "Android activities can be destroyed frequently (rotation, low memory). If your data is stored in the `Activity`, it gets lost. A `ViewModel` is designed to **survive** these configuration changes and hold your app's data securely."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 The ViewModel"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "class MyViewModel : ViewModel() {\n    private val _count = MutableStateFlow(0)\n    val count: StateFlow<Int> = _count.asStateFlow()\n\n    fun increment() {\n        _count.value++\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.3 Observing in Compose"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Composable\nfun MyScreen(viewModel: MyViewModel = viewModel()) {\n    // Collect the flow as state\n    val count by viewModel.count.collectAsState()\n\n    Button(onClick = { viewModel.increment() }) {\n        Text(\"Count: $count\")\n    }\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Todo App\" logic inside a `ViewModel` (add/delete tasks).",
                "Connect your `TodoViewModel` to a Compose UI.",
                "Test rotation: Add some items, rotate the phone, and ensure they are still there (ViewModel handles this automatically!).",
                "Experiment with `Loading`, `Success`, and `Error` states using a `sealed class` for your UI State."
              ]
            },
            {
              "type": "quiz",
              "question": "In MVVM Architecture, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of MVVM Architecture.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "MVVM Architecture is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "network-retrofit-coroutines",
          "title": "Network Retrofit Coroutines",
          "description": "Master Network Retrofit Coroutines with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Advanced | ⏱ Time: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Introduction to Kotlin Coroutines (`suspend` functions)",
                "Retrofit for API calls",
                "GSON / Kotlin Serialization for JSON",
                "Repository Pattern",
                "Handling Network Responses in ViewModel"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 Coroutines Basics"
            },
            {
              "type": "paragraph",
              "text": "Coroutines are \"lightweight threads\" used for asynchronous tasks like network calls or database operations."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "viewModelScope.launch {\n    val result = repository.getData() // Suspend function\n    _state.value = result\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 Retrofit Interface"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "interface ApiService {\n    @GET(\"users\")\n    suspend fun getUsers(): List<User>\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.3 The Full Flow"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**API**: Defines the endpoint.",
                "**Repository**: Calls the API and handles errors.",
                "**ViewModel**: Calls the repository inside a coroutine and updates State.",
                "**View (Compose)**: Observes State and displays UI.",
                "Set up Retrofit to fetch data from `https://jsonplaceholder.typicode.com/posts`.",
                "Create a `Post` data class to map the JSON response.",
                "Implement a `PostViewModel` that fetches posts on initialization.",
                "Display the posts in a `LazyColumn`. Handle the \"Loading\" state with a `CircularProgressIndicator`."
              ]
            },
            {
              "type": "quiz",
              "question": "In Network Retrofit Coroutines, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Network Retrofit Coroutines."
              ],
              "answer": 3,
              "explanation": "Network Retrofit Coroutines is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "data-persistence-room",
          "title": "Data Persistence Room",
          "description": "Master Data Persistence Room with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Advanced | ⏱ Time: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Room? (The SQLite Wrapper)",
                "Entities, DAOs, and Database classes",
                "Flow integration for real-time updates",
                "Type Converters",
                "Migration basics"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Core Components of Room"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Entity**: Represents a table within the database.",
                "**DAO (Data Access Object)**: Contains the methods used for accessing the database (SQL queries).",
                "**Database**: The main access point for the connection to your app's persisted data."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 DAO Example"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Dao\ninterface UserDao {\n    @Query(\"SELECT * FROM user\")\n    fun getAll(): Flow<List<User>> // Real-time updates!\n\n    @Insert\n    suspend fun insert(user: User)\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.3 Room + Compose"
            },
            {
              "type": "paragraph",
              "text": "Because Room returns a `Flow`, your UI will automatically update whenever the database changes. This is extremely powerful for \"Offline-First\" apps."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Bookmark App\": Let users save their favorite posts to a Room database.",
                "Create a `Task` entity with a `isCompleted` boolean.",
                "Build a DAO that allows inserting, deleting, and querying all tasks.",
                "Display the tasks in a list that automatically updates when you add a new task (using `Flow`)."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Android Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In Data Persistence Room, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Data Persistence Room.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Data Persistence Room is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "dependency-injection-hilt",
          "title": "Dependency Injection Hilt",
          "description": "Master Dependency Injection Hilt with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Expert | ⏱ Time: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Dependency Injection (DI)?",
                "Hilt vs. Dagger basics",
                "HiltAndroidApp` and `@AndroidEntryPoint`",
                "Hilt Modules (`@Module`, `@Provides`, `@InstallIn`)",
                "Injecting ViewModels"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.1 What is Dependency Injection?"
            },
            {
              "type": "definition",
              "term": "DI is a design pattern where an object receives other objects that it depends on. This makes your code modular, testable, and maintainable.",
              "plain": "DI is a design pattern where an object receives other objects that it depends on. This makes your code modular, testable, and maintainable."
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
                "**Without DI**: You are a builder who has to go to the hardware store, buy the wood, buy the nails, and find the hammer yourself before you can start.",
                "**With DI**: You are a builder on a **Professional Job Site**. Every morning, a truck arrives and drops off exactly the wood, nails, and tools you need. You just focus on building."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.2 Setting up Hilt"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "// 1. Application class\n@HiltAndroidApp\nclass MyApplication : Application()\n\n// 2. Activity / Fragment\n@AndroidEntryPoint\nclass MainActivity : ComponentActivity()"
            },
            {
              "type": "paragraph",
              "text": "Used to tell Hilt how to create instances of types you don't own (like Retrofit or Room)."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@Module\n@InstallIn(SingletonComponent::class)\nobject NetworkModule {\n    @Provides\n    @Singleton\n    fun provideApiService(): ApiService {\n        return Retrofit.Builder()\n            .baseUrl(\"...\")\n            .build()\n            .create(ApiService::class.java)\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.4 Injecting into ViewModels"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@HiltViewModel\nclass MyViewModel @Inject constructor(\n    private val repository: MyRepository\n) : ViewModel() { ... }"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Set up Hilt in your project and create the `@HiltAndroidApp` class.",
                "Build a `NetworkModule` that provides a Retrofit instance.",
                "Inject a Repository into a `ViewModel` using the `@Inject` constructor.",
                "Try to inject a dependency into a Composable (hint: use `hiltViewModel()`)."
              ]
            },
            {
              "type": "quiz",
              "question": "In Dependency Injection Hilt, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Dependency Injection Hilt.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Dependency Injection Hilt is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "background-work-workmanager",
          "title": "Background Work WorkManager",
          "description": "Master Background Work WorkManager with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Expert | ⏱ Time: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Deferrable vs. Immediate tasks",
                "Creating a `Worker`",
                "WorkRequest` (One-time vs. Periodic)",
                "Adding Constraints (Charging, Wi-Fi only)",
                "Observing Work status"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.1 Why WorkManager?"
            },
            {
              "type": "definition",
              "term": "WorkManager is the recommended solution for persistent work. Work is persistent when it remains scheduled through app restarts and system reboots.",
              "plain": "WorkManager is the recommended solution for persistent work. Work is persistent when it remains scheduled through app restarts and system reboots."
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
                "**Coroutines** are like **A Sprint**. They run right now while you are watching.",
                "**WorkManager** is like a **Postman**. You give them the letter (the task) and some rules (only deliver if it's not raining). Even if you go to sleep, the postman will wait for the right time and deliver the letter."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.2 Creating a Worker"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "class UploadWorker(context: Context, params: WorkerParameters) : CoroutineWorker(context, params) {\n    override suspend fun doWork(): Result {\n        // Perform the background task here\n        return Result.success()\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.3 Scheduling with Constraints"
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "val constraints = Constraints.Builder()\n    .setRequiredNetworkType(NetworkType.UNMETERED) // Wi-Fi only\n    .setRequiresCharging(true)\n    .build()\n\nval uploadWorkRequest = OneTimeWorkRequestBuilder<UploadWorker>()\n    .setConstraints(constraints)\n    .build()\n\nWorkManager.getInstance(context).enqueue(uploadWorkRequest)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a `SyncWorker` that logs \"Syncing data...\" to the console.",
                "Schedule it to run only when the device is charging and on Wi-Fi.",
                "Create a `PeriodicWorkRequest` that runs every 24 hours.",
                "Observe the work status in your UI and show a \"Syncing...\" spinner while it's running."
              ]
            },
            {
              "type": "quiz",
              "question": "In Background Work WorkManager, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Background Work WorkManager.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Background Work WorkManager is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "animations-and-graphics",
          "title": "Animations And Graphics",
          "description": "Master Animations And Graphics with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Intermediate → Expert | ⏱ Time: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "AnimatedVisibility` (Simple show/hide)",
                "animateContentSize` (Automatic layout changes)",
                "animate*AsState` (Property animations)",
                "Transition API (Complex sequences)",
                "Canvas basics (Custom drawing)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.1 High-Level Animations"
            },
            {
              "type": "paragraph",
              "text": "Compose makes simple animations incredibly easy."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "var visible by remember { mutableStateOf(true) }\n\nAnimatedVisibility(visible = visible) {\n    Text(\"Now you see me!\")\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.2 Property Animations"
            },
            {
              "type": "paragraph",
              "text": "Use these to animate single values like colors, sizes, or offsets."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "val backgroundColor by animateColorAsState(\n    targetValue = if (isSelected) Color.Red else Color.Blue,\n    animationSpec = tween(durationMillis = 1000)\n)\n\nBox(modifier = Modifier.background(backgroundColor))"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.3 Custom Drawing (Canvas)"
            },
            {
              "type": "paragraph",
              "text": "When standard components aren't enough, you draw your own."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "Canvas(modifier = Modifier.size(100.dp)) {\n    drawCircle(color = Color.Red, radius = size.minDimension / 2)\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Toggle Expand\" card: When clicked, it expands to show more text with `animateContentSize`.",
                "Create a \"Floating Action Button\" that changes color and rotates when pressed.",
                "Build a \"Loading Spinner\" from scratch using `Canvas` and a repeating animation.",
                "Experiment with `Spring` specs vs. `Tween` specs to see how physics-based animations feel."
              ]
            },
            {
              "type": "quiz",
              "question": "In Animations And Graphics, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Animations And Graphics."
              ],
              "answer": 3,
              "explanation": "Animations And Graphics is built around established design principles, structured syntax, and robust real-world implementations."
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
              "text": "Level: Expert | ⏱ Time: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Local Unit Testing (JUnit 5)",
                "Mocking with **MockK**",
                "Testing ViewModels",
                "Instrumentation UI Testing (Compose Test Rule)",
                "Semantics and Finders in Compose"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.1 Unit Testing"
            },
            {
              "type": "paragraph",
              "text": "Unit tests run on your computer (JVM) and are very fast. They test logic in ViewModels or Repositories."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "class MyViewModelTest {\n    @Test\n    fun `increment count should update state`() {\n        val viewModel = MyViewModel()\n        viewModel.increment()\n        assertEquals(1, viewModel.count.value)\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.2 UI Testing in Compose"
            },
            {
              "type": "paragraph",
              "text": "UI tests run on an emulator/device and simulate user interaction."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "@get:Rule\nval composeTestRule = createComposeRule()\n\n@Test\nfun myTest() {\n    composeTestRule.setContent { MyScreen() }\n\n    composeTestRule.onNodeWithText(\"Click Me\").performClick()\n    composeTestRule.onNodeWithText(\"Count is 1\").assertIsDisplayed()\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.3 The \"Testing Pyramid\""
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Unit Tests (70%)**: Business logic.",
                "**Integration Tests (20%)**: How components work together.",
                "**UI Tests (10%)**: Critical user paths.",
                "Write a Unit test for a `MathUtils` class.",
                "Build a `LoginViewModel` and write tests for \"Successful Login\" and \"Failed Login\" scenarios using MockK.",
                "Write a UI test that enters text into a `TextField` and verifies that a \"Submit\" button becomes enabled.",
                "Experiment with `testTag` modifiers to find specific nodes in your UI tests."
              ]
            },
            {
              "type": "quiz",
              "question": "In Testing And Quality, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Testing And Quality.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Testing And Quality is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "security-and-publishing",
          "title": "Security And Publishing",
          "description": "Master Security And Publishing with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Expert | ⏱ Time: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Secure Storage (EncryptedSharedPreferences)",
                "Biometric Authentication",
                "Code Obfuscation (R8 / ProGuard)",
                "App Bundles (`.aab`)",
                "Google Play Store Release Process"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.1 Secure Storage"
            },
            {
              "type": "paragraph",
              "text": "Never store passwords or tokens in plain text. Use the Security library."
            },
            {
              "type": "code",
              "language": "kotlin",
              "code": "val masterKey = MasterKey.Builder(context)\n    .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)\n    .build()\n\nval sharedPreferences = EncryptedSharedPreferences.create(\n    context,\n    \"secret_shared_prefs\",\n    masterKey,\n    EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,\n    EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM\n)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.2 R8 & ProGuard"
            },
            {
              "type": "paragraph",
              "text": "When you release an app, you should **obfuscate** your code so it's harder to reverse-engineer and to reduce the file size."
            },
            {
              "type": "code",
              "language": "gradle",
              "code": "// build.gradle\nbuildTypes {\n    release {\n        isMinifyEnabled = true\n        proguardFiles(getDefaultProguardFile(\"proguard-android-optimize.txt\"), \"proguard-rules.pro\")\n    }\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.3 Google Play Console"
            },
            {
              "type": "paragraph",
              "text": "To publish an app, you need:"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "A Developer Account ($25 one-time fee).",
                "Store assets (Screenshots, Description, Icons).",
                "A signed **Android App Bundle (.aab)**.",
                "Implement `EncryptedSharedPreferences` to save a dummy \"Auth Token.\"",
                "Set up a simple \"Biometric Login\" button that triggers the system fingerprint/face dialog.",
                "Review your `proguard-rules.pro` file and learn how to \"keep\" specific classes from being obfuscated.",
                "Go through the checklist of the Google Play Console \"App Content\" section to see the legal requirements for publishing."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the full Android Expert Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In Security And Publishing, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Security And Publishing.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Security And Publishing is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
