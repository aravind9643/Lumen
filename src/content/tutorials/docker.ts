import type { Tutorial } from '../types'

export const dockerContainers: Tutorial = {
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
  "prerequisites": [
    "Basic command line familiarity."
  ],
  "outcomes": [
    "Master container fundamentals (cgroups, namespaces, image layers)",
    "Write optimized, multi-stage Dockerfiles for minimal production images",
    "Orchestrate multi-container microservices with Docker Compose",
    "Manage container networking, volumes, and persistent storage"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "docker-fundamentals",
          "title": "Docker Fundamentals",
          "description": "Master Docker Fundamentals with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What Docker is and the problem it solves",
                "Containers vs Virtual Machines",
                "Docker architecture (daemon, client, registry)",
                "Installing and verifying Docker",
                "Core terminology"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is Docker?"
            },
            {
              "type": "paragraph",
              "text": "**Docker** is a platform that packages your application and ALL its dependencies (libraries, runtime, config files) into a single, portable unit called a **container**. This container runs identically on any machine — your laptop, your colleague's laptop, a test server, or production."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "The Problem Docker Solves"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Without Docker (\"It works on my machine!\" problem):\n  Developer's laptop: Python 3.11, Node 18, PostgreSQL 15\n  Test server:        Python 3.9,  Node 16, PostgreSQL 13\n  Production:         Python 3.10, Node 14, PostgreSQL 14\n  \n  Result: App works on dev machine, breaks everywhere else!\n  Debugging: \"Which dependency is different? Which config?\" → Hours wasted\n\nWith Docker:\n  Everything packaged in a container:\n    ┌─────────────────────────┐\n    │  Your App Code          │\n    │  Python 3.11            │\n    │  All pip packages       │\n    │  PostgreSQL client      │\n    │  Config files           │\n    │  OS libraries           │\n    └─────────────────────────┘\n  \n  This SAME container runs identically everywhere.\n  No more \"it works on my machine\" — it works EVERYWHERE."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": "Think of a shipping container. Before standardized containers, moving cargo between ships, trains, and trucks was a nightmare — different sizes, shapes, fragile items needed special handling. Shipping containers solved this by creating a standard unit that fits on any transport. Docker does the same for software."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Containers vs Virtual Machines"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Virtual Machine (VM)?"
            },
            {
              "type": "paragraph",
              "text": "A **Virtual Machine** is a complete simulation of a computer, running its own full operating system on top of a hypervisor (like VirtualBox or VMware)."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Container?"
            },
            {
              "type": "paragraph",
              "text": "A **Container** is a lightweight, isolated process that shares the host machine's OS kernel. It only contains the app and its dependencies — NOT a full operating system."
            },
            {
              "type": "code",
              "language": "text",
              "code": "Virtual Machines:                    Containers:\n┌──────┐ ┌──────┐ ┌──────┐         ┌──────┐ ┌──────┐ ┌──────┐\n│ App1 │ │ App2 │ │ App3 │         │ App1 │ │ App2 │ │ App3 │\n├──────┤ ├──────┤ ├──────┤         ├──────┤ ├──────┤ ├──────┤\n│ Bins │ │ Bins │ │ Bins │         │ Bins │ │ Bins │ │ Bins │\n├──────┤ ├──────┤ ├──────┤         └──────┴─┴──────┴─┴──────┘\n│Guest │ │Guest │ │Guest │         ┌────────────────────────┐\n│  OS  │ │  OS  │ │  OS  │         │     Docker Engine      │\n├──────┴─┴──────┴─┴──────┤         ├────────────────────────┤\n│       Hypervisor        │         │       Host OS          │\n├─────────────────────────┤         ├────────────────────────┤\n│       Host OS           │         │      Hardware          │\n├─────────────────────────┤         └────────────────────────┘\n│      Hardware           │\n└─────────────────────────┘\n\nEach VM: Full OS (~GB)               Each Container: Just app (~MB)\nBoot time: Minutes                    Boot time: Seconds\nHeavy on resources                    Lightweight"
            },
            {
              "type": "table",
              "headers": [
                "Feature",
                "Virtual Machine",
                "Container"
              ],
              "rows": [
                [
                  "**Size**",
                  "GBs (full OS)",
                  "MBs (app + deps only)",
                  ""
                ],
                [
                  "**Boot time**",
                  "Minutes",
                  "Seconds",
                  ""
                ],
                [
                  "**OS**",
                  "Each has its own full OS",
                  "Shares host OS kernel",
                  ""
                ],
                [
                  "**Isolation**",
                  "Complete hardware-level",
                  "Process-level",
                  ""
                ],
                [
                  "**Performance**",
                  "10-20% overhead",
                  "Near-native performance",
                  ""
                ],
                [
                  "**Use case**",
                  "Running different OS (Linux on Windows)",
                  "Packaging and deploying apps",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Docker Architecture"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Key Components"
            },
            {
              "type": "code",
              "language": "text",
              "code": "┌─────────────────────────────────────────────────────────┐\n│                     Your Terminal                        │\n│                  (Docker CLI Client)                     │\n└──────────────────────┬──────────────────────────────────┘\n                       │ REST API\n┌──────────────────────▼──────────────────────────────────┐\n│                   Docker Daemon                          │\n│                  (dockerd service)                       │\n│                                                          │\n│   ┌─────────┐   ┌─────────────┐   ┌──────────────┐     │\n│   │ Images  │   │ Containers  │   │  Networks    │     │\n│   └─────────┘   └─────────────┘   └──────────────┘     │\n│   ┌─────────┐                                           │\n│   │ Volumes │                                           │\n│   └─────────┘                                           │\n└──────────────────────┬──────────────────────────────────┘\n                       │ pull/push\n┌──────────────────────▼──────────────────────────────────┐\n│                   Docker Registry                        │\n│              (Docker Hub, ECR, GHCR)                     │\n│                                                          │\n│   nginx:alpine   python:3.11   node:20   postgres:16   │\n└─────────────────────────────────────────────────────────┘"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Docker Client"
            },
            {
              "type": "paragraph",
              "text": "**Docker Client** (`docker` command) is what you type commands into. It sends commands to the Docker Daemon via a REST API."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "docker run nginx     # Client sends \"run nginx\" to daemon\ndocker ps            # Client asks daemon \"list running containers\"\ndocker build .       # Client sends build context to daemon"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Docker Daemon"
            },
            {
              "type": "paragraph",
              "text": "**Docker Daemon** (`dockerd`) is the background service that does all the real work — building images, running containers, managing networks and volumes."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Docker Registry"
            },
            {
              "type": "paragraph",
              "text": "**Docker Registry** is a storage and distribution system for Docker images. **Docker Hub** is the default public registry (like GitHub but for Docker images)."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "docker pull nginx          # Downloads nginx image from Docker Hub\ndocker push myapp:v1       # Uploads your image to a registry"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.4 Core Terminology"
            },
            {
              "type": "table",
              "headers": [
                "Term",
                "Definition",
                "Analogy"
              ],
              "rows": [
                [
                  "**Image**",
                  "A read-only template containing the app, dependencies, and OS libraries",
                  "A recipe/blueprint",
                  ""
                ],
                [
                  "**Container**",
                  "A running instance of an image",
                  "A dish made from the recipe",
                  ""
                ],
                [
                  "**Dockerfile**",
                  "A text file with instructions to build an image",
                  "The recipe instructions",
                  ""
                ],
                [
                  "**Registry**",
                  "A storage for Docker images",
                  "A cookbook library",
                  ""
                ],
                [
                  "**Tag**",
                  "A version label for an image (e.g., `nginx:1.25`)",
                  "Edition number of a book",
                  ""
                ],
                [
                  "**Layer**",
                  "Each instruction in a Dockerfile creates a layer; layers are cached",
                  "Pages of a recipe",
                  ""
                ],
                [
                  "**Volume**",
                  "Persistent storage that survives container restarts",
                  "A USB drive for the container",
                  ""
                ],
                [
                  "**Network**",
                  "A virtual network that allows containers to communicate",
                  "An office LAN",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Image vs Container"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Image (blueprint):                Container (running instance):\n  - Read-only                       - Read-write\n  - Stored on disk                  - Running process\n  - Can create many containers      - Created from ONE image\n  - Shared layers                   - Has its own writable layer\n\n  nginx image ─┬──→ Container 1 (website A, port 8080)\n               ├──→ Container 2 (website B, port 8081)\n               └──→ Container 3 (website C, port 8082)\n               \n  One image → many containers (like one class → many objects in OOP)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.5 Installing Docker"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Docker Desktop (Windows/Mac)"
            },
            {
              "type": "code",
              "language": "text",
              "code": "1. Download from: https://www.docker.com/products/docker-desktop\n2. Run the installer\n3. Restart your computer\n4. Open terminal and verify:"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Verify installation\ndocker version          # Shows client and server versions\ndocker info             # Shows system-wide Docker information\n\n# Run your first container!\ndocker run hello-world  # Downloads and runs a test container"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What Happens When You Run `docker run hello-world`?"
            },
            {
              "type": "code",
              "language": "text",
              "code": "1. Docker client sends \"run hello-world\" to Docker daemon\n2. Daemon checks: \"Do I have the 'hello-world' image locally?\"\n3. If NO → daemon pulls it from Docker Hub\n4. Daemon creates a new container from the image\n5. Container runs, prints a welcome message, and exits\n6. You see the output in your terminal!"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Install Docker Desktop and verify with `docker version`",
                "Run `docker run hello-world` and read the output",
                "Run `docker info` and identify how many containers and images you have",
                "Explain in your own words: what's the difference between an image and a container?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Docker Fundamentals, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Docker Fundamentals."
              ],
              "answer": 3,
              "explanation": "Docker Fundamentals is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "docker-introduction",
          "title": "Docker Introduction",
          "description": "Master Docker Introduction with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "paragraph",
              "text": "Comprehensive reference guide for Docker Introduction."
            },
            {
              "type": "quiz",
              "question": "In Docker Introduction, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Docker Introduction.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Docker Introduction is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "images-and-containers",
          "title": "Images And Containers",
          "description": "Master Images And Containers with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "How to pull, list, and manage Docker images",
                "Running containers (foreground, background, interactive)",
                "Container lifecycle (create, start, stop, remove)",
                "Port mapping and environment variables",
                "Inspecting and debugging containers"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Working with Images"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Docker Image?"
            },
            {
              "type": "paragraph",
              "text": "A **Docker image** is a read-only package that contains everything needed to run an application — the code, runtime, libraries, environment variables, and configuration files. Images are built in **layers**, where each layer represents a change."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Pulling Images"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Pull an image from Docker Hub (default registry)\ndocker pull nginx                # Pulls the latest tag\ndocker pull nginx:1.25-alpine    # Pulls a specific version\ndocker pull python:3.11-slim     # Python with minimal OS\n\n# Pull from a different registry\ndocker pull ghcr.io/owner/image:tag    # GitHub Container Registry\ndocker pull 123456.dkr.ecr.us-east-1.amazonaws.com/myapp:v1  # AWS ECR"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Understanding Image Tags"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Image naming format: [registry/]repository:tag\n\nExamples:\n  nginx                        → docker.io/library/nginx:latest\n  nginx:1.25                   → specific version\n  nginx:1.25-alpine            → specific version on Alpine Linux (tiny OS)\n  mycompany/myapp:v2.1         → custom image with version tag\n  \nTag best practices:\n  ❌ Don't use :latest in production (it changes over time!)\n  ✅ Use specific versions: python:3.11-slim, node:20-alpine\n  ✅ Use semantic versioning for your own images: myapp:1.2.3"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Listing and Managing Images"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# List all images on your machine\ndocker images\ndocker image ls                 # Same thing, newer syntax\n\n# Show image sizes and details\ndocker images --format \"table {{.Repository}}\\t{{.Tag}}\\t{{.Size}}\"\n\n# Remove an image\ndocker rmi nginx:1.25           # Remove by name:tag\ndocker rmi abc123def            # Remove by image ID\n\n# Remove ALL unused images (be careful!)\ndocker image prune              # Remove dangling (untagged) images\ndocker image prune -a           # Remove ALL unused images\n\n# Inspect image details (layers, config, size)\ndocker image inspect nginx:alpine"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Running Containers"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is `docker run`?"
            },
            {
              "type": "paragraph",
              "text": "docker run` creates a new container from an image AND starts it. It's the most important Docker command."
            },
            {
              "type": "code",
              "language": "text",
              "code": "docker run = docker create + docker start (combined)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Basic Run"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Simplest run — runs in foreground, blocks your terminal\ndocker run nginx\n# Press Ctrl+C to stop\n\n# Run with a custom name\ndocker run --name my-web nginx\n\n# Run in DETACHED mode (background) — doesn't block terminal\ndocker run -d --name my-web nginx\n# Returns the container ID, continues in background"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Interactive Containers"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Run an interactive container with a shell\ndocker run -it ubuntu bash\n# -i = interactive (keep stdin open)\n# -t = allocate a terminal (TTY)\n# You're now INSIDE the container! Type 'exit' to leave.\n\n# Run Python interactively\ndocker run -it python:3.11 python\n# Opens a Python REPL inside the container\n\n# Run and auto-remove when done\ndocker run -it --rm ubuntu bash\n# --rm = container is deleted after you exit (no cleanup needed)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Port Mapping"
            },
            {
              "type": "paragraph",
              "text": "**Port mapping** connects a port on your host machine to a port inside the container, allowing you to access the containerized application."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "docker run -d -p 8080:80 nginx\n#           │   │    │\n#           │   │    └── Container port (nginx listens on 80 inside)\n#           │   └─────── Host port (you access via localhost:8080)\n#           └─────────── Detached mode\n\n# Now open http://localhost:8080 in your browser → sees nginx!\n\n# Multiple port mappings\ndocker run -d -p 8080:80 -p 8443:443 nginx\n\n# Random host port (Docker picks one)\ndocker run -d -p 80 nginx\ndocker ps  # Check which port was assigned"
            },
            {
              "type": "code",
              "language": "text",
              "code": "How port mapping works:\n\nYour laptop                     Container\n┌──────────────┐               ┌──────────────┐\n│              │    -p 8080:80 │              │\n│  Browser ──────────────────────→ nginx:80   │\n│  :8080       │               │              │\n└──────────────┘               └──────────────┘\n\nWithout -p: Container is isolated, you CAN'T access it\nWith -p 8080:80: Traffic to localhost:8080 is forwarded to container:80"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Environment Variables"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Pass environment variables to a container\ndocker run -d \\\n  -e MYSQL_ROOT_PASSWORD=secretpass \\\n  -e MYSQL_DATABASE=myapp \\\n  -e MYSQL_USER=appuser \\\n  mysql:8.0\n\n# Multiple -e flags for multiple variables\ndocker run -d \\\n  --name my-api \\\n  -e NODE_ENV=production \\\n  -e PORT=3000 \\\n  -e DATABASE_URL=postgres://user:pass@db:5432/myapp \\\n  -p 3000:3000 \\\n  my-node-app"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Container Lifecycle"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "States of a Container"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Created → Running → Paused → Running → Stopped → Removed\n   │         │        │         │         │          │\n create    start    pause    unpause     stop       rm\n                                          │\n                                         kill (force)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Managing Running Containers"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# List running containers\ndocker ps\n\n# List ALL containers (including stopped)\ndocker ps -a\n\n# Show only container IDs\ndocker ps -q\n\n# Start a stopped container\ndocker start my-web\n\n# Stop a running container (graceful — sends SIGTERM, waits 10s, then SIGKILL)\ndocker stop my-web\n\n# Kill a container (immediate — sends SIGKILL)\ndocker kill my-web\n\n# Restart a container\ndocker restart my-web\n\n# Pause/unpause (freezes the process)\ndocker pause my-web\ndocker unpause my-web\n\n# Remove a stopped container\ndocker rm my-web\n\n# Force remove a running container\ndocker rm -f my-web\n\n# Remove ALL stopped containers\ndocker container prune"
            },
            {
              "type": "paragraph",
              "text": "**`stop` vs `kill`**:"
            },
            {
              "type": "code",
              "language": "text",
              "code": "docker stop: Sends SIGTERM → app gets time to cleanup (save data, close \n             connections) → if not stopped in 10s, sends SIGKILL\n             \ndocker kill: Sends SIGKILL immediately → app terminates instantly\n             Use only when stop doesn't work or in emergencies"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.4 Inspecting and Debugging Containers"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Viewing Logs"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# View all logs from a container\ndocker logs my-web\n\n# Follow logs in real-time (like tail -f)\ndocker logs -f my-web\n\n# Show last 50 lines\ndocker logs --tail 50 my-web\n\n# Show logs since a specific time\ndocker logs --since 2024-01-01T00:00:00 my-web\ndocker logs --since 30m my-web    # Last 30 minutes"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Executing Commands Inside a Running Container"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Open a shell inside a running container\ndocker exec -it my-web bash\n# or for Alpine-based images (no bash):\ndocker exec -it my-web sh\n\n# Run a single command\ndocker exec my-web ls /etc/nginx/\ndocker exec my-web cat /etc/nginx/nginx.conf\n\n# Run command with environment variable\ndocker exec -e MY_VAR=value my-web env"
            },
            {
              "type": "paragraph",
              "text": "**`docker exec` vs `docker attach`**:"
            },
            {
              "type": "code",
              "language": "text",
              "code": "docker exec:   Creates a NEW process in the container\n               Safe — exiting doesn't stop the container\n               Use for: debugging, running commands\n\ndocker attach: Connects to the MAIN process (PID 1)\n               Dangerous — exiting may stop the container!\n               Use for: watching output of the main process"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Inspecting Container Details"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Full JSON details of a container\ndocker inspect my-web\n\n# Get specific fields\ndocker inspect --format '{{.State.Status}}' my-web\ndocker inspect --format '{{.NetworkSettings.IPAddress}}' my-web\n\n# Show resource usage (CPU, memory, network)\ndocker stats\ndocker stats my-web   # For a specific container\n\n# Show running processes inside a container\ndocker top my-web"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Copying Files"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Copy FROM container to host\ndocker cp my-web:/etc/nginx/nginx.conf ./nginx.conf\n\n# Copy FROM host to container\ndocker cp ./index.html my-web:/usr/share/nginx/html/index.html"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.5 Restart Policies"
            },
            {
              "type": "paragraph",
              "text": "**Restart policies** control whether a container restarts automatically when it stops or when Docker restarts."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "docker run -d --restart=always nginx      # Always restart\ndocker run -d --restart=unless-stopped nginx  # Restart unless manually stopped\ndocker run -d --restart=on-failure nginx   # Restart only on error\ndocker run -d --restart=no nginx          # Never restart (default)"
            },
            {
              "type": "table",
              "headers": [
                "Policy",
                "Behavior"
              ],
              "rows": [
                [
                  "no`",
                  "Never restart (default)",
                  ""
                ],
                [
                  "always`",
                  "Always restart, even after Docker daemon restart",
                  ""
                ],
                [
                  "unless-stopped`",
                  "Like `always`, but not if manually stopped",
                  ""
                ],
                [
                  "on-failure[:max]`",
                  "Restart only if container exits with error code",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.6 Resource Limits (CPU & Memory)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Why Limit Resources?"
            },
            {
              "type": "paragraph",
              "text": "Without limits, a single container can consume ALL available CPU and memory, starving other containers and even crashing the host."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Limit memory to 512 MB\ndocker run -d --memory=512m nginx\n\n# Limit CPU to 50% of one core\ndocker run -d --cpus=0.5 nginx\n\n# Combine both\ndocker run -d \\\n  --memory=256m \\\n  --cpus=0.25 \\\n  --name limited-app \\\n  my-api\n\n# Memory + swap limit\ndocker run -d --memory=512m --memory-swap=1g nginx\n# Container can use 512MB RAM + 512MB swap = 1GB total"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Monitoring Resource Usage"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Live resource usage (CPU, memory, network, disk I/O)\ndocker stats\n\n# One-shot view (no live updates)\ndocker stats --no-stream\n\n# Specific container\ndocker stats my-web\n\n# Output:\n# CONTAINER   CPU %   MEM USAGE / LIMIT    MEM %   NET I/O       BLOCK I/O\n# my-web      0.05%   12.3MiB / 512MiB     2.40%   1.2kB / 0B    0B / 0B"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.7 Logging Drivers"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What are Logging Drivers?"
            },
            {
              "type": "paragraph",
              "text": "**Logging drivers** control where container logs are stored and how they're formatted. By default, logs go to `json-file` (stored locally), but you can send them to external systems."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Default: json-file (logs stored on host)\ndocker run -d nginx\n\n# Use syslog driver\ndocker run -d --log-driver=syslog nginx\n\n# Use fluentd driver (for centralized logging)\ndocker run -d --log-driver=fluentd nginx\n\n# Disable logging entirely\ndocker run -d --log-driver=none nginx\n\n# Limit log file size (prevents disk full!)\ndocker run -d \\\n  --log-opt max-size=10m \\\n  --log-opt max-file=3 \\\n  nginx\n# Keeps max 3 files of 10MB each = 30MB max log storage per container"
            },
            {
              "type": "table",
              "headers": [
                "Driver",
                "Where Logs Go",
                "Use Case"
              ],
              "rows": [
                [
                  "json-file`",
                  "Local JSON files (default)",
                  "Development, small deployments",
                  ""
                ],
                [
                  "syslog`",
                  "Syslog server",
                  "Linux system integration",
                  ""
                ],
                [
                  "fluentd`",
                  "Fluentd collector",
                  "Centralized logging (ELK stack)",
                  ""
                ],
                [
                  "awslogs`",
                  "AWS CloudWatch",
                  "AWS deployments",
                  ""
                ],
                [
                  "gcplogs`",
                  "Google Cloud Logging",
                  "GCP deployments",
                  ""
                ],
                [
                  "none`",
                  "Nowhere",
                  "When you don't need logs",
                  ""
                ]
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Important**: Always set `max-size` and `max-file` in production! Without limits, logs can fill up your entire disk."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Pull `nginx:alpine` and run it with port 8080 mapped → visit in browser",
                "Run a MySQL container with custom root password and database name",
                "Open a shell inside a running nginx container and edit `index.html`",
                "Use `docker logs` to view output, then `docker stats` to check resources",
                "Practice the full lifecycle: create → start → stop → start → remove"
              ]
            },
            {
              "type": "quiz",
              "question": "In Images And Containers, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Images And Containers.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Images And Containers is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "dockerfile-deep-dive",
          "title": "Dockerfile Deep Dive",
          "description": "Master Dockerfile Deep Dive with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What a Dockerfile is and how it works",
                "Every Dockerfile instruction explained",
                "CMD vs ENTRYPOINT",
                "Multi-stage builds for smaller images",
                "Best practices for production Dockerfiles",
                "dockerignore` file"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 What is a Dockerfile?"
            },
            {
              "type": "paragraph",
              "text": "A **Dockerfile** is a text file containing a series of instructions that Docker reads to automatically build an image. Each instruction creates a **layer** in the image."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": "A Dockerfile is like a recipe — step-by-step instructions to assemble your application into a container. Just as a recipe produces the same dish every time, a Dockerfile produces the same image every time."
            },
            {
              "type": "code",
              "language": "text",
              "code": "Dockerfile → docker build → Image → docker run → Container\n\nWritten once → builds reproducibly → runs anywhere"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 Dockerfile Instructions"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "FROM — Set the Base Image"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# Every Dockerfile MUST start with FROM\n# It sets the starting point (base operating system + tools)\n\nFROM ubuntu:22.04          # Full Ubuntu (larger, ~77MB)\nFROM python:3.11-slim      # Python with minimal Debian (~120MB)\nFROM node:20-alpine        # Node.js on Alpine Linux (~50MB)\nFROM nginx:alpine          # Nginx on Alpine (~40MB)\nFROM scratch               # Empty image (for compiled binaries)"
            },
            {
              "type": "paragraph",
              "text": "**What is Alpine?** Alpine Linux is a tiny Linux distribution (~5MB). Using `-alpine` variants dramatically reduces image size. Always prefer Alpine when possible."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "WORKDIR — Set the Working Directory"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# Sets the directory for all subsequent commands (like 'cd')\nWORKDIR /app\n\n# If the directory doesn't exist, Docker creates it\n# All subsequent COPY, RUN, CMD commands execute from here"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "COPY — Copy Files from Host to Image"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# COPY source destination\nCOPY package.json .                    # Copy file to current WORKDIR\nCOPY package.json /app/               # Copy to absolute path\nCOPY src/ ./src/                       # Copy directory\nCOPY package.json package-lock.json ./ # Copy multiple files"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "ADD — Like COPY But With Extras"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# ADD can do everything COPY does, PLUS:\n# 1. Automatically extracts .tar archives\nADD archive.tar.gz /app/     # Extracts into /app/\n\n# 2. Can download from URLs\nADD https://example.com/file.txt /app/\n\n# Best practice: Use COPY unless you specifically need ADD's features"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "RUN — Execute Commands During Build"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# RUN executes commands and creates a new layer\nRUN apt-get update && apt-get install -y curl\n\n# Each RUN creates a layer — combine commands to reduce layers!\n# ❌ Bad (3 layers):\nRUN apt-get update\nRUN apt-get install -y curl\nRUN rm -rf /var/lib/apt/lists/*\n\n# ✅ Good (1 layer):\nRUN apt-get update && apt-get install -y \\\n    curl \\\n    wget \\\n    && rm -rf /var/lib/apt/lists/*"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "ENV — Set Environment Variables"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# ENV sets variables available during build AND at runtime\nENV NODE_ENV=production\nENV PORT=3000\nENV PYTHONUNBUFFERED=1     # Important: makes Python output visible in logs\n\n# Use in subsequent instructions\nRUN echo \"Running in $NODE_ENV mode\""
            },
            {
              "type": "heading",
              "level": 3,
              "text": "EXPOSE — Document Which Ports the App Uses"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# EXPOSE does NOT actually publish the port!\n# It's documentation — tells users which port the app listens on\nEXPOSE 8080\nEXPOSE 443\n\n# You still need -p when running:\n# docker run -p 8080:8080 myapp"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "USER — Set the Running User"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# By default, containers run as root (security risk!)\n# Create a non-root user and switch to it\n\nRUN addgroup --system appgroup && \\\n    adduser --system --ingroup appgroup appuser\nUSER appuser\n\n# Now all subsequent commands run as 'appuser' instead of root"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "VOLUME — Create a Mount Point"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# Declares that this path should be a volume (persistent storage)\nVOLUME [\"/data\"]\nVOLUME [\"/var/log/app\"]"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 CMD vs ENTRYPOINT"
            },
            {
              "type": "paragraph",
              "text": "This is one of the most confusing parts of Docker. Here's the clear explanation:"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "CMD — Default Command (Can Be Overridden)"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# CMD sets the default command that runs when the container starts\nCMD [\"python\", \"app.py\"]\n\n# User CAN override it:\ndocker run myapp                    # Runs: python app.py\ndocker run myapp python test.py     # Runs: python test.py (overrides CMD)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "ENTRYPOINT — Fixed Command (Cannot Be Easily Overridden)"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# ENTRYPOINT sets a command that ALWAYS runs\nENTRYPOINT [\"python\"]\n\n# User arguments are APPENDED to ENTRYPOINT:\ndocker run myapp app.py             # Runs: python app.py\ndocker run myapp test.py            # Runs: python test.py"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Using Them Together (Most Common Pattern)"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# ENTRYPOINT = the executable\n# CMD = default arguments (can be overridden)\n\nENTRYPOINT [\"python\"]\nCMD [\"app.py\"]\n\ndocker run myapp                    # Runs: python app.py\ndocker run myapp test.py            # Runs: python test.py"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Comparison Table"
            },
            {
              "type": "table",
              "headers": [
                "CMD",
                "ENTRYPOINT"
              ],
              "rows": [
                [
                  "**Purpose**",
                  "Default command/arguments",
                  "Fixed executable",
                  ""
                ],
                [
                  "**Overridable?**",
                  "Yes, entirely",
                  "Only with `--entrypoint` flag",
                  ""
                ],
                [
                  "**Best for**",
                  "Apps where user might want different commands",
                  "Apps that should always run the same executable",
                  ""
                ],
                [
                  "**Example**",
                  "CMD [\"npm\", \"start\"]`",
                  "ENTRYPOINT [\"nginx\", \"-g\", \"daemon off;\"]`",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.4 Multi-Stage Builds"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Multi-Stage Build?"
            },
            {
              "type": "paragraph",
              "text": "A **multi-stage build** uses multiple `FROM` statements in a single Dockerfile. Each stage can use a different base image. You copy only what you need from earlier stages into the final image, resulting in much smaller production images."
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# ─── Stage 1: BUILD (large image with build tools) ───\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci                    # Install ALL dependencies (including devDeps)\nCOPY . .\nRUN npm run build             # Compile TypeScript, bundle, etc.\n\n# ─── Stage 2: PRODUCTION (tiny image, only runtime) ───\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html\nEXPOSE 80\nCMD [\"nginx\", \"-g\", \"daemon off;\"]\n\n# Result:\n#   Build stage: ~400MB (Node, npm, source code, devDeps)\n#   Final image: ~25MB  (Just Nginx + compiled static files!)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Python Multi-Stage Example"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# Stage 1: Build\nFROM python:3.11 AS builder\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --user -r requirements.txt\n\n# Stage 2: Production\nFROM python:3.11-slim\nWORKDIR /app\nCOPY --from=builder /root/.local /root/.local\nCOPY . .\nENV PATH=/root/.local/bin:$PATH\nEXPOSE 8000\nCMD [\"uvicorn\", \"main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.5 Complete Dockerfile Examples"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Python Flask App"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "FROM python:3.11-slim\n\n# Set environment variables\nENV PYTHONDONTWRITEBYTECODE=1 \\\n    PYTHONUNBUFFERED=1\n\nWORKDIR /app\n\n# Install dependencies first (cached if requirements don't change)\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\n# Copy app code (changes frequently → keep last for caching)\nCOPY . .\n\n# Create non-root user\nRUN adduser --disabled-password --no-create-home appuser\nUSER appuser\n\nEXPOSE 5000\nCMD [\"gunicorn\", \"--bind\", \"0.0.0.0:5000\", \"app:app\"]"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Node.js App"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "FROM node:20-alpine\n\nWORKDIR /app\n\n# Copy dependency files first\nCOPY package*.json ./\nRUN npm ci --only=production\n\n# Copy app code\nCOPY . .\n\n# Create non-root user\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nUSER appuser\n\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.6 .dockerignore"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is .dockerignore?"
            },
            {
              "type": "paragraph",
              "text": "A `.dockerignore` file tells Docker which files to **exclude** from the build context (the files sent to the Docker daemon). This makes builds faster and keeps images smaller."
            },
            {
              "type": "code",
              "language": "text",
              "code": "# .dockerignore\n\n# Version control\n.git\n.gitignore\n\n# Dependencies (will be installed inside container)\nnode_modules\n__pycache__\n*.pyc\n.venv\n\n# IDE files\n.vscode\n.idea\n*.swp\n\n# Docker files\nDockerfile\ndocker-compose.yml\n.dockerignore\n\n# Documentation\nREADME.md\ndocs/\n\n# Environment files (secrets!)\n.env\n.env.local"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.7 Build Cache & Layer Optimization"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "How Docker Build Cache Works"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Docker caches each layer. If the instruction AND all previous layers \nhaven't changed, Docker reuses the cached layer (instant!).\n\nIf a layer changes → that layer AND all layers AFTER it are rebuilt.\n\nORDER MATTERS for cache efficiency:"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# ❌ BAD ORDER — changing ANY source file invalidates ALL layers:\nCOPY . .\nRUN pip install -r requirements.txt    # Re-installs deps every time!\n\n# ✅ GOOD ORDER — deps are cached unless requirements.txt changes:\nCOPY requirements.txt .\nRUN pip install -r requirements.txt    # Cached unless requirements change!\nCOPY . .                               # Only this layer rebuilds on code changes"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.8 Building Images"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Build from Dockerfile in current directory\ndocker build -t myapp:1.0 .\n\n# Build with a specific Dockerfile\ndocker build -f Dockerfile.prod -t myapp:prod .\n\n# Build with build arguments\ndocker build --build-arg NODE_ENV=production -t myapp .\n\n# Build without cache (fresh build)\ndocker build --no-cache -t myapp .\n\n# Build a specific stage in multi-stage\ndocker build --target builder -t myapp-builder ."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a Dockerfile for a Python Flask app and build it",
                "Write a multi-stage Dockerfile for a Node.js app",
                "Create a `.dockerignore` file for your project",
                "Experiment with layer ordering — change code and observe cached layers",
                "Compare image sizes: `python:3.11` vs `python:3.11-slim` vs `python:3.11-alpine`"
              ]
            },
            {
              "type": "quiz",
              "question": "In Dockerfile Deep Dive, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Dockerfile Deep Dive.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Dockerfile Deep Dive is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "volumes-and-storage",
          "title": "Volumes And Storage",
          "description": "Master Volumes And Storage with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Why containers need persistent storage",
                "Types of storage: volumes, bind mounts, tmpfs",
                "Managing Docker volumes",
                "Backup and restore data"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 The Container Storage Problem"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Why Do We Need Volumes?"
            },
            {
              "type": "paragraph",
              "text": "Containers are **ephemeral** (temporary) by default. When a container is removed, ALL data inside it is lost."
            },
            {
              "type": "code",
              "language": "text",
              "code": "Without volumes:\n  docker run mysql → Database stores data inside container\n  docker rm mysql  → ALL DATA IS GONE! 💀\n\nWith volumes:\n  docker run -v db_data:/var/lib/mysql mysql → Data stored in volume\n  docker rm mysql  → Container gone, but DATA IS SAFE in volume ✅\n  docker run -v db_data:/var/lib/mysql mysql → New container, same data!"
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": "A container is like a rental apartment. When you leave, everything in the apartment is gone. A volume is like your personal storage unit — it persists no matter which apartment you rent next."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Types of Docker Storage"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Named Volumes (Recommended)"
            },
            {
              "type": "paragraph",
              "text": "**Named volumes** are managed by Docker. They're stored in Docker's storage area and are the recommended way to persist data."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create a named volume\ndocker volume create my_data\n\n# Use a named volume (Docker creates it if it doesn't exist)\ndocker run -d \\\n  --name my-db \\\n  -v my_data:/var/lib/postgresql/data \\\n  postgres:16\n\n# The volume persists even after the container is removed\ndocker rm my-db       # Container gone\ndocker volume ls      # my_data still exists!"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Bind Mounts"
            },
            {
              "type": "paragraph",
              "text": "**Bind mounts** map a specific directory on your host machine directly into the container. You control exactly where the data lives."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Mount your project directory into the container\ndocker run -d \\\n  --name my-web \\\n  -v /Users/aravind/myproject:/app \\\n  -p 8080:80 \\\n  nginx\n\n# Changes on host are immediately visible in container (and vice versa!)\n# Perfect for development — edit code on host, see changes in container\n\n# Read-only mount (container can't modify host files)\ndocker run -d \\\n  -v /host/config:/app/config:ro \\\n  myapp"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "tmpfs Mounts"
            },
            {
              "type": "paragraph",
              "text": "**tmpfs mounts** store data in memory only. Data is lost when the container stops. Used for sensitive data that shouldn't persist."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "docker run -d \\\n  --tmpfs /app/temp \\\n  myapp"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Comparison"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Named Volume:                    Bind Mount:\n┌──────────┐                    ┌──────────┐\n│Container │                    │Container │\n│ /data ───┼──→ Docker          │ /app ────┼──→ /Users/you/project\n│          │    manages it      │          │    YOU manage it\n└──────────┘                    └──────────┘\n\nBest for: databases, app data   Best for: development, config files"
            },
            {
              "type": "table",
              "headers": [
                "Feature",
                "Named Volume",
                "Bind Mount",
                "tmpfs"
              ],
              "rows": [
                [
                  "**Location**",
                  "Docker-managed",
                  "You specify",
                  "Memory only",
                  ""
                ],
                [
                  "**Survives restart**",
                  "",
                  "",
                  "",
                  ""
                ],
                [
                  "**Portable**",
                  "",
                  "(path-dependent)",
                  "",
                  ""
                ],
                [
                  "**Best for**",
                  "Databases, app data",
                  "Development, configs",
                  "Sensitive temp data",
                  ""
                ],
                [
                  "**Performance**",
                  "Good",
                  "Good (native)",
                  "Fastest",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Volume Management Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create a volume\ndocker volume create my_data\n\n# List all volumes\ndocker volume ls\n\n# Inspect a volume (see where it's stored, when created)\ndocker volume inspect my_data\n\n# Remove a volume (only if no container is using it)\ndocker volume rm my_data\n\n# Remove ALL unused volumes (be careful!)\ndocker volume prune\n\n# Remove with force (skip confirmation)\ndocker volume prune -f"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.4 Practical Examples"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Database with Persistent Storage"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# PostgreSQL with persistent data\ndocker run -d \\\n  --name my-postgres \\\n  -e POSTGRES_PASSWORD=mysecret \\\n  -e POSTGRES_DB=myapp \\\n  -v pgdata:/var/lib/postgresql/data \\\n  -p 5432:5432 \\\n  postgres:16\n\n# Create some data, then:\ndocker stop my-postgres\ndocker rm my-postgres\n\n# Start a NEW container with the SAME volume → data is still there!\ndocker run -d \\\n  --name my-postgres-v2 \\\n  -e POSTGRES_PASSWORD=mysecret \\\n  -v pgdata:/var/lib/postgresql/data \\\n  -p 5432:5432 \\\n  postgres:16"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Development Setup (Live Reload)"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Mount source code for live development\ndocker run -d \\\n  --name dev-app \\\n  -v $(pwd):/app \\\n  -v /app/node_modules \\\n  -p 3000:3000 \\\n  node:20-alpine \\\n  sh -c \"cd /app && npm install && npm run dev\"\n\n# /app/node_modules is an anonymous volume — prevents host node_modules\n# from overwriting the container's node_modules"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.5 Backup and Restore"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Backup a Volume"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create a backup of a volume using a temporary container\ndocker run --rm \\\n  -v pgdata:/source:ro \\\n  -v $(pwd):/backup \\\n  alpine \\\n  tar czf /backup/pgdata-backup.tar.gz -C /source .\n\n# This creates pgdata-backup.tar.gz on your host"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Restore a Volume"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Restore from backup\ndocker volume create pgdata-restored\n\ndocker run --rm \\\n  -v pgdata-restored:/target \\\n  -v $(pwd):/backup:ro \\\n  alpine \\\n  sh -c \"tar xzf /backup/pgdata-backup.tar.gz -C /target\""
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Run PostgreSQL with a named volume, add data, delete the container, restart with same volume",
                "Use a bind mount to serve a local HTML folder with nginx",
                "Backup a volume to a tar file, then restore it to a new volume",
                "Run a Node.js dev setup with live code reloading using bind mounts"
              ]
            },
            {
              "type": "quiz",
              "question": "In Volumes And Storage, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Volumes And Storage."
              ],
              "answer": 3,
              "explanation": "Volumes And Storage is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "networking",
          "title": "Networking",
          "description": "Master Networking with hands-on examples, architectural diagrams, and structured exercises.",
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
                "How Docker networking works",
                "Network types: bridge, host, none, overlay",
                "Container-to-container communication",
                "DNS and service discovery",
                "Creating custom networks"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 Docker Networking Basics"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Why Do Containers Need Networking?"
            },
            {
              "type": "paragraph",
              "text": "Most applications aren't a single container — they're multiple containers working together (web server + database + cache). Networking lets containers communicate with each other and the outside world."
            },
            {
              "type": "code",
              "language": "text",
              "code": "Typical multi-container app:\n\n┌─────────────────────────────────────────────┐\n│                Docker Network               │\n│                                             │\n│  ┌─────────┐    ┌──────────┐    ┌────────┐ │\n│  │  nginx  │───→│  node.js │───→│  redis │ │\n│  │  :80    │    │  :3000   │    │  :6379 │ │\n│  └─────────┘    └──────────┘    └────────┘ │\n│       ↑                                     │\n└───────┼─────────────────────────────────────┘\n        │ -p 80:80\n   ┌────┴────┐\n   │ Browser │\n   └─────────┘"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Network Types"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Bridge Network (Default)"
            },
            {
              "type": "paragraph",
              "text": "**Bridge** is the default network. Each container gets its own IP address on an isolated network. Containers on the same bridge network can communicate."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# When you run a container without specifying a network,\n# it joins the default \"bridge\" network\n\ndocker run -d --name web nginx\ndocker run -d --name api node-app\n\n# Both are on \"bridge\" network, but DEFAULT bridge doesn't\n# support DNS resolution by name — only by IP address\n\n# Check IP address\ndocker inspect web --format '{{.NetworkSettings.IPAddress}}'"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Host Network"
            },
            {
              "type": "paragraph",
              "text": "**Host network** removes network isolation — the container shares the host's network directly. No port mapping needed, but only one container can use each port."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "docker run -d --network host nginx\n# nginx is now on localhost:80 directly (no -p needed)\n# Only works on Linux (Windows/Mac use a VM)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "None Network"
            },
            {
              "type": "paragraph",
              "text": "**None network** gives the container no network access at all. Complete isolation."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "docker run -d --network none alpine\n# This container has NO network connectivity\n# Use for: security-sensitive processing"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Overlay Network"
            },
            {
              "type": "paragraph",
              "text": "**Overlay network** enables communication between containers on different Docker hosts (machines). Used with Docker Swarm or Kubernetes."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Comparison"
            },
            {
              "type": "table",
              "headers": [
                "Network",
                "Isolation",
                "DNS",
                "Use Case"
              ],
              "rows": [
                [
                  "**bridge** (default)",
                  "Yes",
                  "Only on custom bridges",
                  "Single-host containers",
                  ""
                ],
                [
                  "**Custom bridge**",
                  "Yes",
                  "Automatic",
                  "Most production setups",
                  ""
                ],
                [
                  "**host**",
                  "No",
                  "N/A",
                  "Maximum performance",
                  ""
                ],
                [
                  "**none**",
                  "Complete",
                  "No",
                  "Security-sensitive apps",
                  ""
                ],
                [
                  "**overlay**",
                  "Yes",
                  "",
                  "Multi-host (Swarm)",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 Custom Bridge Networks (Recommended)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Why Custom Networks?"
            },
            {
              "type": "paragraph",
              "text": "The default bridge network has limitations. Custom bridge networks provide:"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Automatic DNS**: Containers can reach each other by name",
                "**Better isolation**: Only connected containers can communicate",
                "**On-the-fly connection**: Connect/disconnect containers without restart"
              ]
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create a custom network\ndocker network create my-app-network\n\n# Run containers on the custom network\ndocker run -d --name my-db --network my-app-network postgres:16\ndocker run -d --name my-api --network my-app-network my-node-app\n\n# Now my-api can reach the database by NAME:\n# Connection string: postgres://user:pass@my-db:5432/myapp\n#                                         ^^^^^ \n#                              Container name works as hostname!"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "DNS Resolution Example"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create network\ndocker network create backend\n\n# Start database\ndocker run -d \\\n  --name database \\\n  --network backend \\\n  -e POSTGRES_PASSWORD=secret \\\n  postgres:16\n\n# Start API — can reach database BY NAME\ndocker run -d \\\n  --name api \\\n  --network backend \\\n  -e DATABASE_URL=postgres://postgres:secret@database:5432/postgres \\\n  my-api-app\n\n# Inside the api container:\n# ping database      → resolves to database container's IP\n# curl database:5432 → connects to PostgreSQL"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.4 Network Management Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# List all networks\ndocker network ls\n\n# Create a network\ndocker network create my-net\ndocker network create --driver bridge --subnet 172.20.0.0/16 my-net\n\n# Inspect a network (see connected containers, subnet, etc.)\ndocker network inspect my-net\n\n# Connect a running container to a network\ndocker network connect my-net my-container\n\n# Disconnect a container from a network\ndocker network disconnect my-net my-container\n\n# Remove a network (must have no connected containers)\ndocker network rm my-net\n\n# Remove all unused networks\ndocker network prune"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.5 Multi-Network Setup"
            },
            {
              "type": "paragraph",
              "text": "Containers can be on multiple networks simultaneously. This enables controlled communication paths."
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create separate networks for frontend and backend\ndocker network create frontend\ndocker network create backend\n\n# Database — only on backend (not accessible from frontend)\ndocker run -d --name db --network backend postgres:16\n\n# API — on BOTH networks (bridges frontend and backend)\ndocker run -d --name api --network backend my-api\ndocker network connect frontend api\n\n# Nginx — only on frontend\ndocker run -d --name web --network frontend -p 80:80 nginx\n\n# Result:\n#   web → can reach api ✅ (both on frontend)\n#   web → can reach db  ❌ (not on backend)\n#   api → can reach db  ✅ (both on backend)\n#   api → can reach web ✅ (both on frontend)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a custom network and run two containers that communicate by name",
                "Set up a 3-tier app: nginx (frontend) → node (api) → postgres (db)",
                "Use `docker network inspect` to see which containers are on each network",
                "Test what happens when containers are on different networks (they can't communicate)"
              ]
            },
            {
              "type": "quiz",
              "question": "In Networking, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Networking.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Networking is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "docker-compose",
          "title": "Docker Compose",
          "description": "Master Docker Compose with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What Docker Compose is and why it's essential",
                "Writing `docker-compose.yml` files",
                "Managing multi-container applications",
                "Environment variables and `.env` files",
                "Development vs Production configurations",
                "Scaling and health checks"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 What is Docker Compose?"
            },
            {
              "type": "paragraph",
              "text": "**Docker Compose** is a tool for defining and running **multi-container** Docker applications using a single YAML file. Instead of running multiple `docker run` commands with complex flags, you define everything in one file and start it with one command."
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Without Compose vs With Compose"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# ❌ Without Compose — 3 long, error-prone commands:\ndocker network create myapp\ndocker run -d --name db --network myapp -e POSTGRES_PASSWORD=secret -v pgdata:/var/lib/postgresql/data postgres:16\ndocker run -d --name api --network myapp -e DATABASE_URL=postgres://postgres:secret@db:5432/postgres -p 3000:3000 my-api\ndocker run -d --name web --network myapp -p 80:80 --depends-on api nginx"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# ✅ With Compose — one clear, version-controlled file:\n# docker-compose.yml\nservices:\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_PASSWORD: secret\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\n  api:\n    build: ./api\n    environment:\n      DATABASE_URL: postgres://postgres:secret@db:5432/postgres\n    ports:\n      - \"3000:3000\"\n    depends_on:\n      - db\n\n  web:\n    image: nginx:alpine\n    ports:\n      - \"80:80\"\n    depends_on:\n      - api\n\nvolumes:\n  pgdata:"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Start everything with ONE command:\ndocker compose up -d\n\n# Stop everything:\ndocker compose down"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 docker-compose.yml Structure"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Complete Anatomy"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# services: Define your containers\nservices:\n  service-name:\n    # Image or Build\n    image: nginx:alpine           # Use a pre-built image\n    # OR\n    build: ./path-to-dockerfile   # Build from Dockerfile\n    # OR\n    build:\n      context: ./app              # Build context directory\n      dockerfile: Dockerfile.prod # Custom Dockerfile name\n      args:                       # Build-time arguments\n        NODE_ENV: production\n\n    # Container settings\n    container_name: my-custom-name  # Optional custom name\n    restart: unless-stopped         # Restart policy\n\n    # Port mapping\n    ports:\n      - \"8080:80\"           # host:container\n      - \"443:443\"\n\n    # Environment variables\n    environment:\n      - NODE_ENV=production\n      - DB_HOST=database\n    # OR from file\n    env_file:\n      - .env\n      - .env.production\n\n    # Volumes\n    volumes:\n      - ./src:/app/src            # Bind mount\n      - node_modules:/app/node_modules  # Named volume\n      - /app/temp                 # Anonymous volume\n\n    # Networking\n    networks:\n      - frontend\n      - backend\n\n    # Dependencies\n    depends_on:\n      - database\n      - redis\n\n    # Health check\n    healthcheck:\n      test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:80\"]\n      interval: 30s\n      timeout: 10s\n      retries: 3\n      start_period: 10s\n\n    # Resource limits\n    deploy:\n      resources:\n        limits:\n          cpus: '0.5'\n          memory: 512M\n\n# Named volumes\nvolumes:\n  node_modules:\n  pgdata:\n\n# Custom networks\nnetworks:\n  frontend:\n  backend:"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Compose Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Start all services (detached)\ndocker compose up -d\n\n# Start and force rebuild images\ndocker compose up --build -d\n\n# Start specific services only\ndocker compose up -d web api\n\n# Stop and remove all containers, networks\ndocker compose down\n\n# Stop and remove EVERYTHING (containers, networks, volumes, images)\ndocker compose down -v --rmi all\n\n# View running services\ndocker compose ps\n\n# View logs\ndocker compose logs                # All services\ndocker compose logs -f api         # Follow specific service\ndocker compose logs --tail 100     # Last 100 lines\n\n# Execute command in a service\ndocker compose exec api bash\ndocker compose exec db psql -U postgres\n\n# Build/rebuild services\ndocker compose build\ndocker compose build --no-cache\n\n# Scale a service (run multiple instances)\ndocker compose up -d --scale web=3\n\n# Pull latest images\ndocker compose pull\n\n# View resource usage\ndocker compose top"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.4 Environment Variables"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Using `.env` File"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# .env file (auto-loaded by Docker Compose)\nPOSTGRES_USER=admin\nPOSTGRES_PASSWORD=supersecret\nPOSTGRES_DB=myapp\nAPI_PORT=3000\nNODE_ENV=production"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# docker-compose.yml — reference variables with ${VAR}\nservices:\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_USER: ${POSTGRES_USER}\n      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}\n      POSTGRES_DB: ${POSTGRES_DB}\n\n  api:\n    build: ./api\n    ports:\n      - \"${API_PORT}:3000\"\n    environment:\n      NODE_ENV: ${NODE_ENV}\n      DB_HOST: db"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Default Values"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "environment:\n  # Use default if variable is not set\n  NODE_ENV: ${NODE_ENV:-production}    # Default: production\n  PORT: ${PORT:-3000}                  # Default: 3000"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.5 Development vs Production"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Override Files"
            },
            {
              "type": "paragraph",
              "text": "Docker Compose automatically merges `docker-compose.yml` with `docker-compose.override.yml` (if it exists). This lets you have different configs for dev and prod."
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# docker-compose.yml (BASE — shared config)\nservices:\n  api:\n    build: ./api\n    ports:\n      - \"3000:3000\"\n    depends_on:\n      - db\n  db:\n    image: postgres:16\n    volumes:\n      - pgdata:/var/lib/postgresql/data\nvolumes:\n  pgdata:"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# docker-compose.override.yml (DEVELOPMENT — auto-merged)\nservices:\n  api:\n    volumes:\n      - ./api:/app            # Mount source code for live reload\n    environment:\n      NODE_ENV: development\n    command: npm run dev      # Use dev server with hot reload"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# docker-compose.prod.yml (PRODUCTION — manually specified)\nservices:\n  api:\n    image: myapp/api:${VERSION}  # Use pre-built image\n    environment:\n      NODE_ENV: production\n    restart: always\n    deploy:\n      resources:\n        limits:\n          memory: 512M"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Development (auto-merges override):\ndocker compose up -d\n\n# Production (explicitly specify prod file):\ndocker compose -f docker-compose.yml -f docker-compose.prod.yml up -d"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.6 Health Checks & Dependencies"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Health Checks"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "services:\n  api:\n    build: ./api\n    healthcheck:\n      test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:3000/health\"]\n      interval: 30s       # Check every 30 seconds\n      timeout: 10s        # Wait max 10 seconds for response\n      retries: 3          # Mark unhealthy after 3 failures\n      start_period: 15s   # Wait 15s before first check"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Smart Dependencies"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "services:\n  api:\n    depends_on:\n      db:\n        condition: service_healthy  # Wait until db is HEALTHY, not just started!\n  \n  db:\n    image: postgres:16\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U postgres\"]\n      interval: 5s\n      timeout: 5s\n      retries: 5"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.7 Complete Real-World Example"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Full-Stack App: React + Node.js + PostgreSQL + Redis"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "services:\n  # Frontend (React)\n  frontend:\n    build:\n      context: ./frontend\n      dockerfile: Dockerfile\n    ports:\n      - \"3000:3000\"\n    environment:\n      - REACT_APP_API_URL=http://localhost:4000\n    depends_on:\n      - api\n    networks:\n      - frontend-net\n\n  # Backend API (Node.js)\n  api:\n    build: ./backend\n    ports:\n      - \"4000:4000\"\n    environment:\n      - NODE_ENV=production\n      - DATABASE_URL=postgres://admin:secret@db:5432/myapp\n      - REDIS_URL=redis://cache:6379\n    depends_on:\n      db:\n        condition: service_healthy\n      cache:\n        condition: service_started\n    networks:\n      - frontend-net\n      - backend-net\n    restart: unless-stopped\n\n  # Database (PostgreSQL)\n  db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_USER: admin\n      POSTGRES_PASSWORD: secret\n      POSTGRES_DB: myapp\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n      - ./init.sql:/docker-entrypoint-initdb.d/init.sql\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U admin\"]\n      interval: 5s\n      retries: 5\n    networks:\n      - backend-net\n    restart: always\n\n  # Cache (Redis)\n  cache:\n    image: redis:7-alpine\n    volumes:\n      - redis_data:/data\n    networks:\n      - backend-net\n    restart: always\n\nvolumes:\n  pgdata:\n  redis_data:\n\nnetworks:\n  frontend-net:\n  backend-net:"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a `docker-compose.yml` for nginx + PostgreSQL and start it",
                "Add environment variables via `.env` file",
                "Create separate dev and prod configurations using override files",
                "Build the full-stack example above and verify all services communicate"
              ]
            },
            {
              "type": "quiz",
              "question": "In Docker Compose, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Docker Compose.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Docker Compose is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "registry-and-cicd",
          "title": "Registry And CICD",
          "description": "Master Registry And CICD with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Pushing and pulling images from registries",
                "Docker Hub, GitHub Container Registry, AWS ECR",
                "Tagging strategies for versioning",
                "Docker in CI/CD pipelines",
                "Security best practices"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Docker Registries"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What is a Docker Registry?"
            },
            {
              "type": "paragraph",
              "text": "A **Docker Registry** is a storage and distribution system for Docker images. It's where you push (upload) your images and pull (download) them."
            },
            {
              "type": "code",
              "language": "text",
              "code": "Popular Registries:\n  Docker Hub       → hub.docker.com (default, free for public images)\n  GitHub (GHCR)    → ghcr.io (integrated with GitHub repos)\n  AWS ECR          → <account>.dkr.ecr.<region>.amazonaws.com\n  Google GCR       → gcr.io\n  Azure ACR        → <name>.azurecr.io\n  Self-hosted      → Run your own registry with registry:2 image"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 Pushing Images to Docker Hub"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Step 1: Login to Docker Hub\ndocker login\n# Enter your Docker Hub username and password\n\n# Step 2: Tag your image with your username\ndocker tag myapp:latest yourusername/myapp:1.0\ndocker tag myapp:latest yourusername/myapp:latest\n\n# Step 3: Push to Docker Hub\ndocker push yourusername/myapp:1.0\ndocker push yourusername/myapp:latest\n\n# Now anyone can pull your image:\ndocker pull yourusername/myapp:1.0"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Image Naming Convention"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Full image name format:\n  [registry/] [username/] repository [:tag]\n\nExamples:\n  nginx                          → docker.io/library/nginx:latest\n  yourusername/myapp:1.0         → docker.io/yourusername/myapp:1.0\n  ghcr.io/yourusername/myapp:v2  → GitHub Container Registry"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.3 Tagging Strategies"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Semantic versioning (recommended)\ndocker tag myapp myuser/myapp:1.0.0    # Specific patch version\ndocker tag myapp myuser/myapp:1.0      # Minor version\ndocker tag myapp myuser/myapp:1        # Major version\ndocker tag myapp myuser/myapp:latest   # Latest\n\n# Git commit-based tags\ndocker tag myapp myuser/myapp:$(git rev-parse --short HEAD)\n# Result: myuser/myapp:a1b2c3d\n\n# Date-based tags\ndocker tag myapp myuser/myapp:$(date +%Y%m%d)\n# Result: myuser/myapp:20240115\n\n# Best practice: Push MULTIPLE tags for the same image\ndocker push myuser/myapp:1.2.3\ndocker push myuser/myapp:1.2\ndocker push myuser/myapp:latest"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.4 Docker in CI/CD"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "GitHub Actions Example"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# .github/workflows/docker-build.yml\nname: Build and Push Docker Image\n\non:\n  push:\n    branches: [main]\n    tags: ['v*']\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v4\n\n      - name: Login to Docker Hub\n        uses: docker/login-action@v3\n        with:\n          username: ${{ secrets.DOCKER_USERNAME }}\n          password: ${{ secrets.DOCKER_PASSWORD }}\n\n      - name: Build and push\n        uses: docker/build-push-action@v5\n        with:\n          context: .\n          push: true\n          tags: |\n            ${{ secrets.DOCKER_USERNAME }}/myapp:latest\n            ${{ secrets.DOCKER_USERNAME }}/myapp:${{ github.sha }}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.5 Security Best Practices"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Image Security"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# 1. Use specific image versions (not :latest)\nFROM python:3.11-slim    # ✅ Specific version\nFROM python:latest       # ❌ Could change anytime\n\n# 2. Run as non-root user\nRUN adduser --disabled-password appuser\nUSER appuser\n\n# 3. Use minimal base images\nFROM python:3.11-alpine  # ~50MB vs python:3.11 at ~900MB\n\n# 4. Don't store secrets in images!\n# ❌ BAD:\nENV API_KEY=sk-1234567890\nCOPY .env /app/.env\n\n# ✅ GOOD: Pass secrets at runtime\ndocker run -e API_KEY=sk-1234567890 myapp"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Scanning for Vulnerabilities"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Scan image for known vulnerabilities\ndocker scout cves myapp:latest\n\n# Use Trivy (popular open-source scanner)\n# Install: https://trivy.dev\ntrivy image myapp:latest"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.6 Saving and Loading Images (Offline Transfer)"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Save an image to a tar file (for offline sharing)\ndocker save -o myapp.tar myapp:1.0\n\n# Load an image from a tar file\ndocker load -i myapp.tar\n\n# Export a CONTAINER's filesystem (not the same as save!)\ndocker export my-container > container-fs.tar\ndocker import container-fs.tar new-image-name"
            },
            {
              "type": "table",
              "headers": [
                "Command",
                "What It Works On",
                "Preserves Layers",
                "Use Case"
              ],
              "rows": [
                [
                  "docker save`",
                  "Image",
                  "Yes",
                  "Transfer images between machines",
                  ""
                ],
                [
                  "docker export`",
                  "Container",
                  "No (flat)",
                  "Create a snapshot of container state",
                  ""
                ]
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a Docker Hub account and push your first image",
                "Tag the same image with 3 different tags and push all of them",
                "Set up a GitHub Actions workflow to build and push on every commit",
                "Scan one of your images for vulnerabilities"
              ]
            },
            {
              "type": "quiz",
              "question": "In Registry And CICD, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Registry And CICD.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Registry And CICD is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "commands-cheatsheet",
          "title": "Commands Cheatsheet",
          "description": "Master Commands Cheatsheet with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Quick Reference** — All Docker commands with flags in one place"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Basic Commands"
            },
            {
              "type": "table",
              "headers": [
                "Command",
                "Description"
              ],
              "rows": [
                [
                  "docker version`",
                  "Show client/server version",
                  ""
                ],
                [
                  "docker info`",
                  "Display system-wide information",
                  ""
                ],
                [
                  "docker help`",
                  "List all available commands",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Image Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Pull image\ndocker pull IMAGE[:TAG]\n  -a, --all-tags          # Download all tags\n  --platform PLATFORM     # e.g., linux/amd64\n\n# List images\ndocker images\ndocker image ls\n  -a, --all               # Show all (including intermediate)\n  --digests               # Show digests\n  --format FORMAT         # Custom format\n\n# Build image\ndocker build [OPTIONS] PATH\n  -t, --tag NAME:TAG      # Name and tag\n  -f, --file DOCKERFILE   # Custom Dockerfile\n  --no-cache              # Don't use cache\n  --build-arg KEY=VALUE   # Build-time variables\n  --target STAGE          # Multi-stage build target\n\n# Remove image\ndocker rmi IMAGE\n  -f, --force             # Force removal\n\n# Tag image\ndocker tag SOURCE[:TAG] TARGET[:TAG]\n\n# Image history (show layers)\ndocker history IMAGE\n\n# Inspect image\ndocker image inspect IMAGE\n\n# Prune unused images\ndocker image prune\n  -a                      # Remove all unused (not just dangling)\n  -f                      # Skip confirmation"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Container Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Run container\ndocker run [OPTIONS] IMAGE [COMMAND]\n  --name NAME             # Container name\n  -d, --detach            # Run in background\n  -it                     # Interactive + TTY\n  --rm                    # Auto-remove on exit\n  -p HOST:CONTAINER       # Port mapping\n  -v HOST:CONTAINER       # Volume mount\n  -e KEY=VALUE            # Environment variable\n  --env-file FILE         # Load env from file\n  --network NETWORK       # Attach to network\n  --restart POLICY        # no | always | unless-stopped | on-failure\n  -w, --workdir DIR       # Working directory\n  --memory LIMIT          # Memory limit (e.g., 512m)\n  --cpus NUMBER           # CPU limit (e.g., 0.5)\n\n# List containers\ndocker ps\n  -a, --all               # Show all (including stopped)\n  -q, --quiet             # Only IDs\n  -s, --size              # Show sizes\n  --format FORMAT         # Custom format\n\n# Start/Stop/Restart\ndocker start CONTAINER\n  -a, --attach            # Attach to output\n  -i, --interactive       # Interactive\n\ndocker stop CONTAINER\n  -t, --time SECONDS      # Wait time before kill (default 10)\n\ndocker restart CONTAINER\n\ndocker kill CONTAINER     # Force stop (SIGKILL)\n\n# Pause/Unpause\ndocker pause CONTAINER\ndocker unpause CONTAINER\n\n# Execute in running container\ndocker exec [OPTIONS] CONTAINER COMMAND\n  -it                     # Interactive + TTY\n  -e KEY=VALUE            # Environment variable\n  -w, --workdir DIR       # Working directory\n\n# View logs\ndocker logs CONTAINER\n  -f, --follow            # Follow output\n  --tail N                # Last N lines\n  --since TIME            # Since timestamp\n  --until TIME            # Until timestamp\n  -t, --timestamps        # Show timestamps\n\n# Remove container\ndocker rm CONTAINER\n  -f, --force             # Force remove (even running)\n  -v, --volumes           # Remove associated volumes\n\n# Copy files\ndocker cp SRC DEST\n  # docker cp container:/path ./local\n  # docker cp ./local container:/path\n\n# Inspect container\ndocker inspect CONTAINER\n  --format FORMAT         # Go template\n\n# Show processes\ndocker top CONTAINER\n\n# Resource usage\ndocker stats [CONTAINER]\n  --no-stream             # Show once (not live)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Volume Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create volume\ndocker volume create [NAME]\n  --driver DRIVER         # Volume driver\n  --label KEY=VALUE       # Set metadata\n\n# List volumes\ndocker volume ls\n  -q, --quiet             # Only names\n  --filter FILTER         # Filter output\n\n# Inspect volume\ndocker volume inspect VOLUME\n\n# Remove volume\ndocker volume rm VOLUME\n\n# Prune unused volumes\ndocker volume prune\n  -f, --force             # Skip confirmation"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Network Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create network\ndocker network create [NAME]\n  --driver DRIVER         # bridge | host | overlay | none\n  --subnet CIDR           # e.g., 172.20.0.0/16\n  --gateway IP            # e.g., 172.20.0.1\n\n# List networks\ndocker network ls\n  -q, --quiet             # Only IDs\n  --filter FILTER         # Filter output\n\n# Inspect network\ndocker network inspect NETWORK\n\n# Connect/Disconnect container\ndocker network connect NETWORK CONTAINER\ndocker network disconnect NETWORK CONTAINER\n\n# Remove network\ndocker network rm NETWORK\n\n# Prune unused networks\ndocker network prune"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Docker Compose Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Start services\ndocker compose up\n  -d, --detach            # Background mode\n  --build                 # Build before starting\n  --force-recreate        # Recreate even if unchanged\n  --scale SERVICE=NUM     # Scale a service\n\n# Stop and remove\ndocker compose down\n  -v, --volumes           # Remove volumes\n  --rmi all               # Remove all images\n  --remove-orphans        # Remove orphan containers\n\n# Build\ndocker compose build\n  --no-cache              # Build without cache\n  --pull                  # Pull newer base images\n\n# Logs\ndocker compose logs\n  -f, --follow            # Follow output\n  --tail N                # Last N lines\n\n# Execute command\ndocker compose exec SERVICE COMMAND\n\n# List services\ndocker compose ps\n\n# Pull images\ndocker compose pull\n\n# Restart\ndocker compose restart [SERVICE]"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "System Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Disk usage\ndocker system df\n  -v, --verbose           # Detailed breakdown\n\n# System prune (cleanup everything unused)\ndocker system prune\n  -a, --all               # Remove all unused images\n  -f, --force             # Skip confirmation\n  --volumes               # Include volumes\n\n# Container prune\ndocker container prune\n\n# Events (real-time Docker events)\ndocker events\n  --since TIME\n  --until TIME\n  --filter FILTER"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Registry Commands"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Login\ndocker login [SERVER]\n  -u, --username          # Username\n  -p, --password          # Password\n\n# Logout\ndocker logout [SERVER]\n\n# Push image\ndocker push IMAGE[:TAG]\n\n# Pull image\ndocker pull IMAGE[:TAG]\n\n# Search Docker Hub\ndocker search TERM\n  --limit N               # Max results"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Save/Load/Export/Import"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Save IMAGE to tar\ndocker save -o FILE.tar IMAGE\n\n# Load IMAGE from tar\ndocker load -i FILE.tar\n\n# Export CONTAINER filesystem to tar\ndocker export -o FILE.tar CONTAINER\n\n# Import filesystem as image\ndocker import FILE.tar [REPOSITORY[:TAG]]"
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Course Complete!** Go back to the Main README to review all modules."
            },
            {
              "type": "quiz",
              "question": "In Commands Cheatsheet, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Commands Cheatsheet."
              ],
              "answer": 3,
              "explanation": "Commands Cheatsheet is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "troubleshooting-and-production",
          "title": "Troubleshooting And Production",
          "description": "Master Troubleshooting And Production with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Debugging common Docker errors",
                "Container troubleshooting techniques",
                "Production readiness checklist",
                "Image size optimization",
                "Docker vs Kubernetes (when to use what)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 Common Docker Errors & Fixes"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Port Already in Use"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Error: Bind for 0.0.0.0:8080 failed: port is already allocated\n\n# Fix 1: Find what's using the port\n# Windows:\nnetstat -ano | findstr :8080\n# Linux/Mac:\nlsof -i :8080\n\n# Fix 2: Use a different port\ndocker run -d -p 8081:80 nginx\n\n# Fix 3: Stop the conflicting container\ndocker ps                    # Find the container using port 8080\ndocker stop <container_id>"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Container Exits Immediately"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Problem: Container starts and immediately stops\n\n# Check exit code and logs\ndocker ps -a                  # See exit code in STATUS column\ndocker logs <container_name>  # See what went wrong\n\n# Common causes:\n# Exit code 0:   Command completed (e.g., echo \"hello\" finishes instantly)\n# Exit code 1:   Application error (check logs!)\n# Exit code 137: Out of memory (OOM killed) — increase --memory limit\n# Exit code 139: Segmentation fault\n# Exit code 143: Graceful shutdown (SIGTERM received)\n\n# Fix: Keep container running with interactive shell for debugging\ndocker run -it --entrypoint sh myapp\n# Now you're inside — run the app manually to see errors"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Cannot Remove Image (In Use)"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Error: conflict: unable to remove — image is being used by container\n\n# Fix: Remove containers using the image first\ndocker ps -a --filter ancestor=nginx    # Find containers from this image\ndocker rm -f $(docker ps -a -q --filter ancestor=nginx)  # Remove them\ndocker rmi nginx                        # Now remove the image"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Disk Space Full"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Check Docker disk usage\ndocker system df\n\n# Output:\n# TYPE          TOTAL   ACTIVE   SIZE      RECLAIMABLE\n# Images        15      3        5.2GB     4.1GB (78%)\n# Containers    8       2        120MB     95MB (79%)\n# Volumes       5       2        1.5GB     800MB (53%)\n\n# Nuclear cleanup (removes EVERYTHING unused)\ndocker system prune -a --volumes\n\n# Selective cleanup\ndocker image prune -a         # Remove unused images\ndocker container prune        # Remove stopped containers\ndocker volume prune           # Remove unused volumes"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "No Space Left on Device\" During Build"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Fix 1: Clean up before building\ndocker system prune -a\n\n# Fix 2: Reduce build context (check .dockerignore!)\n# Add node_modules, .git, etc. to .dockerignore\n\n# Fix 3: Combine RUN commands to reduce layers"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 Debugging Techniques"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Interactive Debugging"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# 1. Shell into a running container\ndocker exec -it my-app sh\n\n# 2. Override entrypoint to debug a failing container\ndocker run -it --entrypoint sh myapp:latest\n# Now you can manually run commands and see what fails\n\n# 3. Start from the base image and test step by step\ndocker run -it python:3.11-slim bash\npip install -r requirements.txt   # Does this fail?\npython app.py                     # Does this fail?"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Inspecting Container State"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Full container details (JSON)\ndocker inspect my-app\n\n# Useful fields to check:\ndocker inspect --format '{{.State.Status}}' my-app        # running/exited\ndocker inspect --format '{{.State.ExitCode}}' my-app      # 0, 1, 137, etc.\ndocker inspect --format '{{.State.OOMKilled}}' my-app     # true/false\ndocker inspect --format '{{.NetworkSettings.IPAddress}}' my-app\ndocker inspect --format '{{json .Mounts}}' my-app         # Volume mounts\n\n# Compare expected vs actual env vars\ndocker exec my-app env\n\n# Check if the process is actually running\ndocker top my-app"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Checking Connectivity"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Test if containers can reach each other\ndocker exec app1 ping app2              # Basic connectivity\ndocker exec app1 curl http://app2:3000  # HTTP connectivity\n\n# Check which network a container is on\ndocker inspect --format '{{json .NetworkSettings.Networks}}' my-app\n\n# Check DNS resolution\ndocker exec my-app nslookup database"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.3 Image Size Optimization"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Why Image Size Matters"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Smaller images = faster pulls + faster deployments + less storage cost + smaller attack surface\n\nCommon sizes:\n  ubuntu:22.04        → 77 MB\n  python:3.11         → 920 MB  ← HUGE!\n  python:3.11-slim    → 120 MB  ← 8x smaller\n  python:3.11-alpine  → 50 MB   ← 18x smaller\n  node:20             → 1.1 GB  ← HUGE!\n  node:20-alpine      → 130 MB  ← 8x smaller"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Optimization Techniques"
            },
            {
              "type": "code",
              "language": "dockerfile",
              "code": "# 1. Use Alpine or slim base images\nFROM python:3.11-alpine    # Not python:3.11\n\n# 2. Multi-stage builds (copy only what's needed)\nFROM node:20 AS builder\nRUN npm run build\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html\n\n# 3. Combine RUN commands (fewer layers)\nRUN apt-get update && apt-get install -y \\\n    curl wget && \\\n    rm -rf /var/lib/apt/lists/*\n\n# 4. Clean up in the SAME layer\nRUN pip install -r requirements.txt && \\\n    rm -rf ~/.cache/pip\n\n# 5. Use .dockerignore to exclude unnecessary files\n# node_modules, .git, tests, docs, etc.\n\n# 6. Install only production dependencies\nRUN npm ci --only=production    # Not npm install\nRUN pip install --no-cache-dir -r requirements.txt"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Check What's Taking Space"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# View image layers and their sizes\ndocker history myapp:latest\n\n# Output shows each layer's size:\n# IMAGE          CREATED       SIZE    COMMAND\n# abc123         5 min ago     150MB   RUN pip install...\n# def456         5 min ago     5MB     COPY . .\n# ghi789         2 weeks ago   120MB   FROM python:3.11-slim"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.4 Production Best Practices Checklist"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Dockerfile:\n  □ Use specific base image tags (not :latest)\n  □ Use slim/alpine base images\n  □ Multi-stage builds for compiled apps\n  □ Run as non-root user\n  □ Don't store secrets in images\n  □ Combine RUN commands to reduce layers\n  □ Order layers for maximum cache efficiency\n  □ Use .dockerignore\n\nRuntime:\n  □ Set resource limits (--memory, --cpus)\n  □ Set log rotation (--log-opt max-size/max-file)\n  □ Use restart policies (--restart unless-stopped)\n  □ Use health checks\n  □ Use named volumes for persistent data\n  □ Use custom networks (not default bridge)\n  □ Pass secrets via env vars or Docker secrets (not baked in image)\n\nCompose:\n  □ Use .env files for configuration\n  □ Separate dev and prod configs (override files)\n  □ Set depends_on with health check conditions\n  □ Define resource limits in deploy section\n  □ Use named volumes and networks\n\nCI/CD:\n  □ Scan images for vulnerabilities (docker scout, trivy)\n  □ Use semantic versioning for image tags\n  □ Automate builds on git push\n  □ Never push unscanned images to production"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.5 Docker vs Kubernetes"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "When to Use What"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Docker Compose:\n  ✅ Single server / small applications\n  ✅ Development environments\n  ✅ Simple multi-container apps\n  ✅ Teams with 1-5 services\n  ❌ No auto-scaling\n  ❌ No self-healing across servers\n  ❌ Single point of failure\n\nKubernetes (K8s):\n  ✅ Large-scale production systems\n  ✅ Multiple servers (cluster)\n  ✅ Auto-scaling (handle traffic spikes)\n  ✅ Self-healing (restarts crashed containers automatically)\n  ✅ Rolling deployments (zero downtime)\n  ❌ Complex to set up and manage\n  ❌ Overkill for small apps\n  \nDocker Swarm (Docker's built-in orchestrator):\n  ✅ Simpler than Kubernetes\n  ✅ Built into Docker (no extra install)\n  ✅ Good for medium deployments\n  ❌ Less ecosystem support than K8s\n  ❌ Fewer features than K8s"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "How Docker Relates to Kubernetes"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Docker builds the containers → Kubernetes orchestrates them\n\nIn Kubernetes:\n  - Docker images are still used (or OCI-compatible images)\n  - Dockerfiles are still how you build images\n  - docker-compose.yml concepts map to K8s manifests:\n      service → Deployment + Service\n      volumes → PersistentVolumeClaim\n      networks → NetworkPolicy\n      ports → Service (NodePort/LoadBalancer)"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.6 Docker Secrets (Compose)"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "What are Docker Secrets?"
            },
            {
              "type": "paragraph",
              "text": "**Docker Secrets** securely store sensitive data (passwords, API keys, certificates) and make them available to containers as files, NOT environment variables."
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "# docker-compose.yml\nservices:\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_PASSWORD_FILE: /run/secrets/db_password\n    secrets:\n      - db_password\n\n  api:\n    build: ./api\n    secrets:\n      - db_password\n      - api_key\n\nsecrets:\n  db_password:\n    file: ./secrets/db_password.txt    # Read from file\n  api_key:\n    environment: API_KEY               # Read from env var"
            },
            {
              "type": "code",
              "language": "text",
              "code": "Why secrets over environment variables?\n\nEnvironment variables:\n  ❌ Visible in docker inspect\n  ❌ Visible in docker exec env\n  ❌ May leak into logs\n\nDocker secrets:\n  ✅ Mounted as files at /run/secrets/<name>\n  ✅ Only available to containers that need them\n  ✅ Not visible in inspect or logs"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Intentionally create each error above and practice fixing it",
                "Optimize an image from `python:3.11` (900MB) to `python:3.11-alpine` (<100MB)",
                "Run `docker system df` and clean up unused resources",
                "Run through the production checklist on one of your projects",
                "Debug a container that exits immediately using `docker logs` and `docker inspect`"
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Course Complete!** Go back to the Main README to review all modules."
            },
            {
              "type": "quiz",
              "question": "In Troubleshooting And Production, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Troubleshooting And Production.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Troubleshooting And Production is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
