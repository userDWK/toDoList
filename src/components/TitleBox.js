import React, { useState } from "react";
import styleList from "../css/styleList.module.css";

const TitleBox = () => {
  return (
    <section className={styleList.titleBox}>
      <h2>오늘 할 일</h2>
    </section>
  );
};
export default TitleBox;
