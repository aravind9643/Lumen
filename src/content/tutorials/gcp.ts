import type { Tutorial } from '../types'

export const googleCloud: Tutorial = {
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
  "prerequisites": [
    "Basic computing and systems knowledge."
  ],
  "outcomes": [
    "Navigate GCP organization resource hierarchy (Orgs, Folders, Projects)",
    "Deploy virtual machines and Managed Instance Groups on Compute Engine",
    "Manage scalable object storage and bucket security on Google Cloud Storage",
    "Analyze petabyte-scale datasets with Google BigQuery"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "introduction-hierarchy",
          "title": "Introduction Hierarchy",
          "description": "Master Introduction Hierarchy with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 1 day"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Google Cloud Platform (GCP)?",
                "The Resource Hierarchy (Organization, Folders, Projects)",
                "Projects and Project IDs",
                "Quotas and Billing",
                "Google Cloud Console, SDK, and Cloud Shell"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 The GCP Resource Hierarchy"
            },
            {
              "type": "paragraph",
              "text": "GCP is organized like a tree. Permissions flow **downward**."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Organization**: The top level (usually your company domain).",
                "**Folders**: Used to group projects (e.g., \"Development\", \"Production\", \"Marketing\").",
                "**Projects**: The fundamental grouping of resources. Every resource MUST belong to a project.",
                "**Resources**: The actual services (VMs, Buckets, Databases)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Projects"
            },
            {
              "type": "paragraph",
              "text": "Every project has three identifiers:"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Project Name**: Human-readable, can be changed.",
                "**Project ID**: Globally unique, permanent (assigned at creation).",
                "**Project Number**: Assigned by Google, permanent."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Interacting with GCP"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Cloud Console**: The web UI.",
                "**gcloud CLI**: The command-line tool.",
                "**Cloud Shell**: A free, temporary Linux terminal with the SDK already installed.",
                "**Mobile App**: For monitoring on the go.",
                "Create a **Free Tier** GCP account (requires credit card for verification, but gives $300 credit).",
                "Create your first **Project** and note down its Project ID.",
                "Open the **Cloud Shell** and run `gcloud version`.",
                "Research the difference between **Zonal**, **Regional**, and **Multi-regional** resources."
              ]
            },
            {
              "type": "quiz",
              "question": "In Introduction Hierarchy, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Introduction Hierarchy.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Introduction Hierarchy is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "iam-security",
          "title": "IAM Security",
          "description": "Master IAM Security with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Beginner | ⏱ **Time**: 1 day"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Identities (Google Accounts, Service Accounts)",
                "IAM Roles (Primitive, Predefined, Custom)",
                "IAM Policies and Inheritance",
                "Service Accounts (The secret sauce of GCP)",
                "Principle of Least Privilege"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 IAM Roles"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Primitive Roles**: (Old school) Owner, Editor, Viewer. Very broad, avoid using in production.",
                "**Predefined Roles**: (Recommended) Fine-grained access to specific services (e.g., \"Storage Object Admin\").",
                "**Custom Roles**: You define exactly which permissions are included."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Service Accounts"
            },
            {
              "type": "paragraph",
              "text": "**Service Accounts** are special accounts used by applications or VMs, not by humans."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "They are identified by an email address: `name@project-id.iam.gserviceaccount.com`.",
                "They use **Keys** (JSON files) or **Identity Federation**.",
                "**Important**: You can grant a role TO a service account, and you can also grant a user permission to ACT AS a service account."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Policy Inheritance"
            },
            {
              "type": "paragraph",
              "text": "Permissions flow from **Org → Folder → Project → Resource**."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "If a user is a \"Viewer\" at the Project level, they are a \"Viewer\" for every resource in that project.",
                "You cannot \"deny\" a permission at a lower level if it was granted at a higher level."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Service Account** and grant it the \"Storage Object Viewer\" role.",
                "Add a team member (or another email you own) to your project with a **Predefined Role**.",
                "Use the **IAM Policy Troubleshooter** to check why a user has a specific permission.",
                "Research why **Primitive Roles** are considered a security risk."
              ]
            },
            {
              "type": "quiz",
              "question": "In IAM Security, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of IAM Security.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "IAM Security is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "compute-engine",
          "title": "Compute Engine",
          "description": "Master Compute Engine with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Creating VM Instances",
                "Machine Families (General purpose, Compute-optimized, etc.)",
                "Persistent Disks and Snapshots",
                "Preemptible VMs vs. Spot VMs",
                "Managed Instance Groups (MIGs)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 What is Compute Engine?"
            },
            {
              "type": "definition",
              "term": "Compute Engine is GCP's Infrastructure",
              "plain": "Compute Engine is GCP's Infrastructure-as-a-Service (IaaS) that allows you to run virtual machines on Google's global infrastructure."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 Key Concepts"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Machine Types**: From shared-core (e2-micro) to massive memory-optimized machines.",
                "**Preemptible/Spot VMs**: Highly discounted (up to 80%) but can be terminated by Google at any time with a 30-second warning. Great for batch processing.",
                "**MIGs (Managed Instance Groups)**: A group of identical VMs that scale together and automatically replace failed instances."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Launching a VM"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "A. Via Cloud Console"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Go to Compute Engine** → \"Create Instance\".",
                "**Name**: `web-server-1`.",
                "**Region**: Select a region close to you.",
                "**Machine Configuration**: `e2-micro` (Free tier eligible).",
                "**Firewall**: Check \"Allow HTTP traffic\".",
                "**Create**: Once running, click the **SSH** button to open a terminal."
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "B. Via gcloud CLI"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "gcloud compute instances create my-vm \\\n    --zone=us-central1-a \\\n    --machine-type=e2-micro \\\n    --image-project=debian-cloud \\\n    --image-family=debian-11"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Snapshot** of your VM's persistent disk.",
                "Change the **Machine Type** of an existing VM (Requires stopping the VM first).",
                "Create a **Preemptible VM** and notice the pricing difference.",
                "Set up an **Instance Template** and use it to create a Managed Instance Group."
              ]
            },
            {
              "type": "quiz",
              "question": "In Compute Engine, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Compute Engine."
              ],
              "answer": 3,
              "explanation": "Compute Engine is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "cloud-storage",
          "title": "Cloud Storage",
          "description": "Master Cloud Storage with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Buckets and Objects",
                "Storage Classes (Standard, Nearline, Coldline, Archive)",
                "Object Versioning",
                "Lifecycle Management",
                "gsutil tool"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 Storage Classes"
            },
            {
              "type": "paragraph",
              "text": "GCP has one of the simplest storage class systems:"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Standard**: High frequency access.",
                "**Nearline**: Accessed < once a month (Backup).",
                "**Coldline**: Accessed < once a quarter (Disaster Recovery).",
                "**Archive**: Accessed < once a year (Long-term compliance)."
              ]
            },
            {
              "type": "paragraph",
              "text": "**Note**: All classes have the same high performance (low latency). The difference is the cost of storage vs. cost of retrieval."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Lifecycle Management"
            },
            {
              "type": "paragraph",
              "text": "Automatically move objects to cheaper storage or delete them based on:"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Age (e.g., Delete after 365 days).",
                "Version (e.g., Keep only the last 3 versions).",
                "Storage Class (e.g., Move to Coldline after 30 days)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Managing Buckets"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "A. Via Console"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Go to Cloud Storage** → \"Create Bucket\".",
                "**Name**: Must be globally unique.",
                "**Location**: Region or Multi-region.",
                "**Storage Class**: Standard.",
                "**Access Control**: Uniform (Recommended)."
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "B. Via gsutil (CLI)"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Create a bucket\ngsutil mb gs://my-unique-bucket-name\n\n# Upload a file\ngsutil cp my-file.txt gs://my-unique-bucket-name/\n\n# Make an object public\ngsutil iam ch allUsers:objectViewer gs://my-unique-bucket-name/my-file.txt"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a bucket and upload an image.",
                "Enable **Object Versioning** on the bucket.",
                "Upload a new version of the same image and then recover the old one.",
                "Set up a **Lifecycle Policy** to move objects to Archive after 90 days.",
                "Research **Signed URLs** and how they allow temporary access to private files."
              ]
            },
            {
              "type": "quiz",
              "question": "In Cloud Storage, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Cloud Storage.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Cloud Storage is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "databases-sql-firestore",
          "title": "Databases SQL Firestore",
          "description": "Master Databases SQL Firestore with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Cloud SQL (Managed MySQL, Postgres, SQL Server)",
                "Cloud Spanner (Horizontal Scaling SQL)",
                "Cloud Firestore (Serverless NoSQL)",
                "Cloud Bigtable (High-throughput NoSQL)",
                "MemoryStore (Managed Redis/Memcached)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 Cloud SQL"
            },
            {
              "type": "paragraph",
              "text": "A fully managed relational database service."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**High Availability**: Automatic failover between zones.",
                "**Backups**: Automated daily backups.",
                "**Vertical Scaling**: Increase CPU/RAM with minimal downtime."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Cloud Spanner"
            },
            {
              "type": "paragraph",
              "text": "**The \"Holy Grail\" of databases**:"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Relational structure (SQL).",
                "Horizontal scalability (like NoSQL).",
                "Strong consistency across the globe.",
                "**Use Case**: Global financial systems."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 Firestore"
            },
            {
              "type": "paragraph",
              "text": "**Serverless NoSQL**:"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Document-based storage.",
                "Real-time synchronization (Perfect for mobile/web apps).",
                "Scalable to millions of users automatically."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Cloud SQL Instance** (MySQL).",
                "Connect to it using the **Cloud SQL Auth Proxy**.",
                "Create a **Firestore Database** in Native Mode.",
                "Add a \"Document\" to a \"Collection\" and query it via the console.",
                "Research when to use **Bigtable** vs. **Firestore** (Hint: Look at data volume and latency)."
              ]
            },
            {
              "type": "quiz",
              "question": "In Databases SQL Firestore, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Databases SQL Firestore.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Databases SQL Firestore is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "vpc-networking",
          "title": "VPC Networking",
          "description": "Master VPC Networking with hands-on examples, architectural diagrams, and structured exercises.",
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
                "VPC Basics (GCP's Global Network)",
                "Subnets (Regional resources)",
                "Firewall Rules (Tags and Service Accounts)",
                "VPC Peering vs. Shared VPC",
                "Cloud Load Balancing"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 The Global VPC"
            },
            {
              "type": "paragraph",
              "text": "In GCP, a **VPC is a Global resource**."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "You can have a single VPC with subnets in USA, Europe, and Asia.",
                "Resources in different regions can talk to each other over Google's internal fiber network using private IP addresses."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 Firewall Rules"
            },
            {
              "type": "paragraph",
              "text": "GCP firewalls use a **Target-based** approach."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Network Tags**: Apply a tag (e.g., `http-server`) to a VM, and the firewall rule for that tag will automatically apply.",
                "**Priority**: Rules are processed based on a number (0-65535). Lower number = Higher priority."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Shared VPC vs. VPC Peering"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**VPC Peering**: Connects two different VPCs (can be in different projects).",
                "**Shared VPC**: Allows multiple projects to share a single centralized VPC. One project is the \"Host\", and others are \"Service Projects\".",
                "Create a **Custom VPC** and add two subnets in different regions.",
                "Launch a VM in each subnet and **ping** between them using their internal IPs.",
                "Create a **Firewall Rule** that only allows traffic to VMs with the tag `allow-web`.",
                "Set up a **Cloud Load Balancer** (HTTP/S) and point it to an instance group.",
                "Research **Private Google Access** (how VMs with no external IPs can access Google APIs)."
              ]
            },
            {
              "type": "quiz",
              "question": "In VPC Networking, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of VPC Networking.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "VPC Networking is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "containers-gke",
          "title": "Containers GKE",
          "description": "Master Containers GKE with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "GKE (Google Kubernetes Engine)",
                "Standard vs. Autopilot Clusters",
                "Pods, Services, and Deployments",
                "Artifact Registry (Managing Docker images)",
                "Scaling and Auto-repair"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 GKE Autopilot vs. Standard"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Standard Mode**: You manage the nodes (VMs). You have full control but also full responsibility.",
                "**Autopilot Mode**: Google manages the entire infrastructure (nodes). You only manage your containers (pods). You pay for the resources your pods use."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 Core Kubernetes Objects"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Pod**: The smallest unit (one or more containers).",
                "**Service**: Provides a stable IP address or DNS name for a set of pods.",
                "**Deployment**: Manages the desired state of your pods (e.g., \"Always keep 3 pods running\")."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Deploying to GKE"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Artifact Registry**: Create a repository to store your Docker images.",
                "**Cluster**: Create a GKE Autopilot cluster.",
                "**Deployment**:"
              ]
            },
            {
              "type": "code",
              "language": "bash",
              "code": "    kubectl create deployment hello-server --image=us-docker.pkg.dev/google-samples/containers/gke/hello-app:1.0"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Expose**:"
              ]
            },
            {
              "type": "code",
              "language": "bash",
              "code": "    kubectl expose deployment hello-server --type=LoadBalancer --port=80 --target-port=8080"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Access**: Find the External IP of the service and visit it in your browser.",
                "Build a simple Docker image locally and push it to **Artifact Registry**.",
                "Deploy that image to your GKE cluster.",
                "Scale your deployment to **5 replicas** using `kubectl scale`.",
                "Observe how GKE handles a \"Pod Failure\" by deleting a pod manually.",
                "Research **Binary Authorization** for securing your GKE supply chain."
              ]
            },
            {
              "type": "quiz",
              "question": "In Containers GKE, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Containers GKE."
              ],
              "answer": 3,
              "explanation": "Containers GKE is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "serverless-cloudrun",
          "title": "Serverless CloudRun",
          "description": "Master Serverless CloudRun with hands-on examples, architectural diagrams, and structured exercises.",
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
                "App Engine (Standard vs. Flexible)",
                "Cloud Run (Serverless Containers)",
                "Cloud Functions (Event-driven)",
                "Scaling to Zero"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Cloud Run"
            },
            {
              "type": "paragraph",
              "text": "**The modern choice for serverless**:"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Runs any Docker container.",
                "**Scale to Zero**: If no traffic is coming in, you pay $0.",
                "Automatic HTTPS and Load Balancing.",
                "**Use Case**: Web apps, Microservices, Background jobs."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Cloud Functions"
            },
            {
              "type": "paragraph",
              "text": "Small, single-purpose snippets of code that run in response to events."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Triggered by Cloud Storage uploads, Pub/Sub messages, or HTTP requests.",
                "Perfect for glue code and automation."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Deploying to Cloud Run"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Via gcloud CLI"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# Deploy a container from Artifact Registry\ngcloud run deploy my-service \\\n    --image=gcr.io/google-samples/hello-app:1.0 \\\n    --platform=managed \\\n    --region=us-central1 \\\n    --allow-unauthenticated"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Deploy a \"Hello World\" app to **Cloud Run**.",
                "Set a **Concurrency** limit on your Cloud Run service.",
                "Create a **Cloud Function** triggered by an upload to a Cloud Storage bucket.",
                "Research the difference between **App Engine Standard** and **App Engine Flexible**.",
                "Why is Cloud Run better than Cloud Functions for complex applications?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Serverless CloudRun, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Serverless CloudRun.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Serverless CloudRun is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "big-data-bigquery",
          "title": "Big Data BigQuery",
          "description": "Master Big Data BigQuery with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Advanced | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Data Warehousing basics",
                "BigQuery Architecture (Separation of Storage and Compute)",
                "Datasets, Tables, and Views",
                "Partitioning and Clustering (Optimizing for cost/performance)",
                "BigQuery ML (Running ML with SQL)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 What is BigQuery?"
            },
            {
              "type": "definition",
              "term": "A fully managed, serverless data warehouse that enables scalable analysis over petabytes of data. It is a Platform as a Service (PaaS) that supports querying using ANSI SQL.",
              "plain": "A fully managed, serverless data warehouse that enables scalable analysis over petabytes of data. It is a Platform as a Service (PaaS) that supports querying using ANSI SQL."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 Optimization Techniques"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Partitioning**: Dividing a table into segments based on a column (e.g., Date). This reduces the amount of data scanned.",
                "**Clustering**: Sorting the data based on one or more columns. Great for range queries."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Querying Public Data"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Open BigQuery Console**.",
                "Add a **Public Dataset** (e.g., `google_trends`).",
                "Run a query:"
              ]
            },
            {
              "type": "code",
              "language": "sql",
              "code": "    SELECT term, rank, refresh_date\n    FROM `bigquery-public-data.google_trends.top_terms`\n    WHERE country_name = 'United States'\n    ORDER BY refresh_date DESC\n    LIMIT 10"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Dataset** and a **Table** in your own project.",
                "Upload a CSV file from Cloud Storage into BigQuery.",
                "Create a **Partitioned Table** based on a timestamp column.",
                "Run a query and check the **\"Query plan\"** to see how much data was scanned.",
                "Research **BigQuery ML** and how to create a simple linear regression model using SQL."
              ]
            },
            {
              "type": "quiz",
              "question": "In Big Data BigQuery, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Big Data BigQuery.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Big Data BigQuery is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "data-integration-pubsub",
          "title": "Data Integration PubSub",
          "description": "Master Data Integration PubSub with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Pub/Sub (Messaging Middleware)",
                "Topics and Subscriptions (Pull vs. Push)",
                "Dataflow (Apache Beam managed service)",
                "Dataproc (Managed Hadoop/Spark)",
                "Looker (BI and Data Visualization)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Pub/Sub"
            },
            {
              "type": "paragraph",
              "text": "A global messaging service that decouples senders (publishers) from receivers (subscribers)."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Push**: Pub/Sub sends the message to a webhook.",
                "**Pull**: The subscriber asks Pub/Sub for new messages."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 Dataflow"
            },
            {
              "type": "paragraph",
              "text": "A serverless service for unified stream and batch data processing."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Based on **Apache Beam**.",
                "Automatically scales up/down based on the workload.",
                "**Use Case**: Real-time log analysis, fraud detection."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Pub/Sub Topic** and a **Subscription**.",
                "Publish a message to the topic and \"Pull\" it via the console.",
                "Research the difference between **Dataflow** (serverless) and **Dataproc** (cluster-based).",
                "Look up a **Dataflow Template** that moves data from Pub/Sub to BigQuery."
              ]
            },
            {
              "type": "quiz",
              "question": "In Data Integration PubSub, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Data Integration PubSub.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Data Integration PubSub is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "monitoring-logging",
          "title": "Monitoring Logging",
          "description": "Master Monitoring Logging with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Google Cloud Operations Suite (formerly Stackdriver)",
                "Cloud Monitoring (Uptime checks, Dashboards, Alerts)",
                "Cloud Logging (Log Explorer, Sinks)",
                "Cloud Debugger and Profiler"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.1 Cloud Monitoring"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Dashboards**: Create visual charts of VM CPU, Disk, or Database connections.",
                "**Uptime Checks**: Automatically ping your web server from different global locations to ensure it's \"Up\".",
                "**Alerting**: Get an email or SMS if the error rate exceeds a certain percentage."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.2 Cloud Logging"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Log Explorer**: Centralized place to search all logs from all services.",
                "**Log Sinks**: Export logs to S3 (Cloud Storage), BigQuery, or Pub/Sub for long-term storage or analysis."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create an **Uptime Check** for a VM or Cloud Run service.",
                "Set up an **Alerting Policy** that notifies you if a VM goes down.",
                "Use the **Log Explorer** to find \"Error\" logs in your project.",
                "Create a **Log Sink** to export all firewall logs to BigQuery."
              ]
            },
            {
              "type": "quiz",
              "question": "In Monitoring Logging, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Monitoring Logging."
              ],
              "answer": 3,
              "explanation": "Monitoring Logging is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "security-services",
          "title": "Security Services",
          "description": "Master Security Services with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Cloud Armor (WAF and DDoS protection)",
                "Cloud KMS (Key Management Service)",
                "Secret Manager",
                "IAP (Identity-Aware Proxy)",
                "VPC Service Controls"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.1 Cloud Armor"
            },
            {
              "type": "paragraph",
              "text": "Protect your applications from internet threats."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**WAF Rules**: Block SQL injection, XSS, and IP ranges.",
                "**DDoS Protection**: Mitigate Layer 7 attacks."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.2 Identity-Aware Proxy (IAP)"
            },
            {
              "type": "paragraph",
              "text": "Allows you to control access to your applications running on GCP without using a VPN."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Users authenticate via Google login.",
                "IAP checks if they have the correct IAM role before letting them through."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Store a database password in **Secret Manager**.",
                "Create a **Cloud KMS Key** and use it to encrypt a file in Cloud Storage.",
                "Research **VPC Service Controls** and how they prevent data exfiltration.",
                "Look up the **IAM Recommender** and see if it suggests removing unused permissions from your users."
              ]
            },
            {
              "type": "quiz",
              "question": "In Security Services, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Security Services.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Security Services is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "infrastructure-as-code",
          "title": "Infrastructure As Code",
          "description": "Master Infrastructure As Code with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Terraform on Google Cloud",
                "Managing State in Cloud Storage",
                "Creating VPCs and VMs with HCL",
                "Deployment Manager (Native alternative)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.1 Why Terraform?"
            },
            {
              "type": "paragraph",
              "text": "While Google has its own tool (Deployment Manager), **Terraform** is the industry standard for GCP."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "It is multi-cloud.",
                "Huge community support.",
                "Excellent GCP Provider maintained by Google."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.2 Terraform Configuration Example"
            },
            {
              "type": "code",
              "language": "hcl",
              "code": "resource \"google_compute_network\" \"vpc_network\" {\n  name = \"terraform-network\"\n}\n\nresource \"google_compute_instance\" \"vm_instance\" {\n  name         = \"terraform-instance\"\n  machine_type = \"e2-micro\"\n  zone         = \"us-central1-a\"\n\n  boot_disk {\n    initialize_params {\n      image = \"debian-cloud/debian-11\"\n    }\n  }\n\n  network_interface {\n    network = google_compute_network.vpc_network.name\n  }\n}"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Install **Terraform** locally.",
                "Initialize a GCP project and create a **Cloud Storage Bucket** using Terraform.",
                "Configure a **Remote Backend** to store your Terraform state file in a GCS bucket.",
                "Run `terraform plan` and `terraform apply` to deploy a network."
              ]
            },
            {
              "type": "quiz",
              "question": "In Infrastructure As Code, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Infrastructure As Code.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Infrastructure As Code is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "devops-ci-cd",
          "title": "DevOps CI CD",
          "description": "Master DevOps CI CD with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Cloud Build (Managed CI/CD)",
                "Build triggers from GitHub/GitLab",
                "Artifact Registry (Container registry)",
                "Cloud Deploy (Continuous Delivery for GKE/Cloud Run)",
                "Binary Authorization"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.1 Cloud Build"
            },
            {
              "type": "paragraph",
              "text": "A serverless service that executes your builds on Google Cloud infrastructure."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Uses a `cloudbuild.yaml` file to define steps.",
                "Each step is a Docker container."
              ]
            },
            {
              "type": "paragraph",
              "text": "**Example `cloudbuild.yaml`**:"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "steps:\n- name: 'gcr.io/cloud-builders/docker'\n  args: ['build', '-t', 'gcr.io/$PROJECT_ID/my-image', '.']\nimages:\n- 'gcr.io/$PROJECT_ID/my-image'"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.2 Cloud Deploy"
            },
            {
              "type": "paragraph",
              "text": "The managed delivery service for Google Cloud."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Specifically built for **GKE**, **Cloud Run**, and **Anthos**.",
                "Supports rollbacks and canary deployments."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Cloud Build Trigger** connected to a GitHub repository.",
                "Write a `cloudbuild.yaml` that builds a Docker image and pushes it to Artifact Registry.",
                "Set up a **Cloud Deploy Pipeline** to deploy an app to Cloud Run.",
                "Experiment with a **Rollback** in Cloud Deploy after a failed deployment."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Google Cloud Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In DevOps CI CD, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of DevOps CI CD.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "DevOps CI CD is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "ai-machine-learning-vertex",
          "title": "AI Machine Learning Vertex",
          "description": "Master AI Machine Learning Vertex with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Vertex AI (Unified ML Platform)",
                "AutoML vs. Custom Training",
                "Pre-trained APIs (Vision, Video, Natural Language, Translation)",
                "Feature Store and Model Monitoring",
                "Training on GPUs and TPUs"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.1 Vertex AI"
            },
            {
              "type": "paragraph",
              "text": "Vertex AI brings together everything you need to build and scale ML models."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**AutoML**: Train high-quality models without writing code. You provide the data, Google handles the training.",
                "**Custom Training**: Use your own code (TensorFlow, PyTorch, Scikit-learn) with Vertex AI Training."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.2 Pre-trained AI Services"
            },
            {
              "type": "paragraph",
              "text": "For many use cases, you don't need to train a model at all."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Vision API**: Detect objects and text in images.",
                "**Natural Language API**: Analyze sentiment and entities in text.",
                "**Translation API**: Translate text between hundreds of languages."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Use the **Google Cloud Vision API** (via the console demo) to analyze a photo of your choice.",
                "Research the difference between **GPUs** (Graphics Processing Units) and Google's custom **TPUs** (Tensor Processing Units).",
                "Look up how to use **Vertex AI Pipelines** to automate your ML workflow.",
                "Try a \"Hello World\" in **AutoML Tables** using a simple CSV dataset."
              ]
            },
            {
              "type": "quiz",
              "question": "In AI Machine Learning Vertex, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of AI Machine Learning Vertex."
              ],
              "answer": 3,
              "explanation": "AI Machine Learning Vertex is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "generative-ai-gemini",
          "title": "Generative AI Gemini",
          "description": "Master Generative AI Gemini with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Generative AI Studio",
                "Model Garden (Gemini, PaLM 2, Llama 2)",
                "Prompt Engineering basics",
                "Multimodal AI (Text, Image, Video, Audio)",
                "Vertex AI Search and Conversation"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.1 Gemini: Google's Multimodal LLM"
            },
            {
              "type": "paragraph",
              "text": "Gemini is built from the ground up to be multimodal."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Gemini Ultra**: For highly complex tasks.",
                "**Gemini Pro**: The best model for scaling across a wide range of tasks.",
                "**Gemini Flash**: Optimized for speed and cost-efficiency."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.2 Generative AI Studio"
            },
            {
              "type": "paragraph",
              "text": "A tool in the console that allows you to quickly prototype and customize generative AI models."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Prompt Gallery**: Ready-to-use prompts for common tasks.",
                "**Temperature & Top-K**: Tuning how \"creative\" or \"random\" the model's response is."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Open **Generative AI Studio** and try a \"Text Prompt\" using the Gemini Pro model.",
                "Experiment with the **Temperature** setting. How does a value of `0.0` compare to `1.0`?",
                "Use the **Model Garden** to explore open-source models like Llama or Mistral running on GCP.",
                "Research **Grounding** and how it helps reduce AI hallucinations by using your own data (RAG)."
              ]
            },
            {
              "type": "quiz",
              "question": "In Generative AI Gemini, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Generative AI Gemini.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Generative AI Gemini is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "hybrid-cloud-anthos",
          "title": "Hybrid Cloud Anthos",
          "description": "Master Hybrid Cloud Anthos with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Anthos?",
                "Anthos Clusters (on AWS, Azure, and Bare Metal)",
                "Anthos Config Management",
                "Anthos Service Mesh (Istio-based)",
                "Multi-cluster management"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.1 Why Anthos?"
            },
            {
              "type": "paragraph",
              "text": "Anthos allows you to build and manage modern hybrid applications across environments."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Consistency**: Run the same Kubernetes setup on GCP and on-prem.",
                "**Centralized Control**: Manage all your clusters from a single \"Fleet\" dashboard in GCP."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.2 Anthos Config Management"
            },
            {
              "type": "paragraph",
              "text": "Allows you to automate policy and security for your clusters at scale."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**GitOps**: You define your cluster configuration in a Git repository.",
                "**Sync**: Anthos automatically applies those changes to all clusters in your fleet."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Research **GKE on-prem** and how it integrates with your physical data center.",
                "What is a **Service Mesh** and why is it useful for microservices communication?",
                "Look up **GKE Multi-cluster Ingress** for routing traffic across different regions.",
                "How does Anthos help in avoiding \"Cloud Vendor Lock-in\"?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Hybrid Cloud Anthos, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Hybrid Cloud Anthos.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Hybrid Cloud Anthos is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "architecture-framework",
          "title": "Architecture Framework",
          "description": "Master Architecture Framework with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Expert | ⏱ **Time**: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The 6 Pillars of the GCP Architecture Framework",
                "System Design",
                "Operational Excellence",
                "Security, Privacy, and Compliance",
                "Reliability",
                "Cost Optimization",
                "Performance Optimization"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.1 The 6 Pillars"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**System Design**: Foundation of your architecture (regions, zones, managed services).",
                "**Operational Excellence**: Designing for deployment, monitoring, and recovery.",
                "**Security, Privacy, and Compliance**: Shared responsibility and data protection.",
                "**Reliability**: Scalability and high availability (MIGs, Multi-region).",
                "**Cost Optimization**: Right-sizing and using the most efficient services.",
                "**Performance Optimization**: Minimizing latency and maximizing throughput."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.2 Best Practices"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Automate everything**: Use Terraform and CI/CD.",
                "**Design for failure**: Assume everything will break and build redundancy.",
                "**Use Managed Services**: Focus on your code, not the servers."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Read the **Google Cloud Architecture Framework** official documentation.",
                "Choose one pillar (e.g., Reliability) and identify 3 GCP services that help implement it.",
                "Research the **\"Site Reliability Engineering\" (SRE)** principles developed by Google.",
                "How does **Serverless** (Cloud Run) contribute to both **Cost** and **Performance** optimization?"
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Google Cloud Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In Architecture Framework, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Architecture Framework.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Architecture Framework is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
