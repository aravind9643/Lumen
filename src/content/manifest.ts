import type { Difficulty } from './types'
import type { IconName } from '../lib/icons'

export interface LessonMeta {
  slug: string
  title: string
  duration: number
}

export interface ChapterMeta {
  title: string
  lessons: LessonMeta[]
}

export interface TutorialMeta {
  slug: string
  title: string
  shortTitle?: string
  description: string
  category: string
  difficulty: Difficulty
  icon: IconName
  tags: string[]
  color: string
  updated: string
  chapters: ChapterMeta[]
}

export const androidKotlinMeta: TutorialMeta = {
  "slug": "android-kotlin",
  "title": "Native Android Development with Kotlin & Jetpack Compose",
  "shortTitle": "Android & Kotlin",
  "description": "Master modern Android development using Kotlin, declarative Jetpack Compose UIs, Coroutines, Flow, and clean MVVM architecture.",
  "category": "Mobile Development",
  "difficulty": "intermediate",
  "icon": "robot",
  "tags": [
    "Android",
    "Kotlin",
    "Jetpack Compose",
    "Coroutines",
    "Room",
    "MAD Architecture"
  ],
  "color": "#22c55e",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "introduction-and-setup",
          "title": "Introduction And Setup",
          "duration": 20
        },
        {
          "slug": "kotlin-basics",
          "title": "Kotlin Basics",
          "duration": 20
        },
        {
          "slug": "jetpack-compose-basics",
          "title": "Jetpack Compose Basics",
          "duration": 20
        },
        {
          "slug": "layouts-and-modifiers",
          "title": "Layouts And Modifiers",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "material-design-3",
          "title": "Material Design 3",
          "duration": 20
        },
        {
          "slug": "state-management",
          "title": "State Management",
          "duration": 20
        },
        {
          "slug": "navigation-in-compose",
          "title": "Navigation In Compose",
          "duration": 20
        },
        {
          "slug": "lists-and-lazy-layouts",
          "title": "Lists And Lazy Layouts",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "mvvm-architecture",
          "title": "MVVM Architecture",
          "duration": 20
        },
        {
          "slug": "network-retrofit-coroutines",
          "title": "Network Retrofit Coroutines",
          "duration": 20
        },
        {
          "slug": "data-persistence-room",
          "title": "Data Persistence Room",
          "duration": 20
        },
        {
          "slug": "dependency-injection-hilt",
          "title": "Dependency Injection Hilt",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "background-work-workmanager",
          "title": "Background Work WorkManager",
          "duration": 20
        },
        {
          "slug": "animations-and-graphics",
          "title": "Animations And Graphics",
          "duration": 20
        },
        {
          "slug": "testing-and-quality",
          "title": "Testing And Quality",
          "duration": 20
        },
        {
          "slug": "security-and-publishing",
          "title": "Security And Publishing",
          "duration": 20
        }
      ]
    }
  ]
}

export const angularMeta: TutorialMeta = {
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
  "chapters": [
    {
      "title": "Phase 1: Standalone Components & Modern Signals",
      "lessons": [
        {
          "slug": "standalone-components-and-signals",
          "title": "Standalone Components & Angular Signals",
          "duration": 25
        },
        {
          "slug": "dependency-injection-and-services",
          "title": "Modern Dependency Injection & inject() API",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 2: Reactive Forms, RxJS & Enterprise Routing",
      "lessons": [
        {
          "slug": "reactive-forms-and-validation",
          "title": "Type-Safe Reactive Forms & Validation",
          "duration": 25
        },
        {
          "slug": "rxjs-and-http-interceptors",
          "title": "RxJS Streams, Operators & HTTP Interceptors",
          "duration": 25
        }
      ]
    }
  ]
}

export const awsCloudMeta: TutorialMeta = {
  "slug": "aws-cloud",
  "title": "AWS Cloud Architecture & Solutions Engineering",
  "shortTitle": "AWS Cloud",
  "description": "Comprehensive AWS Solutions Architect path covering IAM security, EC2 compute, VPC networking, S3 object storage, and serverless Lambda architectures.",
  "category": "DevOps & Cloud",
  "difficulty": "intermediate",
  "icon": "chart",
  "tags": [
    "AWS",
    "Cloud",
    "EC2",
    "S3",
    "IAM",
    "VPC",
    "Lambda",
    "Serverless",
    "DevOps"
  ],
  "color": "#f59e0b",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "cloud-fundamentals",
          "title": "Cloud Fundamentals",
          "duration": 20
        },
        {
          "slug": "iam-security",
          "title": "IAM Security",
          "duration": 20
        },
        {
          "slug": "ec2-compute",
          "title": "EC2 Compute",
          "duration": 20
        },
        {
          "slug": "s3-storage",
          "title": "S3 Storage",
          "duration": 20
        },
        {
          "slug": "databases-rds-dynamodb",
          "title": "Databases RDS DynamoDB",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "vpc-networking",
          "title": "VPC Networking",
          "duration": 20
        },
        {
          "slug": "route53-cloudfront",
          "title": "Route53 CloudFront",
          "duration": 20
        },
        {
          "slug": "elb-autoscaling",
          "title": "ELB AutoScaling",
          "duration": 20
        },
        {
          "slug": "serverless-lambda",
          "title": "Serverless Lambda",
          "duration": 20
        },
        {
          "slug": "app-integration-sqs-sns",
          "title": "App Integration SQS SNS",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "monitoring-governance",
          "title": "Monitoring Governance",
          "duration": 20
        },
        {
          "slug": "security-services",
          "title": "Security Services",
          "duration": 20
        },
        {
          "slug": "infrastructure-as-code",
          "title": "Infrastructure As Code",
          "duration": 20
        },
        {
          "slug": "devops-ci-cd",
          "title": "DevOps CI CD",
          "duration": 20
        },
        {
          "slug": "containerization-ecs-eks-fargate",
          "title": "Containerization ECS EKS Fargate",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "big-data-analytics",
          "title": "Big Data Analytics",
          "duration": 20
        },
        {
          "slug": "migration-transfer",
          "title": "Migration Transfer",
          "duration": 20
        },
        {
          "slug": "well-architected-framework",
          "title": "Well Architected Framework",
          "duration": 20
        }
      ]
    }
  ]
}

