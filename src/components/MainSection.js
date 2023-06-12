import React, { useState } from "react";
import Inbox from "./Inbox";
import Next7Days from "./Next7Days";
import Today from "./Today";

const list = [
  { number: 1, title: "Let's complete this", date: new Date("6/12/2023") },
  { number: 2, title: "Should sleep at 9pm", date: new Date("5/28/2023") },
  { number: 3, title: "Should complete react", date: new Date("10/5/2023") },
];

const MainSection = ({ active }) => {
  const [originalList, setOriginalList] = useState(list);
  function addTodo({ title, date }) {
    console.log(title, date);
    setOriginalList((oldList) => [
      ...oldList,
      { number: oldList.length, title, date },
    ]);
  }
  function isInWeek(date) {
    return (
      date.getDate() - new Date().getDate() >= 0 &&
      date.getDate() - new Date().getDate() <= 7 &&
      date.getMonth() == new Date().getMonth() &&
      date.getYear() == new Date().getYear()
    );
  }
  function isToday(date) {
    return (
      date.getDate() == new Date().getDate() &&
      date.getMonth() == new Date().getMonth() &&
      date.getYear() == new Date().getYear()
    );
  }
  const todayList = originalList.filter((item) => isToday(item.date));
  const weekLIst = originalList.filter((item) => isInWeek(item.date));
  return (
    <div className="main-section">
      {active === "INBOX" && <Inbox list={originalList} append={addTodo} />}
      {active === "TODAY" && <Today list={todayList} />}
      {active === "NEXT" && <Next7Days list={weekLIst} />}
    </div>
  );
};

export default MainSection;
