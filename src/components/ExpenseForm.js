import React from "react";
import "./ExpenseForm.css";

// 클래스 -> 함수로 변경
const ExpenseForm = ({
  handleCharge,
  charge,
  amount,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">지출 항목</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="예) 렌트비"
            onClick={handleCharge}
            value={charge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">비용</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="예) 100"
            onClick={handleAmount}
            value={amount}
          />
        </div>
      </div>
      <button className="btn" type="submit">
        제출
      </button>
    </form>
  );
};

export default ExpenseForm;
