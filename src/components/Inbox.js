import React, { useState, useRef } from "react";

var curr = new Date();
curr.setDate(curr.getDate());
var date = curr.toISOString().substring(0, 10);

const object = { title: "", date: date };

const Inbox = (props) => {
  const [newTask, setNewTask] = useState(false);
  const [newTodo, setNewTodo] = useState(object);
  function addNewTask() {
    setNewTask(true);
  }
  function cancelTask() {
    setNewTask(false);
    setNewTodo(object);
  }
  function handleChange(event) {
    let id = event.target.id;
    let value = event.target.value;

    setNewTodo((obj) => ({ ...obj, [id]: value }));
    return;
  }
  function handleClick(event) {
    event.preventDefault();
    const { title, date } = newTodo;
    let currentDate = new Date(date);
    append({ title, date: currentDate });
    setNewTask(false);
    setNewTodo(object);
  }

  return (
    <div>
      <h3>Inbox</h3>
      {!newTask && (
        <button className="new" onClick={addNewTask} id="add-new">
          +Add New
        </button>
      )}
      {newTask && (
        <form className="newtask-box">
          <input
            type="text"
            id="title"
            value={newTodo.title}
            onChange={handleChange}
          ></input>
          <div className="buttons">
            <button className="new" id="add-list" onClick={handleClick}>
              Add Task
            </button>
            <button className="new" onClick={cancelTask}>
              Cancel
            </button>
            <input
              type="date"
              onChange={handleChange}
              defaultValue={date}
              id="date"
            ></input>
          </div>
        </form>
      )}
      <div id="inbox">
        {list.map((list, index) => {
          return (
            <div className="box" key={index}>
              <div className="task">
                <div id="code">
                  {list.title} ({list.date.toLocaleDateString()})
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
