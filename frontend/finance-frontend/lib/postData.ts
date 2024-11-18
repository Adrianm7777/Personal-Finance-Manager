import api from "./axios";
import { IExpenses, IIncome } from "./fetchData";

export const postIncome = async (
  income: Omit<IIncome, "id">
): Promise<IIncome> => {
  const response = await api.post("/incomes/", income);

  return response.data;
};

export const postExpenses = async (
  expenses: Omit<IExpenses, "id">
): Promise<IExpenses> => {
  const response = await api.post("/expenses", expenses);

  return response.data;
};
