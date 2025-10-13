// src/__tests__/TodoList.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(screen.getByText("Build Todo App")).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("New Todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("can toggle todo completed", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // initially not completed
    expect(todo).toHaveStyle("text-decoration: none");

    fireEvent.click(todo);

    // after click, should be completed
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // Find the delete button next to this todo
    const deleteButton = screen.getByTestId("delete-Learn React");

    fireEvent.click(deleteButton);

    // Query again after deletion
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
