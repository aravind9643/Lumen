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
// Course 4: TypeScript (8 Lessons)
// -------------------------------------------------------------
const typescriptCourse = {
  slug: 'typescript',
  varName: 'typescriptCourse',
  title: 'TypeScript Mastery: Type Systems & Generics',
  shortTitle: 'TypeScript',
  description: 'A complete, beginner-to-mastery path covering why TypeScript exists, primitive type annotations, interfaces, union types, type narrowing, generics, and tsconfig architecture.',
  category: 'Web Development',
  difficulty: 'intermediate',
  icon: 'code',
  color: '#3178c6',
  tags: ['TypeScript', 'Generics', 'Type System', 'Interfaces', 'Meta-Programming', 'Strict'],
  chapters: [
    {
      title: 'Chapter 1: Type System Foundations (Beginner to Intermediate)',
      lessons: [
        {
          slug: 'why-typescript-and-the-compiler',
          title: 'Why TypeScript? Static Typing vs Dynamic JavaScript',
          description: 'Learn why TypeScript was created, the role of the compiler (tsc), type annotations, and how compile-time type safety eliminates runtime bugs.',
          duration: 20,
          blocks: [
            { type: 'callout', kind: 'info', text: 'Level: Beginner | Prerequisites: JavaScript Basics' },
            { type: 'paragraph', text: 'JavaScript is dynamically typed — variable types are determined at runtime. In large codebases, passing the wrong data type (like undefined instead of an object) causes crashes like "TypeError: Cannot read properties of undefined". TypeScript is a typed superset of JavaScript that catches errors during editing and compilation before your code ever runs.' },
            { type: 'definition', term: 'TypeScript (TS)', plain: 'A strongly typed programming language developed by Microsoft that builds on JavaScript by adding static type definitions.', formal: 'TypeScript Language Specification' },
            { type: 'analogy', title: 'The Factory Blueprint Quality Check', text: 'JavaScript is like building an airplane and discovering a missing bolt only after taking off in mid-air. TypeScript is the rigorous factory blueprint inspection that checks every bolt and wire before the airplane leaves the hangar.' },
            { type: 'code', language: 'typescript', code: `// In JavaScript: This crashes at runtime if user is undefined\n// In TypeScript: Explicit type annotations catch mistakes instantly\n\nfunction formatGreeting(userName: string): string {\n  return \`Welcome back, \${userName.toUpperCase()}!\`;\n}\n\n// ✅ Valid\nconsole.log(formatGreeting("Aravind"));\n\n// ❌ TypeScript Compile Error: Argument of type 'number' is not assignable to parameter of type 'string'\n// formatGreeting(42);`, filename: 'intro.ts' },
            { type: 'keyPoints', points: ['TypeScript adds compile-time type safety on top of standard JavaScript.', 'All TypeScript types are erased during compilation, leaving clean, standard JavaScript.', 'Browsers do not run TS directly; tsc compiles TS into JS.'] },
            makeQuiz('When does TypeScript detect and report type mismatch errors?', 'At compile-time while writing and building code, before runtime execution in the browser.', 'Only after the user refreshes the page 5 times.', 'During the SQL database query execution stage.', 'When uploading files to GitHub.', 'TypeScript is a static type checker that analyzes code at build/compile time to prevent runtime errors.')
          ]
        },
        {
          slug: 'primitive-types-and-type-annotations',
          title: 'Primitive Types & Explicit Annotations',
          description: 'Master explicit type annotations for string, number, boolean, any, unknown, void, null, and undefined.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'TypeScript allows adding type annotations after variable names using a colon (`variable: type`). If you omit the annotation, TypeScript uses Type Inference to guess the type automatically based on the assigned value.' },
            { type: 'definition', term: 'Type Inference vs Explicit Annotation', plain: 'Explicit annotation is manually writing let age: number = 25. Type inference is letting TypeScript automatically deduce that let age = 25 is a number.', formal: 'Hindley-Milner Type Inference System' },
            { type: 'code', language: 'typescript', code: `// Explicit primitive annotations\nconst engineerName: string = "Aravind";\nconst yearsExperience: number = 7;\nconst isFullStack: boolean = true;\n\n// void: Used for functions that do not return a value\nfunction logMessage(msg: string): void {\n  console.log("[LOG]:", msg);\n}\n\n// unknown: The safe alternative to any\nlet inputData: unknown = "Sample String";\nif (typeof inputData === "string") {\n  console.log(inputData.toUpperCase()); // Safe because we verified it is a string\n}`, filename: 'primitives.ts' },
            { type: 'keyPoints', points: ['Use unknown instead of any when dealing with dynamic external data.', 'void indicates that a function does not return a value.', 'TypeScript infers types automatically when variables are initialized.'] },
            makeQuiz('Why is unknown preferred over any in modern TypeScript code?', 'unknown forces you to perform a type check before using the variable, whereas any disables all safety checks.', 'unknown is a faster data type in computer memory.', 'any causes the compiler to crash.', 'unknown only accepts integer numbers.', 'unknown represents any arbitrary value safely by requiring type narrowing before methods or properties can be invoked.')
          ]
        },
        {
          slug: 'arrays-tuples-and-enums',
          title: 'Arrays, Readonly Arrays & Tuples',
          description: 'Type collections with array annotations (string[], Array<number>), immutable ReadonlyArray, and fixed-length Tuples.',
          duration: 20,
          blocks: [
            { type: 'paragraph', text: 'Arrays in TypeScript can be constrained to contain specific element types. Tuples represent fixed-length arrays where each position has a specific, distinct type.' },
            { type: 'code', language: 'typescript', code: `// 1. Typed Arrays: Only holds strings\nconst technologies: string[] = ["React", "TypeScript", "Node.js"];\ntechnologies.push("Next.js"); // ✅ Valid\n// technologies.push(100);    // ❌ Error: number not assignable to string\n\n// 2. Tuples: Fixed length and specific types per index (e.g. [longitude, latitude])\nlet coordinate: [number, number];\ncoordinate = [37.7749, -122.4194]; // ✅ Valid\n\n// 3. Key-value tuple like React's useState return type\ntype StateTuple = [string, (newValue: string) => void];`, filename: 'arrays-and-tuples.ts' },
            { type: 'keyPoints', points: ['Type arrays with type[] (e.g. number[]) or Array<type>.', 'Tuples define fixed-position type structures like [string, number].', 'Use readonly number[] to prevent mutation methods like .push() and .splice().'] },
            makeQuiz('What is a Tuple in TypeScript?', 'An array with a fixed number of elements where each position has an explicit, known type.', 'A function that takes exactly two parameters.', 'A special type of HTML link.', 'A SQL database stored procedure.', 'A tuple is an array with a fixed length and predetermined types at each specific index.')
          ]
        },
        {
          slug: 'interfaces-and-type-aliases',
          title: 'Interfaces & Type Aliases for Object Shapes',
          description: 'Define object schemas with interface and type, optional properties (?), readonly fields, and extending interfaces.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'In TypeScript, interfaces and type aliases define the shape of objects. They ensure that data structures passed across functions have the exact required properties and types.' },
            { type: 'definition', term: 'interface vs type', plain: 'interface is best for defining object models and class contracts (supports declaration merging and extends). type is versatile for unions, primitives, and mapped types.', formal: 'Object Type Declaration & Type Alias' },
            { type: 'code', language: 'typescript', code: `// Define an Interface for a User profile\ninterface UserProfile {\n  readonly id: string;        // Cannot be modified after creation\n  name: string;\n  email: string;\n  bio?: string;               // Optional property (?)\n}\n\n// Interface inheritance (extends)\ninterface AdminUser extends UserProfile {\n  permissions: string[];\n}\n\nconst admin: AdminUser = {\n  id: "usr_99",\n  name: "Sarah",\n  email: "sarah@company.com",\n  permissions: ["manage_users", "deploy_prod"],\n};`, filename: 'interfaces.ts' },
            { type: 'keyPoints', points: ['Use ? for optional properties that may be undefined.', 'Use readonly to prevent modifying fields after initialization.', 'Interfaces can extend other interfaces to inherit properties.'] },
            makeQuiz('What does the question mark (?) mean on an interface property like bio?: string;?', 'The property is optional and can be either a string or undefined.', 'The property is encrypted.', 'The property must be filled in with a question mark.', 'The property is a boolean true/false.', 'The ? modifier marks a property as optional, meaning objects of that type can omit it.')
          ]
        }
      ]
    },
    {
      title: 'Chapter 2: Advanced Types, Generics & Architecture (Mastery)',
      lessons: [
        {
          slug: 'union-types-and-type-narrowing',
          title: 'Union Types, Literal Types & Type Narrowing',
          description: 'Combine types with unions (|), use strict string literal types, and narrow types with typeof, instanceof, and discriminated unions.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'Union types allow a value to be one of several types (e.g. `string | number`). Type narrowing is the process where TypeScript inspects conditionals (like `typeof` or `in`) to refine a broad union into a specific type.' },
            { type: 'code', language: 'typescript', code: `// Discriminated Union Pattern\ntype ApiResponse =\n  | { status: "success"; data: string[] }\n  | { status: "error"; errorMessage: string };\n\nfunction handleResponse(res: ApiResponse) {\n  // TypeScript narrows the type automatically inside the if check\n  if (res.status === "success") {\n    console.log("Items received:", res.data.length);\n  } else {\n    console.error("Request failed:", res.errorMessage);\n  }\n}`, filename: 'unions.ts' },
            { type: 'keyPoints', points: ['Union types use pipe | to allow multiple possible types.', 'Literal types restrict values to exact strings (e.g. status: "success" | "error").', 'Discriminated unions use a common literal property to narrow types safely.'] },
            makeQuiz('How does TypeScript narrow a Discriminated Union type inside an if statement?', 'By inspecting the common literal property (like status: "success") to eliminate other union variants.', 'By calling the JavaScript JSON.parse() method.', 'By converting all types into integers.', 'By reloading the browser window.', 'Discriminated unions have a shared discriminant tag that TypeScript uses in control flow analysis to narrow types.')
          ]
        },
        {
          slug: 'function-types-and-signatures',
          title: 'Function Signatures, Callbacks & Overloads',
          description: 'Type function parameters, return values, callback signatures, and optional/default parameters.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'TypeScript enforces that functions are called with the exact number and type of arguments expected, and ensures caller code handles the return type safely.' },
            { type: 'code', language: 'typescript', code: `// Function Type Definition for a Callback\ntype ClickHandler = (event: MouseEvent, targetId: string) => void;\n\n// Function with typed parameters and return type\nfunction multiply(a: number, b: number = 1): number {\n  return a * b;\n}\n\n// Higher-order function taking a typed callback\nfunction registerClick(buttonId: string, onClick: ClickHandler) {\n  console.log("Registered click for:", buttonId);\n}`, filename: 'functions.ts' },
            { type: 'keyPoints', points: ['Always annotate function parameters; return types can often be inferred.', 'Default parameters (b: number = 1) make arguments optional.', 'Use () => void to type callbacks that return no value.'] },
            makeQuiz('What happens if you try to pass 3 arguments to a TypeScript function that only defines 2 parameters?', 'TypeScript throws a compile-time error preventing the build.', 'The computer runs out of memory.', 'The third argument is automatically sent to a database.', 'The function runs three times.', 'TypeScript strictly checks argument counts and parameter types at compile time.')
          ]
        },
        {
          slug: 'generics-from-first-principles',
          title: 'Generics from First Principles: Reusable Type Safety',
          description: 'Understand Generics (<T>), generic functions, generic interfaces, and type constraints with extends.',
          duration: 30,
          blocks: [
            { type: 'paragraph', text: 'Generics allow writing flexible, reusable functions and classes that work across multiple data types while preserving full type safety instead of losing information with any.' },
            { type: 'definition', term: 'Generics (<T>)', plain: 'Type variables that allow code to capture the specific type passed in and reuse it for arguments, return values, or internal state.', formal: 'Parametric Polymorphism' },
            { type: 'analogy', title: 'The Shipping Container Metaphor', text: 'A shipping container is built to hold cargo. A container does not care whether it carries cars, grain, or electronics — but once loaded with cars, it is strictly a "Container of Cars". Generics are type-safe containers for your code.' },
            { type: 'code', language: 'typescript', code: `// Generic Function: T represents the type passed in\nfunction getFirstElement<T>(list: T[]): T | undefined {\n  return list[0];\n}\n\n// TypeScript infers T as string\nconst firstName = getFirstElement(["React", "TypeScript", "Next.js"]); // type: string | undefined\n\n// TypeScript infers T as number\nconst firstNumber = getFirstElement([10, 20, 30]); // type: number | undefined\n\n// Generic Interface for API responses\ninterface ApiResponse<TData> {\n  status: number;\n  payload: TData;\n}`, filename: 'generics.ts' },
            { type: 'keyPoints', points: ['Generics <T> preserve type identity across inputs and outputs.', 'You can constrain generics with <T extends SomeInterface>.', 'Generics eliminate code duplication while maintaining strict safety.'] },
            makeQuiz('What is the main benefit of using a Generic function <T>(arg: T): T instead of (arg: any): any?', 'Generics preserve the exact type information of the input and output, whereas any loses all type safety.', 'Generics run faster in compiled machine code.', 'any is forbidden in all TypeScript versions.', 'Generics automatically translate code to Python.', 'Generics capture the concrete type provided by the caller, retaining full autocomplete and type safety.')
          ]
        },
        {
          slug: 'utility-types-and-tsconfig-mastery',
          title: 'Utility Types (Partial, Pick, Omit) & tsconfig Setup',
          description: 'Master built-in TypeScript utility types and configure professional tsconfig.json compiler settings for production projects.',
          duration: 25,
          blocks: [
            { type: 'paragraph', text: 'TypeScript includes powerful built-in utility types that transform existing types without rewriting them. Configuring `tsconfig.json` with strict mode guarantees enterprise code quality.' },
            { type: 'code', language: 'typescript', code: `interface Course {\n  id: string;\n  title: string;\n  durationHours: number;\n  isPublished: boolean;\n}\n\n// 1. Partial<T>: Makes all properties optional (great for update forms)\ntype UpdateCourseDTO = Partial<Course>;\n\n// 2. Pick<T, K>: Selects only specific keys\ntype CourseSummary = Pick<Course, "id" | "title">;\n\n// 3. Omit<T, K>: Removes specific keys\ntype CreateCourseDTO = Omit<Course, "id">;`, filename: 'utility-types.ts' },
            { type: 'keyPoints', points: ['Partial<T> makes all properties optional.', 'Pick<T, Keys> constructs a type by picking specific properties.', 'Omit<T, Keys> constructs a type by omitting specific properties.', 'Always enable "strict": true in tsconfig.json.'] },
            makeQuiz('Which TypeScript utility type creates a new type where all properties from an interface are optional?', 'Partial<T>', 'Pick<T>', 'Required<T>', 'Optional<T>', 'Partial<T> transforms all properties of type T into optional properties.')
          ]
        }
      ]
    }
  ]
}

console.log('Writing TypeScript course...')
const coursesToGenerate = [typescriptCourse]

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
