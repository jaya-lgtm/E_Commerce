import { useEffect, useState } from "react";
import api from "../api";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createUser = () => {
    const newUser = {
      ...form,
      _id: Date.now().toString(),
    };
    setUsers([...users, newUser]);

    setForm({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <section className="page-section">
      <div className="form-panel">
        <h2>Add New User</h2>

        <div className="form-grid">
          <input
            className="input-field"
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className="input-field"
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            className="input-field"
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            className="input-field"
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        <button className="primary-button" onClick={createUser}>
          Add User
        </button>
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <article key={user._id} className="user-card">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
            <button
              className="secondary-button"
              onClick={() => deleteUser(user._id)}
            >
              Delete
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
