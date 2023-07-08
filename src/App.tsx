import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Infut from "./Component/Infut";

import Todolist from "./Component/Todolist";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<Todo[]>([]);

  const handdelAdd = (e: React.FormEvent): void => {
    e.preventDefault();

    if (todo) {
      settodos([...todos, { id: Date.now(), todo, isDone: false }]);
      settodo("");
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <p className="heading">hello world</p>
      <Infut todo={todo} settodo={settodo} handdelAdd={handdelAdd} />
      <Todolist todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
