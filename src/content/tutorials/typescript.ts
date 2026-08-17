import type { Tutorial } from '../types'

export const typescriptCourse: Tutorial = {
  "slug": "typescript",
  "title": "TypeScript Mastery: Type Systems & Advanced Generics",
  "shortTitle": "TypeScript",
  "description": "Master strict TypeScript engineering: utility types, conditional types, mapped types, template literal types, narrowing, and type-safe architecture.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "TypeScript",
    "Generics",
    "Type Safety",
    "Utility Types",
    "AST",
    "Architecture"
  ],
  "color": "#3178c6",
  "updated": "2026-08-17",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern TypeScript syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade TypeScript applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Phase 1: Type Primitives, Interfaces & Narrowing",
      "lessons": [
        {
          "slug": "type-annotations-and-discriminated-unions",
          "title": "Discriminated Unions, Narrowing & Type Guards",
          "description": "Master Discriminated Unions, Narrowing & Type Guards with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Discriminated unions provide exhaustive pattern matching and type narrowing based on a shared literal property."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "type ApiResponse =\n  | { status: 'success'; data: string[] }\n  | { status: 'error'; message: string };\n\nfunction handleResponse(res: ApiResponse) {\n  if (res.status === 'success') {\n    console.log(res.data.length); // TS knows res is success\n  } else {\n    console.error(res.message);   // TS knows res is error\n  }\n}",
              "filename": "unions.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Discriminated unions use a common literal discriminant property.",
                "Custom type guards use the arg is Type return predicate.",
                "The never type guarantees exhaustive switch statement checking."
              ]
            },
            {
              "type": "quiz",
              "question": "What makes a TypeScript union type a \"discriminated union\"?",
              "options": [
                "A common singleton/literal property present in all members of the union that TypeScript uses for narrowing.",
                "The presence of an interface extending multiple classes.",
                "Compiling with the --strictNullChecks compiler flag.",
                "Using the any keyword to disable type verification."
              ],
              "answer": 0,
              "explanation": "A discriminant literal property enables compile-time type narrowing."
            }
          ]
        },
        {
          "slug": "interfaces-vs-type-aliases",
          "title": "Interfaces, Types & Declaration Merging",
          "description": "Master Interfaces, Types & Declaration Merging with practical examples, architectural deep dives, and key concepts.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Learn when to use interfaces for open, extensible object contracts and type aliases for unions, tuples, and mapped types."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "interface User {\n  id: string;\n  name: string;\n}\n\n// Declaration merging expands existing interfaces\ninterface User {\n  role: 'admin' | 'member';\n}\n\ntype Point = [x: number, y: number];",
              "filename": "types.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Interfaces support declaration merging across module definitions.",
                "Type aliases are required for primitives, unions, and intersection definitions.",
                "prefer strict mode (strict: true) in tsconfig.json."
              ]
            },
            {
              "type": "quiz",
              "question": "Which TypeScript construct supports declaration merging across multiple definitions with the same name?",
              "options": [
                "type alias",
                "interface",
                "enum",
                "tuple"
              ],
              "answer": 1,
              "explanation": "Interfaces merge declarations with the same identifier."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Generics, Conditional Types & Mapped Types",
      "lessons": [
        {
          "slug": "generics-and-type-constraints",
          "title": "Generics, Constraints & Utility Types",
          "description": "Master Generics, Constraints & Utility Types with practical examples, architectural deep dives, and key concepts.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Generics allow writing flexible, reusable functions and data structures while preserving full type safety across inputs and outputs."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}\n\nconst user = { id: 'usr_1', score: 95 };\nconst score = getProperty(user, 'score'); // number",
              "filename": "generics.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "keyof T extracts the union of an object type keys.",
                "K extends keyof T constrains generic parameters to valid object properties.",
                "Built-in utilities (Partial, Required, Readonly, Record, Pick, Omit) transform types."
              ]
            },
            {
              "type": "quiz",
              "question": "What does the TypeScript operator \"keyof T\" produce?",
              "options": [
                "An array of runtime object keys.",
                "A Boolean value indicating whether T is an object.",
                "A union of all known public property name string/number/symbol literal types of T.",
                "The total number of properties in T."
              ],
              "answer": 2,
              "explanation": "keyof produces the union of keys for a given type."
            }
          ]
        },
        {
          "slug": "conditional-and-mapped-types",
          "title": "Conditional Types, infer & Template Literals",
          "description": "Master Conditional Types, infer & Template Literals with practical examples, architectural deep dives, and key concepts.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Conditional types (T extends U ? X : Y) and infer allow extracting inner return types and crafting advanced metaprogramming typings."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;\n\ntype EventName = `on${'Click' | 'Hover' | 'Focus'}`;\n// 'onClick' | 'onHover' | 'onFocus'",
              "filename": "advanced.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "The infer keyword introduces a type variable within the conditional check.",
                "Template literal types enable type-safe string manipulation.",
                "Mapped types iterate over keys with in keyof."
              ]
            },
            {
              "type": "quiz",
              "question": "What does the \"infer\" keyword do inside a conditional type in TypeScript?",
              "options": [
                "It suppresses type-checking errors like @ts-ignore.",
                "It forces the TypeScript compiler to emit runtime metadata.",
                "It creates an infinite recursive type alias.",
                "It declares a type variable to be deduced from the matched type structure."
              ],
              "answer": 3,
              "explanation": "infer dynamically captures extracted types in conditional branches."
            }
          ]
        }
      ]
    }
  ]
}
