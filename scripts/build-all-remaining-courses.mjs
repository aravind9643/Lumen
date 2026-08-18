import { writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const tutorialsDir = join(root, 'src/content/tutorials')

let quizAnswerCounter = 0
function getBalancedAnswer() {
  const ans = quizAnswerCounter % 4
  quizAnswerCounter++
  return ans
}

function makeQuiz(qText, optCorrect, optWrong1, optWrong2, optWrong3, explanation) {
  const ans = getBalancedAnswer()
  const options = []
  const wrongs = [optWrong1, optWrong2, optWrong3]
  let wrongIdx = 0
  for (let i = 0; i < 4; i++) {
    if (i === ans) {
      options.push(optCorrect)
    } else {
      options.push(wrongs[wrongIdx++])
    }
  }
  return {
    type: 'quiz',
    question: qText,
    options,
    answer: ans,
    explanation,
  }
}

// -------------------------------------------------------------
// Course 5: React (8 Lessons)
// -------------------------------------------------------------
const reactCourse = {
  slug: 'react',
  varName: 'reactCourse',
  title: 'React Architecture: Components, Hooks & State',
  shortTitle: 'React',
  description: 'A complete, beginner-to-mastery path covering component thinking, JSX syntax rules, props, state with useState, event handling, conditional rendering, useEffect, and custom hooks.',
  category: 'Web Development',
  difficulty: 'beginner',
  icon: 'code',
  color: '#61dafb',
  tags: ['React', 'Hooks', 'Virtual DOM', 'State', 'Context', 'SPA', 'Performance'],
  chapters: [
    {
      title: 'Chapter 1: Component Fundamentals & State (Beginner)',
      lessons: [
        {
          slug: 'what-is-react-and-component-thinking',
          title: 'What is React & Component-Based Architecture?',
          description: 'Learn why React was created by Facebook/Meta, the problems with manual DOM manipulation, and how reusable UI components work.',
          duration: 20,
          blocks: [
            { type: 'callout', kind: 'info', text: 'Level: Beginner | Prerequisites: JavaScript Basics' },
            { type: 'paragraph', text: 'In traditional vanilla JavaScript, when data changes, you must manually find DOM elements and update their text. In large applications with dozens of screens, this creates messy, bug-prone "spaghetti code". React is a declarative UI library where you describe what the UI should look like for a given state, and React automatically updates the DOM efficiently.' },
            { type: 'definition', term: 'React Component', plain: 'A self-contained, reusable JavaScript function that returns JSX (describing a piece of the user interface).', formal: 'Declarative Component-Based User Interface Library' },
            { type: 'analogy', title: 'The LEGO Brick Metaphor', text: 'Building a React application is like building a castle with LEGO bricks. Instead of molding one giant slab of plastic, you snap together small, reusable bricks (Button, Navbar, Card, Avatar) to assemble complex screens.' },
            { type: 'code', language: 'tsx', code: `// A minimal React Component is just a JavaScript function that returns UI\nexport function WelcomeBanner() {\n  return (\n    <div className="banner">\n      <h1>Welcome to React Mastery</h1>\n      <p>Build reusable, composable user interfaces effortlessly.</p>\n    </div>\n  );\n}`, filename: 'WelcomeBanner.tsx' },
            { type: 'keyPoints', points: ['React components are pure JavaScript functions returning JSX.', 'React follows a declarative paradigm (you describe the desired state; React handles DOM updates).', 'Always name React component functions with PascalCase (e.g. WelcomeBanner).'] },
            makeQuiz('What is the primary architectural concept behind React?', 'Decomposing complex user interfaces into small, reusable, declarative component functions.', 'Replacing HTML files with SQLite database tables.', 'Running Python scripts directly inside the browser.', 'Compiling JavaScript into C++ desktop software.', 'React structures applications as trees of modular, reusable component functions.')
          ]
        },
        {
          slug: 'jsx-syntax-and-rules',
          title: 'JSX Syntax Rules: Writing HTML in JavaScript',
          description: 'Master JSX syntax: embedding JavaScript expressions with curly braces {}, className instead of class, self-closing tags, and React Fragments.',
          duration: 20,
          blocks: [
            { type: 'paragraph', text: 'JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside your JavaScript files.' },
            { type: 'definition', term: 'JSX (JavaScript XML)', plain: 'A syntax extension that lets you write HTML markup inside JavaScript, which Vite or Babel compiles down to React.createElement() calls.', formal: 'ECMAScript Syntax Extension for XML-like Trees' },
            { type: 'code', language: 'tsx', code: `export function UserBadge() {\n  const username = "Aravind";\n  const unreadMessages = 3;\n\n  return (\n    // React Fragment <> </> groups elements without adding extra <div> nodes to the DOM\n    <>\n      {/* Embedding JS expressions inside curly braces {} */}\n      <h2 className="user-title">Hello, {username}!</h2>\n      <p className={unreadMessages > 0 ? "badge-unread" : "badge-read"}>\n        You have {unreadMessages} unread messages.\n      </p>\n    </>\n  );\n}`, filename: 'UserBadge.tsx' },
            { type: 'keyPoints', points: ['Use className instead of class in JSX because class is a reserved JS keyword.', 'Embed any dynamic JavaScript expression inside single curly braces {expression}.', 'Use React Fragments (<> ... </>) to return multiple elements without adding unnecessary wrapper divs.'] },
            makeQuiz('Why do we use className instead of class when assigning CSS classes in React JSX?', 'Because class is a reserved keyword in JavaScript for defining ES6 classes.', 'Because className makes CSS render 50% faster.', 'Because class only works on mobile devices.', 'Because className is required by the SQL standard.', 'In JSX, attribute names use JavaScript property names, so className is used to avoid collision with the JS class keyword.')
          ]
        },
        {
          slug: 'components-and-props',
          title: 'Components & Props: Passing Data to Children',
          description: 'Learn how to make components dynamic by passing inputs via Props, destructuring props, default props, and the children prop.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Props (short for properties) are the inputs passed into React components. Just like you pass arguments into a function to customize its output, you pass props into a component to customize its visual rendering.' },
            { type: 'definition', term: 'Props (Properties)', plain: 'Read-only input data passed from a parent component down to a child component.', formal: 'Component Input Properties Contract' },
            { type: 'analogy', title: 'Function Arguments Analogy', text: 'If a component is a function (UI = f(props)), then props are the input parameters passed into that function. The same <Button /> component can render with label="Sign In" or label="Delete Account" based on props.' },
            { type: 'code', language: 'tsx', code: `interface ButtonProps {\n  label: string;\n  variant?: 'primary' | 'secondary';\n  disabled?: boolean;\n}\n\n// Child component accepting destructured props with default values\nexport function ActionButton({ label, variant = 'primary', disabled = false }: ButtonProps) {\n  return (\n    <button className={\`btn btn-\${variant}\`} disabled={disabled}>\n      {label}\n    </button>\n  );\n}\n\n// Parent component reusing ActionButton with different props\nexport function AuthToolbar() {\n  return (\n    <div>\n      <ActionButton label="Log In" variant="primary" />\n      <ActionButton label="Cancel" variant="secondary" />\n    </div>\n  );\n}`, filename: 'ActionButton.tsx' },
            { type: 'keyPoints', points: ['Props flow one-way from parent to child (Unidirectional Data Flow).', 'Props are strictly read-only and immutable — a component must never modify its own props.', 'Props destructuring ({ label, variant }) keeps component code clean.'] },
            makeQuiz('Can a child React component directly modify or mutate the props it receives from its parent?', 'No, props are strictly read-only and immutable.', 'Yes, by using the let keyword.', 'Yes, but only in development mode.', 'Yes, if the props are strings.', 'Props are immutable inputs; to modify values over time, a component must use state.')
          ]
        },
        {
          slug: 'state-with-usestate',
          title: 'State with useState: Component Memory & Reactivity',
          description: 'Understand why regular variables do not trigger UI re-renders, master the useState hook, state immutability, and functional updates.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'Regular JavaScript variables (like let count = 0) do not notify React when their value changes. React provides the `useState` hook to give components persistent memory and automatically re-render the UI when state updates.' },
            { type: 'definition', term: 'React State & useState Hook', plain: 'State is component memory that holds data that changes over time. useState is a React hook that returns an array with [currentValue, updateFunction].', formal: 'React State Hook' },
            { type: 'code', language: 'tsx', code: `import { useState } from 'react';\n\nexport function Counter() {\n  // 1. Declare state variable 'count' initialized to 0\n  const [count, setCount] = useState(0);\n\n  const handleIncrement = () => {\n    // 2. Functional state update: safe against race conditions\n    setCount((prevCount) => prevCount + 1);\n  };\n\n  return (\n    <div className="counter-card">\n      <h3>Current Count: {count}</h3>\n      <button onClick={handleIncrement}>Increment +1</button>\n      <button onClick={() => setCount(0)}>Reset</button>\n    </div>\n  );\n}`, filename: 'Counter.tsx' },
            { type: 'keyPoints', points: ['Never mutate state directly (e.g. count = count + 1); always call setCount(newValue).', 'State updates trigger a component re-render with the new value.', 'Use functional updates (setCount(prev => prev + 1)) when new state depends on previous state.'] },
            makeQuiz('Why does updating a regular variable (let x = 10) fail to update the UI on the screen in React?', 'Because changing a plain variable does not notify React to schedule a component re-render.', 'Because plain variables are deleted on every frame.', 'Because variables cannot hold numbers.', 'Because React only reads values from HTML files.', 'React only tracks state changes made via setter functions returned from useState or other state management hooks.')
          ]
        }
      ]
    },
    {
      title: 'Chapter 2: Events, Effects & Advanced Patterns (Mastery)',
      lessons: [
        {
          slug: 'event-handling-and-controlled-forms',
          title: 'Event Handling & Controlled Form Inputs',
          description: 'Handle user interactions with onClick, onChange, onSubmit, preventDefault(), and manage controlled form inputs.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'In React, user interactions (clicks, keyboard input, form submissions) are handled via synthetic event handlers like `onClick` and `onChange`. Controlled inputs bind their value directly to React state.' },
            { type: 'code', language: 'tsx', code: `import { useState, FormEvent } from 'react';\n\nexport function SearchForm() {\n  const [query, setQuery] = useState('');\n\n  const handleSubmit = (e: FormEvent) => {\n    e.preventDefault(); // Prevent default full-page browser refresh\n    console.log("Searching for:", query);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type="text"\n        value={query}                                // Controlled value from state\n        onChange={(e) => setQuery(e.target.value)}  // Update state on keystroke\n        placeholder="Search courses..."\n      />\n      <button type="submit">Search</button>\n    </form>\n  );\n}`, filename: 'SearchForm.tsx' },
            { type: 'keyPoints', points: ['Event handler names are camelCase (onClick, onChange, onSubmit).', 'Always call e.preventDefault() in form submissions to stop full page reloads.', 'In controlled components, state is the single source of truth for input values.'] },
            makeQuiz('What is a "Controlled Component" in React form handling?', 'An input whose displayed value is driven directly by React state, updated on every keystroke via onChange.', 'A component that cannot be clicked by the user.', 'A component that runs on the server.', 'A component with a fixed pixel width.', 'In a controlled component, form element data is handled by a React component state rather than the DOM.')
          ]
        },
        {
          slug: 'conditional-rendering-and-rendering-lists',
          title: 'Conditional Rendering & Rendering Lists with Keys',
          description: 'Display UI conditionally using && and ternary operators, and transform arrays into elements with .map() and unique key props.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'React allows rendering different UI elements based on state conditions, and transforming JavaScript arrays into lists of JSX components using `.map()`.' },
            { type: 'code', language: 'tsx', code: `interface CourseItem {\n  id: string;\n  title: string;\n  isCompleted: boolean;\n}\n\nexport function CourseList({ courses }: { courses: CourseItem[] }) {\n  return (\n    <div className="course-list">\n      <h2>Available Courses ({courses.length})</h2>\n      \n      {/* Conditional Rendering: Show message if list is empty */}\n      {courses.length === 0 && <p>No courses available right now.</p>}\n\n      <ul>\n        {/* Transforming array into list of JSX elements with unique keys */}\n        {courses.map((course) => (\n          <li key={course.id} className={course.isCompleted ? "completed" : "pending"}>\n            <span>{course.title}</span>\n            {course.isCompleted ? <span>✅ Completed</span> : <span>⏳ In Progress</span>}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}`, filename: 'CourseList.tsx' },
            { type: 'keyPoints', points: ['Use the logical AND (condition && <UI />) for rendering when true.', 'Use ternaries (condition ? <A /> : <B />) for if/else rendering.', 'Every item in a .map() list MUST have a unique, stable key prop (like an item id).'] },
            makeQuiz('Why is the key prop strictly required when rendering lists with .map() in React?', 'Keys provide stable identities so React can efficiently identify which items changed, were added, or were removed during DOM reconciliation.', 'Keys are used to apply CSS styling.', 'Keys encrypt the array items in memory.', 'Keys translate the list items into numbers.', 'Keys give elements a stable identity across renders, allowing the reconciliation algorithm to avoid re-rendering entire lists.')
          ]
        },
        {
          slug: 'useeffect-and-side-effects',
          title: 'Side Effects & Data Fetching with useEffect',
          description: 'Synchronize components with external systems, fetch REST API data on mount, manage the dependency array, and write cleanup functions.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'A Side Effect is any operation that affects something outside the component (e.g. fetching API data, setting up timers, modifying document title, or adding window event listeners). The `useEffect` hook runs after the browser paints the screen.' },
            { type: 'definition', term: 'useEffect Hook & Dependency Array', plain: 'A hook that runs side-effect logic after render. The dependency array [dep1, dep2] controls when the effect re-runs: [] runs once on mount, omitting it runs after every render.', formal: 'React Lifecycle Synchronization Hook' },
            { type: 'code', language: 'tsx', code: `import { useState, useEffect } from 'react';\n\nexport function UserProfileViewer({ userId }: { userId: string }) {\n  const [user, setUser] = useState<{ name: string } | null>(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    let isMounted = true;\n    setLoading(true);\n\n    fetch(\`https://api.example.com/users/\${userId}\`)\n      .then((res) => res.json())\n      .then((data) => {\n        if (isMounted) {\n          setUser(data);\n          setLoading(false);\n        }\n      });\n\n    // Cleanup function: runs before next effect or when component unmounts\n    return () => {\n      isMounted = false;\n    };\n  }, [userId]); // Re-run effect whenever userId prop changes\n\n  if (loading) return <p>Loading user profile...</p>;\n  return <h3>User: {user?.name}</h3>;\n}`, filename: 'UserProfileViewer.tsx' },
            { type: 'keyPoints', points: ['An empty dependency array [] runs the effect once when the component mounts.', 'Including variables in dependencies [id] re-runs the effect whenever those variables change.', 'Always return a cleanup function to cancel pending network requests or listeners.'] },
            makeQuiz('What happens when you pass an empty array [] as the second argument to useEffect?', 'The effect function executes exactly once after the initial component mount, and its cleanup runs on unmount.', 'The effect function runs continuously in an infinite loop.', 'The effect function is permanently disabled and never runs.', 'The component crashes immediately.', 'An empty dependency array tells React that the effect does not depend on any props or state, so it only executes once on mount.')
          ]
        },
        {
          slug: 'custom-hooks-and-context-api',
          title: 'Custom Hooks & Global State with Context API',
          description: 'Extract reusable stateful logic into Custom Hooks (useDebounce, useLocalStorage) and share state globally with the React Context API.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'Custom Hooks allow you to package stateful logic into reusable functions. The Context API eliminates "prop drilling" by making state available anywhere in the component subtree without manually passing props through intermediate children.' },
            { type: 'code', language: 'tsx', code: `import { createContext, useContext, useState, ReactNode } from 'react';\n\n// 1. Create Context\ninterface ThemeContextType {\n  theme: 'light' | 'dark';\n  toggleTheme: () => void;\n}\nconst ThemeContext = createContext<ThemeContextType | null>(null);\n\n// 2. Context Provider Component\nexport function ThemeProvider({ children }: { children: ReactNode }) {\n  const [theme, setTheme] = useState<'light' | 'dark'>('dark');\n  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));\n  return (\n    <ThemeContext.Provider value={{ theme, toggleTheme }}>\n      <div className={\`app-theme-\${theme}\`}>{children}</div>\n    </ThemeContext.Provider>\n  );\n}\n\n// 3. Custom Hook for consuming context cleanly\nexport function useTheme() {\n  const context = useContext(ThemeContext);\n  if (!context) throw new Error('useTheme must be used within ThemeProvider');\n  return context;\n}`, filename: 'ThemeContext.tsx' },
            { type: 'keyPoints', points: ['Custom hook names must start with "use" (e.g. useTheme, useAuth).', 'Context is ideal for global app state like themes, user authentication, and shopping carts.', 'Custom hooks share stateful logic, but each calling component maintains its own state.'] },
            makeQuiz('What problem does the React Context API solve in large component trees?', 'It avoids prop drilling by making state accessible to deeply nested components without passing props manually through every level.', 'It increases the internet bandwidth speed.', 'It converts TypeScript code into CSS stylesheets.', 'It prevents the browser from using RAM.', 'Context provides a mechanism to broadcast data to child components across the tree without tedious prop drilling.')
          ]
        }
      ]
    }
  ]
}

