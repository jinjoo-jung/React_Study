import React, { Component } from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";


const ExpenseList = (expenses, handleDelete) => {
    return (
      <>
        <ul className="list">
          {expense.map(expenses => {
            return <ExpenseItem 
            key={expense.id}
            expense={expenses} 
            handleDlete={handleDelete}
            >;
          })}
        </ul>
        <button className="btn">목록 지우기</button>

          );
  }

export default ExpenseList;
