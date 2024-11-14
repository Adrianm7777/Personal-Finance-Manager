"use client";
import React, { useState } from "react";
import { postIncome, postExpenses } from "@/lib/postData";
import { IIncome, IExpenses } from "@/lib/fetchData";

interface FormProps {
  incomes: IIncome[];
  expenses: IExpenses[];
}

const Form = ({ incomes, expenses }: FormProps) => {
  const [incomeForm, setIncomeForm] = useState({
    amount: "",
    source: "",
    date: "",
  });
  const [expenseForm, setExpenseForm] = useState({
    amount: "",
    category: "",
    date: "",
  });

  const handleIncomeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newIncome = await postIncome(incomeForm);
      incomes.push(newIncome);
      setIncomeForm({ amount: "", source: "", date: "" });
    } catch (error) {
      console.error("Error adding income:", error);
    }
  };

  const handleExpenseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newExpense = await postExpenses(expenseForm);
      expenses.push(newExpense);
      setExpenseForm({ amount: "", category: "", date: "" });
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold">Add Income</h3>
      <form onSubmit={handleIncomeSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Source"
          value={incomeForm.source}
          onChange={(e) =>
            setIncomeForm({ ...incomeForm, source: e.target.value })
          }
          className="border p-2 mr-2"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={incomeForm.amount}
          onChange={(e) =>
            setIncomeForm({ ...incomeForm, amount: e.target.value })
          }
          className="border p-2 mr-2"
          required
        />
        <input
          type="date"
          value={incomeForm.date}
          onChange={(e) =>
            setIncomeForm({ ...incomeForm, date: e.target.value })
          }
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Income
        </button>
      </form>

      <h3 className="text-lg font-semibold">Add Expense</h3>
      <form onSubmit={handleExpenseSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Category"
          value={expenseForm.category}
          onChange={(e) =>
            setExpenseForm({ ...expenseForm, category: e.target.value })
          }
          className="border p-2 mr-2"
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={expenseForm.amount}
          onChange={(e) =>
            setExpenseForm({ ...expenseForm, amount: e.target.value })
          }
          className="border p-2 mr-2"
          required
        />
        <input
          type="date"
          value={expenseForm.date}
          onChange={(e) =>
            setExpenseForm({ ...expenseForm, date: e.target.value })
          }
          className="border p-2 mr-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Add Expense
        </button>
      </form>
    </section>
  );
};

export default Form;
