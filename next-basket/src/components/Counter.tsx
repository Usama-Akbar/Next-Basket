// components/Counter.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { increment, decrement } from "../features/counters/counterSlice";

export const Counter: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
