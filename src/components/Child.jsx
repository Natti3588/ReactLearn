import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../store/userSlice"

const Child = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const name = useSelector((state) => state.user.name);

  useEffect(() => {
    inputRef.current.focus();
    console.log("フォーカスしました！", inputRef.current);
  }, []);

  const handleReset = () => {
    dispatch(setName(""));
    inputRef.current.focus();
  };

  return (
    <>
      <input
        ref={inputRef}
        value={name} // Parentコンポーネントの全部消しを実行したけれど、Childコンポーネントのinput要素の中はリセットされなかった。 value属性を設定するとreactでも管理できるようになります。
        onChange={(e) => dispatch(setName(e.target.value))}
      />
      <button onClick={handleReset}>リセット</button>
    </>
  );
};

export default Child;
