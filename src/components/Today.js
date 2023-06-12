import React from "react";
import ListRender from "./ListRender";

const Today = ({ list }) => {
  const date = new Date();
  return (
    <div id="today-list">
      <ListRender list={list} />
    </div>
  );
};

export default Today;
