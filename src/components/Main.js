import React, { useState } from "react";
import styleList from "../css/styleList.module.css";
import InputBox from "./InputBox";
import ListBox from "./ListBox";
import TitleBox from "./TitleBox";

const Main = () => {
  const [todo, setToDo] = useState("");
  const [paintToDo, setPaintToDo] = useState([]);
  return (
    <main className={styleList.toDoListBox}>
      <TitleBox />
      <InputBox
        todo={todo}
        setToDo={setToDo}
        paintToDo={paintToDo}
        setPaintToDo={setPaintToDo}
      />
      <ListBox todo={todo} paintToDo={paintToDo} setPaintToDo={setPaintToDo} />
    </main>
  );
};
export default Main;
