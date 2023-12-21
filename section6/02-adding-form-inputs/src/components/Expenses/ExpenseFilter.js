import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    console.log('Filter', props);

    props.onChangeFilter(event.target.value); // select option 에서 선택한 값을 상위 엘리먼트로 보낸다.
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
