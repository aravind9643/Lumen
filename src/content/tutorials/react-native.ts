import type { Tutorial } from '../types'

export const reactNative: Tutorial = {
  "slug": "react-native",
  "title": "Cross-Platform Mobile Engineering with React Native",
  "shortTitle": "React Native",
  "description": "Create high-performance native iOS and Android apps using React, TypeScript, Expo tooling, and reanimated motion architectures.",
  "category": "Mobile Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "React Native",
    "Expo",
    "JavaScript",
    "TypeScript",
    "Mobile",
    "iOS",
    "Android"
  ],
  "color": "#06b6d4",
  "updated": "2026-08-17",
  "prerequisites": [
    "Familiarity with React and JavaScript."
  ],
  "outcomes": [
    "Build native iOS and Android apps using React and Expo EAS",
    "Master mobile layouts, Flexbox styling, and gesture handling",
    "Implement smooth animations using React Native Reanimated",
    "Manage global state with Zustand and navigate with React Navigation"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "core-components",
          "title": "Core Components",
          "description": "Master Core Components with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for Core Components."
            },
            {
              "type": "quiz",
              "question": "In Core Components, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Core Components.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Core Components is built around established design principles, structured syntax, and robust real-world implementations."
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
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is React Native? (Native vs Web)",
                "Expo vs. React Native CLI",
                "Setting up the environment (Node, Watchman, Android Studio/Xcode)",
                "Creating your first \"Hello World\" app",
                "Running on Emulators and Real Devices"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is React Native?"
            },
            {
              "type": "definition",
              "term": "React Native is an open",
              "plain": "React Native is an open-source framework created by Meta that allows you to build **native mobile apps** for iOS and Android using JavaScript and React."
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
                "**Web Development** is like writing a play that is performed on a **Stage** (The Browser).",
                "**React Native** is like writing that same play, but it's performed by **Movie Actors** (Native UI Components). The actors are different, the set is different, but the **Script** (React/JS logic) is the same."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Expo vs. CLI"
            },
            {
              "type": "table",
              "headers": [
                "Feature",
                "Expo (Recommended for Starters)",
                "React Native CLI (Professional/Advanced)"
              ],
              "rows": [
                [
                  "**Setup**",
                  "Extremely Easy",
                  "Complex (requires full SDKs)",
                  ""
                ],
                [
                  "**Native Code**",
                  "Managed for you",
                  "Full access to Java/Kotlin/Swift",
                  ""
                ],
                [
                  "**Testing**",
                  "Expo Go app on your phone",
                  "Emulator or connected device",
                  ""
                ],
                [
                  "**Best for**",
                  "Fast prototyping, most apps",
                  "Complex apps needing custom native modules",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Setup with Expo"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# 1. Create a new project\nnpx create-expo-app my-mobile-app\n\n# 2. Navigate\ncd my-mobile-app\n\n# 3. Start the project\nnpx expo start"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.4 Running the App"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Physical Device**: Download the \"Expo Go\" app from the App Store/Play Store. Scan the QR code in your terminal.",
                "**Android Emulator**: Install Android Studio and set up an AVD (Android Virtual Device).",
                "**iOS Simulator**: (macOS only) Install Xcode.",
                "Set up your environment and create your first Expo app.",
                "Run the app on your physical phone using Expo Go.",
                "Change the background color of the main screen and see it update instantly (Fast Refresh).",
                "Experiment with the `app.json` file to change the app's name and icon."
              ]
            },
            {
              "type": "quiz",
              "question": "In Introduction And Setup, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Introduction And Setup."
              ],
              "answer": 3,
              "explanation": "Introduction And Setup is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "core-components-and-styling",
          "title": "Core Components And Styling",
          "description": "Master Core Components And Styling with hands-on examples, architectural diagrams, and structured exercises.",
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
                "View`, `Text`, `Image`, `ScrollView`",
                "StyleSheet` API",
                "Inline Styles vs. Stylesheets",
                "Native Styling Limitations (No CSS inheritance!)",
                "Styling for iOS vs. Android"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Core Components"
            },
            {
              "type": "paragraph",
              "text": "In React Native, you don't use `<div>` or `<span>`. You use Native Components."
            },
            {
              "type": "table",
              "headers": [
                "Web Tag",
                "React Native Component",
                "Purpose"
              ],
              "rows": [
                [
                  "div>`",
                  "View>`",
                  "The basic building block (container).",
                  ""
                ],
                [
                  "p>`, `<h1>`",
                  "Text>`",
                  "All text MUST be inside this tag.",
                  ""
                ],
                [
                  "img>`",
                  "Image>`",
                  "Displaying local or network images.",
                  ""
                ],
                [
                  "overflow: scroll`",
                  "ScrollView>`",
                  "A container that can be scrolled.",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Styling with `StyleSheet`"
            },
            {
              "type": "paragraph",
              "text": "RN uses a subset of CSS, but it's written as JavaScript objects."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "import { StyleSheet, View, Text } from 'react-native';\n\nconst MyComponent = () => (\n  <View style={styles.container}>\n    <Text style={styles.title}>Hello Mobile!</Text>\n  </View>\n);\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    backgroundColor: '#fff',\n    padding: 20,\n  },\n  title: {\n    fontSize: 24,\n    fontWeight: 'bold',\n    color: 'blue',\n  },\n});"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Key Differences from Web"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**No Units**: Values are unitless (density-independent pixels). `width: 100` not `100px`.",
                "**No CSS Inheritance**: Styles on a `View` don't apply to the `Text` inside it. You must style each component individually.",
                "**Flexbox by Default**: All `View` components are `display: flex` and `flexDirection: column` by default.",
                "Build a \"Header\" component with a background color and centered white text.",
                "Display a network image using `<Image source={{ uri: '...' }} />` (Remember to set width and height!).",
                "Use `<ScrollView>` to create a long page of text and images.",
                "Experiment with `Platform.OS` to show a different color for iOS and Android."
              ]
            },
            {
              "type": "quiz",
              "question": "In Core Components And Styling, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Core Components And Styling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Core Components And Styling is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "layout-and-flexbox",
          "title": "Layout And Flexbox",
          "description": "Master Layout And Flexbox with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Mobile Flexbox Basics",
                "flexDirection` (Column vs Row)",
                "justifyContent` and `alignItems`",
                "SafeAreaView` (Handling Notches)",
                "Using `Dimensions` and `useWindowDimensions`"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 Flexbox in React Native"
            },
            {
              "type": "paragraph",
              "text": "Flexbox works similarly to the web, but with two major differences:"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "flexDirection` defaults to `column`.",
                "The `flex` property is a number (e.g., `flex: 1` means \"take up all available space\")."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 Handling the Notch (`SafeAreaView`)"
            },
            {
              "type": "paragraph",
              "text": "Modern phones have notches and \"home indicators.\" `SafeAreaView` ensures your content isn't hidden under them."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "import { SafeAreaView, Text } from 'react-native';\n\nconst App = () => (\n  <SafeAreaView style={{ flex: 1 }}>\n    <Text>This text is safe from the notch!</Text>\n  </SafeAreaView>\n);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 Dynamic Dimensions"
            },
            {
              "type": "paragraph",
              "text": "Since mobile screens vary greatly in size, you often need to calculate dimensions dynamically."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "import { Dimensions, useWindowDimensions } from 'react-native';\n\n// Hook (Responsive)\nconst { width, height } = useWindowDimensions();\n\n// Static (One-time)\nconst screenWidth = Dimensions.get('window').width;"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Calculator Layout\" using `flexDirection: row` and `flex: 1`.",
                "Use `justifyContent: space-around` to space out 3 icons in a footer.",
                "Observe the difference when you wrap your content in `SafeAreaView` vs a standard `View` on an iPhone/Android with a notch.",
                "Create a box that always takes up exactly 50% of the screen width using `useWindowDimensions`."
              ]
            },
            {
              "type": "quiz",
              "question": "In Layout And Flexbox, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Layout And Flexbox.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Layout And Flexbox is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "handling-input-and-events",
          "title": "Handling Input And Events",
          "description": "Master Handling Input And Events with hands-on examples, architectural diagrams, and structured exercises.",
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
                "TextInput` and `onChangeText`",
                "Button` vs. `Pressable` vs. `TouchableOpacity`",
                "Handling the Keyboard (`KeyboardAvoidingView`)",
                "Native Event Objects"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 TextInput"
            },
            {
              "type": "paragraph",
              "text": "In React Native, you use `onChangeText` (which returns the string) instead of `onChange` (which returns an event object)."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "const [text, setText] = useState('');\n\n<TextInput\n  style={styles.input}\n  value={text}\n  onChangeText={setText}\n  placeholder=\"Type here...\"\n  keyboardType=\"email-address\"\n/>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Handling Presses"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**`Button`**: Basic, native-looking button. Hard to style.",
                "**`TouchableOpacity`**: Dims the opacity when pressed. Very common.",
                "**`Pressable`**: (Modern) Highly customizable, provides `pressed` state."
              ]
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "<Pressable \n  onPress={() => console.log('Pressed!')}\n  style={({ pressed }) => ({\n    backgroundColor: pressed ? 'gray' : 'blue'\n  })}\n>\n  <Text>Submit</Text>\n</Pressable>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 `KeyboardAvoidingView`"
            },
            {
              "type": "paragraph",
              "text": "On mobile, the keyboard pops up and can cover your input fields. This component pushes the content up so it's always visible."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>\n  <TextInput />\n</KeyboardAvoidingView>"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a \"Feedback Form\" with Name, Email, and a multiline Comment box.",
                "Build a custom `IconButton` component using `TouchableOpacity` and an icon.",
                "Implement a \"Login\" screen that uses `KeyboardAvoidingView` so the \"Login\" button isn't covered by the keyboard.",
                "Experiment with different `keyboardType` values (numeric, phone-pad, etc.)."
              ]
            },
            {
              "type": "quiz",
              "question": "In Handling Input And Events, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Handling Input And Events.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Handling Input And Events is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "navigation-react-navigation",
          "title": "Navigation React Navigation",
          "description": "Master Navigation React Navigation with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Setting up React Navigation",
                "Stack Navigation (Moving between screens)",
                "Tab Navigation (Bottom tabs)",
                "Drawer Navigation (Side menu)",
                "Passing Params between screens"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 Setup"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "npm install @react-navigation/native\nnpx expo install react-native-screens react-native-safe-area-context"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Stack Navigation"
            },
            {
              "type": "paragraph",
              "text": "This is the standard \"push\" and \"pop\" navigation found in most apps."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "import { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nconst Stack = createNativeStackNavigator();\n\nfunction MyStack() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n      <Stack.Screen name=\"Details\" component={DetailsScreen} />\n    </Stack.Navigator>\n  );\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 Navigating and Passing Data"
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "// From HomeScreen\nnavigation.navigate('Details', { itemId: 86 });\n\n// In DetailsScreen\nconst { itemId } = route.params;"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.4 Tab Navigation"
            },
            {
              "type": "paragraph",
              "text": "Commonly used for the main navigation at the bottom of the app."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nconst Tab = createBottomTabNavigator();"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Set up a Stack Navigator with a \"Home\" and \"Profile\" screen.",
                "Build a \"Product List\" where clicking an item navigates to a \"Details\" screen and passes the product object.",
                "Combine Stack and Tab navigation: One of your tabs should be a Stack Navigator.",
                "Add custom icons to your Bottom Tabs using `ionicons` or `material-icons`."
              ]
            },
            {
              "type": "quiz",
              "question": "In Navigation React Navigation, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Navigation React Navigation."
              ],
              "answer": 3,
              "explanation": "Navigation React Navigation is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "lists-and-performance",
          "title": "Lists And Performance",
          "description": "Master Lists And Performance with hands-on examples, architectural diagrams, and structured exercises.",
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
                "FlatList` (The mobile-optimized loop)",
                "SectionList` (Grouped data)",
                "Performance: `initialNumToRender`, `windowSize`",
                "Pull to Refresh",
                "Infinite Scroll (End Reached)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 Why `FlatList`?"
            },
            {
              "type": "paragraph",
              "text": "In React (Web), we use `.map()`. On mobile, if you have 1000 items, `.map()` renders all of them at once, crashing the app."
            },
            {
              "type": "paragraph",
              "text": "**`FlatList`** only renders the items currently visible on the screen."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "<FlatList\n  data={DATA}\n  keyExtractor={item => item.id}\n  renderItem={({ item }) => <Item title={item.title} />}\n/>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 SectionList"
            },
            {
              "type": "paragraph",
              "text": "Used for grouped data like a \"Contacts\" list (A, B, C...)."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "<SectionList\n  sections={DATA}\n  keyExtractor={(item, index) => item + index}\n  renderItem={({item}) => <Item title={item} />}\n  renderSectionHeader={({section: {title}}) => <Header title={title} />}\n/>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Interactions"
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "<FlatList\n  ...\n  onRefresh={handleRefresh}\n  refreshing={isLoading}\n  onEndReached={loadMoreData}\n  onEndReachedThreshold={0.5}\n/>"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a list of 100 random numbers using `FlatList`.",
                "Implement \"Pull to Refresh\" to regenerate the numbers.",
                "Build a \"Category List\" using `SectionList`.",
                "Use `ItemSeparatorComponent` to add a thin line between list items."
              ]
            },
            {
              "type": "quiz",
              "question": "In Lists And Performance, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Lists And Performance.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Lists And Performance is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "device-features-and-apis",
          "title": "Device Features And APIs",
          "description": "Master Device Features And APIs with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
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
                "Permissions (Ask once, use many)",
                "Camera & Image Picker",
                "Geolocation (Current Location)",
                "Local Storage (`AsyncStorage`)",
                "App State (Background/Foreground)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Handling Permissions"
            },
            {
              "type": "paragraph",
              "text": "Mobile OSs require explicit permission for sensitive data."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "const [status, requestPermission] = Camera.useCameraPermissions();\n\nif (!status?.granted) {\n  return <Button title=\"Allow Camera\" onPress={requestPermission} />;\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 Camera & Gallery"
            },
            {
              "type": "paragraph",
              "text": "Using `expo-image-picker` is the easiest way to handle photos."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "let result = await ImagePicker.launchImageLibraryAsync({\n  allowsEditing: true,\n  quality: 1,\n});"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.3 Geolocation"
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "let location = await Location.getCurrentPositionAsync({});\nconsole.log(location.coords.latitude, location.coords.longitude);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.4 AsyncStorage"
            },
            {
              "type": "paragraph",
              "text": "Since `localStorage` doesn't exist, we use `AsyncStorage` (or `expo-secure-store` for secrets)."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "import AsyncStorage from '@react-navigation/async-storage';\n\nawait AsyncStorage.setItem('user_name', 'Aravind');\nconst name = await AsyncStorage.getItem('user_name');"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Profile Photo\" feature: let the user pick an image from their gallery and display it.",
                "Get the user's current latitude and longitude and display it on the screen.",
                "Save the user's \"Settings\" (e.g., a \"Dark Mode\" boolean) to `AsyncStorage` so it persists after restart.",
                "Experiment with `AppState` to log a message when the user leaves the app (background) and comes back (foreground)."
              ]
            },
            {
              "type": "quiz",
              "question": "In Device Features And APIs, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Device Features And APIs.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Device Features And APIs is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "context-and-global-state",
          "title": "Context And Global State",
          "description": "Master Context And Global State with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Sharing state across screens",
                "Context API in React Native",
                "State Management (Zustand / Redux basics)",
                "Persisting Global State"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Why Context?"
            },
            {
              "type": "paragraph",
              "text": "In mobile apps, you often need data (like a user's profile or a shopping cart) to be available across different tabs and stacks. Passing props through multiple navigation layers is impossible."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Using Context"
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "// AuthContext.js\nexport const AuthContext = createContext();\n\nexport const AuthProvider = ({ children }) => {\n  const [user, setUser] = useState(null);\n  return (\n    <AuthContext.Provider value={{ user, setUser }}>\n      {children}\n    </AuthContext.Provider>\n  );\n};"
            },
            {
              "type": "paragraph",
              "text": "*In App.js:* Wrap your `NavigationContainer` with the `AuthProvider`."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.3 Zustand (Modern Alternative)"
            },
            {
              "type": "paragraph",
              "text": "Zustand is very popular in the React Native community because it's extremely lightweight."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import { create } from 'zustand';\n\nexport const useStore = create((set) => ({\n  count: 0,\n  inc: () => set((state) => ({ count: state.count + 1 })),\n}));"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a `CartContext` to handle a shopping cart across a \"Product List\" screen and a \"Checkout\" screen.",
                "Build a `ThemeContext` that switches the app between Light and Dark mode globally.",
                "Integrate `AsyncStorage` with your context so the user stays logged in after closing the app.",
                "Try building a simple counter using **Zustand** instead of Context."
              ]
            },
            {
              "type": "quiz",
              "question": "In Context And Global State, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Context And Global State.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Context And Global State is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "animations-and-gestures",
          "title": "Animations And Gestures",
          "description": "Master Animations And Gestures with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
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
                "The `Animated` API",
                "Layout Animations",
                "Introduction to `Reanimated 3` (Shared Values)",
                "Gesture Handling (`react-native-gesture-handler`)",
                "Interpolation"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 Simple Animations (`Animated`)"
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "const fadeAnim = useRef(new Animated.Value(0)).current;\n\nconst fadeIn = () => {\n  Animated.timing(fadeAnim, {\n    toValue: 1,\n    duration: 1000,\n    useNativeDriver: true, // Use the UI thread (High performance!)\n  }).start();\n};"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 Reanimated 3 (Modern Standard)"
            },
            {
              "type": "paragraph",
              "text": "Reanimated provides much smoother 60fps animations by running logic on the UI thread."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';\n\nconst width = useSharedValue(100);\nconst style = useAnimatedStyle(() => ({\n  width: withSpring(width.value),\n}));"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.3 Gesture Handling"
            },
            {
              "type": "paragraph",
              "text": "Handling swipes, pinches, and long presses."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "<GestureDetector gesture={gesture}>\n  <Animated.View style={style} />\n</GestureDetector>"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Fade In\" effect for an image when the component mounts.",
                "Create a \"Pulse\" animation for a \"Record\" button.",
                "Use `Reanimated` to build a box that springs back to its original size when you release a press.",
                "Implement a \"Swipe to Delete\" gesture for a list item."
              ]
            },
            {
              "type": "quiz",
              "question": "In Animations And Gestures, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Animations And Gestures."
              ],
              "answer": 3,
              "explanation": "Animations And Gestures is built around established design principles, structured syntax, and robust real-world implementations."
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
                "App Icons & Splash Screens",
                "EAS (Expo Application Services)",
                "Building for Android (`.apk`, `.aab`)",
                "Building for iOS (`.ipa`)",
                "Over-the-Air (OTA) Updates"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Assets"
            },
            {
              "type": "paragraph",
              "text": "Before publishing, you must configure your assets in `app.json`."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "icon`: 1024x1024 px.",
                "splash`: Loading screen image."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 EAS Build"
            },
            {
              "type": "paragraph",
              "text": "EAS is the modern way to build your app in the cloud."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# 1. Install EAS CLI\nnpm install -g eas-cli\n\n# 2. Login to Expo\neas login\n\n# 3. Configure build\neas build:configure\n\n# 4. Run build for Android\neas build --platform android"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.3 OTA Updates"
            },
            {
              "type": "paragraph",
              "text": "With Expo, you can fix bugs and update your app **without** submitting a new version to the App Store."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "npx expo export\neas update --branch production"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Design a custom icon and splash screen for your app and configure them in `app.json`.",
                "Run a \"Preview\" build using EAS to get an installable file for your phone.",
                "Learn how to generate a \"Release Keystore\" for Android.",
                "Review the \"App Store Review Guidelines\" to understand why apps get rejected."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the React Native Learning Path!"
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
        }
      ]
    }
  ]
}
