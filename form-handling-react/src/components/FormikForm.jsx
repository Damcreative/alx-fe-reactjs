// src/components/FormikForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/**
 * Formik-based registration form using Yup for validation
 * posts to a mock endpoint (jsonplaceholder).
 */

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const SignupSchema = Yup.object().shape({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 chars").required("Password is required"),
});

export default function FormikForm() {
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      setStatus({ success: true, message: "Registered (mock)!", data });
      resetForm();
    } catch (err) {
      setStatus({ success: false, message: err.message || "Submit failed" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 520, margin: "1rem auto", padding: 16 }}>
      <h2>Registration (Formik + Yup)</h2>

      <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, status }) => (
          <Form noValidate>
            <div style={{ marginBottom: 12 }}>
              <label htmlFor="username">Username</label><br />
              <Field id="username" name="username" />
              <div style={{ color: "red", fontSize: 13 }}>
                <ErrorMessage name="username" />
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <label htmlFor="email">Email</label><br />
              <Field id="email" name="email" type="email" />
              <div style={{ color: "red", fontSize: 13 }}>
                <ErrorMessage name="email" />
              </div>
            </div>

            <div style={{ marginBottom: 12 }}>
              <label htmlFor="password">Password</label><br />
              <Field id="password" name="password" type="password" />
              <div style={{ color: "red", fontSize: 13 }}>
                <ErrorMessage name="password" />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting…" : "Register"}</button>

            {status && (
              <div style={{ marginTop: 12, color: status.success ? "green" : "red" }}>
                {status.message}
                {status.data && <pre style={{ fontSize: 12 }}>{JSON.stringify(status.data, null, 2)}</pre>}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
