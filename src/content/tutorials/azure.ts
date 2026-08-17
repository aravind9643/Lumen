import type { Tutorial } from '../types'

export const azureCloud: Tutorial = {
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
  "prerequisites": [
    "Basic computing and networking knowledge."
  ],
  "outcomes": [
    "Manage enterprise identity and access control with Microsoft Entra ID and RBAC",
    "Deploy and scale Azure Virtual Machines, VM Scale Sets, and App Services",
    "Design reliable cloud storage architectures with Azure Blob and Files",
    "Implement enterprise networking with Azure VNets, NSGs, and VPN Gateways"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "azure-fundamentals",
          "title": "Azure Fundamentals",
          "description": "Master Azure Fundamentals with hands-on examples, architectural diagrams, and structured exercises.",
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
                "What is Microsoft Azure?",
                "Azure Resource Hierarchy (Management Groups, Subscriptions, Resource Groups)",
                "Azure Regions and Availability Zones (AZs)",
                "Azure Resource Manager (ARM)",
                "Azure Portal, CLI, and PowerShell"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 The Azure Resource Hierarchy"
            },
            {
              "type": "paragraph",
              "text": "Azure is organized in a strict hierarchy for management and billing."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Management Groups**: Used to manage multiple subscriptions (governance).",
                "**Subscriptions**: The billing unit. All resources belong to a subscription.",
                "**Resource Groups (RG)**: A logical container for related resources (e.g., \"Web-App-Dev\").",
                "**Resources**: The actual services (VMs, Storage Accounts, VNets)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 Regions & Availability Zones"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Regions**: Geographical areas (e.g., `East US`, `South India`).",
                "**Availability Zones**: Physically separate data centers within a region to protect against data center failures.",
                "**Region Pairs**: Regions paired with another region 300+ miles away for disaster recovery (e.g., `East US` paired with `West US`)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Interacting with Azure"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Azure Portal**: The web interface.",
                "**Azure CLI**: Command-line tool (cross-platform).",
                "**Azure PowerShell**: Specifically for Windows/PowerShell users.",
                "**Cloud Shell**: Browser-based terminal with CLI and PowerShell installed.",
                "Create a **Free Azure Account** (Get $200 credit and 12 months of free services).",
                "Create your first **Resource Group** named `Learning-RG`.",
                "Open the **Cloud Shell** and run `az version`.",
                "Research the difference between **Azure Government** and the standard Azure public cloud."
              ]
            },
            {
              "type": "quiz",
              "question": "In Azure Fundamentals, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Azure Fundamentals."
              ],
              "answer": 3,
              "explanation": "Azure Fundamentals is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "entra-id-governance",
          "title": "Entra ID Governance",
          "description": "Master Entra ID Governance with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Microsoft Entra ID (formerly Azure Active Directory)",
                "RBAC (Role-Based Access Control)",
                "Azure Policies",
                "Resource Locks and Tags",
                "Self-Service Password Reset (SSPR)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Microsoft Entra ID"
            },
            {
              "type": "definition",
              "term": "Azure's cloud",
              "plain": "Azure's cloud-based identity and access management service. It is NOT the same as Windows Active Directory."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Tenants**: A dedicated instance of Entra ID for your organization.",
                "**Service Principals**: Identities for applications to access resources."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 RBAC (Role-Based Access Control)"
            },
            {
              "type": "paragraph",
              "text": "How you manage \"Who\" can do \"What\" on your resources."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Role Definition**: What actions are allowed (e.g., \"Virtual Machine Contributor\").",
                "**Scope**: Where the role applies (Subscription, Resource Group, or Resource).",
                "**Security Principal**: Who gets the role (User, Group, Service Principal)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Governance Tools"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Azure Policy**: Enforces rules (e.g., \"Allowed Regions\", \"Required Tags\").",
                "**Resource Locks**: Prevents accidental deletion or modification (`ReadOnly`, `CanNotDelete`).",
                "**Tags**: Metadata for organizing and billing (e.g., `Environment: Production`).",
                "Create a new **User** in your Entra ID tenant.",
                "Assign a **Contributor** role to that user at the Resource Group level.",
                "Apply a **CanNotDelete Lock** to a resource group and try to delete it.",
                "Create an **Azure Policy** that prevents creating resources in a specific region."
              ]
            },
            {
              "type": "quiz",
              "question": "In Entra ID Governance, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Entra ID Governance.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Entra ID Governance is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "compute-virtual-machines",
          "title": "Compute Virtual Machines",
          "description": "Master Compute Virtual Machines with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Creating Windows and Linux VMs",
                "VM Sizes and Series (A, B, D, E, F, etc.)",
                "Availability Sets vs. Availability Zones",
                "Virtual Machine Scale Sets (VMSS)",
                "Azure App Service (PaaS)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 Azure Virtual Machines"
            },
            {
              "type": "paragraph",
              "text": "Azure VMs are Infrastructure-as-a-Service (IaaS)."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Availability Set**: Protects against hardware failure within a data center.",
                "**Availability Zone**: Protects against entire data center failure.",
                "**SLA**: Azure offers up to 99.99% availability for VMs in AZs."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 Virtual Machine Scale Sets (VMSS)"
            },
            {
              "type": "paragraph",
              "text": "Scale sets allow you to create and manage a group of load-balanced VMs. The number of VM instances can automatically increase or decrease in response to demand or a defined schedule."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 Azure App Service"
            },
            {
              "type": "paragraph",
              "text": "A Platform-as-a-Service (PaaS) offering to build, deploy, and scale web apps and APIs."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Supports .NET, .NET Core, Java, Ruby, Node.js, PHP, or Python.",
                "No servers to manage.",
                "Includes built-in CI/CD and SSL support."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Launching a Windows VM"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Via Azure Portal"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Search** for \"Virtual Machines\" → \"Create\" → \"Azure virtual machine\".",
                "**Basics**: Select your RG, Name it `my-vm-01`.",
                "**Image**: Select `Windows Server 2022 Datacenter`.",
                "**Size**: `Standard_B2s` (Burstables are great for testing).",
                "**Inbound Ports**: Allow RDP (3389).",
                "**Create**: Once running, click \"Connect\" → \"RDP\" to download the connection file.",
                "Launch a **Linux VM (Ubuntu)** and SSH into it.",
                "Change the **VM Size** (Note that the VM must restart).",
                "Create an **Azure App Service** and deploy a \"Hello World\" HTML page.",
                "Research the difference between **Fault Domains** and **Update Domains**."
              ]
            },
            {
              "type": "quiz",
              "question": "In Compute Virtual Machines, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Compute Virtual Machines.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Compute Virtual Machines is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "storage-accounts-blobs",
          "title": "Storage Accounts Blobs",
          "description": "Master Storage Accounts Blobs with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Storage Account Types",
                "Redundancy Options (LRS, GRS, ZRS, RA-GRS)",
                "Blob Storage (Containers)",
                "Azure Files (SMB/NFS Shares)",
                "Access Tiers (Hot, Cool, Cold, Archive)",
                "SAS (Shared Access Signatures)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 Redundancy Options"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**LRS (Locally Redundant)**: 3 copies in 1 data center (Lowest cost).",
                "**ZRS (Zone Redundant)**: 3 copies in 3 different data centers in 1 region.",
                "**GRS (Geo-Redundant)**: Replicated to a secondary region 300+ miles away."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Storage Services"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Blobs**: For massive amounts of unstructured data (Images, videos).",
                "**Files**: Managed file shares for cloud or on-premises.",
                "**Queues**: Messaging for microservices.",
                "**Tables**: NoSQL storage for structured data."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Access Tiers"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Hot**: Frequently accessed data. (Low access cost, high storage cost).",
                "**Cool**: Accessed < 30 days.",
                "**Cold**: Accessed < 90 days.",
                "**Archive**: Accessed < 180 days. (High access cost, very low storage cost)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Managing Storage"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "Via Azure CLI"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# 1. Create a storage account\naz storage account create --name mystorage123 --resource-group my-rg --location eastus --sku Standard_LRS\n\n# 2. Create a container\naz storage container create --name images --account-name mystorage123\n\n# 3. Upload a blob\naz storage blob upload --container-name images --file image.jpg --name my-image.jpg --account-name mystorage123"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Storage Account** and upload a file to a **Blob Container**.",
                "Mount an **Azure File Share** to your local computer (Windows/Linux).",
                "Generate a **SAS Token** to allow temporary access to a private blob.",
                "Set up a **Lifecycle Management Policy** to move blobs to Archive after 60 days."
              ]
            },
            {
              "type": "quiz",
              "question": "In Storage Accounts Blobs, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Storage Accounts Blobs.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Storage Accounts Blobs is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "databases-sql-cosmosdb",
          "title": "Databases SQL CosmosDB",
          "description": "Master Databases SQL CosmosDB with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Azure SQL Database (PaaS)",
                "Azure SQL Managed Instance (For migrations)",
                "Azure Cosmos DB (Multi-model NoSQL)",
                "Partitioning and Throughput (RU/s)",
                "Scaling and Global Distribution"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 Azure SQL Options"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Azure SQL Database**: A single managed database. Great for new cloud-native apps.",
                "**SQL Managed Instance**: Near 100% compatibility with on-prem SQL Server. Best for \"Lift and Shift\".",
                "**SQL on Azure VMs**: Full control over the OS and DB. You manage everything (IaaS)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Azure Cosmos DB"
            },
            {
              "type": "paragraph",
              "text": "**Cosmos DB** is a globally distributed, multi-model database service."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**APIs**: SQL (Core), MongoDB, Cassandra, Gremlin (Graph), Table.",
                "**Consistency Levels**: From \"Strong\" to \"Eventual\".",
                "**Scale**: Unlimited storage and throughput."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Single Azure SQL Database** on the \"Basic\" tier.",
                "Use **Azure Data Studio** to connect to your database.",
                "Create a **Cosmos DB Account** using the SQL API.",
                "Add an item to a Cosmos DB container and observe the **RU (Request Unit)** cost.",
                "Research the **Azure Database Migration Service (DMS)**."
              ]
            },
            {
              "type": "quiz",
              "question": "In Databases SQL CosmosDB, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Databases SQL CosmosDB."
              ],
              "answer": 3,
              "explanation": "Databases SQL CosmosDB is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "vnet-networking",
          "title": "VNet Networking",
          "description": "Master VNet Networking with hands-on examples, architectural diagrams, and structured exercises.",
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
                "VNet Basics (Address Spaces and Subnets)",
                "NSGs (Network Security Groups)",
                "ASGs (Application Security Groups)",
                "VNet Peering",
                "Azure Bastion (Secure SSH/RDP)",
                "Load Balancer vs. Application Gateway"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 Virtual Network (VNet)"
            },
            {
              "type": "definition",
              "term": "A private network in the cloud. It is a **Regional** resource.",
              "plain": "A private network in the cloud. It is a **Regional** resource."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**VNet Peering**: Connects two VNets in the same or different regions. Traffic stays on the Microsoft backbone."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 Security Rules"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**NSGs**: Contain security rules that allow or deny inbound/outbound traffic (Priority-based).",
                "**ASGs**: Allow you to group VMs by function (e.g., \"Web-Servers\") and use them as a source/destination in NSG rules.",
                "**Azure Bastion**: Allows you to connect to VMs via the portal over SSL, without needing a public IP on the VM."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Load Balancing"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Azure Load Balancer**: Layer 4 (TCP/UDP). Very high performance.",
                "**Application Gateway**: Layer 7 (HTTP/HTTPS). Includes a **WAF** and supports path-based routing.",
                "**Azure Front Door**: Global CDN and Layer 7 load balancer.",
                "Create a **VNet** with two subnets: `Frontend` and `Backend`.",
                "Create an **NSG** that allows port 80 to the `Frontend` subnet but blocks all traffic to `Backend`.",
                "Set up **VNet Peering** between two VNets in different regions.",
                "Launch a VM without a public IP and connect to it using **Azure Bastion**."
              ]
            },
            {
              "type": "quiz",
              "question": "In VNet Networking, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of VNet Networking.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "VNet Networking is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "containers-aks",
          "title": "Containers AKS",
          "description": "Master Containers AKS with hands-on examples, architectural diagrams, and structured exercises.",
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
                "ACI (Azure Container Instances)",
                "ACR (Azure Container Registry)",
                "AKS (Azure Kubernetes Service)",
                "AKS Cluster Architecture (Control Plane vs. Nodes)",
                "Azure CNI vs. Kubenet"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Azure Container Instances (ACI)"
            },
            {
              "type": "paragraph",
              "text": "The fastest and simplest way to run a container in Azure without managing any virtual machines or orchestrators."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Serverless Containers**.",
                "Great for short-lived tasks or simple web apps."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 Azure Kubernetes Service (AKS)"
            },
            {
              "type": "paragraph",
              "text": "A managed Kubernetes service where Microsoft manages the Control Plane for free."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Auto-scaling**: Cluster Autoscaler and Horizontal Pod Autoscaler (HPA).",
                "**Integration**: Integrates with Azure AD for identity.",
                "**Cost**: You only pay for the worker nodes."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Deploying to AKS"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Create Registry**: Create an **ACR** and push your Docker image.",
                "**Create Cluster**:"
              ]
            },
            {
              "type": "code",
              "language": "bash",
              "code": "    az aks create --resource-group my-rg --name my-aks --node-count 1 --generate-ssh-keys --attach-acr my-registry"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Get Credentials**:"
              ]
            },
            {
              "type": "code",
              "language": "bash",
              "code": "    az aks get-credentials --resource-group my-rg --name my-aks"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Deploy**: Use `kubectl apply -f deployment.yaml` to run your containers.",
                "Push a Docker image to **ACR**.",
                "Deploy that image to **ACI** and access the public URL.",
                "Launch a small **AKS Cluster** (use `B-series` nodes to save money).",
                "Scale your AKS nodes from 1 to 3 manually.",
                "Research **Azure Arc** for managing Kubernetes clusters outside of Azure."
              ]
            },
            {
              "type": "quiz",
              "question": "In Containers AKS, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Containers AKS.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Containers AKS is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "serverless-functions",
          "title": "Serverless Functions",
          "description": "Master Serverless Functions with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Azure Functions (Serverless code)",
                "Triggers and Bindings",
                "Logic Apps (Serverless workflows)",
                "Event Grid (Event routing)",
                "Pricing Models (Consumption vs. Premium)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Azure Functions"
            },
            {
              "type": "paragraph",
              "text": "Run snippets of code in the cloud without managing infrastructure."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Triggers**: What starts the function (HTTP, Timer, Blob storage change).",
                "**Bindings**: How you connect to other services (S3, Cosmos DB) without writing connection code.",
                "**Durable Functions**: For stateful workflows."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Azure Logic Apps"
            },
            {
              "type": "paragraph",
              "text": "A low-code/no-code service to automate workflows."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Visual Designer**: Drag and drop connectors (e.g., \"When an email arrives\", \"Post to Slack\").",
                "**Connectors**: 200+ pre-built connectors for Microsoft and 3rd party services."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: HTTP Trigger Function"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Create Function App**: In the portal, select \"Consumption plan\".",
                "**Create Function**: Select \"HTTP Trigger\".",
                "**Code**:"
              ]
            },
            {
              "type": "code",
              "language": "csharp",
              "code": "    public static async Task<IActionResult> Run(HttpRequest req, ILogger log)\n    {\n        string name = req.Query[\"name\"];\n        return new OkObjectResult($\"Hello, {name}. Welcome to Azure Functions!\");\n    }"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Test**: Click \"Get function URL\" and paste it into your browser with `?name=User`.",
                "Create an **Azure Function** triggered by a new file in a Blob Storage container.",
                "Build a **Logic App** that sends you an email whenever a specific hashtag is mentioned on Twitter/X (Requires a connector).",
                "Research the **Cold Start** problem and how the \"Premium Plan\" solves it.",
                "What is the difference between **Azure Functions** and **WebJobs**?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Serverless Functions, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Serverless Functions.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Serverless Functions is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "data-analytics-synapse",
          "title": "Data Analytics Synapse",
          "description": "Master Data Analytics Synapse with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Azure Synapse Analytics (Data Warehousing)",
                "Azure Databricks (Managed Apache Spark)",
                "Azure Data Factory (ETL / Data pipelines)",
                "Azure Data Lake Storage Gen2"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 Azure Synapse Analytics"
            },
            {
              "type": "paragraph",
              "text": "A limitless analytics service that brings together enterprise data warehousing and Big Data analytics."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**SQL Pools**: Traditional data warehousing.",
                "**Spark Pools**: For data engineering and machine learning.",
                "**Serverless SQL**: Query data directly from the data lake using SQL."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 Azure Data Factory (ADF)"
            },
            {
              "type": "paragraph",
              "text": "The \"Orchestrator\" for data movement."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Activities**: Copy data, run a notebook, execute a stored procedure.",
                "**Pipelines**: A logical grouping of activities.",
                "**Integration Runtime**: The compute used to run the activities."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create an **Azure Data Factory** instance.",
                "Create a **Copy Activity** to move data from a CSV file in Blob Storage to a SQL Database.",
                "Launch an **Azure Synapse Workspace**.",
                "Use **Serverless SQL** to query a Parquet file stored in Data Lake Gen2.",
                "Research the difference between **Azure HDInsight** and **Azure Databricks**."
              ]
            },
            {
              "type": "quiz",
              "question": "In Data Analytics Synapse, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Data Analytics Synapse."
              ],
              "answer": 3,
              "explanation": "Data Analytics Synapse is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "security-keyvault",
          "title": "Security KeyVault",
          "description": "Master Security KeyVault with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Azure Key Vault (Secrets, Keys, Certificates)",
                "Microsoft Defender for Cloud (Cloud Security Posture Management)",
                "Microsoft Sentinel (SIEM)",
                "Azure DDoS Protection",
                "Managed Identities"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Azure Key Vault"
            },
            {
              "type": "paragraph",
              "text": "Centralize storage for application secrets."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Secrets**: Passwords, connection strings, API keys.",
                "**Keys**: Cryptographic keys for encryption (KMS).",
                "**Certificates**: Managed SSL/TLS certificates."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 Managed Identities (The \"Best Practice\")"
            },
            {
              "type": "paragraph",
              "text": "Eliminates the need for developers to manage credentials."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The VM or App Service gets an identity in Entra ID.",
                "You grant that identity access to Key Vault or SQL.",
                "The app requests a token automatically—no passwords in code!"
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create an **Azure Key Vault** and store a secret.",
                "Enable **Managed Identity** on an Azure VM.",
                "Grant the VM's identity access to the Key Vault and retrieve the secret using the CLI.",
                "Explore **Microsoft Defender for Cloud** and look at the \"Secure Score\".",
                "Research how **Microsoft Sentinel** uses KQL (Kusto Query Language) to find threats."
              ]
            },
            {
              "type": "quiz",
              "question": "In Security KeyVault, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Security KeyVault.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Security KeyVault is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "monitoring-azure-monitor",
          "title": "Monitoring Azure Monitor",
          "description": "Master Monitoring Azure Monitor with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Azure Monitor (Unified monitoring)",
                "Application Insights (APM)",
                "Log Analytics Workspaces",
                "KQL (Kusto Query Language) basics",
                "Azure Service Health"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.1 Azure Monitor Components"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Metrics**: Real-time performance data (CPU, RAM).",
                "**Logs**: Historical telemetry data stored in a Log Analytics Workspace.",
                "**Application Insights**: Deep monitoring for web apps (Exceptions, dependencies, performance)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.2 Kusto Query Language (KQL)"
            },
            {
              "type": "paragraph",
              "text": "The query language used for all Azure logs. It is similar to SQL but optimized for telemetry."
            },
            {
              "type": "code",
              "language": "kql",
              "code": "// Simple KQL to find errors in the last hour\nAppEvents\n| where TimeGenerated > ago(1h)\n| where Severity == \"Error\""
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Enable **Application Insights** for an Azure App Service.",
                "Create a **Log Analytics Workspace**.",
                "Write a simple **KQL Query** to count the number of times a VM has restarted.",
                "Set up an **Action Group** to send an SMS when a metric alert is triggered.",
                "Check **Azure Advisor** for recommendations on cost savings and security."
              ]
            },
            {
              "type": "quiz",
              "question": "In Monitoring Azure Monitor, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Monitoring Azure Monitor.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Monitoring Azure Monitor is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "infrastructure-as-code-bicep",
          "title": "Infrastructure As Code Bicep",
          "description": "Master Infrastructure As Code Bicep with hands-on examples, architectural diagrams, and structured exercises.",
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
                "ARM Templates (JSON)",
                "Azure Bicep (Modern DSL)",
                "Modules and Parameters",
                "Blueprints (Deprecated but good to know)",
                "Terraform on Azure"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.1 Azure Bicep"
            },
            {
              "type": "paragraph",
              "text": "Bicep is a domain-specific language (DSL) that uses declarative syntax to deploy Azure resources. It is much easier to read and write than JSON ARM templates."
            },
            {
              "type": "paragraph",
              "text": "**Bicep Example**:"
            },
            {
              "type": "code",
              "language": "bicep",
              "code": "resource stg 'Microsoft.Storage/storageAccounts@2021-04-01' = {\n  name: 'uniqueStorageName'\n  location: 'eastus'\n  sku: {\n    name: 'Standard_LRS'\n  }\n  kind: 'StorageV2'\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Deploying with Bicep"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Install**: Install the Bicep extension in VS Code.",
                "**Create**: Create a `.bicep` file with the storage account code above.",
                "**Deploy**:"
              ]
            },
            {
              "type": "code",
              "language": "bash",
              "code": "    az deployment group create --resource-group my-rg --template-file main.bicep"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Bicep Template** that deploys a VNet and two Subnets.",
                "Use **Parameters** in your Bicep file to allow changing the VM size during deployment.",
                "Decompile an existing **ARM Template** into a Bicep file.",
                "Research the benefits of using **Terraform** vs. **Bicep** for Azure deployments."
              ]
            },
            {
              "type": "quiz",
              "question": "In Infrastructure As Code Bicep, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Infrastructure As Code Bicep.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Infrastructure As Code Bicep is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "devops-github-actions",
          "title": "DevOps GitHub Actions",
          "description": "Master DevOps GitHub Actions with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Azure DevOps (Boards, Repos, Pipelines)",
                "GitHub Actions (Azure Workflows)",
                "Continuous Integration (CI)",
                "Continuous Delivery (CD)",
                "Deployment Slots (Zero-downtime releases)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.1 Azure DevOps vs. GitHub Actions"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Azure DevOps**: A complete suite for the ALM (Application Lifecycle Management). Includes planning (Boards), code (Repos), and automation (Pipelines).",
                "**GitHub Actions**: Modern automation built directly into GitHub. Microsoft's preferred direction for new cloud-native projects."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.2 Deployment Slots"
            },
            {
              "type": "paragraph",
              "text": "A feature of Azure App Service that allows you to deploy a new version of your app to a \"Staging\" slot."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Once verified, you \"Swap\" the slots.",
                "**Result**: Zero downtime and easy rollbacks."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **GitHub Action** that builds a Node.js/Python app and deploys it to an Azure App Service.",
                "Set up a **Deployment Slot** and perform a \"Swap\".",
                "Create a **Build Pipeline** in Azure DevOps.",
                "Research **Self-hosted Agents** for private build environments."
              ]
            },
            {
              "type": "quiz",
              "question": "In DevOps GitHub Actions, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of DevOps GitHub Actions."
              ],
              "answer": 3,
              "explanation": "DevOps GitHub Actions is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "architecture-framework-caf",
          "title": "Architecture Framework CAF",
          "description": "Master Architecture Framework CAF with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Cloud Adoption Framework (CAF)",
                "Well-Architected Framework (WAF)",
                "The 5 Pillars of Azure Architecture",
                "Azure Advisor and Cost Optimization",
                "Governance and Blueprinting"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.1 Cloud Adoption Framework (CAF)"
            },
            {
              "type": "paragraph",
              "text": "Provides guidance on how to migrate to the cloud."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Strategy**: Define business justification.",
                "**Plan**: Inventory and rationalize.",
                "**Ready**: Set up the Landing Zone (Foundation).",
                "**Adopt**: Migrate and Innovate."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.2 Well-Architected Framework (WAF)"
            },
            {
              "type": "paragraph",
              "text": "The \"Pillars\" of a great architecture:"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Cost Optimization**: Right-sizing and Reservations.",
                "**Operational Excellence**: Automation and Monitoring.",
                "**Performance Efficiency**: Scalability.",
                "**Reliability**: Self-healing systems.",
                "**Security**: Defense in depth.",
                "Download the **Azure Well-Architected Review** tool and run a self-assessment.",
                "Research the **Azure Landing Zone** concept.",
                "For each pillar, identify 3 Azure services that help achieve it.",
                "How does the **Microsoft Cloud Adoption Framework** differ from a standard migration checklist?"
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Azure Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In Architecture Framework CAF, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Architecture Framework CAF.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Architecture Framework CAF is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "azure-openai-ai-services",
          "title": "Azure OpenAI AI Services",
          "description": "Master Azure OpenAI AI Services with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Azure OpenAI Service (GPT-4, DALL-E, Embeddings)",
                "Azure AI Search (Vector Database)",
                "Azure AI Vision & Speech (Cognitive Services)",
                "Responsibility AI and Content Filtering",
                "RAG (Retrieval-Augmented Generation) on Azure"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.1 Azure OpenAI"
            },
            {
              "type": "paragraph",
              "text": "Azure provides a private, secure instance of OpenAI's models."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Privacy**: Your data is NOT used to train the global OpenAI models.",
                "**Security**: Integrates with Azure RBAC and Private Link.",
                "**Models**: Access to GPT-4o, GPT-3.5-Turbo, and DALL-E."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.2 Azure AI Search"
            },
            {
              "type": "paragraph",
              "text": "The backbone of modern AI apps. It allows you to store and query your own company data (PDFs, Docs) so the AI can answer questions based on your specific knowledge base."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Apply for access to **Azure OpenAI Service** (Requires a business subscription).",
                "Use the **Azure AI Studio** to test a \"Chat\" prompt using GPT-4.",
                "Research **Content Filtering** and how to prevent the AI from generating inappropriate content.",
                "What is the difference between a **System Prompt** and a **User Prompt**?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Azure OpenAI AI Services, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Azure OpenAI AI Services.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Azure OpenAI AI Services is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "hybrid-cloud-azure-arc",
          "title": "Hybrid Cloud Azure Arc",
          "description": "Master Hybrid Cloud Azure Arc with hands-on examples, architectural diagrams, and structured exercises.",
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
                "What is Azure Arc?",
                "Arc-enabled Servers (Windows/Linux on-prem)",
                "Arc-enabled Kubernetes",
                "Arc-enabled SQL Server",
                "Using Azure Policy on non-Azure servers"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.1 Azure Arc Overview"
            },
            {
              "type": "paragraph",
              "text": "Azure Arc extends the Azure control plane to resources outside of Azure."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Single Pane of Glass**: See your AWS, GCP, and On-prem servers in the same list as your Azure VMs.",
                "**Inventory**: Centralized tagging and search for all servers.",
                "**Security**: Apply Microsoft Defender and Update Management to any server, anywhere."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.2 Use Case: On-Premise Governance"
            },
            {
              "type": "paragraph",
              "text": "Imagine you have 100 servers in your local data center. By installing the **Connected Machine Agent**, you can now apply **Azure Policies** to them (e.g., \"Must have antivirus installed\") just like a cloud VM."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Download and research the **Connected Machine Agent** installation process.",
                "How can you use **Azure Policy** to enforce compliance on a server running in **AWS**?",
                "Look up **Azure Arc-enabled Data Services** and how it allows running SQL Managed Instance on any Kubernetes cluster."
              ]
            },
            {
              "type": "quiz",
              "question": "In Hybrid Cloud Azure Arc, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Hybrid Cloud Azure Arc.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Hybrid Cloud Azure Arc is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "external-identities-b2c",
          "title": "External Identities B2C",
          "description": "Master External Identities B2C with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Entra ID B2B (Guest Users / Collaboration)",
                "Entra ID B2C (Customer Identity Access Management - CIAM)",
                "User Flows (Sign-up, Sign-in, Profile Editing)",
                "Social Identity Providers (Google, Facebook, Microsoft)",
                "Custom Policies (Identity Experience Framework)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.1 B2B vs. B2C"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**B2B (Business-to-Business)**: You invite a guest user (from another company) to your tenant. They use their own credentials.",
                "**B2C (Business-to-Consumer)**: A separate directory for your application's customers. They can sign up with an email or social account. Your corporate employees are NOT in this directory."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.2 User Flows"
            },
            {
              "type": "paragraph",
              "text": "B2C provides a \"Low-code\" way to create identity experiences."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "You define the \"Flow\" (e.g., \"Ask for name and city during sign-up\").",
                "Azure handles the UI and the secure authentication."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a new **B2C Tenant** in the Azure portal.",
                "Set up a **User Flow** for Sign-up and Sign-in.",
                "Research how to brand the **B2C login page** with your own company logo and CSS.",
                "What is the difference between a **User Flow** and a **Custom Policy** (IEF)?"
              ]
            },
            {
              "type": "quiz",
              "question": "In External Identities B2C, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of External Identities B2C."
              ],
              "answer": 3,
              "explanation": "External Identities B2C is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "advanced-network-security",
          "title": "Advanced Network Security",
          "description": "Master Advanced Network Security with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Azure Private Link & Private Endpoints",
                "Service Endpoints",
                "Azure Firewall (Premium features)",
                "Azure WAF (Web Application Firewall) on Front Door",
                "VNet Hub-and-Spoke Architecture"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.1 Private Link: The Gold Standard"
            },
            {
              "type": "paragraph",
              "text": "Allows you to access Azure PaaS services (like SQL or Storage) over a **Private IP address** in your VNet."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The traffic never leaves the Microsoft network.",
                "You can disable public access to the service entirely."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.2 Hub-and-Spoke Topology"
            },
            {
              "type": "paragraph",
              "text": "A common enterprise pattern:"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Hub**: Central VNet containing shared resources (Firewall, VPN Gateway).",
                "**Spokes**: Individual VNets for different apps/teams, peered to the Hub.",
                "**Traffic**: All traffic between spokes is routed through the central Firewall in the Hub for inspection."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Private Endpoint** for an Azure Storage Account.",
                "Try to access the Storage Account from a VM in the VNet using the **Private IP**.",
                "Research the difference between **Service Endpoints** and **Private Endpoints**.",
                "Draw a diagram of a **Hub-and-Spoke** network with an Azure Firewall in the center."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the Azure Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In Advanced Network Security, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Advanced Network Security.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Advanced Network Security is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
