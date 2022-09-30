import * as React from 'react';
import type { RootState } from 'redux/store';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import { increment, decrement } from 'redux/counterSlice';

export function Counter() {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center flex-col w-full">
      <p>Counter: {count}</p>
      <div className="flex space-x-5 mt-5">
        <button
          type="button"
          onClick={() => dispatch(increment())}
          className="bg-blue-500 text-white w-20 py-1 rounded"
        >
          Inc
        </button>
        <button
          type="button"
          onClick={() => dispatch(decrement())}
          className="bg-blue-500 text-white w-20  py-1 rounded"
        >
          Dec
        </button>
      </div>
    </div>
  );
}
