import { useState } from "react";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("users");

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>E-Commerce Dashboard</h1>
        <p>Manage users, products, and orders from a single interface.</p>
      </header>

      <nav className="app-nav">
        <button
          className={`nav-button ${page === "users" ? "active" : ""}`}
          onClick={() => setPage("users")}
        >
          Users
        </button>
        <button
          className={`nav-button ${page === "products" ? "active" : ""}`}
          onClick={() => setPage("products")}
        >
          Products
        </button>
        <button
          className={`nav-button ${page === "orders" ? "active" : ""}`}
          onClick={() => setPage("orders")}
        >
          Orders
        </button>
      </nav>

      <main className="page-content">
        {page === "users" && <UsersPage />}
        {page === "products" && <ProductsPage />}
        {page === "orders" && <OrdersPage />}
      </main>
    </div>
  );
}
