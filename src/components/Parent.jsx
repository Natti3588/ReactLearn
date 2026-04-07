import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, double } from "../store/counterSlice";
import Child from "./Child";

const Parent = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <Child />
      <p>カウント: {count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>リセット</button>
      <button onClick={() => dispatch(double())}>ダブル</button>
    </>
  );
};

export default Parent;
