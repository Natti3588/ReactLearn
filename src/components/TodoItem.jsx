import { memo } from "react"

const TodoItem = memo(({ todo, onToggle }) => {
  console.log(`🔄 TodoItem がレンダリングされました: "${todo.text}"`);

  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        cursor: "pointer",
        padding: "8px",
        borderBottom: "1px solid #eee",
      }}
    >
      {todo.completed ? "✅" : "⬜"} {todo.text}
    </li>
  );
});

export default TodoItem;
