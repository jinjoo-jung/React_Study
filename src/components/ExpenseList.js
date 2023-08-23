import React, { Component } from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

// 클래스 -> 함수로 변경
const ExpenseList = ({ expenses, handleDelete, handleEdit }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDlete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>

      <button className="btn">목록 지우기</button>
    </>
  );
};

export default ExpenseList;