export const azureCloudMeta: TutorialMeta = {
  "slug": "azure-cloud",
  "title": "Microsoft Azure Enterprise Cloud Architecture",
  "shortTitle": "Azure Cloud",
  "description": "Master Microsoft Azure from enterprise governance (Entra ID, RBAC) and VM Scale Sets to App Services, Blob Storage, and secure VNets.",
  "category": "DevOps & Cloud",
  "difficulty": "intermediate",
  "icon": "chart",
  "tags": [
    "Azure",
    "Cloud",
    "Entra ID",
    "Virtual Machines",
    "Blob Storage",
    "App Service"
  ],
  "color": "#2563eb",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "azure-fundamentals",
          "title": "Azure Fundamentals",
          "duration": 20
        },
        {
          "slug": "entra-id-governance",
          "title": "Entra ID Governance",
          "duration": 20
        },
        {
          "slug": "compute-virtual-machines",
          "title": "Compute Virtual Machines",
          "duration": 20
        },
        {
          "slug": "storage-accounts-blobs",
          "title": "Storage Accounts Blobs",
          "duration": 20
        },
        {
          "slug": "databases-sql-cosmosdb",
          "title": "Databases SQL CosmosDB",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "vnet-networking",
          "title": "VNet Networking",
          "duration": 20
        },
        {
          "slug": "containers-aks",
          "title": "Containers AKS",
          "duration": 20
        },
        {
          "slug": "serverless-functions",
          "title": "Serverless Functions",
          "duration": 20
        },
        {
          "slug": "data-analytics-synapse",
          "title": "Data Analytics Synapse",
          "duration": 20
        },
        {
          "slug": "security-keyvault",
          "title": "Security KeyVault",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "monitoring-azure-monitor",
          "title": "Monitoring Azure Monitor",
          "duration": 20
        },
        {
          "slug": "infrastructure-as-code-bicep",
          "title": "Infrastructure As Code Bicep",
          "duration": 20
        },
        {
          "slug": "devops-github-actions",
          "title": "DevOps GitHub Actions",
          "duration": 20
        },
        {
          "slug": "architecture-framework-caf",
          "title": "Architecture Framework CAF",
          "duration": 20
        },
        {
          "slug": "azure-openai-ai-services",
          "title": "Azure OpenAI AI Services",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "hybrid-cloud-azure-arc",
          "title": "Hybrid Cloud Azure Arc",
          "duration": 20
        },
        {
          "slug": "external-identities-b2c",
          "title": "External Identities B2C",
          "duration": 20
        },
        {
          "slug": "advanced-network-security",
          "title": "Advanced Network Security",
          "duration": 20
        }
      ]
    }
  ]
}

export const cssMeta: TutorialMeta = {
  "slug": "css",
  "title": "CSS3 & Modern Layouts: Flexbox, Grid & Animations",
  "shortTitle": "CSS3",
  "description": "Master modern CSS layout systems, Flexbox, CSS Grid, Cascade Layers, Custom Properties, container queries, and GPU-accelerated transitions.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "palette",
  "tags": [
    "CSS3",
    "Flexbox",
    "CSS Grid",
    "Responsive",
    "Animations",
    "Design Systems"
  ],
  "color": "#264de4",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Box Model & Modern Layouts",
      "lessons": [
        {
          "slug": "box-model-and-custom-properties",
          "title": "The CSS Box Model & Custom Properties",
          "duration": 25
        },
        {
          "slug": "flexbox-deep-dive",
          "title": "Flexbox Architecture: 1D Alignment & Distribution",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 2: CSS Grid & Fluid Animations",
      "lessons": [
        {
          "slug": "css-grid-mastery",
          "title": "CSS Grid Mastery: 2D Complex Layout Systems",
          "duration": 30
        },
        {
          "slug": "animations-and-transitions",
          "title": "Hardware-Accelerated Transitions & Keyframes",
          "duration": 20
        }
      ]
    }
  ]
}

export const dockerContainersMeta: TutorialMeta = {
  "slug": "docker-containers",
  "title": "Docker Containerization & Orchestration Mastery",
  "shortTitle": "Docker Containers",
  "description": "From Linux namespaces and cgroups to multi-stage Dockerfiles, Docker Compose networking, persistent storage, and production orchestration.",
  "category": "DevOps & Cloud",
  "difficulty": "intermediate",
  "icon": "chart",
  "tags": [
    "Docker",
    "Containers",
    "DevOps",
    "Docker Compose",
    "Multi-stage Builds",
    "Networking"
  ],
  "color": "#0ea5e9",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "docker-fundamentals",
          "title": "Docker Fundamentals",
          "duration": 20
        },
        {
          "slug": "docker-introduction",
          "title": "Docker Introduction",
          "duration": 20
        },
        {
          "slug": "images-and-containers",
          "title": "Images And Containers",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "dockerfile-deep-dive",
          "title": "Dockerfile Deep Dive",
          "duration": 20
        },
        {
          "slug": "volumes-and-storage",
          "title": "Volumes And Storage",
          "duration": 20
        },
        {
          "slug": "networking",
          "title": "Networking",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "docker-compose",
          "title": "Docker Compose",
          "duration": 20
        },
        {
          "slug": "registry-and-cicd",
          "title": "Registry And CICD",
          "duration": 20
        },
        {
          "slug": "commands-cheatsheet",
          "title": "Commands Cheatsheet",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "troubleshooting-and-production",
          "title": "Troubleshooting And Production",
          "duration": 20
        }
      ]
    }
  ]
}

