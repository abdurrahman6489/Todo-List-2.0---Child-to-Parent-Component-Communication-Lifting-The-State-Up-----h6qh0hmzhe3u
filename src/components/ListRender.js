import React from "react";

const ListRender = ({ list }) => {
  return (
    <>
      {list.map((item) => {
        return (
          <div className="box" key={item.number}>
            <div className="task">
              {item.title}  ({item.date.toLocaleDateString()})
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListRender;
