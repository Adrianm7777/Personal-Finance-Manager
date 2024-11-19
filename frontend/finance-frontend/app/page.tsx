"use server";

import React from "react";
import { fetchData, IIncome, IExpenses } from "@/lib/fetchData";
import Form from "@/components/Form";

const Page = async () => {
  let data: { incomes: IIncome[]; expenses: IExpenses[] };

  try {
    data = await fetchData();
  } catch (error) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        <p className="text-red-500 text-xl">Error fetching data</p>
      </div>
    );
  }

  const { incomes, expenses } = data;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-8">Dashboard</h2>

        <Form initialIncomes={incomes} initialExpenses={expenses} />

        <section className="mt-10">
          <h3 className="text-2xl font-semibold text-center mb-4">Incomes</h3>
          <ul className="list-disc list-inside bg-gray-50 rounded-md p-4">
            {incomes.map((income) => (
              <li key={income.id} className="mb-2">
                <span className="font-medium">{income.source}:</span> $
                {income.amount}
                <span className="text-sm text-gray-600"> on {income.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Expenses</h3>
          <ul className="list-disc list-inside bg-gray-50 rounded-md p-4">
            {expenses.map((expense) => (
              <li key={expense.id} className="mb-2">
                <span className="font-medium">{expense.category}:</span> $
                {expense.amount}
                <span className="text-sm text-gray-600">
                  {" "}
                  on {expense.date}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Page;