export const dotnetCoreMeta: TutorialMeta = {
  "slug": "dotnet-core",
  "title": "C# & .NET Core Enterprise Systems Architecture",
  "shortTitle": ".NET Core",
  "description": "Build enterprise-grade Web APIs, microservices, and high-throughput systems with modern C#, ASP.NET Core, and Entity Framework Core.",
  "category": "Backend & Enterprise",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Entity Framework",
    "LINQ",
    "Architecture"
  ],
  "color": "#8b5cf6",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "csharp-basics",
          "title": "CSharp Basics",
          "duration": 20
        },
        {
          "slug": "csharp-oop",
          "title": "CSharp OOP",
          "duration": 20
        },
        {
          "slug": "control-flow",
          "title": "Control Flow",
          "duration": 20
        },
        {
          "slug": "csharp-advanced-linq",
          "title": "CSharp Advanced LINQ",
          "duration": 20
        },
        {
          "slug": "data-structures",
          "title": "Data Structures",
          "duration": 20
        },
        {
          "slug": "asp-net-core-fundamentals",
          "title": "ASP NET Core Fundamentals",
          "duration": 20
        },
        {
          "slug": "methods",
          "title": "Methods",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "oop",
          "title": "OOP",
          "duration": 20
        },
        {
          "slug": "web-api-development",
          "title": "Web API Development",
          "duration": 20
        },
        {
          "slug": "entity-framework-core",
          "title": "Entity Framework Core",
          "duration": 20
        },
        {
          "slug": "strings-and-linq",
          "title": "Strings And LINQ",
          "duration": 20
        },
        {
          "slug": "generics-delegates-events",
          "title": "Generics Delegates Events",
          "duration": 20
        },
        {
          "slug": "identity-security-jwt",
          "title": "Identity Security JWT",
          "duration": 20
        },
        {
          "slug": "linq",
          "title": "LINQ",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "testing-xunit",
          "title": "Testing XUnit",
          "duration": 20
        },
        {
          "slug": "async-and-multithreading",
          "title": "Async And Multithreading",
          "duration": 20
        },
        {
          "slug": "clean-architecture-patterns",
          "title": "Clean Architecture Patterns",
          "duration": 20
        },
        {
          "slug": "file-io-and-serialization",
          "title": "File IO And Serialization",
          "duration": 20
        },
        {
          "slug": "microservices-deployment",
          "title": "Microservices Deployment",
          "duration": 20
        },
        {
          "slug": "aspnet-core-basics",
          "title": "ASPNET Core Basics",
          "duration": 20
        },
        {
          "slug": "web-api",
          "title": "Web API",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "entity-framework-core",
          "title": "Entity Framework Core",
          "duration": 20
        },
        {
          "slug": "auth-and-security",
          "title": "Auth And Security",
          "duration": 20
        },
        {
          "slug": "di-and-middleware",
          "title": "DI And Middleware",
          "duration": 20
        },
        {
          "slug": "design-patterns-and-solid",
          "title": "Design Patterns And SOLID",
          "duration": 20
        },
        {
          "slug": "testing",
          "title": "Testing",
          "duration": 20
        },
        {
          "slug": "deployment-and-devops",
          "title": "Deployment And DevOps",
          "duration": 20
        }
      ]
    }
  ]
}

export const flutterDartMeta: TutorialMeta = {
  "slug": "flutter-dart",
  "title": "Cross-Platform Mobile Development with Flutter & Dart",
  "shortTitle": "Flutter & Dart",
  "description": "Build native cross-platform iOS and Android applications with Google Flutter, Dart language, sound null safety, and BLoC state management.",
  "category": "Mobile Development",
  "difficulty": "intermediate",
  "icon": "robot",
  "tags": [
    "Flutter",
    "Dart",
    "Mobile",
    "iOS",
    "Android",
    "State Management",
    "BLoC"
  ],
  "color": "#0284c7",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "dart-language",
          "title": "Dart Language",
          "duration": 20
        },
        {
          "slug": "introduction-and-setup",
          "title": "Introduction And Setup",
          "duration": 20
        },
        {
          "slug": "widgets-stateless-stateful",
          "title": "Widgets Stateless Stateful",
          "duration": 20
        },
        {
          "slug": "layout-and-positioning",
          "title": "Layout And Positioning",
          "duration": 20
        },
        {
          "slug": "design-material-cupertino",
          "title": "Design Material Cupertino",
          "duration": 20
        },
        {
          "slug": "state-management-basics",
          "title": "State Management Basics",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "navigation-and-routing",
          "title": "Navigation And Routing",
          "duration": 20
        },
        {
          "slug": "lists-and-builders",
          "title": "Lists And Builders",
          "duration": 20
        },
        {
          "slug": "input-and-forms",
          "title": "Input And Forms",
          "duration": 20
        },
        {
          "slug": "state-management-advanced",
          "title": "State Management Advanced",
          "duration": 20
        },
        {
          "slug": "network-and-apis",
          "title": "Network And APIs",
          "duration": 20
        },
        {
          "slug": "animations-and-transitions",
          "title": "Animations And Transitions",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "native-features-and-plugins",
          "title": "Native Features And Plugins",
          "duration": 20
        },
        {
          "slug": "local-storage-persistence",
          "title": "Local Storage Persistence",
          "duration": 20
        },
        {
          "slug": "testing-and-quality",
          "title": "Testing And Quality",
          "duration": 20
        },
        {
          "slug": "publishing-and-deployment",
          "title": "Publishing And Deployment",
          "duration": 20
        },
        {
          "slug": "advanced-patterns-riverpod-bloc",
          "title": "Advanced Patterns Riverpod Bloc",
          "duration": 20
        },
        {
          "slug": "firebase-for-flutter",
          "title": "Firebase For Flutter",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "clean-architecture-ddd",
          "title": "Clean Architecture DDD",
          "duration": 20
        },
        {
          "slug": "advanced-dart-isolates",
          "title": "Advanced Dart Isolates",
          "duration": 20
        },
        {
          "slug": "ci-cd-store-optimization",
          "title": "CI CD Store Optimization",
          "duration": 20
        }
      ]
    }
  ]
}

