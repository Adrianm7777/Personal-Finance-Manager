"use server";
import React from "react";
import { fetchData, IIncome, IExpenses } from "@/lib/fetchData";

const Page = async () => {
  let data: { incomes: IIncome[]; expenses: IExpenses[] };

  try {
    data = await fetchData();
  } catch (error) {
    return <p>Error fetching data</p>;
  }

  const { incomes, expenses } = data;
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <section className="mb-8">
        <h3 className="text-lg font-semibold">Incomes</h3>
        <ul className="list-disc list-inside">
          {incomes.map((income) => (
            <li key={income.id}>
              {income.source}: ${income.amount} on {income.date}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Expenses</h3>
        <ul className="list-disc list-inside">
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.category}: ${expense.amount} on {expense.date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Page;
