import type { Tutorial } from '../types'

export const awsCloud: Tutorial = {
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
  "prerequisites": [
    "Basic networking and computing concepts."
  ],
  "outcomes": [
    "Design secure AWS cloud infrastructures using IAM, VPC, and Security Groups",
    "Deploy scalable compute with EC2, Auto Scaling Groups, and ALB",
    "Architect event-driven serverless backends using AWS Lambda and SQS/SNS",
    "Configure S3 object storage with lifecycle policies and CloudFront CDN"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "cloud-fundamentals",
          "title": "Cloud Fundamentals",
          "description": "Master Cloud Fundamentals with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | ⏱ Time: 1 day"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Cloud Computing? (IAAS, PAAS, SAAS)",
                "Why AWS?",
                "AWS Global Infrastructure (Regions & AZs)",
                "Edge Locations",
                "The Shared Responsibility Model"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is Cloud Computing?"
            },
            {
              "type": "definition",
              "term": "Cloud computing is the on",
              "plain": "Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing."
            },
            {
              "type": "paragraph",
              "text": "**The Three Models**:"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**IaaS (Infrastructure as a Service)**: You manage the OS, AWS manages the hardware (e.g., EC2).",
                "**PaaS (Platform as a Service)**: You manage the code, AWS manages the OS and hardware (e.g., Elastic Beanstalk).",
                "**SaaS (Software as a Service)**: You just use the software, AWS manages everything (e.g., Amazon Chime)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 AWS Global Infrastructure"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Regions**: Physical locations around the world where AWS cluster data centers (e.g., `us-east-1`, `ap-south-1` (Mumbai)).",
                "**Availability Zones (AZs)**: One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region.",
                "**Edge Locations**: Endpoints for AWS which are used for caching content (CloudFront)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Shared Responsibility Model"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**AWS**: Responsible for security **OF** the cloud (Hardware, Global Infrastructure).",
                "**Customer**: Responsible for security **IN** the cloud (Customer Data, OS Configuration, IAM)."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Log in to the **AWS Management Console** (Free Tier).",
                "Explore the list of **Regions** and find the one closest to your city.",
                "Look up the **AWS Service Health Dashboard** to see current service status.",
                "Explain the difference between **High Availability** and **Fault Tolerance**."
              ]
            },
            {
              "type": "quiz",
              "question": "In Cloud Fundamentals, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Cloud Fundamentals.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Cloud Fundamentals is built around established design principles, structured syntax, and robust real-world implementations."
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
              "text": "Level: Beginner | ⏱ Time: 1 day"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Users, Groups, and Roles",
                "IAM Policies (JSON)",
                "The Principle of Least Privilege",
                "Multi-Factor Authentication (MFA)",
                "IAM Roles for Services"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 Core Components"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Root Account**: Created when you first open the AWS account. **NEVER use this for daily tasks.**",
                "**Users**: People or applications within your organization.",
                "**Groups**: A collection of users. Permissions are applied to the group (e.g., \"Admins\", \"Developers\").",
                "**Roles**: Used to grant temporary permissions to AWS services or federated users.",
                "**Policies**: JSON documents that define what actions are allowed or denied."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 IAM Policy Structure"
            },
            {
              "type": "code",
              "language": "json",
              "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": \"s3:ListBucket\",\n      \"Resource\": \"arn:aws:s3:::my-bucket\"\n    }\n  ]\n}"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Best Practices"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Enable **MFA** for the Root account and all IAM users.",
                "Use **IAM Roles** for EC2 instances instead of storing access keys on the instance.",
                "Audit your permissions regularly using **IAM Access Advisor**."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a new **IAM User** with \"AdministratorAccess\".",
                "Enable **Virtual MFA** on your Root account using Google Authenticator or Authy.",
                "Create a custom **IAM Policy** that only allows `List` and `Read` access to a specific S3 bucket.",
                "Experiment with **IAM Roles**: Create a role that allows an EC2 instance to read from S3."
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
          "slug": "ec2-compute",
          "title": "EC2 Compute",
          "description": "Master EC2 Compute with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "EC2 Instance Lifecycle",
                "Instance Types (T2, M5, C5, etc.)",
                "AMIs (Amazon Machine Images)",
                "Security Groups (Virtual Firewalls)",
                "Key Pairs (SSH)",
                "EC2 User Data (Bootstrapping)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 What is EC2?"
            },
            {
              "type": "definition",
              "term": "EC2 provides resizable compute capacity in the cloud. It’s basically a virtual server that you can rent by the second.",
              "plain": "EC2 provides resizable compute capacity in the cloud. It’s basically a virtual server that you can rent by the second."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 Security Groups"
            },
            {
              "type": "paragraph",
              "text": "Security groups control inbound and outbound traffic to your instances."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "They are **Stateful**: If you allow an inbound request, the outbound response is automatically allowed.",
                "By default, all **Inbound** is blocked and all **Outbound** is allowed."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 Instance Purchasing Options"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**On-Demand**: Pay for what you use. (Most expensive, most flexible).",
                "**Reserved Instances (RI)**: Commit to 1-3 years for up to 75% discount.",
                "**Spot Instances**: Bid for unused capacity. (Up to 90% discount, but can be terminated with 2-min notice).",
                "**Dedicated Hosts**: Physical servers dedicated to you (for compliance/licensing)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Launching a Web Server"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "A. Via AWS Console (The \"Click\" Way)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Launch Instance**: Go to EC2 Dashboard → Click \"Launch Instance\".",
                "**Name**: Enter `MyFirstWebServer`.",
                "**AMI**: Select `Amazon Linux 2023`.",
                "**Instance Type**: Select `t2.micro` (Free Tier eligible).",
                "**Key Pair**: Create new → Name it `my-key` → Download `.pem` file.",
                "**Network Settings**:"
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Create Security Group.",
                "Allow **SSH** (Port 22) from \"My IP\".",
                "Allow **HTTP** (Port 80) from \"Anywhere\"."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Advanced Details**: Scroll to \"User Data\" and paste this script:"
              ]
            },
            {
              "type": "code",
              "language": "bash",
              "code": "    #!/bin/bash\n    yum update -y\n    yum install -y httpd\n    systemctl start httpd\n    systemctl enable httpd\n    echo \"<h1>Hello from AWS EC2!</h1>\" > /var/www/html/index.html"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Launch**: Click \"Launch Instance\". Once \"Running\", copy the **Public IP** and paste it into your browser."
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "B. Via AWS CLI (The \"Pro\" Way)"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# 1. Create a security group\naws ec2 create-security-group --group-name my-web-sg --description \"Web Security Group\"\n\n# 2. Allow HTTP traffic\naws ec2 authorize-security-group-ingress --group-name my-web-sg --protocol tcp --port 80 --cidr 0.0.0.0/0\n\n# 3. Launch the instance\naws ec2 run-instances --image-id ami-0abcdef1234567890 --count 1 --instance-type t2.micro --key-name my-key --security-groups my-web-sg"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Launch a **t2.micro** instance using the **Amazon Linux 2 AMI**.",
                "Configure a **Security Group** to allow SSH (Port 22) and HTTP (Port 80) traffic.",
                "Use **EC2 User Data** to install an Apache Web Server automatically upon launch.",
                "SSH into your instance and create a simple `index.html` file.",
                "**CRITICAL**: Terminate your instance after the exercise to avoid charges!"
              ]
            },
            {
              "type": "quiz",
              "question": "In EC2 Compute, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of EC2 Compute."
              ],
              "answer": 3,
              "explanation": "EC2 Compute is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "s3-storage",
          "title": "S3 Storage",
          "description": "Master S3 Storage with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Beginner | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Buckets vs. Objects",
                "S3 Versioning",
                "Storage Classes (Standard, IA, Glacier)",
                "Lifecycle Policies",
                "Static Website Hosting",
                "S3 Security (Bucket Policies & ACLs)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 What is S3?"
            },
            {
              "type": "definition",
              "term": "S3 is object",
              "plain": "S3 is object-level storage. It is \"infinitely\" scalable and provides 99.999999999% (11 9's) of durability."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Buckets**: Containers for objects. Names must be **globally unique**.",
                "**Objects**: The files you upload. Max size is 5TB."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Storage Classes"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Standard**: Frequent access, low latency.",
                "**Standard-IA (Infrequent Access)**: Lower cost, but you pay a retrieval fee.",
                "**One Zone-IA**: Cheaper, but stored in only one AZ.",
                "**Glacier / Glacier Deep Archive**: Very cheap, for long-term backups. Retrieval takes minutes to hours."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Static Website Hosting"
            },
            {
              "type": "paragraph",
              "text": "You can host a purely HTML/CSS/JS website on S3 without any servers. You just need to enable \"Static website hosting\" in the bucket properties."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Hosting a Website"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "A. Via AWS Console"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Create Bucket**: Names must be unique (e.g., `my-unique-website-123`).",
                "**Permissions**:"
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Uncheck \"Block all public access\".",
                "Acknowledge that the bucket will become public."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Upload**: Upload `index.html` and `error.html`.",
                "**Properties**:"
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Scroll to \"Static website hosting\" → Click **Edit**.",
                "Select **Enable**.",
                "Index document: `index.html`."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Bucket Policy**: Go to **Permissions** → **Bucket Policy** → **Edit** → Paste this (Replace `YOUR-BUCKET-NAME`):"
              ]
            },
            {
              "type": "code",
              "language": "json",
              "code": "    {\n        \"Version\": \"2012-10-17\",\n        \"Statement\": [\n            {\n                \"Sid\": \"PublicReadGetObject\",\n                \"Effect\": \"Allow\",\n                \"Principal\": \"*\",\n                \"Action\": \"s3:GetObject\",\n                \"Resource\": \"arn:aws:s3:::YOUR-BUCKET-NAME/*\"\n            }\n        ]\n    }"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "B. Via AWS CLI"
            },
            {
              "type": "code",
              "language": "bash",
              "code": "# 1. Create the bucket\naws s3 mb s3://my-unique-website-123\n\n# 2. Upload a file\naws s3 cp index.html s3://my-unique-website-123/\n\n# 3. Sync a whole directory\naws s3 sync ./my-local-site-folder s3://my-unique-website-123/"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a unique **S3 Bucket**.",
                "Upload a file and make it **Public** (You will need to disable \"Block all public access\" first).",
                "Enable **Versioning** and upload a second version of the same file.",
                "Set up a **Lifecycle Policy** to move files to Glacier after 30 days.",
                "Enable **Static Website Hosting** and view your `index.html` via the S3 endpoint."
              ]
            },
            {
              "type": "quiz",
              "question": "In S3 Storage, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of S3 Storage.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "S3 Storage is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "databases-rds-dynamodb",
          "title": "Databases RDS DynamoDB",
          "description": "Master Databases RDS DynamoDB with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Intermediate | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "SQL vs. NoSQL on AWS",
                "Amazon RDS (Relational Database Service)",
                "Amazon Aurora (AWS's high-performance database)",
                "Amazon DynamoDB (Serverless NoSQL)",
                "ElastiCache (In-memory caching)",
                "Amazon Redshift (Data Warehousing)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 Relational Databases (RDS)"
            },
            {
              "type": "paragraph",
              "text": "RDS is a managed service for SQL databases (MySQL, PostgreSQL, Oracle, SQL Server)."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Multi-AZ**: For High Availability (Disaster Recovery).",
                "**Read Replicas**: For Scalability (Performance)."
              ]
            },
            {
              "type": "paragraph",
              "text": "**Amazon Aurora**: A cloud-native relational database that is 5x faster than standard MySQL."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 Non-Relational Databases (DynamoDB)"
            },
            {
              "type": "paragraph",
              "text": "**DynamoDB** is a fully managed NoSQL database."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Serverless**: No servers to manage.",
                "**Key-Value Store**: Extremely fast (millisecond latency) at any scale.",
                "**Global Tables**: Replicate data across regions automatically."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create an **RDS Instance** using the MySQL free tier.",
                "Use a tool like **MySQL Workbench** or `mysql` CLI to connect to your RDS instance.",
                "Create a **DynamoDB Table** with a Partition Key (`user_id`).",
                "Add and query items in your DynamoDB table via the AWS Console.",
                "Research the difference between **OLTP** (RDS) and **OLAP** (Redshift)."
              ]
            },
            {
              "type": "quiz",
              "question": "In Databases RDS DynamoDB, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Databases RDS DynamoDB.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Databases RDS DynamoDB is built around established design principles, structured syntax, and robust real-world implementations."
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
              "text": "Level: Intermediate | ⏱ Time: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "VPC Basics & CIDR blocks",
                "Subnets (Public vs. Private)",
                "Internet Gateways (IGW)",
                "NAT Gateways (Network Address Translation)",
                "Route Tables",
                "NACLs vs. Security Groups"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 What is a VPC?"
            },
            {
              "type": "definition",
              "term": "A VPC is your own private network in the AWS cloud. It is logically isolated from other virtual networks.",
              "plain": "A VPC is your own private network in the AWS cloud. It is logically isolated from other virtual networks."
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 The Anatomy of a Secure VPC"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Public Subnet**: Has a route to an **Internet Gateway**. Used for Web Servers.",
                "**Private Subnet**: No direct access to the internet. Used for Databases.",
                "**NAT Gateway**: Allows instances in a Private Subnet to connect to the internet (for updates) but prevents the internet from initiating a connection with them."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 Security: NACLs vs. SGs"
            },
            {
              "type": "table",
              "headers": [
                "Feature",
                "Security Group (SG)",
                "Network ACL (NACL)"
              ],
              "rows": [
                [
                  "**Level**",
                  "Instance Level",
                  "Subnet Level",
                  ""
                ],
                [
                  "**State**",
                  "Stateful",
                  "Stateless",
                  ""
                ],
                [
                  "**Rules**",
                  "Allow rules only",
                  "Allow and Deny rules",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Building a Secure VPC"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "A. The Networking Setup"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**VPC**: VPC Dashboard → \"Create VPC\" → \"VPC only\"."
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Name: `Production-VPC`.",
                "IPv4 CIDR: `10.0.0.0/16`."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Subnets**:"
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Create `Public-Subnet-A` (`10.0.1.0/24`).",
                "Create `Private-Subnet-B` (`10.0.2.0/24`)."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Internet Gateway (IGW)**: Create IGW → \"Attach to VPC\" (`Production-VPC`).",
                "**Public Route Table**:"
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Create Route Table → Name: `Public-RT`.",
                "Routes → \"Edit routes\" → Add `0.0.0.0/0` targeting the **IGW**.",
                "Subnet Associations → Associate with `Public-Subnet-A`."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**NAT Gateway** (Optional but recommended):"
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Create NAT Gateway in `Public-Subnet-A`.",
                "Allocate Elastic IP.",
                "Update **Private Route Table** to route `0.0.0.0/0` to this **NAT Gateway**."
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "B. Verification"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Launch an EC2 in the **Public Subnet**.",
                "Launch an EC2 in the **Private Subnet**.",
                "SSH into the Public instance, and from there, try to ping the Private instance.",
                "Create a **Custom VPC** with a CIDR block of `10.0.0.0/16`.",
                "Create one **Public Subnet** and one **Private Subnet**.",
                "Attach an **Internet Gateway** to your VPC and update the Public Route Table.",
                "Launch an EC2 instance in the Public Subnet and try to SSH into it.",
                "Create a **NACL** that explicitly blocks your own IP address from accessing the subnet."
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
          "slug": "route53-cloudfront",
          "title": "Route53 CloudFront",
          "description": "Master Route53 CloudFront with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Intermediate | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Route 53 (Managed DNS)",
                "Routing Policies (Simple, Weighted, Latency, Failover)",
                "CloudFront (CDN - Content Delivery Network)",
                "SSL/TLS Certificates (AWS Certificate Manager)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Route 53 Routing Policies"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Simple**: 1 record maps to 1 IP.",
                "**Weighted**: Send 20% of traffic to server A and 80% to server B.",
                "**Latency**: Route users to the region with the lowest latency.",
                "**Failover**: Active-Passive setup. If primary is down, send traffic to secondary.",
                "**Geolocation**: Route users based on their physical location."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 CloudFront"
            },
            {
              "type": "paragraph",
              "text": "CloudFront caches your website's static content at **Edge Locations** around the world."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Reduces latency for global users.",
                "Protects against DDoS attacks (integrates with AWS Shield).",
                "Origin can be an S3 bucket or an HTTP server (EC2/ALB)."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Register a domain (or use a free one) and point it to **Route 53**.",
                "Create an **A Record** and a **CNAME Record**.",
                "Create a **CloudFront Distribution** with an S3 bucket as the origin.",
                "Access your S3 content through the CloudFront URL and notice the difference in load speed.",
                "Research how **TTL (Time to Live)** affects DNS caching."
              ]
            },
            {
              "type": "quiz",
              "question": "In Route53 CloudFront, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Route53 CloudFront."
              ],
              "answer": 3,
              "explanation": "Route53 CloudFront is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "elb-autoscaling",
          "title": "ELB AutoScaling",
          "description": "Master ELB AutoScaling with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Intermediate | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Elastic Load Balancing (ALB, NLB, GLB)",
                "Auto Scaling Groups (ASG)",
                "Scaling Policies (Target Tracking, Step Scaling)",
                "Health Checks"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Elastic Load Balancer (ELB)"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Application Load Balancer (ALB)**: Layer 7 (HTTP/HTTPS). Routes based on URL paths (`/api`) or hostnames.",
                "**Network Load Balancer (NLB)**: Layer 4 (TCP/UDP). Used for ultra-high performance and static IPs.",
                "**Gateway Load Balancer (GLB)**: Used for 3rd party virtual appliances (Firewalls)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Auto Scaling Group (ASG)"
            },
            {
              "type": "paragraph",
              "text": "ASG ensures that you have the right number of EC2 instances to handle the load."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Desired Capacity**: The number of instances you want running.",
                "**Min/Max Size**: The boundaries for scaling.",
                "**Launch Template**: Defines \"What\" to launch (AMI, SG, Key Pair)."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Launch Template** for a web server.",
                "Create an **Auto Scaling Group** that uses the launch template.",
                "Create an **Application Load Balancer** and attach it to the ASG.",
                "Manually terminate one instance in the ASG and watch AWS automatically launch a replacement.",
                "Simulate CPU load on your instances to trigger a **Scaling Event**."
              ]
            },
            {
              "type": "quiz",
              "question": "In ELB AutoScaling, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of ELB AutoScaling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "ELB AutoScaling is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "serverless-lambda",
          "title": "Serverless Lambda",
          "description": "Master Serverless Lambda with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Advanced | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is Serverless?",
                "AWS Lambda (Functions as a Service)",
                "API Gateway (REST & HTTP APIs)",
                "Event Sources (S3, DynamoDB, SQS)",
                "Lambda Best Practices (Cold Starts, Timeouts)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 AWS Lambda"
            },
            {
              "type": "paragraph",
              "text": "Lambda allows you to run code without provisioning or managing servers. You pay only for the compute time you consume."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Languages**: Python, Node.js, Java, Go, C#, Ruby.",
                "**Max Timeout**: 15 minutes."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 API Gateway"
            },
            {
              "type": "paragraph",
              "text": "API Gateway acts as the \"Front Door\" for your applications."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Can trigger Lambda functions.",
                "Handles authentication (Cognito, JWT).",
                "Supports Throttling and Caching."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Serverless Hello World"
            },
            {
              "type": "heading",
              "level": 3,
              "text": "A. The Lambda Function"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Create Function**: Lambda Dashboard → \"Create function\" → \"Author from scratch\".",
                "**Runtime**: Python 3.x.",
                "**Code**: In the \"Code source\" tab, paste this:"
              ]
            },
            {
              "type": "code",
              "language": "python",
              "code": "    import json\n\n    def lambda_handler(event, context):\n        name = event.get('queryStringParameters', {}).get('name', 'World')\n        return {\n            'statusCode': 200,\n            'body': json.dumps(f'Hello, {name} from Lambda!')\n        }"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Deploy**: Click \"Deploy\"."
              ]
            },
            {
              "type": "heading",
              "level": 3,
              "text": "B. The API Gateway"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Add Trigger**: In Lambda UI, click \"Add trigger\".",
                "**Select**: API Gateway.",
                "**Intent**: Create a new API → \"HTTP API\".",
                "**Security**: Open.",
                "**Test**: Copy the \"API Endpoint\" and append `?name=YourName` to it. You should see the personalized greeting.",
                "Create a **Lambda Function** in Python that returns a \"Hello World\" JSON.",
                "Set up an **API Gateway** trigger for your Lambda.",
                "Test your API via a browser or Postman.",
                "Create an S3-triggered Lambda: When an image is uploaded to S3, the Lambda should log the file name to CloudWatch.",
                "Research **Step Functions** for orchestrating multiple Lambda functions."
              ]
            },
            {
              "type": "quiz",
              "question": "In Serverless Lambda, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Serverless Lambda.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Serverless Lambda is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "app-integration-sqs-sns",
          "title": "App Integration SQS SNS",
          "description": "Master App Integration SQS SNS with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Advanced | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Decoupling Microservices",
                "SQS (Simple Queue Service) - Pull model",
                "SNS (Simple Notification Service) - Push model (Pub/Sub)",
                "SES (Simple Email Service)",
                "Amazon Kinesis (Streaming Data)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 SQS (Simple Queue Service)"
            },
            {
              "type": "paragraph",
              "text": "SQS is used to decouple applications."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Standard Queue**: Unlimited throughput, at-least-once delivery, best-effort ordering.",
                "**FIFO Queue**: First-In-First-Out, exactly-once processing.",
                "**Visibility Timeout**: The period where other consumers can't see the message."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 SNS (Simple Notification Service)"
            },
            {
              "type": "paragraph",
              "text": "SNS follows the **Publish/Subscribe** pattern."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "One message can be sent to many \"Subscribers\" (Email, SMS, Lambda, SQS).",
                "Used for fan-out architectures."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Standard SQS Queue**.",
                "Send a message to the queue and manually \"poll\" for it.",
                "Create an **SNS Topic** and subscribe your email address to it.",
                "Publish a message to the SNS Topic and confirm you received the email.",
                "Create a **Fan-out** pattern: SNS Topic → SQS Queue A and SQS Queue B."
              ]
            },
            {
              "type": "quiz",
              "question": "In App Integration SQS SNS, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of App Integration SQS SNS.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "App Integration SQS SNS is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "monitoring-governance",
          "title": "Monitoring Governance",
          "description": "Master Monitoring Governance with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Advanced | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Amazon CloudWatch (Metrics, Logs, Alarms)",
                "AWS CloudTrail (Audit logs)",
                "AWS Config (Configuration compliance)",
                "AWS Organizations & Service Control Policies (SCP)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.1 CloudWatch"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Metrics**: Performance data (CPU, Memory, Disk).",
                "**Logs**: Application and system logs.",
                "**Alarms**: Trigger an action (e.g., email via SNS) when a threshold is met.",
                "**Dashboards**: Visual representation of your infrastructure health."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "11.2 CloudTrail vs. CloudWatch"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**CloudWatch**: \"How is the performance?\" (Performance monitoring).",
                "**CloudTrail**: \"Who did what?\" (Audit/Compliance)."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **CloudWatch Alarm** that triggers if your EC2 CPU usage exceeds 70%.",
                "View your **CloudTrail Events** to see who created the SQS queue in the previous module.",
                "Set up a **CloudWatch Dashboard** for your most used services.",
                "Research how **AWS Config** can automatically terminate an S3 bucket if it becomes \"Public\"."
              ]
            },
            {
              "type": "quiz",
              "question": "In Monitoring Governance, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Monitoring Governance."
              ],
              "answer": 3,
              "explanation": "Monitoring Governance is built around established design principles, structured syntax, and robust real-world implementations."
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
              "text": "Level: Expert | ⏱ Time: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "AWS Shield (DDoS Protection)",
                "AWS WAF (Web Application Firewall)",
                "AWS KMS (Key Management Service)",
                "AWS Secrets Manager",
                "Amazon GuardDuty (Threat detection)",
                "Amazon Inspector (Vulnerability scanning)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.1 Encryption (KMS)"
            },
            {
              "type": "paragraph",
              "text": "AWS KMS allows you to create and control encryption keys."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**CMK (Customer Master Keys)**: Can be AWS-managed or Customer-managed.",
                "Used to encrypt S3 buckets, RDS volumes, EBS volumes, etc."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "12.2 Threat Detection & Response"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**GuardDuty**: Uses machine learning to detect suspicious activity (e.g., Bitcoin mining on your EC2).",
                "**WAF**: Protects against common web exploits (SQL Injection, Cross-Site Scripting).",
                "**Inspector**: Scans your EC2 instances and Container images for vulnerabilities.",
                "Create a **KMS Key** and use it to encrypt a sample text file.",
                "Store a database password in **AWS Secrets Manager**.",
                "Enable **GuardDuty** (Free trial) and look for any sample findings.",
                "Research the difference between **AWS Shield Standard** and **AWS Shield Advanced**."
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
              "text": "Level: Expert | ⏱ Time: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What is IaC?",
                "AWS CloudFormation (YAML/JSON Templates)",
                "AWS CDK (Cloud Development Kit - Coding infrastructure)",
                "Stacks and Changesets"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.1 AWS CloudFormation"
            },
            {
              "type": "paragraph",
              "text": "CloudFormation allows you to model and set up your AWS resources so that you can spend less time managing them and more time focusing on your applications."
            },
            {
              "type": "paragraph",
              "text": "**Template Example (YAML)**:"
            },
            {
              "type": "code",
              "language": "yaml",
              "code": "Resources:\n  MyS3Bucket:\n    Type: AWS::S3::Bucket\n    Properties:\n      BucketName: my-automated-bucket-123"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "13.2 AWS CDK (Cloud Development Kit)"
            },
            {
              "type": "paragraph",
              "text": "CDK allows you to define your cloud resources using familiar programming languages like **Python**, **TypeScript**, or **Java**. It then \"Synthesizes\" your code into CloudFormation templates."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **CloudFormation Template** to launch a simple S3 bucket.",
                "Deploy the template using the AWS Console or CLI.",
                "Install the **AWS CDK** and initialize a new project in Python.",
                "Define an S3 bucket in your CDK code and run `cdk deploy`.",
                "Research **Terraform** and how it differs from CloudFormation."
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
              "text": "Level: Expert | ⏱ Time: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The CI/CD Pipeline",
                "AWS CodeCommit (Version Control)",
                "AWS CodeBuild (Continuous Integration)",
                "AWS CodeDeploy (Continuous Deployment)",
                "AWS CodePipeline (Orchestration)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.1 The Developer Tools Suite"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**CodeCommit**: Managed Git service.",
                "**CodeBuild**: Compiles your source code, runs tests, and produces software packages.",
                "**CodeDeploy**: Automates code deployments to any instance (EC2, Lambda, ECS).",
                "**CodePipeline**: Automates the build, test, and deploy phases of your release process every time there is a code change."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "14.2 Deployment Strategies"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**In-place**: Application is stopped and replaced on the same instance.",
                "**Blue/Green**: A new set of instances is created, traffic is shifted, and old instances are deleted."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **CodeCommit Repository** and push a sample project to it.",
                "Set up a **CodeBuild Project** that runs a simple test script.",
                "Create a **CodePipeline** that triggers the build every time you push to CodeCommit.",
                "Experiment with a **Blue/Green Deployment** using CodeDeploy and an Application Load Balancer."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the AWS Mastery Path!"
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
          "slug": "containerization-ecs-eks-fargate",
          "title": "Containerization ECS EKS Fargate",
          "description": "Master Containerization ECS EKS Fargate with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Expert | ⏱ Time: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "What are Containers? (Docker Recap)",
                "ECS (Elastic Container Service)",
                "EKS (Elastic Kubernetes Service)",
                "AWS Fargate (Serverless Containers)",
                "ECR (Elastic Container Registry)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.1 ECS vs. EKS"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Amazon ECS**: AWS's native container orchestration service. It is simpler to use and integrates deeply with other AWS services.",
                "**Amazon EKS**: Managed Kubernetes service. Use this if you want industry-standard orchestration that is compatible with other cloud providers."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.2 AWS Fargate"
            },
            {
              "type": "paragraph",
              "text": "**Fargate** is the \"Serverless\" way to run containers."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "You don't manage any EC2 instances.",
                "You just define your container (CPU/RAM) and AWS runs it for you.",
                "You pay for the time the container is running."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "15.3 ECR (The Docker Hub of AWS)"
            },
            {
              "type": "paragraph",
              "text": "ECR is where you store your Docker images."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Push image to ECR.",
                "ECS/EKS pulls the image from ECR to run it."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Running a Fargate Task"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**ECR**: Create a repository and push a sample Docker image (e.g., `nginx`).",
                "**ECS Cluster**: Create a cluster (Select \"Networking only\" for Fargate).",
                "**Task Definition**:"
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Launch Type: Fargate.",
                "Image: Use your ECR image URL.",
                "Port: 80."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Run Task**: Run the task in your cluster.",
                "**Access**: Copy the public IP of the task and view it in your browser.",
                "Install **Docker** on your local machine.",
                "Build a simple Python/Node.js app and containerize it.",
                "Push your image to **Amazon ECR** using the AWS CLI.",
                "Deploy your app to **ECS Fargate**.",
                "Research why **EKS** is preferred by large enterprises for hybrid cloud setups."
              ]
            },
            {
              "type": "quiz",
              "question": "In Containerization ECS EKS Fargate, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Containerization ECS EKS Fargate."
              ],
              "answer": 3,
              "explanation": "Containerization ECS EKS Fargate is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "big-data-analytics",
          "title": "Big Data Analytics",
          "description": "Master Big Data Analytics with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Expert | ⏱ Time: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Amazon Athena (SQL on S3)",
                "AWS Glue (ETL - Extract, Transform, Load)",
                "Amazon Redshift (Data Warehousing)",
                "Amazon Kinesis (Real-time Streaming)",
                "Amazon QuickSight (BI Dashboards)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.1 Athena: The SQL Layer for S3"
            },
            {
              "type": "paragraph",
              "text": "Athena allows you to run standard SQL queries directly against data stored in S3."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Serverless**: No infrastructure to manage.",
                "**Pay per query**: You only pay for the amount of data scanned.",
                "Perfect for analyzing log files or large CSV/Parquet datasets."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "16.2 AWS Glue: The Data Glue"
            },
            {
              "type": "paragraph",
              "text": "Glue is a serverless data integration service."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Data Catalog**: A persistent metadata store for your data.",
                "**Crawlers**: Automatically discover your data format and build the catalog.",
                "**ETL Jobs**: Run Python/Scala scripts to transform data before moving it."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "Step-by-Step Implementation: Querying S3 with Athena"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**S3**: Upload a sample CSV file (e.g., `sales.csv`).",
                "**Glue Crawler**: Create a crawler to scan your S3 bucket and create a table in the Glue Data Catalog.",
                "**Athena**: Go to the Athena console."
              ]
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Set up a query result location in S3.",
                "Select your database and run: `SELECT * FROM sales_table LIMIT 10;`."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a **Glue Crawler** that points to a folder in your S3 bucket.",
                "Run a **SQL Query** in Athena to find the \"Top 5\" items in your CSV file.",
                "Research the difference between **Amazon Redshift** (Disk-based) and **Athena** (Directly on S3).",
                "Look up how **Kinesis Firehose** can stream data into S3 or Redshift in real-time."
              ]
            },
            {
              "type": "quiz",
              "question": "In Big Data Analytics, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Big Data Analytics.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Big Data Analytics is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "migration-transfer",
          "title": "Migration Transfer",
          "description": "Master Migration Transfer with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Expert | ⏱ Time: 3 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "AWS DMS (Database Migration Service)",
                "Snow Family (Snowcone, Snowball, Snowmobile)",
                "AWS DataSync (Online transfer)",
                "AWS Backup (Centralized backup)",
                "Application Discovery Service"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.1 Database Migration (DMS)"
            },
            {
              "type": "paragraph",
              "text": "DMS allows you to migrate databases to AWS quickly and securely."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Homogeneous**: MySQL to RDS MySQL.",
                "**Heterogeneous**: Oracle to Aurora (using Schema Conversion Tool - SCT).",
                "The source database remains fully operational during the migration."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "17.2 The Snow Family (Moving Petabytes)"
            },
            {
              "type": "paragraph",
              "text": "When you have too much data for the internet:"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Snowcone**: 8TB (Small, portable).",
                "**Snowball Edge**: 80TB (Ruggedized suitcase).",
                "**Snowmobile**: 100PB (A literal shipping container truck).",
                "Research the **AWS Schema Conversion Tool (SCT)**.",
                "Calculate how long it would take to upload 100TB of data over a 100Mbps connection. (Hint: This is why Snowball exists).",
                "Explore the **AWS Backup** console and see how you can create a centralized backup plan for RDS and S3.",
                "What is the difference between **AWS DataSync** and **S3 Transfer Acceleration**?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Migration Transfer, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Migration Transfer.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Migration Transfer is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "well-architected-framework",
          "title": "Well Architected Framework",
          "description": "Master Well Architected Framework with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "Level: Expert | ⏱ Time: 4 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "The 6 Pillars of the Well-Architected Framework",
                "Operational Excellence",
                "Security",
                "Reliability",
                "Performance Efficiency",
                "Cost Optimization",
                "Sustainability (The newest pillar)"
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
                "**Operational Excellence**: Running and monitoring systems to deliver business value.",
                "**Security**: Protecting information and systems (Encryption, IAM).",
                "**Reliability**: Ensuring the system can recover from failures (Multi-AZ, Backups).",
                "**Performance Efficiency**: Using resources effectively (Serverless, Auto-scaling).",
                "**Cost Optimization**: Eliminating unneeded expense (Spot instances, Budgets).",
                "**Sustainability**: Minimizing the environmental impact of running cloud workloads."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "18.2 The Well-Architected Tool"
            },
            {
              "type": "paragraph",
              "text": "AWS provides a free tool in the console to review your workloads against these pillars and provide a list of \"High Risks\" and \"Medium Risks\" to fix."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Download and read the **AWS Well-Architected Framework Whitepaper**.",
                "Use the **Well-Architected Tool** in the AWS Console to evaluate a sample architecture.",
                "For each pillar, identify one AWS service that helps achieve it (e.g., Cost Optimization → Trusted Advisor).",
                "Research the **\"Design for Failure\"** principle."
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the AWS Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In Well Architected Framework, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Well Architected Framework.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Well Architected Framework is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