export const googleCloudMeta: TutorialMeta = {
  "slug": "google-cloud",
  "title": "Google Cloud Platform (GCP) Architecture & Big Data",
  "shortTitle": "Google Cloud (GCP)",
  "description": "Explore Google Cloud infrastructure: Compute Engine, Cloud Storage, VPC networks, BigQuery analytics, and Vertex AI systems.",
  "category": "DevOps & Cloud",
  "difficulty": "intermediate",
  "icon": "chart",
  "tags": [
    "GCP",
    "Google Cloud",
    "Compute Engine",
    "Cloud Storage",
    "BigQuery",
    "GKE",
    "IAM"
  ],
  "color": "#ea580c",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "introduction-hierarchy",
          "title": "Introduction Hierarchy",
          "duration": 20
        },
        {
          "slug": "iam-security",
          "title": "IAM Security",
          "duration": 20
        },
        {
          "slug": "compute-engine",
          "title": "Compute Engine",
          "duration": 20
        },
        {
          "slug": "cloud-storage",
          "title": "Cloud Storage",
          "duration": 20
        },
        {
          "slug": "databases-sql-firestore",
          "title": "Databases SQL Firestore",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "vpc-networking",
          "title": "VPC Networking",
          "duration": 20
        },
        {
          "slug": "containers-gke",
          "title": "Containers GKE",
          "duration": 20
        },
        {
          "slug": "serverless-cloudrun",
          "title": "Serverless CloudRun",
          "duration": 20
        },
        {
          "slug": "big-data-bigquery",
          "title": "Big Data BigQuery",
          "duration": 20
        },
        {
          "slug": "data-integration-pubsub",
          "title": "Data Integration PubSub",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "monitoring-logging",
          "title": "Monitoring Logging",
          "duration": 20
        },
        {
          "slug": "security-services",
          "title": "Security Services",
          "duration": 20
        },
        {
          "slug": "infrastructure-as-code",
          "title": "Infrastructure As Code",
          "duration": 20
        },
        {
          "slug": "devops-ci-cd",
          "title": "DevOps CI CD",
          "duration": 20
        },
        {
          "slug": "ai-machine-learning-vertex",
          "title": "AI Machine Learning Vertex",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "generative-ai-gemini",
          "title": "Generative AI Gemini",
          "duration": 20
        },
        {
          "slug": "hybrid-cloud-anthos",
          "title": "Hybrid Cloud Anthos",
          "duration": 20
        },
        {
          "slug": "architecture-framework",
          "title": "Architecture Framework",
          "duration": 20
        }
      ]
    }
  ]
}

export const generativeAiMeta: TutorialMeta = {
  "slug": "generative-ai",
  "title": "GenAI Engineer: Zero to Job-Ready",
  "shortTitle": "Generative AI",
  "description": "From zero background to job-ready GenAI Engineer: complete hands-on guide to LLM architecture, prompt engineering, RAG, fine-tuning, AI agents, production deployment, and interview preparation.",
  "category": "Artificial Intelligence",
  "difficulty": "beginner",
  "icon": "brain",
  "tags": [
    "AI",
    "LLM",
    "RAG",
    "Agents",
    "Fine-Tuning",
    "PyTorch",
    "vLLM",
    "LangChain"
  ],
  "color": "#6366f1",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1 — Foundations (Weeks 1–8)",
      "lessons": [
        {
          "slug": "python-and-math-foundations",
          "title": "Module 1: Python & Math Foundations",
          "duration": 25
        },
        {
          "slug": "machine-learning-basics",
          "title": "Module 2: Machine Learning Basics",
          "duration": 20
        },
        {
          "slug": "deep-learning-and-neural-networks",
          "title": "Module 3: Deep Learning & Neural Networks",
          "duration": 25
        },
        {
          "slug": "nlp-fundamentals",
          "title": "Module 4: NLP Fundamentals",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2 — Core GenAI (Weeks 9–20)",
      "lessons": [
        {
          "slug": "transformer-architecture",
          "title": "Module 5: Transformer Architecture",
          "duration": 30
        },
        {
          "slug": "large-language-models",
          "title": "Module 6: Large Language Models (LLMs)",
          "duration": 25
        },
        {
          "slug": "prompt-engineering",
          "title": "Module 7: Prompt Engineering",
          "duration": 20
        },
        {
          "slug": "fine-tuning-llms",
          "title": "Module 8: Fine-Tuning LLMs",
          "duration": 25
        },
        {
          "slug": "rag-and-vector-databases",
          "title": "Module 9: RAG & Vector Databases",
          "duration": 30
        },
        {
          "slug": "langchain-and-frameworks",
          "title": "Module 10: LangChain & Frameworks",
          "duration": 25
        },
        {
          "slug": "ai-agents",
          "title": "Module 11: AI Agents",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 3 — Production (Weeks 21–26)",
      "lessons": [
        {
          "slug": "deployment-and-mlops",
          "title": "Module 12: Deployment & MLOps",
          "duration": 25
        },
        {
          "slug": "evaluation-and-testing",
          "title": "Module 16: Evaluation Metrics & Testing",
          "duration": 20
        },
        {
          "slug": "security-and-guardrails",
          "title": "Module 17: Security & Guardrails",
          "duration": 20
        },
        {
          "slug": "model-serving-and-infrastructure",
          "title": "Module 18: Model Serving & Infrastructure",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 4 — Career (Weeks 27–30)",
      "lessons": [
        {
          "slug": "advanced-topics",
          "title": "Module 13: Advanced Topics",
          "duration": 25
        },
        {
          "slug": "capstone-projects",
          "title": "Module 14: Capstone Projects",
          "duration": 30
        },
        {
          "slug": "interview-preparation",
          "title": "Module 15: Interview Preparation",
          "duration": 35
        }
      ]
    }
  ]
}

export const htmlMeta: TutorialMeta = {
  "slug": "html",
  "title": "HTML5 & Modern Web Semantics: Zero to Mastery",
  "shortTitle": "HTML5",
  "description": "Master semantic markup, modern document structure, accessible forms, audio/video integration, and SEO best practices from first principles.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "HTML5",
    "Web Standards",
    "Accessibility",
    "SEO",
    "Forms",
    "Semantic Web"
  ],
  "color": "#e34f26",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Document Structure",
      "lessons": [
        {
          "slug": "document-structure-and-metadata",
          "title": "HTML5 Document Structure & Metadata",
          "duration": 20
        },
        {
          "slug": "semantic-elements-and-hierarchy",
          "title": "Semantic Elements & Content Hierarchy",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 2: Forms, Media & Web Accessibility",
      "lessons": [
        {
          "slug": "modern-forms-and-validation",
          "title": "Modern Forms, Input Types & Native Validation",
          "duration": 25
        },
        {
          "slug": "multimedia-and-canvas",
          "title": "Responsive Images, Video & Canvas Graphics",
          "duration": 20
        }
      ]
    }
  ]
}

export const ionicCapacitorMeta: TutorialMeta = {
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
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "introduction-and-setup",
          "title": "Introduction And Setup",
          "duration": 20
        },
        {
          "slug": "core-components",
          "title": "Core Components",
          "duration": 20
        },
        {
          "slug": "layout-and-grid",
          "title": "Layout And Grid",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "navigation-and-routing",
          "title": "Navigation And Routing",
          "duration": 20
        },
        {
          "slug": "overlays-and-feedback",
          "title": "Overlays And Feedback",
          "duration": 20
        },
        {
          "slug": "forms-and-inputs",
          "title": "Forms And Inputs",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "capacitor-native-apis",
          "title": "Capacitor Native APIs",
          "duration": 20
        },
        {
          "slug": "theming-and-adaptive-ui",
          "title": "Theming And Adaptive UI",
          "duration": 20
        },
        {
          "slug": "storage-and-offline",
          "title": "Storage And Offline",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "build-and-deployment",
          "title": "Build And Deployment",
          "duration": 20
        }
      ]
    }
  ]
}

