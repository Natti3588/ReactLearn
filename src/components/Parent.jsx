import { useEffect, useState, useReducer } from "react";
import Child from "./Child";

// 初期状態の定義
const initialState = { name: "", count: 0, seconds: 0 };

// Reducer関数を定義 第一引数に（state）第二引数に（action）を渡す。
// 第二引数は分割代入で記述するとシンプルになる。
const appReducer = (state, { type, value }) => {
  switch (type) {
    case "set_name":
      return { ...state, name: value };
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "double":
      return { ...state, count: state.count * 2 };
    case "reset_all":
      return initialState;
    default:
      return state;
  }
};

const Parent = () => {
  // const [name, setName] = useState("");
  // const [count, setCount] = useState(0);
  // const [seconds, setSeconds] = useState(0);

  const [state, dispatch] = useReducer(appReducer, initialState);

  // useEffect(() => {
  //   console.log("タイマー開始！")
  //   const timer = setInterval(() => {
  //     setSeconds(prev => prev + 1)
  //   }, 1000)

  //   // クリーンアップ
  //   return () => {
  //     console.log("タイマー停止！")
  //     clearInterval(timer)
  //   }
  // }, [])

  useEffect(() => {
    document.title = state.name || "React App";
    if (state.name.length >= 5) {
      document.title = "５文字以上が入力";
    }

    console.log("useEffectが実行されました！ name:", name);
  }, [state.name]);

  return (
    <>
      <Child
        name={state.name}
        onChange={(value) => dispatch({ type: "set_name", value })}
      />
      <p>カウント: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>

      <button onClick={() => dispatch({ type: "reset" })}>リセット</button>
      <button onClick={() => dispatch({ type: "double" })}>ダブル</button>
      <button onClick={() => dispatch({ type: "reset_all" })}>
        全部リセットボタン
      </button>
      <p>経過時間: {state.seconds}秒</p>
    </>
  );
};

export default Parent;
