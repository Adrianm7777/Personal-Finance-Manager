"use client";
import React, { useEffect, useState } from "react";
import { postIncome, postExpenses } from "@/lib/postData";
import { IIncome, IExpenses } from "@/lib/fetchData";

interface FormProps {
  initialIncomes: IIncome[];
  initialExpenses: IExpenses[];
}

const Form = ({ initialIncomes, initialExpenses }: FormProps) => {
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

  const [incomes, setIncomes] = useState<IIncome[]>(initialIncomes);
  const [expenses, setExpenses] = useState<IExpenses[]>(initialExpenses);

  useEffect(() => {
    setIncomes(initialIncomes);
    setExpenses(initialExpenses);
  }, [initialIncomes, initialExpenses]);

  const handleIncomeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newIncome = await postIncome(incomeForm);
      setIncomes((prevIncomes) => [...prevIncomes, newIncome]);
      setIncomeForm({ amount: "", source: "", date: "" });
    } catch (error) {
      console.error("Error adding income:", error);
    }
  };

  const handleExpenseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newExpense = await postExpenses(expenseForm);
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
      setExpenseForm({ amount: "", category: "", date: "" });
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <section className="mb-8 w-full max-w-xl">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Add Income</h3>
        <form onSubmit={handleIncomeSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Source</label>
            <input
              type="text"
              placeholder="Source"
              value={incomeForm.source}
              onChange={(e) =>
                setIncomeForm({ ...incomeForm, source: e.target.value })
              }
              className="border rounded-md p-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Amount</label>
            <input
              type="number"
              placeholder="Amount"
              value={incomeForm.amount}
              onChange={(e) =>
                setIncomeForm({ ...incomeForm, amount: e.target.value })
              }
              className="border rounded-md p-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              value={incomeForm.date}
              onChange={(e) =>
                setIncomeForm({ ...incomeForm, date: e.target.value })
              }
              className="border rounded-md p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            Add Income
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4">Add Expense</h3>
        <form onSubmit={handleExpenseSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Category</label>
            <input
              type="text"
              placeholder="Category"
              value={expenseForm.category}
              onChange={(e) =>
                setExpenseForm({ ...expenseForm, category: e.target.value })
              }
              className="border rounded-md p-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Amount</label>
            <input
              type="number"
              placeholder="Amount"
              value={expenseForm.amount}
              onChange={(e) =>
                setExpenseForm({ ...expenseForm, amount: e.target.value })
              }
              className="border rounded-md p-2"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Date</label>
            <input
              type="date"
              value={expenseForm.date}
              onChange={(e) =>
                setExpenseForm({ ...expenseForm, date: e.target.value })
              }
              className="border rounded-md p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition"
          >
            Add Expense
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
