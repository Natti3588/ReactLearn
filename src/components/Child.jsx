import { memo, useRef, useEffect } from "react"; // 無駄な再レンダリングを防ぐためにmemoをインポート
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../store/userSlice"

// 関数に名前をつけてから memo で囲う（DevTools で名前が表示されるようになる）
const Child = ({ onCountReset }) => {
  console.log("🔄 Child がレンダリングされました");

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
      <button onClick={handleReset}>名前リセット</button>
      <button onClick={onCountReset}>カウントリセット</button>
    </>
  );
};

export default memo(Child);
