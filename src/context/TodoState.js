import React from "react";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./types";

export const TodoState = (state, action) => {
  function newTodo(title) {
    return { id: Date.now(), title: title, completed: false };
  }

  switch (action.type) {
    case ADD_TODO: {
      return [...state, newTodo(action.payload.title)];
    }
    case DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
  }
};
