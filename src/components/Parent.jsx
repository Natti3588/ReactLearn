import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, double } from "../store/counterSlice";
import Child from "./Child";

// わざと重い計算をシミュレーション
const heavyCalculation = (num) => {
  console.log("⏳ 重い計算を実行中...");
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += num;
  }
  return result;
};

const Parent = () => {
  console.log("🔄 Parent がレンダリングされました");

  // storeから値を読み込む
  const count = useSelector((state) => state.counter.count);

  // dispatch関数を取得
  const dispatch = useDispatch();

  // useCallbackで関数の参照を固定（依存配列の値が変わらない限り同じ関数を再利用）
  const handleCountReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  // ✅ useMemoあり：countが変わったときだけ重い計算を実行し、結果をキャッシュする
  const expensiveResult = useMemo(() => heavyCalculation(count), [count]);

  return (
    <>
      <Child onCountReset={handleCountReset} />
      <p>カウント: {count}</p>
      <p>重い計算の結果: {expensiveResult}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>リセット</button>
      <button onClick={() => dispatch(double())}>ダブル</button>
    </>
  );
};

export default Parent;
