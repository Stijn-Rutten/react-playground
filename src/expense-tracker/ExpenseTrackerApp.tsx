import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Groceries",
      amount: 50.25,
      category: "Food",
    },
    {
      id: 2,
      description: "Gas",
      amount: 35.75,
      category: "Transportation",
    },
    {
      id: 3,
      description: "Restaurant",
      amount: 75.5,
      category: "Food",
    },
    {
      id: 4,
      description: "Movie tickets",
      amount: 20.0,
      category: "Entertainment",
    },
    {
      id: 5,
      description: "Phone bill",
      amount: 45.0,
      category: "Utilities",
    },
    {
      id: 6,
      description: "Clothing",
      amount: 60.8,
      category: "Shopping",
    },
    {
      id: 7,
      description: "Gym membership",
      amount: 30.0,
      category: "Fitness",
    },
    {
      id: 8,
      description: "Internet bill",
      amount: 55.5,
      category: "Utilities",
    },
    {
      id: 9,
      description: "Books",
      amount: 25.75,
      category: "Education",
    },
    {
      id: 10,
      description: "Home decor",
      amount: 40.2,
      category: "Home",
    },
  ]);

  const onDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category == selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={setSelectedCategory} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
    </div>
  );
}
