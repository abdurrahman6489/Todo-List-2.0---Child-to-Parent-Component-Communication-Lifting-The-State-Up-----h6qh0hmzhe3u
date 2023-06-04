import React from "react";
import ListRender from "./ListRender";

const Next7Days = ({ list }) => {
  const date = new Date();

  return (
    <div id="next-list">
      <ListRender list={list} />
    </div>
  );
};

export default Next7Days;
