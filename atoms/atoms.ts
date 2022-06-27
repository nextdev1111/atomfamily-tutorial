import { atom } from "recoil";

export type Todo = {
  id: number;
  title: string;
};

export const todoListAtom = atom<Todo[]>({
  key: "todoListA",
  default: [],
});
