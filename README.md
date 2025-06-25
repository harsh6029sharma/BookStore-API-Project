# 📚 BookStore API 🙂

A powerful RESTful API for managing a bookstore 📖  
Built with **Node.js**, **Express.js**, and **MongoDB** using **Mongoose**.

---

## 🚀 Features

- Add, read, update, and delete books
- Mongoose schema validation
- Cleanly separated folders (controllers, routes, models)
- Environment variable support using `.env`
- Scalable structure for real-world apps

---

## 🧾 Tech Stack

- 🟢 Node.js  
- ⚙️ Express.js  
- 🍃 MongoDB with Mongoose  
- 🧪 Postman (for API testing)  
- 📁 dotenv (for environment config)

---

## 📁 Folder Structure

BookStore-API/
│
├── controllers/ # Logic for handling requests and responses
│ └── bookController.js
│
├── models/ # Mongoose schemas
│ └── Book.js
│
├── routes/ # Route definitions
│ └── bookRoutes.js
│
├── config/ # DB connection and environment setup
│ └── db.js
│
├── .env # Environment variables
├── .gitignore # Files to ignore in Git
├── package.json # Project metadata and dependencies
├── README.md # You're reading it :)
├── app.js # Express app setup
└── server.js # App entry point


---

## ⚙️ API Endpoints

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| GET    | `/api/books`     | Get all books         |
| GET    | `/api/books/:id` | Get a book by ID      |
| POST   | `/api/books`     | Add a new book        |
| PUT    | `/api/books/:id` | Update book by ID     |
| DELETE | `/api/books/:id` | Delete book by ID     |

---

## 📦 Getting Started

### 1️⃣ Clone the Repository
run : git clone https://github.com/harsh6029sharma/BookStore-API-Project.git
run : cd BookStore-API-Project

2️⃣ Install Dependencies
run : npm install
3️⃣ Create a .env File

**Add your MongoDB URI and port to .env:**
PORT=port_no.(add your own port number)
MONGO_URI=mongodb://localhost:27017/bookstore

Run: npm start

**Example of Book Json:**
{
  "title": "The Pragmatic Programmer",
  "author": "Andrew Hunt",
  "year": 1999
}

🛠️ Future Plans
🔐 Add user authentication (JWT)

📃 Add Swagger or Postman documentation

🔍 Add search, pagination & sorting

✅ Write unit & integration tests

👨‍💻 Author
Made with ❤️ by Harsh Sharma




