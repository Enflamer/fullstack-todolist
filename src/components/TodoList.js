import React, { useReducer, useState, useRef } from "react";
import Todo from "./Todo";
import { TodoState } from "../context/TodoState";

export default function TodoList() {
  const [state, dispatch] = useReducer(TodoState, []);
  const [inputValue, setInputValue] = useState("");
  const textInput = useRef(null);

  function handleEmptyInputError() {
    const input = document.getElementById("inputToDo");
    const helper = document.getElementById("helper");
    textInput.current.focus();
    helper.classList.toggle("invisible");
    input.classList.add("border-red-500");
    setTimeout(() => {
      input.classList.remove("border-red-500");
      helper.classList.toggle("invisible");
    }, 2000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue === "" || e.target.value === null) {
      return handleEmptyInputError();
    } else {
      dispatch({ type: "ADD_TODO", payload: { title: inputValue } });
      setInputValue("");
      textInput.current.focus();
    }
  }

  return (
    <>
      <form
        className="container rounded-lg mt-60 mx-auto w-1/2 px-4 py-4 bg-gray-600"
        onSubmit={handleSubmit}
      >
        <h1 className="text-7xl text-center  text-white">ToDo List</h1>
        <div
          id="helper"
          className="flex justify-center pt-4 text-red-500 text-lg invisible"
        >
          <div className="">Add something!</div>
          <svg
            className="animate-bounce w-6 h-6 text-amber-900"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>

        <div className="flex flex-auto flex-wrap justify-between px-10 py-6">
          <input
            id="inputToDo"
            className="text-lg text-center focus:border-blue-500  border-2 border-solid rounded-full px-32"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ref={textInput}
          ></input>
          <button
            onClick={handleSubmit}
            className="text-xl flex transition duration-500 ease-in-out bg-blue-600 hover:bg-green-600 transform hover:-translate-y-1 hover:scale-110 py-4 px-20 rounded-full text-white "
          >
            Add
          </button>
        </div>
        {state.map((todo) => (
          <Todo todo={todo} key={todo.id} dispatch={dispatch} />
        ))}
      </form>
    </>
  );
}
