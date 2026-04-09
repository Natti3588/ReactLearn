import { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim() === "") return;
    onAdd(inputValue);
    setInputValue("");
  }

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="新しいTODOを入力"
      />
      <button onClick={handleClick}>追加</button>
    </>
  );
};

export default TodoInput;
