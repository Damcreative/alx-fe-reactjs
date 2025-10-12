// src/components/RegistrationForm.jsx
import React, { useState } from "react";

/**
 * Controlled form that posts to a mock endpoint (jsonplaceholder)
 * Fields: username, email, password
 */
export default function RegistrationForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const validate = (vals) => {
    const e = {};
    if (!vals.username.trim()) e.username = "Username is required";
    if (!vals.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(vals.email)) {
      e.email = "Invalid email address";
    }
    if (!vals.password) {
      e.password = "Password is required";
    } else if (vals.password.length < 6) {
      e.password = "Password must be at least 6 characters";
    }
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // remove inline error while typing
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate(values);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    setStatus(null);
    try {
      // Using jsonplaceholder.typicode.com for mock POST (returns created object)
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Network response not ok");
      const data = await res.json();
      setStatus({ success: true, message: "Registered (mock)!", data });
      // reset form (optional)
      setValues({ username: "", email: "", password: "" });
    } catch (err) {
      setStatus({ success: false, message: err.message || "Submit failed" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 520, margin: "1rem auto", padding: 16 }}>
      <h2>Registration (controlled)</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="username">Username</label><br />
          <input
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">Email</label><br />
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password">Password</label><br />
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            disabled={submitting}
          />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>

        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting…" : "Register"}
        </button>
      </form>

      {status && (
        <div style={{ marginTop: 12, color: status.success ? "green" : "red" }}>
          {status.message}
          {status.data && <pre style={{ fontSize: 12 }}>{JSON.stringify(status.data, null, 2)}</pre>}
        </div>
      )}
    </div>
  );
}
