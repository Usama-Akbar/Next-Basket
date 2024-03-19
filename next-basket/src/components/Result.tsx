// components/Counter.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const Result: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <span>{count}</span>
    </div>
  );
};
