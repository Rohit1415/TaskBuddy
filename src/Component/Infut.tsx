import React, { useRef } from "react";
import "./style.css";

interface props {
  todo: string;
  settodo: React.Dispatch<React.SetStateAction<string>>;
  handdelAdd: (e: React.FormEvent) => void;
}

const Infut: React.FC<props> = ({ todo, settodo, handdelAdd }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handdelAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input 
        ref={inputRef}
        type="text"
        placeholder="Enter A task"
        className="input_box"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />

      <button type="submit" className="input_button">
        Go
      </button>
    </form>
  );
};

export default Infut;
