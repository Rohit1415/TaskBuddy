import React from "react";
import "./style.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todolist: React.FC<Props> = ({ todos, settodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((x) => {
        return (
          // <li>{x.todo}</li>
          <SingleTodo todo={x} key={x.id} todos={todos} settodos={settodos} />
        )
      })}
    </div>
  )
}

export default Todolist;
