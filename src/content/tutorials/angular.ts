import type { Tutorial } from '../types'

export const angularCourse: Tutorial = {
  "slug": "angular",
  "title": "Angular Enterprise: Signals, Standalone Components & RxJS",
  "shortTitle": "Angular",
  "description": "Master enterprise Angular development: Standalone components, modern Signals reactivity, Dependency Injection, RxJS, reactive forms, and routing.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Angular",
    "TypeScript",
    "Signals",
    "RxJS",
    "Enterprise",
    "Standalone"
  ],
  "color": "#dd0031",
  "updated": "2026-08-17",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern Angular syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade Angular applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Phase 1: Standalone Components & Modern Signals",
      "lessons": [
        {
          "slug": "standalone-components-and-signals",
          "title": "Standalone Components & Angular Signals",
          "description": "Master Standalone Components & Angular Signals with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Modern Angular uses standalone components and fine-grained reactive Signals (signal, computed, effect) eliminating NgModules."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Component, signal, computed } from '@angular/core';\n\n@Component({\n  selector: 'app-counter',\n  standalone: true,\n  template: `\n    <button (click)=\"increment()\">Count: {{ count() }}</button>\n    <p>Double: {{ double() }}</p>\n  `\n})\nexport class CounterComponent {\n  count = signal(0);\n  double = computed(() => this.count() * 2);\n\n  increment() {\n    this.count.update(v => v + 1);\n  }\n}",
              "filename": "counter.component.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Standalone components declare their own imports directly in the decorator.",
                "Signals track dependencies automatically for fine-grained DOM updates without Zone.js.",
                "computed creates derived reactive values that re-calculate lazily."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the primary advantage of Angular Signals over Zone.js change detection?",
              "options": [
                "Signals provide fine-grained reactivity tracking, updating only the specific DOM nodes that depend on changed state.",
                "Signals allow writing synchronous SQL queries inside component templates.",
                "Signals compile Angular components into pure WebAssembly binaries.",
                "Signals completely disable TypeScript typechecking at build time."
              ],
              "answer": 0,
              "explanation": "Signals enable fine-grained reactivity without full component tree dirty-checking."
            }
          ]
        },
        {
          "slug": "dependency-injection-and-services",
          "title": "Modern Dependency Injection & inject() API",
          "description": "Master Modern Dependency Injection & inject() API with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Angular features a hierarchical Dependency Injection system. The inject() function allows injecting tokens into services and functional route guards."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Injectable, inject } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\n\n@Injectable({ providedIn: 'root' })\nexport class UserService {\n  private http = inject(HttpClient);\n\n  getUsers() {\n    return this.http.get<User[]>('/api/users');\n  }\n}",
              "filename": "user.service.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "providedIn: \"root\" creates application-wide singleton services.",
                "The inject() function enables functional DI in guards, resolvers, and components.",
                "Hierarchical injectors allow scoping services to specific component subtrees."
              ]
            },
            {
              "type": "quiz",
              "question": "What does @Injectable({ providedIn: \"root\" }) accomplish in Angular?",
              "options": [
                "It restricts service usage to server-side rendering only.",
                "It registers the service as an application-wide singleton available throughout the injector tree.",
                "It converts HTTP responses into synchronous database transactions.",
                "It injects the service into the global browser window object."
              ],
              "answer": 1,
              "explanation": "providedIn: root provides tree-shakable singleton services across the app."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Reactive Forms, RxJS & Enterprise Routing",
      "lessons": [
        {
          "slug": "reactive-forms-and-validation",
          "title": "Type-Safe Reactive Forms & Validation",
          "description": "Master Type-Safe Reactive Forms & Validation with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Angular Reactive Forms provide explicit, type-safe form model management with synchronous/asynchronous validation pipelines."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Component, inject } from '@angular/core';\nimport { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';\n\n@Component({\n  standalone: true,\n  imports: [ReactiveFormsModule],\n  template: `\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <input formControlName=\"email\" type=\"email\" />\n      <button [disabled]=\"form.invalid\">Submit</button>\n    </form>\n  `\n})\nexport class LoginComponent {\n  private fb = inject(FormBuilder);\n  form = this.fb.group({\n    email: ['', [Validators.required, Validators.email]]\n  });\n\n  onSubmit() { if (this.form.valid) console.log(this.form.value); }\n}",
              "filename": "login.component.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "FormGroup and FormControl track form state, pristine/dirty, and validation status.",
                "Type-safe forms infer form model shapes automatically in TypeScript.",
                "Custom validators return validation error objects or null when valid."
              ]
            },
            {
              "type": "quiz",
              "question": "How does Angular Reactive Forms track validation state across complex forms?",
              "options": [
                "By directly parsing DOM CSS classes in a MutationObserver.",
                "By querying an external database schema over HTTP.",
                "Through an immutable programmatic model (FormGroup/FormControl) with structured validator functions.",
                "By disabling form submission buttons permanently."
              ],
              "answer": 2,
              "explanation": "Reactive forms manage state explicitly through programmatic FormGroups and Controls."
            }
          ]
        },
        {
          "slug": "rxjs-and-http-interceptors",
          "title": "RxJS Streams, Operators & HTTP Interceptors",
          "description": "Master RxJS Streams, Operators & HTTP Interceptors with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "RxJS powers asynchronous data pipelines in Angular with operators like switchMap, debounceTime, and functional HTTP interceptors."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { HttpInterceptorFn } from '@angular/common/http';\n\nexport const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = localStorage.getItem('token');\n  const authReq = token\n    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })\n    : req;\n  return next(authReq);\n};",
              "filename": "auth.interceptor.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Functional interceptors transform outgoing requests and incoming responses.",
                "switchMap cancels previous in-flight inner observables when new values arrive.",
                "takeUntilDestroyed cleans up subscriptions automatically on component destroy."
              ]
            },
            {
              "type": "quiz",
              "question": "What does the RxJS switchMap operator do when a new outer observable item arrives?",
              "options": [
                "It merges all emissions simultaneously without cancellation.",
                "It throws a runtime exception if an earlier request was pending.",
                "It caches the first request and ignores all subsequent emissions.",
                "It cancels the previous inner observable subscription and switches execution to the new inner observable."
              ],
              "answer": 3,
              "explanation": "switchMap cancels in-flight inner observables on new emissions."
            }
          ]
        }
      ]
    }
  ]
}
