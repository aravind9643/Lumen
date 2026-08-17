import type { Tutorial } from '../types'

export const sqlDatabases: Tutorial = {
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
  "prerequisites": [
    "Zero database experience required."
  ],
  "outcomes": [
    "Write complex SQL queries with multi-table joins, subqueries, and CTEs",
    "Design normalized database schemas (1NF, 2NF, 3NF, BCNF)",
    "Understand transaction isolation levels and ACID guarantees",
    "Analyze query execution plans (EXPLAIN ANALYZE) and optimize indexes (B-Tree, Hash, GIN)"
  ],
  "chapters": [
    {
      "title": "Phase 1: Foundations & Architecture",
      "lessons": [
        {
          "slug": "introduction-and-setup",
          "title": "Introduction And Setup",
          "description": "Master Introduction And Setup with hands-on examples, architectural diagrams, and structured exercises.",
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
                "What is a Database?",
                "SQL vs. NoSQL",
                "Key RDBMS Engines (PostgreSQL, MySQL, SQLite)",
                "Installing a Local Database",
                "Tables, Rows, and Columns"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.1 What is a Database?"
            },
            {
              "type": "definition",
              "term": "A database is an organized collection of structured information, or data, typically stored electronically in a computer system.",
              "plain": "A database is an organized collection of structured information, or data, typically stored electronically in a computer system."
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": ""
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**A Spreadsheet (Excel)** is like a single **Notebook**. Great for one person, but hard to share or connect with other notebooks.",
                "**A Database (SQL)** is like a **Professional Library System**. Thousands of books (tables) are linked together, and there is a Head Librarian (**SQL Engine**) who can find exactly what you need in milliseconds."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.2 SQL vs. NoSQL"
            },
            {
              "type": "table",
              "headers": [
                "Feature",
                "SQL (Relational)",
                "NoSQL (Non-Relational)"
              ],
              "rows": [
                [
                  "**Structure**",
                  "Fixed Schema (Tables)",
                  "Flexible (JSON-like)",
                  ""
                ],
                [
                  "**Relationships**",
                  "Excellent (Joins)",
                  "Limited",
                  ""
                ],
                [
                  "**Scaling**",
                  "Vertical (Bigger Server)",
                  "Horizontal (More Servers)",
                  ""
                ],
                [
                  "**Best for**",
                  "Transactions, Complex queries",
                  "Big Data, Real-time feeds",
                  ""
                ]
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "1.3 Key Concepts"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Table**: A collection of related data (e.g., `Users`).",
                "**Column**: A specific attribute (e.g., `email`).",
                "**Row**: A single record in a table.",
                "**Primary Key (PK)**: A unique identifier for every row (e.g., `user_id`).",
                "Install a local database manager like **DBeaver** or **PostgreSQL**.",
                "Create a conceptual design for a \"Library\" database: What tables would you need? What columns would each table have?",
                "Identify the \"Primary Key\" for a `Products` table.",
                "Research why SQLite is used in mobile apps (Android/iOS) while PostgreSQL is used for big websites."
              ]
            },
            {
              "type": "quiz",
              "question": "In Introduction And Setup, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Introduction And Setup.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Introduction And Setup is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "basic-queries-select",
          "title": "Basic Queries SELECT",
          "description": "Master Basic Queries SELECT with hands-on examples, architectural diagrams, and structured exercises.",
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
                "The `SELECT` statement",
                "DISTINCT` (Removing duplicates)",
                "WHERE` (Filtering)",
                "ORDER BY` (Sorting)",
                "LIMIT` and `OFFSET` (Pagination)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.1 The SELECT Statement"
            },
            {
              "type": "paragraph",
              "text": "This is how you \"read\" data from a table."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "-- Get all columns\nSELECT * FROM users;\n\n-- Get specific columns\nSELECT first_name, email FROM users;"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.2 Filtering with `WHERE`"
            },
            {
              "type": "paragraph",
              "text": "You can use operators like `=`, `>`, `<`, `<>`, `LIKE`, and `IN`."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "-- Find specific user\nSELECT * FROM users WHERE email = 'test@example.com';\n\n-- Find users with age greater than 18\nSELECT * FROM users WHERE age > 18;\n\n-- Pattern matching (Search)\nSELECT * FROM users WHERE first_name LIKE 'Ara%'; -- Starts with Ara"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "2.3 Sorting & Limiting"
            },
            {
              "type": "code",
              "language": "sql",
              "code": "-- Sort by age (oldest first)\nSELECT * FROM users \nORDER BY age DESC;\n\n-- Get only the first 5 results\nSELECT * FROM users \nLIMIT 5;"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a query to select the names of all products that cost less than $10.",
                "Select all unique cities from a `Customers` table using `DISTINCT`.",
                "Sort a list of `Orders` by date, showing the most recent ones first.",
                "Select 10 users starting from the 21st user (use `LIMIT` and `OFFSET`)."
              ]
            },
            {
              "type": "quiz",
              "question": "In Basic Queries SELECT, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Basic Queries SELECT.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Basic Queries SELECT is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "crud-operations",
          "title": "CRUD Operations",
          "description": "Master CRUD Operations with hands-on examples, architectural diagrams, and structured exercises.",
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
                "INSERT` (Creating data)",
                "UPDATE` (Modifying data)",
                "DELETE` (Removing data)",
                "TRUNCATE` vs. `DELETE`",
                "Returning data after an operation"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.1 INSERT"
            },
            {
              "type": "code",
              "language": "sql",
              "code": "INSERT INTO users (username, email, age) \nVALUES ('aravind', 'aravind@example.com', 25);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.2 UPDATE"
            },
            {
              "type": "paragraph",
              "text": "**WARNING**: Always use a `WHERE` clause, or you will update every row in the table!"
            },
            {
              "type": "code",
              "language": "sql",
              "code": "UPDATE users \nSET age = 26 \nWHERE username = 'aravind';"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "3.3 DELETE"
            },
            {
              "type": "code",
              "language": "sql",
              "code": "DELETE FROM users \nWHERE user_id = 5;"
            },
            {
              "type": "paragraph",
              "text": "**Note**: `TRUNCATE TABLE users` deletes ALL rows in a table and is much faster than `DELETE`, but it cannot be rolled back easily in some systems."
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Insert a new product into a `Products` table.",
                "Update the price of that product by increasing it by 10%.",
                "Delete all products that have zero stock.",
                "Experiment with inserting multiple rows in a single `INSERT` statement."
              ]
            },
            {
              "type": "quiz",
              "question": "In CRUD Operations, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of CRUD Operations."
              ],
              "answer": 3,
              "explanation": "CRUD Operations is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 2: Core Implementation & Operations",
      "lessons": [
        {
          "slug": "relational-design-normalization",
          "title": "Relational Design Normalization",
          "description": "Master Relational Design Normalization with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Primary Keys (PK) and Foreign Keys (FK)",
                "Relationships (1:1, 1:N, N:M)",
                "The 3 Normal Forms (1NF, 2NF, 3NF)",
                "Database Schemas",
                "Constraints (`NOT NULL`, `UNIQUE`, `CHECK`)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.1 Relationships"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**One-to-One (1:1)**: A user has one profile.",
                "**One-to-Many (1:N)**: An author has many books.",
                "**Many-to-Many (N:M)**: Students can take many courses, and courses have many students (Requires a **Join Table**)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.2 Constraints"
            },
            {
              "type": "code",
              "language": "sql",
              "code": "CREATE TABLE orders (\n    order_id SERIAL PRIMARY KEY,\n    user_id INT REFERENCES users(user_id), -- Foreign Key\n    amount DECIMAL NOT NULL CHECK (amount > 0),\n    status VARCHAR(20) DEFAULT 'pending'\n);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "4.3 Normalization"
            },
            {
              "type": "paragraph",
              "text": "Normalization is the process of organizing data to reduce redundancy."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**1NF**: Atomic values (no lists in a cell).",
                "**2NF**: No partial dependencies.",
                "**3NF**: No transitive dependencies (e.g., if A depends on B and B depends on C, split them)."
              ]
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Design a database schema for an \"Online Store\": Customers, Orders, and Products.",
                "Identify the Foreign Keys needed to link Orders to Customers.",
                "How would you handle a Many-to-Many relationship between `Products` and `Categories`?",
                "Explain why storing a user's address in the `Orders` table might violate 3rd Normal Form."
              ]
            },
            {
              "type": "quiz",
              "question": "In Relational Design Normalization, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Relational Design Normalization.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Relational Design Normalization is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "joins-merging-data",
          "title": "Joins Merging Data",
          "description": "Master Joins Merging Data with hands-on examples, architectural diagrams, and structured exercises.",
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
                "INNER JOIN` (The Intersection)",
                "LEFT JOIN` (Keep everything on the left)",
                "RIGHT JOIN` (Keep everything on the right)",
                "FULL OUTER JOIN` (Everything from both)",
                "Joining multiple tables"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.1 INNER JOIN"
            },
            {
              "type": "paragraph",
              "text": "Returns records that have matching values in both tables."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "SELECT users.username, orders.amount\nFROM users\nINNER JOIN orders ON users.user_id = orders.user_id;"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.2 LEFT JOIN"
            },
            {
              "type": "paragraph",
              "text": "Returns all records from the left table, and the matched records from the right table. If no match, it returns `NULL`."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "-- Find all users, even those who haven't placed an order\nSELECT users.username, orders.amount\nFROM users\nLEFT JOIN orders ON users.user_id = orders.user_id;"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "5.3 Joining Multiple Tables"
            },
            {
              "type": "code",
              "language": "sql",
              "code": "SELECT u.username, p.product_name\nFROM users u\nJOIN orders o ON u.user_id = o.user_id\nJOIN products p ON o.product_id = p.product_id;"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Write a query to find all students and the names of the courses they are enrolled in.",
                "Use a `LEFT JOIN` to find all products that have never been ordered.",
                "Join three tables: `Customers`, `Orders`, and `Shipping_Details`.",
                "What happens if you use an `INNER JOIN` on a user who has no orders?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Joins Merging Data, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Joins Merging Data.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Joins Merging Data is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "aggregate-functions-grouping",
          "title": "Aggregate Functions Grouping",
          "description": "Master Aggregate Functions Grouping with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate | ⏱ **Time**: 1 day"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "COUNT()`, `SUM()`, `AVG()`",
                "MIN()` and `MAX()`",
                "GROUP BY` (Collapsing data)",
                "HAVING` (Filtering groups)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.1 Aggregate Functions"
            },
            {
              "type": "code",
              "language": "sql",
              "code": "SELECT COUNT(*) FROM orders;          -- Total orders\nSELECT AVG(price) FROM products;      -- Average price\nSELECT SUM(amount) FROM transactions; -- Total revenue"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.2 GROUP BY"
            },
            {
              "type": "paragraph",
              "text": "Used to group rows that have the same values into summary rows."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "-- Find how many orders each user has placed\nSELECT user_id, COUNT(order_id)\nFROM orders\nGROUP BY user_id;"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "6.3 HAVING"
            },
            {
              "type": "paragraph",
              "text": "WHERE` filters rows. **`HAVING`** filters groups."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "-- Find users who have spent more than $1000 in total\nSELECT user_id, SUM(amount)\nFROM orders\nGROUP BY user_id\nHAVING SUM(amount) > 1000;"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Calculate the total number of products in each category.",
                "Find the minimum and maximum price of products in the \"Electronics\" category.",
                "List all categories that have more than 10 products (use `HAVING`).",
                "Calculate the average order amount per day."
              ]
            },
            {
              "type": "quiz",
              "question": "In Aggregate Functions Grouping, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Aggregate Functions Grouping.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Aggregate Functions Grouping is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 3: Advanced Patterns & Scalability",
      "lessons": [
        {
          "slug": "subqueries-and-ctes",
          "title": "Subqueries And CTEs",
          "description": "Master Subqueries And CTEs with hands-on examples, architectural diagrams, and structured exercises.",
          "duration": 20,
          "blocks": [
            {
              "type": "callout",
              "kind": "info",
              "text": "**Level**: Intermediate → Advanced | ⏱ **Time**: 2 days"
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "Subqueries in `WHERE` and `FROM`",
                "IN` and `EXISTS` operators",
                "Common Table Expressions (CTEs) using `WITH`",
                "Improving query readability"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.1 Subqueries"
            },
            {
              "type": "paragraph",
              "text": "A query nested inside another query."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "-- Find users who spent more than the average\nSELECT username FROM users \nWHERE user_id IN (\n    SELECT user_id FROM orders \n    WHERE amount > (SELECT AVG(amount) FROM orders)\n);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "7.2 CTEs (Common Table Expressions)"
            },
            {
              "type": "paragraph",
              "text": "CTEs make complex queries much easier to read and maintain."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "WITH user_totals AS (\n    SELECT user_id, SUM(amount) as total_spent\n    FROM orders\n    GROUP BY user_id\n)\nSELECT u.username, ut.total_spent\nFROM users u\nJOIN user_totals ut ON u.user_id = ut.user_id;"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Use a subquery to find all products that are more expensive than the \"iPhone\".",
                "Use the `EXISTS` operator to find all customers who have at least one order.",
                "Rewrite a complex Join query using a `WITH` clause (CTE).",
                "Explain the difference between a subquery in the `SELECT` clause vs. the `WHERE` clause."
              ]
            },
            {
              "type": "quiz",
              "question": "In Subqueries And CTEs, what is a fundamental architectural concept?",
              "options": [
                "Restricting all network calls to synchronous text sockets.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Subqueries And CTEs."
              ],
              "answer": 3,
              "explanation": "Subqueries And CTEs is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "indexes-and-performance",
          "title": "Indexes And Performance",
          "description": "Master Indexes And Performance with hands-on examples, architectural diagrams, and structured exercises.",
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
                "How B-Tree Indexes work",
                "CREATE INDEX`",
                "Unique vs. Composite Indexes",
                "EXPLAIN ANALYZE` (Query Profiling)",
                "When NOT to use an Index"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.1 Why Indexes?"
            },
            {
              "type": "analogy",
              "title": "Real-World Analogy",
              "text": "Searching for a word in a book."
            },
            {
              "type": "list",
              "ordered": false,
              "items": [
                "**Without an Index**: You have to read every single page from start to finish (**Full Table Scan**).",
                "**With an Index**: You go to the back of the book, find the word, and jump directly to the page (**Index Scan**)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.2 Creating Indexes"
            },
            {
              "type": "code",
              "language": "sql",
              "code": "CREATE INDEX idx_user_email ON users(email);\n\n-- Composite Index (Search by last name AND first name)\nCREATE INDEX idx_user_name ON users(last_name, first_name);"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "8.3 Query Profiling"
            },
            {
              "type": "paragraph",
              "text": "Use `EXPLAIN` to see if your query is using an index or scanning the whole table."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "EXPLAIN SELECT * FROM users WHERE email = 'test@example.com';"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Identify which columns in a `Transactions` table should be indexed.",
                "Create an index on the `order_date` column of an `Orders` table.",
                "Run an `EXPLAIN` on a query and identify if it's doing a \"Seq Scan\" or an \"Index Scan.\"",
                "Why does adding an index make `INSERT` and `UPDATE` operations slightly slower?"
              ]
            },
            {
              "type": "quiz",
              "question": "In Indexes And Performance, what is a fundamental architectural concept?",
              "options": [
                "Understanding the primary design principles, syntax patterns, and engineering practices of Indexes And Performance.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 0,
              "explanation": "Indexes And Performance is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        },
        {
          "slug": "transactions-and-acid",
          "title": "Transactions And ACID",
          "description": "Master Transactions And ACID with hands-on examples, architectural diagrams, and structured exercises.",
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
                "The ACID Properties (Atomicity, Consistency, Isolation, Durability)",
                "BEGIN`, `COMMIT`, and `ROLLBACK`",
                "Savepoints",
                "Isolation Levels (Dirty Read, Phantom Read)"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.1 ACID Properties"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "**Atomicity**: The whole transaction succeeds or fails together (All or Nothing).",
                "**Consistency**: The database stays in a valid state before and after.",
                "**Isolation**: Concurrent transactions don't interfere with each other.",
                "**Durability**: Once committed, data is permanent (even if the power goes out)."
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "9.2 Transaction Syntax"
            },
            {
              "type": "code",
              "language": "sql",
              "code": "BEGIN;\n\nUPDATE accounts SET balance = balance - 100 WHERE user_id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE user_id = 2;\n\n-- If everything is OK\nCOMMIT;\n\n-- If something went wrong\nROLLBACK;"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Simulate a bank transfer using a transaction.",
                "What happens if the second `UPDATE` in the example above fails?",
                "Research the difference between \"Read Committed\" and \"Serializable\" isolation levels.",
                "Use a `SAVEPOINT` to partially roll back a multi-step transaction."
              ]
            },
            {
              "type": "quiz",
              "question": "In Transactions And ACID, what is a fundamental architectural concept?",
              "options": [
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Transactions And ACID.",
                "Disabling data structures and runtime exception handling.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 1,
              "explanation": "Transactions And ACID is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    },
    {
      "title": "Phase 4: Production, Security & Deployment",
      "lessons": [
        {
          "slug": "stored-procedures-and-triggers",
          "title": "Stored Procedures And Triggers",
          "description": "Master Stored Procedures And Triggers with hands-on examples, architectural diagrams, and structured exercises.",
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
                "Stored Procedures (Reusable logic)",
                "User-Defined Functions (UDF)",
                "Triggers (Automated actions)",
                "Views (Virtual tables)",
                "Materialized Views"
              ]
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.1 Stored Procedures"
            },
            {
              "type": "paragraph",
              "text": "Procedures can perform complex logic, loops, and conditional checks within the database itself."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "CREATE PROCEDURE apply_discount(category_id INT, discount_percent DECIMAL)\nLANGUAGE plpgsql\nAS $$\nBEGIN\n    UPDATE products \n    SET price = price * (1 - discount_percent)\n    WHERE cid = category_id;\nEND;\n$$;"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.2 Triggers"
            },
            {
              "type": "paragraph",
              "text": "A trigger is a function that runs automatically when an event (like `INSERT`) occurs."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "CREATE TRIGGER update_timestamp\nBEFORE UPDATE ON users\nFOR EACH ROW\nEXECUTE FUNCTION refresh_updated_at();"
            },
            {
              "type": "heading",
              "level": 2,
              "text": "10.3 Views"
            },
            {
              "type": "paragraph",
              "text": "A virtual table based on the result-set of an SQL statement."
            },
            {
              "type": "code",
              "language": "sql",
              "code": "CREATE VIEW active_users AS\nSELECT user_id, username FROM users WHERE is_active = true;"
            },
            {
              "type": "list",
              "ordered": true,
              "items": [
                "Create a `View` that shows all orders along with the customer's email.",
                "Build a `Trigger` that automatically logs a message into an `Audit_Log` table every time a product's price is updated.",
                "Write a `Stored Procedure` that deletes a user and all their associated data (cascading delete logic).",
                "What is the difference between a `View` and a `Materialized View`?"
              ]
            },
            {
              "type": "callout",
              "kind": "info",
              "text": "**Congratulations!** You've completed the SQL Mastery Path!"
            },
            {
              "type": "quiz",
              "question": "In Stored Procedures And Triggers, what is a fundamental architectural concept?",
              "options": [
                "Disabling data structures and runtime exception handling.",
                "Replacing the execution runtime with uncompiled binary assembly.",
                "Understanding the primary design principles, syntax patterns, and engineering practices of Stored Procedures And Triggers.",
                "Restricting all network calls to synchronous text sockets."
              ],
              "answer": 2,
              "explanation": "Stored Procedures And Triggers is built around established design principles, structured syntax, and robust real-world implementations."
            }
          ]
        }
      ]
    }
  ]
}
