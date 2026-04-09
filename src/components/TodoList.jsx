import { useCallback, useState } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

const initialTodos = [
  { id: 1, text: "Reactの基礎を学ぶ", completed: true },
  { id: 2, text: "useEffectを理解する", completed: true },
  { id: 3, text: "Redux Toolkitを使う", completed: true },
  { id: 4, text: "React.memoを学ぶ", completed: true },
  { id: 5, text: "useCallbackを学ぶ", completed: true },
  { id: 6, text: "useMemoを学ぶ", completed: true },
  { id: 7, text: "リストの最適化を学ぶ", completed: false },
  { id: 8, text: "状態管理の設計を学ぶ", completed: false },
  { id: 9, text: "テストを書く", completed: false },
  { id: 10, text: "ポートフォリオを作る", completed: false },
];

const TodoList = () => {
  console.log("🔄 TodoList がレンダリングされました");
  const [todos, setTodos] = useState(initialTodos);

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  const handleAdd = useCallback((inputValue) => {
    if (inputValue.trim() === "") return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
  }, []);

  return (
    <div style={{ maxWidth: "400px", margin: "20px" }}>
      <h2>TODOリスト</h2>
      <div>
        <TodoInput onAdd={handleAdd} />
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