export const javaEnterpriseMeta: TutorialMeta = {
  "slug": "java-enterprise",
  "title": "Java Programming & Spring Boot Enterprise Architecture",
  "shortTitle": "Java Enterprise",
  "description": "Master Core Java, JVM internals, Object-Oriented design patterns, Spring Boot microservices, and enterprise JPA persistence.",
  "category": "Backend & Enterprise",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Java",
    "Spring Boot",
    "OOP",
    "JVM",
    "Microservices",
    "Hibernate",
    "Enterprise"
  ],
  "color": "#f97316",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "java-basics",
          "title": "Java Basics",
          "duration": 20
        },
        {
          "slug": "control-flow",
          "title": "Control Flow",
          "duration": 20
        },
        {
          "slug": "arrays-and-collections",
          "title": "Arrays And Collections",
          "duration": 20
        },
        {
          "slug": "methods",
          "title": "Methods",
          "duration": 20
        },
        {
          "slug": "oop",
          "title": "OOP",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "strings-and-exceptions",
          "title": "Strings And Exceptions",
          "duration": 20
        },
        {
          "slug": "generics-and-collections",
          "title": "Generics And Collections",
          "duration": 20
        },
        {
          "slug": "functional-and-streams",
          "title": "Functional And Streams",
          "duration": 20
        },
        {
          "slug": "concurrency",
          "title": "Concurrency",
          "duration": 20
        },
        {
          "slug": "file-io",
          "title": "File IO",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "spring-boot-basics",
          "title": "Spring Boot Basics",
          "duration": 20
        },
        {
          "slug": "rest-api",
          "title": "REST API",
          "duration": 20
        },
        {
          "slug": "spring-data-jpa",
          "title": "Spring Data JPA",
          "duration": 20
        },
        {
          "slug": "security",
          "title": "Security",
          "duration": 20
        },
        {
          "slug": "di-and-aop",
          "title": "DI And AOP",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "design-patterns",
          "title": "Design Patterns",
          "duration": 20
        },
        {
          "slug": "testing",
          "title": "Testing",
          "duration": 20
        },
        {
          "slug": "deployment",
          "title": "Deployment",
          "duration": 20
        }
      ]
    }
  ]
}

export const javascriptMeta: TutorialMeta = {
  "slug": "javascript",
  "title": "Modern JavaScript: ES6+, Async Patterns & DOM",
  "shortTitle": "JavaScript",
  "description": "Deep dive into modern JavaScript engineering: closures, prototypes, event loops, Promises, async/await, ES modules, and modern web APIs.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "JavaScript",
    "ES6+",
    "Async",
    "Event Loop",
    "Closures",
    "Promises",
    "DOM"
  ],
  "color": "#f7df1e",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Language Primitives & Closures",
      "lessons": [
        {
          "slug": "scope-closures-and-execution-context",
          "title": "Execution Context, Scope Chains & Closures",
          "duration": 25
        },
        {
          "slug": "prototypes-and-modern-classes",
          "title": "Prototypes, Inheritance & ES6 Classes",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 2: Asynchronous Event Loop & Web APIs",
      "lessons": [
        {
          "slug": "event-loop-and-microtasks",
          "title": "The Event Loop, Microtasks & Macrotasks",
          "duration": 30
        },
        {
          "slug": "async-await-and-fetch",
          "title": "Promises, Async/Await & Modern Fetch API",
          "duration": 25
        }
      ]
    }
  ]
}

export const nestjsMeta: TutorialMeta = {
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
  "chapters": [
    {
      "title": "Phase 1: Modular Architecture & Controllers",
      "lessons": [
        {
          "slug": "modules-controllers-and-providers",
          "title": "Modular Architecture, Controllers & Providers",
          "duration": 25
        },
        {
          "slug": "pipes-guards-and-interceptors",
          "title": "Pipes (Validation), Guards (Auth) & Interceptors",
          "duration": 25
        }
      ]
    }
  ]
}

export const nextjsMeta: TutorialMeta = {
  "slug": "nextjs",
  "title": "Next.js & React Server Components: Full-Stack Web",
  "shortTitle": "Next.js",
  "description": "Master full-stack React with Next.js App Router, React Server Components (RSC), Server Actions, dynamic routing, caching, and Vercel edge deployment.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "sparkles",
  "tags": [
    "Next.js",
    "App Router",
    "RSC",
    "Server Actions",
    "SSR",
    "Full-Stack"
  ],
  "color": "#000000",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: App Router & Server Components",
      "lessons": [
        {
          "slug": "app-router-and-rsc-architecture",
          "title": "App Router & React Server Components (RSC)",
          "duration": 25
        },
        {
          "slug": "server-actions-and-data-mutations",
          "title": "Server Actions, Forms & Revalidation",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 2: Caching, Middleware & Edge Deployment",
      "lessons": [
        {
          "slug": "caching-and-data-fetching",
          "title": "Next.js Caching Architecture & Data Fetching",
          "duration": 25
        },
        {
          "slug": "middleware-and-edge-routes",
          "title": "Middleware, Route Handlers & Edge Execution",
          "duration": 20
        }
      ]
    }
  ]
}

