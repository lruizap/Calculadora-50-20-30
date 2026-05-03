import { Router } from "express";
import { calculateBudgetController } from "../controllers/budgetController";

export const budgetRoutes = Router();

budgetRoutes.post("/calculate", calculateBudgetController);
