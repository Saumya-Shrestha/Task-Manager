# Task Manager

A full-stack task management application built with **React**, **Material-UI**, **Express**, and **PostgreSQL**. This project allows users to create, update, delete, and manage tasks efficiently.

## Installation

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the `backend` directory and add the following environment variables:

   ```env
   DB_DATABASE=your_database_name
   DB_DIALECT=postgres
   DB_HOST=localhost
   DB_PASSWORD=your_database_password
   DB_PORT=your_database_port
   DB_USER=your_database_username
   ```

4. Create a database in PostgreSQL(using pgAdmin):

   ```bash
   "CREATE DATABASE your_database_name;"
   ```

5. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend server:

   ```bash
   npm run dev
   ```

## Demo

![Demo](./demo.gif)

## License

This project is open-sourced under the [MIT license](./LICENSE).

---

### Note (Render deployment (API Issues?, CORS Configuration Issue?))
- Deployed the backend as web-service at https://task-manager-jwum.onrender.com
- Deployed the frontend as static-site at https://task-manager-frontend-iwtj.onrender.com

### Steps taken so far to resolve the issue  
- Changed (/frontend/src/api/tasks.js) <br />
`const API_URL = "http://localhost:5000/api/tasks";` to <br />
`const API_URL = "https://task-manager-jwum.onrender.com/api/tasks";`

- Changed (/backend/middleware/cors.middleware.js) <br />
`const corsOptions = {
  origin: "*",
};` to <br />
`const corsOptions = {
  origin: "https://task-manager-frontend-iwtj.onrender.com",
};`

