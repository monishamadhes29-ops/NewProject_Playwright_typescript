# Playwright + PostgreSQL CRUD Automation

This project demonstrates **database validation using Playwright Test** by performing **CRUD operations (Create, Read, Update, Delete)** directly on a **PostgreSQL database** using **TypeScript**.

---

## Tech Stack

- Playwright Test
- TypeScript
- Node.js
- PostgreSQL
- pg (PostgreSQL client for Node.js)

---

## Project Structure

Playwright_PostgreSQL/
│
├── src/
│ └── dbConnect/
│ ├── dbClient.ts # Database connection + CRUD methods
│ └── dbConfig.ts # PostgreSQL connection string
│
├── tests/
│ └── PostgreSqlCrud.spec.ts # Playwright CRUD tests
│
├── playwright.config.ts
├── tsconfig.json # TypeScript configuration
├── package.json
└── README.md

---

## Prerequisites

Ensure the following are installed:

- Node.js (v18+ recommended)
- PostgreSQL (v13+)
- VS Code
- Playwright

---

## PostgreSQL Setup

### 1 Ensure PostgreSQL is running

On Windows:
- Open **Services**
- Start **PostgreSQL Server**

Or start via **pgAdmin**.

---

### 2 Create Database and Table

Login to PostgreSQL using `psql` or pgAdmin:

```sql
    CREATE DATABASE mydatabase;

        - Connect to the database:
        \c mydatabase

        - Create the users table:

        CREATE TABLE users (
         id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
          );
```

---

### 3 Install Dependencies

From the project root:
npm install
npm init playwright@latest

---

### 4 Database Configuration
src/dbConnect/dbConfig.ts

export const dbConfig = {
  connectionString: 'postgresql://postgres:yourpasswordMonisha29@localhost:5432/mydatabase',
};

---

### 5 TypeScript Configuration
tsconfig.json

    {
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "moduleResolution": "node",
        "strict": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "skipLibCheck": true,
        "outDir": "dist",
        "types": ["node", "@playwright/test"]
    },
    "include": ["src", "tests"]
    }

---

### 6 Database Client (CRUD Logic)
src/dbConnect/dbClient.ts

Contains:

Database connection management

CRUD operations:

    - createUser

    - getUserByEmail

    - updateUserEmail

    - deleteUser

All queries use parameterized SQL to prevent SQL injection.

---

### 7 Playwright CRUD Tests

tests/PostgreSqlCrud.spec.ts

Each CRUD operation is validated as a separate Playwright test.

    - CREATE → Insert user

    - READ → Fetch user

    - UPDATE → Modify user

    - DELETE → Remove user

Database connection is:

    - Opened once in beforeAll

    - Closed once in afterAll

---

### 8 Running the Tests

npx playwright test tests/PostgreSqlCrud.spec.ts --headed 

---

### 9 View Test Report

npx playwright show-report