export const nodejsMeta: TutorialMeta = {
  "slug": "nodejs",
  "title": "Node.js & Express: Backend Architecture & APIs",
  "shortTitle": "Node.js",
  "description": "Master backend web development: Node.js runtime, Event Loop, Streams, Buffers, Express REST APIs, middleware pipelines, JWT auth, and database ORMs.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Node.js",
    "Express",
    "Backend",
    "REST API",
    "JWT",
    "PostgreSQL",
    "Prisma"
  ],
  "color": "#339933",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Node.js Runtime & Express Foundations",
      "lessons": [
        {
          "slug": "nodejs-runtime-and-streams",
          "title": "Node.js Runtime, Event Loop & Streams",
          "duration": 25
        },
        {
          "slug": "express-rest-api-architecture",
          "title": "Express Server, Middleware & REST Architecture",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 2: Authentication, Security & Database ORM",
      "lessons": [
        {
          "slug": "jwt-authentication-and-security",
          "title": "JWT Authentication, Password Hashing & Security",
          "duration": 30
        },
        {
          "slug": "database-integration-prisma",
          "title": "Database Persistence with PostgreSQL & Prisma ORM",
          "duration": 25
        }
      ]
    }
  ]
}

export const pythonProgrammingMeta: TutorialMeta = {
  "slug": "python-programming",
  "title": "Mastering Modern Python: Zero to Advanced",
  "shortTitle": "Python Programming",
  "description": "A complete, zero-to-advanced path covering core Python syntax, data structures, OOP, advanced internals, async concurrency, data science, web development, and cloud automation.",
  "category": "Programming",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "Python",
    "OOP",
    "Data Structures",
    "AsyncIO",
    "Data Science",
    "FastAPI",
    "Django"
  ],
  "color": "#0ea5e9",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Chapter 1: Python Fundamentals (Beginner)",
      "lessons": [
        {
          "slug": "python-basics-and-syntax",
          "title": "Python Basics: Variables, Types & Syntax",
          "duration": 20
        },
        {
          "slug": "data-structures",
          "title": "Data Structures: Lists, Tuples, Dicts & Sets",
          "duration": 25
        },
        {
          "slug": "control-flow",
          "title": "Control Flow: Conditionals, Loops & Match/Case",
          "duration": 20
        },
        {
          "slug": "functions-and-scope",
          "title": "Functions, Arguments, Scope & Closures",
          "duration": 20
        },
        {
          "slug": "strings-and-text",
          "title": "Strings, Formatting, Slices & Regex",
          "duration": 15
        }
      ]
    },
    {
      "title": "Chapter 2: Object-Oriented & Modular Python (Intermediate)",
      "lessons": [
        {
          "slug": "object-oriented-programming",
          "title": "Object-Oriented Programming (OOP) & Dunder Methods",
          "duration": 25
        },
        {
          "slug": "files-and-error-handling",
          "title": "File Operations, Context Managers & Exception Handling",
          "duration": 20
        },
        {
          "slug": "modules-packages-and-environments",
          "title": "Modules, Packages, Virtual Environments & Pip",
          "duration": 15
        },
        {
          "slug": "functional-programming",
          "title": "Functional Python: Comprehensions, Map/Filter & Itertools",
          "duration": 20
        },
        {
          "slug": "standard-library-essentials",
          "title": "Python Standard Library: Collections, Datetime & Pathlib",
          "duration": 25
        }
      ]
    },
    {
      "title": "Chapter 3: Advanced Python & Systems (Advanced)",
      "lessons": [
        {
          "slug": "advanced-python-constructs",
          "title": "Advanced Python: Generators, Decorators & Metaclasses",
          "duration": 25
        },
        {
          "slug": "concurrency-and-asyncio",
          "title": "Concurrency: Threading, Multiprocessing & AsyncIO",
          "duration": 25
        },
        {
          "slug": "type-hints-and-testing",
          "title": "Type Hints, Pydantic, Pytest & Mocking",
          "duration": 20
        },
        {
          "slug": "cpython-internals-and-performance",
          "title": "CPython Internals, The GIL, Memory & Profiling",
          "duration": 25
        },
        {
          "slug": "python-best-practices-and-design-patterns",
          "title": "Python Best Practices, PEP 8 & Design Patterns",
          "duration": 20
        }
      ]
    },
    {
      "title": "Chapter 4: Web Development & APIs (Professional)",
      "lessons": [
        {
          "slug": "apis-http-and-web-scraping",
          "title": "APIs, HTTP Requests & Web Scraping",
          "duration": 25
        },
        {
          "slug": "database-and-sql-orm",
          "title": "Databases, SQL & SQLAlchemy ORM",
          "duration": 25
        },
        {
          "slug": "fastapi-and-modern-apis",
          "title": "FastAPI: High-Performance Async APIs & Validation",
          "duration": 25
        },
        {
          "slug": "flask-microframework",
          "title": "Flask Microframework: Routing, Templates & Blueprints",
          "duration": 25
        },
        {
          "slug": "django-enterprise-framework",
          "title": "Django: MVT Architecture, ORM, Admin & REST Framework",
          "duration": 30
        }
      ]
    },
    {
      "title": "Chapter 5: Data Science, Cloud & Big Data (Specialized)",
      "lessons": [
        {
          "slug": "numpy-numerical-computing",
          "title": "NumPy: Numerical Computing & Array Vectorization",
          "duration": 20
        },
        {
          "slug": "pandas-data-analysis",
          "title": "Pandas: DataFrames, Cleaning, GroupBy & Merges",
          "duration": 25
        },
        {
          "slug": "data-visualization-and-eda",
          "title": "Data Visualization & Exploratory Data Analysis (EDA)",
          "duration": 25
        },
        {
          "slug": "scikit-learn-machine-learning",
          "title": "Machine Learning with Scikit-Learn: Pipelines & Models",
          "duration": 30
        },
        {
          "slug": "cloud-automation-with-boto3",
          "title": "Cloud Automation with AWS Boto3 & Serverless Lambda",
          "duration": 25
        },
        {
          "slug": "big-data-with-pyspark",
          "title": "Big Data Processing with PySpark & Distributed DataFrames",
          "duration": 25
        }
      ]
    }
  ]
}