console.log('Writing remaining web courses...')
const coursesToGenerate = [reactCourse]

coursesToGenerate.forEach((c) => {
  const filePath = join(tutorialsDir, `${c.slug}.ts`)
  const enrichedChapters = c.chapters.map((ch) => ({
    ...ch,
    lessons: ch.lessons.map((l) => ({
      ...l,
      description: l.description || `Master ${l.title} with practical examples, architectural deep dives, and key concepts.`
    }))
  }))

  const fullTutorial = {
    slug: c.slug,
    title: c.title,
    shortTitle: c.shortTitle,
    description: c.description,
    category: c.category,
    difficulty: c.difficulty,
    icon: c.icon,
    tags: c.tags,
    color: c.color,
    updated: '2026-08-18',
    prerequisites: ['Zero prior experience required — built from first principles.'],
    outcomes: [
      `Master modern ${c.shortTitle} syntax, core mental models, and architectural patterns`,
      `Build clean, performant, and production-grade ${c.shortTitle} applications`,
      'Understand trade-offs, testing strategies, and industry best practices'
    ],
    chapters: enrichedChapters
  }

  const code = `import type { Tutorial } from '../types'\n\nexport const ${c.varName}: Tutorial = ${JSON.stringify(fullTutorial, null, 2)}\n`
  writeFileSync(filePath, code, 'utf-8')
  const lessonCount = enrichedChapters.reduce((a, ch) => a + ch.lessons.length, 0)
  console.log(`✓ Updated ${c.slug}.ts (${lessonCount} lessons across ${c.chapters.length} chapters)`)
})
