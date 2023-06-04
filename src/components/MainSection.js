import React, { useState } from "react";
import Inbox from "./Inbox";
import Next7Days from "./Next7Days";
import Today from "./Today";

const list = [
  { number: 1, title: "Let's complete this", date: new Date("9/27/2022") },
  { number: 2, title: "Should sleep at 9pm", date: new Date("9/28/2022") },
  { number: 3, title: "Should complete react", date: new Date("10/5/2022") },
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
  function countDays(date) {
    let date1 = new Date();
    let time = date - date1;
    let days = parseInt(time / (24 * 60 * 60 * 1000));
    return days;
  }
  const todayList = originalList.filter((item) => countDays(item.date) === 0);
  const weekLIst = originalList.filter(
    (item) => countDays(item.date) >= 0 && countDays(item.date) <= 7
  );
  return (
    <div className="main-section">
      {active === "INBOX" && <Inbox list={originalList} append={addTodo} />}
      {active === "TODAY" && <Today list={todayList} />}
      {active === "NEXT" && <Next7Days list={weekLIst} />}
    </div>
  );
};

export default MainSection;
