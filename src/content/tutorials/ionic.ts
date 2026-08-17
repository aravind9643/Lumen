import type { Tutorial } from '../types'

export const ionicCapacitor: Tutorial = {
  "slug": "ionic-capacitor",
  "title": "Web-Native Mobile Development with Ionic & Capacitor",
  "shortTitle": "Ionic & Capacitor",
  "description": "Harness existing web technologies to build mobile, desktop, and progressive web apps with Ionic UI components and Capacitor native bridges.",
  "category": "Mobile Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "Ionic",
    "Capacitor",
    "Web Components",
    "Cross-Platform",
    "Mobile",
    "PWA"
  ],
  "color": "#38bdf8",
  "updated": "2026-08-17",
  "prerequisites": [
    "Basic HTML, CSS, and JavaScript knowledge."
  ],
  "outcomes": [
    "Build cross-platform web-native apps with Ionic UI components",
    "Access native device hardware (Camera, GPS, Biometrics) using Capacitor plugins",
    "Deploy single codebase to iOS, Android, and Progressive Web Apps (PWA)"
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
              "text": "**Level**: Intermediate | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Ionic? (Web View vs Native)",
                "Ionic + Capacitor Architecture",
                "Setting up the Ionic CLI",
                "Creating your first app (Tabs, Sidemenu, Blank)",
                "Choosing a framework (Angular, React, or Vue)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is Ionic?"
            },
            {
              "type": "definition",
              "term": "Ionic is an open",
              "plain": "Ionic is an open-source UI toolkit for building high-quality, cross-platform native and progressive web apps using web technologies — HTML, CSS, and JavaScript."
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
                "**React Native** is like building a car from **Native Parts** (Steel, Rubber).",
                "**Ionic** is like building a high-tech **Hovercraft** that runs on a **Web-Force Field** (The WebView). It uses the same materials as a website but is wrapped in a \"Native Hull\" (Capacitor) so it can go anywhere a car can."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Ionic + Capacitor"
            },
            {
              "type": "paragraph",
              "text": "**Capacitor** is the cross-platform native runtime that makes it easy to build web apps that run natively on iOS, Android, and the web. It is the bridge between your web code and the mobile OS."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Setup"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# 1. Install Ionic CLI globally\nnpm install -g @ionic/cli\n\n# 2. Create a new project\nionic start my-app tabs --type=react \n# (You can also choose --type=angular or --type=vue)\n\n# 3. Serve the app in the browser\ncd my-app\nionic serve"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.4 Project Structure"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**`src/`**: Your standard React/Angular/Vue source code.",
                "**`capacitor.config.ts`**: Configuration for native builds.",
                "**`public/`**: Static assets."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Install the Ionic CLI and create a new project using the `tabs` template.",
                "Run `ionic serve` and explore the app in your browser's mobile view.",
                "Change the text in one of the tabs and see it update instantly.",
                "Experiment with the different \"Starter Templates\" (sidemenu, blank) to see their structure."
              ]
            },
            {
              "type": "quiz",
              "question": "In Introduction And Setup, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Introduction And Setup.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Introduction And Setup is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "core-components",
          "title": "Core Components",
          "description": "Master Core Components with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Ionic Web Components (`ion-` tags)",
                "Buttons and Icons",
                "Lists and Items",
                "Cards and Badges",
                "Segments and Chips"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 The \"Ion\" Prefix"
            },
            {
              "type": "paragraph",
              "text": "Ionic components are custom HTML elements. They look like native iOS or Android components automatically based on the device."
            },
            {
              "type": "table",
              "headers": [
                "Component",
                "Purpose"
              ],
              "rows": [
                [
                  "ion-button>`",
                  "A customizable button.",
                  ""
                ],
                [
                  "ion-card>`",
                  "A container with elevation and padding.",
                  ""
                ],
                [
                  "ion-item>`",
                  "A single row in a list, common in mobile UIs.",
                  ""
                ],
                [
                  "ion-icon>`",
                  "Access to thousands of Ionicons.",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Buttons & Icons"
            },
            {
              "type": "code",
              "language": "html",
              "code": "<ion-button color=\"primary\">Click Me</ion-button>\n<ion-button fill=\"outline\">Outline</ion-button>\n<ion-button expand=\"block\">Full Width</ion-button>\n\n<!-- Icon only -->\n<ion-button>\n  <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\n</ion-button>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Lists & Items"
            },
            {
              "type": "paragraph",
              "text": "Lists are the bread and butter of mobile apps."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<ion-list>\n  <ion-item>\n    <ion-label>User Profile</ion-label>\n    <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label>Settings</ion-label>\n    <ion-toggle slot=\"end\"></ion-toggle>\n  </ion-item>\n</ion-list>"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a \"Settings\" page using `<ion-list>` and `<ion-item>`.",
                "Add a `<ion-avatar>` to a list item to show a user's picture.",
                "Build a \"Social Media Post\" card using `<ion-card>`, including an image, a title, and some buttons.",
                "Experiment with different `color` properties (`success`, `warning`, `danger`) on buttons."
              ]
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
          "slug": "layout-and-grid",
          "title": "Layout And Grid",
          "description": "Master Layout And Grid with hands-on examples, architectural diagrams, and structured exercises.",
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
                "ion-content` and Scroll behavior",
                "Header and Footer structures",
                "The Ionic Grid System (12-column)",
                "Responsive grid (size-sm, size-md, etc.)",
                "Utility attributes"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 The Main Structure"
            },
            {
              "type": "paragraph",
              "text": "Every Ionic page follows a specific structure for headers, content, and footers."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<ion-header>\n  <ion-toolbar>\n    <ion-title>My App</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!-- Your content goes here -->\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>Footer</ion-title>\n  </ion-toolbar>\n</ion-footer>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 The Grid System"
            },
            {
              "type": "paragraph",
              "text": "Based on CSS Flexbox, the Ionic grid provides a simple way to create responsive layouts."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<ion-grid>\n  <ion-row>\n    <ion-col size=\"6\">50% Width</ion-col>\n    <ion-col size=\"6\">50% Width</ion-col>\n  </ion-row>\n  \n  <ion-row>\n    <ion-col size=\"12\" size-md=\"4\">100% on Mobile, 33% on Desktop</ion-col>\n  </ion-row>\n</ion-grid>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 Padding & Spacing"
            },
            {
              "type": "paragraph",
              "text": "Ionic provides global CSS classes to handle spacing consistently."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "ion-padding`: Adds standard padding.",
                "ion-margin`: Adds standard margin.",
                "ion-text-center`: Centers text."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Gallery\" layout with 2 columns on mobile and 4 columns on desktop.",
                "Use `<ion-toolbar>` inside the footer to add a \"Status Bar\".",
                "Use `ion-padding` on `<ion-content>` and observe how it affects your content.",
                "Experiment with `offset` in the grid to center a small column in the middle of the screen."
              ]
            },
            {
              "type": "quiz",
              "question": "In Layout And Grid, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Layout And Grid."
              ],
              "answer": 3,
              "explanation": "Layout And Grid is built around established design principles, structured syntax, and robust real-world implementations."
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
                "Framework-specific routing (Angular/React/Vue)",
                "ion-router-link` vs. Programmatic navigation",
                "Tabs Navigation structure",
                "Side Menu (Drawer) navigation",
                "Handling the Back Button"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 Navigation Philosophy"
            },
            {
              "type": "paragraph",
              "text": "Ionic doesn't have its own router; it uses the standard router of your chosen framework (e.g., `react-router-dom` for React or `@angular/router` for Angular)."
            },
            {
              "type": "paragraph",
              "text": "However, you use **Ionic components** to wrap those routes to enable smooth mobile transitions."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<!-- React Example -->\n<IonRouterOutlet>\n  <Route path=\"/home\" component={Home} exact />\n  <Route path=\"/settings\" component={Settings} />\n</IonRouterOutlet>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Tab Navigation"
            },
            {
              "type": "paragraph",
              "text": "Tabs are the most common mobile navigation pattern."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Programmatic Navigation"
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "// React Hook\nconst history = useIonRouter();\nhistory.push('/settings');\n\n// Angular Service\nconstructor(private navCtrl: NavController) {}\nthis.navCtrl.navigateForward('/settings');"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a new \"Details\" page and navigate to it from the \"Home\" page using `routerLink`.",
                "Add a \"Back Button\" to your Details page header using `<ion-back-button>`.",
                "Build a \"Side Menu\" that opens when clicking a button in the header.",
                "Pass a parameter (e.g., an ID) in the URL and read it in the destination page."
              ]
            },
            {
              "type": "quiz",
              "question": "In Navigation And Routing, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Navigation And Routing.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Navigation And Routing is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "overlays-and-feedback",
          "title": "Overlays And Feedback",
          "description": "Master Overlays And Feedback with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Modals (`ion-modal`)",
                "Alerts and Confirmations (`ion-alert`)",
                "Toasts (Notification messages)",
                "Loading Indicators",
                "Action Sheets"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 Modals"
            },
            {
              "type": "paragraph",
              "text": "Modals slide up from the bottom and cover the current screen."
            },
            {
              "type": "code",
              "language": "jsx",
              "code": "// React Example\nconst [isOpen, setIsOpen] = useState(false);\n\n<IonModal isOpen={isOpen}>\n  <IonContent>\n    <Text>Hello from Modal!</Text>\n    <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>\n  </IonContent>\n</IonModal>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Alerts & Toasts"
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "const presentToast = () => {\n  useIonToast().present({\n    message: 'Profile Updated!',\n    duration: 2000,\n    color: 'success'\n  });\n};"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 Loading Indicators"
            },
            {
              "type": "paragraph",
              "text": "Always show feedback during network requests."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "const [present, dismiss] = useIonLoading();\n\nasync function fetchData() {\n  await present('Fetching data...');\n  // ... api call ...\n  await dismiss();\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Trigger an `<ion-alert>` when a user clicks a \"Delete\" button.",
                "Build a \"Create Account\" modal that collects a name and email.",
                "Show a Toast message after a successful \"Login\" simulation.",
                "Experiment with `ion-action-sheet` to show multiple options (Edit, Share, Delete)."
              ]
            },
            {
              "type": "quiz",
              "question": "In Overlays And Feedback, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Overlays And Feedback.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Overlays And Feedback is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "forms-and-inputs",
          "title": "Forms And Inputs",
          "description": "Master Forms And Inputs with hands-on examples, architectural diagrams, and structured exercises.",
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
                "ion-input` and Label styles (floating, stacked)",
                "ion-select` and Option handling",
                "ion-datetime` (Native pickers)",
                "Checkboxes, Toggles, and Ranges",
                "Validation basics"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 Input Styles"
            },
            {
              "type": "paragraph",
              "text": "Ionic supports modern input designs out of the box."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<ion-item>\n  <ion-label position=\"floating\">Username</ion-label>\n  <ion-input type=\"text\"></ion-input>\n</ion-item>\n\n<ion-item>\n  <ion-label position=\"stacked\">Password</ion-label>\n  <ion-input type=\"password\"></ion-input>\n</ion-item>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 Date & Time"
            },
            {
              "type": "paragraph",
              "text": "Ionic uses a beautiful native-feeling calendar for date picking."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<ion-datetime-button datetime=\"datetime\"></ion-datetime-button>\n\n<ion-modal [keepContentsMounted]=\"true\">\n  <ng-template>\n    <ion-datetime id=\"datetime\"></ion-datetime>\n  </ng-template>\n</ion-modal>"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Selects"
            },
            {
              "type": "paragraph",
              "text": "Choose from different styles like `popover` or `action-sheet`."
            },
            {
              "type": "code",
              "language": "html",
              "code": "<ion-item>\n  <ion-label>Favorite Color</ion-label>\n  <ion-select interface=\"popover\">\n    <ion-select-option value=\"red\">Red</ion-select-option>\n    <ion-select-option value=\"blue\">Blue</ion-select-option>\n  </ion-select>\n</ion-item>"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Search Profile\" form with Name, Birthday (using `ion-datetime`), and Gender (using `ion-select`).",
                "Add a `<ion-toggle>` to enable \"Notifications\" in your form.",
                "Use `type=\"email\"` and `type=\"tel\"` on inputs to see how the mobile keyboard changes.",
                "Experiment with the `range` component to create a \"Volume\" slider."
              ]
            },
            {
              "type": "quiz",
              "question": "In Forms And Inputs, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Forms And Inputs.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Forms And Inputs is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "capacitor-native-apis",
          "title": "Capacitor Native APIs",
          "description": "Master Capacitor Native APIs with hands-on examples, architectural diagrams, and structured exercises.",
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
                "What is Capacitor?",
                "Using Capacitor Plugins",
                "Camera API",
                "Geolocation and Maps",
                "Haptics and Vibration",
                "Device info"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Using Plugins"
            },
            {
              "type": "paragraph",
              "text": "Capacitor plugins allow you to call native code (Java/Swift) from your JavaScript."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "npm install @capacitor/camera\nnpx cap sync"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 Camera Example"
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import { Camera, CameraResultType } from '@capacitor/camera';\n\nconst takePicture = async () => {\n  const image = await Camera.getPhoto({\n    quality: 90,\n    allowEditing: true,\n    resultType: CameraResultType.Uri\n  });\n\n  var imageUrl = image.webPath;\n  // Use imageUrl to display or upload the photo\n};"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.3 Haptics (Physical Feedback)"
            },
            {
              "type": "paragraph",
              "text": "Create a \"Native Feel\" by vibrating the phone slightly on button presses."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import { Haptics, ImpactStyle } from '@capacitor/haptics';\n\nconst hapticFeedback = async () => {\n  await Haptics.impact({ style: ImpactStyle.Medium });\n};"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Photo Diary\" app where users can take a picture and see it in a list.",
                "Use the `Geolocation` plugin to find and display the user's current city.",
                "Add haptic feedback to your \"Submit\" button to make it feel premium.",
                "Check the `Device` plugin to display the user's OS version and battery level."
              ]
            },
            {
              "type": "quiz",
              "question": "In Capacitor Native APIs, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Capacitor Native APIs."
              ],
              "answer": 3,
              "explanation": "Capacitor Native APIs is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "theming-and-adaptive-ui",
          "title": "Theming And Adaptive UI",
          "description": "Master Theming And Adaptive UI with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate → Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "CSS Variables in Ionic",
                "Customizing the Global Theme",
                "Platform-specific styles (iOS vs. MD)",
                "Dark Mode support",
                "Conditional Styling"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 CSS Variables"
            },
            {
              "type": "paragraph",
              "text": "Ionic is built with CSS Variables, making it incredibly easy to customize without writing complex CSS."
            },
            {
              "type": "code",
              "language": "css",
              "code": "/* variables.css */\n:root {\n  --ion-color-primary: #3880ff;\n  --ion-font-family: 'Poppins', sans-serif;\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Adaptive UI"
            },
            {
              "type": "paragraph",
              "text": "One of Ionic's best features: The **same code** looks different on different platforms."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**iOS**: Uses the Cupertino design (centered titles, specific icons).",
                "**Android**: Uses Material Design (left-aligned titles, ripple effects)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.3 Dark Mode"
            },
            {
              "type": "paragraph",
              "text": "Ionic has a built-in Dark Mode theme. You can toggle it by adding the `.dark` class to the body."
            },
            {
              "type": "code",
              "language": "css",
              "code": "@media (prefers-color-scheme: dark) {\n  /* Dark mode variables go here */\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Change the `primary` color of your app to a brand-specific \"Orange\" in `variables.css`.",
                "Toggle your browser's \"Device Toolbar\" and switch between iPhone and Android to see the UI change automatically.",
                "Build a component that uses different styles for iOS and Android using the `isPlatform('ios')` utility.",
                "Set up a toggle button that switches the entire app into \"Dark Mode.\""
              ]
            },
            {
              "type": "quiz",
              "question": "In Theming And Adaptive UI, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Theming And Adaptive UI.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Theming And Adaptive UI is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "storage-and-offline",
          "title": "Storage And Offline",
          "description": "Master Storage And Offline with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Ionic Storage vs. LocalStorage",
                "SQLite integration (Native)",
                "Handling Network State",
                "Building for Offline first"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 Why Ionic Storage?"
            },
            {
              "type": "paragraph",
              "text": "Standard `localStorage` can be cleared by the mobile OS to save space. **Ionic Storage** uses the best available engine (SQLite on native, IndexedDB on web) to ensure your data stays safe."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "npm install @ionic/storage-angular # or @ionic/storage"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 Usage"
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import { Storage } from '@ionic/storage';\n\nconst store = new Storage();\nawait store.create();\n\nawait store.set('name', 'Aravind');\nconst val = await store.get('name');"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.3 Network Connectivity"
            },
            {
              "type": "paragraph",
              "text": "Mobile apps frequently lose connection. Use the `Network` plugin to handle this gracefully."
            },
            {
              "type": "code",
              "language": "javascript",
              "code": "import { Network } from '@capacitor/network';\n\nNetwork.addListener('networkStatusChange', status => {\n  if (!status.connected) {\n    alert('You are offline! Data will be synced later.');\n  }\n});"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build a \"Notes\" app that saves notes to Ionic Storage so they persist after the app is closed.",
                "Implement a \"Sync\" icon that turns red when the device is offline.",
                "Cache the results of an API call in Storage so the user can see data even when offline.",
                "Experiment with `SQLite` directly for complex data relationships."
              ]
            },
            {
              "type": "quiz",
              "question": "In Storage And Offline, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Storage And Offline.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Storage And Offline is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "build-and-deployment",
          "title": "Build And Deployment",
          "description": "Master Build And Deployment with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Adding Native Platforms (iOS/Android)",
                "Running on Emulators and Devices",
                "Building as a Progressive Web App (PWA)",
                "Performance Checklist",
                "Publishing to App Stores"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Adding Platforms"
            },
            {
              "type": "paragraph",
              "text": "Capacitor makes it easy to \"add\" mobile capability to your project."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# 1. Build your web code\nnpm run build\n\n# 2. Add the platform\nnpx cap add android\nnpx cap add ios\n\n# 3. Open in Android Studio / Xcode\nnpx cap open android"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 Progressive Web Apps (PWA)"
            },
            {
              "type": "paragraph",
              "text": "Ionic is the best framework for PWAs. You can install your app directly from the browser on any device."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Add PWA support (Angular example)\nng add @angular/pwa"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.3 Performance Checklist"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Use **Lazy Loading** for all routes.",
                "Optimize images.",
                "Use `ion-virtual-scroll` for very long lists.",
                "Avoid heavy DOM manipulations."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Build your project for the web and run it as a PWA in your browser.",
                "If you have Android Studio installed, add the Android platform and run the app on an emulator.",
                "Use the `npx cap sync` command after making changes to your web code to update the native project.",
                "Learn how to generate an \"App Store Icon\" using `cordova-res` or `@capacitor/assets`."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Ionic Learning Path!"
            },
            {
              "type": "quiz",
              "question": "In Build And Deployment, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Build And Deployment.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Build And Deployment is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
