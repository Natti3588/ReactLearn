import { useRef, useEffect } from "react";

const Child = ({ name, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    console.log("フォーカスしました！", inputRef.current);
  }, []);

  const handleReset = () => {
    onChange("");
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        value={name} // Parentコンポーネントの全部消しを実行したけれど、Childコンポーネントのinput要素の中はリセットされなかった。 value属性を設定するとreactでも管理できるようになります。
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={handleReset}>リセット</button>
    </>
  );
};

export default Child;
