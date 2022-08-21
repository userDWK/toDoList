import React, { useState } from "react";
import styleList from "../css/styleList.module.css";
import PaintToDo from "./PaintToDo";

const ListBox = ({ todo, paintToDo, setPaintToDo }) => {
  return (
    <section className={styleList.listBox}>
      {paintToDo.map((todos, i) => {
        return (
          <PaintToDo
            key={todos.todo}
            todos={todos}
            i={i}
            paintToDo={paintToDo}
            setPaintToDo={setPaintToDo}
          />
        );
      })}
    </section>
  );
};

export default ListBox;
