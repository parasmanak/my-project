# Express JWT Authentication & Banking API-Experiment-17

This project is a simple **Node.js + Express.js** application that demonstrates secure authentication using **JSON Web Tokens (JWT)**.  
It simulates basic banking operations such as **login, balance check, deposit, and withdrawal**.

## Table of Contents

- [Project structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the project](#running-the-project)
- [What’s inside](#whats-inside)
- [Notes & tips](#notes--tips)
- [Troubleshooting](#troubleshooting)
- [License](#license)
## 🧩 Project Overview

This project focuses on secure API design using **JWT-based authentication**.  
It provides endpoints for:
- User login with token generation  
- Checking account balance  
- Depositing and withdrawing money securely  

The system uses middleware to authenticate requests and protect sensitive routes.

---
## Project structure
```
Experiment-17
├─ Outputs Img
│  ├─ 1.png
│  ├─ 2.png
│  ├─ 3.png
│  ├─ 4.png
│  └─ 5.png
├─ package-lock.json
├─ package.json         # Project dependencies
├─ README.md
└─ server.js            # Main Express server

```
Top-level files and folders (root of this workspace):

- `server.js` – entry point for the Express server.
- `package.json` – project manifest with scripts and dependencies.
- `Outputs Img/` – sample output images used by the experiment (1.png ... 5.png).

If you open this folder in your editor, you should see the same layout.
## Installation

1. Open a terminal in the project folder `BackendBasics/Experiment-17`.
2. Install dependencies:

```powershell
npm install
```

This will install `express` and `jsonwebtoken` as declared in `package.json`.

## Running the project

To start the server locally:

```powershell
npm start
```

This runs `node server.js` (see `package.json`).

Open your browser or use curl/Postman to hit the server endpoints (as implemented in `server.js`).
Server runs by default at:
```
http://localhost:3000
```

---

## 🔑 Authentication

This app uses **JWT (JSON Web Token)** for securing protected routes.

- After successful login, the server generates a token using the secret key:
  ```
  supersecretkey
  ```
- Include the token in the `Authorization` header for protected endpoints:
  ```
  Authorization: Bearer <your_token_here>
  ```

---

## 🌐 API Endpoints

### 1️⃣ **Login**
**Endpoint:**  
```http
POST /login
```
**Description:**  
Authenticate user and return a JWT token.

**Request Body:**
```json
{
  "username": "user1",
  "password": "password123"
}
```

**Response Example:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

---

### 2️⃣ **Check Balance**
**Endpoint:**  
```http
GET /balance
```
**Description:**  
Get the account balance for the authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

**Response Example:**
```json
{
  "balance": 1000
}
```

---

### 3️⃣ **Deposit Money**
**Endpoint:**  
```http
POST /deposit
```
**Description:**  
Deposit a specified amount into the user's account.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "amount": 200
}
```

**Response Example:**
```json
{
  "message": "Deposited $200",
  "newBalance": 1200
}
```

---

### 4️⃣ **Withdraw Money**
**Endpoint:**  
```http
POST /withdraw
```
**Description:**  
Withdraw a specified amount from the user’s account.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "amount": 150
}
```

**Response Example:**
```json
{
  "message": "Withdrew $150",
  "newBalance": 1050
}
```

---

## 🧠 Middleware Summary

| Middleware | Purpose |
|-------------|----------|
| `express.json()` | Parses incoming JSON requests |
| **Logger** | Logs timestamp, method, and route of each request |
| **authenticateToken()** | Validates JWT tokens for protected routes |
| **Error Handler** | Catches unhandled server errors |

---

## 💡 Concepts Demonstrated

- JWT Token Generation & Verification  
- Authentication Middleware  
- Protected Routes in Express  
- Secure API Design Principles  
- RESTful Endpoint Implementation  
- Error Handling and Logging  

---

## 🧾 Example Flow (Using cURL)

### Login
```bash
curl -X POST http://localhost:3000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"user1","password":"password123"}'
```

### Get Balance
```bash
curl -H "Authorization: Bearer <token>" http://localhost:3000/balance
```

### Deposit
```bash
curl -X POST http://localhost:3000/deposit \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"amount":200}'
```

### Withdraw
```bash
curl -X POST http://localhost:3000/withdraw \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"amount":100}'
```

---

## What’s inside

- `server.js` – A minimal Express server. Typical features in such experiments include:
  - basic routes and responses
  - simple authentication demos using `jsonwebtoken`
- `Outputs Img/` – Example images used to illustrate outputs or responses.

If you want me to document specific routes or behavior, paste the contents of `server.js` here and I’ll add a routes table and example requests/responses.

## Notes & tips

- This is a compact experiment project. Treat it as a sandbox for trying backend ideas.
- If you plan to deploy, add a proper process manager (PM2 or systemd), environment-based configuration, and security/hardening for JWT secrets.

## Troubleshooting

- If `npm install` fails, check your network and npm registry settings. Try `npm cache clean --force` and re-run.
- If the server doesn’t start, run `node server.js` directly to see the full error stack.

##  Learning Outcomes

1. Understand how **JWT (JSON Web Token)** works for secure authentication.  
2. Implement **token-based authorization** for protected routes.  
3. Use **Express middleware** for logging and error handling.  
4. Simulate simple **banking operations** using in-memory data.  
5. Design RESTful APIs with proper HTTP methods and responses.  
6. Implement detailed **request logging** for debugging and monitoring.  
7. Handle **authentication errors** gracefully with descriptive messages.

---
