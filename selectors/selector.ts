import { DefaultValue, selectorFamily } from "recoil";
import { todoListAtom } from "../atoms/atoms";

// selector Family
export const todoListSelector = selectorFamily({
  key: "todoListSF",
  // this is return the specific todo when given it's id
  get:
    (id: number) =>
    ({ get }) => {
      const todos = get(todoListAtom);

      // id
      const todo = todos.find((item) => item.id === id);

      return todo;
    },
  // this will help us set the data of the specific todo
  set:
    (id: number) =>
    ({ get, set }, newValue) => {
      const todos = get(todoListAtom);

      const todoIndex = todos.findIndex((item) => item.id === id);

      const newTodos = [...todos];

      if (newValue instanceof DefaultValue) {
        return newTodos[todoIndex];
      } else if (newValue === undefined) {
        return newTodos[todoIndex];
      }

      newTodos[todoIndex] = newValue;

      set(todoListAtom, newTodos);
    },
});