export const reactNativeMeta: TutorialMeta = {
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
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "core-components",
          "title": "Core Components",
          "duration": 20
        },
        {
          "slug": "introduction-and-setup",
          "title": "Introduction And Setup",
          "duration": 20
        },
        {
          "slug": "core-components-and-styling",
          "title": "Core Components And Styling",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "layout-and-flexbox",
          "title": "Layout And Flexbox",
          "duration": 20
        },
        {
          "slug": "handling-input-and-events",
          "title": "Handling Input And Events",
          "duration": 20
        },
        {
          "slug": "navigation-react-navigation",
          "title": "Navigation React Navigation",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "lists-and-performance",
          "title": "Lists And Performance",
          "duration": 20
        },
        {
          "slug": "device-features-and-apis",
          "title": "Device Features And APIs",
          "duration": 20
        },
        {
          "slug": "context-and-global-state",
          "title": "Context And Global State",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "animations-and-gestures",
          "title": "Animations And Gestures",
          "duration": 20
        },
        {
          "slug": "publishing-and-deployment",
          "title": "Publishing And Deployment",
          "duration": 20
        }
      ]
    }
  ]
}

export const reactMeta: TutorialMeta = {
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
  "chapters": [
    {
      "title": "Phase 1: Component Fundamentals & State Reactivity",
      "lessons": [
        {
          "slug": "components-props-and-state",
          "title": "Component Architecture, Props & useState",
          "duration": 25
        },
        {
          "slug": "useeffect-and-lifecycle-synchronization",
          "title": "useEffect, Lifecycles & Synchronization",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 2: Advanced Hooks, Context & Performance",
      "lessons": [
        {
          "slug": "custom-hooks-usememo-usecallback",
          "title": "Custom Hooks, useMemo & useCallback",
          "duration": 30
        },
        {
          "slug": "context-api-and-global-state",
          "title": "Context API & Scalable State Architecture",
          "duration": 25
        }
      ]
    }
  ]
}

export const sqlDatabasesMeta: TutorialMeta = {
  "slug": "sql-databases",
  "title": "Relational Database Design, SQL & Query Optimization",
  "shortTitle": "SQL & Databases",
  "description": "A comprehensive journey into relational modeling, complex SQL queries, transactions, indexing internals, and query performance tuning.",
  "category": "Databases",
  "difficulty": "beginner",
  "icon": "chart",
  "tags": [
    "SQL",
    "PostgreSQL",
    "MySQL",
    "Database Design",
    "Indexing",
    "Transactions",
    "ACID"
  ],
  "color": "#3b82f6",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "introduction-and-setup",
          "title": "Introduction And Setup",
          "duration": 20
        },
        {
          "slug": "basic-queries-select",
          "title": "Basic Queries SELECT",
          "duration": 20
        },
        {
          "slug": "crud-operations",
          "title": "CRUD Operations",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "relational-design-normalization",
          "title": "Relational Design Normalization",
          "duration": 20
        },
        {
          "slug": "joins-merging-data",
          "title": "Joins Merging Data",
          "duration": 20
        },
        {
          "slug": "aggregate-functions-grouping",
          "title": "Aggregate Functions Grouping",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "subqueries-and-ctes",
          "title": "Subqueries And CTEs",
          "duration": 20
        },
        {
          "slug": "indexes-and-performance",
          "title": "Indexes And Performance",
          "duration": 20
        },
        {
          "slug": "transactions-and-acid",
          "title": "Transactions And ACID",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "stored-procedures-and-triggers",
          "title": "Stored Procedures And Triggers",
          "duration": 20
        }
      ]
    }
  ]
}

export const stockMarketMeta: TutorialMeta = {
  "slug": "stock-market",
  "title": "Financial Markets, Technical Analysis & Algorithmic Trading",
  "shortTitle": "Stock Markets",
  "description": "Master Indian financial markets (NSE/BSE), balance sheet fundamental analysis, candlestick technical patterns, and derivatives options trading.",
  "category": "Finance & Systems",
  "difficulty": "beginner",
  "icon": "chart",
  "tags": [
    "Financial Markets",
    "Stock Market",
    "NSE/BSE",
    "Technical Analysis",
    "Futures & Options",
    "Quantitative Finance"
  ],
  "color": "#14b8a6",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "market-basics-nse-bse",
          "title": "Market Basics NSE BSE",
          "duration": 20
        },
        {
          "slug": "core-terminology-ipos",
          "title": "Core Terminology IPOs",
          "duration": 20
        },
        {
          "slug": "fundamental-analysis-ratios",
          "title": "Fundamental Analysis Ratios",
          "duration": 20
        },
        {
          "slug": "financial-statements",
          "title": "Financial Statements",
          "duration": 20
        },
        {
          "slug": "technical-analysis-candlesticks",
          "title": "Technical Analysis Candlesticks",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "indicators-and-oscillators",
          "title": "Indicators And Oscillators",
          "duration": 20
        },
        {
          "slug": "derivatives-futures",
          "title": "Derivatives Futures",
          "duration": 20
        },
        {
          "slug": "derivatives-options",
          "title": "Derivatives Options",
          "duration": 20
        },
        {
          "slug": "investment-strategies",
          "title": "Investment Strategies",
          "duration": 20
        },
        {
          "slug": "risk-management-psychology",
          "title": "Risk Management Psychology",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "mutual-funds-taxation",
          "title": "Mutual Funds Taxation",
          "duration": 20
        },
        {
          "slug": "macroeconomics-global-markets",
          "title": "Macroeconomics Global Markets",
          "duration": 20
        },
        {
          "slug": "algo-trading-api-integration",
          "title": "Algo Trading API Integration",
          "duration": 20
        },
        {
          "slug": "intraday-trading-strategies",
          "title": "Intraday Trading Strategies",
          "duration": 20
        },
        {
          "slug": "swing-positional-trading",
          "title": "Swing Positional Trading",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "scalping-techniques",
          "title": "Scalping Techniques",
          "duration": 20
        },
        {
          "slug": "advanced-chart-patterns",
          "title": "Advanced Chart Patterns",
          "duration": 20
        }
      ]
    }
  ]
}

export const svelteMeta: TutorialMeta = {
  "slug": "svelte",
  "title": "Svelte & SvelteKit: Compiler-Driven Web Architecture",
  "shortTitle": "Svelte",
  "description": "Master Svelte and SvelteKit: Compiler philosophy, Runes reactivity ($state, $derived), Stores, component slots, and full-stack SvelteKit SSR.",
  "category": "Web Development",
  "difficulty": "intermediate",
  "icon": "code",
  "tags": [
    "Svelte",
    "SvelteKit",
    "Runes",
    "Reactivity",
    "Compiler",
    "SSR"
  ],
  "color": "#ff3e00",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Svelte Reactivity & Component Architecture",
      "lessons": [
        {
          "slug": "compiler-philosophy-and-runes",
          "title": "Compiler Philosophy & Svelte Runes Reactivity",
          "duration": 25
        },
        {
          "slug": "sveltekit-full-stack-architecture",
          "title": "SvelteKit: File-Based Routing, SSR & Form Actions",
          "duration": 25
        }
      ]
    }
  ]
}

