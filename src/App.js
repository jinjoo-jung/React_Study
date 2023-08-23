import logo from "./logo.svg";
import "./App.css";
import { Component, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import userEvent from "@testing-library/user-event";
import Alert from "./components/Alert";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ]);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const [alert, setAlert] = useState({ show: false, type: "", text: "" });

  const clearItems = () => {};

  const handleEdit = (id) => {
    const expense = expenses.find((item) => itme.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  const handleAlert = (type, text) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false, type: "", text: "" });
    }, 5000);
  };

  // charge === 식비 , state ===> update ====> setCharge
  //setState() setExpenses()

  const handleSubmit = (event) => {
    // 리프레시 안됨. 스태이트 초기화 안됨
    event.preventDefault();

    if (charge !== "" && amount > 0) {
      if (edit) {
      } else {
      } // expenses state에 새로운 객체 만들어서 추가하기 state update
      // state update 할 때는 항상 불변성을 지켜줘야 합니다.
      // 불변성을 지킨다는 말은 이전에 있던 값을 건드리지 않고 새로운 값을 만들어서 교체를 해주면 된다.

      // 새로운 객체 생성
      // 속성이랑 값이 같으면 chatge, 이런식으로 하나로 쓸 수 있음
      const newExpense = { id: crypto.randomUUID(), charge, amount };

      // 복사 ===> spread operator
      // 안에 있는 값은 같지만 서로 다른 참조 주소를 가지고 있음
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setCharge("");
      setAmount(0);

      handleAlert({ type: "success", text: "아이템이 생성되었습니다." });
    } else {
      console.log("먼저 입력해주세요.");
      handleAlert({
        type: "danger",
        text: "charge는 빈 값일 수 없으며 amount는 0보다 커야합니다.",
      });
    }
  };

  const handleCharge = (event) => {
    console.log(event.target.value);
    setCharge(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.valueAsNumber);
    // Number(event.target.value)
  };

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpenses);
    setCharge("");
    setAmount(0);
  };

  return (
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}

      <h1>예산 계산기</h1>

      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
      </div>

      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList expenses={expenses} handleDelete={handleDelete} />
      </div>

      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
      >
        <p style={{ fontSize: "2rem" }}>
          총지출:
          <span>
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}{" "}
            원
          </span>
        </p>
      </div>
    </main>
  );
};

export default App;
