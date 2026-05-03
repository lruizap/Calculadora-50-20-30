export type BudgetCategory = {
  title: string;
  percentage: number;
  amount: number;
  description: string;
};

export type BudgetCalculation = {
  salary: number;
  categories: BudgetCategory[];
};