export const tailwindcssMeta: TutorialMeta = {
  "slug": "tailwindcss",
  "title": "Tailwind CSS: Modern Design Systems & Styling",
  "shortTitle": "Tailwind CSS",
  "description": "Master utility-first styling: Responsive design, Dark mode, custom theme tokens, typography, CSS grid utilities, and scalable component architecture.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "palette",
  "tags": [
    "TailwindCSS",
    "CSS",
    "Design Systems",
    "Responsive",
    "Dark Mode",
    "UI"
  ],
  "color": "#38bdf8",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Utility-First Fundamentals & Layouts",
      "lessons": [
        {
          "slug": "utility-first-philosophy-and-layout",
          "title": "Utility-First Philosophy, Flexbox & Spacing",
          "duration": 20
        },
        {
          "slug": "responsive-variants-and-dark-mode",
          "title": "Responsive Breakpoints, Dark Mode & Theme Tokens",
          "duration": 20
        }
      ]
    }
  ]
}

export const typescriptMeta: TutorialMeta = {
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
  "chapters": [
    {
      "title": "Phase 1: Type Primitives, Interfaces & Narrowing",
      "lessons": [
        {
          "slug": "type-annotations-and-discriminated-unions",
          "title": "Discriminated Unions, Narrowing & Type Guards",
          "duration": 25
        },
        {
          "slug": "interfaces-vs-type-aliases",
          "title": "Interfaces, Types & Declaration Merging",
          "duration": 20
        }
      ]
    },
    {
      "title": "Phase 2: Generics, Conditional Types & Mapped Types",
      "lessons": [
        {
          "slug": "generics-and-type-constraints",
          "title": "Generics, Constraints & Utility Types",
          "duration": 30
        },
        {
          "slug": "conditional-and-mapped-types",
          "title": "Conditional Types, infer & Template Literals",
          "duration": 30
        }
      ]
    }
  ]
}

export const vueMeta: TutorialMeta = {
  "slug": "vue",
  "title": "Vue 3 & Composition API: Reactive UI Architecture",
  "shortTitle": "Vue.js",
  "description": "Master Vue 3: Composition API, ref/reactive, computed, watchers, component props/emits, Pinia state management, and Vue Router.",
  "category": "Web Development",
  "difficulty": "beginner",
  "icon": "code",
  "tags": [
    "Vue 3",
    "Composition API",
    "Pinia",
    "Vite",
    "Vue Router",
    "Reactivity"
  ],
  "color": "#42b883",
  "updated": "2026-08-17",
  "chapters": [
    {
      "title": "Phase 1: Composition API & Reactivity Core",
      "lessons": [
        {
          "slug": "composition-api-and-reactivity",
          "title": "Vue 3 Composition API: ref, reactive & computed",
          "duration": 25
        },
        {
          "slug": "components-props-and-emits",
          "title": "Component Architecture: Props, Emits & Slots",
          "duration": 25
        }
      ]
    },
    {
      "title": "Phase 2: State Management with Pinia & Vue Router",
      "lessons": [
        {
          "slug": "pinia-state-management",
          "title": "Global State Management with Pinia",
          "duration": 25
        },
        {
          "slug": "vue-router-and-composables",
          "title": "Vue Router, Navigation Guards & Custom Composables",
          "duration": 25
        }
      ]
    }
  ]
}

export const tutorialsMeta: TutorialMeta[] = [
  androidKotlinMeta,
  angularMeta,
  awsCloudMeta,
  azureCloudMeta,
  cssMeta,
  dockerContainersMeta,
  dotnetCoreMeta,
  flutterDartMeta,
  googleCloudMeta,
  generativeAiMeta,
  htmlMeta,
  ionicCapacitorMeta,
  javaEnterpriseMeta,
  javascriptMeta,
  nestjsMeta,
  nextjsMeta,
  nodejsMeta,
  pythonProgrammingMeta,
  reactNativeMeta,
  reactMeta,
  sqlDatabasesMeta,
  stockMarketMeta,
  svelteMeta,
  tailwindcssMeta,
  typescriptMeta,
  vueMeta
]

export const flatLessonsMeta = (tutorial: TutorialMeta) =>
  tutorial.chapters.flatMap((chapter) => chapter.lessons.map((lesson) => ({ chapter, lesson })))

export const totalLessonCount = tutorialsMeta.reduce(
  (sum, t) => sum + t.chapters.reduce((cSum, c) => cSum + c.lessons.length, 0),
  0,
)

export const allCategories = [...new Set(tutorialsMeta.map((t) => t.category))]

export const totalDuration = (tutorial: TutorialMeta) =>
  tutorial.chapters.flatMap((c) => c.lessons).reduce((sum, l) => sum + l.duration, 0)

export const lessonCount = (tutorial: TutorialMeta) =>
  tutorial.chapters.reduce((sum, c) => sum + c.lessons.length, 0)

export const tutorialsByCategory = (list: TutorialMeta[] = tutorialsMeta) => {
  const cats = [...new Set(list.map((t) => t.category))]
  return cats.map((category) => ({
    category,
    tutorials: list.filter((t) => t.category === category),
  }))
}

export const nextTutorial = (arg: string | TutorialMeta) => {
  const slug = typeof arg === 'string' ? arg : arg.slug
  const idx = tutorialsMeta.findIndex((t) => t.slug === slug)
  return idx >= 0 && idx < tutorialsMeta.length - 1 ? tutorialsMeta[idx + 1] : undefined
}

export const getTutorialMeta = (slug: string) => tutorialsMeta.find((t) => t.slug === slug)

export const getLessonMeta = (tutorialSlug: string, lessonSlug: string) => {
  const tutorial = getTutorialMeta(tutorialSlug)
  if (!tutorial) return null
  for (const chapter of tutorial.chapters) {
    const lesson = chapter.lessons.find((l) => l.slug === lessonSlug)
    if (lesson) return { tutorial, chapter, lesson }
  }
  return null
}
