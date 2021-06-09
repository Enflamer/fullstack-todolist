import React from "react";
import { DELETE_TODO, TOGGLE_TODO } from "../context/types";

export default function Todo({ todo, dispatch }) {
  return (
    <div
      className="flex justify-between bg-white px-10 rounded-2xl my-6"
      onClick={() => dispatch({ type: TOGGLE_TODO, payload: { id: todo.id } })}
    >
      <input className='checked:bg-green-600 checked:border-transparent' readOnly checked={todo.completed} type="checkbox"></input>
      <div className="text-4xl">{todo.title}</div>

      <button
        onClick={() =>
          dispatch({ type: DELETE_TODO, payload: { id: todo.id } })
        }
        className="py-1 text-xl text-white align-middle px-3  transition duration-500 ease-in-out bg-blue-600 hover:bg-red-700 transform hover:-translate-y-1 hover:scale-110 rounded-full"
      >
        X
      </button>
    </div>
  );
}
