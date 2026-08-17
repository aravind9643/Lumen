import type { Tutorial } from '../types'

export const reactCourse: Tutorial = {
  "slug": "react",
  "title": "React Architecture: Components, Hooks & State",
  "shortTitle": "React",
  "description": "Master modern React architecture: JSX, custom hooks, reconciliation, concurrent rendering, Context API, state management, and performance optimization.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "React",
    "Hooks",
    "Virtual DOM",
    "State",
    "Context",
    "SPA",
    "Performance"
  ],
  "color": "#61dafb",
  "updated": "2026-08-17",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern React syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade React applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Phase 1: Component Fundamentals & State Reactivity",
      "lessons": [
        {
          "slug": "components-props-and-state",
          "title": "Component Architecture, Props & useState",
          "description": "Master Component Architecture, Props & useState with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "React components are pure functions that take props and state to render virtual DOM descriptions of UI."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "import { useState } from 'react';\n\ninterface ButtonProps {\n  label: string;\n  onPress: (count: number) => void;\n}\n\nexport function CounterButton({ label, onPress }: ButtonProps) {\n  const [count, setCount] = useState(0);\n\n  const handleClick = () => {\n    const next = count + 1;\n    setCount(next);\n    onPress(next);\n  };\n\n  return <button onClick={handleClick}>{label}: {count}</button>;\n}",
              "filename": "Counter.tsx"
            },
            {
              "type": "keyPoints",
              "points": [
                "Components re-render whenever their state or props change.",
                "State updates should treat values as immutable.",
                "Keys in lists must be stable, unique identifiers to maintain component identity."
              ]
            },
            {
              "type": "quiz",
              "question": "Why must state updates in React treat existing state objects as immutable?",
              "options": [
                "Because React uses shallow reference equality checks (Object.is) to detect state changes and schedule re-renders.",
                "Because JavaScript arrays and objects cannot be modified after instantiation.",
                "Because mutation triggers immediate synchronous browser reloads.",
                "Because the V8 engine deletes mutated objects from RAM."
              ],
              "answer": 0,
              "explanation": "Immutability ensures shallow comparison accurately detects changes."
            }
          ]
        },
        {
          "slug": "useeffect-and-lifecycle-synchronization",
          "title": "useEffect, Lifecycles & Synchronization",
          "description": "Master useEffect, Lifecycles & Synchronization with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "useEffect synchronizes your component with external systems (timers, subscriptions, DOM mutations, and network fetching)."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "import { useEffect, useState } from 'react';\n\nexport function WindowTracker() {\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n    const onResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', onResize);\n    return () => window.removeEventListener('resize', onResize);\n  }, []);\n\n  return <div>Viewport Width: {width}px</div>;\n}",
              "filename": "WindowTracker.tsx"
            },
            {
              "type": "keyPoints",
              "points": [
                "The dependency array tells React when to re-execute the effect.",
                "Always return a cleanup function to prevent memory leaks and dangling listeners.",
                "Do not use useEffect for deriving state that can be computed during render."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the role of the cleanup function returned inside a useEffect callback?",
              "options": [
                "It deletes the component virtual DOM nodes from memory.",
                "It tears down subscriptions, timers, or listeners before the effect re-runs or when the component unmounts.",
                "It converts async Promises into synchronous generator calls.",
                "It forces the parent component to reset its props."
              ],
              "answer": 1,
              "explanation": "Cleanup functions clean up resources when dependencies change or components unmount."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Advanced Hooks, Context & Performance",
      "lessons": [
        {
          "slug": "custom-hooks-usememo-usecallback",
          "title": "Custom Hooks, useMemo & useCallback",
          "description": "Master Custom Hooks, useMemo & useCallback with practical examples, architectural deep dives, and key concepts.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Custom hooks extract stateful logic into reusable functions, while useMemo and useCallback stabilize references across render cycles."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "import { useMemo, useCallback } from 'react';\n\nexport function ProductList({ items, filterText, onSelect }: Props) {\n  const filtered = useMemo(() => {\n    return items.filter(i => i.name.toLowerCase().includes(filterText.toLowerCase()));\n  }, [items, filterText]);\n\n  const handleSelect = useCallback((id: string) => {\n    onSelect(id);\n  }, [onSelect]);\n\n  return <ul>{filtered.map(i => <li key={i.id} onClick={() => handleSelect(i.id)}>{i.name}</li>)}</ul>;\n}",
              "filename": "ProductList.tsx"
            },
            {
              "type": "keyPoints",
              "points": [
                "useMemo caches the result of an expensive calculation.",
                "useCallback caches a function definition between re-renders.",
                "Custom hooks must adhere to the Rules of Hooks (call only at the top level)."
              ]
            },
            {
              "type": "quiz",
              "question": "When is useCallback most beneficial in React applications?",
              "options": [
                "When fetching data from REST endpoints synchronously.",
                "When defining CSS styling rules inside JSX elements.",
                "When passing callback functions to memoized child components (React.memo) to prevent unnecessary re-renders.",
                "When replacing the root ReactDOM rendering container."
              ],
              "answer": 2,
              "explanation": "useCallback preserves callback reference identity across renders."
            }
          ]
        },
        {
          "slug": "context-api-and-global-state",
          "title": "Context API & Scalable State Architecture",
          "description": "Master Context API & Scalable State Architecture with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "React Context provides a way to pass data through the component tree without manually passing props down at every level."
            },
            {
              "type": "code",
              "language": "tsx",
              "code": "import { createContext, useContext, useState, ReactNode } from 'react';\n\ninterface ThemeContextType { dark: boolean; toggle: () => void; }\nconst ThemeContext = createContext<ThemeContextType | null>(null);\n\nexport function ThemeProvider({ children }: { children: ReactNode }) {\n  const [dark, setDark] = useState(false);\n  return (\n    <ThemeContext.Provider value={{ dark, toggle: () => setDark(!dark) }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nexport const useTheme = () => {\n  const ctx = useContext(ThemeContext);\n  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');\n  return ctx;\n};",
              "filename": "ThemeContext.tsx"
            },
            {
              "type": "keyPoints",
              "points": [
                "Context prevents prop-drilling across deeply nested component trees.",
                "Split high-frequency state from static context values to optimize rendering performance.",
                "Pair context with custom consumer hooks for runtime safety checks."
              ]
            },
            {
              "type": "quiz",
              "question": "What happens to all components calling useContext(MyContext) when the Provider value updates?",
              "options": [
                "Only the parent component re-renders while children freeze.",
                "The browser immediately refreshes the webpage.",
                "The context value is discarded and reset to initial default state.",
                "All consumer components re-render automatically to reflect the new context value."
              ],
              "answer": 3,
              "explanation": "Context value updates trigger re-renders in all subscribed consumers."
            }
          ]
        }
      ]
    }
  ]
}
