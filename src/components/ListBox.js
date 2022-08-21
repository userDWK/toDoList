import React, { useState } from "react";
import styleList from "../css/styleList.module.css";

const ListBox = ({ todo, paintToDo, setPaintToDo }) => {
  const onClick = (e) => {
    e.stopPropagation();
    const {
      target: { name },
    } = e;
    let content;
    if (name === "del") {
      content = [];
      paintToDo.forEach((el, i) => {
        if (parseInt(el.id) !== parseInt(e.target.parentNode.id)) {
          el.id = content.length + 1;
          content = [...content, el];
        }
      });
    } else if (name === "check") {
      content = [...paintToDo];
      content.forEach((el) => {
        if (parseInt(el.id) === parseInt(e.target.parentNode.id))
          el.checked = !el.checked;
      });
    }
    setPaintToDo(content);
  };
  return (
    <section className={styleList.listBox}>
      {paintToDo.map((todos, i) => {
        return (
          <div id={i + 1} className={styleList.toDoBox} key={i + 1}>
            <button name="del" className={styleList.del} onClick={onClick}>
              X
            </button>
            <div>
              {todos.checked ? (
                <span className={styleList.checking}>{todos.todo}</span>
              ) : (
                <span>{todos.todo}</span>
              )}
            </div>
            <button name="check" className={styleList.check} onClick={onClick}>
              V
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ListBox;
