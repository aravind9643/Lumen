import type { Tutorial } from '../types'

export const nestjsCourse: Tutorial = {
  "slug": "nestjs",
  "title": "NestJS Enterprise: Architecture, Microservices & APIs",
  "shortTitle": "NestJS",
  "description": "Master enterprise backend architecture with NestJS: Modular design, Controllers, Providers, Dependency Injection, Pipes, Guards, and Microservices.",
  "category": "Web Development",
  "difficulty": "advanced",
  "icon": "code",
  "tags": [
    "NestJS",
    "TypeScript",
    "Microservices",
    "Dependency Injection",
    "Backend",
    "Architecture"
  ],
  "color": "#e0234e",
  "updated": "2026-08-17",
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
      "title": "Phase 1: Modular Architecture & Controllers",
      "lessons": [
        {
          "slug": "modules-controllers-and-providers",
          "title": "Modular Architecture, Controllers & Providers",
          "description": "Master Modular Architecture, Controllers & Providers with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "NestJS is an opinionated, architectural framework inspired by Angular that uses decorators, modules, and inversion-of-control."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Controller, Get, Post, Body, Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class UsersService {\n  private users: string[] = ['Alice', 'Bob'];\n  findAll() { return this.users; }\n}\n\n@Controller('users')\nexport class UsersController {\n  constructor(private readonly usersService: UsersService) {}\n\n  @Get()\n  getUsers() { return this.usersService.findAll(); }\n}",
              "filename": "users.controller.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "@Module() encapsulates related controllers, providers, and exports.",
                "@Controller() maps HTTP request routes to handler methods.",
                "@Injectable() registers classes in the IoC dependency container."
              ]
            },
            {
              "type": "quiz",
              "question": "How does NestJS instantiate and inject dependencies into Controllers?",
              "options": [
                "Through Inversion of Control (IoC) and constructor-based Dependency Injection.",
                "By parsing global window objects at startup.",
                "By creating manual singleton global variables in index.js.",
                "By calling synchronous child processes on the server."
              ],
              "answer": 0,
              "explanation": "NestJS uses an IoC container for constructor-based dependency injection."
            }
          ]
        },
        {
          "slug": "pipes-guards-and-interceptors",
          "title": "Pipes (Validation), Guards (Auth) & Interceptors",
          "description": "Master Pipes (Validation), Guards (Auth) & Interceptors with practical examples, architectural deep dives, and key concepts.",
          "duration": 25,
          "blocks": [
            {
              "type": "paragraph",
              "text": "NestJS provides a cohesive request lifecycle pipeline using Pipes for DTO validation, Guards for auth authorization, and Interceptors for response transformation."
            },
            {
              "type": "code",
              "language": "typescript",
              "code": "import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(context: ExecutionContext): boolean {\n    const request = context.switchToHttp().getRequest();\n    return Boolean(request.headers['authorization']);\n  }\n}",
              "filename": "auth.guard.ts"
            },
            {
              "type": "keyPoints",
              "points": [
                "Pipes transform input data and validate DTO schemas using class-validator.",
                "Guards determine whether a given request should be handled by the route handler.",
                "Interceptors bind extra logic before or after method execution."
              ]
            },
            {
              "type": "quiz",
              "question": "In the NestJS request lifecycle, what is the role of a Guard?",
              "options": [
                "It compresses HTTP response bodies with gzip.",
                "It evaluates authentication and permission logic to decide if the request can proceed to the route handler.",
                "It manages database connection pooling.",
                "It renders HTML templates on the server."
              ],
              "answer": 1,
              "explanation": "Guards handle authentication and authorization access checks."
            }
          ]
        }
      ]
    }
  ]
}
