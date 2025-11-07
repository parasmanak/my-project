# BackendBasics - Experiment-16

A simple **Node.js + Express.js** backend project demonstrating middleware, authentication, modular routing, and CRUD operations for user management.

---

## 🧩 Project Overview

This backend showcases the use of:
- Custom middleware for logging and authentication  
- Modular routes using Express Router  
- Basic CRUD operations on in-memory user data  
- Public and protected API endpoints  
- Secure access using Bearer Token authentication  

## 🏗️ Project Structure

```
backend/
│
├── server.js       # Main server file
├── package.json    # Project dependencies
└── node_modules/   # Installed libraries
```

---

## ⚙️ Installation Steps

1. **Navigate to the backend directory**
   ```bash
   cd "C:\Users\arzau\OneDrive\Desktop\Workspace\my-project\backend Integration\experiment-0\backend"
   ```

2. **Initialize npm (if not already)**
   ```bash
   npm init -y
   ```

3. **Install dependencies**
   ```bash
   npm install express
   ```

4. *(Optional)* For real-time communication (future use):
   ```bash
   npm install socket.io
   ```

---

## ▶️ Run the Server

Start the server with:
```bash
node server.js
```

Server will start at:
```
http://localhost:3000
```

---

## 🔐 Authentication Details

Some routes are protected using **Bearer Token** authentication.

Use this header in requests:
```
Authorization: Bearer mysecrettoken
```

If the token is missing or invalid, the server responds with:
```json
{ "message": "Authorization header missing or incorrect" }
```

---

## 🌐 API Endpoints

### **Public Routes**
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/public` | Accessible without authentication |

---

### **Protected Routes**
| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/protected` | Requires valid Bearer token |
| GET | `/admin/dashboard` | Admin-only route (Bearer token required) |

---

### **User Management Routes**
| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/users` | Add a new user |
| GET | `/users` | Retrieve all users |
| PUT | `/users/:id` | Update user by ID |
| DELETE | `/users/:id` | Delete user by ID |

---

## 🧪 Example cURL Commands

### Create a User
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"id":"1","name":"John"}'
```

### Get All Users
```bash
curl http://localhost:3000/users
```

### Access Protected Route
```bash
curl -H "Authorization: Bearer mysecrettoken" http://localhost:3000/protected
```

---

## 🧠 Middleware Summary

| Middleware | Purpose |
|-------------|----------|
| `express.json()` | Parses JSON request bodies |
| Custom Logger | Logs HTTP method, URL, and timestamp |
| `bearerAuth()` | Validates Bearer token in request headers |
| Admin Router Middleware | Handles `/admin` routes |

---

## 💡 Concepts Demonstrated

- HTTP Request Handling  
- Express Middleware Flow  
- Route Protection using Tokens  
- RESTful API Design  
- Server Logging  
- JSON Body Parsing  

---

---

## 📚 Learning Outcomes

By completing this project, you will learn to:

1. 🧠 Understand how **Express.js** handles HTTP requests and responses.  
2. 🔐 Implement **Bearer Token Authentication** for route protection.  
3. ⚙️ Create and apply **custom middleware** in Express.  
4. 🧱 Use **Express Router** to organize routes modularly.  
5. 🧾 Perform **CRUD operations** (Create, Read, Update, Delete) using REST APIs.  
6. 🧰 Practice proper project structuring and use of **HTTP methods** (GET, POST, PUT, DELETE).  
7. 🪵 Log request data (method, URL, timestamp) using middleware.  

---