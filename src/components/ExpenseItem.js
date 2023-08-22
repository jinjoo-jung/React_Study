import React, { Component } from "react";
// rcc 컴포넌트 생성
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from "react-icons/md";

export default class ExpenseItem extends Component {
  render() {
    this.props.initialExpenses = this.props.initialExpenses;
    return (
      <li className="item">
        <div className="info">
          <span className="expense">{this.props.charge}</span>
          <span className="amount">{this.props.amount} 원</span>
        </div>
        <div>
          <button className="edit-btn">
            <MdEdit />
          </button>
          <button className="clear-btn">
            onClick
            {() => {
              this.props.handleDelete(this.props.expense.id);
            }}
            <MdDelete />
          </button>
        </div>
      </li>
    );
  }
}
