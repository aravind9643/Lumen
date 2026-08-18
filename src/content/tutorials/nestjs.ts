import type { Tutorial } from '../types'

export const nestjsCourse: Tutorial = {
  "slug": "nestjs",
  "title": "NestJS Enterprise Architecture: Microservices & DI",
  "shortTitle": "NestJS",
  "description": "A complete, beginner-to-mastery path covering enterprise TypeScript backend architecture with NestJS: Dependency Injection, Controllers, Providers, Modules, DTO validation, Guards, and Exception Filters.",
  "category": "Web Development",
  "difficulty": "advanced",
  "icon": "code",
  "tags": [
    "NestJS",
    "TypeScript",
    "Dependency Injection",
    "Backend",
    "Microservices",
    "Enterprise"
  ],
  "color": "#e0234e",
  "updated": "2026-08-18",
  "prerequisites": [
    "Zero prior experience required — built from first principles."
  ],
  "outcomes": [
    "Master modern NestJS syntax, core mental models, and architectural patterns",
    "Build clean, performant, and production-grade NestJS applications",
    "Understand trade-offs, testing strategies, and industry best practices"
  ],
  "chapters": [
    {
      "title": "Chapter 1: Enterprise Architecture & Dependency Injection (Beginner)",
      "lessons": [
        {
          "slug": "what-is-nestjs-and-enterprise-architecture",
          "title": "What is NestJS & Enterprise Architecture?",
          "description": "Learn why enterprise teams choose NestJS over unopinionated Express, the Angular-inspired architecture, and Inversion of Control (IoC).",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Advanced | Prerequisites: TypeScript & Node.js Basics"
            },
            {
              "type": "paragraph",
              "text": "While plain Express is great for small scripts, large teams often suffer from inconsistent project structures, missing architectural guidelines, and untyped spaghetti code. NestJS is a progressive Node.js framework built with TypeScript that provides an out-of-the-box application architecture (Controllers, Providers, Modules) heavily inspired by Angular and Spring Boot."
            },
            {
              "type": "definition",
              "term": "NestJS",
              "plain": "An enterprise-grade TypeScript backend framework built on top of Express or Fastify that uses decorators and Inversion of Control (IoC).",
              "formal": "Enterprise Progressive Node.js Framework"
            },
            {
              "type": "analogy",
              "title": "The Architectural Skyscraper Blueprint",
              "text": "Express is a pile of high-quality bricks and lumber left on an empty lot with no instructions. NestJS is a steel skyscraper structural framework with certified zoning, elevator shafts, fire escapes, and electrical conduits pre-engineered."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "// main.ts: Application Bootstrap\nimport { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  app.setGlobalPrefix('api');\n  await app.listen(3000);\n  console.log('NestJS Enterprise Server running on http://localhost:3000/api');\n}\nbootstrap();",
              "filename": "main.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "NestJS uses TypeScript decorators (@Module, @Controller, @Injectable).",
                "Encourages modular, maintainable, and testable code structures.",
                "Built on top of battle-tested HTTP engines (Express or Fastify)."
              ]
            },
            {
              "type": "quiz",
              "question": "What is a primary reason enterprise teams adopt NestJS for backend development?",
              "options": [
                "It provides a structured, standardized TypeScript architecture with built-in Dependency Injection and modular design.",
                "It replaces all SQL databases with JSON files.",
                "It compiles TypeScript into native iOS apps.",
                "It disables HTTP authentication."
              ],
              "answer": 0,
              "explanation": "NestJS enforces structured architecture and type safety, preventing large codebases from degrading into unmaintainable spaghetti code."
            }
          ]
        },
        {
          "slug": "nestjs-project-structure-and-cli",
          "title": "NestJS Project Structure & Nest CLI",
          "description": "Generate boilerplate code with the Nest CLI (nest g resource, nest g controller), and understand main.ts, app.module.ts, and feature modules.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "The Nest CLI accelerates development by scaffolding modules, controllers, and services with standard file naming conventions and automated testing files."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Install Nest CLI globally\n$ npm install -g @nestjs/cli\n\n# Create a new project\n$ nest new enterprise-api\n\n# Automatically generate a full CRUD resource (Module, Controller, Service, DTOs)\n$ nest g resource courses",
              "filename": "terminal"
            },
            {
              "type": "keyPoints",
              "points": [
                "nest new initializes a production-ready repository with tsconfig, linter, and tests.",
                "nest g resource generates complete CRUD scaffolds in seconds.",
                "The CLI automatically registers generated controllers and services into their parent modules."
              ]
            },
            {
              "type": "quiz",
              "question": "Which Nest CLI command automatically generates a complete CRUD feature with Module, Controller, Service, and DTO files?",
              "options": [
                "nest create all",
                "nest g resource <name>",
                "nest make crud",
                "nest build feature"
              ],
              "answer": 1,
              "explanation": "nest g resource generates all boilerplate files and registers them into the application module."
            }
          ]
        },
        {
          "slug": "controllers-and-http-routing",
          "title": "Controllers & HTTP Routing (@Get, @Post, @Param)",
          "description": "Master NestJS routing decorators: @Controller(), @Get(), @Post(), @Param(), @Body(), @Query(), and @HttpCode().",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Controllers are responsible for handling incoming HTTP requests and returning responses to the client. The `@Controller('courses')` decorator defines the base route prefix."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Controller, Get, Post, Param, Body, HttpCode, HttpStatus } from '@nestjs/common';\nimport { CoursesService } from './courses.service';\n\n@Controller('courses')\nexport class CoursesController {\n  constructor(private readonly coursesService: CoursesService) {}\n\n  @Get()\n  async findAll() {\n    return this.coursesService.getAllCourses();\n  }\n\n  @Get(':id')\n  async findOne(@Param('id') id: string) {\n    return this.coursesService.getCourseById(id);\n  }\n\n  @Post()\n  @HttpCode(HttpStatus.CREATED)\n  async create(@Body() createDto: { title: string }) {\n    return this.coursesService.createCourse(createDto);\n  }\n}",
              "filename": "courses.controller.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "@Controller(\"prefix\") sets the base URL route for all methods in the class.",
                "@Param(\"id\") extracts URL path parameters.",
                "@Body() extracts and injects the parsed JSON request payload."
              ]
            },
            {
              "type": "quiz",
              "question": "Which NestJS decorator is used to extract the JSON request payload from an incoming HTTP POST request?",
              "options": [
                "@Param()",
                "@Payload()",
                "@Body()",
                "@Request()"
              ],
              "answer": 2,
              "explanation": "@Body() extracts the request body and binds it to a handler parameter."
            }
          ]
        },
        {
          "slug": "providers-and-dependency-injection-in-nest",
          "title": "Providers & Dependency Injection (@Injectable)",
          "description": "Encapsulate business logic in Services decorated with @Injectable(), and master constructor dependency injection via the NestJS IoC container.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Providers are plain JavaScript classes marked with `@Injectable()`. The NestJS Inversion of Control (IoC) container handles creating singletons and injecting them into constructors automatically."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Injectable, NotFoundException } from '@nestjs/common';\n\nexport interface Course {\n  id: string;\n  title: string;\n}\n\n@Injectable()\nexport class CoursesService {\n  private courses: Course[] = [\n    { id: '1', title: 'NestJS Architecture' },\n  ];\n\n  getAllCourses(): Course[] {\n    return this.courses;\n  }\n\n  getCourseById(id: string): Course {\n    const course = this.courses.find(c => c.id === id);\n    if (!course) throw new NotFoundException(`Course #${id} not found`);\n    return course;\n  }\n}",
              "filename": "courses.service.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Services marked with @Injectable() are managed by the Nest IoC container.",
                "Throwing built-in exceptions (like NotFoundException) automatically returns HTTP 404 JSON responses.",
                "Services are singletons by default across the application lifecycle."
              ]
            },
            {
              "type": "quiz",
              "question": "What decorator must be attached to a class in NestJS to allow it to be injected into controllers via Dependency Injection?",
              "options": [
                "@Service()",
                "@Provider()",
                "@Component()",
                "@Injectable()"
              ],
              "answer": 3,
              "explanation": "@Injectable() attaches metadata declaring that the class can be managed by the Nest IoC container."
            }
          ]
        }
      ]
    },
    {
      "title": "Chapter 2: Modules, Validation & Enterprise Security (Mastery)",
      "lessons": [
        {
          "slug": "modules-and-modular-architecture",
          "title": "Modules & Modular Architecture (@Module)",
          "description": "Organize applications into cohesive feature modules with @Module(), manage imports and exports, and build shared common modules.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "A module is a class annotated with a `@Module()` decorator. Nest uses modules to organize the application structure into cohesive, self-contained feature boundaries."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Module } from '@nestjs/common';\nimport { CoursesController } from './courses.controller';\nimport { CoursesService } from './courses.service';\n\n@Module({\n  controllers: [CoursesController], // HTTP route handlers\n  providers: [CoursesService],       // Business logic services\n  exports: [CoursesService],         // Make service available to other importing modules\n})\nexport class CoursesModule {}\n",
              "filename": "courses.module.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Every Nest application has at least one root module (AppModule).",
                "exports array makes providers visible and reusable in other feature modules.",
                "Modules provide clean architectural boundaries and prevent circular dependencies."
              ]
            },
            {
              "type": "quiz",
              "question": "What array inside the @Module decorator must be configured to share a service with other modules that import it?",
              "options": [
                "exports",
                "imports",
                "controllers",
                "declarations"
              ],
              "answer": 0,
              "explanation": "The exports array lists providers that should be available in other modules importing this module."
            }
          ]
        },
        {
          "slug": "data-transfer-objects-and-validation-pipes",
          "title": "DTOs & Validation with class-validator",
          "description": "Protect APIs with Data Transfer Objects (DTO), class-validator decorator rules, and the global ValidationPipe with whitelist sanitization.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Data Transfer Objects (DTO) define the schema for data sent over the network. Combined with `class-validator` and `ValidationPipe`, NestJS automatically rejects invalid inputs with HTTP 400 Bad Request errors."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "// create-course.dto.ts\nimport { IsString, IsNotEmpty, MinLength, IsInt, Min } from 'class-validator';\n\nexport class CreateCourseDto {\n  @IsString()\n  @IsNotEmpty()\n  @MinLength(3)\n  readonly title: string;\n\n  @IsInt()\n  @Min(1)\n  readonly durationHours: number;\n}\n\n// In main.ts: Enable global automated validation\n// app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));",
              "filename": "create-course.dto.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "DTOs enforce strict input shapes for incoming HTTP requests.",
                "ValidationPipe with whitelist: true automatically strips un-whitelisted malicious properties.",
                "Decorators like @IsString() and @MinLength() provide declarative validation."
              ]
            },
            {
              "type": "quiz",
              "question": "What security benefit does enabling whitelist: true in NestJS ValidationPipe provide?",
              "options": [
                "It encrypts all database records.",
                "It automatically strips away any properties sent in the request body that are not explicitly defined on the DTO class.",
                "It requires users to enter a password.",
                "It blocks requests from Chrome browsers."
              ],
              "answer": 1,
              "explanation": "Whitelisting removes unmapped parameters, preventing parameter injection and mass assignment attacks."
            }
          ]
        },
        {
          "slug": "guards-and-role-based-authorization-in-nest",
          "title": "Guards, ExecutionContext & Role-Based Access (RBAC)",
          "description": "Control route access with Guards (CanActivate), inspect ExecutionContext, and implement role-based access control with custom decorators and Reflector.",
          "duration": 30,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Guards determine whether a request has permission to access a route handler. They implement `CanActivate` and execute after middleware but before pipes."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(context: ExecutionContext): boolean {\n    const request = context.switchToHttp().getRequest();\n    const authHeader = request.headers.authorization;\n    \n    if (!authHeader || !authHeader.startsWith('Bearer ')) {\n      throw new UnauthorizedException('Authentication token is missing');\n    }\n    \n    // In real app: verify JWT token and attach user to request\n    request.user = { id: 'usr_1', role: 'admin' };\n    return true;\n  }\n}",
              "filename": "auth.guard.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Guards implement CanActivate and return a boolean or Promise<boolean>.",
                "Apply guards at the controller or route method level with @UseGuards(AuthGuard).",
                "ExecutionContext provides access to the underlying HTTP request object."
              ]
            },
            {
              "type": "quiz",
              "question": "What interface must a NestJS Guard implement to control access to route handlers?",
              "options": [
                "CanDeactivate",
                "Interceptor",
                "CanActivate",
                "PipeTransform"
              ],
              "answer": 2,
              "explanation": "Guards implement the CanActivate interface containing the canActivate(context: ExecutionContext) method."
            }
          ]
        },
        {
          "slug": "exception-filters-and-interceptors",
          "title": "Exception Filters & Interceptors",
          "description": "Format standard error responses globally with Exception Filters (@Catch), and transform response streams with Interceptors and RxJS.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Exception Filters catch unhandled exceptions across the entire application and format uniform JSON error responses with timestamps and status codes. Interceptors bind extra logic before and after method execution."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';\nimport { Response } from 'express';\n\n@Catch()\nexport class GlobalExceptionFilter implements ExceptionFilter {\n  catch(exception: unknown, host: ArgumentsHost) {\n    const ctx = host.switchToHttp();\n    const response = ctx.getResponse<Response>();\n    \n    const status = exception instanceof HttpException\n      ? exception.getStatus()\n      : HttpStatus.INTERNAL_SERVER_ERROR;\n\n    response.status(status).json({\n      statusCode: status,\n      timestamp: new Date().toISOString(),\n      message: (exception as Error).message || 'Internal server error',\n    });\n  }\n}",
              "filename": "global-exception.filter.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Exception Filters (@Catch) catch all thrown errors and format standardized JSON output.",
                "Interceptors can measure method execution time, cache responses, or transform data.",
                "Global filters are registered with app.useGlobalFilters()."
              ]
            },
            {
              "type": "quiz",
              "question": "Which NestJS feature is specifically engineered to catch runtime exceptions and format uniform JSON error responses across the application?",
              "options": [
                "Pipes",
                "Middleware",
                "Providers",
                "Exception Filters (@Catch)"
              ],
              "answer": 3,
              "explanation": "Exception Filters catch thrown exceptions and format standardized JSON error structures with HTTP status codes."
            }
          ]
        }
      ]
    }
  ]
}
