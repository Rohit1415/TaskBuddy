import React, { useState , useRef , useEffect } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, settodos }: Props) => {
  const [edit, setedit] = useState<Boolean>(false);
  const [editText, seteditText] = useState<string>(todo.todo);

  //DONE FUNCTION
  const handelDone = (id: number) => {
    settodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  //DELETE FUNCTION
  const handelDelete = (id: number) => {
    settodos(todos.filter((x) => x.id !== id));
  };
  //EDIT FUNCTION
  const handelEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    settodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editText } : todo))
    );
    setedit(false);
  };

  //FOR AUTO FOXUS USE THE "useref hook"
  const inputref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputref.current?.focus()
  }, [edit])
  

  return (
    <form className="todos_single" onSubmit={(e) => handelEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputref}
          value={editText}
          onChange={(e) => seteditText(e.target.value)}
          className="todos_single--text"
        />
      ) : todo.isDone ? (
        <s className="todos_single--text">{todo.todo}</s>
      ) : (
        <span className="todos_single--text">{todo.todo}</span>
      )}
      <div>
        <span
          className="icon_single"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setedit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon_single" onClick={() => handelDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon_single" onClick={() => handelDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
