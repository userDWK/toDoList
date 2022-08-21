import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Todolist from "../routes/Todolist";

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Todolist />} />
      </Routes>
    </Router>
  );
};
export default RouterApp;
