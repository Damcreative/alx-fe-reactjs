<li
  key={todo.id}
  onClick={() => toggleTodo(todo.id)}
  style={{
    cursor: "pointer",
    textDecoration: todo.completed ? "line-through" : "none",
  }}
  data-testid={`todo-${todo.id}`}
>
  {todo.text}
  <button
    data-testid={`delete-${todo.text}`}
    onClick={(e) => {
      e.stopPropagation();
      deleteTodo(todo.id);
    }}
  >
    Delete
  </button>
</li>
