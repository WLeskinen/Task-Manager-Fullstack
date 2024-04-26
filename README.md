# TaskManager

## Introduction

An application that was made to make managing your daily tasks and activities easier.

## Technologies Used

### Frontend
- [React](https://reactjs.org/)
- [TypeScript](https://typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://postgresql.org/)

## Getting Started

### Prerequisites

The following are required to run this program.

-   Node.js
-   npm
-   PostgreSQL

### Developers

This web application is developed by the following users:

-   [Waltteri Leskinen](https://github.com/WLeskinen/)
-   [Amerian Mehdi](https://github.com/Mehdi-Amerian)
-   [Oliver Oldenburg](https://github.com/OliverOldenburg)

### Installation

Before installing all the dependencies, one must create an .env file into the backend folder with the following:

- DB_HOST
- DB_PORT
- DB_NAME
- DB_USER
- DB_PASSWORD

Optional:
You can run all the queries through postgreSQL using the files in the db_scripts folder. This includes queries for dummy data as well as creation of the tables.

```bash
# Clone the repository
https://github.com/

# Navigate to both frontend and backend in the folder.
# Then run npm install.
cd backend
npm install
cd frontend
npm install

# Start the development in the frontend server
cd frontend
npm run dev

# Run the backend Express server in the backend.
cd backend
node server.js
```
