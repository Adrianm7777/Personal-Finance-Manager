import api from "./axios";

export interface IIncome {
  id: number;
  amount: string;
  source: string;
  date: string;
}

export interface IExpenses {
  id: number;
  amount: string;
  category: string;
  date: string;
}

export const fetchData = async (): Promise<{
  incomes: IIncome[];
  expenses: IExpenses[];
}> => {
  try {
    const [incomeRes, expenseRes] = await Promise.all([
      api.get("/incomes/"),
      api.get("/expenses/"),
    ]);

    return {
      incomes: incomeRes.data,
      expenses: expenseRes.data,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
