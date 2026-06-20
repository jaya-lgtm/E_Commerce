# E-Commerce

This repository contains an e-commerce application with a Node.js backend and a React frontend.

## Project structure

- `Backend/` - Express server and MongoDB backend code
- `Frontend/` - Vite-powered React frontend

## Backend

### Run locally

1. Install dependencies from the root:
   ```bash
   npm install
   ```
2. Start the backend server:
   ```bash
   npm run dev
   ```
3. Open the API at:
   - `http://localhost:3000/`

### Environment variables

Create a `.env` file with:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/cc5
DB_NAME=E_Commerce
```

### API routes

- `GET /`
- `GET /users`
- `GET /products`
- `GET /orders`

## Frontend

### Run locally

1. Change to the frontend folder:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Notes

- The backend runs on port `3000` by default.
- The frontend is configured to call the backend at `http://localhost:3000`.
