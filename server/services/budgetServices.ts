import type { BudgetCalculation, BudgetCategory } from "../types/budget";

const categories = [
  {
    title: "Necesidades",
    percentage: 50,
    description: "Alquiler, comida, transporte, facturas y gastos básicos.",
  },
  {
    title: "Ahorro e inversión",
    percentage: 20,
    description:
      "Fondo de emergencia, fondos indexados, oro, BTC u otros objetivos.",
  },
  {
    title: "Ocio",
    percentage: 30,
    description: "Salir, ropa, suscripciones, viajes, hobbies y caprichos.",
  },
];

export function calculateBudget(salary: number): BudgetCalculation {
  const resultCategories: BudgetCategory[] = categories.map((category) => {
    return {
      title: category.title,
      percentage: category.percentage,
      amount: salary * (category.percentage / 100),
      description: category.description,
    };
  });

  return {
    salary,
    categories: resultCategories,
  };
}
