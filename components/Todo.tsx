import React from "react";
import { useRecoilState } from "recoil";
import { Todo } from "../atoms/atoms";
import { todoListSelector } from "../selectors/selector";

function Todo({ id }: { id: number }) {
  // fetching the specific todo by it's id
  const [todo, setTodo] = useRecoilState(todoListSelector(id));

  console.log(todo);

  return (
    <div>
      <input
        type="text"
        value={todo?.title}
        onChange={(e) => {
          setTodo(
            (currentTodo) => ({ ...currentTodo, title: e.target.value } as Todo)
          );
        }}
        placeholder="todo title"
        className="p-2 text-md border-2 border-blue-500 outline-none rounded-lg mb-2"
      />
    </div>
  );
}

export default Todo;
