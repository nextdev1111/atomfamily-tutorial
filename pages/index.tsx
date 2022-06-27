import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListAtom } from "../atoms/atoms";
import Todo from "../components/Todo";

const Home: NextPage = () => {
  // getting the todos
  const [todos, setTodos] = useRecoilState(todoListAtom);

  // insert todo
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title");

    if (title === null) {
      return;
    }

    const nextTodoId = todos.length;

    setTodos([...todos, { id: nextTodoId, title: title as string }]);

    e.currentTarget.reset();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {/* Todos */}
      {todos.map((todo, index) => (
        <Todo key={index} id={todo.id} />
      ))}

      {/* Input Box for adding todos */}
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="enter new todo"
            className="p-2 text-md border-2 border-purple-500 outline-none rounded-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default Home;
