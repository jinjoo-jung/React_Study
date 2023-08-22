import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default class App extends Component {
  initialExpenses = [
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "교통비", amount: 400 },
    { id: 3, charge: "식비", amount: 1200 },
  ];

  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, charge: "렌트비", amount: 1600 },
        { id: 2, charge: "교통비", amount: 400 },
        { id: 3, charge: "식비", amount: 1200 },
      ]
    };
  }

  this.props.initialExpenses

  this.state.expenses

  handleDelete = (id) => {
    const newExpenses = this.initialExpenses.filter(
      (expense) => expense.id !== id
    );
    console.log("clicked");
    console.log(newExpenses);
  };

  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseForm />
        </div>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseList
            expenses={this.state.expenses}
            handleDelete={this.handleDelete}
          />
        </div>

        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}
        >
          <p style={{ fontSize: "2rem" }}>
            총지출:
            <span>원</span>
          </p>
        </div>
      </main>
    );
  }
}
