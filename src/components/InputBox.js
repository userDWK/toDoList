import React, { useMemo, useState } from "react";
import styleList from "../css/styleList.module.css";

const InputBox = ({ todo, setToDo, paintToDo, setPaintToDo }) => {
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setToDo(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setPaintToDo((prev) => [
      ...prev,
      { id: prev.length + 1, todo, checked: false },
    ]);
    setToDo("");
  };
  return (
    <section className={styleList.inputBox}>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={todo}
          name="toDoText"
          placeholder="input todo.."
        />
        <input type="submit" name="toDoSub" value="추가"></input>
      </form>
    </section>
  );
};
export default InputBox;
