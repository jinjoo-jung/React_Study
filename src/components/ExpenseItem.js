import React, { Component } from "react";
// rcc 컴포넌트 생성
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from "react-icons/md";

// 클래스 -> 함수로 변경
//
const ExpenseItem = ({ expense, handleDelete }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount">{expense.amount} 원</span>
      </div>
      <div>
        <button className="edit-btn">
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          onClick={() => {
            handleDelete(expense.id);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
