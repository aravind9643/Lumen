import type { Tutorial } from '../types'

export const angularCourse: Tutorial = {
  "slug": "angular",
  "title": "Angular Enterprise Architecture: Signals & Standalone",
  "shortTitle": "Angular",
  "description": "A complete, beginner-to-mastery path covering enterprise Angular architecture: Standalone components, data binding, modern control flow (@if/@for), Signals reactivity engine, Dependency Injection, and Reactive Forms.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Angular",
    "Signals",
    "TypeScript",
    "Dependency Injection",
    "Enterprise",
    "RxJS"
  ],
  "color": "#dd0031",
  "updated": "2026-08-18",
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
      "title": "Chapter 1: Standalone Architecture & Template Bindings (Beginner)",
      "lessons": [
        {
          "slug": "what-is-angular-and-project-architecture",
          "title": "What is Angular & Modern Standalone Architecture?",
          "description": "Learn what Angular is, Google enterprise design principles, Single Page Applications (SPA), and modern Standalone Components without NgModules.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | Prerequisites: TypeScript & HTML Basics"
            },
            {
              "type": "paragraph",
              "text": "Angular is a full-featured, batteries-included web framework maintained by Google for building robust, scalable enterprise applications. Unlike minimal libraries, Angular includes built-in routing, forms, HTTP client, dependency injection, and state reactivity out of the box."
            },
            {
              "type": "definition",
              "term": "Angular Standalone Component",
              "plain": "A self-contained component decorated with @Component({ standalone: true }) that directly declares its dependencies without needing legacy NgModules.",
              "formal": "Angular Standalone Component API"
            },
            {
              "type": "analogy",
              "title": "The Fully-Equipped Workshop Metaphor",
              "text": "If React is a toolbelt where you buy and attach every wrench and hammer separately, Angular is a fully equipped industrial automotive workshop where all tools, hydraulic lifts, and testing benches are pre-installed and certified to work together."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Component } from '@angular/core';\n\n// Minimal Modern Standalone Component\n@Component({\n  selector: 'app-root',\n  standalone: true,\n  template: `\n    <div class=\"welcome-container\">\n      <h1>Welcome to Angular Enterprise Mastery</h1>\n      <p>Building resilient, scalable web applications with Google Angular.</p>\n    </div>\n  `,\n})\nexport class AppComponent {}\n",
              "filename": "app.component.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Angular is TypeScript-first from day one.",
                "Modern Angular uses Standalone Components by default, eliminating legacy NgModules.",
                "The @Component decorator binds the template, styles, and TypeScript logic together."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the purpose of the @Component({ standalone: true }) decorator in modern Angular?",
              "options": [
                "It defines a self-contained component that manages its own dependencies without needing NgModules.",
                "It compiles the component into a mobile app.",
                "It forces the page to reload on every click.",
                "It connects the component to a SQL database directly."
              ],
              "answer": 0,
              "explanation": "Standalone components simplify Angular development by removing the requirement for NgModule wrapper modules."
            }
          ]
        },
        {
          "slug": "templates-interpolation-and-data-binding",
          "title": "Templates, Interpolation & Data Binding",
          "description": "Master template syntax: Text interpolation {{ }}, Property binding [property], and Event binding (event).",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Data binding coordinates communication between the TypeScript component class and the HTML template. Angular provides three core binding types: Interpolation {{ value }}, Property binding [attr]=\"value\", and Event binding (click)=\"method()\"."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-profile',\n  standalone: true,\n  template: `\n    <!-- 1. Interpolation: Output dynamic text -->\n    <h2>Engineer: {{ username }}</h2>\n\n    <!-- 2. Property Binding: Bind HTML attribute to TS property -->\n    <img [src]=\"avatarUrl\" [alt]=\"username\" width=\"96\" height=\"96\">\n\n    <!-- 3. Event Binding: Listen to user clicks -->\n    <button (click)=\"handlePromote()\">Promote to Senior</button>\n  `\n})\nexport class ProfileComponent {\n  username = 'Aravind';\n  avatarUrl = '/avatars/aravind.png';\n\n  handlePromote() {\n    this.username = 'Senior Staff Engineer Aravind';\n  }\n}",
              "filename": "profile.component.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Use double curly braces {{ text }} for text interpolation.",
                "Use square brackets [prop]=\"value\" for property binding (TS -> HTML).",
                "Use parentheses (event)=\"method()\" for event binding (HTML -> TS)."
              ]
            },
            {
              "type": "quiz",
              "question": "Which Angular syntax binds an HTML element property to a TypeScript component field?",
              "options": [
                "{{ property }}",
                "[property]=\"field\"",
                "(property)=\"field\"",
                "*property=\"field\""
              ],
              "answer": 1,
              "explanation": "Square brackets [target]=\"source\" denote one-way data binding from component logic to DOM property."
            }
          ]
        },
        {
          "slug": "modern-control-flow-if-for-switch",
          "title": "Modern Built-In Control Flow: @if, @for & @switch",
          "description": "Master declarative control flow syntax in Angular templates: @if/@else conditions, @for with track optimization, and @empty blocks.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Modern Angular features built-in template control flow syntax (`@if`, `@for`, `@switch`) that is faster, cleaner, and requires zero module imports compared to legacy *ngIf and *ngFor directives."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "@Component({\n  selector: 'app-courses',\n  standalone: true,\n  template: `\n    <h2>Curriculum Overview</h2>\n\n    <!-- Built-in @if condition -->\n    @if (isEnrolled) {\n      <p>Status: Active Student</p>\n    } @else {\n      <button (click)=\"isEnrolled = true\">Enroll Now</button>\n    }\n\n    <!-- Built-in @for loop with mandatory track -->\n    <ul>\n      @for (course of courseList; track course.id) {\n        <li>{{ course.title }} ({{ course.duration }} hrs)</li>\n      } @empty {\n        <li>No courses currently available.</li>\n      }\n    </ul>\n  `\n})\nexport class CoursesComponent {\n  isEnrolled = false;\n  courseList = [\n    { id: 1, title: 'HTML5 Foundations', duration: 4 },\n    { id: 2, title: 'Angular Architecture', duration: 10 },\n  ];\n}",
              "filename": "courses.component.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "@for requires an explicit track expression (track item.id) for DOM node recycling performance.",
                "The @empty block renders automatically when an array is empty.",
                "Built-in control flow compiles into optimal JavaScript branching instructions."
              ]
            },
            {
              "type": "quiz",
              "question": "Why is the track expression strictly required inside modern Angular @for loops?",
              "options": [
                "It tracks the user mouse cursor coordinates.",
                "It connects the loop to Google Analytics.",
                "It provides a unique identity per item so Angular can optimize DOM recycling and skip re-rendering unchanged elements.",
                "It counts how many times the page was refreshed."
              ],
              "answer": 2,
              "explanation": "track uniquely identifies elements, allowing the rendering engine to move DOM nodes rather than destroying and recreating them."
            }
          ]
        },
        {
          "slug": "signals-reactivity-engine",
          "title": "Signals Reactivity Engine (signal, computed, effect)",
          "description": "Master fine-grained, glitch-free reactivity with Angular Signals: writable signals, computed derived values, and side-effect watchers.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Signals provide fine-grained reactivity in Angular. Unlike legacy change detection which checks the entire component tree on every click, Signals notify only the exact DOM nodes and computed values that depend on changed state."
            },
            {
              "type": "definition",
              "term": "Angular Signal",
              "plain": "A wrapper around a value that notifies consumers when that value changes, accessed by invoking it as a function signal().",
              "formal": "Angular Fine-Grained Reactive Primitives"
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Component, signal, computed, effect } from '@angular/core';\n\n@Component({\n  selector: 'app-cart',\n  standalone: true,\n  template: `\n    <h3>Shopping Cart</h3>\n    <p>Quantity: {{ quantity() }}</p>\n    <p>Total: ${{ totalPrice() }}</p>\n    <button (click)=\"increment()\">Add Another Item</button>\n  `\n})\nexport class CartComponent {\n  // 1. Writable signal\n  quantity = signal(1);\n  unitPrice = signal(49);\n\n  // 2. Computed derived signal (memoized automatically)\n  totalPrice = computed(() => this.quantity() * this.unitPrice());\n\n  constructor() {\n    // 3. Side-effect watcher\n    effect(() => {\n      console.log('Cart updated. New total:', this.totalPrice());\n    });\n  }\n\n  increment() {\n    this.quantity.update(q => q + 1);\n  }\n}",
              "filename": "cart.component.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Read a signal by calling it as a function: mySignal().",
                "Update writable signals with .set(newVal) or .update(prev => next).",
                "computed() values are cached and only recompute when their dependencies change."
              ]
            },
            {
              "type": "exercise",
              "prompt": "Create an Angular component with a count writable signal and a doubled computed signal derived from count.",
              "hint": "Use count = signal(0) and doubled = computed(() => this.count() * 2).",
              "solution": "import { Component, signal, computed } from \"@angular/core\";\n\n@Component({\n  selector: \"app-counter\",\n  standalone: true,\n  template: `<button (click)=\"inc()\">Count: {{ count() }} (Doubled: {{ doubled() }})</button>`\n})\nexport class CounterComponent {\n  count = signal(0);\n  doubled = computed(() => this.count() * 2);\n\n  inc() {\n    this.count.update(c => c + 1);\n  }\n}",
              "language": "typescript"
            },
            {
              "type": "quiz",
              "question": "How do you read the current value of an Angular Signal in TypeScript or templates?",
              "options": [
                "By writing quantity.value.",
                "By calling quantity.get().",
                "By using the $quantity syntax.",
                "By calling it as a zero-argument function, such as quantity()."
              ],
              "answer": 3,
              "explanation": "Signals are getter functions; invoking mySignal() retrieves the current value and registers the caller as a subscriber."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Dependency Injection, Forms & Routing (Mastery)",
      "lessons": [
        {
          "slug": "dependency-injection-and-services",
          "title": "Dependency Injection (DI) & Services",
          "description": "Architect scalable applications with Angular hierarchical Dependency Injection, @Injectable({ providedIn: \"root\" }), and the inject() function.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Dependency Injection (DI) is a design pattern where a component receives its required dependencies (like API services or data repositories) from an external injector rather than instantiating them manually with `new Service()`."
            },
            {
              "type": "definition",
              "term": "Dependency Injection (DI)",
              "plain": "A design pattern where classes receive their dependencies from an IoC container rather than creating them directly.",
              "formal": "Inversion of Control & Hierarchical Injector Tree"
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "// 1. Service registered as an application-wide singleton\nimport { Injectable, inject } from '@angular/core';\nimport { HttpClient } from '@angular/common/http';\n\n@Injectable({ providedIn: 'root' })\nexport class CourseService {\n  private http = inject(HttpClient);\n\n  getCourses() {\n    return this.http.get<Course[]>('/api/courses');\n  }\n}\n\n// 2. Component injecting the service cleanly\n@Component({ standalone: true, template: `...` })\nexport class CourseListComponent {\n  private courseService = inject(CourseService);\n  courses$ = this.courseService.getCourses();\n}",
              "filename": "course.service.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "@Injectable({ providedIn: \"root\" }) creates an application-wide singleton.",
                "inject(ServiceToken) provides functional dependency injection without constructor boilerplate.",
                "Services encapsulate business logic, API calls, and shared state."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the purpose of inject(ServiceToken) in modern Angular?",
              "options": [
                "It injects a dependency instance from the Angular Dependency Injection container without needing constructor parameters.",
                "It executes a SQL database query.",
                "It compiles TypeScript files into WebAssembly.",
                "It navigates the user to a new web page."
              ],
              "answer": 0,
              "explanation": "inject() is the functional API for resolving dependencies from the active injection context."
            }
          ]
        },
        {
          "slug": "reactive-forms-and-validation",
          "title": "Reactive Forms & Custom Form Validation",
          "description": "Build robust, strictly typed forms with ReactiveFormsModule, FormBuilder, FormControl, and custom validators.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Angular Reactive Forms provide synchronous, immutable access to form data models, robust validation rules, and reactive value streams."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Component, inject } from '@angular/core';\nimport { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';\n\n@Component({\n  selector: 'app-register',\n  standalone: true,\n  imports: [ReactiveFormsModule],\n  template: `\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <label>Email Address</label>\n      <input formControlName=\"email\" type=\"email\">\n      \n      @if (registerForm.get('email')?.invalid && registerForm.get('email')?.touched) {\n        <p class=\"error\">Please enter a valid email address.</p>\n      }\n      \n      <button type=\"submit\" [disabled]=\"registerForm.invalid\">Register</button>\n    </form>\n  `\n})\nexport class RegisterComponent {\n  private fb = inject(FormBuilder);\n\n  registerForm = this.fb.group({\n    email: ['', [Validators.required, Validators.email]],\n  });\n\n  onSubmit() {\n    if (this.registerForm.valid) {\n      console.log('Submitted Payload:', this.registerForm.value);\n    }\n  }\n}",
              "filename": "register.component.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Import ReactiveFormsModule in component imports.",
                "FormGroup groups FormControls with shared validation status.",
                "Validators.required and Validators.email provide immediate feedback."
              ]
            },
            {
              "type": "quiz",
              "question": "How do you disable a submit button in an Angular Reactive Form when validation checks fail?",
              "options": [
                "By deleting the button from the DOM.",
                "By binding the disabled attribute to form.invalid: [disabled]=\"registerForm.invalid\"",
                "By setting type=\"disabled\".",
                "By adding a CSS class named .disabled."
              ],
              "answer": 1,
              "explanation": "Binding [disabled]=\"form.invalid\" automatically prevents submission when form validation rules fail."
            }
          ]
        },
        {
          "slug": "angular-routing-and-functional-guards",
          "title": "Angular Routing, Parameters & Functional Route Guards",
          "description": "Configure client-side routing with provideRouter, route parameters (:id), lazy-loading components, and functional CanActivateFn authentication guards.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "The Angular Router enables navigation across views in a Single Page Application. Functional route guards (`CanActivateFn`) protect private dashboards by redirecting unauthenticated users."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Routes, CanActivateFn, Router } from '@angular/router';\nimport { inject } from '@angular/core';\n\n// 1. Functional Authentication Guard\nexport const authGuard: CanActivateFn = (route, state) => {\n  const authService = inject(AuthService);\n  const router = inject(Router);\n  \n  if (authService.isLoggedIn()) return true;\n  return router.parseUrl('/login'); // Redirect to login\n};\n\n// 2. Application Routes Configuration with Lazy Loading\nexport const routes: Routes = [\n  { path: '', loadComponent: () => import('./home.component').then(m => m.HomeComponent) },\n  { path: 'dashboard', canActivate: [authGuard], loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent) },\n];",
              "filename": "app.routes.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "loadComponent enables lazy-loading chunks on demand for fast initial bundle sizes.",
                "Functional guards (CanActivateFn) secure routes using dependency injection.",
                "Route parameters (:slug) are read via ActivatedRoute."
              ]
            },
            {
              "type": "quiz",
              "question": "What is the purpose of loadComponent: () => import(...) in Angular route configuration?",
              "options": [
                "It converts the component to a Server Action.",
                "It reloads the full page from the server.",
                "It lazy-loads the component JavaScript chunk only when the user visits that route, reducing initial download size.",
                "It stores the component in IndexedDB."
              ],
              "answer": 2,
              "explanation": "Lazy loading splits the application into separate bundles downloaded on demand."
            }
          ]
        },
        {
          "slug": "httpclient-and-api-integration",
          "title": "HttpClient, Functional Interceptors & RxJS Observables",
          "description": "Perform HTTP requests with HttpClient, inject authentication headers with HttpInterceptorFn, and process async response streams.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Angular `HttpClient` provides a robust API for sending HTTP requests. Functional interceptors (`HttpInterceptorFn`) inspect and transform outgoing requests (such as attaching Bearer authentication tokens)."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { HttpInterceptorFn } from '@angular/common/http';\nimport { inject } from '@angular/core';\n\n// Functional Interceptor: Attach JWT token to all outgoing API requests\nexport const authInterceptor: HttpInterceptorFn = (req, next) => {\n  const token = inject(AuthService).getToken();\n  \n  if (token) {\n    const cloned = req.clone({\n      setHeaders: { Authorization: `Bearer ${token}` }\n    });\n    return next(cloned);\n  }\n  \n  return next(req);\n};",
              "filename": "auth.interceptor.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "HttpRequest objects are immutable — always modify with req.clone().",
                "Interceptors form a pipeline processing outgoing requests and incoming responses.",
                "provideHttpClient(withInterceptors([authInterceptor])) configures global HTTP services."
              ]
            },
            {
              "type": "quiz",
              "question": "Why must you use req.clone() when adding headers inside an Angular HTTP Interceptor?",
              "options": [
                "Because JavaScript deletes objects from RAM.",
                "Because clone() compiles HTTP into WebSockets.",
                "Because browsers forbid modifying strings.",
                "Because HttpRequest objects are immutable by design to prevent race conditions across interceptor pipelines."
              ],
              "answer": 3,
              "explanation": "Immutability ensures that each interceptor in the chain receives a consistent, uncorrupted request object."
            }
          ]
        }
      ]
    }
  ]
}
