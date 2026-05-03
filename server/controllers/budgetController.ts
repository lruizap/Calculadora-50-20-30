import type { Request, Response } from "express";
import { calculateBudget } from "../services/budgetServices";

export function calculateBudgetController(req: Request, res: Response): void {
  const { salary } = req.body;

  if (typeof salary !== "number" || salary <= 0) {
    res.status(400).json({
      message: "El sueldo debe ser un número mayor que 0.",
    });
    return;
  }

  const result = calculateBudget(salary);

  res.status(200).json(result);
}
